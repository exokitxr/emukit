/**
 * RetroArch Web Player
 *
 * This provides the basic JavaScript for the RetroArch web player.
 */
var BrowserFS = BrowserFS;

function cleanupStorage() {
    localStorage.clear();
    if (BrowserFS.FileSystem.IndexedDB.isAvailable() && false) {
        var req = indexedDB.deleteDatabase("RetroArch");
        req.onsuccess = function() {
            console.log("Deleted database successfully");
        };
        req.onerror = function() {
            console.log("Couldn't delete database");
        };
        req.onblocked = function() {
            console.log("Couldn't delete database due to the operation being blocked");
        };
    }

    document.getElementById("btnClean").disabled = true;
}

function setupFileSystem(backend) {
  return Promise.all([
    fetch('/assets/frontend/bundle/.index-xhr').then(res => res.json()),
    fetch('/assets/cores/.index-xhr').then(res => res.json()),
    fetch('/assets/frontend/bundle/retroarch.cfg').then(res => res.arrayBuffer()),
    // fetch('/assets/cores/sonic3.md').then(res => res.arrayBuffer()),
  ])
  .then(xhrs => {
    /* create a mountable filesystem that will server as a root
       mountpoint for browserfs */
    var mfs = new BrowserFS.FileSystem.MountableFileSystem();
    var afs = new BrowserFS.FileSystem.InMemory();
    var xfs = new BrowserFS.FileSystem.XmlHttpRequest(xhrs[0], "/assets/frontend/bundle/");

    console.log("WEBPLAYER: initializing filesystem: " + backend);
    mfs.mount('/home/web_user/retroarch/userdata', afs);

    mfs.mount('/home/web_user/retroarch/bundle', xfs);
    BrowserFS.initialize(mfs);
    var BFS = new BrowserFS.EmscriptenFS();
    FS.mount(BFS, {
      root: '/home'
    }, '/home');
    console.log("WEBPLAYER: " + backend + " filesystem initialization successful");

    (() => {
        const name = 'retroarch.cfg';
        const dataView = new Uint8Array(xhrs[2]);
        FS.createDataFile('/', name, dataView, true, false);

        const data = FS.readFile(name, {
            encoding: 'binary'
        });
        FS.writeFile('/home/web_user/retroarch/userdata/' + name, data, {
            encoding: 'binary'
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
    const coverImg = new Image();
    coverImg.onload = () => {
      texture.image = coverImg;
      texture.needsUpdate = true;

      requestAnimationFrame(() => {
        console.log('render');
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
      let cleared = false;
      const oldClear = context.clear;
      context.clear = (oldClear => function() {
        oldClear.apply(this, arguments);
        cleared = true;
      })(oldClear);
      Module.renderScene = () => {
        if (cleared) {
          // oldClear.call(context, context.COLOR_BUFFER_BIT | context.DEPTH_BUFFER_BIT | context.STENCIL_BUFFER_BIT);
          // context.disable(context.SCISSOR_TEST);
          // context.disable(context.STENCIL_TEST);

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
          _updateControls();
          _updateGamepadMeshes();

          // console.log('overlay 1');
          renderer.state.reset();
          renderer.render(scene, camera);
          // console.log('overlay 2');

          cleared = false;
        }
      };
      // Module.renderScene();

      navigator.getVRDisplays && navigator.getVRDisplays()
        .then(displays => {
          const display = displays[0];
          return display.requestPresent([{
            source: canvas,
          }])
            .then(() => {
              renderer.vr.setDevice(display);
              renderer.vr.enabled = true;

              const leftEyeParameters = display.getEyeParameters('left');
              const rightEyeParameters = display.getEyeParameters('right');
              Browser.setCanvasSize(leftEyeParameters.renderWidth + rightEyeParameters.renderWidth, Math.max(leftEyeParameters.renderHeight, rightEyeParameters.renderHeight));

              Module.display = display;
              Module.leftEyeParameters = leftEyeParameters;
              Module.rightEyeParameters = rightEyeParameters;
            });
        })
        .catch(err => {
          console.warn(err.stack);
        });
    } else {
    }
}

function _getCoreNameForFileName(fileName) {
  const match = fileName.match(/\.([^\.]+)$/);
  const ext = match ? match[1] : '';
  switch (ext) {
    case 'md':
      return 'genesis_plus_gx';
    case 'n64':
    case 'z64':
      return 'parallel_n64';
    default: return null;
  }
}
Error.stackTraceLimit = 200;
function uploadData(fileData, fileName) {
  const core = _getCoreNameForFileName(fileName);
  if (core) {
    const script = document.createElement('script');
    script.src = core + '_libretro.js';
    script.onload = () => {
      setupFileSystem("browser")
        .then(() => {
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

          const handle = GL.registerContext(Module.ctx, {
            majorVersion: 1,
            minorVersion: 0,
          });
          GL.makeContextCurrent(handle);
          Module.arguments.push(filePath);

          initScene();
        });
    };
    document.body.appendChild(script);
  } else {
    console.warn('could not detect file file for', fileName);
  }
}

window.addEventListener('dragover', e => {
    e.preventDefault();
});
window.addEventListener('drop', e => {
  e.preventDefault();

  const {files} = e.dataTransfer;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fr = new FileReader();
    fr.onload = () => {
      uploadData(fr.result, file.name);
    };
    fr.onerror = err => {
      console.warn(err.stack);
    };
    fr.readAsArrayBuffer(file);
  }
});

var Module = {
    // noInitialRun: true,
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
    renderScene: () => {},
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
