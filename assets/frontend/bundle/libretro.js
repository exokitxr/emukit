/**
 * RetroArch Web Player
 *
 * This provides the basic JavaScript for the RetroArch web player.
 */
var BrowserFS = BrowserFS;

zip.workerScriptsPath = '/assets/frontend/bundle/js/';

function setupFileSystem() {
  return Promise.all([
    fetch('/assets/frontend/bundle/.index-xhr').then(res => res.json()),
    // fetch('/assets/cores/.index-xhr').then(res => res.json()),
    // fetch('/system/.index-xhr').then(res => res.json()),
    fetch('/assets/frontend/bundle/retroarch.cfg').then(res => res.arrayBuffer()),
    fetch('https://www.emuparadise.me/biosfiles/PS1_Bios_SCPH1001.zip')
      .then(res => res.blob())
      .then(blob => new Promise((accept, reject) => {
        zip.createReader(new zip.BlobReader(blob), zipReader => {
          zipReader.getEntries(entries => {
            const entry = entries.find(entry => /scph1001.bin/i.test(entry.filename));
            entry.getData(new zip.BlobWriter('application/octet-stream'), blob => {
              zipReader.close();

              const fr = new FileReader();
              fr.onload = e => {
                accept(e.target.result);
              };
              fr.onerror = err => {
                reject(err);
              };
              fr.readAsArrayBuffer(blob);
            });
          });
        }, err => {
          reject(err);
        });
      })),
    // fetch('/system/scph5501.bin').then(res => res.arrayBuffer()),
  ])
  .then(xhrs => {
    var mfs = new BrowserFS.FileSystem.MountableFileSystem();
    var afs1 = new BrowserFS.FileSystem.InMemory();
    var afs2 = new BrowserFS.FileSystem.InMemory();
    var xfs1 = new BrowserFS.FileSystem.XmlHttpRequest(xhrs[0], "/assets/frontend/bundle/");

    console.log('WEBPLAYER: initializing filesystem');
    mfs.mount('/home/web_user/retroarch/userdata', afs1);
    mfs.mount('/home/web_user/retroarch/system', afs2);

    mfs.mount('/home/web_user/retroarch/bundle', xfs1);
    BrowserFS.initialize(mfs);
    var BFS = new BrowserFS.EmscriptenFS();
    FS.mount(BFS, {
      root: '/home'
    }, '/home');
    console.log('WEBPLAYER: filesystem initialization successful');

    (() => {
      const name = 'retroarch.cfg';
      const dataView = new Uint8Array(xhrs[1]);
      FS.createDataFile('/', name, dataView, true, false);

      const data = FS.readFile(name, {
        encoding: 'binary',
      });
      FS.writeFile('/home/web_user/retroarch/userdata/' + name, data, {
        encoding: 'binary',
      });
      FS.unlink(name);
    })();
    (() => {
      const name = 'scph5501.bin';
      const dataView = new Uint8Array(xhrs[2]);
      FS.createDataFile('/', name, dataView, true, false);

      const data = FS.readFile(name, {
        encoding: 'binary',
      });
      FS.writeFile('/home/web_user/retroarch/system/' + name, data, {
        encoding: 'binary',
      });
      FS.unlink(name);
    })();

    // FS.mkdir('/home/web_user/retroarch/userdata/states');
    FS.mkdir('/home/web_user/retroarch/userdata/content');
    FS.mkdir('/home/web_user/retroarch/userdata/content/downloads');
  });
}

let renderer = null;
let scene = null;
let camera = null;
let screenQuad = null;
let inUserFrame = true;
let userState = null;
let sceneState = null;
function initRenderer() {
  if (navigator.xr) {
    delete navigator.xr;
  }
  const {canvas, ctx: context} = Module;
  renderer = new THREE.WebGLRenderer({
    canvas,
    context,
    // preserveDrawingBuffer: true,
  });
  renderer.autoClear = false;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.sortObjects = false;
  // renderer.vr.enabled = true;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 10 * 1024);
  camera.position.set(0, 1.5, 1);
  camera.rotation.order = 'YXZ';
  scene.add(camera);

  screenQuad = (() => {
    const defaultQuad = new THREE.PlaneBufferGeometry(2, 2, 1, 1);
    const vertexShader = [
      "varying vec2 vUv;",
      "void main(){",
        "vUv = uv;",
        "gl_Position = vec4(position.x, -position.y, 1.0, 1.0);",
      "}",
  	].join('\n');
    const fragmentShader = [
      `varying vec2 vUv;
      uniform sampler2D uTexture;
      void main() {
        gl_FragColor = texture2D(uTexture, vUv);
      }`
    ].join('\n');
    const texture = new THREE.Texture(
      null,
      THREE.UVMapping,
      THREE.RepeatWrapping,
      THREE.RepeatWrapping,
      THREE.LinearFilter,
      THREE.LinearFilter,
      THREE.RGBAFormat,
      THREE.UnsignedByteType,
      1
    );
    texture.flipY = false;

    window.addEventListener("resize", function() {
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    const coverImg = new Image(window.innerWidth, window.innerHeight);
    coverImg.onload = () => {
      texture.image = coverImg;
      texture.needsUpdate = true;

      requestAnimationFrame(() => {
        renderer.clear(true, true, true);
        scene.background = new THREE.Color(0xFFFFFF);
        renderer.render(scene, camera);
        scene.background = null;
      });
    };
    coverImg.onerror = err => {
      console.warn(err);
    };
    coverImg.src = '/assets/img/cover.png';
    const mesh = new THREE.Mesh(defaultQuad, new THREE.ShaderMaterial({
			uniforms: {
				uTexture: {
					type:'t',
					value: texture,
				},
      },
      vertexShader,
      fragmentShader,
      side: THREE.BackSide,
      depthTest: false,
      // depthWrite: false,
      transparent: true,
      alphaTest: 0.9,
		}));
    return mesh;
  })();
  scene.add(screenQuad);

  const oldBindVertexArray = context.bindVertexArray;
  const oldUseProgram = context.useProgram;
  const oldViewport = context.viewport;
  const oldScissor = context.scissor;
  const oldEnable = context.enable;
  const oldDisable = context.disable;
  const oldBindBuffer = context.bindBuffer;
  const oldBindFramebuffer = context.bindFramebuffer;
  const oldActiveTexture = context.activeTexture;
  const oldBindTexture = context.bindTexture;
  const oldClearColor = context.clearColor;
  const oldColorMask = context.colorMask;
  const oldDepthMask = context.depthMask;
  const oldFrontFace = context.frontFace;
  const oldCullFace = context.cullFace;
  const oldDepthFunc = context.depthFunc;
  const oldDepthRange = context.depthRange;
  const _wrapContext = (context, predicate) => {
    let vertexArrayValue = null;
    context.bindVertexArray = (bindVertexArray => function(newVertexArrayValue) {
      if (predicate()) {
        vertexArrayValue = newVertexArrayValue;
      }
      return bindVertexArray.apply(this, arguments);
    })(context.bindVertexArray);
    let program = null;
    context.useProgram = (useProgram => function(newProgram) {
      if (predicate()) {
        program = newProgram;
      }
      return useProgram.apply(this, arguments);
    })(context.useProgram);
    const viewportValue = [null, null, null, null];
    context.viewport = (viewport => function(x, y, w, h) {
      if (predicate()) {
        viewportValue[0] = x;
        viewportValue[1] = y;
        viewportValue[2] = w;
        viewportValue[3] = h;
      }
      return viewport.apply(this, arguments);
    })(context.viewport);
    const scissorValue = [null, null, null, null];
    context.scissor = (scissor => function(x, y, w, h) {
      if (predicate()) {
        scissorValue[0] = x;
        scissorValue[1] = y;
        scissorValue[2] = w;
        scissorValue[3] = h;
      }
      return scissor.apply(this, arguments);
    })(context.scissor);
    const enabled = new Map();
    context.enable = (enable => function(flag) {
      if (predicate()) {
        enabled.set(flag, true);
      }
      return enable.apply(this, arguments);
    })(context.enable);
    context.disable = (disable => function(flag) {
      if (predicate()) {
        enabled.set(flag, false);
      }
      return disable.apply(this, arguments);
    })(context.disable);
    const buffers = new Map();
    context.bindBuffer = (bindBuffer => function(target, buffer) {
      if (predicate()) {
        buffers.set(target, buffer);
      }
      return bindBuffer.apply(this, arguments);
    })(context.bindBuffer);
    const framebuffers = new Map();
    context.bindFramebuffer = (bindFramebuffer => function(target, framebuffer) {
      if (predicate()) {
        framebuffers.set(target, framebuffer);
      }
      return bindFramebuffer.apply(this, arguments);
    })(context.bindFramebuffer);
    let activeTextureValue = null;
    context.activeTexture = (activeTexture => function(newActiveTextureValue) {
      if (predicate()) {
        activeTextureValue = newActiveTextureValue;
      }
      return activeTexture.apply(this, arguments);
    })(context.activeTexture);
    const textures = new Map();
    context.bindTexture = (bindTexture => function(target, texture) {
      if (predicate()) {
        textures.set(target, texture);
      }
      return bindTexture.apply(this, arguments);
    })(context.bindTexture);
    const clearColorValue = [null, null, null, null];
    context.clearColor = (clearColor => function(r, g, b, a) {
      if (predicate()) {
        clearColorValue[0] = r;
        clearColorValue[1] = g;
        clearColorValue[2] = b;
        clearColorValue[3] = a;
      }
      return clearColor.apply(this, arguments);
    })(context.clearColor);
    const colorMaskValue = [null, null, null, null];
    context.colorMask = (colorMask => function(r, g, b, a) {
      if (predicate()) {
        colorMaskValue[0] = r;
        colorMaskValue[1] = g;
        colorMaskValue[2] = b;
        colorMaskValue[3] = a;
      }
      return colorMask.apply(this, arguments);
    })(context.colorMask);
    let depthMaskValue = null;
    context.depthMask = (depthMask => function(newDepthMask) {
      if (predicate()) {
        depthMaskValue = newDepthMask;
      }
      return depthMask.apply(this, arguments);
    })(context.depthMask);
    let frontFaceValue = null;
    context.frontFace = (frontFace => function(newFrontFace) {
      if (predicate()) {
        frontFaceValue = newFrontFace;
      }
      return frontFace.apply(this, arguments);
    })(context.frontFace);
    let cullFaceValue = null;
    context.cullFace = (cullFace => function(newFrontFace) {
      if (predicate()) {
        cullFaceValue = newCullFace;
      }
      return cullFace.apply(this, arguments);
    })(context.cullFace);
    let depthFuncValue = null;
    context.depthFunc = (depthFunc => function(newDepthFunc) {
      if (predicate()) {
        depthFuncValue = newDepthFunc;
      }
      return depthFunc.apply(this, arguments);
    })(context.depthFunc);
    const depthRangeValue = [null, null];
    context.depthRange = (depthRange => function(near, far) {
      if (predicate()) {
        depthRangeValue[0] = near;
        depthRangeValue[1] = far;
      }
      return depthRange.apply(this, arguments);
    })(context.depthRange);

    return {
      restore() {
        if (vertexArrayValue !== null) {
          oldBindVertexArray.call(context, vertexArrayValue);
        }
        if (program !== null) {
          oldUseProgram.call(context, program);
        }
        if (viewportValue[0] !== null) {
          oldViewport.call(context, viewportValue[0], viewportValue[1], viewportValue[2], viewportValue[3]);
        }
        if (scissorValue[0] !== null) {
          oldScissor.call(context, scissorValue[0], scissorValue[1], scissorValue[2], scissorValue[3]);
        }
        for (const k of enabled.keys()) {
          const v = enabled.get(k);
          if (v) {
            oldEnable.call(context, k);
          } else {
            oldDisable.call(context, k);
          }
        }
        for (const k of buffers.keys()) {
          const v = buffers.get(k);
          oldBindBuffer.call(context, k, v);
        }
        for (const k of framebuffers.keys()) {
          const v = framebuffers.get(k);
          oldBindFramebuffer.call(context, k, v);
        }
        if (activeTextureValue !== null) {
          oldActiveTexture.call(context, activeTextureValue);
        }
        for (const k of textures.keys()) {
          const v = textures.get(k);
          oldBindTexture.call(context, k, v);
        }
        if (clearColorValue[0] !== null) {
          oldClearColor.call(context, clearColorValue[0], clearColorValue[1], clearColorValue[2], clearColorValue[3]);
        }
        if (colorMaskValue[0] !== null) {
          oldColorMask.call(context, colorMaskValue[0], colorMaskValue[1], colorMaskValue[2], colorMaskValue[3]);
        }
        if (depthMaskValue !== null) {
          oldDepthMask.call(context, depthMaskValue);
        }
        if (frontFaceValue !== null) {
          oldFrontFace.call(context, frontFaceValue);
        }
        if (cullFaceValue !== null) {
          oldCullFace.call(context, cullFaceValue);
        }
        if (depthFuncValue !== null) {
          oldDepthFunc.call(context, depthFuncValue);
        }
        if (depthRangeValue[0] !== null) {
          oldDepthRange.call(context, depthRangeValue[0], depthRangeValue[1]);
        }
      },
      /* clear() {
        vertexArrayValue = null;
        viewportValue[0] = null;
        viewportValue[1] = null;
        viewportValue[2] = null;
        viewportValue[3] = null;
        scissorValue[0] = null;
        scissorValue[1] = null;
        scissorValue[2] = null;
        scissorValue[3] = null;
        enabled.clear();
        buffers.clear();
        framebuffers.clear();
        textures.clear();
        activeTextureValue = null;
        program = null;
        clearColorValue[0] = null;
        clearColorValue[1] = null;
        clearColorValue[2] = null;
        clearColorValue[3] = null;
      }, */
    };
  };
  userState = _wrapContext(context, () => inUserFrame);
  sceneState = _wrapContext(context, () => !inUserFrame);
}
function initScene() {
  const {canvas, ctx: context} = Module;

  scene.remove(screenQuad);
  screenQuad.geometry.dispose();
  screenQuad.material.dispose();
  screenQuad.material.uniforms.uTexture.value.dispose();
  screenQuad = null;

  renderer.clear(true, true, true);

  const ambientLight = new THREE.AmbientLight(0x808080);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 2);
  directionalLight.position.set(1, 2, 3);
  scene.add(directionalLight);

  /* const skyboxMesh = (() => {
    const geometry = new THREE.BoxBufferGeometry(100, 100, 100)
      .applyMatrix(new THREE.Matrix4().makeScale(-1, -1, -1));
    const material = new THREE.MeshPhongMaterial({
      color: 0x7E57C2,
    });
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
  })();
  scene.add(skyboxMesh); */

  // (() => {
    function sum(a) {
      let result = 0;
      for (let i = 0; i < a.length; i++) {
        result += a[i];
      }
      return result;
    }
    function unindexBufferGeometry(geometry) {
      if (geometry.index) {
        const indexes = geometry.index.array;
        const numIndexes = indexes.length;
        const positionAttribute = geometry.getAttribute('position');
        const oldPositions = positionAttribute ? positionAttribute.array : null;
        const positions = positionAttribute ? new Float32Array(numIndexes * 3) : null;
        const normalAttribute = geometry.getAttribute('normal');
        const oldNormals = normalAttribute ? normalAttribute.array : null;
        const normals = normalAttribute ? new Float32Array(numIndexes * 3) : null;
        const colorAttribute = geometry.getAttribute('color');
        const oldColors = colorAttribute ? colorAttribute.array : null;
        const colors = colorAttribute ? new Float32Array(numIndexes * 3) : null;
        const uvAttribute = geometry.getAttribute('uv');
        const oldUvs = uvAttribute ? uvAttribute.array : null;
        const uvs = uvAttribute ? new Float32Array(numIndexes * 2) : null;
        for (let i = 0; i < numIndexes; i++) {
          const index = indexes[i];

          if (positions !== null) {
            positions[(i * 3) + 0] = oldPositions[(index * 3) + 0];
            positions[(i * 3) + 1] = oldPositions[(index * 3) + 1];
            positions[(i * 3) + 2] = oldPositions[(index * 3) + 2];
          }
          if (normals !== null) {
            normals[(i * 3) + 0] = oldNormals[(index * 3) + 0];
            normals[(i * 3) + 1] = oldNormals[(index * 3) + 1];
            normals[(i * 3) + 2] = oldNormals[(index * 3) + 2];
          }
          if (colors !== null) {
            colors[(i * 3) + 0] = oldColors[(index * 3) + 0];
            colors[(i * 3) + 1] = oldColors[(index * 3) + 1];
            colors[(i * 3) + 2] = oldColors[(index * 3) + 2];
          }
          if (uvs !== null) {
            uvs[(i * 2) + 0] = oldUvs[(index * 2) + 0];
            uvs[(i * 2) + 1] = oldUvs[(index * 2) + 1];
          }
        }
        if (positions !== null) {
          geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
        }
        if (normals !== null) {
          geometry.addAttribute('normal', new THREE.BufferAttribute(normals, 3));
        }
        if (colors !== null) {
          geometry.addAttribute('color', new THREE.BufferAttribute(colors, 3));
        }
        if (uvs !== null) {
          geometry.addAttribute('uv', new THREE.BufferAttribute(uvs, 2));
        }
        geometry.index = null;
      }

      return geometry;
    }
    function concatBufferGeometry(geometries) {
      geometries = geometries.map(geometry => unindexBufferGeometry(geometry));

      const positions = (() => {
        const geometryPositions = geometries.map(geometry => geometry.getAttribute('position').array);
        const numPositions = sum(geometryPositions.map(geometryPosition => geometryPosition.length));

        const result = new Float32Array(numPositions);
        let i = 0;
        geometryPositions.forEach(geometryPosition => {
          result.set(geometryPosition, i);
          i += geometryPosition.length;
        });
        return result;
      })();
      const normals = (() => {
        const geometryNormals = geometries.map(geometry => geometry.getAttribute('normal').array);
        const numNormals = sum(geometryNormals.map(geometryNormal => geometryNormal.length));

        const result = new Float32Array(numNormals);
        let i = 0;
        geometryNormals.forEach(geometryNormal => {
          result.set(geometryNormal, i);
          i += geometryNormal.length;
        });
        return result;
      })();
      const uvs = (() => {
        const geometryUvs = geometries.map(geometry => geometry.getAttribute('uv').array);
        const numUvs = sum(geometryUvs.map(geometryUv => geometryUv.length));

        const result = new Float32Array(numUvs);
        let i = 0;
        geometryUvs.forEach(geometryUv => {
          result.set(geometryUv, i);
          i += geometryUv.length;
        });
        return result;
      })();

      const geometry = new THREE.BufferGeometry();
      geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.addAttribute('normal', new THREE.BufferAttribute(normals, 3));
      geometry.addAttribute('uv', new THREE.BufferAttribute(uvs, 2));
      return geometry;
    }

    /* const screenMesh = (() => {
      const geometry = new THREE.PlaneBufferGeometry(2, 2, 1);
      const texture = new THREE.Texture(
        null,
        THREE.UVMapping,
        THREE.RepeatWrapping,
        THREE.RepeatWrapping,
        THREE.NearestFilter,
        THREE.NearestFilter,
        THREE.RGBAFormat,
        THREE.UnsignedByteType,
        1
      );
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
      });
      const screenMesh = new THREE.Mesh(geometry, material);
      return screenMesh;
    })();
    screenMesh.position.set(1, 1, 0);
    screenMesh.rotation.set(0, -Math.PI/2, 0, 'YXZ');
    scene.add(screenMesh); */

    const consoleMaterial = new THREE.MeshPhongMaterial({
      color: 0x333333,
      // shading: THREE.FlatShading,
    });
    const cartridgeMaterial = new THREE.MeshPhongMaterial({
      color: 0x808080,
      // shading: THREE.FlatShading,
    });
    const consoleMesh = (() => {
      const object = new THREE.Object3D();
      object.position.set(0, 0.1, 0.5);

      const coreMesh = (() => {
        const geometry = concatBufferGeometry([
          new THREE.BoxBufferGeometry(0.2, 0.05, 0.2),
          new THREE.BoxBufferGeometry(0.05, 0.02, 0.05)
            .applyMatrix(new THREE.Matrix4().makeTranslation(-(0.2 / 2) + (0.05 / 4), -0.05 / 2, -(0.2 / 2) + (0.05 / 4))),
          new THREE.BoxBufferGeometry(0.05, 0.02, 0.05)
            .applyMatrix(new THREE.Matrix4().makeTranslation(-(0.2 / 2) + (0.05 / 4), -0.05 / 2, (0.2 / 2) - (0.05 / 4))),
          new THREE.BoxBufferGeometry(0.05, 0.02, 0.05)
            .applyMatrix(new THREE.Matrix4().makeTranslation((0.2 / 2) - (0.05 / 4), -0.05 / 2, -(0.2 / 2) + (0.05 / 4))),
          new THREE.BoxBufferGeometry(0.05, 0.02, 0.05)
            .applyMatrix(new THREE.Matrix4().makeTranslation((0.2 / 2) - (0.05 / 4), -0.05 / 2, (0.2 / 2) - (0.05 / 4))),
        ]);
        const material = consoleMaterial;

        const mesh = new THREE.Mesh(geometry, material);
        return mesh;
      })();
      object.add(coreMesh);

      const cartridgeMesh = (() => {
        const geometry = new THREE.BoxBufferGeometry(0.08, 0.05, 0.015)
          .applyMatrix(new THREE.Matrix4().makeTranslation(0, 0.05 / 2, 0));
        const material = cartridgeMaterial;

        const mesh = new THREE.Mesh(geometry, material);
        return mesh;
      })();
      object.add(cartridgeMesh);

      return object;
    })();
    scene.add(consoleMesh);

    const lastPresseds = [false, false];
    const lastMenuPresseds = [false, false];
    const lastGrabbeds = [false, false];
    const lastPadPresseds = [null, null];
    const gamepadMeshes = (() => {
      const leftGamepadMesh = (() => {
        const object = new THREE.Object3D();
        object.position.set(-0.1, 0.5, 0.7);
        object.isGamepad = true;
        // object.controllerIndex = 0;

        const coreMesh = (() => {
          const geometry = new THREE.BoxBufferGeometry(0.05, 0.02, 0.1);
          const material = consoleMaterial;

          const mesh = new THREE.Mesh(geometry, material);
          return mesh;
        })();
        object.add(coreMesh);

        const buttonsMesh = (() => {
          const geometry = concatBufferGeometry([
            new THREE.BoxBufferGeometry(0.005, 0.005, 0.0075)
              .applyMatrix(new THREE.Matrix4().makeTranslation(0, 0.02 / 2, -0.0075)),
            new THREE.BoxBufferGeometry(0.0075, 0.005, 0.005)
              .applyMatrix(new THREE.Matrix4().makeTranslation(-0.0075, 0.02 / 2, 0)),
            new THREE.BoxBufferGeometry(0.005, 0.005, 0.0075)
              .applyMatrix(new THREE.Matrix4().makeTranslation(0, 0.02 / 2, 0.0075)),
            new THREE.BoxBufferGeometry(0.0075, 0.005, 0.005)
              .applyMatrix(new THREE.Matrix4().makeTranslation(0.0075, 0.02 / 2, 0)),
            new THREE.BoxBufferGeometry(0.04, 0.02 / 2, 0.02)
              .applyMatrix(new THREE.Matrix4().makeTranslation(-(0.05 / 2) + (0.04 / 2) - 0.005, 0, -(0.1 / 2) + (0.02 / 4))),
          ]);
          const material = cartridgeMaterial;

          const mesh = new THREE.Mesh(geometry, material);
          return mesh;
        })();
        object.add(buttonsMesh);

        const tutorialMesh = (() => {
          const texture = new THREE.Texture(
            null,
            THREE.UVMapping,
            THREE.RepeatWrapping,
            THREE.RepeatWrapping,
            THREE.LinearFilter,
            THREE.LinearFilter,
            THREE.RGBAFormat,
            THREE.UnsignedByteType,
            1
          );
          const tutorialImg = new Image();
          tutorialImg.onload = () => {
            texture.image = tutorialImg;
            texture.needsUpdate = true;
          };
          tutorialImg.onerror = err => {
            console.warn(err);
          };
          tutorialImg.src = '/assets/img/tutorial.png';
          const mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(0.2, 0.2), new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            /// alphaTest: 0.5,
          }));
          mesh.position.set(-0.2/2 - 0.05/2, 0, -0.05/2);
          mesh.rotation.x = (-Math.PI/4)*1.5;
          mesh.rotation.order = 'YXZ';
          return mesh;
        })();
        object.add(tutorialMesh);

        return object;
      })();

      const rightGamepadMesh = (() => {
        const object = new THREE.Object3D();
        object.position.set(0.1, 0.5, 0.7);
        object.isGamepad = true;
        // object.controllerIndex = 1;

        const coreMesh = (() => {
          const geometry = new THREE.BoxBufferGeometry(0.05, 0.02, 0.1);
          const material = consoleMaterial;

          const mesh = new THREE.Mesh(geometry, material);
          return mesh;
        })();
        object.add(coreMesh);

        const buttonsMesh = (() => {
          const geometry = concatBufferGeometry([
            new THREE.BoxBufferGeometry(0.01, 0.005, 0.01)
              .applyMatrix(new THREE.Matrix4().makeTranslation(0.01 * 3 / 4, 0.02 / 2, -0.01 * 3 / 4)),
            new THREE.BoxBufferGeometry(0.01, 0.005, 0.01)
              .applyMatrix(new THREE.Matrix4().makeTranslation(-0.01 * 3 / 4, 0.02 / 2, 0.01 * 3 / 4)),
            new THREE.BoxBufferGeometry(0.04, 0.02 / 2, 0.02)
              .applyMatrix(new THREE.Matrix4().makeTranslation((0.05 / 2) - (0.04 / 2) + 0.005, 0, -(0.1 / 2) + (0.02 / 4))),
          ]);
          const material = cartridgeMaterial;

          const mesh = new THREE.Mesh(geometry, material);
          return mesh;
        })();
        object.add(buttonsMesh);

        return object;
      })();

      return [
        leftGamepadMesh,
        rightGamepadMesh,
      ];
    })();
    for (let i = 0; i < gamepadMeshes.length; i++) {
      scene.add(gamepadMeshes[i]);
    }

    const sqrt2 = Math.sqrt(2);
    const DIRECTIONS = [
      {
        direction: 'left',
        x: -1,
        y: 0,
      },
      {
        direction: 'right',
        x: 1,
        y: 0,
      },
      {
        direction: 'up',
        x: 0,
        y: 1,
      },
      {
        direction: 'down',
        x: 0,
        y: -1,
      },
      {
        direction: 'upLeft',
        x: -sqrt2,
        y: sqrt2,
      },
      {
        direction: 'upRight',
        x: sqrt2,
        y: sqrt2,
      },
      {
        direction: 'downLeft',
        x: -sqrt2,
        y: -sqrt2,
      },
      {
        direction: 'downRight',
        x: sqrt2,
        y: -sqrt2,
      },
    ];
    const LEFT_PAD_KEYS = {
      left: [
        {
          keyCode: 37,
          which: 37,
          charCode: 0,
          key: 'ArrowLeft',
          code: 'ArrowLeft',
        },
        {
          keyCode: 74,
          which: 74,
          charCode: 0,
          key: 'J',
          code: 'KeyJ',
        },
      ],
      right: [
        {
          keyCode: 39,
          which: 39,
          charCode: 0,
          key: 'ArrowRight',
          code: 'ArrowRight',
        },
        {
          keyCode: 76,
          which: 76,
          charCode: 0,
          key: 'L',
          code: 'KeyL',
        },
      ],
      up: [
        {
          keyCode: 38,
          which: 38,
          charCode: 0,
          key: 'ArrowUp',
          code: 'ArrowUp',
        },
        {
          keyCode: 73,
          which: 73,
          charCode: 0,
          key: 'I',
          code: 'KeyI',
        },
      ],
      down: [
        {
          keyCode: 40,
          which: 40,
          charCode: 0,
          key: 'ArrowDown',
          code: 'ArrowDown',
        },
        {
          keyCode: 75,
          which: 75,
          charCode: 0,
          key: 'K',
          code: 'KeyK',
        },
      ],
      upLeft: null,
      upRight: null,
      downLeft: null,
      downRight: null,
    };
    LEFT_PAD_KEYS.upLeft = LEFT_PAD_KEYS.up.concat(LEFT_PAD_KEYS.left);
    LEFT_PAD_KEYS.upRight = LEFT_PAD_KEYS.up.concat(LEFT_PAD_KEYS.right);
    LEFT_PAD_KEYS.downLeft = LEFT_PAD_KEYS.down.concat(LEFT_PAD_KEYS.left);
    LEFT_PAD_KEYS.downRight = LEFT_PAD_KEYS.down.concat(LEFT_PAD_KEYS.right);
    const RIGHT_PAD_KEYS = {
      left: [
        {
          keyCode: 49,
          which: 49,
          charCode: 0,
          key: '1',
          code: 'Digit1',
        },
      ],
      right: [
        {
          keyCode: 52,
          which: 52,
          charCode: 0,
          key: '4',
          code: 'Digit4',
        },
      ],
      up: [
        {
          keyCode: 51,
          which: 51,
          charCode: 0,
          key: '3',
          code: 'Digit3',
        },
      ],
      down: [
        {
          keyCode: 50,
          which: 50,
          charCode: 0,
          key: '2',
          code: 'Digit2',
        },
      ],
      upLeft: null,
      upRight: null,
      downLeft: null,
      downRight: null,
    };
    RIGHT_PAD_KEYS.upLeft = RIGHT_PAD_KEYS.up.concat(RIGHT_PAD_KEYS.left);
    RIGHT_PAD_KEYS.upRight = RIGHT_PAD_KEYS.up.concat(RIGHT_PAD_KEYS.right);
    RIGHT_PAD_KEYS.downLeft = RIGHT_PAD_KEYS.down.concat(RIGHT_PAD_KEYS.left);
    RIGHT_PAD_KEYS.downRight = RIGHT_PAD_KEYS.down.concat(RIGHT_PAD_KEYS.right);
    const PAD_KEYS = [
      LEFT_PAD_KEYS,
      RIGHT_PAD_KEYS,
    ];
    const _getGamepadDirection = gamepad => {
      const {axes} = gamepad;
      const [x, y] = axes;

      return DIRECTIONS.map(directionSpec => {
        const dx = x - directionSpec.x;
        const dy = y - directionSpec.y;
        const distance = Math.sqrt((dx * dx) + (dy * dy));
        return {
          distance,
          direction: directionSpec.direction,
        };
      }).sort((a, b) => a.distance - b.distance)[0].direction;
    };

    if (Module.vr) {
      inUserFrame = false;
      renderer.state.reset();
      inUserFrame = true;

      /* let userDrew = false;
      const _wrap = oldFn => function() {
        oldFn.apply(this, arguments);
        if (!userDrew && inUserFrame) {
          userDrew = true;
        }
      };
      context.clear = _wrap(context.clear);
      context.drawArrays = _wrap(context.drawArrays);
      context.drawElements = _wrap(context.drawElements); */

      Module.preRender = () => {
        // if (userDrew) {
          inUserFrame = false;
          renderer.clear(true, true, true);
          inUserFrame = true;
        // }
      };

      /* console.log('render 1');
      function recurse() {
        console.log('render 2');
        Module.preRender();
        cleared = true;
        Module.postRender();

        requestAnimationFrame(recurse);
      }
      requestAnimationFrame(recurse); */

      Module.postRender = () => {
        const gamepads = navigator.getGamepads();
        const _updateControls = () => {
          for (let i = 0; i < gamepads.length; i++) {
            const gamepad = gamepads[i];
            if (gamepad) {
              const pressed = gamepad.buttons[1].pressed;
              const grabbed = gamepad.buttons[2].pressed;
              const menuPressed = gamepad.buttons[3].pressed;
              const padPressed = gamepad.buttons[0].pressed ? _getGamepadDirection(gamepad) : null;

              const lastPressed = lastPresseds[i];
              lastPresseds[i] = pressed;
              if (pressed && !lastPressed) {
                if (i === 0) {
                  const keydownEvent = new KeyboardEvent('keydown', {
                    keyCode: 81,
                    which: 81,
                    charCode: 0,
                    key: 'Q',
                    code: 'KeyQ',
                  });
                  // console.log('dispatch', keydownEvent.key);
                  window.document.dispatchEvent(keydownEvent);
                } else {
                  const keydownEvent = new KeyboardEvent('keydown', {
                    keyCode: 90,
                    which: 90,
                    charCode: 0,
                    key: 'Z',
                    code: 'KeyZ',
                  });
                  // console.log('dispatch', keydownEvent.key);
                  window.document.dispatchEvent(keydownEvent);
                }
              } else if (!pressed && lastPressed) {
                if (i === 0) {
                  const keyupEvent = new KeyboardEvent('keyup', {
                    keyCode: 81,
                    which: 81,
                    charCode: 0,
                    key: 'Q',
                    code: 'KeyQ',
                  });
                  // console.log('dispatch', keyupEvent.key);
                  window.document.dispatchEvent(keyupEvent);
                } else {
                  const keyupEvent = new KeyboardEvent('keyup', {
                    keyCode: 90,
                    which: 90,
                    charCode: 0,
                    key: 'Z',
                    code: 'KeyZ',
                  });
                  // console.log('dispatch', keyupEvent.key);
                  window.document.dispatchEvent(keyupEvent);
                }
              }

              const lastGrabbed = lastGrabbeds[i];
              lastGrabbeds[i] = grabbed;
              if (grabbed && !lastGrabbed) {
                if (i === 0) {
                  const keydownEvent = new KeyboardEvent('keydown', {
                    keyCode: 13,
                    which: 13,
                    charCode: 0,
                    key: 'Enter',
                    code: 'Enter',
                  });
                  // console.log('dispatch', keydownEvent.key);
                  window.document.dispatchEvent(keydownEvent);
                } else {
                  const keydownEvent = new KeyboardEvent('keydown', {
                    keyCode: 65,
                    which: 65,
                    charCode: 0,
                    key: 'A',
                    code: 'KeyA',
                  });
                  // console.log('dispatch', keydownEvent.key);
                  window.document.dispatchEvent(keydownEvent);
                }
              } else if (!grabbed && lastGrabbed) {
                if (i === 0) {
                  const keyupEvent = new KeyboardEvent('keyup', {
                    keyCode: 13,
                    which: 13,
                    charCode: 0,
                    key: 'Enter',
                    code: 'Enter',
                  });
                  // console.log('dispatch', keyupEvent.key);
                  window.document.dispatchEvent(keyupEvent);
                } else {
                  const keyupEvent = new KeyboardEvent('keyup', {
                    keyCode: 65,
                    which: 65,
                    charCode: 0,
                    key: 'A',
                    code: 'KeyA',
                  });
                  // console.log('dispatch', keyupEvent.key);
                  window.document.dispatchEvent(keyupEvent);
                }
              }

              const lastPadPressed = lastPadPresseds[i];
              lastPadPresseds[i] = padPressed;
              if (padPressed && !lastPadPressed) {
                const directionSpecs = PAD_KEYS[i][padPressed];
                for (let j = 0; j < directionSpecs.length; j++) {
                  const directionSpec = directionSpecs[j];
                  const {keyCode, which, charCode, key, code} = directionSpec;

                  const keydownEvent = new KeyboardEvent('keydown', {
                    keyCode,
                    which,
                    charCode,
                    key,
                    code,
                  });
                  // console.log('dispatch', keydownEvent.key);
                  window.document.dispatchEvent(keydownEvent);
                }
              } else if (!padPressed && lastPadPressed) {
                const directionSpecs = PAD_KEYS[i][lastPadPressed];
                for (let j = 0; j < directionSpecs.length; j++) {
                  const directionSpec = directionSpecs[j];
                  const {keyCode, which, charCode, key, code} = directionSpec;

                  const keyupEvent = new KeyboardEvent('keyup', {
                    keyCode,
                    which,
                    charCode,
                    key,
                    code,
                  });
                  // console.log('dispatch', keyupEvent.key);
                  window.document.dispatchEvent(keyupEvent);
                }
              } else if (padPressed && lastPadPressed && padPressed !== lastPadPressed) {
                const lastDirectionSpecs = PAD_KEYS[i][lastPadPressed];
                for (let j = 0; j < lastDirectionSpecs.length; j++) {
                  const lastDirectionSpec = lastDirectionSpecs[j];
                  const {keyCode, which, charCode, key, code} = lastDirectionSpec;

                  const keyupEvent = new KeyboardEvent('keyup', {
                    keyCode,
                    which,
                    charCode,
                    key,
                    code,
                  });
                  // console.log('dispatch', keyupEvent.key);
                  window.document.dispatchEvent(keyupEvent);
                }

                const directionSpecs = PAD_KEYS[i][padPressed];
                for (let j = 0; j < directionSpecs.length; j++) {
                  const directionSpec = directionSpecs[j];
                  const {keyCode, which, charCode, key, code} = directionSpec;

                  const keydownEvent = new KeyboardEvent('keydown', {
                    keyCode,
                    which,
                    charCode,
                    key,
                    code,
                  });
                  // console.log('dispatch', keydownEvent.key);
                  window.document.dispatchEvent(keydownEvent);
                }
              }
            }
          }
        };
        _updateControls();

        // if (userDrew) {
          inUserFrame = false;

          // oldClear.call(context, context.COLOR_BUFFER_BIT | context.DEPTH_BUFFER_BIT | context.STENCIL_BUFFER_BIT);
          // context.disable(context.SCISSOR_TEST);
          // context.disable(context.STENCIL_TEST);

          const _updateGamepadMeshes = () => {
            for (let i = 0; i < gamepads.length; i++) {
              const gamepad = gamepads[i];
              if (gamepad) {
                const gamepadMesh = gamepadMeshes[i];
                gamepadMesh.position.fromArray(gamepad.pose.position);
                gamepadMesh.quaternion.fromArray(gamepad.pose.orientation);
                gamepadMesh.updateMatrixWorld();
              }
            }
          };
          _updateGamepadMeshes();

          // console.log('--------overlay 1');
          // console.log('--------restore scene');
          sceneState.restore();
          // console.log('--------reset scene');
          // renderer.state.reset(); // XXX
          // console.log('--------render scene');
          context.bindVertexArray(0);
          // renderer.clearDepth();
          // renderer.clearStencil();
          renderer.render(scene, camera);
          // console.log('--------restore user');
          userState.restore();
          // console.log('--------overlay 2');

          userDrew = false;
          inUserFrame = true;
        // }
      };
      // Module.renderScene();
    }
}

function _getCoreNameForFileName(fileName) {
  const match = fileName.match(/\.([^\.]+)$/);
  const ext = match ? match[1].toLowerCase() : '';
  switch (ext) {
    case 'md':
      return 'genesis_plus_gx';
    case 'n64':
    case 'z64':
      return 'parallel_n64';
    case 'cue':
      // return 'pcsx_rearmed';
      return 'pcsx_rearmed_mr';
      // return 'mednafen_psx_hw';
    default: return null;
  }
}
Error.stackTraceLimit = 200;

window.addEventListener('dragover', e => {
    e.preventDefault();
});
window.addEventListener('drop', e => {
  e.preventDefault();

  const files = Array.from(e.dataTransfer.files);
  const mainFile = files.find(file => /\.(?:md|n64|z64|cue)$/i.test(file.name));
  const mainFileName = mainFile ? mainFile.name : null;
  const core = mainFileName ? _getCoreNameForFileName(mainFileName) : null;
  if (core) {
    const script = document.createElement('script');
    script.src = 'assets/frontend/bundle/' + core + '_libretro.js';
    script.onload = () => {
      addRunDependency('load');

      setupFileSystem()
        .then(() =>
          Promise.all(
            files.map(file =>
              new Promise((accept, reject) => {
                const fr = new FileReader();
                fr.onload = () => {
                  const fileData = fr.result;
                  const fileName = file.name;

                  const dataView = new Uint8Array(fileData);
                  FS.createDataFile('/', fileName, dataView, true, false);

                  const data = FS.readFile(fileName, {
                    encoding: 'binary'
                  });
                  const filePath = '/home/web_user/retroarch/userdata/content/' + fileName;
                  FS.writeFile('/home/web_user/retroarch/userdata/content/' + fileName, data, {
                    encoding: 'binary'
                  });
                  FS.unlink(fileName);

                  accept();
                };
                fr.onerror = err => {
                  reject(err);
                };
                fr.readAsArrayBuffer(file);
              })
            )
          )
        )
        .then(() => {
          const handle = GL.registerContext(Module.ctx, {
            majorVersion: 1,
            minorVersion: 0,
          });
          GL.makeContextCurrent(handle);

          const filePath = '/home/web_user/retroarch/userdata/content/' + mainFileName;
          Module.arguments.push(filePath);
          // Module.arguments = ['-h'];

          // console.log('arguments', Module.arguments);

          initScene();

          console.log('load args', Module.arguments);

          removeRunDependency('load');
        });
    };
    script.onerror = err => {
      console.warn(err);
    };
    document.body.appendChild(script);
  } else {
    const err = new Error('could not detect file for ' + mainFileName);
    console.warn(err);
  }
});

var Module = {
    // noInitialRun: true,
    noInitialRun: false,
    arguments: [
        '-v',
        // '/home/web_user/retroarch/userdata/content/downloads/sonic3.md',
        // '/home/web_user/retroarch/userdata/content/downloads/oot.z64',
        // '/home/web_user/retroarch/userdata/content/downloads/majora.z64',
        // '/home/web_user/retroarch/userdata/content/downloads/starfox.z64',
    ],
    preRun: [],
    postRun: [],
    print: function(text) {
        console.log(text);
    },
    printErr: function(text) {
        console.log(text);
    },
    canvas: document.getElementById('canvas'),
    context: null,
    vr: true,
    display: null,
    leftEyeParameters: null,
    rightEyeParameters: null,
    preRender: () => {},
    postRender: () => {},
    totalDependencies: 0,
    monitorRunDependencies: function(left) {
        this.totalDependencies = Math.max(this.totalDependencies, left);
    }
};

window.onload = () => {
  /**
   * Attempt to disable some default browser keys.
   */
  const keys = {
    9: "tab",
    13: "enter",
    16: "shift",
    18: "alt",
    27: "esc",
    33: "rePag",
    34: "avPag",
    35: "end",
    36: "home",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12"
  };
  window.addEventListener('keydown', function(e) {
    if (keys[e.which]) {
      e.preventDefault();
    }
  });

  const {canvas} = Module;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  Module.ctx = canvas.getContext('webgl', {
    antialias: true,
  });

  initRenderer();

  navigator.getVRDisplays && navigator.getVRDisplays()
    .then(displays => {
      const display = displays[0] || null;

      window.addEventListener('click', () => {
        display.requestPresent([{
          source: canvas,
        }])
          .then(() => {
            const leftEyeParameters = display.getEyeParameters('left');
            const rightEyeParameters = display.getEyeParameters('right');
            const renderWidth = leftEyeParameters.renderWidth + rightEyeParameters.renderWidth;
            const renderHeight = Math.max(leftEyeParameters.renderHeight, rightEyeParameters.renderHeight);

            renderer.setSize(renderWidth, renderHeight);
            renderer.setPixelRatio(1);
            renderer.vr.setDevice(display);
            renderer.vr.enabled = true;

            Browser.setCanvasSize(renderWidth, renderHeight);

            Module.display = display;
            Module.leftEyeParameters = leftEyeParameters;
            Module.rightEyeParameters = rightEyeParameters;
          });
      });
    });
};

function keyPress(k) {
    kp(k, "keydown");
    setTimeout(function() {
        kp(k, "keyup")
    }, 50);
}

kp = function(k, event) {
    var oEvent = new KeyboardEvent(event, {
        code: k
    });

    document.dispatchEvent(oEvent);
    document.getElementById('canvas').focus();
}
