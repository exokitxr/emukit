/**
 * RetroArch Web Player
 *
 * This provides the basic JavaScript for the RetroArch web player.
 */
var BrowserFS = BrowserFS;
var afs;

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

function idbfsInit() {
    $('#icnLocal').removeClass('fa-globe');
    $('#icnLocal').addClass('fa-spinner fa-spin');
    // var imfs = new BrowserFS.FileSystem.InMemory();
    if (BrowserFS.FileSystem.IndexedDB.isAvailable() && false) {
        afs = new BrowserFS.FileSystem.AsyncMirror(imfs,
            new BrowserFS.FileSystem.IndexedDB(function(e, fs) {
                    if (e) {
                        //fallback to imfs
                        afs = new BrowserFS.FileSystem.InMemory();
                        console.log("WEBPLAYER: error: " + e + " falling back to in-memory filesystem");
                        setupFileSystem("browser")
                            .then(() => {
                                preLoadingComplete();
                            });
                    } else {
                        // initialize afs by copying files from async storage to sync storage.
                        afs.initialize(function(e) {
                            if (e) {
                                afs = new BrowserFS.FileSystem.InMemory();
                                console.log("WEBPLAYER: error: " + e + " falling back to in-memory filesystem");
                                setupFileSystem("browser")
                                    .then(() => {
                                        preLoadingComplete();
                                    });
                            } else {
                                idbfsSyncComplete();
                            }
                        });
                    }
                },
                "RetroArch"));
    } else {
        afs = new BrowserFS.FileSystem.InMemory();
        setupFileSystem("browser")
            .then(() => {
                preLoadingComplete();
            });
    }
}

function idbfsSyncComplete() {
    $('#icnLocal').removeClass('fa-spinner').removeClass('fa-spin');
    $('#icnLocal').addClass('fa-check');
    console.log("WEBPLAYER: idbfs setup successful");

    setupFileSystem("browser")
        .then(() => {
            preLoadingComplete();
        });
}

function preLoadingComplete() {
    /* Make the Preview image clickable to start RetroArch. */
    $('.webplayer-preview').addClass('loaded').click(function() {
        startRetroArch();
        return false;
    });
    document.getElementById("btnRun").disabled = false;
    $('#btnRun').removeClass('disabled');

    $('.webplayer').show();
    $('.webplayer-preview').hide();
    document.getElementById("btnRun").disabled = true;

    bootstrapScene();
}

function setupFileSystem(backend) {
    return Promise.all([
            fetch('/assets/frontend/bundle/.index-xhr').then(res => res.json()),
            fetch('/assets/cores/.index-xhr').then(res => res.json()),
            fetch('/assets/frontend/bundle/retroarch.cfg').then(res => res.arrayBuffer()),
            // fetch('/assets/cores/sonic3.md').then(res => res.arrayBuffer()),
            // fetch('/assets/cores/oot.z64').then(res => res.arrayBuffer()),
            fetch('/assets/cores/majora.z64').then(res => res.arrayBuffer()),
            // fetch('/assets/cores/starfox.z64').then(res => res.arrayBuffer()),
        ])
        .then(xhrs => {
            /* create a mountable filesystem that will server as a root
               mountpoint for browserfs */
            var mfs = new BrowserFS.FileSystem.MountableFileSystem();

            /* create an XmlHttpRequest filesystem for the bundled data */
            var xfs1 = new BrowserFS.FileSystem.XmlHttpRequest(xhrs[0], "/assets/frontend/bundle/");
            /* create an XmlHttpRequest filesystem for core assets */
            /* var xfs2 =  new BrowserFS.FileSystem.XmlHttpRequest
               (xhrs[1], "/assets/cores/"); */
            /* const xfs2 = new BrowserFS.FileSystem.InMemory();
            (() => {
              // const f = m.createFileSync('/sonic3.md', 'r+', 0777);
              // const f = m.createFileSync('/oot.z64', 'r+', 0777);
              const f = xfs2.createFileSync('/majora.z64', 'r+', 0777);
              // const f = m.createFileSync('/starfox.z64', 'r+', 0777);
              f._buffer = f._buffer.constructor.from(xhrs[3]);
              f.getStats().size = f._buffer.byteLength;
              f._dirty = true;
              f.syncSync();
              // m.readFileSync('/lol/zol', 'utf8', {isReadable() {return true;}, pathExistsAction() { return 0; }});
            })(); */
            console.log("WEBPLAYER: initializing filesystem: " + backend);
            mfs.mount('/home/web_user/retroarch/userdata', afs);

            mfs.mount('/home/web_user/retroarch/bundle', xfs1);
            // mfs.mount('/home/web_user/retroarch/userdata/content/downloads', xfs2);
            // mfs.mount('/home/web_user/retroarch/userdata/content/downloads', xfs3);
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
            (() => {
                const name = 'majora.z64';
                const dataView = new Uint8Array(xhrs[3]);
                FS.createDataFile('/', name, dataView, true, false);

                const data = FS.readFile(name, {
                    encoding: 'binary'
                });
                FS.mkdir('/home/web_user/retroarch/userdata/states');
                FS.mkdir('/home/web_user/retroarch/userdata/content');
                FS.mkdir('/home/web_user/retroarch/userdata/content/downloads');
                FS.writeFile('/home/web_user/retroarch/userdata/content/downloads/' + name, data, {
                    encoding: 'binary'
                });
                FS.unlink(name);
            })();
        });
}

var renderScene = null;
var renderer = null;
function bootstrapScene() {
  const canvas = document.getElementById('canvas');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // const context = canvas.getContext('webgl');
  const context = Browser.createContext(canvas, true, true, {
    antialias: true,
    depth: true,
    stencil: true,
    alpha: false,
  });

  if (navigator.xr) {
    delete navigator.xr;
  }
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

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 10 * 1024);
  camera.position.set(0, 1.5, 1);
  camera.rotation.order = 'YXZ';
  scene.add(camera);

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
      object.position.set(0, 1.5, 0.5);

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
  
    const gamepadMeshes = (() => {
      const leftGamepadMesh = (() => {
        const object = new THREE.Object3D();
        object.position.set(-0.1, 1.5, 0.7);
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

        return object;
      })();

      const rightGamepadMesh = (() => {
        const object = new THREE.Object3D();
        object.position.set(0.1, 1.5, 0.7);
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

       /* const DIRECTIONS = [
        {
          direction: 'left',
          x: -1,
          y: 0,
          keyCode: 37,
          which: 37,
          charCode: 0,
          key: 'ArrowLeft',
          code: 'ArrowLeft',
        },
        {
          direction: 'right',
          x: 1,
          y: 0,
          keyCode: 39,
          which: 39,
          charCode: 0,
          key: 'ArrowRight',
          code: 'ArrowRight',
        },
        {
          direction: 'up',
          x: 0,
          y: 1,
          keyCode: 38,
          which: 38,
          charCode: 0,
          key: 'ArrowUp',
          code: 'ArrowUp',
        },
        {
          direction: 'down',
          x: 0,
          y: -1,
          keyCode: 40,
          which: 40,
          charCode: 0,
          key: 'ArrowDown',
          code: 'ArrowDown',
        },
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
      }; */

    let cleared = false;
    Error.stackTraceLimit = 300;
    const oldClear = context.clear;
    context.clear = (oldClear => function() {
      oldClear.apply(this, arguments);
      cleared = true;
    })(oldClear);
    renderScene = () => {
      if (cleared) {
        // oldClear.call(context, context.COLOR_BUFFER_BIT | context.DEPTH_BUFFER_BIT | context.STENCIL_BUFFER_BIT);
        // context.disable(context.SCISSOR_TEST);
        // context.disable(context.STENCIL_TEST);
        renderer.state.reset();

        // console.log('overlay 1');
        renderer.render(scene, camera);
        // console.log('overlay 2');

        cleared = false;
      }
    };
    renderScene();
}

/**
 * Retrieve the value of the given GET parameter.
 */
function getParam(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results) {
        return results[1] || null;
    }
}

function startRetroArch() {
    $('.webplayer').show();
    $('.webplayer-preview').hide();
    document.getElementById("btnRun").disabled = true;

    $('#btnFullscreen').removeClass('disabled');
    $('#btnMenu').removeClass('disabled');
    $('#btnAdd').removeClass('disabled');
    $('#btnRom').removeClass('disabled');

    document.getElementById("btnAdd").disabled = false;
    document.getElementById("btnRom").disabled = false;
    document.getElementById("btnMenu").disabled = false;
    document.getElementById("btnFullscreen").disabled = false;

    Module['callMain'](Module['arguments']);
    document.getElementById('canvas').focus();
}

function selectFiles(files) {
    $('#btnAdd').addClass('disabled');
    $('#icnAdd').removeClass('fa-plus');
    $('#icnAdd').addClass('fa-spinner spinning');
    var count = files.length;

    for (var i = 0; i < files.length; i++) {
        filereader = new FileReader();
        filereader.file_name = files[i].name;
        filereader.readAsArrayBuffer(files[i]);
        filereader.onload = function() {
            uploadData(this.result, this.file_name)
        };
        filereader.onloadend = function(evt) {
            console.log("WEBPLAYER: file: " + this.file_name + " upload complete");
            if (evt.target.readyState == FileReader.DONE) {
                $('#btnAdd').removeClass('disabled');
                $('#icnAdd').removeClass('fa-spinner spinning');
                $('#icnAdd').addClass('fa-plus');
            }
        }
    }
}

function uploadData(data, name) {
    var dataView = new Uint8Array(data);
    FS.createDataFile('/', name, dataView, true, false);

    var data = FS.readFile(name, {
        encoding: 'binary'
    });
    FS.writeFile('/home/web_user/retroarch/userdata/content/' + name, data, {
        encoding: 'binary'
    });
    FS.unlink(name);
}

window.addEventListener('dragover', e => {
    e.preventDefault();
});
window.addEventListener('drop', e => {
    e.preventDefault();

    const {
        files
    } = e.dataTransfer;
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
        '/home/web_user/retroarch/userdata/content/downloads/majora.z64',
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
    totalDependencies: 0,
    monitorRunDependencies: function(left) {
        this.totalDependencies = Math.max(this.totalDependencies, left);
    }
};

function switchCore(corename) {
    localStorage.setItem("core", corename);
}

function switchStorage(backend) {
    if (backend != localStorage.getItem("backend")) {
        localStorage.setItem("backend", backend);
        location.reload();
    }
}

// When the browser has loaded everything.
$(function() {
    // Enable all available ToolTips.
    $('.tooltip-enable').tooltip({
        placement: 'right'
    });

    // Allow hiding the top menu.
    $('.showMenu').hide();
    $('#btnHideMenu, .showMenu').click(function() {
        $('nav').slideToggle('slow');
        $('.showMenu').toggle('slow');
    });

    /**
     * Attempt to disable some default browser keys.
     */
    var keys = {
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

    // Switch the core when selecting one.
    $('#core-selector a').click(function() {
        var coreChoice = $(this).data('core');
        switchCore(coreChoice);
    });

    // Find which core to load.
    var core = localStorage.getItem("core", core);
    if (!core) {
        // core = 'genesis_plus_gx';
        core = 'parallel_n64';
    }
    // Make the core the selected core in the UI.
    var coreTitle = $('#core-selector a[data-core="' + core + '"]').addClass('active').text();
    $('#dropdownMenu1').text(coreTitle);

    // Load the Core's related JavaScript.
    $.getScript(core + '_libretro.js', function() {
        $('#icnRun').removeClass('fa-spinner').removeClass('fa-spin');
        $('#icnRun').addClass('fa-play');
        $('#lblDrop').removeClass('active');
        $('#lblLocal').addClass('active');
        idbfsInit();
    });
});

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
