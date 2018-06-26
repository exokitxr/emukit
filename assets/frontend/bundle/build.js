(function(e) {
    function t(o) {
        if (a[o]) return a[o].exports;
        var r = a[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    var a = {};
    return t.m = e, t.c = a, t.i = function(e) {
        return e
    }, t.d = function(e, a, o) {
        t.o(e, a) || Object.defineProperty(e, a, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, t.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e['default']
        } : function() {
            return e
        };
        return t.d(a, 'a', a), a
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = '', t(t.s = 96)
})([function(e) {
    var t = Object.prototype.hasOwnProperty,
        a = Object.prototype.toString;
    e.exports = function(e, o, r) {
        if ('[object Function]' !== a.call(o)) throw new TypeError('iterator must be a function');
        var n = e.length;
        if (n === +n)
            for (var s = 0; s < n; s++) o.call(r, e[s], s, e);
        else
            for (var d in e) t.call(e, d) && o.call(r, e[d], d, e)
    }
}, function(e) {
    e.exports = {
        FEED: [
            [{
                type: 'tiles',
                title: 'Featured',
                sites: ['soundboxing', 'trajectilecommand', 'walkingsimulator', 'oceanofthought', 'supercraft', 'vrbeats']
            }],
            [{
                type: 'collection',
                id: 'supercraft'
            }, {
                type: 'single',
                id: 'supercraft'
            }],
            [{
                type: 'tiles',
                title: 'Newest',
                sites: ['composure', 'gridofcylinders', 'slimefreighter', 'supersays', 'jellyface', 'panomoments']
            }],
            [{
                type: 'collection',
                id: 'sketchfabenviroments'
            }, {
                type: 'single',
                id: 'sherlock'
            }],
            [{
                type: 'tiles',
                title: 'Daily Mix',
                sites: []
            }],
            [{
                type: 'collection',
                id: 'thesoundofvr'
            }, {
                type: 'single',
                id: 'underneonlights'
            }],
            [{
                type: 'collection',
                id: 'minigames'
            }, {
                type: 'single',
                id: 'soundboxing'
            }],
            [{
                type: 'collection',
                id: 'littleexperiments'
            }, {
                type: 'single',
                id: 'gridofcylinders'
            }],
            [{
                type: 'tiles',
                sites: ['thehall', 'upthere', 'speaktogo', 'nighteye', 'accessmars', 'massmigrations']
            }],
            [{
                type: 'collection',
                id: 'create'
            }, {
                type: 'single',
                id: 'apainter'
            }],
            [{
                type: 'tiles',
                sites: ['tabel', 'within', 'bear71', 'findinglove', 'sonicumbrella', 'aurora']
            }],
            [{
                type: 'collection',
                id: 'relax'
            }, {
                type: 'single',
                id: 'polygonshredder'
            }]
        ],
        COLLECTIONS: {
            usercollection: {
                id: 'usercollection',
                title: 'Your Sites',
                description: 'Your personal collection of sites!',
                image: 'collection/user.png',
                color: '#3772FF',
                sites: []
            },
            create: {
                id: 'create',
                title: 'Build and Create',
                description: 'Get those hands to work.',
                image: 'collection/create.png',
                color: '#f75c03',
                sites: ['supercraft', 'apainter', 'asaturdaynight', 'citybuilder', 'paint']
            },
            editorschoice: {
                id: 'editorschoice',
                title: 'Editor\'s Choice',
                description: 'Favorites from the Supermedium team.',
                image: 'collection/editorschoice.png',
                color: '#63CCCA',
                sites: ['soundboxing', 'jellyface', 'underneonlights', 'oceanofthought', 'origamisimulator', 'slimefreighter']
            },
            littleexperiments: {
                id: 'littleexperiments',
                title: 'Little Experiments',
                description: 'Short little demos from developers.',
                image: 'collection/experiments.png',
                color: '#00120B',
                sites: ['shootingstars', 'puppetrilla', 'spider', 'gridofcylinders', 'worms', 'webvrlab', 'epicmedievalbattle', 'darkhaze', 'forestwave', 'float', 'resonate', 'eutow', 'pokemon']
            },
            minigames: {
                id: 'minigames',
                title: 'Mini-Games',
                description: 'Grab some high scores!',
                image: 'collection/minigames.png',
                color: '#EF476F',
                sites: ['soundboxing', 'guntersofoasis', 'ablast', 'crossthestreet', 'supersays', 'spacerocks', 'spacedisaster']
            },
            relax: {
                id: 'relax',
                title: 'Meditate',
                description: 'Relax and chill.',
                image: 'collection/relax.png',
                color: '#EBA6A9',
                sites: ['polygonshredder', 'walkingsimulator', 'composure', 'oceanofthought', 'sika', 'findinglove', 'stahlhouse']
            },
            sketchfabenviroments: {
                id: 'sketchfabenviroments',
                title: 'Sketchfab Environments',
                description: 'Travel 3D environments.',
                image: 'collection/sketchfab.png',
                color: '#3BC2EE',
                sites: ['vangoghroom', 'apollo11', 'sherlock', 'sika', 'lilyandsnout', 'tombofnefertari', 'searailway', 'sherwoodforest', 'sketchfab']
            },
            thesoundofvr: {
                id: 'thesoundofvr',
                title: 'The Sound of VR',
                description: 'Groove along to musical experiences.',
                image: 'collection/music.png',
                color: '#4DA167',
                sites: ['vrbeats', 'oceanofthought', 'slimefreighter', 'soundboxing', 'insidemusic', 'dancetonite', 'underneonlights', 'brokenmantra', 'obsidian', 'puzzlerain', 'dancetonite']
            },
            supercraft: {
                id: 'supercraft',
                title: 'Supercraft Sites',
                description: 'Remix handcrafted worlds!',
                image: 'collection/supercraft.png',
                color: '#F85333',
                sites: ['supercraftcastle', 'supercraftdragon', 'supercraftblimps', 'supercraftdanger', 'supercrafttoymountain', 'supercraftcave', 'supercraftcanyon', 'supercrafthomer', 'supercraftpowerpuff']
            }
        },
        SITES: {
            soundboxing: {
                id: 'soundboxing',
                url: 'https://webvr.soundboxing.co/',
                title: 'Soundboxing Beta',
                author: 'Soundboxing + Supermedium',
                image: 'site/soundboxing.jpg',
                logo: 'site/soundboxing.png',
                description: 'A VR music kickboxing game with beats created by people. If you feel the urge to dance, you\'re doing it right!'
            },
            jellyface: {
                id: 'jellyface',
                url: 'https://joshshadik.github.io/jelly-face/',
                title: 'Jelly Face',
                author: 'Josh Shadik',
                image: 'site/jellyface.jpg',
                logo: 'site/jellyface.png',
                description: 'Pinch and squeeze these celebrities\' cheeks, or their entire head! Grandmas love this.'
            },
            oceanofthought: {
                id: 'oceanofthought',
                url: 'https://patches.vizor.io/machinedrum/ocean-of-thought',
                title: 'Ocean of Thought',
                author: 'machinedrum + fthr + lintu',
                image: 'site/oceanofthought.jpg',
                logo: 'site/oceanofthought.png',
                description: 'A surreal and relaxive music experience for Machine Drum\'s Ocean of Thought.'
            },
            guntersofoasis: {
                id: 'guntersofoasis',
                url: 'https://supermedium.com/gunters-of-oasis-deploy/',
                title: 'Gunters of OASIS',
                author: 'Supermedium',
                image: 'site/guntersofoasis.jpg',
                logo: 'site/guntersofoasis.png',
                description: 'Hundreds of generated worlds, among one lies a golden egg. First gunters to find it inherit half a hundred dollars and the OASIS.'
            },
            origamisimulator: {
                id: 'origamisimulator',
                url: 'http://apps.amandaghassaei.com/OrigamiSimulator/',
                title: 'Origami Simulator',
                author: 'Amanda Ghassaei',
                image: 'site/origamisimulator.jpg',
                logo: 'site/origamisimulator.png',
                color: '#3d954c',
                entervr: [
                    ['click', '#enterVR', 1000]
                ],
                audio: ['default', 0.5],
                highPerformance: !0,
                description: 'Grab, stretch, and simulate dozens of origami patterns folding and creasing simultaneously in 3D.'
            },
            insidemusic: {
                id: 'insidemusic',
                url: 'https://experiments.withgoogle.com/webvr/inside-music/view/',
                title: 'Inside Music',
                author: 'Song Exploder + Google',
                image: 'site/insidemusic.jpg',
                logo: 'site/insidemusic.png',
                entervr: [
                    ['click', '.webvr-ui-button', 100]
                ],
                injectScript: 'injectScripts/insidemusic.js',
                waitForWebVRReady: !0,
                description: 'Step inside music to get a closer look at how they\'re made. Explode songs to their individual ingredients.'
            },
            slimefreighter: {
                id: 'slimefreighter',
                url: 'https://slime-freighter.glitch.me/?autoplay=true',
                title: 'Slime Freighter',
                author: 'Ethan Rabb (algoraphics)',
                image: 'site/slimefreighter.jpg',
                logo: 'site/slimefreighter.png',
                description: 'A trip down a road. Emphasis on trip. VR music experience for Big Black Delta\'s \'Side of the Road\'.',
                injectScript: 'injectScripts/slimefreighter.js'
            },
            vangoghroom: {
                id: 'vangoghroom',
                url: 'https://sketchfab.com/models/311d052a9f034ba8bce55a1a8296b6f9',
                title: 'Van Gogh Room',
                author: 'Ruslan Sokolovsky',
                image: 'site/vangoghroom.jpg',
                logo: 'site/vangoghroom.png',
                description: 'The room of the artist. Recreation of Vincent Van Gogh\'s \'The Bedroom\' painting.',
                audio: ['https://supermedium.com/superassets/audio/kaiengel-remedyformelancholy.mp3', 0.75]
            },
            apollo11: {
                id: 'apollo11',
                url: 'https://sketchfab.com/models/2324f9685404433fa6231c7cb2cd2ff5',
                title: 'Apollo 11',
                author: 'The Arck Project',
                image: 'site/apollo11.jpg',
                logo: 'site/apollo11.png',
                description: 'Neil Armstrong & Buzz Aldrin landed on the moon July 20, 1969. Step onto the lunar surface alongside Armstrong.',
                audio: ['', 0]
            },
            sherlock: {
                id: 'sherlock',
                url: 'https://sketchfab.com/models/69be107ca5234ca8a9fcff6ba6851e9e',
                title: 'Sherlock',
                author: 'Aurelien Martel',
                image: 'site/sherlock.jpg',
                logo: 'site/sherlock.png',
                description: 'Visit 221B Baker Street, home of the world\'s most renowned detective.',
                audio: ['https://supermedium.com/superassets/audio/sherlock.mp3', 0.75]
            },
            supersays: {
                id: 'supersays',
                url: 'https://supermedium.com/supersays/src',
                title: 'Super Says',
                author: '@feiss',
                image: 'site/supersays.jpg',
                logo: 'site/supersays.png',
                description: 'Test your memory with Super. Memorize the color sequence and grab a high score!'
            },
            lilyandsnout: {
                id: 'lilyandsnout',
                url: 'https://sketchfab.com/models/618ea0209b1045e89b2c6d2b74d0956e',
                title: 'Lily & Snout',
                author: 'Sketchfab',
                image: 'site/lilyandsnout.jpg',
                logo: 'site/lilyandsnout.png',
                description: 'A girl, a dragon, and some berries. Pick your vantage point and watch this charming VR short.',
                audio: ['', 0]
            },
            tombofnefertari: {
                id: 'tombofnefertari',
                url: 'https://sketchfab.com/models/90034cbe58904828a11429395cef9125',
                title: 'Tomb of Nefertari',
                author: 'scionk',
                image: 'site/nefertari.jpg',
                logo: 'site/nefertari.png',
                description: 'A 3D reconstruction of QV66, the tomb of Egyptian queen Nefertari (1255 BC), in the Valley of the Queens.',
                audio: ['', 0]
            },
            searailway: {
                id: 'searailway',
                url: 'https://sketchfab.com/models/478d32513eda44338b59aa2284ee01b8',
                title: 'Sea Railway',
                author: 'fongoose',
                image: 'site/spiritedawaysearailway.jpg',
                logo: 'site/spiritedawaysearailway.png',
                description: 'Relive the Sea-Railway scene from Spirited Away.',
                audio: ['', 0]
            },
            apainter: {
                id: 'apainter',
                url: 'https://aframe.io/a-painter/',
                title: 'A-Painter',
                author: 'A-Frame Authors',
                image: 'site/apainter.jpg',
                logo: 'site/apainter.png',
                audio: ['default', 0.5],
                highPerformance: !0,
                description: 'Paint in VR! Create a masterpiece with dozens of brushes available. Save your painting and share it with your friends.'
            },
            dancetonite: {
                id: 'dancetonite',
                url: 'https://tonite.dance/',
                title: 'Dance Tonite',
                author: 'Jonathan Puckey and Moniker',
                image: 'site/dancetonite.jpg',
                logo: 'site/dancetonite.png',
                entervr: [
                    ['click', '.button-play', 250],
                    ['click', '.mod-bottom-right .button-item:first-child', 500]
                ],
                highPerformance: !0,
                description: 'Go from room to room watching dances created entirely by fans. An ever-changing VR collaboration by LCD Soundsystem.'
            },
            underneonlights: {
                id: 'underneonlights',
                url: 'https://player.with.in/embed/?id=541&resolution=1920&forced=false&autoplay=true&t=0&internal=true',
                title: 'Under Neon Lights',
                author: 'Within',
                image: 'site/underneonlights.jpg',
                logo: 'site/underneonlights.png',
                description: 'Enter a world of imagination and color in this interactive music experience for The Chemical Brothers Under Neon Lights.'
            },
            tabel: {
                id: 'tabel',
                url: 'https://tabel.withgoogle.com/film',
                title: 'Tabel',
                author: 'Art Copy & Code + Google',
                image: 'site/tabel.jpg',
                logo: 'site/tabel.png',
                entervr: [
                    ['click', '.vr-controls', 200]
                ],
                injectScript: 'injectScripts/tabel.js',
                waitForWebVRReady: !0,
                description: 'A tasty allegory for global inaction in the face of climate change. Listen to the conversation you want.'
            },
            musicalforest: {
                id: 'musicalforest',
                url: 'https://forest.webvrexperiments.com/',
                title: 'Musical Forest',
                author: 'Google Creative Lab',
                color: '#f09e93',
                image: 'site/musicalforest.jpg',
                logo: 'site/musicalforest.png',
                entervr: [
                    ['click', '#enterButton .webvr-ui-button', 1000]
                ],
                description: 'Join users from around the world in a musical forest. Tap or click a shape to play it. You can add shapes too!'
            },
            puzzlerain: {
                id: 'puzzlerain',
                url: 'https://supermedium.com/puzzle-rain/app/?mode=normal',
                title: 'Puzzle Rain',
                author: 'Mozilla',
                image: 'site/puzzlerain.jpg',
                logo: 'site/puzzlerain.png',
                description: 'A musical WebVR journey.'
            },
            obsidian: {
                id: 'obsidian',
                url: 'https://xplsv.github.io/obsidian/?webvr',
                title: 'Obsidian',
                author: 'xplsv + Mr.doob',
                image: 'site/obsidian.jpg',
                logo: 'site/obsidian.png',
                entervr: [
                    ['click', '#info button:last-child[onclick]', 100],
                    ['click', 'canvas + button', 150]
                ],
                description: 'To the electronic beat of Om Unit and Lorn, watch an ever-changing sphere as you travel down a tunnel of lights bombarding the senses.'
            },
            brokenmantra: {
                id: 'brokenmantra',
                url: 'https://mrdoob.github.io/brokenmantra/?webvr',
                title: 'Broken Mantra',
                author: 'Mr.doob',
                image: 'site/brokenmantra.jpg',
                logo: 'site/brokenmantra.png',
                entervr: [
                    ['click', '#start', 100],
                    ['click', 'button', 200]
                ],
                description: 'Feel the bass in a computer generated music video for Lorn\'s \'Broken Mantra\'. Orbs, particles, lights, streaks, glitch, music.'
            },
            stahlhouse: {
                id: 'stahlhouse',
                url: 'http://paragram.io/view/?id=stahl&vr=true',
                title: 'Stahl House',
                author: 'Paragram',
                image: 'site/stahlhouse.jpg',
                logo: 'site/stahlhouse.png',
                description: 'Visit Stahl House in Hollywood Hills, an iconic representation of modern architecture in LA.'
            },
            paint: {
                id: 'paint',
                url: 'https://supermedium.com/three.js/examples/webvr_vive_paint.html',
                title: 'Paint',
                author: 'Mr.doob',
                image: 'site/paint.jpg',
                logo: 'site/paint.png',
                entervr: [
                    ['click', 'body > button:last-child', 500]
                ],
                audio: ['default', 0.5],
                highPerformance: !0,
                description: 'Paint, draw, doodle, sketch.'
            },
            spacedisaster: {
                id: 'spacedisaster',
                url: 'https://www.blend4web.com/apps/space_disaster/space_disaster.html?v=063e38d76f7a243a3b5b97e9ce5d0b96',
                title: 'Space Disaster',
                author: 'Blend4Web',
                image: 'site/spacedisaster.jpg',
                logo: 'site/spacedisaster.png',
                entervr: [
                    ['click', 'canvas', 100]
                ],
                injectScript: 'injectScripts/spacedisaster.js',
                waitForWebVRReady: !0,
                cardboard: !0,
                description: 'Zip through the asteroid belt in your laser-equipped spaceship.'
            },
            polygonshredder: {
                id: 'polygonshredder',
                url: 'http://swimminglessonsformodernlife.com/polygon-shredder/',
                title: 'Polygon Shredder',
                author: 'Jaume Sanchez Elias (@thespite)',
                image: 'site/polygonshredder.jpg',
                logo: 'site/polygonshredder.png',
                highPerformance: !0,
                description: 'A whirlwind of confetti amassed from shredded cubes and polygons.'
            },
            findinglove: {
                id: 'findinglove',
                url: 'https://findinglove.activetheory.net/',
                title: 'Finding Love',
                author: 'Active Theory',
                image: 'site/findinglove.jpg',
                logo: 'site/findinglove.png',
                entervr: [
                    ['click', '.LoaderUICTA .hit', 100]
                ],
                injectScript: 'injectScripts/findinglove.js',
                waitForWebVRReady: !0,
                description: 'We fall in love by chance. We stay in love by chance. A virtual reality story for us.'
            },
            sonicumbrella: {
                id: 'sonicumbrella',
                url: 'https://sonicumbrella.com/',
                title: 'Sonic Umbrella',
                author: 'Plan 8',
                image: 'site/sonicumbrella.jpg',
                logo: 'site/sonicumbrella.png',
                entervr: [
                    ['click', '#enterVrButtonContainer .webvr-ui-button', 500]
                ],
                injectScript: 'injectScripts/sonicumbrella.js',
                waitForWebVRReady: !0,
                highPerformance: !0,
                description: 'Stand under a umbrella and hear the sounds of raining dog toys, ping pong balls, and more. Listen to objects crashing all around.'
            },
            upthere: {
                id: 'upthere',
                url: 'https://ngokevin.github.io/up-there-webvr',
                title: 'Up There',
                author: 'Charlie Hoey (@flimshaw)',
                image: 'site/upthere.jpg',
                logo: 'site/upthere.png',
                description: 'Planetarium of 100K real stars. Spot exoplanets, travel through time, hold the galaxy in your hands with the grip buttons.'
            },
            spider: {
                id: 'spider',
                url: 'https://demo.marpi.pl/spider/',
                title: 'Spider',
                author: 'Marpi',
                image: 'site/spider.jpg',
                logo: 'site/spider.png',
                audio: ['https://supermedium.com/superassets/audio/bluedotsessions-bauxite.mp3', 0.2],
                entervr: [
                    ['click', 'img:last-child', 100]
                ],
                highPerformance: !0,
                description: 'Come visit your little pet spider in VR!'
            },
            shootingstars: {
                id: 'shootingstars',
                url: 'https://aframe-shooting-stars.glitch.me/',
                title: 'Shooting Stars',
                author: 'Philip Bell',
                image: 'site/shootingstars.jpg',
                logo: 'site/shootingstars.png',
                entervr: [
                    ['click', '.a-enter-vr-button', 500]
                ],
                highPerformance: !0,
                description: 'Get lost in an explosion of colors.'
            },
            float: {
                id: 'float',
                url: 'https://ngokevin.github.io/float/',
                title: 'Float',
                author: 'eleVR (incl. Vi Hart)',
                image: 'site/float.jpg',
                logo: 'site/float.png',
                entervr: [
                    ['click', 'canvas + button', 500]
                ],
                description: 'A puzzle of floating platforms admist blooming plants and sky islands.'
            },
            aurora: {
                id: 'aurora',
                url: 'http://www.gnometech.com/webvr/aurora/',
                title: 'Aurora',
                author: 'Gnometech',
                cardboard: !0,
                image: 'site/aurora.jpg',
                logo: 'site/aurora.png',
                audio: ['https://supermedium.com/superassets/audio/kaiengle-sunset.mp3', 0.4],
                highPerformance: !0,
                description: 'Catch the northern lights (aurora borealis) live in Yellowknife, Canada.'
            },
            forestwave: {
                id: 'forestwave',
                url: 'https://forestwave.glitch.me/',
                title: 'Forest Wave',
                author: 'alfredofrlp',
                image: 'site/forestwave.jpg',
                logo: 'site/forestwave.png',
                entervr: [
                    ['click', '.a-enter-vr-button', 500]
                ],
                description: 'Trippy space forest.'
            },
            crossthestreet: {
                id: 'crossthestreet',
                url: 'https://crossthestreet.fun/game/',
                title: 'Cross the Street',
                author: 'SROMLINE',
                image: 'site/crossthestreet.jpg',
                logo: 'site/crossthestreet.png',
                entervr: [
                    ['click', '.a-enter-vr-button', 100]
                ],
                description: 'How many times can you cross the Golden Gate bridge without getting hit by a car? Get on the global leaderboards!'
            },
            bear71: {
                id: 'bear71',
                url: 'https://bear71vr.nfb.ca/',
                title: 'Bear 71',
                author: 'National Film Board of Canada',
                image: 'site/bear71.jpg',
                logo: 'site/bear71.png',
                entervr: [
                    ['mouseover', '#start-experience-vr-button', 100],
                    ['mousedown', '#start-experience-vr-button', 150],
                    ['mouseup', '#start-experience-vr-button', 200],
                    ['click', '#start-experience-vr-button', 250]
                ],
                cardboard: !0,
                description: 'Blur the line between the wild world and the wired one. Follow Bear 71, a female grizzly bear living in the Canadian Rockies.'
            },
            thehall: {
                id: 'thehall',
                url: 'https://cecropia.github.io/thehallaframe/',
                title: 'The Hall',
                author: 'Cecropia Solutions',
                image: 'site/thehall.jpg',
                logo: 'site/thehall.png',
                description: 'A fine little museum. Statues, kinectic sculptures, and paintings.'
            },
            citybuilder: {
                id: 'citybuilder',
                url: 'https://aframe.city/',
                title: 'City Builder',
                author: 'Kieran Farr',
                image: 'site/citybuilder.jpg',
                logo: 'site/citybuilder.png',
                entervr: [
                    ['click', '.a-enter-vr-button', 500]
                ],
                audio: ['default', 0.5],
                description: 'Create a virtual city with your hands using a library of pixel-style models. You are the mayor.'
            },
            within: {
                id: 'within',
                url: 'https://vr.with.in/',
                title: 'Within',
                author: 'Within',
                image: 'site/within.jpg',
                logo: 'site/within.png',
                entervr: [
                    ['click', '.container .button:last-child', 100]
                ],
                description: 'Extraordinary stories in virtual reality. Space adventures and marine seascapes. A produced library of 360-degree videos.'
            },
            resonate: {
                id: 'resonate',
                url: 'https://classes.marpi.pl/resonate/',
                title: 'Resonate: Audio Reactive',
                author: 'Marpi',
                image: 'site/resonate.jpg',
                logo: 'site/resonate.png',
                entervr: [
                    ['click', 'canvas + button', 150]
                ],
                highPerformance: !0,
                description: 'Ride the audio reactive waves. First installment of featuring generative VR worlds.'
            },
            speaktogo: {
                id: 'speaktogo',
                url: 'https://speaktogo.withgoogle.com/',
                title: 'Speak to Go',
                author: 'Google Creative Lab',
                image: 'site/speaktogo.jpg',
                logo: 'site/speaktogo.png',
                entervr: [
                    ['click', '#entervr-button', 100]
                ],
                cardboard: !0,
                audio: ['https://supermedium.com/superassets/audio/gillicuddy-springish.mp3', 0.5],
                highPerformance: !0,
                description: 'Discover somewhere new in the world. 360-degree imagery from around the globe. Press the trigger instead of the spacebar.'
            },
            spacerocks: {
                id: 'spacerocks',
                url: 'https://spacerocks.moar.io/',
                title: 'Space Rocks',
                author: 'Stewart Smith',
                image: 'site/spacerocks.jpg',
                logo: 'site/spacerocks.png',
                entervr: [
                    ['mousedown', '#vr-toggle-container', 100]
                ],
                audio: ['https://supermedium.com/superassets/audio/ryancullinane-runningwithdrums.mp3', 0.5],
                description: 'Escape through space on stolen plasma engines while slinging photon bolts at deadly asteroids. How many can you blow apart?'
            },
            darkhaze: {
                id: 'darkhaze',
                url: 'https://christmasexperiments.com//xps/2016/24/dark-haze/',
                title: 'Dark Haze',
                author: 'Can x Gloom x Marpi x Spite',
                image: 'site/darkhaze.jpg',
                logo: 'site/darkhaze.png',
                color: '#958663',
                entervr: [
                    ['click', 'img[src=\'enter.png\']', 1000]
                ],
                highPerformance: !0,
                description: 'Where dust, smoke and other dry particles obscure the clarity of the sky. A Christmas Experiment.'
            },
            nighteye: {
                id: 'nighteye',
                url: 'https://christmasexperiments.com/xps/2016/01/night-eye/',
                title: 'Night Eye',
                author: 'Lin.Bert Collective',
                image: 'site/nighteye.jpg',
                logo: 'site/nighteye.png',
                color: '#4c928a',
                entervr: [
                    ['click', '#enterVr', 200],
                    ['click', '.button-sound', 200]
                ],
                injectScript: 'injectScripts/nighteyes.js',
                waitForWebVRReady: !0,
                description: 'Using abstract lines to recreate the shape of the animals in the forest. Click the thumb at the winds to move.'
            },
            ablast: {
                id: 'ablast',
                url: 'https://aframe.io/a-blast/',
                title: 'A-Blast',
                author: 'A-Frame Authors',
                image: 'site/ablast.jpg',
                logo: 'site/ablast.png',
                description: 'Stay alert as creatures happily fire at your from all angles. Protect yourself with laser pistols. Shoot down projectiles that come at you.'
            },
            asaturdaynight: {
                id: 'asaturdaynight',
                url: 'https://aframe.io/a-saturday-night/',
                title: 'A Saturday Night',
                author: 'A-Frame Authors',
                image: 'site/asaturdaynight.jpg',
                logo: 'site/asaturdaynight.png',
                description: 'The hottest dance club. Be a bear, a chicken, Elvis, or a disco lady, and shake it off. Record a dance in VR and show the world your moves.'
            },
            accessmars: {
                id: 'accessmars',
                url: 'https://accessmars.withgoogle.com/',
                title: 'Access Mars',
                author: 'Google Creative Lab & NASA JPL',
                image: 'site/accessmars.jpg',
                logo: 'site/accessmars.png',
                entervr: [
                    ['click', '.webvr-ui-button', 100]
                ],
                audio: ['default', 0.5],
                description: 'The real surface of Mars from over 200,000 photographs sent back to Earth by the Curiosity rover. Used by NASA JPL scientists.'
            },
            eutow: {
                id: 'eutow',
                url: 'https://demo.marpi.pl/archan/eutow/',
                title: 'Eutow',
                author: 'Marpi',
                image: 'site/eutow.jpg',
                logo: 'site/eutow.png',
                entervr: [
                    ['click', 'img[src=\'enter.png\']', 1000]
                ],
                highPerformance: !0,
                description: 'A Virtual Reality collaboration with Archan Nair, a series of 3D virtual worlds with music by An on Bast.'
            },
            massmigrations: {
                id: 'massmigrations',
                url: 'https://massmigrations.com/ide',
                title: 'Mass Migrations',
                author: 'Marpi',
                image: 'site/massmigrations.jpg',
                logo: 'site/massmigrations.png',
                entervr: [
                    ['click', '#vr', 1000]
                ],
                highPerformance: !0,
                description: 'An experiment in mecha world creation. Create, adopt and set them free.'
            },
            virtualartsessions: {
                id: 'virtualartsessions',
                url: 'https://virtualart.chromeexperiments.com/vr/',
                title: 'Virtual Art Sessions',
                author: 'Google',
                image: 'site/virtualartsessions.jpg',
                logo: 'site/virtualartsessions.png',
                entervr: [
                    ['click', '#webvr_button', 2000]
                ],
                audio: ['default', 0.5],
                description: 'Six world-renowned artists given a new way to paint, draw, and sculpt. Observe them as they paint.'
            },
            webvrlab: {
                id: 'webvrlab',
                url: 'https://playcanv.as//index/GgVZJtha',
                title: 'WebVR Lab',
                author: 'PlayCanvas',
                image: 'site/playcanvaswebvrlab.jpg',
                logo: 'site/playcanvaswebvrlab.png',
                entervr: [
                    ['click', '#vr-button', 100]
                ],
                highPerformance: !0,
                description: 'Fire some confetti and play the record. A small lab demonstrating various interactions in VR. Teleport, grab, throw.'
            },
            pokemon: {
                id: 'pokemon',
                url: 'https://ngokevin.github.io/kframe/scenes/pokemon/',
                title: 'Pokemon',
                author: 'Kevin Ngo',
                image: 'site/pokemon.jpg',
                logo: 'site/pokemon.png',
                description: 'Stand from the trainer\'s stand at the Pokemon Stadium with Pikachu against Charizard.'
            },
            destroyedsubway: {
                id: 'destroyedsubway',
                url: 'https://sketchfab.com/models/d7fbea6211aa4116ae8a3a882af55c6c',
                title: 'Destroyed Subway',
                author: 'Aur<C3><83><C2><A9>lien Marlle',
                image: 'site/destroyedsubway.jpg',
                logo: 'site/destroyedsubway.png',
                description: 'A subway that won\'t be in service any time soon. Inspired by post-apocalyptic horror game Metro 2033.',
                audio: ['', 0]
            },
            sherwoodforest: {
                id: 'sherwoodforest',
                url: 'https://sketchfab.com/models/63dd568f5bc64e8694d5f4252924c99e',
                title: 'Sherwood Forest',
                author: 'Lisa Shcheglova',
                image: 'site/robinhoodinsherwoodforest.jpg',
                logo: 'site/robinhoodinsherwoodforest.png',
                description: 'Welcome to Sherwood Forest!',
                audio: ['https://supermedium.com/superassets/audio/unthunk-flummox.mp3', 1]
            },
            sika: {
                id: 'sika',
                url: 'https://sketchfab.com/models/7bb67d1dea724a6eb4ebe21bcf94b09e',
                title: 'SIKA',
                author: 'Marine Quiviger',
                image: 'site/sika.jpg',
                logo: 'site/sika.png',
                description: 'Deer under a cherry blossom on an island in the moonlit lake.',
                audio: ['https://supermedium.com/superassets/audio/chanwaitfat-dream.mp3', 0.75]
            },
            sketchfab: {
                id: 'sketchfab',
                url: 'https://sketchfab.com/vr-launcher?model=c0022acc4f3242e2bcae8043e08df8cc&vr_link_navigation=1#home?cursor=firstPage',
                title: 'Sketchfab VR',
                author: 'Sketchfab',
                image: 'site/sketchfabvr.jpg',
                logo: 'site/sketchfabvr.png',
                description: 'Browse from Sketchfab\'s repository of 3D models in VR.',
                audio: ['default', 0.5]
            },
            gridofcylinders: {
                id: 'gridofcylinders',
                url: 'https://www.shadertoy.com/view/4dSGW1',
                title: 'Grid of Cylinders',
                author: 'Inigo Quilez (iq)',
                image: 'site/gridofcylinders.jpg',
                logo: 'site/gridofcylinders.png',
                description: 'An infinite grid of cylinders, like the swelling waves of the ocean. An expanse of mountains, rising and falling, forever.',
                audio: ['https://super.xyz/superassets/audio/iansutherland-giant.mp3', 0.5]
            },
            cubescape: {
                id: 'cubescape',
                url: 'https://www.shadertoy.com/view/Msl3Rr',
                title: 'Cubescape',
                author: 'Inigo Quilez (iq)',
                image: 'site/cubescape.jpg',
                logo: 'site/cubescape.png',
                description: 'Marvel at the fine detail of the wood-grained waveforms. Rounded pulsating cubes that bounce to the beat.'
            },
            worms: {
                id: 'worms',
                url: 'https://www.shadertoy.com/view/XsjXR1',
                title: 'Worms',
                author: 'Inigo Quilez (iq)',
                image: 'site/worms.jpg',
                logo: 'site/worms.png',
                audio: ['https://ucarecdn.com/a74adaa6-c896-4419-a7f0-cd217a651059/', 0.1],
                description: 'A surreal experience in a forest of strand things.'
            },
            witchesbrew: {
                id: 'witchesbrew',
                url: 'https://ravenworks.ca/witch/',
                title: 'Witch\'s Brew',
                author: 'Andrew Fraticelli (@ravenworks)',
                image: 'site/witchsbrew.jpg',
                logo: 'site/witchsbrew.png',
                description: 'Mix together a red potion, some blue potion, a bit of yellow potion, and baby you\'ve got a stew going.'
            },
            puppetrilla: {
                id: 'puppetrilla',
                url: 'https://www.jorgefuentes.net/projects/puppetrilla/',
                title: 'Ye Olde Puppetrilla',
                author: 'Jorge Fuentes (@jorgefuentesnet)',
                image: 'site/puppetrilla.jpg',
                logo: 'site/puppetrilla.png',
                description: 'Ye Olde Puppetrilla has arrived in town and everybody\'s here to enjoy your puppeteering skills. It\'s showtime!'
            },
            epicmedievalbattle: {
                id: 'epicmedievalbattle',
                url: 'https://www.thedart76.com/webvr/epic-medieval-battle/emb.html',
                title: 'Medieval Dance Battle',
                author: 'Danilo Pasquariello (@thedart76)',
                image: 'site/epicmedievalbattle.jpg',
                logo: 'site/epicmedievalbattle.png',
                description: 'A medieval dance-off. Sit back and be the judge, who\'s got the moves?'
            },
            panomoments: {
                id: 'panomoments',
                url: 'https://my.panomoments.com',
                title: 'PanoMoments',
                author: 'PanoMoments',
                image: 'site/panomoments.jpg',
                logo: 'site/panomoments.png',
                audio: ['default', 0.5],
                description: 'The GIFs of VR, control time with your gaze! Press any button navigate through visual stories and living photos.'
            },
            composure: {
                id: 'composure',
                url: 'https://composure.site/prelude',
                title: 'C O M P O S U R E',
                author: 'Jeff McSpadden & Ian Petrarca',
                image: 'site/composure.jpg',
                logo: 'site/composure.png',
                description: 'Immersive music experience for stress relief.'
            },
            trajectilecommand: {
                id: 'trajectilecommand',
                url: 'http://micosmo.com/trajectilecommand/',
                title: 'Trajectile Command',
                author: '@AdamAlexandr',
                image: 'site/trajectilecommand.jpg',
                logo: 'site/trajectilecommand.png',
                description: 'Defend your cities from missiles and bombers! Inspired by an old arcade classic.'
            },
            supercraft: {
                id: 'supercraft',
                url: 'https://supermedium.com/craft/',
                title: 'Supercraft',
                author: 'Supermedium',
                image: 'site/supercraft.jpg',
                logo: 'site/supercraft.png',
                description: 'Build a VR world in minutes! Publish your creation instantly to the Web to share with your friends.'
            },
            supercraftdragon: {
                id: 'supercraftdragon',
                url: 'https://supermedium.com/craft/bawdy-wealth',
                title: 'Dragon',
                author: 'Diego F. Goberna',
                image: 'site/supercraftdragon.jpg',
                isSupercraft: !0
            },
            supercraftblimps: {
                id: 'supercraftblimps',
                url: 'https://supermedium.com/craft/fierce-talk',
                title: 'Blimps',
                author: 'Diego F. Goberna',
                image: 'site/supercraftblimps.jpg',
                isSupercraft: !0
            },
            supercraftcastle: {
                id: 'supercraftcastle',
                url: 'https://supermedium.com/craft/icky-snake',
                title: 'Castle of Mystery',
                author: 'Diego F. Goberna',
                image: 'site/supercraftcastle.jpg',
                isSupercraft: !0
            },
            supercraftmecha: {
                id: 'supercraftmecha',
                url: 'https://supermedium.com/craft/cooperative-potato',
                title: 'Mecha',
                author: 'Diego F. Goberna',
                image: 'site/supercraftmecha.jpg',
                isSupercraft: !0
            },
            supercrafttoymountain: {
                id: 'supercrafttoymountain',
                url: 'https://supermedium.com/craft/shocking-hose',
                title: 'Toy Mountain',
                author: 'Diego F. Goberna',
                image: 'site/supercrafttoymountain.jpg',
                isSupercraft: !0
            },
            supercraftdanger: {
                id: 'supercraftdanger',
                url: 'https://supermedium.com/craft/onerous-chalk',
                title: 'Danger',
                author: 'Diego F. Goberna',
                image: 'site/supercraftdanger.jpg',
                isSupercraft: !0
            },
            supercrafthomer: {
                id: 'supercrafthomer',
                url: 'https://supermedium.com/craft/dangerous-cars',
                title: 'Homer',
                author: 'Diego F. Goberna',
                image: 'site/supercrafthomer.jpg',
                isSupercraft: !0
            },
            supercraftpowerpuff: {
                id: 'supercraftpowerpuff',
                url: 'https://supermedium.com/craft/previous-acoustics',
                title: 'Powerpuff',
                author: 'Diego F. Goberna',
                image: 'site/supercraftpowerpuff.jpg',
                isSupercraft: !0
            },
            supercraftcave: {
                id: 'supercraftcave',
                url: 'https://supermedium.com/craft/wealthy-dock',
                title: 'Cave',
                author: 'Kevin Ngo',
                image: 'site/supercraftcave.jpg',
                isSupercraft: !0
            },
            supercraftcanyon: {
                id: 'supercraftcanyon',
                url: 'https://supermedium.com/craft/optimal-marble',
                title: 'Canyon',
                author: 'Diego F. Goberna',
                image: 'site/supercraftcanyon.jpg',
                isSupercraft: !0
            },
            walkingsimulator: {
                id: 'walkingsimulator',
                url: 'https://projects.gatunes.com/wsvr/#/61331/446,-446',
                title: 'Walking Simulator VR',
                author: 'Daniel Esteban (@danigatunes)',
                image: 'site/walkingsimulator.jpg',
                logo: 'site/walkingsimulator.png',
                description: 'Not all who wander are lost. An infinite generated Minecraft-like world.'
            },
            vrbeats: {
                id: 'vrbeats',
                url: 'https://vrbeats.gatunes.com/',
                title: 'VR Beats',
                author: 'Daniel Esteban (@danigatunes)',
                image: 'site/vrbeats.jpg',
                logo: 'site/vrbeats.png',
                description: 'Come on, DJ, turn the music up. Mix and sequence your own rhythms and tunes!'
            }
        }
    }
}, function(e) {
    e.exports = function(e) {
        return JSON.parse(JSON.stringify(e))
    }
}, function(e, t, a) {
    'use strict';

    function o(e, t) {
        var o = a(0),
            r = this;
        'function' == typeof Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : r.stack = new Error().stack || 'Cannot get a stacktrace, browser is too old', this.name = 'AlgoliaSearchError', this.message = e || 'Unknown error', t && o(t, function(e, t) {
            r[t] = e
        })
    }

    function r(e, t) {
        function a() {
            var a = Array.prototype.slice.call(arguments, 0);
            'string' != typeof a[0] && a.unshift(t), o.apply(this, a), this.name = 'AlgoliaSearch' + e + 'Error'
        }
        return n(a, o), a
    }
    var n = a(11);
    n(o, Error), e.exports = {
        AlgoliaSearchError: o,
        UnparsableJSON: r('UnparsableJSON', 'Could not parse the incoming response as JSON, see err.more for details'),
        RequestTimeout: r('RequestTimeout', 'Request timedout before getting a response'),
        Network: r('Network', 'Network issue, see err.more for details'),
        JSONPScriptFail: r('JSONPScriptFail', '<script> was loaded but did not call our provided callback'),
        JSONPScriptError: r('JSONPScriptError', '<script> unable to load due to an `error` event on it'),
        Unknown: r('Unknown', 'Unknown error occured')
    }
}, function(e, t, a) {
    (function(o) {
        function r() {
            var e;
            try {
                e = t.storage.debug
            } catch (t) {}
            return !e && 'undefined' != typeof o && 'env' in o && (e = o.env.DEBUG), e
        }
        t = e.exports = a(100), t.log = function() {
            return 'object' == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }, t.formatArgs = function(e) {
            var a = this.useColors;
            if (e[0] = (a ? '%c' : '') + this.namespace + (a ? ' %c' : ' ') + e[0] + (a ? '%c ' : ' ') + '+' + t.humanize(this.diff), !!a) {
                var o = 'color: ' + this.color;
                e.splice(1, 0, o, 'color: inherit');
                var r = 0,
                    n = 0;
                e[0].replace(/%[a-zA-Z%]/g, function(e) {
                    '%%' === e || (r++, '%c' === e && (n = r))
                }), e.splice(n, 0, o)
            }
        }, t.save = function(e) {
            try {
                null == e ? t.storage.removeItem('debug') : t.storage.debug = e
            } catch (t) {}
        }, t.load = r, t.useColors = function() {
            return 'undefined' != typeof window && window.process && 'renderer' === window.process.type || 'undefined' != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || 'undefined' != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && 31 <= parseInt(RegExp.$1, 10) || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }, t.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : function() {
            try {
                return window.localStorage
            } catch (t) {}
        }(), t.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'], t.formatters.j = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return '[UnexpectedJSONParseError]: ' + e.message
            }
        }, t.enable(r())
    }).call(t, a(9))
}, function(e) {
    var t = function() {
        return this
    }();
    try {
        t = t || Function('return this')() || (1, eval)('this')
    } catch (a) {
        'object' == typeof window && (t = window)
    }
    e.exports = t
}, function(e, t, a) {
    var o = a(0);
    e.exports = function(e, t) {
        var a = [];
        return o(e, function(o, r) {
            a.push(t(o, r, e))
        }), a
    }
}, function(e) {
    e.exports.truncate = function(e, t, a) {
        return e ? (a && (e = e.replace('https://', '').replace('http://', '')), e.length >= t ? e.substring(0, t - 3) + '...' : e) : ''
    }
}, function(e) {
    var t = {}.toString;
    e.exports = Array.isArray || function(e) {
        return '[object Array]' == t.call(e)
    }
}, function(e) {
    function t() {
        throw new Error('setTimeout has not been defined')
    }

    function a() {
        throw new Error('clearTimeout has not been defined')
    }

    function o(e) {
        if (u === setTimeout) return setTimeout(e, 0);
        if ((u === t || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);
        try {
            return u(e, 0)
        } catch (t) {
            try {
                return u.call(null, e, 0)
            } catch (t) {
                return u.call(this, e, 0)
            }
        }
    }

    function r(e) {
        if (p === clearTimeout) return clearTimeout(e);
        if ((p === a || !p) && clearTimeout) return p = clearTimeout, clearTimeout(e);
        try {
            return p(e)
        } catch (t) {
            try {
                return p.call(null, e)
            } catch (t) {
                return p.call(this, e)
            }
        }
    }

    function n() {
        g && b && (g = !1, b.length ? m = b.concat(m) : h = -1, m.length && s())
    }

    function s() {
        if (!g) {
            var e = o(n);
            g = !0;
            for (var t = m.length; t;) {
                for (b = m, m = []; ++h < t;) b && b[h].run();
                h = -1, t = m.length
            }
            b = null, g = !1, r(e)
        }
    }

    function l(e, t) {
        this.fun = e, this.array = t
    }

    function d() {}
    var c = e.exports = {},
        u, p;
    (function() {
        try {
            u = 'function' == typeof setTimeout ? setTimeout : t
        } catch (a) {
            u = t
        }
        try {
            p = 'function' == typeof clearTimeout ? clearTimeout : a
        } catch (t) {
            p = a
        }
    })();
    var m = [],
        g = !1,
        h = -1,
        b;
    c.nextTick = function(e) {
        var t = Array(arguments.length - 1);
        if (1 < arguments.length)
            for (var a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];
        m.push(new l(e, t)), 1 !== m.length || g || o(s)
    }, l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, c.title = 'browser', c.browser = !0, c.env = {}, c.argv = [], c.version = '', c.versions = {}, c.on = d, c.addListener = d, c.once = d, c.off = d, c.removeListener = d, c.removeAllListeners = d, c.emit = d, c.prependListener = d, c.prependOnceListener = d, c.listeners = function() {
        return []
    }, c.binding = function() {
        throw new Error('process.binding is not supported')
    }, c.cwd = function() {
        return '/'
    }, c.chdir = function() {
        throw new Error('process.chdir is not supported')
    }, c.umask = function() {
        return 0
    }
}, function(e, t, a) {
    e.exports = function(e, t) {
        return function(a, r, n) {
            if ('function' == typeof a && 'object' == typeof r || 'object' == typeof n) throw new o.AlgoliaSearchError('index.search usage is index.search(query, params, cb)');
            0 === arguments.length || 'function' == typeof a ? (n = a, a = '') : (1 === arguments.length || 'function' == typeof r) && (n = r, r = void 0), 'object' == typeof a && null !== a ? (r = a, a = void 0) : (void 0 === a || null === a) && (a = '');
            var s = '';
            void 0 !== a && (s += e + '=' + encodeURIComponent(a));
            var l;
            return void 0 !== r && (r.additionalUA && (l = r.additionalUA, delete r.additionalUA), s = this.as._getSearchParams(r, s)), this._search(s, t, n, l)
        }
    };
    var o = a(3)
}, function(e) {
    e.exports = 'function' == typeof Object.create ? function(e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    } : function(e, t) {
        e.super_ = t;
        var a = function() {};
        a.prototype = t.prototype, e.prototype = new a, e.prototype.constructor = e
    }
}, function(e) {
    e.exports = 'uniform mat4 inverseMatrix;\nvarying vec2 vUv;\nvarying vec3 vLocalCameraPosition;\nvarying vec3 vNormal;\nvarying vec3 vWorldPosition;\n\nvoid main() {\n  vec4 worldPosition = modelMatrix * vec4(position, 1.0);\n  vWorldPosition = worldPosition.xyz;\n\n  // Transform global camera position to local space of object.\n  vLocalCameraPosition = vec4(vec4(cameraPosition, 1.0) * inverseMatrix).xyz;\n  vUv = uv;\n  vNormal = normal;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n'
}, function(e, t, a) {
    function o(e, t) {
        var a, o, r, n;
        return r = t.split('.'), o = r[0], n = r[1], a = e.components[o] || AFRAME.components[o], a ? n && !a.schema[n] ? null : n ? a.schema[n].type : a.schema.type : null
    }

    function r(e) {
        e.x = THREE.Math.degToRad(e.x), e.y = THREE.Math.degToRad(e.y), e.z = THREE.Math.degToRad(e.z)
    }

    function n(e, t, a) {
        var o;
        for (o = 0; o < t.length; o++) e.addEventListener(t[o], a)
    }

    function s(e, t, a) {
        var o;
        for (o = 0; o < t.length; o++) e.removeEventListener(t[o], a)
    }

    function l(e, t) {
        var a, o, r;
        for (o = c(t), r = e, a = 0; a < o.length; a++) r = r[o[a]];
        return r
    }

    function d(e, t, a, o) {
        var r, n, s, l;
        for (n = c(t), l = e, r = 0; r < n.length - 1; r++) l = l[n[r]];
        return s = n[n.length - 1], o === v ? void('r' in l[s] ? (l[s].r = a.r, l[s].g = a.g, l[s].b = a.b) : (l[s].x = a.r, l[s].y = a.g, l[s].z = a.b)) : void(l[s] = a)
    }

    function c(e) {
        return e in f ? f[e] : (f[e] = e.split('.'), f[e])
    }

    function u(e) {
        return e.isRawProperty || e.property.startsWith(x) || e.property.startsWith(A)
    }
    var p = a(42);
    if (AFRAME.anime = p, 'undefined' == typeof AFRAME) throw new Error('Component attempted to register before AFRAME was available.');
    var m = new THREE.Color,
        g = new THREE.Color,
        h = AFRAME.utils,
        b = h.entity.getComponentProperty,
        y = h.entity.setComponentProperty,
        f = {},
        v = 'color',
        k = 'rotation',
        x = 'components',
        A = 'object3D';
    AFRAME.registerComponent('animation', {
        schema: {
            autoplay: {
                default: !0
            },
            delay: {
                default: 0
            },
            dir: {
                default: ''
            },
            dur: {
                default: 1e3
            },
            easing: {
                default: 'easeInQuad'
            },
            elasticity: {
                default: 400
            },
            from: {
                default: ''
            },
            loop: {
                default: 0,
                parse: function(e) {
                    return !0 === e || 'true' === e || (!1 === e || 'false' === e ? !1 : parseInt(e, 10))
                }
            },
            property: {
                default: ''
            },
            startEvents: {
                type: 'array'
            },
            pauseEvents: {
                type: 'array'
            },
            resumeEvents: {
                type: 'array'
            },
            to: {
                default: ''
            },
            type: {
                default: ''
            },
            isRawProperty: {
                default: !1
            }
        },
        multiple: !0,
        init: function() {
            var e = this;
            this.eventDetail = {
                name: this.attrName
            }, this.time = 0, this.animation = null, this.animationIsPlaying = !1, this.onStartEvent = this.onStartEvent.bind(this), this.beginAnimation = this.beginAnimation.bind(this), this.pauseAnimation = this.pauseAnimation.bind(this), this.resumeAnimation = this.resumeAnimation.bind(this), this.fromColor = {}, this.toColor = {}, this.targets = {}, this.targetsArray = [], this.updateConfigForDefault = this.updateConfigForDefault.bind(this), this.updateConfigForRawColor = this.updateConfigForRawColor.bind(this), this.config = {
                complete: function() {
                    e.animationIsPlaying = !1, e.el.emit('animationcomplete', e.eventDetail)
                }
            }
        },
        update: function() {
            var e = this.config,
                t = this.data;
            this.animationIsPlaying = !1, t.property && (e.autoplay = !1, e.direction = t.dir, e.duration = t.dur, e.easing = t.easing, e.elasticity = t.elasticity, e.loop = t.loop, this.createAndStartAnimation())
        },
        tick: function(e, t) {
            this.animationIsPlaying && (this.time += t, this.animation.tick(this.time))
        },
        remove: function() {
            this.pauseAnimation(), this.removeEventListeners()
        },
        pause: function() {
            this.paused = !0, this.pausedWasPlaying = !0, this.pauseAnimation(), this.removeEventListeners()
        },
        play: function() {
            this.paused && (this.paused = !1, this.addEventListeners(), this.pausedWasPlaying && (this.resumeAnimation(), this.pausedWasPlaying = !1))
        },
        createAndStartAnimation: function() {
            var e = this.data;
            return this.updateConfig(), this.animationIsPlaying = !1, this.animation = p(this.config), this.removeEventListeners(), this.addEventListeners(), !e.autoplay || e.startEvents && e.startEvents.length ? void 0 : e.delay ? void setTimeout(this.beginAnimation, e.delay) : void this.beginAnimation()
        },
        beginAnimation: function() {
            this.updateConfig(), this.time = 0, this.animation.seek(0), this.animationIsPlaying = !0, this.stopRelatedAnimations(), this.el.emit('animationbegin', this.eventDetail)
        },
        pauseAnimation: function() {
            this.animationIsPlaying = !1
        },
        resumeAnimation: function() {
            this.animationIsPlaying = !0
        },
        onStartEvent: function() {
            return this.data.delay ? void setTimeout(this.beginAnimation, this.data.delay) : void this.beginAnimation()
        },
        updateConfigForRawColor: function() {
            var e = this.config,
                t = this.data,
                a = this.el,
                o, r, n;
            if (!this.waitComponentInitRawProperty(this.updateConfigForRawColor)) {
                for (r in o = t.from || l(a, t.property), n = t.to, this.setColorConfig(o, n), o = this.fromColor, n = this.toColor, this.targetsArray.length = 0, this.targetsArray.push(o), e.targets = this.targetsArray, n) e[r] = n[r];
                e.update = function() {
                    var e = {
                        r: o.r,
                        g: o.g,
                        b: o.b
                    };
                    return function(o) {
                        var r;
                        r = o.animatables[0].target, r.r === e.r && r.g === e.g && r.b === e.b || d(a, t.property, r, t.type)
                    }
                }()
            }
        },
        updateConfigForDefault: function() {
            var e = this.config,
                t = this.data,
                a = this.el,
                o, r, n, s;
            this.waitComponentInitRawProperty(this.updateConfigForDefault) || (o = t.from || (u(t) ? l(a, t.property) : b(a, t.property)), s = t.to, n = !isNaN(o || s), n ? (o = parseFloat(o), s = parseFloat(s)) : (o = o ? o.toString() : o, s = s ? s.toString() : s), r = 'true' === s || 'false' === s, r && (o = 'true' === t.from ? 1 : 0, s = 'true' === t.to ? 1 : 0), this.targets.aframeProperty = o, e.targets = this.targets, e.aframeProperty = s, e.update = function() {
                var e = o;
                return function(o) {
                    var n;
                    n = o.animatables[0].target.aframeProperty, n === e || (e = n, r && (n = !!(1 <= n)), u(t) ? d(a, t.property, n, t.type) : y(a, t.property, n))
                }
            }())
        },
        updateConfigForVector: function() {
            var e = this.config,
                t = this.data,
                a = this.el,
                o, n, s;
            for (o in n = t.from ? AFRAME.utils.coordinates.parse(t.from) : b(a, t.property), s = AFRAME.utils.coordinates.parse(t.to), t.property === k && (r(n), r(s)), this.targetsArray.length = 0, this.targetsArray.push(n), e.targets = this.targetsArray, s) e[o] = s[o];
            return t.property === 'position' || t.property === k || t.property === 'scale' ? void(e.update = function() {
                var e = {
                    x: n.x,
                    y: n.y,
                    z: n.z
                };
                return function(o) {
                    var r = o.animatables[0].target;
                    r.x === e.x && r.y === e.y && r.z === e.z || (e.x = r.x, e.y = r.y, e.z = r.z, a.object3D[t.property].set(r.x, r.y, r.z))
                }
            }()) : void(e.update = function() {
                var e = {
                    x: n.x,
                    y: n.y,
                    z: n.z
                };
                return function(o) {
                    var r = o.animations[0].target;
                    r.x === e.x && r.y === e.y && r.z === e.z || (e.x = r.x, e.y = r.y, e.z = r.z, y(a, t.property, r))
                }
            }())
        },
        updateConfig: function() {
            var e;
            e = o(this.el, this.data.property), u(this.data) && this.data.type === v ? this.updateConfigForRawColor() : 'vec2' === e || 'vec3' === e || 'vec4' === e ? this.updateConfigForVector() : this.updateConfigForDefault()
        },
        waitComponentInitRawProperty: function(e) {
            var t = this.data,
                a = this.el,
                o;
            return !t.from && !!t.property.startsWith(x) && (o = c(t.property)[1], !a.components[o]) && (a.addEventListener('componentinitialized', function t(r) {
                r.detail.name !== o || (e(), a.removeEventListener('componentinitialized', t))
            }), !0)
        },
        stopRelatedAnimations: function() {
            var e, t;
            for (t in this.el.components)(e = this.el.components[t], t !== this.attrName) && 'animation' === e.name && e.data.property === this.data.property && (e.animationIsPlaying = !1)
        },
        addEventListeners: function() {
            var e = this.data,
                t = this.el;
            n(t, e.startEvents, this.onStartEvent), n(t, e.pauseEvents, this.pauseAnimation), n(t, e.resumeEvents, this.resumeAnimation)
        },
        removeEventListeners: function() {
            var e = this.data,
                t = this.el;
            s(t, e.startEvents, this.onStartEvent), s(t, e.pauseEvents, this.pauseAnimation), s(t, e.resumeEvents, this.resumeAnimation)
        },
        setColorConfig: function(e, t) {
            m.set(e), g.set(t), e = this.fromColor, t = this.toColor, e.r = m.r, e.g = m.g, e.b = m.b, t.r = g.r, t.g = g.g, t.b = g.b
        }
    })
}, function() {
    function e(e) {
        var t = {},
            a;
        for (a in e) t[a] = 'function' == typeof e[a] ? e[a] : 'object' == typeof e[a] ? AFRAME.utils.clone(e[a]) : e[a];
        return t
    }
    document.registerElement('a-timeline'), document.registerElement('a-timeline-group'), document.registerElement('a-timeline-animation'), AFRAME.registerComponent('animation-timeline', {
        schema: {
            direction: {
                type: 'string',
                default: 'normal'
            },
            loop: {
                default: 0,
                parse: function(e) {
                    return !('true' !== e) || 'false' !== e && parseInt(e, 10)
                }
            },
            pauseEvents: {
                type: 'array'
            },
            startEvents: {
                type: 'array'
            },
            timeline: {
                type: 'string'
            }
        },
        multiple: !0,
        init: function() {
            var e = this.data,
                t;
            for (this.animationIsPlaying = !1, this.beginAnimation = this.beginAnimation.bind(this), this.eventDetail = {
                    name: this.id
                }, this.time = 0, this.timeline = null, t = 0; t < e.startEvents.length; t++) this.el.addEventListener(e.startEvents[t], this.beginAnimation);
            for (t = 0; t < e.pauseEvents.length; t++) this.el.addEventListener(e.pauseEvents[t], this.pauseAnimation)
        },
        play: function() {
            this.data.startEvents.length || this.beginAnimation()
        },
        tick: function(e, t) {
            this.animationIsPlaying && this.timeline && (this.time += t, this.timeline.tick(this.time))
        },
        beginAnimation: function() {
            var e = this,
                t, a, o, r, n, s, l;
            if (s = document.querySelector(this.data.timeline), 'A-TIMELINE' !== s.tagName) throw new Error('[animation-timeline] timeline must be a selector to <a-timeline> element.');
            for (this.animationIsPlaying = !0, this.time = 0, this.timeline = AFRAME.anime.timeline({
                    autoplay: !1,
                    complete: function() {
                        e.animationIsPlaying = !1, e.el.emit('animationtimelinecomplete', e.eventDetail)
                    },
                    direction: this.data.direction,
                    loop: this.data.loop
                }), n = 0, t = 0; t < s.children.length; t++) {
                if ('A-TIMELINE-GROUP' === s.children[t].tagName) {
                    for (l = s.children[t], r = 0, a = 0; a < l.children.length; a++) o = this.addAnimationToTimeline(l.children[a], n), o > r && (r = o);
                    n += r;
                    continue
                }
                'A-TIMELINE-ANIMATION' === s.children[t].tagName && (n += this.addAnimationToTimeline(s.children[t], n))
            }
        },
        addAnimationToTimeline: function(t, a) {
            var o, r, n, s, l, d, c;
            if (r = 'animation__' + t.getAttribute('name'), c = t.getAttribute('select'), l = this.el.sceneEl.querySelectorAll(c), !l.length) return console.warn('[animation-timeline] No entities found for select="' + c + '"'), 0;
            for (o = parseFloat(t.getAttribute('offset') || 0, 10), d = 0; d < l.length; d++) {
                if (n = l[d].components[r], !n) throw new Error('Could not find animation `' + r + '` for `' + t.getAttribute('select') + '`.');
                n.updateConfig(), n.stopRelatedAnimations(), s = e(n.config), s.offset = a + o, this.timeline.add(s)
            }
            return (s.duration || 0) + (s.delay || 0) + o
        },
        pauseAnimation: function() {
            this.animationIsPlaying = !1
        }
    })
}, function() {
    var e = AFRAME.utils.styleParser;
    if ('undefined' == typeof AFRAME) throw new Error('Component attempted to register before AFRAME was available.');
    AFRAME.registerComponent('event-set', {
        schema: {
            default: '',
            parse: function(t) {
                return e.parse(t)
            }
        },
        multiple: !0,
        init: function() {
            this.eventHandler = null, this.eventName = null
        },
        update: function() {
            this.removeEventListener(), this.updateEventListener(), this.addEventListener()
        },
        remove: function() {
            this.removeEventListener()
        },
        pause: function() {
            this.removeEventListener()
        },
        play: function() {
            this.addEventListener()
        },
        updateEventListener: function() {
            var e = this.data,
                t = this.el,
                a, o, r;
            a = e._event || this.id, o = e._target, r = o ? t.sceneEl.querySelector(o) : t, this.eventName = a, this.eventHandler = function() {
                for (var t in e) '_event' !== t && '_target' !== t && AFRAME.utils.entity.setComponentProperty.call(this, r, t, e[t])
            }
        },
        addEventListener: function() {
            this.el.addEventListener(this.eventName, this.eventHandler)
        },
        removeEventListener: function() {
            this.el.removeEventListener(this.eventName, this.eventHandler)
        }
    })
}, function() {
    var e = {},
        t = {};
    AFRAME.registerComponent('gltf-part', {
        schema: {
            buffer: {
                default: !0
            },
            part: {
                type: 'string'
            },
            src: {
                type: 'asset'
            }
        },
        init: function() {
            var e = this.el;
            this.getModel(function(t) {
                t && e.setObject3D('mesh', t)
            })
        },
        getModel: function(a) {
            var o = this;
            return t[this.data.src] ? void a(this.selectFromModel(t[this.data.src])) : e[this.data.src] ? e[this.data.src].then(function(e) {
                a(o.selectFromModel(e))
            }) : void(e[this.data.src] = new Promise(function(r) {
                new THREE.GLTFLoader().load(o.data.src, function(n) {
                    var s = n.scene || n.scenes[0];
                    t[o.data.src] = s, delete e[o.data.src], a(o.selectFromModel(s)), r(s)
                }, function() {}, console.error)
            }))
        },
        selectFromModel: function(e) {
            var t, a;
            return (a = e.getObjectByName(this.data.part), !a) ? void console.error('[gltf-part] `' + this.data.part + '` not found in model.') : (t = a.getObjectByProperty('type', 'Mesh').clone(!0), this.data.buffer) ? (t.geometry = t.geometry.toNonIndexed(), t) : (t.geometry = new THREE.Geometry().fromBufferGeometry(t.geometry), t)
        }
    })
}, function(e) {
    function t(e, t, a) {
        var o = [],
            r = Math.ceil(t / e.columns),
            n, s, l;
        n = e.marginColumn, s = e.marginRow, a && (n = e.margin, s = e.margin);
        for (var d = 0; d < r; d++)
            for (var c = 0; c < e.columns; c++) l = [0, 0, 0], 0 === e.plane.indexOf('x') && (l[0] = c * n), 0 === e.plane.indexOf('y') && (l[1] = c * n), 1 === e.plane.indexOf('y') && (l[1] = d * s), 1 === e.plane.indexOf('z') && (l[2] = d * s), o.push(l);
        return o
    }

    function a(e, t) {
        for (var a = Math.cos, o = [], r = 0; r < t; r++) {
            var n = isNaN(e.angle) ? r * (2 * Math.PI) / t : 0.01745329252 * (r * e.angle);
            var s = [];
            0 === e.plane.indexOf('x') && (s[0] = e.radius * a(n)), 0 === e.plane.indexOf('y') && (s[1] = e.radius * a(n)), 1 === e.plane.indexOf('y') && (s[1] = e.radius * c(n)), 1 === e.plane.indexOf('z') && (s[2] = e.radius * c(n)), o.push(s)
        }
        return o
    }

    function o(e, a) {
        return e.columns = a, t(e, a, !0)
    }

    function r(e) {
        return l([
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
            [-1, 0, 0],
            [0, -1, 0],
            [0, 0, -1]
        ], e.radius / 2)
    }

    function n(e) {
        var t = (1 + 2.23606797749979) / 2,
            a = 1 / t,
            o = 2 - t,
            r = -1 * a,
            n = -1 * o;
        return l([
            [-1, o, 0],
            [-1, n, 0],
            [0, -1, o],
            [0, -1, n],
            [0, 1, o],
            [0, 1, n],
            [1, o, 0],
            [1, n, 0],
            [a, a, a],
            [a, a, r],
            [a, r, a],
            [a, r, r],
            [o, 0, 1],
            [o, 0, -1],
            [r, a, a],
            [r, a, r],
            [r, r, a],
            [r, r, r],
            [n, 0, 1],
            [n, 0, -1]
        ], e.radius / 2)
    }

    function s(e) {
        var t = -1 / 1.7320508075688772;
        return l([
            [0, 0, 1.7320508075688772 + t],
            [-1, 0, t],
            [1, 0, t],
            [0, 0.816496580927726 * 2, 0]
        ], e.radius / 2)
    }

    function l(e, t) {
        return e.map(function(e) {
            return e.map(function(e) {
                return e * t
            })
        })
    }

    function d(e, t) {
        e.forEach(function(e, a) {
            var o = t[a];
            e.setAttribute('position', {
                x: o[0],
                y: o[1],
                z: o[2]
            })
        })
    }
    var c = Math.sin;
    AFRAME.registerComponent('layout', {
        schema: {
            angle: {
                type: 'number',
                default: !1,
                min: 0,
                max: 360,
                if: {
                    type: ['circle']
                }
            },
            columns: {
                default: 1,
                min: 0,
                if: {
                    type: ['box']
                }
            },
            margin: {
                default: 1,
                min: 0,
                if: {
                    type: ['box', 'line']
                }
            },
            marginColumn: {
                default: 1,
                min: 0,
                if: {
                    type: ['box']
                }
            },
            marginRow: {
                default: 1,
                min: 0,
                if: {
                    type: ['box']
                }
            },
            plane: {
                default: 'xy'
            },
            radius: {
                default: 1,
                min: 0,
                if: {
                    type: ['circle', 'cube', 'dodecahedron', 'pyramid']
                }
            },
            reverse: {
                default: !1
            },
            type: {
                default: 'line',
                oneOf: ['box', 'circle', 'cube', 'dodecahedron', 'line', 'pyramid']
            },
            fill: {
                default: !0,
                if: {
                    type: ['circle']
                }
            }
        },
        init: function() {
            var e = this,
                t = this.el;
            this.children = t.getChildEntities(), this.initialPositions = [], this.children.forEach(function(t) {
                function a() {
                    var a = t.getAttribute('position');
                    e.initialPositions.push([a.x, a.y, a.z])
                }
                return t.hasLoaded ? a() : void t.addEventListener('loaded', a)
            }), t.addEventListener('child-attached', function(a) {
                a.detail.el.parentNode !== t || (e.children.push(a.detail.el), e.update())
            }), t.addEventListener('child-detached', function(t) {
                -1 === e.children.indexOf(t.detail.el) || (e.children.splice(e.children.indexOf(t.detail.el), 1), e.initialPositions.splice(e.children.indexOf(t.detail.el), 1), e.update())
            })
        },
        update: function() {
            var e = this.children,
                l = this.data,
                c = this.el,
                u = e.length,
                p, m;
            switch (l.type) {
                case 'box':
                    {
                        p = t;
                        break
                    }
                case 'circle':
                    {
                        p = a;
                        break
                    }
                case 'cube':
                    {
                        p = r;
                        break
                    }
                case 'dodecahedron':
                    {
                        p = n;
                        break
                    }
                case 'pyramid':
                    {
                        p = s;
                        break
                    }
                default:
                    p = o;
            }
            m = p(l, u, 'margin' in c.getDOMAttribute('layout')), l.reverse && m.reverse(), d(e, m)
        },
        remove: function() {
            this.el.removeEventListener('child-attached', this.childAttachedCallback), d(this.children, this.initialPositions)
        }
    }), e.exports.getBoxPositions = t, e.exports.getCirclePositions = a, e.exports.getLinePositions = o, e.exports.getCubePositions = r, e.exports.getDodecahedronPositions = n, e.exports.getPyramidPositions = s
}, function() {
    AFRAME.registerComponent('proxy-event', {
        schema: {
            captureBubbles: {
                default: !1
            },
            event: {
                type: 'string'
            },
            to: {
                type: 'string'
            },
            as: {
                type: 'string'
            },
            bubbles: {
                default: !1
            }
        },
        multiple: !0,
        init: function() {
            var e = this.data,
                t = this.el,
                a = this,
                o;
            o = 'CHILDREN' === e.to ? t.querySelectorAll('*') : 'SELF' === e.to ? [t] : document.querySelectorAll(e.to), t.addEventListener(e.event, function(e) {
                var r = a.data,
                    n;
                if (r.captureBubbles || e.target === t)
                    for (n = 0; n < o.length; n++) o[n].emit(r.as || r.event, null, r.bubbles)
            })
        }
    })
}, function() {
    function e(e) {
        return 'back' === e ? THREE.BackSide : 'double' === e ? THREE.DoubleSide : THREE.FrontSide
    }
    if ('undefined' == typeof AFRAME) throw new Error('Component attempted to register before AFRAME was available.');
    AFRAME.registerComponent('slice9', {
        schema: {
            bottom: {
                default: 0,
                min: 0
            },
            color: {
                type: 'color',
                default: '#fff'
            },
            debug: {
                default: !1
            },
            height: {
                default: 1,
                min: 0
            },
            left: {
                default: 0,
                min: 0
            },
            opacity: {
                default: 1,
                min: 0,
                max: 1
            },
            padding: {
                default: 0.1,
                min: 0.01
            },
            right: {
                default: 0,
                min: 0
            },
            side: {
                default: 'front',
                oneOf: ['front', 'back', 'double']
            },
            src: {
                type: 'map'
            },
            top: {
                default: 0,
                min: 0
            },
            transparent: {
                default: !0
            },
            width: {
                default: 1,
                min: 0
            },
            usingCustomMaterial: {
                default: !1
            },
            usingAtlas: {
                default: !1
            },
            uvAtlasMin: {
                type: 'vec2'
            },
            uvAtlasMax: {
                type: 'vec2'
            }
        },
        init: function() {
            var e = this.data,
                t, a;
            this.textureSrc = null, t = this.geometry = new THREE.PlaneBufferGeometry(e.width, e.height, 3, 3), e.usingCustomMaterial ? this.plane = new THREE.Mesh(t) : (a = this.material = new THREE.MeshBasicMaterial({
                color: e.color,
                opacity: e.opacity,
                transparent: e.transparent,
                wireframe: e.debug
            }), this.plane = new THREE.Mesh(t, a)), this.el.setObject3D('mesh', this.plane)
        },
        regenerateMesh: function() {
            function e(e, t, a) {
                o[3 * e] = t, o[3 * e + 1] = a
            }

            function t(e, t, o) {
                a.usingAtlas && (t = a.uvAtlasMin.x + t * (a.uvAtlasMax.x - a.uvAtlasMin.x), o = a.uvAtlasMin.y + o * (a.uvAtlasMax.y - a.uvAtlasMin.y)), r[2 * e] = t, r[2 * e + 1] = o
            }
            var a = this.data,
                o = this.geometry.attributes.position.array,
                r = this.geometry.attributes.uv.array,
                n, s, l;
            if (!this.material || this.material.map) {
                a.usingCustomMaterial ? (n = 1, l = 1) : (n = this.material.map.image.width, l = this.material.map.image.width), s = {
                    left: a.left / l,
                    right: a.right / l,
                    top: a.top / n,
                    bottom: a.bottom / n
                }, t(1, s.left, 1), t(2, s.right, 1), t(4, 0, s.bottom), t(5, s.left, s.bottom), t(6, s.right, s.bottom), t(7, 1, s.bottom), t(8, 0, s.top), t(9, s.left, s.top), t(10, s.right, s.top), t(11, 1, s.top), t(13, s.left, 0), t(14, s.right, 0), a.usingAtlas && (t(0, 0, 1), t(3, 1, 1), t(12, 0, 0), t(15, 1, 0));
                var d = a.width / 2,
                    c = a.height / 2,
                    u = -d + a.padding,
                    p = d - a.padding,
                    m = c - a.padding,
                    g = -c + a.padding;
                e(0, -d, c), e(1, u, c), e(2, p, c), e(3, d, c), e(4, -d, m), e(5, u, m), e(6, p, m), e(7, d, m), e(8, -d, g), e(9, u, g), e(10, p, g), e(11, d, g), e(13, u, -c), e(14, p, -c), e(12, -d, -c), e(15, d, -c), this.geometry.attributes.position.needsUpdate = !0, this.geometry.attributes.uv.needsUpdate = !0
            }
        },
        update: function(t) {
            var a = this.data,
                o;
            o = AFRAME.utils.diff(a, t), a.usingCustomMaterial || (this.material.color.setStyle(a.color), this.material.opacity = a.opacity, this.material.transparent = a.transparent, this.material.wireframe = a.debug, this.material.side = e(a.side), 'src' in o && this.updateMap()), ('width' in o || 'height' in o || 'padding' in o || 'left' in o || 'top' in o || 'bottom' in o || 'right' in o) && this.regenerateMesh()
        },
        updateMap: function() {
            function e(e) {
                this.material.map = e, this.material.needsUpdate = !0, this.regenerateMesh()
            }
            var t = this.data.src;
            return t ? t === this.textureSrc ? void 0 : (this.textureSrc = t, void this.el.sceneEl.systems.material.loadTexture(t, {
                src: t
            }, e.bind(this))) : void(!this.material.map || e(null))
        }
    })
}, function(e) {
    (function(t, a) {
        e.exports = a()
    })('undefined' == typeof self ? this : self, function() {
        return function(e) {
            function t(o) {
                if (a[o]) return a[o].exports;
                var r = a[o] = {
                    i: o,
                    l: !1,
                    exports: {}
                };
                return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
            }
            var a = {};
            return t.m = e, t.c = a, t.d = function(e, a, o) {
                t.o(e, a) || Object.defineProperty(e, a, {
                    configurable: !1,
                    enumerable: !0,
                    get: o
                })
            }, t.n = function(e) {
                var a = e && e.__esModule ? function() {
                    return e['default']
                } : function() {
                    return e
                };
                return t.d(a, 'a', a), a
            }, t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, t.p = '', t(t.s = 0)
        }([function(e, t, a) {
            'use strict';

            function o(e, t, a, o) {
                var n, s, l, d, c, m;
                if (m = u(t, /\s+/), 1 === m.length) return r(e, t, a, o);
                for (x.length = 0, p(k, m), l = 0; l < k.length; l++) {
                    if (-1 === v.indexOf(k[l])) {
                        x.push(k[l]);
                        continue
                    }
                    s = r(e, x.pop()), c = k[l + 1].replace(y, ''), n = -1 === k[l].indexOf('!') ? s === c : s !== c, x.push(n), l++
                }
                if (1 === x.length) return x[0];
                for (d = x[0].constructor === Boolean ? x[0] : r(e, x[0], a, o), l = 1; l < x.length; l += 2)(x[l] === f || x[l] === b) && (x[l + 1] = x[l + 1].constructor === Boolean ? x[l + 1] : r(e, x[l + 1]), x[l] === f ? d = d || x[l + 1] : x[l] === b && (d = d && x[l + 1]));
                return d
            }

            function r(e, t, a, o) {
                var n, s, l, d;
                for (a && t.startsWith(a.for) && (s = t, t = a.in), d = e, l = u(c(t), '.'), n = 0; n < l.length; n++) d = d[l[n]];
                if (a)
                    for (n = 0; n < d.length; n++)
                        if (d[n][a.key] === o) {
                            d = r(d[n], s.replace(a.for+'.', ''));
                            break
                        }
                return '!' === t[0] && '!' === t[1] ? !!d : '!' === t[0] ? !d : d
            }

            function n(e) {
                for (var t in e) delete e[t]
            }

            function s() {
                var e = arguments;
                return function() {
                    var t;
                    for (t = 0; t < e.length; t++) e[t].apply(this, arguments)
                }
            }

            function l(e, t) {
                var a, o;
                for (o = t.split(/\s+/), a = 0; a < o.length; a++) - 1 !== A.indexOf(o[a]) || o[a].startsWith('\'') || -1 !== e.indexOf(o[a]) || e.push(d(o[a]))
            }

            function d(e) {
                var t;
                return e = c(e.trim()), t = e.indexOf('.'), -1 === t ? e : e.substring(0, e.indexOf('.'))
            }

            function c(e) {
                if (0 === e.indexOf('!!')) return e.replace('!!', '');
                return 0 === e.indexOf('!') ? e.replace('!', '') : e
            }

            function u(e, t) {
                return (S[t] || (S[t] = {}), S[t][e]) ? S[t][e] : (S[t][e] = e.split(t), S[t][e])
            }

            function p(e, t) {
                var a;
                for (e.length = 0, a = 0; a < t.length; a++) e[a] = t[a]
            }
            var m = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
                },
                g = a(1).wrapArray,
                h = {
                    initialState: {},
                    handlers: {},
                    computeState: function() {}
                };
            AFRAME.registerState = function(e) {
                AFRAME.utils.extend(h, e)
            }, AFRAME.registerSystem('state', {
                init: function() {
                    var e = this,
                        t;
                    for (t in this.diff = {}, this.state = AFRAME.utils.clone(h.initialState), this.subscriptions = [], this.initEventHandlers(), this.state) this.state[t].constructor === Array && (this.state[t].__dirty = !0, g(this.state[t]));
                    this.lastState = AFRAME.utils.clone(this.state), this.eventDetail = {
                        lastState: this.lastState,
                        state: this.state
                    }, this.el.addEventListener('loaded', function() {
                        var t;
                        for (t = 0; t < e.subscriptions.length; t++) e.subscriptions[t].onStateUpdate(e.state, '@@INIT', {})
                    })
                },
                dispatch: function(e, t) {
                    var a, o;
                    for (o in h.handlers[e](this.state, t), h.computeState(this.state), this.diff) delete this.diff[o];
                    for (AFRAME.utils.diff(this.lastState, this.state, this.diff), a = 0; a < this.subscriptions.length; a++) {
                        if ('bind-for' === this.subscriptions[a].name) {
                            if (!this.state[this.subscriptions[a].keysToWatch[0]].__dirty) continue;
                        } else if (!this.shouldUpdate(this.subscriptions[a].keysToWatch, this.diff)) continue;
                        this.subscriptions[a].onStateUpdate()
                    }
                    for (o in this.state) this.state[o].constructor === Array && (this.state[o].__dirty = !1);
                    this.copyState(this.lastState, this.state), this.eventDetail.action = e, this.eventDetail.payload = t, this.el.emit('stateupdate', this.eventDetail)
                },
                copyState: function(e, t) {
                    for (var a in t) {
                        if (t[a] && t[a].constructor === Object) {
                            if (!(a in e)) {
                                e[a] = AFRAME.utils.clone(t[a]);
                                continue
                            }
                            this.copyState(e[a], t[a]);
                            continue
                        }
                        e[a] = t[a]
                    }
                },
                subscribe: function(e) {
                    this.subscriptions.push(e)
                },
                unsubscribe: function(e) {
                    this.subscriptions.splice(this.subscriptions.indexOf(e), 1)
                },
                shouldUpdate: function(e, t) {
                    for (var a in t)
                        if (-1 !== e.indexOf(a)) return !0;
                    return !1
                },
                initEventHandlers: function() {
                    function e(e) {
                        var t = this;
                        this.el.addEventListener(e, function(a) {
                            t.dispatch(e, a.detail)
                        })
                    }
                    var t = [],
                        a = this,
                        o;
                    for (o in e = e.bind(this), h.handlers) - 1 === t.indexOf(o) && (t.push(o), e(o))
                },
                renderTemplate: function() {
                    var e = document.createElement('template'),
                        t = /{{\s*(\w*\.)?([\w.]+)\s*}}/g;
                    return function(a, r, n) {
                        var s, l;
                        for (l = a; s = t.exec(a);) l = l.replace(s[0], o(r, s[2]) || '');
                        return n ? l : (e.innerHTML = l, e.content)
                    }
                }(),
                select: o
            }), AFRAME.registerComponent('bind', {
                schema: {
                    default: {},
                    parse: function(e) {
                        var t, a, o, r;
                        if (e.constructor === Object) return e;
                        if (-1 === e.indexOf(':')) return e;
                        for (t = {}, o = u(e, ';'), a = 0; a < o.length; a++) r = u(o[a].trim(), ':'), t[r[0]] = r[1].trim();
                        return t
                    }
                },
                multiple: !0,
                init: function() {
                    var e = this.data;
                    this.keysToWatch = [], this.onStateUpdate = this.onStateUpdate.bind(this), this.system = this.el.sceneEl.systems.state, this.isNamespacedBind = this.id && this.id in AFRAME.components && !AFRAME.components[this.id].isSingleProp || this.id in AFRAME.systems, this.lastData = {}, this.updateObj = {}, this.system.subscribe(this)
                },
                update: function() {
                    var e = this.data,
                        t, a;
                    if (this.keysToWatch.length = 0, 'string' == typeof e) l(this.keysToWatch, e);
                    else
                        for (a in e) l(this.keysToWatch, e[a]);
                    t = this.el.closest('[bind-for]'), t ? (this.bindFor = t.getAttribute('bind-for'), this.bindForKey = this.el.getAttribute('data-bind-for-key'), this.keysToWatch.push(this.bindFor.in), t.addEventListener('bindforrender', this.onStateUpdate.bind(this))) : (this.bindFor = '', this.bindForKey = ''), this.onStateUpdate()
                },
                onStateUpdate: function() {
                    var e = !1,
                        t = this.el,
                        a, r, s, l;
                    if (this.isNamespacedBind && n(this.updateObj), s = this.system.state, 'object' !== m(this.data)) {
                        try {
                            l = o(s, this.data, this.bindFor, this.bindForKey)
                        } catch (t) {
                            throw new Error('[aframe-state-component] Key \'' + this.data + '\' not found in state.' + (' #' + this.el.getAttribute('id') + '[' + this.attrName + ']'))
                        }
                        return 'object ' != typeof l && 'object' !== m(this.lastData) && this.lastData === l ? void 0 : (AFRAME.utils.entity.setComponentProperty(t, this.id, l), void(this.lastData = l))
                    }
                    for (a in this.data) {
                        r = this.data[a].trim();
                        try {
                            l = o(s, r, this.bindFor, this.bindForKey)
                        } catch (t) {
                            throw new Error('[aframe-state-component] Key \'' + r + '\' not found in state.' + (' #' + this.el.getAttribute('id') + '[' + this.attrName + ']'))
                        }
                        if ('object' === ('undefined' == typeof l ? 'undefined' : m(l)) || 'object' === m(this.lastData[a]) || this.lastData[a] !== l) {
                            if (a in AFRAME.components && void 0 === l) return void t.removeAttribute(a);
                            this.isNamespacedBind ? this.updateObj[a] = l : AFRAME.utils.entity.setComponentProperty(t, a, l), this.lastData[a] = l
                        }
                    }
                    for (e in this.updateObj);
                    this.isNamespacedBind && e && t.setAttribute(this.id, this.updateObj)
                },
                remove: function() {
                    this.system.unsubscribe(this)
                }
            }), AFRAME.registerComponent('bind-toggle', {
                schema: {
                    type: 'string'
                },
                multiple: !0,
                init: function() {
                    this.system = this.el.sceneEl.systems.state, this.keysToWatch = [], this.onStateUpdate = this.onStateUpdate.bind(this), this.system.subscribe(this), this.onStateUpdate()
                },
                update: function() {
                    this.keysToWatch.length = 0, l(this.keysToWatch, this.data)
                },
                onStateUpdate: function() {
                    var e = this.el,
                        t, a;
                    t = this.system.state;
                    try {
                        a = o(t, this.data)
                    } catch (t) {
                        throw new Error('[aframe-state-component] Key \'' + this.data + '\' not found in state.' + (' #' + this.el.getAttribute('id') + '[' + this.attrName + ']'))
                    }
                    a ? e.setAttribute(this.id, '') : e.removeAttribute(this.id)
                },
                remove: function() {
                    this.system.unsubscribe(this)
                }
            }), AFRAME.registerComponent('bind-for', {
                schema: {
                    for: {
                        type: 'string'
                    },
                    in: {
                        type: 'string'
                    },
                    key: {
                        type: 'string'
                    },
                    template: {
                        type: 'string'
                    }
                },
                init: function() {
                    this.system = this.el.sceneEl.systems.state, this.onStateUpdate = this.onStateUpdate.bind(this), this.keysToWatch = [], this.renderedKeys = [], this.system.subscribe(this)
                },
                update: function() {
                    this.keysToWatch[0] = this.data.in, this.template = this.el.children[0] && 'TEMPLATE' === this.el.children[0].tagName ? this.el.children[0].innerHTML.trim() : document.querySelector(this.data.template).innerHTML.trim(), this.onStateUpdate()
                },
                onStateUpdate: function() {
                    var e = [],
                        t = [];
                    return function() {
                        var a = this.data,
                            r = this.el,
                            n, s, l, d;
                        try {
                            s = o(this.system.state, a.in)
                        } catch (t) {
                            throw new Error('[aframe-state-component] Key \'' + a.in + '\' not found in state.' + (' #' + r.getAttribute('id') + '[' + this.attrName + ']'))
                        }
                        for (e.length = 0, n = 0; n < s.length; n++)
                            if (d = s[n], e.push(d[a.key]), -1 === this.renderedKeys.indexOf(d[a.key])) {
                                r.appendChild(this.system.renderTemplate(this.template, d)), r.children[r.children.length - 1].setAttribute('data-bind-for-key', d[a.key]), this.renderedKeys.push(d[a.key]);
                                continue
                            }
                        for (t.length = 0, n = 0; n < r.children.length; n++) 'TEMPLATE' !== r.children[n].tagName && (l = r.children[n].getAttribute('data-bind-for-key'), -1 === e.indexOf(l) && (t.push(r.children[n]), this.renderedKeys.splice(this.renderedKeys.indexOf(l), 1)));
                        for (n = 0; n < t.length; n++) t[n].parentNode.removeChild(t[n])
                    }
                }()
            });
            var b = '&&',
                y = /'/g,
                f = '||',
                v = ['==', '===', '!=', '!=='],
                k = [],
                x = [];
            e.exports.composeHandlers = function() {
                var e = arguments,
                    t, a, o;
                for (o = {}, a = 0; a < e.length; a++)
                    for (t in e[a]) t in o ? o[t].constructor === Array ? o[t].push(e[a][t]) : o[t] = [o[t], e[a][t]] : o[t] = e[a][t];
                for (t in o) o[t].constructor === Array && (o[t] = s.apply(this, o[t]));
                return o
            }, e.exports.composeFunctions = s;
            var A = ['||', '&&', '!=', '!==', '==', '==='],
                S = {}
        }, function(e) {
            'use strict';

            function t(e, t) {
                var a = e[t];
                e[t] = function() {
                    a.apply(e, arguments), e.__dirty = !0
                }
            }
            var a = ['push', 'pop', 'shift', 'unshift', 'splice'];
            e.exports.wrapArray = function(e) {
                var o;
                if (!e.__wrapped) {
                    for (o = 0; o < a.length; o++) t(e, a[o]);
                    e.__wrapped = !0
                }
            }
        }])
    })
}, function(e) {
    e.exports = [{
        domain: 'www.shadertoy.com',
        injectScript: 'injectScripts/shadertoy.js',
        entervr: [
            ['click', '#myVR', 1000]
        ]
    }, {
        domain: 'sketchfab.com',
        injectScript: 'injectScripts/sketchfab.js',
        entervr: [
            ['click', '.viewer', 500],
            ['click', '.control.vr', 500]
        ],
        waitForWebVRReady: !0,
        audio: ['default', 0.5]
    }, {
        domain: 'vrporn.com',
        injectScript: 'injectScripts/delightvideo.js',
        waitForWebVRReady: !0
    }, {
        domain: 'my.matterport.com',
        injectScript: 'injectScripts/matterport.js',
        waitForWebVRReady: !0,
        entervr: [
            ['click', 'body', 500],
            ['click', 'window', 500],
            ['click', 'canvas', 500],
            ['click', '#player', 500]
        ],
        audio: ['default', 0.5]
    }, {
        domain: 'patches.vizor.io',
        entervr: [
            ['click', '#entervr', 200]
        ],
        injectScript: 'injectScripts/vizor.js',
        waitForWebVRReady: !0
    }]
}, function() {
    var e = Math.min;
    (function(e) {
        function t(o) {
            if (a[o]) return a[o].exports;
            var r = a[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return e[o].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
        }
        var a = {};
        return t.m = e, t.c = a, t.p = '/dist/', t(0)
    })([function(e, t, a) {
        e.exports = a(1)
    }, function(e, t, a) {
        'use strict';
        (function() {
            return AFRAME ? void(!AFRAME.ASSETS_PATH && (AFRAME.ASSETS_PATH = './assets'), a(2), a(3), a(5), a(14), a(15), a(18), a(19), a(22), a(25), a(28)) : console.error('AFRAME is required!')
        })()
    }, function() {
        ! function(o) {
            function t(a) {
                if (e[a]) return e[a].exports;
                var r = e[a] = {
                    exports: {},
                    id: a,
                    loaded: !1
                };
                return o[a].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
            }
            var e = {};
            return t.m = o, t.c = e, t.p = '', t(0)
        }([function() {
            AFRAME.registerComponent('rounded', {
                schema: {
                    enabled: {
                        default: !0
                    },
                    width: {
                        type: 'number',
                        default: 1
                    },
                    height: {
                        type: 'number',
                        default: 1
                    },
                    radius: {
                        type: 'number',
                        default: .3
                    },
                    topLeftRadius: {
                        type: 'number',
                        default: -1
                    },
                    topRightRadius: {
                        type: 'number',
                        default: -1
                    },
                    bottomLeftRadius: {
                        type: 'number',
                        default: -1
                    },
                    bottomRightRadius: {
                        type: 'number',
                        default: -1
                    },
                    color: {
                        type: 'color',
                        default: '#F0F0F0'
                    },
                    opacity: {
                        type: 'number',
                        default: 1
                    }
                },
                init: function() {
                    this.rounded = new THREE.Mesh(this.draw(), new THREE.MeshPhongMaterial({
                        color: new THREE.Color(this.data.color),
                        side: THREE.DoubleSide
                    })), this.updateOpacity(), this.el.setObject3D('mesh', this.rounded)
                },
                update: function() {
                    this.data.enabled ? this.rounded && (this.rounded.visible = !0, this.rounded.geometry = this.draw(), this.rounded.material.color = new THREE.Color(this.data.color), this.updateOpacity()) : this.rounded.visible = !1
                },
                updateOpacity: function() {
                    0 > this.data.opacity && (this.data.opacity = 0), 1 < this.data.opacity && (this.data.opacity = 1), this.rounded.material.transparent = !!(1 > this.data.opacity), this.rounded.material.opacity = this.data.opacity
                },
                tick: function() {},
                remove: function() {
                    this.rounded && (this.el.object3D.remove(this.rounded), this.rounded = null)
                },
                draw: function() {
                    function o(n, l, e, a, c, d, o, u, r) {
                        d || (d = 1e-5), o || (o = 1e-5), u || (u = 1e-5), r || (r = 1e-5), n.moveTo(l, e + d), n.lineTo(l, e + c - d), n.quadraticCurveTo(l, e + c, l + d, e + c), n.lineTo(l + a - o, e + c), n.quadraticCurveTo(l + a, e + c, l + a, e + c - o), n.lineTo(l + a, e + r), n.quadraticCurveTo(l + a, e, l + a - r, e), n.lineTo(l + u, e), n.quadraticCurveTo(l, e, l, e + u)
                    }
                    var t = new THREE.Shape,
                        e = [this.data.radius, this.data.radius, this.data.radius, this.data.radius];
                    return -1 != this.data.topLeftRadius && (e[0] = this.data.topLeftRadius), -1 != this.data.topRightRadius && (e[1] = this.data.topRightRadius), -1 != this.data.bottomLeftRadius && (e[2] = this.data.bottomLeftRadius), -1 != this.data.bottomRightRadius && (e[3] = this.data.bottomRightRadius), o(t, 0, 0, this.data.width, this.data.height, e[0], e[1], e[2], e[3]), new THREE.ShapeBufferGeometry(t)
                },
                pause: function() {},
                play: function() {}
            }), AFRAME.registerPrimitive('a-rounded', {
                defaultComponents: {
                    rounded: {}
                },
                mappings: {
                    enabled: 'rounded.enabled',
                    width: 'rounded.width',
                    height: 'rounded.height',
                    radius: 'rounded.radius',
                    "top-left-radius": 'rounded.topLeftRadius',
                    "top-right-radius": 'rounded.topRightRadius',
                    "bottom-left-radius": 'rounded.bottomLeftRadius',
                    "bottom-right-radius": 'rounded.bottomRightRadius',
                    color: 'rounded.color',
                    opacity: 'rounded.opacity'
                }
            })
        }])
    }, function(t, a, o) {
        'use strict';
        var r = o(4),
            n = function(e) {
                this.el.object3D.traverse(function(t) {
                    t.material && (t.material.transparent = !0, t.material.opacity = e)
                });
                var t = !0,
                    a = !1,
                    o;
                try {
                    for (var r = this.textEntities[Symbol.iterator](), n, s; !(t = (n = r.next()).done); t = !0)(s = n.value, !!s.components.text) && (s.components.text.material.uniforms.opacity.value = e)
                } catch (e) {
                    a = !0, o = e
                } finally {
                    try {
                        !t && r.return && r.return()
                    } finally {
                        if (a) throw o
                    }
                }
            };
        AFRAME.registerComponent('fadein', {
            schema: {
                duration: {
                    type: 'int',
                    default: 200
                }
            },
            init: function() {
                this.textEntities = this.el.querySelectorAll('a-text'), this.opacityUpdate(0), this.start = null
            },
            tick: function(a) {
                this.start || (this.start = a);
                var t = e((a - this.start) / this.data.duration, 1);
                this.opacityUpdate(t), 1 === t && (this.el.removeAttribute('fadein'), r.emit(this.el, 'animationend'))
            },
            opacityUpdate: n
        }), AFRAME.registerComponent('fadeout', {
            schema: {
                duration: {
                    type: 'int',
                    default: 200
                }
            },
            init: function() {
                this.textEntities = this.el.querySelectorAll('a-text'), this.opacityUpdate(1), this.start = null
            },
            tick: function(a) {
                this.start || (this.start = a);
                var t = 1 - e((a - this.start) / this.data.duration, 1);
                this.opacityUpdate(t), 0 == t && (this.el.removeAttribute('fadeout'), r.emit(this.el, 'animationend'))
            },
            opacityUpdate: n
        }), AFRAME.registerComponent('show', {
            init: function() {
                this.textEntities = this.el.querySelectorAll('a-text'), this.opacityUpdate(1), setTimeout(() => {
                    this.el.removeAttribute('show')
                }, 100)
            },
            opacityUpdate: n
        }), AFRAME.registerComponent('hide', {
            init: function() {
                this.textEntities = this.el.querySelectorAll('a-text'), this.opacityUpdate(0), setTimeout(() => {
                    this.el.removeAttribute('hide')
                }, 100)
            },
            opacityUpdate: n
        })
    }, function(e) {
        'use strict';
        e.exports = {
            emit: function(e, t, a) {
                e.dispatchEvent(new CustomEvent(t, {
                    detail: a
                }))
            }
        }
    }, function(e, t, a) {
        'use strict';
        var o = a(6),
            r = a(7),
            n = a(11),
            s = a(12),
            l = a(4);
        AFRAME.registerComponent('keyboard', {
            schema: {
                isOpen: {
                    type: 'boolean',
                    default: !1
                },
                physicalKeyboard: {
                    type: 'boolean',
                    default: !1
                }
            },
            currentInput: null,
            init: function() {
                var e = this;
                s.init(this.el), r.init(this.el);
                var t = r.numericalUI(),
                    a = r.mainUI(),
                    o = r.actionsUI();
                this.el.alphabeticalLayout = r.alphabeticalLayout(), t.appendChild(r.numericalLayout()), a.appendChild(this.el.alphabeticalLayout), o.appendChild(r.actionsLayout()), this.el.appendChild(t), this.el.appendChild(a), this.el.appendChild(o), this.el.show = function() {
                    n.showKeyboard(e.el)
                }, this.el.hide = function() {
                    n.hideKeyboard(e.el)
                }, this.el.open = function() {
                    n.openKeyboard(e.el)
                }, this.el.dismiss = function() {
                    n.dismissKeyboard(e.el)
                }, this.el.destroy = function() {
                    n.destroyKeyboard(e.el)
                }, this.el.setAttribute('scale', '2 2 2'), this.el.setAttribute('rotation', '-20 0 0'), this.el.setAttribute('position', '-1.5 -0.3 -2'), this.el.addEventListener('input', this.inputEvent.bind(this)), this.el.addEventListener('backspace', this.backspaceEvent.bind(this)), this.el.addEventListener('dismiss', this.dismissEvent.bind(this)), document.addEventListener('keydown', this.keydownEvent.bind(this)), document.body.addEventListener('didfocusinput', this.didFocusInputEvent.bind(this)), document.body.addEventListener('didblurinput', this.didBlurInputEvent.bind(this))
            },
            update: function() {
                this.data.isOpen ? n.showKeyboard(this.el) : n.hideKeyboard(this.el)
            },
            tick: function() {},
            remove: function() {
                this.el.removeEventListener('input', this.inputEvent.bind(this)), this.el.removeEventListener('backspace', this.backspaceEvent.bind(this)), this.el.removeEventListener('dismiss', this.dismissEvent.bind(this)), document.removeEventListener('keydown', this.keydownEvent.bind(this)), document.body.removeEventListener('didfocusinput', this.didFocusInputEvent.bind(this)), document.body.removeEventListener('didblurinput', this.didBlurInputEvent.bind(this))
            },
            pause: function() {},
            play: function() {},
            inputEvent: function(t) {
                this.currentInput && this.currentInput.appendString(t.detail)
            },
            backspaceEvent: function() {
                this.currentInput && this.currentInput.deleteLast()
            },
            dismissEvent: function() {
                this.currentInput && this.currentInput.blur()
            },
            keydownEvent: function(t) {
                this.currentInput && this.data.physicalKeyboard && (t.preventDefault(), t.stopPropagation(), 'Enter' === t.key ? (l.emit(n.el, 'input', '\n'), l.emit(n.el, 'enter', '\n')) : 'Backspace' === t.key ? l.emit(n.el, 'backspace') : 'Escape' === t.key ? l.emit(n.el, 'dismiss') : 2 > t.key.length && l.emit(n.el, 'input', t.key))
            },
            didFocusInputEvent: function(t) {
                this.currentInput && this.currentInput.blur(!0), this.currentInput = t.detail, this.el.isOpen || n.openKeyboard(this.el)
            },
            didBlurInputEvent: function() {
                this.currentInput = null, n.dismissKeyboard(this.el)
            }
        }), AFRAME.registerPrimitive('a-keyboard', {
            defaultComponents: {
                keyboard: {}
            },
            mappings: {
                "is-open": 'keyboard.isOpen',
                "physical-keyboard": 'keyboard.physicalKeyboard'
            }
        })
    }, function(e) {
        'use strict';
        var t = {};
        t.preloadAssets = function(e) {
            var t = document.querySelector('a-assets'),
                a;
            if (!t) {
                var o = document.querySelector('a-scene');
                t = document.createElement('a-assets'), o.appendChild(t)
            }
            var r = !0,
                n = !1,
                s;
            try {
                for (var l = e[Symbol.iterator](), d, c; !(r = (d = l.next()).done); r = !0) {
                    c = d.value, a = !1;
                    var u = !0,
                        p = !1,
                        m = void 0;
                    try {
                        for (var g = Array.from(t.children)[Symbol.iterator](), h, b; !(u = (h = g.next()).done); u = !0) b = h.value, c.id === b.id && (a = !0)
                    } catch (e) {
                        p = !0, m = e
                    } finally {
                        try {
                            !u && g.return && g.return()
                        } finally {
                            if (p) throw m
                        }
                    }
                    if (!a) {
                        var y = document.createElement(c.type);
                        y.setAttribute('id', c.id), y.setAttribute('src', c.src), t.appendChild(y)
                    }
                }
            } catch (e) {
                n = !0, s = e
            } finally {
                try {
                    !r && l.return && l.return()
                } finally {
                    if (n) throw s
                }
            }
        }, t.extend = function(e, t) {
            for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
            return e
        }, t.clone = function(e) {
            if (Array.isArray(e)) return e.slice(0);
            var t = Object.create(Object.getPrototypeOf(e)),
                a = Object.getOwnPropertyNames(e),
                o;
            for (o = 0; o < a.length;) Object.defineProperty(t, a[o], Object.getOwnPropertyDescriptor(e, a[o])), o++;
            return t
        }, t.updateOpacity = function(e, t) {
            if (e.hasAttribute('text')) {
                var a = e.getAttribute('text');
                a && (a.opacity = t, e.setAttribute('text', a))
            }
            e.object3D.traverse(function(e) {
                e.material && (e.material.transparent = !0, e.material.opacity = t)
            });
            var o = !0,
                r = !1,
                n;
            try {
                for (var s = e.querySelectorAll('a-text')[Symbol.iterator](), l, d; !(o = (l = s.next()).done); o = !0) d = l.value, d.setAttribute('opacity', t)
            } catch (e) {
                r = !0, n = e
            } finally {
                try {
                    !o && s.return && s.return()
                } finally {
                    if (r) throw n
                }
            }
        }, t.getWidthFactor = function(e, t) {
            var a = 1e-5;
            return e.components.text && e.components.text.currentFont && (a = e.components.text.currentFont.widthFactor, a = (0.5 + t) * a), a
        }, e.exports = t
    }, function(e, t, a) {
        'use strict';
        var o = a(8),
            r = a(9),
            n = a(10),
            s = a(11),
            l = {};
        l.el = null, l.init = function(e) {
            l.el = e, s.el = e, s.SFX = e.SFX
        }, l.numericalUI = function() {
            var e = document.createElement('a-entity');
            e.setAttribute('position', '0.025 0 0.12'), e.setAttribute('rotation', '0 25 0'), e.setAttribute('data-ui', !0);
            var t = document.createElement('a-rounded');
            return t.setAttribute('width', '0.280'), t.setAttribute('height', '0.360'), t.setAttribute('radius', '0.02'), t.setAttribute('color', n.KEYBOARD_COLOR), setTimeout(function() {
                t.setAttribute('material', {
                    color: n.KEYBOARD_COLOR,
                    shader: 'flat'
                })
            }), e.appendChild(t), e
        }, l.mainUI = function() {
            var e = document.createElement('a-entity');
            e.setAttribute('position', '0.312 0 0'), e.setAttribute('data-ui', !0);
            var t = document.createElement('a-rounded');
            return t.setAttribute('width', '0.840'), t.setAttribute('height', '0.360'), t.setAttribute('radius', '0.02'), t.setAttribute('color', n.KEYBOARD_COLOR), setTimeout(function() {
                t.setAttribute('material', {
                    color: n.KEYBOARD_COLOR,
                    shader: 'flat'
                })
            }), e.appendChild(t), e
        }, l.actionsUI = function() {
            var e = document.createElement('a-entity');
            e.setAttribute('position', '1.180 0 0.01'), e.setAttribute('rotation', '0 -25 0'), e.setAttribute('data-ui', !0);
            var t = document.createElement('a-rounded');
            return t.setAttribute('width', '0.180'), t.setAttribute('height', '0.360'), t.setAttribute('radius', '0.02'), t.setAttribute('color', n.KEYBOARD_COLOR), setTimeout(function() {
                t.setAttribute('material', {
                    color: n.KEYBOARD_COLOR,
                    shader: 'flat'
                })
            }), e.appendChild(t), e
        }, l.numericalLayout = function() {
            var e = r.numerical,
                t = document.createElement('a-entity');
            t.setAttribute('position', '0.02 0.26 0.001');
            var a = 0;
            for (var o in e) {
                var s = l.key('num-' + o, e[o].type, e[o].value),
                    d = o % 3,
                    c = n.KEY_WIDTH * d,
                    u = n.KEY_WIDTH * a;
                s.setAttribute('position', c + ' -' + u + ' 0'), 2 == d && a++, t.appendChild(s)
            }
            return t
        }, l.alphabeticalLayout = function() {
            var e = r.alphabetical,
                t = document.createElement('a-entity');
            t.setAttribute('position', '0.02 0.26 0.001');
            var a = 0,
                o = 0,
                s = !1;
            for (var d in e) {
                var c = l.key('main-' + d, e[d].type, e[d].value),
                    u = n.KEY_WIDTH * o,
                    p = n.KEY_WIDTH * a;
                1 == a && (u += n.KEY_WIDTH / 2), s && (u = u + n.SPACE_KEY_WIDTH - n.KEY_WIDTH + 2 * 0.055), 'spacebar' === e[d].type && (s = !0, u += 0.205, p = n.KEY_WIDTH * a - 0.01), c.setAttribute('position', u + ' -' + p + ' 0'), 1 == a && 8 == o ? (o = -1, a++) : 9 == o && (o = -1, a++), o++, t.appendChild(c)
            }
            return t
        }, l.symbolsLayout = function() {
            var e = r.symbols,
                t = document.createElement('a-entity');
            t.setAttribute('position', '0.02 0.26 0.001');
            var a = 0,
                o = 0,
                s = !1;
            for (var d in e) {
                var c = l.key('symbols-' + d, e[d].type, e[d].value),
                    u = n.KEY_WIDTH * o,
                    p = n.KEY_WIDTH * a;
                s && (u = u + n.SPACE_KEY_WIDTH - n.KEY_WIDTH + 2 * 0.055), 'spacebar' === e[d].type && (s = !0, u += 0.085, p = n.KEY_WIDTH * a - 0.01), c.setAttribute('position', u + ' -' + p + ' 0'), 9 == o && (o = -1, a++), o++, t.appendChild(c)
            }
            return t
        }, l.actionsLayout = function() {
            var e = r.actions,
                t = document.createElement('a-entity');
            t.setAttribute('position', '0.02 0.26 0.001');
            var a = 0;
            for (var o in e) {
                var s = l.key('action-' + o, e[o].type, e[o].value);
                s.setAttribute('position', '0 -' + a + ' 0'), 0 == o ? a += n.ACTION_WIDTH + 0.01 : 1 == o && (a += n.KEY_WIDTH + 0.01), t.appendChild(s)
            }
            return t
        }, l.key = function(e, t, a) {
            var r = document.createElement('a-rounded');
            if (r.setAttribute('key-id', e), r.setAttribute('width', n.KEY_WIDTH), r.setAttribute('height', n.KEY_WIDTH), r.setAttribute('radius', '0.008'), r.setAttribute('position', '0 0 0'), r.setAttribute('key-type', t), r.setAttribute('key-value', a), r.setAttribute('color', n.KEYBOARD_COLOR), setTimeout(function() {
                    r.setAttribute('material', {
                        color: n.KEYBOARD_COLOR,
                        shader: 'flat'
                    })
                }), s.addKeyEvents(r), 'text' === t || 'spacebar' === t || 'symbol' === t) {
                var d = document.createElement('a-text');
                d.setAttribute('mixin', 'font'), d.setAttribute('value', a), d.setAttribute('color', '#dbddde'), d.setAttribute('position', n.KEY_WIDTH / 2 + ' ' + (n.KEY_WIDTH / 2 - 0.02) + ' 0.015'), d.setAttribute('scale', '0.16 0.16 0.16'), d.setAttribute('align', 'center'), d.setAttribute('baseline', 'center'), r.appendChild(d)
            }
            if ('spacebar' === t) {
                var c = function(e, t) {
                    setTimeout(function() {
                        e.setAttribute('color', n.KEY_COLOR_ACTIVE), t.setAttribute('color', n.KEY_COLOR_ACTIVE)
                    }, 500)
                };
                r.setAttribute('width', n.SPACE_KEY_WIDTH), r.setAttribute('height', n.SPACE_KEY_HEIGHT), c(r, d), d.setAttribute('scale', '0.12 0.12 0.12'), d.setAttribute('position', n.SPACE_KEY_WIDTH / 2 + .03 + ' ' + n.SPACE_KEY_HEIGHT / 2 + ' 0')
            } else 'symbol' === t && d.setAttribute('scale', '0.12 0.12 0.12');
            if (('backspace' === t || 'enter' === t || 'dismiss' === t) && r.setAttribute('width', n.ACTION_WIDTH), 'shift' === t) {
                var u = document.createElement('a-image');
                u.setAttribute('data-type', 'icon'), u.setAttribute('width', '0.032'), u.setAttribute('height', '0.032'), u.setAttribute('position', '0.04 0.04 0.01'), u.setAttribute('src', o.aframeKeyboardShift), r.appendChild(u), l.el.shiftKey = r
            } else if ('global' === t) {
                var u = document.createElement('a-image');
                u.setAttribute('width', '0.032'), u.setAttribute('height', '0.032'), u.setAttribute('position', '0.04 0.04 0.01'), u.setAttribute('src', o.aframeKeyboardGlobal), r.appendChild(u)
            } else if ('backspace' === t) {
                var u = document.createElement('a-image');
                u.setAttribute('width', '0.046'), u.setAttribute('height', '0.046'), u.setAttribute('position', '0.07 0.04 0.01'), u.setAttribute('src', o.aframeKeyboardBackspace), r.appendChild(u)
            } else if ('enter' === t) {
                r.setAttribute('height', n.ACTION_WIDTH);
                var p = document.createElement('a-circle');
                p.setAttribute('color', '#4285f4'), p.setAttribute('radius', 0.044), p.setAttribute('position', '0.07 0.07 0.01'), r.appendChild(p);
                var u = document.createElement('a-image');
                u.setAttribute('width', '0.034'), u.setAttribute('height', '0.034'), u.setAttribute('position', '0.07 0.07 0.011'), u.setAttribute('src', o.aframeKeyboardEnter), r.appendChild(u)
            } else if ('dismiss' === t) {
                var u = document.createElement('a-image');
                u.setAttribute('width', '0.046'), u.setAttribute('height', '0.046'), u.setAttribute('position', '0.07 0.04 0.01'), u.setAttribute('src', o.aframeKeyboardDismiss), r.appendChild(u)
            }
            return r
        }, e.exports = l
    }, function(e) {
        'use strict';
        e.exports = {
            aframeKeyboardShift: AFRAME.ASSETS_PATH + '/images/ShiftIcon.png',
            aframeKeyboardShiftActive: AFRAME.ASSETS_PATH + '/images/ShiftActiveIcon.png',
            aframeKeyboardGlobal: AFRAME.ASSETS_PATH + '/images/GlobalIcon.png',
            aframeKeyboardBackspace: AFRAME.ASSETS_PATH + '/images/BackspaceIcon.png',
            aframeKeyboardEnter: AFRAME.ASSETS_PATH + '/images/EnterIcon.png',
            aframeKeyboardDismiss: AFRAME.ASSETS_PATH + '/images/DismissIcon.png',
            aframeKeyboardShadow: AFRAME.ASSETS_PATH + '/images/KeyShadow.png',
            aframeKeyboardKeyIn: AFRAME.ASSETS_PATH + '/sounds/KeyIn.mp3',
            aframeKeyboardKeyDown: AFRAME.ASSETS_PATH + '/sounds/KeyDown.mp3'
        }
    }, function(e) {
        'use strict';
        e.exports = {
            numerical: [{
                type: 'text',
                value: '1'
            }, {
                type: 'text',
                value: '2'
            }, {
                type: 'text',
                value: '3'
            }, {
                type: 'text',
                value: '4'
            }, {
                type: 'text',
                value: '5'
            }, {
                type: 'text',
                value: '6'
            }, {
                type: 'text',
                value: '7'
            }, {
                type: 'text',
                value: '8'
            }, {
                type: 'text',
                value: '9'
            }, {
                type: 'text',
                value: '.'
            }, {
                type: 'text',
                value: '0'
            }, {
                type: 'text',
                value: '-'
            }],
            alphabetical: [{
                type: 'text',
                value: 'q'
            }, {
                type: 'text',
                value: 'w'
            }, {
                type: 'text',
                value: 'e'
            }, {
                type: 'text',
                value: 'r'
            }, {
                type: 'text',
                value: 't'
            }, {
                type: 'text',
                value: 'y'
            }, {
                type: 'text',
                value: 'u'
            }, {
                type: 'text',
                value: 'i'
            }, {
                type: 'text',
                value: 'o'
            }, {
                type: 'text',
                value: 'p'
            }, {
                type: 'text',
                value: 'a'
            }, {
                type: 'text',
                value: 's'
            }, {
                type: 'text',
                value: 'd'
            }, {
                type: 'text',
                value: 'f'
            }, {
                type: 'text',
                value: 'g'
            }, {
                type: 'text',
                value: 'h'
            }, {
                type: 'text',
                value: 'j'
            }, {
                type: 'text',
                value: 'k'
            }, {
                type: 'text',
                value: 'l'
            }, {
                type: 'shift'
            }, {
                type: 'text',
                value: 'z'
            }, {
                type: 'text',
                value: 'x'
            }, {
                type: 'text',
                value: 'c'
            }, {
                type: 'text',
                value: 'v'
            }, {
                type: 'text',
                value: 'b'
            }, {
                type: 'text',
                value: 'n'
            }, {
                type: 'text',
                value: 'm'
            }, {
                type: 'text',
                value: '!'
            }, {
                type: 'text',
                value: '?'
            }, {
                type: 'spacebar',
                value: ''
            }],
            symbols: [{
                type: 'text',
                value: '@'
            }, {
                type: 'text',
                value: '#'
            }, {
                type: 'text',
                value: '$'
            }, {
                type: 'text',
                value: '%'
            }, {
                type: 'text',
                value: '&'
            }, {
                type: 'text',
                value: '*'
            }, {
                type: 'text',
                value: '-'
            }, {
                type: 'text',
                value: '+'
            }, {
                type: 'text',
                value: '('
            }, {
                type: 'text',
                value: ')'
            }, {
                type: 'text',
                value: '~'
            }, {
                type: 'text',
                value: '`'
            }, {
                type: 'text',
                value: '"'
            }, {
                type: 'text',
                value: '\''
            }, {
                type: 'text',
                value: ':'
            }, {
                type: 'text',
                value: ';'
            }, {
                type: 'text',
                value: '_'
            }, {
                type: 'text',
                value: '='
            }, {
                type: 'text',
                value: '\\'
            }, {
                type: 'text',
                value: '/'
            }, {
                type: 'text',
                value: '{'
            }, {
                type: 'text',
                value: '}'
            }, {
                type: 'text',
                value: '['
            }, {
                type: 'text',
                value: ']'
            }, {
                type: 'text',
                value: '<'
            }, {
                type: 'text',
                value: '>'
            }, {
                type: 'text',
                value: '^'
            }, {
                type: 'text',
                value: '|'
            }, {
                type: 'text',
                value: '!'
            }, {
                type: 'text',
                value: '?'
            }, {
                type: 'symbol',
                value: 'ABC'
            }, {
                type: 'text',
                value: '@'
            }, {
                type: 'spacebar',
                value: ''
            }, {
                type: 'text',
                value: ','
            }, {
                type: 'text',
                value: '.'
            }],
            actions: [{
                type: 'backspace',
                value: 'Del'
            }, {
                type: 'enter',
                value: 'OK'
            }, {
                type: 'dismiss',
                value: 'W'
            }]
        }
    }, function(e) {
        'use strict';
        e.exports = {
            KEYBOARD_COLOR: '#263238',
            KEY_COLOR_HIGHLIGHT: '#39464c',
            KEY_COLOR_ACTIVE: '#404b50',
            SPACEBAR_COLOR_ACTIVE: '#3c464b',
            SPACEBAR_COLOR_HIGHLIGHT: '#445055',
            KEY_WIDTH: 0.08,
            SPACE_KEY_WIDTH: 0.368,
            SPACE_KEY_HEIGHT: 0.05,
            ACTION_WIDTH: 0.14
        }
    }, function(e, t, a) {
        'use strict';
        var o = a(8),
            r = a(10),
            n = a(6),
            s = a(4),
            l = a(12),
            d = {};
        d.el = null, d.showKeyboard = function(e) {
            e.o_position && e.object3D.position.copy(e.o_position), e.isOpen = !0;
            var t = !0,
                a = !1,
                o;
            try {
                for (var r = e.querySelectorAll('[data-ui]')[Symbol.iterator](), n; !(t = (n = r.next()).done); t = !0) {
                    var s = n.value,
                        l = !0,
                        d = !1,
                        c = void 0;
                    try {
                        for (var u = s.children[Symbol.iterator](), p, m; !(l = (p = u.next()).done); l = !0) m = p.value, m.setAttribute('show', !0)
                    } catch (e) {
                        d = !0, c = e
                    } finally {
                        try {
                            !l && u.return && u.return()
                        } finally {
                            if (d) throw c
                        }
                    }
                }
            } catch (e) {
                a = !0, o = e
            } finally {
                try {
                    !t && r.return && r.return()
                } finally {
                    if (a) throw o
                }
            }
            var g = e.parentNode;
            g || e.sceneEl.appendChild(e)
        }, d.hideKeyboard = function(e) {
            var t = e.getAttribute('position'); - 1e4 !== t.x && (!e.o_position && (e.o_position = new THREE.Vector3), e.o_position.copy(t)), e.isOpen = !1, e.setAttribute('position', '-10000 -10000 -10000'), e.setAttribute('fadeout', {
                duration: 1
            })
        }, d.destroyKeyboard = function(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }, d.openKeyboard = function(e) {
            e.o_position && e.object3D.position.copy(e.o_position), e.isOpen = !0, e._transitioning = !0;
            var t = e.parentNode;
            t || e.sceneEl.appendChild(e);
            var a = !0,
                o = !1,
                r;
            try {
                for (var n = function() {
                        function t() {
                            a.children[0].removeEventListener('animationend', t), setTimeout(function() {
                                a.children[1].setAttribute('fadein', {
                                    duration: 160
                                }), s.emit(d.el, 'didopen'), e._transitioning = !1
                            }, 10)
                        }
                        var a = c.value,
                            o = !0,
                            r = !1,
                            n;
                        try {
                            for (var l = a.children[Symbol.iterator](), u, p; !(o = (u = l.next()).done); o = !0) p = u.value, p.setAttribute('hide', !0)
                        } catch (e) {
                            r = !0, n = e
                        } finally {
                            try {
                                !o && l.return && l.return()
                            } finally {
                                if (r) throw n
                            }
                        }
                        a.children[0].setAttribute('fadein', {
                            duration: 160
                        }), a.children[0].addEventListener('animationend', t)
                    }, l = e.querySelectorAll('[data-ui]')[Symbol.iterator](), c; !(a = (c = l.next()).done); a = !0) n()
            } catch (e) {
                o = !0, r = e
            } finally {
                try {
                    !a && l.return && l.return()
                } finally {
                    if (o) throw r
                }
            }
        }, d.dismissKeyboard = function(e) {
            e._transitioning = !0;
            var t = !0,
                a = !1,
                o;
            try {
                for (var r = function() {
                        function t() {
                            a.children[1].removeEventListener('animationend', t), setTimeout(function() {
                                function t() {
                                    a.children[0].removeEventListener('animationend', t), d.hideKeyboard(e), s.emit(d.el, 'diddismiss'), e._transitioning = !1
                                }
                                a.children[0].setAttribute('fadeout', {
                                    duration: 160
                                }), a.children[0].addEventListener('animationend', t)
                            }, 10)
                        }
                        var a = l.value,
                            o = !0,
                            r = !1,
                            n;
                        try {
                            for (var c = a.children[Symbol.iterator](), u, p; !(o = (u = c.next()).done); o = !0) p = u.value, p.setAttribute('show', !0)
                        } catch (e) {
                            r = !0, n = e
                        } finally {
                            try {
                                !o && c.return && c.return()
                            } finally {
                                if (r) throw n
                            }
                        }
                        e.isOpen = !1, a.children[1].setAttribute('fadeout', {
                            duration: 160
                        }), a.children[1].addEventListener('animationend', t)
                    }, n = e.querySelectorAll('[data-ui]')[Symbol.iterator](), l; !(t = (l = n.next()).done); t = !0) r()
            } catch (e) {
                a = !0, o = e
            } finally {
                try {
                    !t && n.return && n.return()
                } finally {
                    if (a) throw o
                }
            }
        }, d.addKeyEvents = function(e) {
            e.addEventListener('click', d.keyClick), e.addEventListener('mousedown', d.keyDown), e.addEventListener('mouseup', d.keyOut), e.addEventListener('mouseenter', d.keyIn), e.addEventListener('mouseleave', d.keyOut)
        }, d.keyClick = function() {
            l.keyDown(d.el);
            var e = this.getAttribute('key-type'),
                t = this.getAttribute('key-value');
            'text' === e || 'spacebar' === e ? ('spacebar' === e && (t = ' '), d.isShiftEnabled ? (t = t.toUpperCase(), d.shiftToggle()) : d.isSymbols && d.symbolsToggle(), s.emit(d.el, 'input', t)) : 'shift' === e ? d.shiftToggle() : 'symbol' === e ? d.symbolsToggle() : 'backspace' === e ? s.emit(d.el, 'backspace') : 'enter' === e ? (s.emit(d.el, 'input', '\n'), s.emit(d.el, 'enter', '\n')) : 'dismiss' === e && s.emit(d.el, 'dismiss')
        }, d.keyDown = function() {
            d.el._transitioning || (this.object3D.position.z = 3e-3, 'spacebar' === this.getAttribute('key-type') ? this.setAttribute('color', r.SPACEBAR_COLOR_ACTIVE) : this.setAttribute('color', r.KEY_COLOR_ACTIVE))
        }, d.keyIn = function() {
            d.el._transitioning || this.object3D.children[2] && this.object3D.children[2].material && !this.object3D.children[2].material.opacity || (l.keyIn(d.el), 'spacebar' === this.getAttribute('key-type') ? this.setAttribute('color', r.SPACEBAR_COLOR_HIGHLIGHT) : this.setAttribute('color', r.KEY_COLOR_HIGHLIGHT))
        }, d.keyOut = function() {
            this.object3D.position.z = 0, 'spacebar' === this.getAttribute('key-type') ? this.setAttribute('color', r.KEY_COLOR_ACTIVE) : this.setAttribute('color', r.KEYBOARD_COLOR)
        }, d.isShiftEnabled = !1, d.shiftToggle = function() {
            d.isShiftEnabled = !d.isShiftEnabled;
            var e = d.el.shiftKey.querySelector('[data-type]');
            d.isShiftEnabled ? e.setAttribute('src', o.aframeKeyboardShiftActive) : e.setAttribute('src', o.aframeKeyboardShift);
            var t = !0,
                a = !1,
                r;
            try {
                for (var n = document.querySelectorAll('[key-id]')[Symbol.iterator](), s; !(t = (s = n.next()).done); t = !0) {
                    var l = s.value,
                        c = l.getAttribute('key-id'),
                        u = l.getAttribute('key-type');
                    if (c.startsWith('main-') && 'text' === u) {
                        var p = l.querySelector('a-text');
                        if (p) {
                            var m = p.getAttribute('value').toLowerCase();
                            this.isShiftEnabled && (m = m.toUpperCase()), p.setAttribute('value', m)
                        }
                    }
                }
            } catch (e) {
                a = !0, r = e
            } finally {
                try {
                    !t && n.return && n.return()
                } finally {
                    if (a) throw r
                }
            }
        }, d.isSymbols = !1, d.symbolsToggle = function() {
            if (d.isSymbols = !d.isSymbols, !d.isSymbols) {
                var e = d.el.symbolsLayout.parentNode;
                e.removeChild(d.el.symbolsLayout), e.appendChild(d.el.alphabeticalLayout), setTimeout(function() {
                    n.updateOpacity(d.el.alphabeticalLayout, 1)
                }, 0)
            } else {
                var t = d.el.alphabeticalLayout.parentNode;
                t.removeChild(d.el.alphabeticalLayout), t.appendChild(d.el.symbolsLayout)
            }
        }, e.exports = d
    }, function(e, t, a) {
        'use strict';
        var o = a(13);
        e.exports = {
            init: function(e) {
                var t = document.createElement('a-sound');
                t.setAttribute('key', 'aframeKeyboardKeyInSound'), t.setAttribute('sfx', !0), t.setAttribute('src', o.aframeKeyboardKeyIn), t.setAttribute('position', '0 2 5'), e.appendChild(t), t = document.createElement('a-sound'), t.setAttribute('key', 'aframeKeyboardKeyDownSound'), t.setAttribute('sfx', !0), t.setAttribute('src', o.aframeKeyboardKeyDown), t.setAttribute('position', '0 2 5'), e.appendChild(t)
            },
            keyIn: function(e) {
                var t = e.querySelector('[key=aframeKeyboardKeyInSound]');
                t && (t.components.sound.stopSound(), t.components.sound.playSound())
            },
            keyDown: function(e) {
                var t = e.querySelector('[key=aframeKeyboardKeyDownSound]');
                t && (t.components.sound.stopSound(), t.components.sound.playSound())
            }
        }
    }, function(e) {
        'use strict';
        e.exports = {
            aframeKeyboardShift: AFRAME.ASSETS_PATH + '/images/ShiftIcon.png',
            aframeKeyboardShiftActive: AFRAME.ASSETS_PATH + '/images/ShiftActiveIcon.png',
            aframeKeyboardGlobal: AFRAME.ASSETS_PATH + '/images/GlobalIcon.png',
            aframeKeyboardBackspace: AFRAME.ASSETS_PATH + '/images/BackspaceIcon.png',
            aframeKeyboardEnter: AFRAME.ASSETS_PATH + '/images/EnterIcon.png',
            aframeKeyboardDismiss: AFRAME.ASSETS_PATH + '/images/DismissIcon.png',
            aframeKeyboardShadow: AFRAME.ASSETS_PATH + '/images/KeyShadow.png',
            aframeKeyboardKeyIn: AFRAME.ASSETS_PATH + '/sounds/KeyIn.mp3',
            aframeKeyboardKeyDown: AFRAME.ASSETS_PATH + '/sounds/KeyDown.mp3'
        }
    }, function(e, t, a) {
        'use strict';
        var o = a(6),
            r = a(4);
        AFRAME.registerComponent('input', {
            schema: {
                value: {
                    type: 'string',
                    default: ''
                },
                name: {
                    type: 'string',
                    default: ''
                },
                disabled: {
                    type: 'boolean',
                    default: !1
                },
                color: {
                    type: 'color',
                    default: '#000'
                },
                align: {
                    type: 'string',
                    default: 'left'
                },
                font: {
                    type: 'string',
                    default: ''
                },
                letterSpacing: {
                    type: 'int',
                    default: 0
                },
                lineHeight: {
                    type: 'string',
                    default: ''
                },
                opacity: {
                    type: 'number',
                    default: 1
                },
                side: {
                    type: 'string',
                    default: 'front'
                },
                tabSize: {
                    type: 'int',
                    default: 4
                },
                placeholder: {
                    type: 'string',
                    default: ''
                },
                placeholderColor: {
                    type: 'color',
                    default: '#AAA'
                },
                maxLength: {
                    type: 'int',
                    default: 0
                },
                type: {
                    type: 'string',
                    default: 'text'
                },
                width: {
                    type: 'number',
                    default: 1
                },
                cursorWidth: {
                    type: 'number',
                    default: 0.01
                },
                cursorHeight: {
                    type: 'number',
                    default: 0.08
                },
                cursorColor: {
                    type: 'color',
                    default: '#007AFF'
                },
                backgroundColor: {
                    type: 'color',
                    default: '#FFF'
                },
                backgroundOpacity: {
                    type: 'number',
                    default: 1
                }
            },
            init: function() {
                var e = this;
                this.background = document.createElement('a-rounded'), this.background.setAttribute('radius', 0.01), this.background.setAttribute('height', 0.18), this.background.setAttribute('side', 'double'), this.el.appendChild(this.background), this.cursor = document.createElement('a-plane'), this.cursor.setAttribute('position', '0 0 0.003'), this.cursor.setAttribute('visible', !1), this.el.appendChild(this.cursor), this.text = document.createElement('a-entity'), this.text.setAttribute('mixin', 'font'), this.el.appendChild(this.text), this.placeholder = document.createElement('a-entity'), this.placeholder.setAttribute('mixin', 'font'), this.placeholder.setAttribute('visible', !1), this.el.appendChild(this.placeholder), this.el.focus = this.focus.bind(this), this.el.blur = this.blur.bind(this), this.el.appendString = this.appendString.bind(this), this.el.deleteLast = this.deleteLast.bind(this), this.blink(), this.el.addEventListener('click', function() {
                    this.components.input.data.disabled || e.focus()
                }), Object.defineProperty(this.el, 'value', {
                    get: function() {
                        return this.getAttribute('value')
                    },
                    set: function(e) {
                        this.setAttribute('value', e)
                    },
                    enumerable: !0,
                    configurable: !0
                })
            },
            blink: function() {
                var e = this;
                return this.isFocused ? void(this.cursorInterval = setInterval(function() {
                    e.cursor.setAttribute('visible', !e.cursor.getAttribute('visible'))
                }, 500)) : (e.cursor.setAttribute('visible', !1), clearInterval(this.cursorInterval), void(this.cursorInterval = null))
            },
            isFocused: !1,
            focus: function(e) {
                this.isFocused || (this.isFocused = !0, this.cursor.setAttribute('visible', !0), this.blink(), r.emit(this.el, 'focus'), !e && r.emit(document.body, 'didfocusinput', this.el))
            },
            blur: function(e) {
                this.isFocused && (this.isFocused = !1, this.cursorInterval && (clearInterval(this.cursorInterval), this.cursorInterval = null), this.cursor.setAttribute('visible', !1), r.emit(this.el, 'blur'), !e && r.emit(document.body, 'didblurinput', this.el))
            },
            appendString: function(e) {
                if ('\n' === e) return this.blur();
                var t = this.el.getAttribute('value');
                t || (t = ''), t += e, this.el.setAttribute('value', t), r.emit(this.el, 'change', t)
            },
            deleteLast: function() {
                var e = this.el.getAttribute('value');
                e || (e = ''), e = e.slice(0, -1), this.el.setAttribute('value', e), r.emit(this.el, 'change', e)
            },
            updateText: function() {
                function e(t, n, s, l) {
                    if (!t.object3D || !t.object3D.children || !t.object3D.children[0]) return 0;
                    var d = t.object3D.children[0].geometry.visibleGlyphs;
                    if (!d) return 0;
                    if (d = d[d.length - 1], !d) return 0;
                    if (d.line) return n.value = s ? n.value.substr(1) : n.value.slice(0, -1), t.setAttribute('text', n), e(t, n, s);
                    l || (l = o.getWidthFactor(t, n.wrapCount)), d = (d.position[0] + d.data.width) / (l / a.data.width);
                    var c = (d + r.left + r.right) / a.data.width;
                    return 1 < c ? (n.value = s ? n.value.substr(1) : n.value.slice(0, -1), t.setAttribute('text', n), e(t, n, s, l)) : d
                }
                var t = this,
                    a = this,
                    r = {
                        left: 0.021,
                        right: 0.021
                    },
                    n = {
                        color: this.data.color,
                        align: this.data.align,
                        side: this.data.side,
                        tabSize: this.data.tabSize,
                        wrapCount: 24 * this.data.width,
                        width: this.data.width
                    },
                    s = this.text.getAttribute('text');
                s && this.data.value !== s.value && (this.cursorInterval && (clearInterval(this.cursorInterval), this.cursorInterval = null), this.cursorTimer && (clearTimeout(this.cursorTimer), this.cursorTimer = null), this.cursor.setAttribute('visible', !0), this.cursorTimer = setTimeout(function() {
                    a.blink()
                }, 50)), this.data.maxLength ? (n.value = this.data.value.substring(0, this.data.maxLength), this.el.setAttribute('value', n.value)) : n.value = this.data.value, 'password' === this.data.type && (n.value = '*'.repeat(this.data.value.length)), this.data.font.length && (n.font = this.data.font), this.data.letterSpacing && (n.letterSpacing = this.data.letterSpacing), this.data.lineHeight.length && (n.lineHeight = this.data.lineHeight), this.text.setAttribute('visible', !1), this.text.setAttribute('text', n), n.value.length ? this.placeholder.setAttribute('visible', !1) : this.placeholder.setAttribute('visible', !0);
                var l = o.clone(n);
                l.value = this.data.placeholder, l.color = this.data.placeholderColor, this.placeholder.setAttribute('text', l), setTimeout(function() {
                    if (a.text.object3D) {
                        var t = a.text.object3D.children;
                        if (t[0] && t[0].geometry && t[0].geometry.visibleGlyphs) {
                            var o = 0;
                            t[0].geometry.visibleGlyphs.length && (o = e(a.text, n, !0), a.text.setAttribute('visible', !0)), a.cursor.setAttribute('position', o + r.left + ' 0 0.003')
                        } else a.cursor.setAttribute('position', r.left + ' 0 0.003')
                    } else a.cursor.setAttribute('position', r.left + ' 0 0.003');
                    e(a.placeholder, l)
                }, 0), this.background.setAttribute('color', this.data.backgroundColor), setTimeout(function() {
                    t.background.setAttribute('material', {
                        shader: 'flat',
                        color: t.data.backgroundColor
                    })
                }), this.background.setAttribute('width', this.data.width), this.background.setAttribute('position', '0 -0.09 0.001'), this.text.setAttribute('position', r.left - 1e-3 + this.data.width / 2 + ' -0.055 0.002'), this.placeholder.setAttribute('position', r.left - 1e-3 + this.data.width / 2 + ' -0.055 0.002')
            },
            updateCursor: function() {
                this.cursor.setAttribute('width', this.data.cursorWidth), this.cursor.setAttribute('height', this.data.cursorHeight), this.cursor.setAttribute('color', this.data.cursorColor)
            },
            update: function() {
                this;
                setTimeout(function() {}, 0), this.updateCursor(), this.updateText()
            },
            tick: function() {},
            remove: function() {},
            pause: function() {},
            play: function() {}
        }), AFRAME.registerPrimitive('a-input', {
            defaultComponents: {
                input: {}
            },
            mappings: {
                value: 'input.value',
                name: 'input.name',
                disabled: 'input.disabled',
                color: 'input.color',
                align: 'input.align',
                font: 'input.font',
                "letter-spacing": 'input.letterSpacing',
                "line-height": 'input.lineHeight',
                opacity: 'input.opacity',
                side: 'input.side',
                "tab-size": 'input.tabSize',
                placeholder: 'input.placeholder',
                "placeholder-color": 'input.placeholderColor',
                "max-length": 'input.maxLength',
                type: 'input.type',
                width: 'input.width',
                "cursor-width": 'input.cursorWidth',
                "cursor-height": 'input.cursorHeight',
                "cursor-color": 'input.cursorColor',
                "background-color": 'input.backgroundColor',
                "background-opacity": 'input.backgroundOpacity'
            }
        })
    }, function(e, t, a) {
        'use strict';
        var o = a(6),
            r = a(4),
            n = a(16),
            s = a(17);
        AFRAME.registerComponent('switch', {
            schema: {
                name: {
                    type: 'string',
                    default: ''
                },
                enabled: {
                    type: 'boolean',
                    default: !1
                },
                disabled: {
                    type: 'boolean',
                    default: !1
                },
                fillColor: {
                    type: 'color',
                    default: '#bababa'
                },
                knobColor: {
                    type: 'color',
                    default: '#f5f5f5'
                },
                fillColorEnabled: {
                    type: 'color',
                    default: '#80a8ff'
                },
                knobColorEnabled: {
                    type: 'color',
                    default: '#4076fd'
                },
                fillColorDisabled: {
                    type: 'color',
                    default: '#939393'
                },
                knobColorDisabled: {
                    type: 'color',
                    default: '#a2a2a2'
                }
            },
            init: function() {
                this;
                o.preloadAssets(n), s.init(this.el), this.el.fill = document.createElement('a-rounded'), this.el.fill.setAttribute('width', 0.36), this.el.fill.setAttribute('height', 0.16), this.el.fill.setAttribute('radius', 0.08), this.el.fill.setAttribute('side', 'double'), this.el.fill.setAttribute('position', '0 0 0.01'), this.el.appendChild(this.el.fill), this.el.knob = document.createElement('a-circle'), this.el.knob.setAttribute('position', '0.06 0.08 0.02'), this.el.knob.setAttribute('radius', 0.12), this.el.knob.setAttribute('side', 'double'), this.el.appendChild(this.el.knob), this.el.shadow_el = document.createElement('a-image'), this.el.shadow_el.setAttribute('width', 1.25 * 0.24), this.el.shadow_el.setAttribute('height', 1.25 * 0.24), this.el.shadow_el.setAttribute('position', '0 0 -0.001'), this.el.shadow_el.setAttribute('src', '#aframeSwitchShadow'), this.el.knob.appendChild(this.el.shadow_el), this.el.addEventListener('click', function() {
                    this.components.switch.data.disabled || (this.setAttribute('enabled', !this.components.switch.data.enabled), r.emit(this, 'change', this.components.switch.data.enabled))
                }), this.el.addEventListener('mousedown', function() {
                    return this.components.switch.data.disabled ? s.clickDisabled(this) : void s.click(this)
                }), Object.defineProperty(this.el, 'enabled', {
                    get: function() {
                        return this.getAttribute('enabled')
                    },
                    set: function(e) {
                        this.setAttribute('enabled', e)
                    },
                    enumerable: !0,
                    configurable: !0
                })
            },
            on: function() {
                this.el.fill.setAttribute('color', this.data.fillColorEnabled), this.el.knob.setAttribute('position', '0.32 0.08 0.02'), this.el.knob.setAttribute('color', this.data.knobColorEnabled)
            },
            off: function() {
                this.el.fill.setAttribute('color', this.data.fillColor), this.el.knob.setAttribute('position', '0.06 0.08 0.02'), this.el.knob.setAttribute('color', this.data.knobColor)
            },
            disable: function() {
                this.el.fill.setAttribute('color', this.data.fillColorDisabled), this.el.knob.setAttribute('color', this.data.knobColorDisabled)
            },
            update: function() {
                this.data.enabled ? this.on() : this.off(), this.data.disabled && this.disable()
            },
            tick: function() {},
            remove: function() {},
            pause: function() {},
            play: function() {}
        }), AFRAME.registerPrimitive('a-switch', {
            defaultComponents: {
                switch: {}
            },
            mappings: {
                name: 'switch.name',
                enabled: 'switch.enabled',
                disabled: 'switch.disabled',
                "fill-color": 'switch.fillColor',
                "knob-color": 'switch.knobColor',
                "fill-color-enabled": 'switch.fillColorEnabled',
                "knob-color-enabled": 'switch.knobColorEnabled',
                "fill-color-disabled": 'switch.fillColorDisabled',
                "knob-color-disabled": 'switch.knobColorDisabled'
            }
        })
    }, function(e) {
        'use strict';
        e.exports = [{
            type: 'img',
            id: 'aframeSwitchShadow',
            src: AFRAME.ASSETS_PATH + '/images/SwitchShadow.png'
        }, {
            type: 'audio',
            id: 'aframeSwitchClick',
            src: AFRAME.ASSETS_PATH + '/sounds/InputClick.mp3'
        }, {
            type: 'audio',
            id: 'aframeSwitchClickDisabled',
            src: AFRAME.ASSETS_PATH + '/sounds/ButtonClickDisabled.mp3'
        }]
    }, function(e) {
        'use strict';
        e.exports = {
            init: function(e) {
                var t = document.createElement('a-sound');
                t.setAttribute('key', 'aframeSwitchClickSound'), t.setAttribute('sfx', !0), t.setAttribute('src', '#aframeSwitchClick'), t.setAttribute('position', '0 2 5'), e.appendChild(t), t = document.createElement('a-sound'), t.setAttribute('key', 'aframeSwitchClickDisabledSound'), t.setAttribute('sfx', !0), t.setAttribute('src', '#aframeSwitchClickDisabled'), t.setAttribute('position', '0 2 5'), e.appendChild(t)
            },
            click: function(e) {
                var t = e.querySelector('[key=aframeSwitchClickSound]');
                t && (t.components.sound.stopSound(), t.components.sound.playSound())
            },
            clickDisabled: function(e) {
                var t = e.querySelector('[key=aframeSwitchClickDisabledSound]');
                t && (t.components.sound.stopSound(), t.components.sound.playSound())
            }
        }
    }, function(e, t, a) {
        'use strict';
        var o = a(6),
            r = a(4);
        AFRAME.registerComponent('form', {
            schema: {},
            init: function() {},
            update: function() {},
            tick: function() {},
            remove: function() {},
            pause: function() {},
            play: function() {}
        }), AFRAME.registerPrimitive('a-form', {
            defaultComponents: {
                form: {}
            },
            mappings: {}
        })
    }, function(e, t, a) {
        'use strict';
        var o = a(6),
            r = a(4),
            n = a(20),
            s = a(21);
        AFRAME.registerComponent('radio', {
            schema: {
                checked: {
                    type: 'boolean',
                    default: !1
                },
                disabled: {
                    type: 'boolean',
                    default: !1
                },
                name: {
                    type: 'string',
                    default: ''
                },
                value: {
                    type: 'string',
                    default: ''
                },
                label: {
                    type: 'string',
                    default: ''
                },
                radioColor: {
                    type: 'color',
                    default: '#757575'
                },
                radioColorChecked: {
                    type: 'color',
                    default: '#4076fd'
                },
                color: {
                    type: 'color',
                    default: '#757575'
                },
                font: {
                    type: 'string',
                    default: ''
                },
                letterSpacing: {
                    type: 'int',
                    default: 0
                },
                lineHeight: {
                    type: 'string',
                    default: ''
                },
                opacity: {
                    type: 'number',
                    default: 1
                },
                width: {
                    type: 'number',
                    default: 1
                }
            },
            init: function() {
                var e = this;
                o.preloadAssets(n), s.init(this.el), this.hitbox = document.createElement('a-plane'), this.hitbox.setAttribute('height', 0.2), this.hitbox.setAttribute('opacity', 0), this.hitbox.setAttribute('position', '0 0 0.001'), this.el.appendChild(this.hitbox), this.outline = document.createElement('a-ring'), this.outline.setAttribute('radius-outer', 0.1), this.outline.setAttribute('radius-inner', 0.078), this.outline.setAttribute('position', '0.1 0 0.002'), this.el.appendChild(this.outline), this.circle = document.createElement('a-circle'), this.circle.setAttribute('radius', 0.05), this.circle.setAttribute('position', '0.1 0 0.002'), this.el.appendChild(this.circle), this.label = document.createElement('a-entity'), this.el.appendChild(this.label), this.el.addEventListener('click', function() {
                    this.components.radio.data.disabled || (this.setAttribute('checked', !0), e.onClick())
                }), this.el.addEventListener('mousedown', function() {
                    return this.components.radio.data.disabled ? s.clickDisabled(this) : void s.click(this)
                }), Object.defineProperty(this.el, 'value', {
                    get: function() {
                        return this.getAttribute('value')
                    },
                    set: function(e) {
                        this.setAttribute('value', e)
                    },
                    enumerable: !0,
                    configurable: !0
                })
            },
            onClick: function(e) {
                if (this.data.name) {
                    var t = this.el.closest('a-form');
                    if (t) {
                        var a = !1,
                            o = Array.from(t.querySelectorAll('[name=' + this.data.name + ']'));
                        o.reverse();
                        var n = !0,
                            s = !1,
                            l;
                        try {
                            for (var d = o[Symbol.iterator](), c, u; !(n = (c = d.next()).done); n = !0) u = c.value, u.components.radio && (u === this.el && u.hasAttribute('checked') ? (a = !0, u.components.radio.check(), !e && r.emit(u, 'change', !0)) : a || this.data.checked || !u.hasAttribute('checked') ? u.components.radio.uncheck() : (a = !0, u.components.radio.check()))
                        } catch (e) {
                            s = !0, l = e
                        } finally {
                            try {
                                !n && d.return && d.return()
                            } finally {
                                if (s) throw l
                            }
                        }!a && this.el.hasAttribute('checked') && (this.check(), !e && r.emit(this.el, 'change', !0))
                    }
                }
            },
            check: function() {
                this.outline.setAttribute('color', this.data.radioColorChecked), this.circle.setAttribute('color', this.data.radioColorChecked), this.circle.setAttribute('visible', !0), this.data.disabled && this.disabled()
            },
            uncheck: function() {
                this.outline.setAttribute('color', this.data.radioColor), this.circle.setAttribute('visible', !1), this.data.disabled && this.disabled()
            },
            disabled: function() {
                this.outline.setAttribute('color', this.data.radioColor), this.circle.setAttribute('color', this.data.radioColor)
            },
            update: function() {
                function e(r, n) {
                    if (!r.object3D || !r.object3D.children || !r.object3D.children[0]) return 0;
                    var s = r.object3D.children[0].geometry.visibleGlyphs;
                    if (!s) return 0;
                    if (s = s[s.length - 1], !s) return 0;
                    if (s.line) return a.value = a.value.slice(0, -1), r.setAttribute('text', a), e(r);
                    n || (n = o.getWidthFactor(r, a.wrapCount)), s = (s.position[0] + s.data.width) / (n / t.data.width);
                    var l = s / t.data.width;
                    return 1 < l ? (a.value = a.value.slice(0, -1), r.setAttribute('text', a), e(r, n)) : s
                }
                var t = this;
                this.onClick(!0), this.hitbox.setAttribute('width', this.data.width), this.hitbox.setAttribute('position', this.data.width / 2 + ' 0 0.001');
                var a = {
                    color: this.data.color,
                    align: 'left',
                    wrapCount: 10 * (this.data.width + 0.2),
                    width: this.data.width
                };
                this.data.font && (a.font = this.data.font), a.value = this.data.label, a.color = this.data.color, this.label.setAttribute('text', a), this.label.setAttribute('position', this.data.width / 2 + 0.24 + ' 0 0.002'), setTimeout(function() {
                    if (t.data.label.length && e(t.label), t.data.disabled) var a = setInterval(function() {
                        t.outline.object3D.children[0] && (clearInterval(a), o.updateOpacity(t.outline, 0.4), o.updateOpacity(t.circle, 0.4), o.updateOpacity(t.label, 0.4))
                    }, 10);
                    else var r = setInterval(function() {
                        t.outline.object3D.children[0] && (clearInterval(r), o.updateOpacity(t.outline, 1), o.updateOpacity(t.circle, 1), o.updateOpacity(t.label, 1))
                    }, 10)
                }, 0)
            },
            tick: function() {},
            remove: function() {},
            pause: function() {},
            play: function() {}
        }), AFRAME.registerPrimitive('a-radio', {
            defaultComponents: {
                radio: {}
            },
            mappings: {
                checked: 'radio.checked',
                disabled: 'radio.disabled',
                name: 'radio.name',
                value: 'radio.value',
                label: 'radio.label',
                "radio-color": 'radio.radioColor',
                "radio-color-checked": 'radio.radioColorChecked',
                color: 'radio.color',
                align: 'radio.align',
                font: 'radio.font',
                "letter-spacing": 'radio.letterSpacing',
                "line-height": 'radio.lineHeight',
                opacity: 'radio.opacity',
                width: 'radio.width'
            }
        })
    }, function(e) {
        'use strict';
        e.exports = [{
            type: 'audio',
            id: 'aframeRadioClick',
            src: AFRAME.ASSETS_PATH + '/sounds/InputClick.mp3'
        }, {
            type: 'audio',
            id: 'aframeRadioClickDisabled',
            src: AFRAME.ASSETS_PATH + '/sounds/ButtonClickDisabled.mp3'
        }]
    }, function(e) {
        'use strict';
        e.exports = {
            init: function(e) {
                var t = document.createElement('a-sound');
                t.setAttribute('key', 'aframeRadioClickSound'), t.setAttribute('sfx', !0), t.setAttribute('src', '#aframeRadioClick'), t.setAttribute('position', '0 2 5'), e.appendChild(t), t = document.createElement('a-sound'), t.setAttribute('key', 'aframeRadioClickDisabledSound'), t.setAttribute('sfx', !0), t.setAttribute('src', '#aframeRadioClickDisabled'), t.setAttribute('position', '0 2 5'), e.appendChild(t)
            },
            click: function(e) {
                var t = e.querySelector('[key=aframeRadioClickSound]');
                t && (t.components.sound.stopSound(), t.components.sound.playSound())
            },
            clickDisabled: function(e) {
                var t = e.querySelector('[key=aframeRadioClickDisabledSound]');
                t && (t.components.sound.stopSound(), t.components.sound.playSound())
            }
        }
    }, function(e, t, a) {
        'use strict';
        var o = a(6),
            r = a(4),
            n = a(23),
            s = a(24);
        AFRAME.registerComponent('checkbox', {
            schema: {
                checked: {
                    type: 'boolean',
                    default: !1
                },
                disabled: {
                    type: 'boolean',
                    default: !1
                },
                name: {
                    type: 'string',
                    default: ''
                },
                value: {
                    type: 'string',
                    default: ''
                },
                label: {
                    type: 'string',
                    default: ''
                },
                checkboxColor: {
                    type: 'color',
                    default: '#757575'
                },
                checkboxColorChecked: {
                    type: 'color',
                    default: '#4076fd'
                },
                color: {
                    type: 'color',
                    default: '#757575'
                },
                font: {
                    type: 'string',
                    default: ''
                },
                letterSpacing: {
                    type: 'int',
                    default: 0
                },
                lineHeight: {
                    type: 'string',
                    default: ''
                },
                opacity: {
                    type: 'number',
                    default: 1
                },
                width: {
                    type: 'number',
                    default: 1
                }
            },
            init: function() {
                var e = this;
                o.preloadAssets(n), s.init(this.el), this.hitbox = document.createElement('a-plane'), this.hitbox.setAttribute('height', 0.2), this.hitbox.setAttribute('opacity', 0), this.el.appendChild(this.hitbox), this.outline = document.createElement('a-rounded'), this.outline.setAttribute('width', 0.2), this.outline.setAttribute('height', 0.2), this.outline.setAttribute('radius', 0.02), this.outline.setAttribute('position', '0 -0.1 0.01'), this.el.appendChild(this.outline), this.inside = document.createElement('a-rounded'), this.inside.setAttribute('width', 0.156), this.inside.setAttribute('height', 0.156), this.inside.setAttribute('radius', 0.01), this.inside.setAttribute('color', '#EEE'), this.inside.setAttribute('position', '0.0195 -0.078 0.02'), this.el.appendChild(this.inside), this.checkmark = document.createElement('a-image'), this.checkmark.setAttribute('width', 0.16), this.checkmark.setAttribute('height', 0.16), this.checkmark.setAttribute('src', '#aframeCheckboxMark'), this.checkmark.setAttribute('position', '0.1 0 0.03'), this.el.appendChild(this.checkmark), this.label = document.createElement('a-entity'), this.el.appendChild(this.label), this.el.addEventListener('click', function() {
                    this.components.checkbox.data.disabled || (this.components.checkbox.data.checked = !this.components.checkbox.data.checked, this.setAttribute('checked', this.components.checkbox.data.checked), e.onClick())
                }), this.el.addEventListener('mousedown', function() {
                    return this.components.checkbox.data.disabled ? s.clickDisabled(this) : void s.click(this)
                }), Object.defineProperty(this.el, 'value', {
                    get: function() {
                        return this.getAttribute('value')
                    },
                    set: function(e) {
                        this.setAttribute('value', e)
                    },
                    enumerable: !0,
                    configurable: !0
                })
            },
            onClick: function(e) {
                this.data.checked ? this.check() : this.uncheck(), e || r.emit(this.el, 'change', this.data.checked)
            },
            check: function() {
                this.outline.setAttribute('color', this.data.checkboxColorChecked), this.inside.setAttribute('color', this.data.checkboxColorChecked), this.checkmark.setAttribute('visible', !0), this.data.disabled && this.disabled()
            },
            uncheck: function() {
                this.outline.setAttribute('color', this.data.checkboxColor), this.inside.setAttribute('color', '#EEE'), this.checkmark.setAttribute('visible', !1), this.data.disabled && this.disabled()
            },
            disabled: function() {
                this.outline.setAttribute('color', this.data.checkboxColor), this.inside.setAttribute('color', this.data.checkboxColor)
            },
            update: function() {
                function e(r, n) {
                    if (!r.object3D || !r.object3D.children || !r.object3D.children[0]) return 0;
                    var s = r.object3D.children[0].geometry.visibleGlyphs;
                    if (!s) return 0;
                    if (s = s[s.length - 1], !s) return 0;
                    if (s.line) return a.value = a.value.slice(0, -1), r.setAttribute('text', a), e(r);
                    n || (n = o.getWidthFactor(r, a.wrapCount)), s = (s.position[0] + s.data.width) / (n / t.data.width);
                    var l = s / t.data.width;
                    return 1 < l ? (a.value = a.value.slice(0, -1), r.setAttribute('text', a), e(r, n)) : s
                }
                var t = this;
                this.onClick(!0), this.hitbox.setAttribute('width', this.data.width), this.hitbox.setAttribute('position', this.data.width / 2 + ' 0 0.01');
                var a = {
                    color: this.data.color,
                    align: 'left',
                    wrapCount: 10 * (this.data.width + 0.2),
                    width: this.data.width
                };
                this.data.font && (a.font = this.data.font), a.value = this.data.label, a.color = this.data.color, this.label.setAttribute('text', a), this.label.setAttribute('position', this.data.width / 2 + 0.24 + ' 0 0.01'), setTimeout(function() {
                    if (t.data.label.length && e(t.label), t.data.disabled) var a = setInterval(function() {
                        t.checkmark.object3D.children[0] && (clearInterval(a), o.updateOpacity(t.checkmark, 0.4), o.updateOpacity(t.label, 0.4))
                    }, 10);
                    else var r = setInterval(function() {
                        t.checkmark.object3D.children[0] && (clearInterval(r), o.updateOpacity(t.checkmark, 1), o.updateOpacity(t.label, 1))
                    }, 10)
                }, 0)
            },
            tick: function() {},
            remove: function() {},
            pause: function() {},
            play: function() {}
        }), AFRAME.registerPrimitive('a-checkbox', {
            defaultComponents: {
                checkbox: {}
            },
            mappings: {
                checked: 'checkbox.checked',
                disabled: 'checkbox.disabled',
                name: 'checkbox.name',
                value: 'checkbox.value',
                label: 'checkbox.label',
                "checkbox-color": 'checkbox.checkboxColor',
                "checkbox-color-checked": 'checkbox.checkboxColorChecked',
                color: 'checkbox.color',
                align: 'checkbox.align',
                font: 'checkbox.font',
                "letter-spacing": 'checkbox.letterSpacing',
                "line-height": 'checkbox.lineHeight',
                opacity: 'checkbox.opacity',
                width: 'checkbox.width'
            }
        })
    }, function(e) {
        'use strict';
        e.exports = [{
            type: 'img',
            id: 'aframeCheckboxMark',
            src: AFRAME.ASSETS_PATH + '/images/CheckmarkIcon.png'
        }, {
            type: 'audio',
            id: 'aframeCheckboxClick',
            src: AFRAME.ASSETS_PATH + '/sounds/InputClick.mp3'
        }, {
            type: 'audio',
            id: 'aframeCheckboxClickDisabled',
            src: AFRAME.ASSETS_PATH + '/sounds/ButtonClickDisabled.mp3'
        }]
    }, function(e) {
        'use strict';
        e.exports = {
            init: function(e) {
                var t = document.createElement('a-sound');
                t.setAttribute('key', 'aframeCheckboxClickSound'), t.setAttribute('sfx', !0), t.setAttribute('src', '#aframeCheckboxClick'), t.setAttribute('position', '0 2 5'), e.appendChild(t), t = document.createElement('a-sound'), t.setAttribute('key', 'aframeButtonClickDisabledSound'), t.setAttribute('sfx', !0), t.setAttribute('src', '#aframeButtonClickDisabled'), t.setAttribute('position', '0 2 5'), e.appendChild(t)
            },
            click: function(e) {
                var t = e.querySelector('[key=aframeCheckboxClickSound]');
                t && (t.components.sound.stopSound(), t.components.sound.playSound())
            },
            clickDisabled: function(e) {
                var t = e.querySelector('[key=aframeButtonClickDisabledSound]');
                t && (t.components.sound.stopSound(), t.components.sound.playSound())
            }
        }
    }, function(e, t, a) {
        'use strict';
        var o = a(6),
            r = a(4),
            n = a(26),
            s = a(27);
        AFRAME.registerComponent('button', {
            schema: {
                disabled: {
                    type: 'boolean',
                    default: !1
                },
                type: {
                    type: 'string',
                    default: 'raised'
                },
                name: {
                    type: 'string',
                    default: ''
                },
                value: {
                    type: 'string',
                    default: 'Button'
                },
                buttonColor: {
                    type: 'color',
                    default: '#4076fd'
                },
                color: {
                    type: 'color',
                    default: '#FFF'
                },
                font: {
                    type: 'string',
                    default: ''
                },
                letterSpacing: {
                    type: 'int',
                    default: 0
                },
                lineHeight: {
                    type: 'string',
                    default: ''
                },
                opacity: {
                    type: 'number',
                    default: 1
                },
                width: {
                    type: 'number',
                    default: 1
                }
            },
            init: function() {
                var e = this;
                o.preloadAssets(n), s.init(this.el), this.wrapper = document.createElement('a-entity'), this.wrapper.setAttribute('position', '0 0 0.01'), this.el.appendChild(this.wrapper), this.shadow = document.createElement('a-image'), this.shadow.setAttribute('height', 1.25 * 0.36), this.shadow.setAttribute('src', '#aframeButtonShadow'), this.wrapper.appendChild(this.shadow), this.outline = document.createElement('a-rounded'), this.outline.setAttribute('height', 0.36), this.outline.setAttribute('radius', 0.03), this.outline.setAttribute('position', '0 -0.18 0.01'), this.wrapper.appendChild(this.outline), this.label = document.createElement('a-entity'), this.outline.appendChild(this.label), this.el.addEventListener('click', function() {
                    this.components.button && this.components.button.data.disabled || e.onClick()
                }), this.el.addEventListener('mousedown', function() {
                    return this.components.button && this.components.button.data.disabled ? s.clickDisabled(this) : void(e.wrapper.setAttribute('position', '0 0 0.036'), s.click(this))
                }), this.el.addEventListener('mouseup', function() {
                    this.components.button && this.components.button.data.disabled || e.wrapper.setAttribute('position', '0 0 0')
                }), this.el.getWidth = this.getWidth.bind(this), Object.defineProperty(this.el, 'value', {
                    get: function() {
                        return this.getAttribute('value')
                    },
                    set: function(e) {
                        this.setAttribute('value', e)
                    },
                    enumerable: !0,
                    configurable: !0
                })
            },
            onClick: function() {},
            getWidth: function() {
                return this.__width
            },
            update: function() {
                function e(r, n, s) {
                    if (!r.object3D || !r.object3D.children || !r.object3D.children[0]) return setTimeout(function() {
                        e(r, n)
                    }, 10);
                    var l = r.object3D.children[0].geometry.visibleGlyphs;
                    if (!l) return setTimeout(function() {
                        e(r, n)
                    }, 10);
                    if (l = l[l.length - 1], !l) return n(0);
                    if (l.line) return a.value = a.value.slice(0, -1), r.setAttribute('text', a), e(r, n);
                    s || (s = o.getWidthFactor(r, a.wrapCount)), l = (l.position[0] + l.data.width) / (s / t.data.width);
                    var d = l / t.data.width;
                    return 1 < d ? (a.value = a.value.slice(0, -1), r.setAttribute('text', a), e(r, n, s)) : n(l)
                }
                var t = this;
                this.outline.setAttribute('color', this.data.buttonColor);
                var a = {
                    color: this.data.color,
                    align: 'center',
                    wrapCount: 10 * this.data.width,
                    width: this.data.width
                };
                this.data.font && (a.font = this.data.font), 'flat' === this.data.type && (a.color = this.data.buttonColor), a.value = this.data.value.toUpperCase(), this.label.setAttribute('text', a), this.label.setAttribute('position', this.data.width / 2 + 0.24 + ' 0 0.01'), setTimeout(function() {
                    if (t.data.value.length && e(t.label, function(e) {
                            t.label.setAttribute('position', e / 2 + 0.28 / 2 + ' ' + 0.36 / 2 + ' 0.02'), e += 0.28, t.outline.setAttribute('width', e), t.__width = e, t.shadow.setAttribute('width', 1.17 * e), t.shadow.setAttribute('position', e / 2 + ' 0 0'), r.emit(t.el, 'change:width', e)
                        }), t.data.disabled) {
                        t.shadow.setAttribute('visible', !1);
                        var a = setInterval(function() {
                            t.label.object3D.children[0] && t.label.object3D.children[0].geometry.visibleGlyphs && (clearInterval(a), o.updateOpacity(t.el, 0.4))
                        }, 10)
                    } else var n = setInterval(function() {
                        t.label.object3D.children[0] && t.label.object3D.children[0].geometry.visibleGlyphs && (clearInterval(n), o.updateOpacity(t.el, 1))
                    }, 10);
                    if ('flat' === t.data.type) {
                        t.shadow.setAttribute('visible', !1);
                        var s = setInterval(function() {
                            t.label.object3D.children[0] && t.label.object3D.children[0].geometry.visibleGlyphs && (clearInterval(s), o.updateOpacity(t.outline, 0), t.data.disabled && o.updateOpacity(t.label, 0.4))
                        }, 10)
                    }
                }, 0)
            },
            tick: function() {},
            remove: function() {},
            pause: function() {},
            play: function() {}
        }), AFRAME.registerPrimitive('a-button', {
            defaultComponents: {
                button: {}
            },
            mappings: {
                disabled: 'button.disabled',
                type: 'button.type',
                name: 'button.name',
                value: 'button.value',
                "button-color": 'button.buttonColor',
                color: 'button.color',
                font: 'button.font',
                "letter-spacing": 'button.letterSpacing',
                "line-height": 'button.lineHeight',
                opacity: 'button.opacity',
                width: 'button.width'
            }
        })
    }, function(e) {
        'use strict';
        e.exports = [{
            type: 'img',
            id: 'aframeButtonShadow',
            src: AFRAME.ASSETS_PATH + '/images/ButtonShadow.png'
        }, {
            type: 'audio',
            id: 'aframeButtonClick',
            src: AFRAME.ASSETS_PATH + '/sounds/ButtonClick.mp3'
        }, {
            type: 'audio',
            id: 'aframeButtonClickDisabled',
            src: AFRAME.ASSETS_PATH + '/sounds/ButtonClickDisabled.mp3'
        }]
    }, function(e) {
        'use strict';
        e.exports = {
            init: function(e) {
                var t = document.createElement('a-sound');
                t.setAttribute('key', 'aframeButtonClickSound'), t.setAttribute('sfx', !0), t.setAttribute('src', '#aframeButtonClick'), t.setAttribute('position', '0 2 5'), e.appendChild(t), t = document.createElement('a-sound'), t.setAttribute('key', 'aframeButtonClickDisabledSound'), t.setAttribute('sfx', !0), t.setAttribute('src', '#aframeButtonClickDisabled'), t.setAttribute('position', '0 2 5'), e.appendChild(t)
            },
            click: function(e) {
                var t = e.querySelector('[key=aframeButtonClickSound]');
                t && (t.components.sound.stopSound(), t.components.sound.playSound())
            },
            clickDisabled: function(e) {
                var t = e.querySelector('[key=aframeButtonClickDisabledSound]');
                t && (t.components.sound.stopSound(), t.components.sound.playSound())
            }
        }
    }, function(e, t, a) {
        'use strict';
        var o = a(6),
            r = a(4),
            n = a(29),
            s = a(30);
        AFRAME.registerComponent('toast', {
            schema: {
                message: {
                    type: 'string',
                    default: 'You are cool'
                },
                action: {
                    type: 'string',
                    default: ''
                },
                backgroundColor: {
                    type: 'color',
                    default: '#222'
                },
                actionColor: {
                    type: 'color',
                    default: '#4076fd'
                },
                color: {
                    type: 'color',
                    default: '#FFF'
                },
                font: {
                    type: 'string',
                    default: ''
                },
                letterSpacing: {
                    type: 'int',
                    default: 0
                },
                lineHeight: {
                    type: 'string',
                    default: ''
                },
                width: {
                    type: 'number',
                    default: 3
                },
                duration: {
                    type: 'number',
                    default: 2e3
                },
                autoshow: {
                    type: 'boolean',
                    default: !0
                }
            },
            init: function() {
                var t = this;
                o.preloadAssets(n), s.init(this.el), this.el.setAttribute('position', '10000 10000 10000'), this.el.setAttribute('rotation', '-25 0 0'), this.el.setAttribute('scale', '0.3 0.3 0.3'), this.background = document.createElement('a-rounded'), this.background.setAttribute('height', 0.44), this.background.setAttribute('radius', 0.03), this.background.setAttribute('position', '0 -0.18 0.001'), this.el.appendChild(this.background), this.label = document.createElement('a-entity'), this.el.appendChild(this.label), this.action = document.createElement('a-button'), t.action.setAttribute('button-color', '#222'), this.el.appendChild(this.action), this.action.addEventListener('change:width', function(a) {
                    var e = t.label.getAttribute('text');
                    e.width = t.data.width - a.detail, e.wrapCount = 10 * e.width, t.label.setAttribute('text', e), t.label.setAttribute('position', e.width / 2 + 0.14 + ' 0.04 0.001'), this.setAttribute('position', t.data.width - a.detail + ' ' + (0.44 - 0.36) / 2 + ' 0.001')
                }), this.action.addEventListener('click', function() {
                    r.emit(t.el, 'actionclick')
                });
                var e = setInterval(function() {
                    t.action.object3D && t.action.object3D.children[0] && (clearInterval(e), o.updateOpacity(t.el, 0), o.updateOpacity(t.label, 0), o.updateOpacity(t.action, 0), t.data.autoshow && t.show())
                }, 10);
                this.el.show = this.show.bind(this), this.el.hide = this.hide.bind(this)
            },
            show: function() {
                this.hideTimer && clearTimeout(this.hideTimer), this.el.setAttribute('position', -this.data.width / (2 / this.el.object3D.scale.x) + ' 0.25 -1.6');
                var e = this;
                setTimeout(function() {
                    e.el.setAttribute('fadein', {
                        duration: 160
                    }), setTimeout(function() {
                        o.updateOpacity(e.label, 1), e.action.components.button.shadow.setAttribute('visible', !1)
                    }, 10)
                }, 0), this.hideTimer = setTimeout(function() {
                    e.hide()
                }, this.data.duration), s.show(this.el)
            },
            hide: function() {
                var e = this;
                setTimeout(function() {
                    o.updateOpacity(e.label, 0), e.action.components.button.shadow.setAttribute('visible', !1), setTimeout(function() {
                        e.el.setAttribute('fadeout', {
                            duration: 160
                        }), setTimeout(function() {
                            e.el.setAttribute('position', '10000 10000 10000')
                        }, 200)
                    }, 10)
                }, 0)
            },
            update: function() {
                this;
                this.background.setAttribute('color', this.data.backgroundColor), this.background.setAttribute('width', this.data.width);
                var e = {
                    color: this.data.color,
                    align: 'left',
                    wrapCount: 10 * this.data.width,
                    width: this.data.width,
                    lineHeight: 64
                };
                this.data.font && (e.font = this.data.font), 'flat' === this.data.type && (e.color = this.data.buttonColor), e.value = this.data.message, this.label.setAttribute('text', e), this.label.setAttribute('position', this.data.width / 2 + 0.14 + ' 0 0.001'), this.action.setAttribute('value', this.data.action.toUpperCase()), this.action.setAttribute('color', this.data.actionColor)
            },
            tick: function() {},
            remove: function() {},
            pause: function() {},
            play: function() {}
        }), AFRAME.registerPrimitive('a-toast', {
            defaultComponents: {
                toast: {}
            },
            mappings: {
                message: 'toast.message',
                action: 'toast.action',
                "action-color": 'toast.actionColor',
                "background-color": 'toast.backgroundColor',
                color: 'toast.color',
                font: 'toast.font',
                "letter-spacing": 'toast.letterSpacing',
                "line-height": 'toast.lineHeight',
                width: 'toast.width',
                duration: 'toast.duration',
                autoshow: 'toast.autoshow'
            }
        })
    }, function(e) {
        'use strict';
        e.exports = [{
            type: 'audio',
            id: 'aframeToastShow',
            src: AFRAME.ASSETS_PATH + '/sounds/ToastShow.mp3'
        }]
    }, function(e) {
        'use strict';
        e.exports = {
            init: function(e) {
                var t = document.createElement('a-sound');
                t.setAttribute('key', 'aframeToastShowSound'), t.setAttribute('sfx', !0), t.setAttribute('src', '#aframeToastShow'), t.setAttribute('position', '0 2 5'), e.appendChild(t)
            },
            show: function(e) {
                var t = e.querySelector('[key=aframeToastShowSound]');
                t && (t.components.sound.stopSound(), t.components.sound.playSound())
            }
        }
    }])
}, function(e, t, a) {
    var o = a(98);
    'string' == typeof o && (o = [
        [e.i, o, '']
    ]);
    var r = {
            hmr: !0
        },
        n;
    r.transform = n;
    a(107)(o, r);
    o.locals && (e.exports = o.locals), !1
}, function(e, t, a) {
    function o(e) {
        return a(r(e))
    }

    function r(e) {
        var t = n[e];
        if (!(t + 1)) throw new Error('Cannot find module \'' + e + '\'.');
        return t
    }
    var n = {
        "./auto-enter-vr.js": 43,
        "./background-animation.js": 44,
        "./background-audio.js": 45,
        "./background-shader.js": 46,
        "./cancel-button.js": 47,
        "./cascade-raycastable.js": 48,
        "./click-out.js": 49,
        "./collection-shader.js": 50,
        "./console-shortcuts.js": 51,
        "./content-page-loaded.js": 52,
        "./controller-button-feedback.js": 53,
        "./controller.js": 54,
        "./cursor-mesh.js": 55,
        "./cursor-toggler.js": 56,
        "./debug-controller.js": 57,
        "./debug-cursor.js": 58,
        "./debug-links.js": 59,
        "./enter-site-button.js": 60,
        "./fade-shader.js": 61,
        "./fade-text-shader.js": 62,
        "./feed-collection.js": 63,
        "./feed-single.js": 64,
        "./feed-tiles.js": 65,
        "./gpu-preloader.js": 66,
        "./help-back-lobby.js": 67,
        "./high-performance.js": 68,
        "./keyboard-raycastable.js": 69,
        "./layout-collections.js": 70,
        "./layout-feed.js": 71,
        "./link-shader.js": 72,
        "./loading-ring.js": 73,
        "./loading-screen.js": 74,
        "./logo.js": 75,
        "./navigate.js": 76,
        "./notification.js": 77,
        "./pagination-dots.js": 78,
        "./paginator.js": 79,
        "./play-audio.js": 80,
        "./post-message-receiver.js": 81,
        "./propertyTypes/object.js": 82,
        "./raycastable.js": 83,
        "./recenter.js": 84,
        "./refresh.js": 85,
        "./screen-manager.js": 86,
        "./search.js": 87,
        "./sub-object.js": 88,
        "./superlink.js": 89,
        "./tab-switch-fade.js": 90,
        "./thumb-paginator.js": 91,
        "./tutorial-modal-image.js": 92,
        "./tutorial-modal.js": 93,
        "./visible-delay.js": 94,
        "./visible-fade.js": 95
    };
    o.keys = function() {
        return Object.keys(n)
    }, o.resolve = r, e.exports = o, o.id = 24
}, function(e, t, a) {
    window.addEventListener('load', () => {
        a(117), a(118)
    })
}, function(e, t, a) {
    function o(e) {
        return a(r(e))
    }

    function r(e) {
        var t = n[e];
        if (!(t + 1)) throw new Error('Cannot find module \'' + e + '\'.');
        return t
    }
    var n = {
        "./index.js": 97
    };
    o.keys = function() {
        return Object.keys(n)
    }, o.resolve = r, e.exports = o, o.id = 26
}, function(e, t, a) {
    var o = Math.floor;
    (function(t) {
        function r(e, t, o) {
            var r = a(4)('algoliasearch'),
                s = a(2),
                l = a(8),
                d = a(6),
                u = 'Usage: algoliasearch(applicationID, apiKey, opts)';
            if (!0 !== o._allowEmptyCredentials && !e) throw new c.AlgoliaSearchError('Please provide an application ID. ' + u);
            if (!0 !== o._allowEmptyCredentials && !t) throw new c.AlgoliaSearchError('Please provide an API key. ' + u);
            this.applicationID = e, this.apiKey = t, this.hosts = {
                read: [],
                write: []
            }, o = o || {};
            var p = o.protocol || 'https:';
            if (this._timeouts = o.timeouts || {
                    connect: 1000,
                    read: 2000,
                    write: 30000
                }, o.timeout && (this._timeouts.connect = this._timeouts.read = this._timeouts.write = o.timeout), /:$/.test(p) || (p += ':'), 'http:' !== o.protocol && 'https:' !== o.protocol) throw new c.AlgoliaSearchError('protocol must be `http:` or `https:` (was `' + o.protocol + '`)');
            if (this._checkAppIdData(), !o.hosts) {
                var m = d(this._shuffleResult, function(t) {
                    return e + '-' + t + '.algolianet.com'
                });
                this.hosts.read = [this.applicationID + '-dsn.algolia.net'].concat(m), this.hosts.write = [this.applicationID + '.algolia.net'].concat(m)
            } else l(o.hosts) ? (this.hosts.read = s(o.hosts), this.hosts.write = s(o.hosts)) : (this.hosts.read = s(o.hosts.read), this.hosts.write = s(o.hosts.write));
            this.hosts.read = d(this.hosts.read, n(p)), this.hosts.write = d(this.hosts.write, n(p)), this.extraHeaders = {}, this.cache = o._cache || {}, this._ua = o._ua, this._useCache = void 0 === o._useCache || o._cache || o._useCache, this._useFallback = void 0 === o.useFallback || o.useFallback, this._setTimeout = o._setTimeout, r('init done, %j', this)
        }

        function n(e) {
            return function(t) {
                return e + '//' + t.toLowerCase()
            }
        }

        function s(e) {
            if (void 0 === Array.prototype.toJSON) return JSON.stringify(e);
            var t = Array.prototype.toJSON;
            delete Array.prototype.toJSON;
            var a = JSON.stringify(e);
            return Array.prototype.toJSON = t, a
        }

        function l(e) {
            for (var t = e.length, a, r; 0 !== t;) r = o(Math.random() * t), t -= 1, a = e[t], e[t] = e[r], e[r] = a;
            return e
        }

        function d(e) {
            var t = {};
            for (var a in e)
                if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var o;
                    o = 'x-algolia-api-key' == a || 'x-algolia-application-id' == a ? '**hidden for security purposes**' : e[a], t[a] = o
                }
            return t
        }
        e.exports = r;
        var c = a(3),
            u = a(36),
            p = a(28),
            m = a(40),
            g = t.env.RESET_APP_DATA_TIMER && parseInt(t.env.RESET_APP_DATA_TIMER, 10) || 120000;
        r.prototype.initIndex = function(e) {
            return new p(this, e)
        }, r.prototype.setExtraHeader = function(e, t) {
            this.extraHeaders[e.toLowerCase()] = t
        }, r.prototype.getExtraHeader = function(e) {
            return this.extraHeaders[e.toLowerCase()]
        }, r.prototype.unsetExtraHeader = function(e) {
            delete this.extraHeaders[e.toLowerCase()]
        }, r.prototype.addAlgoliaAgent = function(e) {
            -1 === this._ua.indexOf(';' + e) && (this._ua += ';' + e)
        }, r.prototype._jsonRequest = function(e) {
            function t(a, u) {
                function v() {
                    return r('retrying request'), p._incrementHostIndex(e.hostType), t(a, u)
                }

                function k() {
                    return r('retrying request with higher timeout'), p._incrementHostIndex(e.hostType), p._incrementTimeoutMultipler(), u.timeouts = p._getTimeoutsForRequest(e.hostType), t(a, u)
                }
                p._checkAppIdData();
                var x = new Date,
                    A;
                if (p._useCache && (A = e.url), p._useCache && b && (A += '_body_' + u.body), p._useCache && l && void 0 !== l[A]) return r('serving response from cache'), p._promise.resolve(JSON.parse(l[A]));
                if (m >= p.hosts[e.hostType].length) return !h || g ? (r('could not get any response'), p._promise.reject(new c.AlgoliaSearchError('Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: ' + p.applicationID, {
                    debugData: f
                }))) : (r('switching to fallback'), m = 0, u.method = e.fallback.method, u.url = e.fallback.url, u.jsonBody = e.fallback.body, u.jsonBody && (u.body = s(u.jsonBody)), y = p._computeRequestHeaders({
                    additionalUA: n,
                    headers: e.headers
                }), u.timeouts = p._getTimeoutsForRequest(e.hostType), p._setHostIndexByType(0, e.hostType), g = !0, t(p._request.fallback, u));
                var S = p._getHostByType(e.hostType),
                    w = S + u.url,
                    C = {
                        body: u.body,
                        jsonBody: u.jsonBody,
                        method: u.method,
                        headers: y,
                        timeouts: u.timeouts,
                        debug: r
                    };
                return r('method: %s, url: %s, headers: %j, timeouts: %d', C.method, w, C.headers, C.timeouts), a === p._request.fallback && r('using fallback'), a.call(p, w, C).then(function(e) {
                    var t = e && e.body && e.body.message && e.body.status || e.statusCode || e && e.body && 200;
                    r('received response: statusCode: %s, computed statusCode: %d, headers: %j', e.statusCode, t, e.headers);
                    var a = 2 === o(t / 100),
                        n = new Date;
                    if (f.push({
                            currentHost: S,
                            headers: d(y),
                            content: b || null,
                            contentLength: void 0 === b ? null : b.length,
                            method: u.method,
                            timeouts: u.timeouts,
                            url: u.url,
                            startTime: x,
                            endTime: n,
                            duration: n - x,
                            statusCode: t
                        }), a) return p._useCache && l && (l[A] = e.responseText), e.body;
                    var s = 4 !== o(t / 100);
                    if (s) return m += 1, v();
                    r('unrecoverable error');
                    var g = new c.AlgoliaSearchError(e.body && e.body.message, {
                        debugData: f,
                        statusCode: t
                    });
                    return p._promise.reject(g)
                }, function(t) {
                    r('error: %s, stack: %s', t.message, t.stack);
                    var a = new Date;
                    return f.push({
                        currentHost: S,
                        headers: d(y),
                        content: b || null,
                        contentLength: void 0 === b ? null : b.length,
                        method: u.method,
                        timeouts: u.timeouts,
                        url: u.url,
                        startTime: x,
                        endTime: a,
                        duration: a - x
                    }), t instanceof c.AlgoliaSearchError || (t = new c.Unknown(t && t.message, t)), m += 1, t instanceof c.Unknown || t instanceof c.UnparsableJSON || m >= p.hosts[e.hostType].length && (g || !h) ? (t.debugData = f, p._promise.reject(t)) : t instanceof c.RequestTimeout ? k() : v()
                })
            }
            this._checkAppIdData();
            var r = a(4)('algoliasearch:' + e.url),
                n = e.additionalUA || '',
                l = e.cache,
                p = this,
                m = 0,
                g = !1,
                h = p._useFallback && p._request.fallback && e.fallback,
                b, y;
            this.apiKey.length > 500 && e.body !== void 0 && (e.body.params !== void 0 || e.body.requests !== void 0) ? (e.body.apiKey = this.apiKey, y = this._computeRequestHeaders({
                additionalUA: n,
                withApiKey: !1,
                headers: e.headers
            })) : y = this._computeRequestHeaders({
                additionalUA: n,
                headers: e.headers
            }), e.body !== void 0 && (b = s(e.body)), r('request start');
            var f = [],
                v = t(p._request, {
                    url: e.url,
                    method: e.method,
                    body: b,
                    jsonBody: e.body,
                    timeouts: p._getTimeoutsForRequest(e.hostType)
                });
            return 'function' == typeof e.callback ? void v.then(function(t) {
                u(function() {
                    e.callback(null, t)
                }, p._setTimeout || setTimeout)
            }, function(t) {
                u(function() {
                    e.callback(t)
                }, p._setTimeout || setTimeout)
            }) : v
        }, r.prototype._getSearchParams = function(e, t) {
            if (e === void 0 || null === e) return t;
            for (var a in e) null !== a && void 0 !== e[a] && e.hasOwnProperty(a) && (t += '' === t ? '' : '&', t += a + '=' + encodeURIComponent('[object Array]' === Object.prototype.toString.call(e[a]) ? s(e[a]) : e[a]));
            return t
        }, r.prototype._computeRequestHeaders = function(e) {
            var t = a(0),
                o = e.additionalUA ? this._ua + ';' + e.additionalUA : this._ua,
                r = {
                    "x-algolia-agent": o,
                    "x-algolia-application-id": this.applicationID
                };
            return !1 !== e.withApiKey && (r['x-algolia-api-key'] = this.apiKey), this.userToken && (r['x-algolia-usertoken'] = this.userToken), this.securityTags && (r['x-algolia-tagfilters'] = this.securityTags), t(this.extraHeaders, function(e, t) {
                r[t] = e
            }), e.headers && t(e.headers, function(e, t) {
                r[t] = e
            }), r
        }, r.prototype.search = function(e, t, o) {
            var r = a(8),
                n = a(6);
            if (!r(e)) throw new Error('Usage: client.search(arrayOfQueries[, callback])');
            'function' == typeof t ? (o = t, t = {}) : void 0 === t && (t = {});
            var s = this,
                l = {
                    requests: n(e, function(e) {
                        var t = '';
                        return void 0 !== e.query && (t += 'query=' + encodeURIComponent(e.query)), {
                            indexName: e.indexName,
                            params: s._getSearchParams(e.params, t)
                        }
                    })
                },
                d = n(l.requests, function(e, t) {
                    return t + '=' + encodeURIComponent('/1/indexes/' + encodeURIComponent(e.indexName) + '?' + e.params)
                }).join('&'),
                c = '/1/indexes/*/queries';
            return void 0 !== t.strategy && (c += '?strategy=' + t.strategy), this._jsonRequest({
                cache: this.cache,
                method: 'POST',
                url: c,
                body: l,
                hostType: 'read',
                fallback: {
                    method: 'GET',
                    url: '/1/indexes/*',
                    body: {
                        params: d
                    }
                },
                callback: o
            })
        }, r.prototype.setSecurityTags = function(e) {
            if ('[object Array]' === Object.prototype.toString.call(e)) {
                for (var t = [], a = 0; a < e.length; ++a)
                    if ('[object Array]' === Object.prototype.toString.call(e[a])) {
                        for (var o = [], r = 0; r < e[a].length; ++r) o.push(e[a][r]);
                        t.push('(' + o.join(',') + ')')
                    } else t.push(e[a]);
                e = t.join(',')
            }
            this.securityTags = e
        }, r.prototype.setUserToken = function(e) {
            this.userToken = e
        }, r.prototype.clearCache = function() {
            this.cache = {}
        }, r.prototype.setRequestTimeout = function(e) {
            e && (this._timeouts.connect = this._timeouts.read = this._timeouts.write = e)
        }, r.prototype.setTimeouts = function(e) {
            this._timeouts = e
        }, r.prototype.getTimeouts = function() {
            return this._timeouts
        }, r.prototype._getAppIdData = function() {
            var e = m.get(this.applicationID);
            return null !== e && this._cacheAppIdData(e), e
        }, r.prototype._setAppIdData = function(e) {
            return e.lastChange = new Date().getTime(), this._cacheAppIdData(e), m.set(this.applicationID, e)
        }, r.prototype._checkAppIdData = function() {
            var e = this._getAppIdData(),
                t = new Date().getTime();
            return null === e || t - e.lastChange > g ? this._resetInitialAppIdData(e) : e
        }, r.prototype._resetInitialAppIdData = function(e) {
            var t = e || {};
            return t.hostIndexes = {
                read: 0,
                write: 0
            }, t.timeoutMultiplier = 1, t.shuffleResult = t.shuffleResult || l([1, 2, 3]), this._setAppIdData(t)
        }, r.prototype._cacheAppIdData = function(e) {
            this._hostIndexes = e.hostIndexes, this._timeoutMultiplier = e.timeoutMultiplier, this._shuffleResult = e.shuffleResult
        }, r.prototype._partialAppIdDataUpdate = function(e) {
            var t = a(0),
                o = this._getAppIdData();
            return t(e, function(e, t) {
                o[t] = e
            }), this._setAppIdData(o)
        }, r.prototype._getHostByType = function(e) {
            return this.hosts[e][this._getHostIndexByType(e)]
        }, r.prototype._getTimeoutMultiplier = function() {
            return this._timeoutMultiplier
        }, r.prototype._getHostIndexByType = function(e) {
            return this._hostIndexes[e]
        }, r.prototype._setHostIndexByType = function(e, t) {
            var o = a(2),
                r = o(this._hostIndexes);
            return r[t] = e, this._partialAppIdDataUpdate({
                hostIndexes: r
            }), e
        }, r.prototype._incrementHostIndex = function(e) {
            return this._setHostIndexByType((this._getHostIndexByType(e) + 1) % this.hosts[e].length, e)
        }, r.prototype._incrementTimeoutMultipler = function() {
            var e = Math.max(this._timeoutMultiplier + 1, 4);
            return this._partialAppIdDataUpdate({
                timeoutMultiplier: e
            })
        }, r.prototype._getTimeoutsForRequest = function(e) {
            return {
                connect: this._timeouts.connect * this._timeoutMultiplier,
                complete: this._timeouts[e] * this._timeoutMultiplier
            }
        }
    }).call(t, a(9))
}, function(e, t, a) {
    function o(e, t) {
        this.indexName = t, this.as = e, this.typeAheadArgs = null, this.typeAheadValueOption = null, this.cache = {}
    }
    var r = a(10),
        n = a(34),
        s = a(35);
    e.exports = o, o.prototype.clearCache = function() {
        this.cache = {}
    }, o.prototype.search = r('query'), o.prototype.similarSearch = r('similarQuery'), o.prototype.browse = function(e, t, o) {
        var r = a(37),
            n = this,
            s, l;
        0 === arguments.length || 1 === arguments.length && 'function' == typeof arguments[0] ? (s = 0, o = arguments[0], e = void 0) : 'number' == typeof arguments[0] ? (s = arguments[0], 'number' == typeof arguments[1] ? l = arguments[1] : 'function' == typeof arguments[1] && (o = arguments[1], l = void 0), e = void 0, t = void 0) : 'object' == typeof arguments[0] ? ('function' == typeof arguments[1] && (o = arguments[1]), t = arguments[0], e = void 0) : 'string' == typeof arguments[0] && 'function' == typeof arguments[1] && (o = arguments[1], t = void 0), t = r({}, t || {}, {
            page: s,
            hitsPerPage: l,
            query: e
        });
        var d = this.as._getSearchParams(t, '');
        return this.as._jsonRequest({
            method: 'POST',
            url: '/1/indexes/' + encodeURIComponent(n.indexName) + '/browse',
            body: {
                params: d
            },
            hostType: 'read',
            callback: o
        })
    }, o.prototype.browseFrom = function(e, t) {
        return this.as._jsonRequest({
            method: 'POST',
            url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/browse',
            body: {
                cursor: e
            },
            hostType: 'read',
            callback: t
        })
    }, o.prototype.searchForFacetValues = function(e, t) {
        var o = a(2),
            r = a(38);
        if (e.facetName === void 0 || e.facetQuery === void 0) throw new Error('Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])');
        var n = e.facetName,
            s = r(o(e), function(e) {
                return 'facetName' === e
            }),
            l = this.as._getSearchParams(s, '');
        return this.as._jsonRequest({
            method: 'POST',
            url: '/1/indexes/' + encodeURIComponent(this.indexName) + '/facets/' + encodeURIComponent(n) + '/query',
            hostType: 'read',
            body: {
                params: l
            },
            callback: t
        })
    }, o.prototype.searchFacet = n(function(e, t) {
        return this.searchForFacetValues(e, t)
    }, s('index.searchFacet(params[, callback])', 'index.searchForFacetValues(params[, callback])')), o.prototype._search = function(e, t, a, o) {
        return this.as._jsonRequest({
            cache: this.cache,
            method: 'POST',
            url: t || '/1/indexes/' + encodeURIComponent(this.indexName) + '/query',
            body: {
                params: e
            },
            hostType: 'read',
            fallback: {
                method: 'GET',
                url: '/1/indexes/' + encodeURIComponent(this.indexName),
                body: {
                    params: e
                }
            },
            callback: a,
            additionalUA: o
        })
    }, o.prototype.getObject = function(e, t, a) {
        var o = this;
        (1 === arguments.length || 'function' == typeof t) && (a = t, t = void 0);
        var r = '';
        if (t !== void 0) {
            r = '?attributes=';
            for (var n = 0; n < t.length; ++n) 0 !== n && (r += ','), r += t[n]
        }
        return this.as._jsonRequest({
            method: 'GET',
            url: '/1/indexes/' + encodeURIComponent(o.indexName) + '/' + encodeURIComponent(e) + r,
            hostType: 'read',
            callback: a
        })
    }, o.prototype.getObjects = function(e, t, o) {
        var r = a(8),
            n = a(6);
        if (!r(e)) throw new Error('Usage: index.getObjects(arrayOfObjectIDs[, callback])');
        var s = this;
        (1 === arguments.length || 'function' == typeof t) && (o = t, t = void 0);
        var l = {
            requests: n(e, function(e) {
                var a = {
                    indexName: s.indexName,
                    objectID: e
                };
                return t && (a.attributesToRetrieve = t.join(',')), a
            })
        };
        return this.as._jsonRequest({
            method: 'POST',
            url: '/1/indexes/*/objects',
            hostType: 'read',
            body: l,
            callback: o
        })
    }, o.prototype.as = null, o.prototype.indexName = null, o.prototype.typeAheadArgs = null, o.prototype.typeAheadValueOption = null
}, function(e, t, a) {
    'use strict';
    var o = a(27),
        r = a(30);
    e.exports = r(o, '(lite) ')
}, function(e, t, a) {
    'use strict';
    var o = a(102),
        r = o.Promise || a(101).Promise;
    e.exports = function(e, t) {
        function n(e, t, o) {
            var r = a(2),
                l = a(31);
            return o = r(o || {}), void 0 === o.protocol && (o.protocol = l()), o._ua = o._ua || n.ua, new s(e, t, o)
        }

        function s() {
            e.apply(this, arguments)
        }
        var l = a(11),
            d = a(3),
            c = a(32),
            u = a(33),
            p = a(39);
        t = t || '', !1, n.version = a(41), n.ua = 'Algolia for vanilla JavaScript ' + t + n.version, n.initPlaces = p(n), o.__algolia = {
            debug: a(4),
            algoliasearch: n
        };
        var m = {
            hasXMLHttpRequest: 'XMLHttpRequest' in o,
            hasXDomainRequest: 'XDomainRequest' in o
        };
        return m.hasXMLHttpRequest && (m.cors = 'withCredentials' in new XMLHttpRequest), l(s, e), s.prototype._request = function(e, t) {
            return new r(function(a, o) {
                function r() {
                    g = !0, l.abort(), o(new d.RequestTimeout)
                }

                function n() {
                    u = !0, clearTimeout(p), p = setTimeout(r, t.timeouts.complete)
                }
                if (!m.cors && !m.hasXDomainRequest) return void o(new d.Network('CORS not supported'));
                e = c(e, t.headers);
                var s = t.body,
                    l = m.cors ? new XMLHttpRequest : new XDomainRequest,
                    u = !1,
                    p, g;
                p = setTimeout(r, t.timeouts.connect), l.onprogress = function() {
                    u || n()
                }, 'onreadystatechange' in l && (l.onreadystatechange = function() {
                    !u && 1 < l.readyState && n()
                }), l.onload = function() {
                    if (!g) {
                        clearTimeout(p);
                        var e;
                        try {
                            e = {
                                body: JSON.parse(l.responseText),
                                responseText: l.responseText,
                                statusCode: l.status,
                                headers: l.getAllResponseHeaders && l.getAllResponseHeaders() || {}
                            }
                        } catch (t) {
                            e = new d.UnparsableJSON({
                                more: l.responseText
                            })
                        }
                        e instanceof d.UnparsableJSON ? o(e) : a(e)
                    }
                }, l.onerror = function(e) {
                    g || (clearTimeout(p), o(new d.Network({
                        more: e
                    })))
                }, l instanceof XMLHttpRequest ? l.open(t.method, e, !0) : l.open(t.method, e), m.cors && (s && ('POST' === t.method ? l.setRequestHeader('content-type', 'application/x-www-form-urlencoded') : l.setRequestHeader('content-type', 'application/json')), l.setRequestHeader('accept', 'application/json')), l.send(s)
            })
        }, s.prototype._request.fallback = function(e, t) {
            return e = c(e, t.headers), new r(function(a, o) {
                u(e, t, function(e, t) {
                    return e ? void o(e) : void a(t)
                })
            })
        }, s.prototype._promise = {
            reject: function(e) {
                return r.reject(e)
            },
            resolve: function(e) {
                return r.resolve(e)
            },
            delay: function(e) {
                return new r(function(t) {
                    setTimeout(t, e)
                })
            }
        }, n
    }
}, function(e) {
    'use strict';
    e.exports = function() {
        var e = window.document.location.protocol;
        return 'http:' !== e && 'https:' !== e && (e = 'http:'), e
    }
}, function(e, t, a) {
    'use strict';
    e.exports = function(e, t) {
        return e += /\?/.test(e) ? '&' : '?', e + o(t)
    };
    var o = a(106)
}, function(e, t, a) {
    'use strict';
    e.exports = function(e, t, a) {
        function n() {
            t.debug('JSONP: success');
            g || c || (g = !0, !d && (t.debug('JSONP: Fail. Script loaded but did not call the callback'), s(), a(new o.JSONPScriptFail)))
        }

        function s() {
            clearTimeout(h), p.onload = null, p.onreadystatechange = null, p.onerror = null, u.removeChild(p)
        }

        function l() {
            try {
                delete window[m], delete window[m + '_loaded']
            } catch (t) {
                window[m] = window[m + '_loaded'] = void 0
            }
        }
        if ('GET' !== t.method) return void a(new Error('Method ' + t.method + ' ' + e + ' is not supported by JSONP.'));
        t.debug('JSONP: start');
        var d = !1,
            c = !1;
        r += 1;
        var u = document.getElementsByTagName('head')[0],
            p = document.createElement('script'),
            m = 'algoliaJSONP_' + r,
            g = !1;
        window[m] = function(e) {
            return l(), c ? void t.debug('JSONP: Late answer, ignoring') : void(d = !0, s(), a(null, {
                body: e
            }))
        }, e += '&callback=' + m, t.jsonBody && t.jsonBody.params && (e += '&' + t.jsonBody.params);
        var h = setTimeout(function() {
            t.debug('JSONP: Script timeout'), c = !0, s(), a(new o.RequestTimeout)
        }, t.timeouts.complete);
        p.onreadystatechange = function() {
            ('loaded' === this.readyState || 'complete' === this.readyState) && n()
        }, p.onload = n, p.onerror = function() {
            t.debug('JSONP: Script error');
            g || c || (s(), a(new o.JSONPScriptError))
        }, p.async = !0, p.defer = !0, p.src = e, u.appendChild(p)
    };
    var o = a(3),
        r = 0
}, function(e) {
    e.exports = function(e, t) {
        var a = !1;
        return function() {
            return a || (console.warn(t), a = !0), e.apply(this, arguments)
        }
    }
}, function(e) {
    e.exports = function(e, t) {
        var a = e.toLowerCase().replace(/[\.\(\)]/g, '');
        return 'algoliasearch: `' + e + '` was replaced by `' + t + '`. Please see https://github.com/algolia/algoliasearch-client-javascript/wiki/Deprecated#' + a
    }
}, function(e) {
    e.exports = function(e, t) {
        t(e, 0)
    }
}, function(e, t, a) {
    var o = a(0);
    e.exports = function e(t) {
        var a = Array.prototype.slice.call(arguments);
        return o(a, function(a) {
            for (var o in a) a.hasOwnProperty(o) && ('object' == typeof t[o] && 'object' == typeof a[o] ? t[o] = e({}, t[o], a[o]) : void 0 !== a[o] && (t[o] = a[o]))
        }), t
    }
}, function(e, t, a) {
    e.exports = function(e, t) {
        var o = a(104),
            r = a(0),
            n = {};
        return r(o(e), function(a) {
            !0 !== t(a) && (n[a] = e[a])
        }), n
    }
}, function(e, t, a) {
    e.exports = function(e) {
        return function(t, r, n) {
            var s = a(2);
            n = n && s(n) || {}, n.hosts = n.hosts || ['places-dsn.algolia.net', 'places-1.algolianet.com', 'places-2.algolianet.com', 'places-3.algolianet.com'], (0 === arguments.length || 'object' == typeof t || void 0 === t) && (t = '', r = '', n._allowEmptyCredentials = !0);
            var l = e(t, r, n),
                d = l.initIndex('places');
            return d.search = o('query', '/1/places/query'), d.getObject = function(e, t) {
                return this.as._jsonRequest({
                    method: 'GET',
                    url: '/1/places/' + encodeURIComponent(e),
                    hostType: 'read',
                    callback: t
                })
            }, d
        }
    };
    var o = a(10)
}, function(e, t, a) {
    (function(t) {
        function o(t, a) {
            return l('localStorage failed with', a), s(), u = c, u.get(t)
        }

        function r(e, t) {
            return 1 === arguments.length ? u.get(e) : u.set(e, t)
        }

        function n() {
            try {
                return 'localStorage' in t && null !== t.localStorage && (t.localStorage[d] || t.localStorage.setItem(d, JSON.stringify({})), !0)
            } catch (e) {
                return !1
            }
        }

        function s() {
            try {
                t.localStorage.removeItem(d)
            } catch (e) {}
        }
        var l = a(4)('algoliasearch:src/hostIndexState.js'),
            d = 'algoliasearch-client-js',
            c = {
                state: {},
                set: function(e, t) {
                    return this.state[e] = t, this.state[e]
                },
                get: function(e) {
                    return this.state[e] || null
                }
            },
            u;
        u = n() ? {
            set: function(a, e) {
                c.set(a, e);
                try {
                    var r = JSON.parse(t.localStorage[d]);
                    return r[a] = e, t.localStorage[d] = JSON.stringify(r), r[a]
                } catch (t) {
                    return o(a, t)
                }
            },
            get: function(a) {
                try {
                    return JSON.parse(t.localStorage[d])[a] || null
                } catch (t) {
                    return o(a, t)
                }
            }
        } : c, e.exports = {
            get: r,
            set: r,
            supportsLocalStorage: n
        }
    }).call(t, a(5))
}, function(e) {
    'use strict';
    e.exports = '3.24.12'
}, function(t, a, e) {
    var o = Math.max,
        r = Math.min,
        s = Math.PI;
    (function(n) {
        var l = {
                scope: {}
            },
            d, c, u;
        l.defineProperty = 'function' == typeof Object.defineProperties ? Object.defineProperty : function(t, e, a) {
            if (a.get || a.set) throw new TypeError('ES3 does not support getters and setters.');
            t != Array.prototype && t != Object.prototype && (t[e] = a.value)
        }, l.getGlobal = function(t) {
            return 'undefined' != typeof window && window === t ? t : 'undefined' != typeof n && null != n ? n : t
        }, l.global = l.getGlobal(this), l.SYMBOL_PREFIX = 'jscomp_symbol_', l.initSymbol = function() {
            l.initSymbol = function() {}, l.global.Symbol || (l.global.Symbol = l.Symbol)
        }, l.symbolCounter_ = 0, l.Symbol = function(t) {
            return l.SYMBOL_PREFIX + (t || '') + l.symbolCounter_++
        }, l.initSymbolIterator = function() {
            l.initSymbol();
            var t = l.global.Symbol.iterator;
            t || (t = l.global.Symbol.iterator = l.global.Symbol('iterator')), 'function' != typeof Array.prototype[t] && l.defineProperty(Array.prototype, t, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return l.arrayIterator(this)
                }
            }), l.initSymbolIterator = function() {}
        }, l.arrayIterator = function(t) {
            var e = 0;
            return l.iteratorPrototype(function() {
                return e < t.length ? {
                    done: !1,
                    value: t[e++]
                } : {
                    done: !0
                }
            })
        }, l.iteratorPrototype = function(t) {
            return l.initSymbolIterator(), t = {
                next: t
            }, t[l.global.Symbol.iterator] = function() {
                return this
            }, t
        }, l.array = l.array || {}, l.iteratorFromArray = function(t, e) {
            l.initSymbolIterator(), t instanceof String && (t += '');
            var a = 0,
                o = {
                    next: function() {
                        if (a < t.length) {
                            var r = a++;
                            return {
                                value: e(r, t[r]),
                                done: !1
                            }
                        }
                        return o.next = function() {
                            return {
                                done: !0,
                                value: void 0
                            }
                        }, o.next()
                    }
                };
            return o[Symbol.iterator] = function() {
                return o
            }, o
        }, l.polyfill = function(t, e, a, o) {
            if (e) {
                for (a = l.global, t = t.split('.'), o = 0; o < t.length - 1; o++) {
                    var n = t[o];
                    n in a || (a[n] = {}), a = a[n]
                }
                t = t[t.length - 1], o = a[t], e = e(o), e != o && null != e && l.defineProperty(a, t, {
                    configurable: !0,
                    writable: !0,
                    value: e
                })
            }
        }, l.polyfill('Array.prototype.keys', function(t) {
            return t ? t : function() {
                return l.iteratorFromArray(this, function(t) {
                    return t
                })
            }
        }, 'es6-impl', 'es3');
        var e = this;
        (function(o, e) {
            c = [], d = e, u = 'function' == typeof d ? d.apply(a, c) : d, !(u !== void 0 && (t.exports = u))
        })(this, function() {
            function t(e) {
                if (!W.col(e)) try {
                    return document.querySelectorAll(e)
                } catch (e) {}
            }

            function g(e, t) {
                for (var a = e.length, o = 2 <= arguments.length ? arguments[1] : void 0, r = [], s = 0; s < a; s++)
                    if (s in e) {
                        var n = e[s];
                        t.call(o, n, s, e) && r.push(n)
                    }
                return r
            }

            function n(e) {
                return e.reduce(function(e, t) {
                    return e.concat(W.arr(t) ? n(t) : t)
                }, [])
            }

            function l(e) {
                return W.arr(e) ? e : (W.str(e) && (e = t(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e])
            }

            function p(e, t) {
                return e.some(function(e) {
                    return e === t
                })
            }

            function u(e) {
                var t = {},
                    a;
                for (a in e) t[a] = e[a];
                return t
            }

            function m(e, t) {
                var a = u(e),
                    o;
                for (o in e) a[o] = t.hasOwnProperty(o) ? t[o] : e[o];
                return a
            }

            function x(e, t) {
                var a = u(e),
                    o;
                for (o in t) a[o] = W.und(e[o]) ? t[o] : e[o];
                return a
            }

            function k(e) {
                e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, a, o) {
                    return t + t + a + a + o + o
                });
                var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                e = parseInt(t[1], 16);
                var a = parseInt(t[2], 16),
                    t = parseInt(t[3], 16);
                return 'rgba(' + e + ',' + a + ',' + t + ',1)'
            }

            function w(e) {
                function t(e, t, a) {
                    return 0 > a && (a += 1), 1 < a && --a, a < 1 / 6 ? e + 6 * (t - e) * a : .5 > a ? t : a < 2 / 3 ? e + 6 * ((t - e) * (2 / 3 - a)) : e
                }
                var a = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e);
                e = parseInt(a[1]) / 360;
                var o = parseInt(a[2]) / 100,
                    r = parseInt(a[3]) / 100,
                    a = a[4] || 1;
                if (0 == o) r = o = e = r;
                else {
                    var s = .5 > r ? r * (1 + o) : r + o - r * o,
                        n = 2 * r - s,
                        r = t(n, s, e + 1 / 3),
                        o = t(n, s, e);
                    e = t(n, s, e - 1 / 3)
                }
                return 'rgba(' + 255 * r + ',' + 255 * o + ',' + 255 * e + ',' + a + ')'
            }

            function C(e) {
                if (e = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e)) return e[2]
            }

            function y(e) {
                return -1 < e.indexOf('translate') || 'perspective' === e ? 'px' : -1 < e.indexOf('rotate') || -1 < e.indexOf('skew') ? 'deg' : void 0
            }

            function T(e, t) {
                return W.fnc(e) ? e(t.target, t.id, t.total) : e
            }

            function f(e, t) {
                if (t in e.style) return getComputedStyle(e).getPropertyValue(t.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()) || '0'
            }

            function E(e, t) {
                return W.dom(e) && p(S, t) ? 'transform' : W.dom(e) && (e.getAttribute(t) || W.svg(e) && e[t]) ? 'attribute' : W.dom(e) && 'transform' !== t && f(e, t) ? 'css' : null == e[t] ? void 0 : 'object'
            }

            function d(e, t) {
                var o = y(t),
                    o = -1 < t.indexOf('scale') ? 1 : 0 + o;
                if (e = e.style.transform, !e) return o;
                for (var r = [], s = [], l = [], n = /(\w+)\((.+?)\)/g; r = n.exec(e);) s.push(r[1]), l.push(r[2]);
                return e = g(l, function(e, a) {
                    return s[a] === t
                }), e.length ? e[0] : o
            }

            function j(e, t) {
                switch (E(e, t)) {
                    case 'transform':
                        return d(e, t);
                    case 'css':
                        return f(e, t);
                    case 'attribute':
                        return e.getAttribute(t);
                }
                return e[t] || 0
            }

            function _(e, t) {
                var a = /^(\*=|\+=|-=)/.exec(e);
                if (!a) return e;
                var o = C(e) || 0;
                switch (t = parseFloat(t), e = parseFloat(e.replace(a[0], '')), a[0][0]) {
                    case '+':
                        return t + e + o;
                    case '-':
                        return t - e + o;
                    case '*':
                        return t * e + o;
                }
            }

            function L(e, t) {
                return Math.sqrt(q(t.x - e.x, 2) + q(t.y - e.y, 2))
            }

            function b(e) {
                e = e.points;
                for (var t = 0, a = 0, o, r; a < e.numberOfItems; a++) r = e.getItem(a), 0 < a && (t += L(o, r)), o = r;
                return t
            }

            function D(e) {
                if (e.getTotalLength) return e.getTotalLength();
                switch (e.tagName.toLowerCase()) {
                    case 'circle':
                        return 2 * s * e.getAttribute('r');
                    case 'rect':
                        return 2 * e.getAttribute('width') + 2 * e.getAttribute('height');
                    case 'line':
                        return L({
                            x: e.getAttribute('x1'),
                            y: e.getAttribute('y1')
                        }, {
                            x: e.getAttribute('x2'),
                            y: e.getAttribute('y2')
                        });
                    case 'polyline':
                        return b(e);
                    case 'polygon':
                        var t = e.points;
                        return b(e) + L(t.getItem(t.numberOfItems - 1), t.getItem(0));
                }
            }

            function a(e, t) {
                function a(a) {
                    return a = void 0 === a ? 0 : a, e.el.getPointAtLength(1 <= t + a ? t + a : 0)
                }
                var o = a(),
                    r = a(-1),
                    l = a(1);
                switch (e.property) {
                    case 'x':
                        return o.x;
                    case 'y':
                        return o.y;
                    case 'angle':
                        return 180 * Math.atan2(l.y - r.y, l.x - r.x) / s;
                }
            }

            function I(e, t) {
                var a = /-?\d*\.?\d+/g,
                    o;
                if (o = W.pth(e) ? e.totalLength : e, !W.col(o)) r = (r = C(o)) ? o.substr(0, o.length - r.length) : o, o = t && !/\s/g.test(o) ? r + t : r;
                else if (W.rgb(o)) {
                    var r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(o);
                    o = r ? 'rgba(' + r[1] + ',1)' : o
                } else o = W.hex(o) ? k(o) : W.hsl(o) ? w(o) : void 0;
                return o += '', {
                    original: o,
                    numbers: o.match(a) ? o.match(a).map(Number) : [0],
                    strings: W.str(e) || t ? o.split(a) : []
                }
            }

            function O(e) {
                return e = e ? n(W.arr(e) ? e.map(l) : l(e)) : [], g(e, function(e, t, a) {
                    return a.indexOf(e) === t
                })
            }

            function P(e) {
                var t = O(e);
                return t.map(function(e, o) {
                    return {
                        target: e,
                        id: o,
                        total: t.length
                    }
                })
            }

            function c(e, t) {
                var o = u(t);
                if (W.arr(e)) {
                    var r = e.length;
                    2 !== r || W.obj(e[0]) ? W.fnc(t.duration) || (o.duration = t.duration / r) : e = {
                        value: e
                    }
                }
                return l(e).map(function(e, o) {
                    return o = o ? 0 : t.delay, e = W.obj(e) && !W.pth(e) ? e : {
                        value: e
                    }, W.und(e.delay) && (e.delay = o), e
                }).map(function(e) {
                    return x(e, o)
                })
            }

            function M(e, t) {
                var a = {},
                    o;
                for (o in e) {
                    var r = T(e[o], t);
                    W.arr(r) && (r = r.map(function(e) {
                        return T(e, t)
                    }), 1 === r.length && (r = r[0])), a[o] = r
                }
                return a.duration = parseFloat(a.duration), a.delay = parseFloat(a.delay), a
            }

            function N(e) {
                return W.arr(e) ? h.apply(this, e) : A[e]
            }

            function F(t, a) {
                var n;
                return t.tweens.map(function(s) {
                    s = M(s, a);
                    var l = s.value,
                        d = j(a.target, t.name),
                        e = n ? n.to.original : d,
                        e = W.arr(l) ? l[0] : e,
                        c = _(W.arr(l) ? l[1] : l, e),
                        d = C(c) || C(e) || C(d);
                    return s.from = I(e, d), s.to = I(c, d), s.start = n ? n.end : t.offset, s.end = s.start + s.delay + s.duration, s.easing = N(s.easing), s.elasticity = (1E3 - r(o(s.elasticity, 1), 999)) / 1E3, s.isPath = W.pth(l), s.isColor = W.col(s.from.original), s.isColor && (s.round = 1), n = s
                })
            }

            function U(e, t) {
                return g(n(e.map(function(e) {
                    return t.map(function(t) {
                        var o = E(e.target, t.name);
                        if (o) {
                            var r = F(t, e);
                            t = {
                                type: o,
                                property: t.name,
                                animatable: e,
                                tweens: r,
                                duration: r[r.length - 1].end,
                                delay: r[0].delay
                            }
                        } else t = void 0;
                        return t
                    })
                })), function(e) {
                    return !W.und(e)
                })
            }

            function K(e, t, a, n) {
                var s = 'delay' === e;
                return t.length ? (s ? r : o).apply(Math, t.map(function(t) {
                    return t[e]
                })) : s ? n.delay : a.offset + n.delay + n.duration
            }

            function R(t) {
                var o = m(G, t),
                    r = m(V, t),
                    n = P(t.targets),
                    s = [],
                    l = x(o, r),
                    e;
                for (e in t) l.hasOwnProperty(e) || 'targets' === e || s.push({
                    name: e,
                    offset: l.offset,
                    tweens: c(t[e], r)
                });
                return t = U(n, s), x(o, {
                    children: [],
                    animatables: n,
                    animations: t,
                    duration: K('duration', t, o, r),
                    delay: K('delay', t, o, r)
                })
            }

            function z(n) {
                function s() {
                    return window.Promise && new Promise(function(e) {
                        return l = e
                    })
                }

                function c(e) {
                    return S.reversed ? S.duration - e : e
                }

                function d(s) {
                    for (var u = 0, y = {}, c = S.animations, d = c.length; u < d;) {
                        var v = c[u],
                            e = v.animatable,
                            k = v.tweens,
                            h = k.length - 1,
                            n = k[h];
                        h && (n = g(k, function(e) {
                            return s < e.end
                        })[0] || n);
                        for (var k = r(o(s - n.start - n.delay, 0), n.duration) / n.duration, l = isNaN(k) ? 1 : n.easing(k, n.elasticity), k = n.to.strings, A = n.round, h = [], p = void 0, p = n.to.numbers.length, m = 0; m < p; m++) {
                            var t = void 0,
                                t = n.to.numbers[m],
                                x = n.from.numbers[m],
                                t = n.isPath ? a(n.value, l * t) : x + l * (t - x);
                            A && (n.isColor && 2 < m || (t = Math.round(t * A) / A)), h.push(t)
                        }
                        if (n = k.length)
                            for (p = k[0], l = 0; l < n; l++) A = k[l + 1], m = h[l], isNaN(m) || (p = A ? p + (m + A) : p + (m + ' '));
                        else p = h[0];
                        Y[v.type](e.target, v.property, p, y, e.id), v.currentValue = p, u++
                    }
                    if (u = Object.keys(y).length)
                        for (c = 0; c < u; c++) J || (J = f(document.body, 'transform') ? 'transform' : '-webkit-transform'), S.animatables[c].target.style[J] = y[c].join(' ');
                    S.currentTime = s, S.progress = 100 * (s / S.duration)
                }

                function b(e) {
                    S[e] && S[e](S)
                }

                function y() {
                    S.remaining && !0 !== S.remaining && S.remaining--
                }

                function e(e) {
                    var t = S.duration,
                        a = S.offset,
                        o = a + S.delay,
                        n = S.currentTime,
                        r = S.reversed,
                        g = c(e);
                    if (S.children.length) {
                        var f = S.children,
                            u = f.length;
                        if (g >= S.currentTime)
                            for (var v = 0; v < u; v++) f[v].seek(g);
                        else
                            for (; u--;) f[u].seek(g)
                    }(g >= o || !t) && (S.began || (S.began = !0, b('begin')), b('run')), g > a && g < t ? d(g) : (g <= a && 0 !== n && (d(0), r && y()), g >= t && n !== t || !t) && (d(t), r || y()), b('update'), e >= t && (S.remaining ? (h = m, 'alternate' === S.direction && (S.reversed = !S.reversed)) : (S.pause(), S.completed || (S.completed = !0, b('complete'), 'Promise' in window && (l(), p = s()))), A = 0)
                }
                n = void 0 === n ? {} : n;
                var A = 0,
                    l = null,
                    p = s(),
                    S = R(n),
                    m, h;
                return S.reset = function() {
                    var e = S.direction,
                        t = S.loop;
                    for (S.currentTime = 0, S.progress = 0, S.paused = !0, S.began = !1, S.completed = !1, S.reversed = 'reverse' === e, S.remaining = 'alternate' === e && 1 === t ? 2 : t, d(0), e = S.children.length; e--;) S.children[e].reset()
                }, S.tick = function(t) {
                    m = t, h || (h = m), e((A + m - h) * z.speed)
                }, S.seek = function(t) {
                    e(c(t))
                }, S.pause = function() {
                    var e = X.indexOf(S); - 1 < e && X.splice(e, 1), S.paused = !0
                }, S.play = function() {
                    S.paused && (S.paused = !1, h = 0, A = c(S.currentTime), X.push(S), v || B())
                }, S.reverse = function() {
                    S.reversed = !S.reversed, h = 0, A = c(S.currentTime)
                }, S.restart = function() {
                    S.pause(), S.reset(), S.play()
                }, S.finished = p, S.reset(), S.autoplay && S.play(), S
            }
            var q = Math.pow,
                G = {
                    update: void 0,
                    begin: void 0,
                    run: void 0,
                    complete: void 0,
                    loop: 1,
                    direction: 'normal',
                    autoplay: !0,
                    offset: 0
                },
                V = {
                    duration: 1E3,
                    delay: 0,
                    easing: 'easeOutElastic',
                    elasticity: 500,
                    round: 0
                },
                S = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skewX', 'skewY', 'perspective'],
                W = {
                    arr: function(e) {
                        return Array.isArray(e)
                    },
                    obj: function(e) {
                        return -1 < Object.prototype.toString.call(e).indexOf('Object')
                    },
                    pth: function(e) {
                        return W.obj(e) && e.hasOwnProperty('totalLength')
                    },
                    svg: function(e) {
                        return e instanceof SVGElement
                    },
                    dom: function(e) {
                        return e.nodeType || W.svg(e)
                    },
                    str: function(e) {
                        return 'string' == typeof e
                    },
                    fnc: function(e) {
                        return 'function' == typeof e
                    },
                    und: function(e) {
                        return 'undefined' == typeof e
                    },
                    hex: function(e) {
                        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
                    },
                    rgb: function(e) {
                        return /^rgb/.test(e)
                    },
                    hsl: function(e) {
                        return /^hsl/.test(e)
                    },
                    col: function(e) {
                        return W.hex(e) || W.rgb(e) || W.hsl(e)
                    }
                },
                h = function() {
                    function t(e, t, o) {
                        return (((1 - 3 * o + 3 * t) * e + (3 * o - 6 * t)) * e + 3 * t) * e
                    }
                    return function(a, o, r, s) {
                        if (0 <= a && 1 >= a && 0 <= r && 1 >= r) {
                            var d = new Float32Array(11);
                            if (a !== o || r !== s)
                                for (var e = 0; 11 > e; ++e) d[e] = t(.1 * e, a, r);
                            return function(e) {
                                if (a === o && r === s) return e;
                                if (0 === e) return 0;
                                if (1 === e) return 1;
                                for (var c = 0, u = 1; 10 !== u && d[u] <= e; ++u) c += .1;
                                --u;
                                var u = c + .1 * ((e - d[u]) / (d[u + 1] - d[u])),
                                    l = 3 * (1 - 3 * r + 3 * a) * u * u + 2 * (3 * r - 6 * a) * u + 3 * a;
                                if (.001 <= l) {
                                    for (c = 0; 4 > c && (l = 3 * (1 - 3 * r + 3 * a) * u * u + 2 * (3 * r - 6 * a) * u + 3 * a, 0 != l); ++c) var n = t(u, a, r) - e,
                                        u = u - n / l;
                                    e = u
                                } else if (0 == l) e = u;
                                else {
                                    var u = c,
                                        c = c + .1,
                                        p = 0;
                                    do n = u + (c - u) / 2, l = t(n, a, r) - e, 0 < l ? c = n : u = n; while (1e-7 < Math.abs(l) && 10 > ++p);
                                    e = n
                                }
                                return t(e, o, s)
                            }
                        }
                    }
                }(),
                A = function() {
                    function t(e, t) {
                        return 0 === e || 1 === e ? e : -q(2, 10 * (e - 1)) * Math.sin(2 * (e - 1 - 1.5707963267948966 * (t / (2 * s))) * s / t)
                    }
                    var o = ['Quad', 'Cubic', 'Quart', 'Quint', 'Sine', 'Expo', 'Circ', 'Back', 'Elastic'],
                        a = {
                            In: [
                                [0.55, 0.085, 0.68, 0.53],
                                [0.55, 0.055, 0.675, 0.19],
                                [0.895, 0.03, 0.685, 0.22],
                                [0.755, 0.05, 0.855, 0.06],
                                [0.47, 0, 0.745, 0.715],
                                [0.95, 0.05, 0.795, 0.035],
                                [0.6, 0.04, 0.98, 0.335],
                                [0.6, -0.28, 0.735, 0.045], t
                            ],
                            Out: [
                                [0.25, 0.46, 0.45, 0.94],
                                [0.215, 0.61, 0.355, 1],
                                [0.165, 0.84, 0.44, 1],
                                [0.23, 1, 0.32, 1],
                                [0.39, 0.575, 0.565, 1],
                                [0.19, 1, 0.22, 1],
                                [0.075, 0.82, 0.165, 1],
                                [0.175, 0.885, 0.32, 1.275],
                                function(e, a) {
                                    return 1 - t(1 - e, a)
                                }
                            ],
                            InOut: [
                                [0.455, 0.03, 0.515, 0.955],
                                [0.645, 0.045, 0.355, 1],
                                [0.77, 0, 0.175, 1],
                                [0.86, 0, 0.07, 1],
                                [0.445, 0.05, 0.55, 0.95],
                                [1, 0, 0, 1],
                                [0.785, 0.135, 0.15, 0.86],
                                [0.68, -0.55, 0.265, 1.55],
                                function(e, a) {
                                    return .5 > e ? t(2 * e, a) / 2 : 1 - t(-2 * e + 2, a) / 2
                                }
                            ]
                        },
                        r = {
                            linear: h(.25, .25, .75, .75)
                        },
                        n = {},
                        l;
                    for (l in a) n.type = l, a[n.type].forEach(function(t) {
                        return function(a, n) {
                            r['ease' + t.type + o[n]] = W.fnc(a) ? a : h.apply(e, a)
                        }
                    }(n)), n = {
                        type: n.type
                    };
                    return r
                }(),
                Y = {
                    css: function(e, t, a) {
                        return e.style[t] = a
                    },
                    attribute: function(e, t, a) {
                        return e.setAttribute(t, a)
                    },
                    object: function(e, t, a) {
                        return e[t] = a
                    },
                    transform: function(e, t, a, o, r) {
                        o[r] || (o[r] = []), o[r].push(t + '(' + a + ')')
                    }
                },
                X = [],
                v = 0,
                B = function() {
                    function e() {
                        v = requestAnimationFrame(t)
                    }

                    function t(t) {
                        var a = X.length;
                        if (a) {
                            for (var o = 0; o < a;) X[o] && X[o].tick(t), o++;
                            e()
                        } else cancelAnimationFrame(v), v = 0
                    }
                    return e
                }(),
                J;
            return z.version = '2.2.0', z.speed = 1, z.running = X, z.remove = function(e) {
                e = O(e);
                for (var t = X.length; t--;)
                    for (var a = X[t], o = a.animations, r = o.length; r--;) p(e, o[r].animatable.target) && (o.splice(r, 1), o.length || a.pause())
            }, z.getValue = j, z.path = function(e, o) {
                var r = W.str(e) ? t(e)[0] : e;
                return function(e) {
                    return {
                        el: r,
                        property: e,
                        totalLength: D(r) * ((o || 100) / 100)
                    }
                }
            }, z.setDashoffset = function(e) {
                var t = D(e);
                return e.setAttribute('stroke-dasharray', t), t
            }, z.bezier = h, z.easings = A, z.timeline = function(t) {
                var a = z(t);
                return a.pause(), a.duration = 0, a.add = function(e) {
                    return a.children.forEach(function(e) {
                        e.began = !0, e.completed = !0
                    }), l(e).forEach(function(o) {
                        var r = x(o, m(V, t || {}));
                        r.targets = r.targets || t.targets, o = a.duration;
                        var n = r.offset;
                        r.autoplay = !1, r.direction = a.direction, r.offset = W.und(n) ? o : _(n, o), a.began = !0, a.completed = !0, a.seek(r.offset), r = z(r), r.began = !0, r.completed = !0, r.duration > o && (a.duration = r.duration), a.children.push(r)
                    }), a.seek(0), a.reset(), a.autoplay && a.restart(), a
                }, a
            }, z.random = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e
            }, z
        })
    }).call(a, e(5))
}, function() {
    AFRAME.registerComponent('auto-enter-vr', {
        init: function() {
            var e;
            document.hidden || (window.dispatchEvent(new MouseEvent('click')), setTimeout(() => {
                this.el.sceneEl.enterVR()
            }, 2e3)), e = document.getElementById('plugyourheadset'), this.el.sceneEl.addEventListener('enter-vr', () => {
                AFRAME.utils.device.checkHeadsetConnected() ? document.getElementById('plugyourheadset').classList.remove('slideup') : document.getElementById('plugyourheadset').classList.add('slideup')
            }), window.addEventListener('message', (e) => {
                'switchToLobby' === e.data.action && this.el.sceneEl.enterVR().catch(() => {
                    setTimeout(() => {
                        this.el.sceneEl.enterVR().catch(() => {
                            window.postMessage({
                                action: 'forceExitVRCommand'
                            }, '*'), setTimeout(() => {
                                this.el.sceneEl.enterVR()
                            }, 250)
                        })
                    }, 250)
                })
            })
        }
    })
}, function() {
    AFRAME.registerComponent('background-animation', {
        schema: {
            isCollectionOpen: {
                default: !1
            }
        },
        init: function() {
            var e = this.el;
            this.onNavigateStart = this.onNavigateStart.bind(this), this.onNavigateEnd = this.onNavigateEnd.bind(this), e.sceneEl.addEventListener('navigate', this.onNavigateStart), e.sceneEl.addEventListener('preSwitchToContent', this.onNavigateEnd), e.sceneEl.addEventListener('cancelloading', this.onNavigateEnd), this.animationSet = {}
        },
        onNavigateStart: function() {
            var e = this.el;
            this.animationSet.from = e.components.material.material.uniforms.brightness.value, this.animationSet.to = 0.2, e.setAttribute('animation__navigate', this.animationSet), e.emit('navigatebackgroundanimation')
        },
        onNavigateEnd: function() {
            var e = this.el;
            this.animationSet.from = e.components.material.material.uniforms.brightness.value, this.animationSet.to = this.data.isCollectionOpen ? 0.5 : 0.9, e.setAttribute('animation__navigate', this.animationSet), e.emit('navigatebackgroundanimation')
        }
    })
}, function() {
    AFRAME.registerComponent('background-audio', {
        schema: {
            src: {
                type: 'string'
            },
            volume: {
                type: 'number'
            }
        },
        init: function() {
            this.audio = document.querySelector(this.data.src), this.audio.volume = this.data.volume, document.addEventListener('visibilitychange', () => {
                'hidden' === document.visibilityState ? this.fadeOut() : this.fadeIn()
            }, !1)
        },
        play: function() {
            document.hidden || this.audio.play()
        },
        fadeIn: function() {
            var e = this.audio,
                t;
            this.audio.play(), t = setInterval(() => {
                e.volume <= this.data.volume && (e.volume += 5e-3), e.volume >= this.data.volume && clearInterval(t)
            }, 100)
        },
        fadeOut: function() {
            var e = this.audio,
                t;
            t = setInterval(() => {
                5e-3 <= e.volume ? e.volume -= 5e-3 : e.volume = 0, 0 >= e.volume && (clearInterval(t), this.audio.pause())
            }, 100)
        }
    })
}, function(e, t, a) {
    AFRAME.registerComponent('background-shader', {
        play: function() {
            this.camera = this.el.sceneEl.camera.el.object3D, this.uniform = this.el.components.material.material.uniforms.camera.value
        },
        tick: function() {
            this.uniform.x = this.camera.position.x, this.uniform.y = this.camera.position.y, this.uniform.z = this.camera.position.z
        }
    }), AFRAME.registerShader('backgroundShader', {
        schema: {
            brightness: {
                type: 'number',
                default: 0.9,
                min: 0,
                max: 1,
                is: 'uniform'
            },
            time: {
                type: 'number',
                default: 0,
                is: 'uniform'
            },
            tint: {
                type: 'color',
                default: '#000',
                is: 'uniform'
            },
            camera: {
                type: 'vec3',
                is: 'uniform'
            },
            opacity: {
                type: 'number',
                default: 1,
                is: 'uniform'
            }
        },
        vertexShader: a(110),
        fragmentShader: a(109)
    })
}, function() {
    AFRAME.registerComponent('cancel-button', {
        schema: {
            version: {
                default: 0
            }
        },
        init: function() {
            var e = this.el;
            this.postMessageData = {
                action: 'cancelLoading'
            }, e.addEventListener('click', () => {
                e.sceneEl.emit('cancelloading'), window.postMessage(this.postMessageData, '*')
            })
        },
        update: function() {
            this.el.object3D.visible = !this.data.version || 2.4 <= this.data.version
        }
    })
}, function() {
    AFRAME.registerComponent('cascade-raycastable', {
        schema: {
            type: 'string'
        },
        play: function() {
            var e, t;
            setTimeout(() => {
                for (e = this.el.querySelectorAll('*'), t = 0; t < e.length; t++) this.data ? e[t].setAttribute('bind-toggle__raycastable', this.data) : e[t].setAttribute('raycastable', '')
            }, 100)
        }
    })
}, function() {
    AFRAME.registerComponent('click-out', {
        init: function() {
            this.onClick = this.onClick.bind(this), this.el.addEventListener('triggerdown', this.onClick), this.el.addEventListener('abuttondown', this.onClick), this.el.addEventListener('bbuttondown', this.onClick), this.el.addEventListener('xbuttondown', this.onClick), this.el.addEventListener('ybuttondown', this.onClick), 'mouseCursor' === this.el.getAttribute('id') && (this.isMouseCursor = !0, window.addEventListener('click', (e) => {
                e.isTrusted && this.onClick()
            })), window.addEventListener('keydown', (e) => {
                27 !== e.keyCode || this.onClick()
            })
        },
        onClick: function() {
            var e, t;
            if (this.el.sceneEl.isPlaying) return t = this.el.sceneEl.systems.state.state, e = this.el.components.raycaster.intersectedEls[0], t.isLoadingSite || 'tutorialmodal' === t.screen ? void 0 : 'search' === t.screen && e && 'cursorDummy' === e.getAttribute('id') ? void document.getElementById('keyboard').dismiss() : void(!t.screen || e && 'cursorDummy' !== e.getAttribute('id') || this.el.sceneEl.emit('screenpop'))
        }
    })
}, function(e, t, a) {
    AFRAME.registerShader('collectionShader', {
        schema: {
            color: {
                default: '#FFF',
                type: 'color',
                is: 'uniform'
            },
            opacity: {
                default: 1,
                is: 'uniform'
            },
            src: {
                default: '#whitePixelImg',
                type: 'map',
                is: 'uniform'
            }
        },
        vertexShader: a(12),
        fragmentShader: a(111)
    })
}, function() {
    AFRAME.registerComponent('console-shortcuts', {
        play: function() {
            window.scene = this.el, window.state = this.el.systems.state.state
        }
    })
}, function() {
    AFRAME.registerComponent('content-page-loaded', {
        init: function() {
            var e = !0;
            window.addEventListener('message', (t) => 'contentPageLoaded' === t.data.action ? e ? void(e = !1) : void this.el.emit('contentpageloaded') : void 0)
        }
    })
}, function() {
    AFRAME.registerComponent('controller-button-feedback', {
        init: function() {
            this.trigger = this.el.querySelector('.controller-trigger'), this.thumbstick = this.el.querySelector('.controller-thumbstick')
        },
        tick: function() {
            var e = this.el,
                t, a, o;
            t = e.components['tracked-controls'];
            t && (a = this.trigger ? this.trigger.getObject3D('mesh') : null, o = this.thumbstick ? this.thumbstick.getObject3D('mesh') : null, a && t.buttonStates[1] && (a.rotation.x = THREE.Math.lerp(0, -Math.PI / 9, t.buttonStates[1].value)), o && (o.rotation.z = 0.4 * -t.axis[0], o.rotation.x = 0.4 * t.axis[1]))
        }
    })
}, function() {
    var e = {
        right: {
            hand: 'right',
            model: !1
        },
        left: {
            hand: 'left',
            model: !1
        }
    };
    AFRAME.registerComponent('controller', {
        schema: {
            hand: {
                default: 'right'
            },
            isLoadingSite: {
                default: !1
            }
        },
        init: function() {
            var t = this.config,
                a = this.data,
                o = this.el,
                r;
            this.originalGamepad = void 0, this.originalUpdateGamepad = void 0, this.proxyController = {}, o.setAttribute('oculus-touch-controls', e[a.hand]), o.setAttribute('oculus-touch-controls', 'model', !0), o.setAttribute('vive-controls', e[a.hand]), o.setAttribute('windows-motion-controls', e[a.hand]), o.addEventListener('controllerconnected', (e) => {
                var a = o.querySelector('.controllerLaser'),
                    n;
                if (n = t[e.detail.name], n.raycaster && o.setAttribute('raycaster', n.raycaster || {}), n.cursor && o.setAttribute('cursor', n.cursor || {}), n.laser && (a.setAttribute('position', n.laser.position), a.setAttribute('rotation', n.laser.rotation)), !o.getAttribute(e.detail.name).model) {
                    for (r = 0; r < n.parts.length; r++) o.querySelector('.controller-' + n.parts[r]).setAttribute('gltf-part', {
                        src: n.asset,
                        part: n.parts[r]
                    });
                    !AFRAME.utils.getUrlParameter('debug') && e.detail.name && gtag('set', {
                        headset: e.detail.name.split('-')[0]
                    })
                }
            }), AFRAME.utils.getUrlParameter('debug') && o.emit('controllerconnected', {
                name: 'vive-controls'
            }), window.addEventListener('message', (e) => {
                e.data && e.data.action && (this.data.isLoadingSite && 'contentPageReady' === e.data.action && (this.el.object3D.visible = !1), 'switchToLobby' === e.data.action && this.restoreGamepad())
            })
        },
        update: function(e) {
            var t = this.data,
                a = this.el;
            return e ? a.components['tracked-controls'] ? !e.isLoadingSite && t.isLoadingSite ? (a.object3D.visible = !1, void this.useProxyGamepad()) : void(e.isLoadingSite && !t.isLoadingSite && this.restoreGamepad()) : void 0 : void 0
        },
        tick: function() {
            var e, t;
            if (this.data.isLoadingSite && (t = localStorage.getItem('proxyGamepads'), !!t))
                for (t = JSON.parse(t), e = 0; e < t.length; e++) t[e] && t[e].hand === this.data.hand && t[e].pose && (this.el.object3D.visible = !0, this.proxyController.buttons = t[e].buttons, this.proxyController.pose = t[e].pose)
        },
        useProxyGamepad: function() {
            var e = this.el,
                t = this.proxyController;
            e.components['tracked-controls'].controller && (localStorage.setItem('proxyGamepads', ''), this.originalGamepad = e.components['tracked-controls'].controller, this.originalUpdateGamepad = e.components['tracked-controls'].updateGamepad, t.axes = this.originalGamepad.axes, t.buttons = this.originalGamepad.buttons, t.hand = this.originalGamepad.hand, t.pose = this.originalGamepad.pose, e.components['tracked-controls'].controller = this.proxyController, e.components['tracked-controls'].updateGamepad = () => {})
        },
        restoreGamepad: function() {
            var e = this.el;
            this.originalGamepad && (e.components['tracked-controls'].controller = this.originalGamepad, e.components['tracked-controls'].updateGamepad = this.originalUpdateGamepad), setTimeout(() => {
                e.object3D.visible = !0
            }, 1e3)
        },
        config: {
            "daydream-controls": {
                asset: '#controller-vive',
                parts: ['body', 'menu', 'touchpad', 'trigger', 'logo'],
                cursor: {
                    downEvents: ['trackpaddown'],
                    upEvents: ['trackpadup']
                }
            },
            "gearvr-controls": {
                asset: '#controller-vive',
                parts: ['body', 'menu', 'touchpad', 'trigger', 'logo'],
                cursor: {
                    downEvents: ['trackpaddown'],
                    upEvents: ['trackpadup']
                },
                raycaster: {
                    origin: {
                        x: 0,
                        y: 5e-4,
                        z: 0
                    }
                }
            },
            "oculus-touch-controls": {
                asset: '#controller-oculus',
                parts: ['body', 'thumbstick', 'buttona', 'buttonb', 'trigger', 'logo'],
                cursor: {
                    downEvents: ['triggerdown', 'gripdown', 'abuttondown', 'bbuttondown', 'xbuttondown', 'ybuttondown'],
                    upEvents: ['triggerup', 'gripup', 'abuttonup', 'bbuttonup', 'xbuttonup', 'ybuttonup']
                },
                raycaster: {
                    origin: {
                        x: 0,
                        y: -5e-3,
                        z: 0
                    },
                    direction: {
                        x: 0,
                        y: -1,
                        z: -1
                    },
                    showLine: !1
                },
                laser: {
                    position: {
                        x: 0,
                        y: -0.06,
                        z: -0.06
                    },
                    rotation: {
                        x: 45,
                        y: 0,
                        z: 0
                    }
                }
            },
            "vive-controls": {
                asset: '#controller-vive',
                parts: ['body', 'menu', 'touchpad', 'trigger', 'logo'],
                cursor: {
                    downEvents: ['triggerdown', 'gripdown'],
                    upEvents: ['triggerup', 'gripup']
                }
            },
            "windows-motion-controls": {
                asset: '#controller-vive',
                parts: ['body', 'menu', 'touchpad', 'trigger', 'logo'],
                cursor: {
                    downEvents: ['trackpaddown', 'triggerdown', 'gripdown'],
                    upEvents: ['trackpadup', 'triggerup', 'gripup']
                },
                raycaster: {
                    showLine: !1
                }
            }
        }
    })
}, function() {
    AFRAME.registerComponent('cursor-mesh', {
        schema: {
            cursorEl: {
                type: 'selector'
            }
        },
        init: function() {
            this.scenePivotEl = document.getElementById('scenePivot')
        },
        tick: function() {
            var e = this.data.cursorEl,
                t = this.el,
                a = this.el.object3D,
                o = this.scenePivotEl,
                r, n, s;
            (r = e.components.cursor, !!r) && (s = e.components.cursor.intersectedEl, s && (n = e.components.raycaster.getIntersection(s), t.object3D.position.copy(n.point), t.object3D.rotation.copy(o.object3D.rotation)))
        }
    })
}, function() {
    AFRAME.registerComponent('cursor-toggler', {
        schema: {
            camera: {
                default: 'camera'
            },
            cursorMesh: {
                default: 'cursorMesh'
            },
            fuseMode: {
                default: !1
            },
            handOne: {
                default: 'primaryHand'
            },
            handTwo: {
                default: 'secondaryHand'
            },
            mouseCursor: {
                default: 'mouseCursor'
            }
        },
        init: function() {
            var e = this.data,
                t;
            this.cameraEl = document.getElementById(e.camera), this.cursorMesh = document.getElementById(e.cursorMesh), t = document.getElementById(e.mouseCursor), this.el.sceneEl.addEventListener('controllerconnected', () => {
                this.toggle(document.getElementById(e.handOne), document.getElementById(e.handTwo), this.cursorMesh), t.setAttribute('raycaster', 'enabled', !1)
            })
        },
        update: function(e) {
            return !e.fuseMode && this.data.fuseMode ? (this.lastCursorEl = this.currentCursorEl, void this.toggle(this.cameraEl, this.currentCursorEl)) : void(e.fuseMode && !this.data.fuseMode && this.toggle(this.lastCursorEl, this.cameraEl))
        },
        play: function() {
            var e = this.data,
                t, a, o;
            a = document.getElementById(e.handOne), o = document.getElementById(e.handTwo);
            a && o && (a.querySelector('.controllerLaser').object3D.visible = !0, a.addEventListener('buttonup', () => {
                this.toggle(a, o, t)
            }), o.addEventListener('buttonup', () => {
                this.toggle(o, a, t)
            }))
        },
        toggle: function(e, t) {
            this.currentCursorEl = e, this.cursorMesh.object3D.visible = !1, this.cursorMesh.setAttribute('cursor-mesh', 'cursorEl', e), e.querySelector('.controllerLaser') && (e.querySelector('.controllerLaser').object3D.visible = !0), e.setAttribute('raycaster', 'enabled', !0), t.querySelector('.controllerLaser') && (t.querySelector('.controllerLaser').object3D.visible = !1), t.setAttribute('raycaster', 'enabled', !1), setTimeout(() => {
                cursorMesh.object3D.visible = !0
            })
        }
    })
}, function() {
    AFRAME.registerComponent('debug-controller', {
        schema: {
            enabled: {
                default: !1
            }
        },
        init: function() {
            var e, t;
            (this.data.enabled || AFRAME.utils.getUrlParameter('debug')) && (console.log('%c debug-controller enabled ', 'background: #111; color: red'), this.isTriggerDown = !1, e = document.getElementById('primaryHandContainer'), t = document.getElementById('secondaryHandContainer'), e.setAttribute('position', {
                x: 0.2,
                y: 1.5,
                z: -0.5
            }), t.setAttribute('position', {
                x: -0.2,
                y: 1.5,
                z: -0.5
            }), e.setAttribute('rotation', {
                x: 0,
                y: 0,
                z: 0
            }), t.setAttribute('rotation', {
                x: 0,
                y: 0,
                z: 0
            }), document.addEventListener('keydown', (a) => {
                var o, r, n;
                if (a.shiftKey) {
                    if (32 === a.keyCode) return void(this.isTriggerDown ? (e.emit('triggerup'), this.isTriggerDown = !1) : (e.emit('triggerdown'), this.isTriggerDown = !0));
                    78 === a.keyCode && (this.secondaryGripDown ? (t.emit('gripup'), this.secondaryGripDown = !1) : (t.emit('gripdown'), this.secondaryGripDown = !0)), 77 === a.keyCode && (this.primaryGripDown ? (e.emit('gripup'), this.primaryGripDown = !1) : (e.emit('gripdown'), this.primaryGripDown = !0)), a.ctrlKey ? (n = t.object3D.position, 72 === a.keyCode && (n.x -= 0.01), 74 === a.keyCode && (n.y -= 0.01), 75 === a.keyCode && (n.y += 0.01), 76 === a.keyCode && (n.x += 0.01), (59 === a.keyCode || 186 === a.keyCode) && (n.z -= 0.01), 222 === a.keyCode && (n.z += 0.01)) : (o = e.object3D.position, 72 === a.keyCode && (o.x -= 0.01), 74 === a.keyCode && (o.y -= 0.01), 75 === a.keyCode && (o.y += 0.01), 76 === a.keyCode && (o.x += 0.01), (59 === a.keyCode || 186 === a.keyCode) && (o.z -= 0.01), 222 === a.keyCode && (o.z += 0.01));
                    var r, s;
                    a.ctrlKey ? (s = t.getAttribute('rotation'), 89 === a.keyCode && (s.x -= 10), 79 === a.keyCode && (s.x += 10), 85 === a.keyCode && (s.y -= 10), 73 === a.keyCode && (s.y += 10)) : (r = e.getAttribute('rotation'), 89 === a.keyCode && (r.x -= 10), 79 === a.keyCode && (r.x += 10), 85 === a.keyCode && (r.y -= 10), 73 === a.keyCode && (r.y += 10)), e.setAttribute('rotation', AFRAME.utils.clone(r)), t.setAttribute('rotation', AFRAME.utils.clone(s))
                }
            }))
        }
    })
}, function() {
    AFRAME.registerComponent('debug-cursor', {
        init: function() {},
        log: function(e, t, a) {
            t.id ? console.log(`%c[${e}] ${t.id}`, `color: ${a}`) : (console.log(`%c[${e}]`, `color: ${a}`), console.log(t))
        }
    })
}, function() {
    AFRAME.registerComponent('debug-links', {
        init: function() {
            this.initLinkClickShortcut(), this.initPaginateShortcut()
        },
        initLinkClickShortcut: function() {
            var e = document.getElementById('links');
            window.addEventListener('keyup', (t) => {
                !t.shiftKey || 49 > t.keyCode || 54 < t.keyCode || e.children[t.keyCode - 49].emit('click')
            })
        },
        initPaginateShortcut: function() {
            var e = !1;
            window.addEventListener('keydown', (t) => {
                80 === t.keyCode && (e = !0)
            }), window.addEventListener('keyup', (t) => {
                80 === t.keyCode && (e = !1);
                !e || 48 > t.keyCode || 54 < t.keyCode || this.el.emit('pagegoto', {
                    page: t.keyCode - 48
                })
            })
        }
    })
}, function() {
    AFRAME.registerComponent('enter-site-button', {
        schema: {
            enabled: {
                default: !1
            }
        },
        init: function() {
            var e = this.el;
            e.addEventListener('click', () => {
                this.data.enabled && (e.sceneEl.emit('entersite'), window.postMessage({
                    action: 'switchToContent',
                    isReenter: !0
                }, '*'), gtag('event', 'entersitebutton'))
            })
        }
    })
}, function(e, t, a) {
    AFRAME.registerComponent('fade-shader', {
        dependencies: ['material'],
        init: function() {
            var e = this.el;
            this.matrix = new THREE.Matrix4, this.updateUniforms = this.updateUniforms.bind(this), this.el.sceneEl.addEventListener('enter-vr', this.updateUniforms), this.el.setAttribute('material', 'transparent', !0), this.updateUniforms()
        },
        updateUniforms: function() {
            var e = this.el,
                t = this.matrix,
                a, o;
            a = e.getObject3D('mesh');
            a && (o = a.material, t.getInverse(e.object3D.matrixWorld), o.uniforms.inverseMatrix = {
                value: t
            })
        }
    }), AFRAME.registerShader('fadeShader', {
        schema: {
            color: {
                default: '#FFF',
                type: 'color',
                is: 'uniform'
            },
            opacity: {
                default: 1,
                is: 'uniform'
            },
            src: {
                default: '#whitePixelImg',
                type: 'map',
                is: 'uniform'
            }
        },
        vertexShader: a(12),
        fragmentShader: a(112)
    })
}, function(e, t, a) {
    AFRAME.registerShader('fadeTextShader', {
        schema: {
            alphaTest: {
                type: 'number',
                is: 'uniform',
                default: 0.5
            },
            color: {
                type: 'color',
                is: 'uniform',
                default: 'white'
            },
            map: {
                type: 'map',
                is: 'uniform'
            },
            negate: {
                type: 'boolean',
                is: 'uniform',
                default: !0
            },
            opacity: {
                type: 'number',
                is: 'uniform',
                default: 1
            }
        },
        raw: !0,
        vertexShader: a(114),
        fragmentShader: a(113)
    })
}, function() {
    AFRAME.registerComponent('feed-collection', {
        schema: {
            collectionId: {
                type: 'string'
            }
        },
        init: function() {
            var e = this.el;
            e.addEventListener('click', () => {
                e.closest('[data-is-scrolling]') || (e.sceneEl.emit('collectionset', this.data), setTimeout(() => {
                    e.sceneEl.emit('collectionopen')
                }))
            })
        }
    })
}, function() {
    AFRAME.registerComponent('feed-single', {
        schema: {
            siteId: {
                type: 'string'
            }
        },
        init: function() {
            var e = this.el;
            e.addEventListener('click', () => {
                e.sceneEl.emit('linkdetailopen', this.data)
            })
        }
    })
}, function(e, t, a) {
    'use strict';

    function o(e, t) {
        var a, o;
        for (o = 0, a = 0; a < e.length; a++) o += e.charCodeAt(a);
        return parseFloat('0.' + Math.sin(9999 * o * t + 1).toString().substr(7))
    }
    Object.defineProperty(t, '__esModule', {
        value: !0
    });
    var r = a(1),
        n = a.n(r),
        s = Object.keys(n.a.SITES),
        l = new Date,
        d = `${l.getYear()}-${l.getMonth()}-${l.getDate()}`;
    AFRAME.registerComponent('feed-tiles', {
        schema: {
            isDailyMix: {
                default: !1
            }
        },
        init: function() {
            var e = this.data,
                t = this.el,
                a = 0,
                o, r, s, l, d;
            if (o = document.createElement('template'), s = document.getElementById('linkTemplate').innerHTML, e.isDailyMix)
                for (d = []; 6 > d.length;)(r = this.getRandomSite(a++), -1 === d.indexOf(r)) && d.push(r);
            else d = JSON.parse(t.dataset.sites);
            for (a = 0; a < d.length; a++) l = n.a.SITES[d[a]], t.appendChild(t.sceneEl.systems.state.renderTemplate(s, l))
        },
        getRandomSite: function(e) {
            return s[Math.floor(o(d, e) * s.length)]
        }
    })
}, function() {
    var e = 0;
    AFRAME.registerComponent('gpu-preloader', {
        play: function() {
            var e, t, a;
            for (t = this.el.querySelectorAll('.linkImage'), e = 0; e < t.length; e++) this.preloadLinkImage(t[e]);
            for (a = this.el.querySelectorAll('.linkLogo'), e = 0; e < a.length; e++) this.preloadLinkLogo(a[e]);
            this.preloadKeyboard()
        },
        preloadLinkImage: function(e) {
            return e.components.material.material.uniforms.src.value ? void this.preload(e.components.material.material.uniforms.src.value) : void e.addEventListener('materialtextureloaded', () => {
                this.preload(e.components.material.material.uniforms.src.value)
            })
        },
        preloadLinkLogo: function(e) {
            return e.components.material.material.map ? void this.preload(e.components.material.material.map) : void e.addEventListener('materialtextureloaded', () => {
                this.preload(e.components.material.material.map)
            })
        },
        preloadKeyboard: function() {
            document.getElementById('keyboard').object3D.traverse((e) => e.material ? e.el.components.material ? void e.el.addEventListener('materialtextureloaded', () => {
                setTimeout(() => {
                    this.preload(e.material.map)
                })
            }) : void(e.el.components.text && e.el.addEventListener('textfontset', () => {
                this.preload(e.material.uniforms.map.value)
            })) : void 0, !0)
        },
        preload: function(t) {
            e++, 16 < e && (e = 0), this.el.renderer.setTexture2D(t, e)
        }
    })
}, function() {
    AFRAME.registerComponent('help-back-lobby', {
        schema: {
            container: {
                default: 'helpBackLobby'
            }
        },
        init: function() {
            var e = this.el,
                t;
            t = document.getElementById(this.data.container), e.addEventListener('controllerconnected', (e) => {
                t.dataset.controller = e.detail.name
            })
        }
    })
}, function() {
    AFRAME.registerComponent('high-performance', {
        schema: {
            developerUrl: {
                type: 'string'
            },
            linkDetailSiteId: {
                type: 'number'
            },
            switchedToLobby: {
                default: !1
            }
        },
        init: function() {
            window.highPerformance && (window.addEventListener('vrdisplayfocus', this.onVRDisplayFocus.bind(this)), this.eventDetail = {})
        },
        onVRDisplayFocus: function() {
            var e = this.data,
                t = this.el;
            !1 !== e.switchedToLobby && -1 !== e.linkDetailIndex && (0 !== e.linkDetailIndex || e.developerUrl) && (this.eventDetail.siteId = this.data.linkDetailSiteId, t.emit('linkdetailopen', this.eventDetail), e.switchedToLobby = !1)
        }
    })
}, function() {}, function(e, t, a) {
    'use strict';
    var o = Math.abs;
    Object.defineProperty(t, '__esModule', {
        value: !0
    });
    var r = a(1),
        n = a.n(r),
        s = 6,
        l = 0.666;
    AFRAME.registerComponent('layout-collection', {
        schema: {
            collectionId: {
                default: ''
            },
            isOpen: {
                default: !1
            },
            page: {
                default: 0
            }
        },
        init: function() {
            this.background = document.getElementById('background'), this.collectionTitle = document.getElementById('collectionTitle'), this.mask = document.getElementById('screenMask'), this.isScrolling = !1, this.pageWidth = 3 * l, this.scroll = 0, this.scrollGoal = 0, this.scrollSpeed = 0.1, this.el.sceneEl.addEventListener('collectionset', () => {
                setTimeout(() => {
                    this.updateLayout()
                })
            })
        },
        update: function() {
            var e = new THREE.Color;
            return function(t) {
                var a = this.data,
                    o;
                a.collectionId && (e.set(n.a.COLLECTIONS[a.collectionId].color), e.multiplyScalar(0.3), o = `#${e.getHexString()}`, this.background.setAttribute('animation__addtint', 'to', o), this.background.setAttribute('animation__removetint', 'from', o), this.mask.setAttribute('animation__addtint', 'to', o), this.mask.setAttribute('animation__removetint', 'from', o)), t.page !== a.page && this.updateLayout(), t.isOpen !== a.isOpen && this.updateLinkRaycastables(a.isOpen)
            }
        }(),
        tick: function() {
            this.isScrolling && (0.25 > o(this.scrollGoal - this.scroll) && (this.el.removeAttribute('data-is-scrolling', ''), this.updateLinkRaycastables(this.data.isOpen)), 1e-3 > o(this.scrollGoal - this.scroll) ? (this.isScrolling = !1, this.scroll = this.scrollGoal) : this.scroll += (this.scrollGoal - this.scroll) * this.scrollSpeed, this.el.object3D.position.x = -1 * this.scroll)
        },
        updateLayout: function() {
            var e = this.el,
                t, a, o, r, n, l;
            for (this.numPages = Math.ceil(e.children.length / s), t = this.data.page * s + s, n = this.data.page * s, a = 0; a < e.children.length; a++) {
                var d, c;
                d = e.children[a], c = a >= n && a < t, d.setAttribute('superlink', 'isActive', c), l = a % 2, d.object3D.position.set(this.getPositionX(a), l * 0.42, 0), d.object3D.scale.set(1.2, 1.2, 1.2), o = !1, (a === t || a === t + 1 || a === t + 2 || a === t + 3) && (o = !0, d.object3D.position.x += 0.2, d.object3D.position.z = -0.15), d.setAttribute('superlink', 'isLeftPaginator', o), r = !1, (a === n - 1 || a === n - 2 || a === n - 3 || a === n - 4) && (r = !0, d.object3D.position.x -= 0.2, d.object3D.position.z = -0.15), d.setAttribute('superlink', 'isRightPaginator', r)
            }
            this.startScrolling()
        },
        getPositionX: function(e) {
            var t;
            return t = Math.floor(e / 2), t * l - l
        },
        startScrolling: function() {
            this.isScrolling = !0, this.scrollGoal = this.data.page * this.pageWidth, this.updateLinkRaycastables(!1)
        },
        updateLinkRaycastables: function(e) {
            var t = this.el,
                a, o;
            for (o = t.querySelectorAll('[data-raycastable]'), a = 0; a < o.length; a++) e ? o[a].setAttribute('raycastable', '') : o[a].removeAttribute('raycastable')
        }
    })
}, function() {
    var e = Math.abs;
    AFRAME.registerComponent('layout-feed', {
        schema: {
            isOpen: {
                default: !0
            },
            page: {
                default: 0
            }
        },
        init: function() {
            this.isScrolling = !1, this.scroll = 0, this.scrollGoal = 0, this.scrollSpeed = 0.1, this.setPageRaycastable(0, !0)
        },
        update: function(e) {
            var t = this.el,
                a = this.data;
            'page' in e && (this.visibleTimeout && clearTimeout(this.visibleTimeout), e.page !== a.page && (-1 === a.page && t.sceneEl.emit('collectionset', {
                collectionId: 'usercollection'
            }, !1), this.startScrolling(), this.setPageVisible(a.page - 1, !0), this.setPageVisible(a.page, !0), this.setPageVisible(a.page + 1, !0), this.visibleTimeout = setTimeout(() => {
                this.setPageVisible(a.page - 2, !1), this.setPageVisible(a.page + 2, !1)
            }), this.setPageRaycastable(e.page, !1)), e.isOpen !== a.isOpen && this.setPageRaycastable(a.page, a.isOpen))
        },
        tick: function() {
            this.isScrolling && (0.25 > e(this.scrollGoal - this.scroll) && (this.el.removeAttribute('data-is-scrolling', ''), this.setPageRaycastable(this.data.page, this.data.isOpen)), 1e-3 > e(this.scrollGoal - this.scroll) ? (this.isScrolling = !1, this.scroll = this.scrollGoal) : this.scroll += (this.scrollGoal - this.scroll) * this.scrollSpeed, this.el.object3D.position.x = -1 * this.scroll)
        },
        startScrolling: function() {
            this.isScrolling = !0, this.scrollGoal = this.data.page * (3 * 0.666)
        },
        setPageVisible: function(e, t) {
            var a = this.el;
            a.children[e + 1] && (a.children[e + 1].object3D.visible = t)
        },
        setPageRaycastable: function(e, t) {
            var a, o, r;
            if (o = this.el.children[e + 1], !!o)
                for (r = o.querySelectorAll('[data-raycastable]'), a = 0; a < r.length; a++) t ? r[a].setAttribute('raycastable', '') : r[a].removeAttribute('raycastable')
        }
    })
}, function(e, t, a) {
    AFRAME.registerComponent('link-shader', {
        dependencies: ['material'],
        init: function() {
            var e = this.el;
            this.matrix = new THREE.Matrix4, this.updateUniforms = this.updateUniforms.bind(this), this.el.sceneEl.addEventListener('enter-vr', this.updateUniforms), this.updateUniforms()
        },
        updateUniforms: function() {
            var e = this.el,
                t = e.getObject3D('mesh'),
                a = this.matrix,
                o;
            t && (o = t.material, a.getInverse(e.object3D.matrixWorld), o.uniforms.inverseMatrix = {
                value: a
            }, e.setAttribute('material', 'meshPosition', e.object3D.position))
        }
    }), AFRAME.registerShader('linkShader', {
        schema: {
            brightness: {
                default: 1,
                is: 'uniform'
            },
            glare: {
                type: 'number',
                default: 0,
                is: 'uniform'
            },
            meshPosition: {
                type: 'vec3',
                is: 'uniform'
            },
            opacity: {
                default: 1,
                is: 'uniform'
            },
            src: {
                type: 'map',
                is: 'uniform'
            },
            uvXClamp: {
                type: 'float',
                default: 1,
                is: 'uniform'
            },
            uvXOffset: {
                type: 'float',
                default: 0,
                is: 'uniform'
            }
        },
        vertexShader: a(116),
        fragmentShader: a(115)
    })
}, function() {
    AFRAME.registerComponent('loading-ring', {
        schema: {
            errorColor: {
                default: '#EF3054'
            },
            hasError: {
                default: !1
            },
            isLoadingSite: {
                default: !1
            },
            isSiteLoaded: {
                default: !1
            },
            loadedColor: {
                default: '#50B527'
            },
            loadingColor: {
                default: '#FF8522'
            }
        },
        play: function() {
            this.el.emit('startloadingringanimation')
        },
        update: function() {
            var e = this.data,
                t = this.el;
            return e.isSiteLoaded ? void(t.emit('stoploadingringanimation'), t.setAttribute('material', 'opacity', 1), t.object3D.scale.set(0.8, 0.8, 0.8), e.hasError ? t.setAttribute('material', 'color', e.errorColor) : e.isSiteLoaded && t.setAttribute('material', 'color', e.loadedColor)) : (t.setAttribute('material', 'color', e.loadingColor), e.isLoadingSite && (t.setAttribute('animation__opacity', 'dur', 500), t.setAttribute('animation__scale', 'dur', 500)), void t.emit('startloadingringanimation'))
        }
    })
}, function() {
    AFRAME.registerComponent('loading-screen', {
        play: function() {
            var e;
            e = document.getElementById('loadingIndicatorContainer'), e.parentNode.removeChild(e)
        }
    })
}, function() {
    AFRAME.registerComponent('logo', {
        init: function() {
            var e = this.el,
                t = this.data;
            e.sceneEl.addEventListener('navigate', () => {
                e.emit('navigate', null, !1)
            }), e.sceneEl.addEventListener('contentPageLoaded', () => {
                e.emit('stopnavigate'), e.setAttribute('material', 'opacity', 1)
            }), e.sceneEl.addEventListener('cancelloading', () => {
                e.emit('stopnavigate'), e.setAttribute('material', 'opacity', 1)
            })
        }
    })
}, function() {
    AFRAME.registerComponent('navigate', {
        schema: {
            on: {
                default: 'click'
            },
            url: {
                type: 'string'
            },
            siteId: {
                type: 'string'
            }
        },
        play: function() {
            var e = this.el,
                t, a, o;
            for (this.eventDetail = {}, this.postMessageData = {
                    action: 'navigateCommand'
                }, this.visitedLinks = JSON.parse(localStorage.getItem('visitedLinks')), null === this.visitedLinks && (this.visitedLinks = {}), a = document.querySelectorAll('.link'), t = 0; t < a.length; t++) o = a[t].getAttribute('data-url'), a[t].setAttribute('superlink', 'isVisited', void 0 !== this.visitedLinks[o]);
            e.addEventListener(this.data.on, () => {
                var t;
                this.eventDetail.url = this.data.url, this.postMessageData.url = this.data.url, e.sceneEl.emit('navigate', this.eventDetail), window.postMessage(this.postMessageData, '*'), document.getElementById(`link-${this.data.siteId}`).setAttribute('superlink', 'isVisited', !0), t = '' + this.data.url, this.visitedLinks[t] === void 0 && (this.visitedLinks[t] = 0), this.visitedLinks[t]++, window.localStorage.setItem('visitedLinks', JSON.stringify(this.visitedLinks))
            })
        }
    })
}, function() {
    var e = {
        error: '#ca2242',
        info: '#111',
        success: '#3772ff'
    };
    AFRAME.registerComponent('notification', {
        schema: {
            message: {
                type: 'string'
            },
            type: {
                type: 'string'
            }
        },
        init: function() {
            this.hideNotification = this.hideNotification.bind(this), this.textEl = this.el.children[0], this.bgEl = this.el.children[1]
        },
        update: function() {
            var t = this.data,
                a = this.el;
            t.message && ('error' === t.type && AFRAME.utils.device.checkHeadsetConnected() && gtag('event', 'notificationerror', {
                event_label: a.sceneEl.systems.state.state.site.url
            }), this.textEl.setAttribute('text', 'value', t.message), this.bgEl.setAttribute('slice9', 'color', e[t.type || 'info']), a.emit('notificationreceived'), setTimeout(this.hideNotification, 2e4))
        },
        hideNotification: function() {
            this.el.emit('notificationhide')
        }
    })
}, function(e, t, a) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
        value: !0
    });
    var o = a(1),
        r = a.n(o),
        n = r.a.FEED.length;
    AFRAME.registerComponent('pagination-dots', {
        schema: {
            currentPage: {
                default: 0
            },
            margin: {
                default: 0.05
            }
        },
        init: function() {
            var e = this.el,
                t, a;
            for (a = 0; a < n; a++) t = document.createElement('a-entity'), t.setAttribute('mixin', 'paginationDot'), e.appendChild(t)
        },
        update: function() {
            var e = this.data,
                t = this.el,
                a, o, r;
            for (o = t.children, r = 0; r < o.length; r++) a = r === e.currentPage, o[r].setAttribute('material', {
                color: a ? '#82F2E7' : '#222',
                opacity: a ? 0.8 : 0.2
            })
        },
        play: function() {
            var e = this.el.children,
                t;
            for (t = 0; t < e.length; t++) e[t].object3D.position.x = -1 * (this.data.margin * (e.length - 1) / 2) + t * this.data.margin
        }
    })
}, function() {
    AFRAME.registerComponent('paginator', {
        schema: {
            currentPage: {
                default: 0
            },
            direction: {
                type: 'string'
            },
            hasLeft: {
                default: !0
            },
            hasRight: {
                default: !0
            },
            target: {
                default: ''
            }
        },
        init: function() {
            var e = this.el,
                t = this.data;
            e.addEventListener('mouseenter', () => {
                this.isActive() && (this.isHovered = !0, e.emit('paginatorenter', null, !1))
            }), e.addEventListener('mouseleave', () => {
                this.isActive() && (this.isHovered = !1, e.emit('paginatorleave', null, !1))
            }), e.addEventListener('click', () => {
                this.target.hasAttribute('data-is-scrolling') || ('left' === t.direction ? (this.target.setAttribute('data-is-scrolling', ''), e.sceneEl.emit('pageleft')) : (this.target.setAttribute('data-is-scrolling', ''), e.sceneEl.emit('pageright')))
            })
        },
        update: function(e) {
            var t = this.el,
                a = this.data;
            this.target = document.getElementById(a.target || 'feed'), this.el.getObject3D('mesh') ? this.updateOpacity() : this.el.addEventListener('object3dset', () => {
                this.updateOpacity()
            }), e && e.currentPage !== a.currentPage && this.isHovered && !this.isActive() && t.emit('paginatorleave', null, !1)
        },
        isActive: function() {
            var e = this.data;
            return 'left' === e.direction && e.hasLeft || 'right' === e.direction && e.hasRight
        },
        updateOpacity: function() {
            var e = this.el,
                t = this.data,
                a;
            a = this.isActive(), setTimeout(() => {
                a && 0 === e.getObject3D('mesh').material.opacity && e.emit('fadein', null, !1), !a && 0 < e.getObject3D('mesh').material.opacity && e.emit('fadeout', null, !1)
            }, 100)
        }
    })
}, function() {
    AFRAME.registerComponent('play-audio', {
        schema: {
            audio: {
                type: 'string'
            },
            event: {
                type: 'string'
            },
            volume: {
                type: 'number',
                default: 1
            }
        },
        multiple: !0,
        init: function() {
            var e;
            e = document.querySelector(this.data.audio), e.volume = this.data.volume, this.el.addEventListener(this.data.event, (t) => {
                'mouseenter' === this.data.event && t.target.classList.contains('linkHighlight') || (!e.paused && (e.pause(), e.currentTime = 0), e.play())
            })
        }
    })
}, function() {
    AFRAME.registerComponent('post-message-receiver', {
        init: function() {
            window.addEventListener('message', (e) => {
                e.data.action && (e.data.version && (this.el.emit('version', e.data.displayVersion), document.querySelector('.version').innerHTML = `Supermedium v${e.data.displayVersion}`), !1, this.el.emit(e.data.action, e.data, !1))
            })
        }
    })
}, function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
        value: !0
    }), t['default'] = {
        default: {},
        parse: function(e) {
            return e ? 'string' == typeof e ? (e = e.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": '), JSON.parse(e)) : e : null
        },
        stringify: JSON.stringify
    }
}, function() {
    AFRAME.registerComponent('raycastable', {})
}, function() {
    AFRAME.registerComponent('recenter', {
        schema: {
            target: {
                default: ''
            }
        },
        init: function() {
            var e = this.el.sceneEl;
            this.matrix = new THREE.Matrix4, this.frustum = new THREE.Frustum, this.rotationOffset = 0, this.euler = new THREE.Euler, this.euler.order = 'YXZ', this.menuPosition = new THREE.Vector3, this.recenter = this.recenter.bind(this), this.checkInViewAfterRecenter = this.checkInViewAfterRecenter.bind(this), this.target = document.querySelector(this.data.target), e.addEventListener('enter-vr', () => setTimeout(this.recenter, 100)), e.addEventListener('menudown', this.recenter), e.addEventListener('thumbstickdown', this.recenter), window.addEventListener('vrdisplaypresentchange', this.recenter)
        },
        recenter: function() {
            var e = this.euler;
            e.setFromRotationMatrix(this.el.sceneEl.camera.el.object3D.matrixWorld, 'YXZ'), this.el.object3D.rotation.y = e.y + this.rotationOffset, setTimeout(this.checkInViewAfterRecenter, 0)
        },
        checkInViewAfterRecenter: function() {
            var e = new THREE.Vector3,
                t = new THREE.Vector3;
            return function() {
                var a = this.el.sceneEl.camera,
                    o = this.frustum,
                    r = this.menuPosition;
                a.updateMatrix(), a.updateMatrixWorld(), o.setFromMatrix(this.matrix.multiplyMatrices(a.projectionMatrix, a.matrixWorldInverse)), r.setFromMatrixPosition(this.target.object3D.matrixWorld), e.copy(r).y -= 3, t.copy(r).y += 3;
                o.containsPoint(r) || o.containsPoint(e) || o.containsPoint(t) || (this.rotationOffset = 0 === this.rotationOffset ? Math.PI : 0, this.recenter())
            }
        }(),
        remove: function() {
            this.el.sceneEl.removeEventListener('enter-vr', this.recenter)
        }
    })
}, function() {
    AFRAME.registerComponent('refresh', {
        init: function() {
            var e = this.el;
            e.addEventListener('click', () => {
                e.sceneEl.emit('refresh'), window.postMessage({
                    action: 'refreshCommand'
                }, '*')
            })
        }
    })
}, function() {
    AFRAME.registerComponent('screen-manager', {
        schema: {
            screen: {
                type: 'string'
            }
        },
        init: function() {
            var e;
            this.mask = document.getElementById('screenMask'), this.screens = {}, this.screenHistory = this.el.systems.state.state.screenHistory, this.prevScreen = '', this.prevScreenHistoryLength = 0, e = document.createElement('a-mixin'), e.setAttribute('id', 'screen'), e.setAttribute('animation__screenmanager', 'property: object3D.position.z; dur: 200; easing: easeInOutCubic; delay: 50; startEvents: screenmanager'), this.el.querySelector('a-assets').appendChild(e), this.mixin = e
        },
        update: function(e) {
            var t = this.el,
                a = this.data;
            'screen' in e && (!e.screen && a.screen && this.mask.emit('fadein'), e.screen && !a.screen && this.mask.emit('fadeout'), this.screenHistory.length > this.prevScreenHistoryLength ? this.handlePush() : this.handlePop(), this.storePreviousScreen())
        },
        handlePush: function() {
            var e = this.screens,
                t = this.screenHistory,
                a;
            a = 1 === t.length ? 'main' : t[t.length - 2], e[a].setAttribute('animation__screenmanager', 'to', -0.4 * t.length), e[a].emit('screenmanager', null, !1)
        },
        handlePop: function() {
            var e = this.screens,
                t = this.screenHistory,
                a;
            a = 0 === t.length ? 'main' : t[t.length - 1], e[a].setAttribute('animation__screenmanager', 'to', 0), e[a].emit('screenmanager', null, !1), this.prevScreen && this.el.emit(`screenpop-${this.prevScreen}`)
        },
        storePreviousScreen: function() {
            var e = this.screenHistory;
            this.prevScreen = e[e.length - 1] || '', this.prevScreenHistoryLength = e.length
        },
        registerScreen: function(e, t) {
            this.screens[t] = e, setTimeout(() => {
                e.setAttribute('mixin', (e.getAttribute('mixin') || '') + ' screen')
            })
        }
    }), AFRAME.registerComponent('screen', {
        schema: {
            name: {
                type: 'string'
            }
        },
        play: function() {
            var e = this.el;
            e.sceneEl.components['screen-manager'].registerScreen(e, this.data.name)
        }
    })
}, function(e, t, a) {
    function o(e, t) {
        var a, o, r, s, l, d;
        for (r = 0; 6 > r; r++) {
            if (o = t[r], s = e.children[r], !o) {
                s.object3D.visible = !1;
                continue
            }
            s.object3D.visible = !0, Object.assign(s.dataset, o), l = n.truncate(o.title, 25), s.querySelector('.searchResultTitle').setAttribute('text', 'value', l), a = n.truncate(o.author, 35), s.querySelector('.searchResultAuthor').setAttribute('text', 'value', a), d = n.truncate(o.url, 35, !0), s.querySelector('.searchResultUrl').setAttribute('text', 'value', d)
        }
    }
    var r = a(29),
        n = a(7),
        s = r('QULTOY3ZWU', '4ac532d3ddfcadcecd3954894051527e'),
        l = s.initIndex('sites');
    AFRAME.registerComponent('search-input', {
        init: function() {
            var e = this.el;
            this.eventDetail = {
                results: []
            }, this.query = {}, e.addEventListener('change', (e) => {
                this.search(e.detail)
            })
        },
        search: function(e) {
            this.query.query = e, l.search(this.query, (e, t) => {
                t && (this.eventDetail.hits = t.hits, this.el.sceneEl.emit('searchresults', this.eventDetail), 4 < this.query.length && gtag('event', 'search', {
                    value: this.query
                }))
            })
        }
    }), AFRAME.registerComponent('search-result', {
        init: function() {
            var e = this.el;
            e.addEventListener('click', () => {
                e.object3D.visible && e.sceneEl.emit('linkdetailopensearch', e.dataset)
            })
        }
    }), AFRAME.registerComponent('search-result-list', {
        schema: {
            isSearching: {
                default: !1
            }
        },
        init: function() {
            var e = this.el;
            this.hits = null, e.sceneEl.addEventListener('searchresults', (t) => {
                this.hits = t.detail.hits, e.object3D.visible = this.data.isSearching && !!this.hits.length, o(e, this.hits)
            })
        },
        update: function() {
            this.data.isSearching ? this.hits && this.hits.length && (this.el.object3D.visible = !0) : this.el.object3D.visible = !1
        }
    })
}, function() {
    AFRAME.registerComponent('sub-object', {
        schema: {
            from: {
                default: '',
                type: 'selector'
            },
            name: {
                default: ''
            }
        },
        init: function() {
            var e = this.data;
            e.from.getObject3D('mesh') ? this.loadSubObject(e.from.getObject3D('mesh')) : e.from.addEventListener('model-loaded', (e) => {
                this.loadSubObject(e.detail.model)
            })
        },
        loadSubObject: function(e) {
            var t = this.data,
                a = this.el,
                o;
            o = e.getObjectByName(t.name), a.setObject3D('mesh', o.clone()), a.emit('subobjectloaded')
        }
    })
}, function() {
    var e, t, a;
    document.addEventListener('DOMContentLoaded', () => {
        e = document.getElementById('linkTitleLogoTemplate').innerHTML, t = document.getElementById('linkTitleTextTemplate').innerHTML, a = document.getElementById('linkTitleSupercraftTemplate').innerHTML
    }), AFRAME.registerComponent('superlink', {
        schema: {
            enabled: {
                default: !1
            },
            isActive: {
                default: !1
            },
            isLeftPaginator: {
                default: !1
            },
            isLoadingSite: {
                default: !1
            },
            isRightPaginator: {
                default: !1
            },
            isSupercraft: {
                default: !1
            },
            isVisited: {
                default: !1
            },
            logo: {
                default: ''
            },
            siteId: {
                default: ''
            },
            title: {
                default: ''
            },
            titleText: {
                default: ''
            }
        },
        init: function() {
            var e = this.el;
            this.eventDetail = {
                siteId: this.data.siteId
            }, this.isHovered = !1, this.linkAnimationContainer = e.querySelector('.linkAnimationContainer'), this.linkContainer = e.parentNode, this.linkImage = e.querySelector('.linkImage'), this.linkVisited = this.el.querySelector('.linkVisited'), this.raycastTarget = e.querySelector('.linkRaycastTarget'), e.addEventListener('mouseenter', this.onMouseEnter.bind(this)), e.addEventListener('mouseleave', this.onMouseLeave.bind(this)), e.addEventListener('click', this.onClick.bind(this)), e.sceneEl.addEventListener('pageleft', this.onPageTurn.bind(this)), e.sceneEl.addEventListener('pageright', this.onPageTurn.bind(this)), this.renderTitle()
        },
        update: function() {
            var e = this.el,
                t = this.data;
            this.linkVisited.object3D.visible = !this.data.isVisited, (t.isActive || t.isLeftPaginator || t.isRightPaginator) && (e.object3D.visible = !0), setTimeout(() => {
                var t = this.data,
                    a;
                a = t.isActive || t.isLeftPaginator || t.isRightPaginator;
                a || (e.object3D.visible = !1)
            }, 500)
        },
        renderTitle: function() {
            var o = this.data,
                r = this.el,
                n, s;
            s = o.isSupercraft ? a : o.logo ? e : t, n = r.querySelector('.linkTitle'), n.appendChild(r.sceneEl.systems.state.renderTemplate(s, o)), 'true' === r.dataset.isUserSite && r.querySelector('.linkImage').setAttribute('material', 'src', '/superassets/site/devlink.jpg')
        },
        onClick: function() {
            var e = this.data,
                t = this.el;
            !e.enabled || e.isLoadingSite || t.sceneEl.emit('linkdetailopen', this.eventDetail)
        },
        onMouseEnter: function() {
            var e = this.data,
                t = this.el,
                a, o;
            if (e.enabled && !e.isLoadingSite && !this.linkContainer.hasAttribute('data-is-scrolling')) {
                for (this.isHovered = !0, a = this.linkAnimationContainer.querySelectorAll('[animation__linkhoverstart]'), o = 0; o < a.length; o++) a[o].emit('linkhoverstart', null, !1);
                this.linkAnimationContainer.emit('linkhoverstart', null, !1)
            }
        },
        onMouseLeave: function() {
            var e = this.data,
                t = this.el,
                a, o;
            if (this.isHovered && !this.linkContainer.hasAttribute('data-is-scrolling')) {
                for (this.isHovered = !1, a = this.linkAnimationContainer.querySelectorAll('[animation__linkhoverend]'), o = 0; o < a.length; o++) a[o].emit('linkhoverend', null, !1);
                this.linkAnimationContainer.emit('linkhoverend', null, !1)
            }
        },
        onPageTurn: function() {
            var e = this.data,
                t = this.el,
                a;
            if (e.isActive && this.isHovered) {
                for (a = this.linkAnimationContainer.querySelectorAll('[animation__linkhoverend]'), i = 0; i < a.length; i++) a[i].emit('linkhoverend', null, !1);
                this.linkAnimationContainer.emit('linkhoverend', null, !1)
            }
        }
    })
}, function() {
    AFRAME.registerComponent('tab-switch-fade', {
        init: function() {
            window.addEventListener('message', (e) => {
                'preSwitchToContent' === e.data.action && this.el.emit('fadeout'), 'switchToLobby' === e.data.action && this.el.emit('fadein')
            })
        }
    })
}, function() {
    AFRAME.registerComponent('thumb-paginator', {
        dependencies: ['tracked-controls'],
        schema: {
            enabled: {
                default: !0
            }
        },
        init: function() {
            var e = this.el;
            this.lastTime = void 0, this.onViveTrackpadDown = this.onViveTrackpadDown.bind(this), e.addEventListener('controllerconnected', (t) => {
                'vive-controls' === t.detail.name ? e.addEventListener('trackpaddown', this.onViveTrackpadDown) : (this.tick = this.thumbstickTick, this.el.sceneEl.addBehavior(this))
            })
        },
        onViveTrackpadDown: function() {
            var e = this.el,
                t;
            t = e.components['tracked-controls'].axis[0], -0.5 >= t && e.sceneEl.emit('pageleft'), 0.5 <= t && e.sceneEl.emit('pageright')
        },
        thumbstickTick: function(e) {
            var t = this.el,
                a;
            this.lastTime && e < this.lastTime + 500 || !this.data.enabled || (a = t.components['tracked-controls'].axis[0], -0.5 >= a && (t.sceneEl.emit('pageleft'), this.lastTime = e), 0.5 <= a && (t.sceneEl.emit('pageright'), this.lastTime = e))
        }
    })
}, function() {
    AFRAME.registerComponent('tutorial-modal-image', {
        schema: {
            headset: {
                type: 'string'
            }
        },
        update: function() {
            var e = this.el,
                t = this.data,
                a;
            a = t.headset || 'vive', 'windows' === a && (a = 'oculus'), e.setAttribute('material', 'src', `assets/img/${a}-back.png`), 'oculus' === a ? e.object3D.position.set(0.157, 0.025, 0) : e.object3D.position.set(0.202, 0.023, 0)
        }
    })
}, function() {
    AFRAME.registerComponent('tutorial-modal', {
        schema: {
            tutorialModalOpen: {
                default: !1
            }
        },
        update: function(e) {
            return this.data.tutorialModalOpen ? void this.el.emit('tutorialmodalopen') : void(e.tutorialModalOpen && !this.data.tutorialModalOpen && this.el.emit('tutorialmodalclose'))
        }
    })
}, function() {
    AFRAME.registerComponent('visible-delay', {
        schema: {
            type: 'boolean'
        },
        update: function() {
            this.data ? setTimeout(() => {
                this.el.object3D.visible = !0
            }, 200) : this.el.object3D.visible = !1
        }
    })
}, function() {
    AFRAME.registerComponent('visible-fade', {
        schema: {
            delay: {
                type: 'number',
                default: 0
            },
            dur: {
                type: 'number',
                default: 150
            },
            property: {
                default: 'material.opacity'
            },
            visible: {
                default: !0
            }
        },
        init: function() {
            var e = this.data,
                t = this.el;
            t.setAttribute('animation__visiblefadein', {
                property: e.property,
                delay: e.delay,
                dur: e.dur,
                from: '0.0',
                easing: 'linear',
                startEvents: ['visiblefadein'],
                to: '1.0'
            }), t.setAttribute('animation__visiblefadeout', {
                property: e.property,
                delay: e.delay,
                dur: e.dur,
                easing: 'linear',
                from: '1',
                startEvents: ['visiblefadeout'],
                to: '0'
            })
        },
        update: function(e) {
            var t = this.data;
            !e.visible && t.visible && this.emitWithTextCheck('visiblefadein'), e.visible && !t.visible && this.emitWithTextCheck('visiblefadeout')
        },
        emitWithTextCheck: function(e) {
            var t = this.el,
                a = this.data;
            return 'text.opacity' !== a.property || t.components.text.texture.image ? void t.emit(e, null, !1) : void t.addEventListener('textfontset', () => {
                t.emit(e, null, !1)
            })
        }
    })
}, function(e, t, a) {
    function o(e) {
        e.keys().forEach(e)
    }

    function r() {
        var e, t;
        t = a(1).SITES, e = Object.keys(t).map((e) => t[e]), window.postMessage({
            action: 'provideData',
            siteData: e,
            wildSiteData: a(21),
            highPerformance: window.highPerformance
        }, '*')
    }
    window.$ = (e) => document.querySelector(e), window.$$ = (e) => document.querySelectorAll(e), window.highPerformance = !1, a(13), a(14), a(15), a(16), a(17), a(18), a(19), a(20), window.AFRAME.ASSETS_PATH = 'assets', a(22), a(23), o(a(24)), o(a(26)), a(25), window.addEventListener('load', r), window.addEventListener('developerurlupdated', r), navigator.serviceWorker.register('serviceWorker.js')
}, function(e, t, a) {
    'use strict';

    function o(e) {
        e.site.titleText = y.a.truncate(e.site.title, 55), e.site.urlText = y.a.truncate(e.site.url, 65), -1 !== e.site.url.indexOf('gunters-of-oasis') && (e.site.urlText = 'supermedium.com | Gunters of OASIS'), -1 !== e.linkDetail.url.indexOf('gunters-of-oasis') && (e.linkDetail.urlText = 'supermedium.com | Gunters of OASIS')
    }

    function r(e) {
        e.loadingText = `Loading ${e.site.title}...`, e.loadingUrl = e.linkDetail.url, 'oculus' === e.headset || 'windows' === e.headset ? (e.loadingReturnText = 'HOLD DOWN the THUMBSTICK any time to return home.', e.tooltipReturnText = 'From a site,\nHOLD DOWN the\nTHUMBSTICK\nto return home', e.tutorialImage = 'assets/img/oculus-back.png') : (e.loadingReturnText = 'HOLD DOWN the MENU BUTTON any time to return home.', e.tooltipReturnText = 'From a site,\nHOLD DOWN the\nMENU BUTTON\nto return home', e.tutorialImage = 'assets/img/vive-back.png')
    }

    function n(e, t) {
        e.linkDetail.author = t.author, e.linkDetail.description = t.description, e.linkDetail.image = `#siteImg-${t.id}`, e.linkDetail.isSupercraft = !!t.isSupercraft, e.linkDetail.logo = t.logo ? `#siteLogo-${t.id}` : '', e.linkDetail.siteId = t.id, e.linkDetail.title = t.title, e.linkDetail.titleText = y.a.truncate(t.title, 22), t.isSupercraft && (e.linkDetail.description = `"${t.title}", built with Supercraft.`), e.linkDetail.url = e.developerUrl && 'developer' === e.linkDetail.siteId ? e.developerUrl : t.url
    }

    function s(e, t) {
        e.linkDetail.urlText = y.a.truncate(t.url, 40, !0), t.description && (t.description = t.description.replace(/^\n|\n$/g, '')), e.linkDetail.description = y.a.truncate(e.linkDetail.description, 130), e.linkDetail.author = y.a.truncate(e.linkDetail.author, 40)
    }

    function l(e, t) {
        e.screen === t || (e.screenHistory.push(t), e.screen = t)
    }

    function d(e) {
        var t;
        return t = e.screenHistory.pop(), 0 === e.screenHistory.length ? void(e.screen = '') : void(e.screen = e.screenHistory[e.screenHistory.length - 1])
    }

    function c(e, t) {
        e.author = 'N/A', e.description = 'A site you added!', e.id = `userSite${t}`, e.isUserSite = !0, e.titleText = y.a.truncate(e.title, 25), h.a.SITES[e.id] = e
    }

    function u(e, t) {
        var a, o;
        if (e.activeCollection.length = 0, e.activeCollection.__dirty = !0, e.userCollectionActive = t === k, a = h.a.COLLECTIONS[t], e.activeCollectionId = a.id, e.activeCollectionDescription = a.description, e.activeCollectionTitle = a.title, t === k) {
            for (o = 0; o < e.userCollection.length; o++) e.activeCollection.push(e.userCollection[o]);
            return
        }
        for (o = 0; o < a.sites.length; o++) e.activeCollection.push(h.a.SITES[a.sites[o]])
    }

    function p(e) {
        return 'search' === e.screen ? (e.page.hasLeft = !1, void(e.page.hasRight = !1)) : 'collection' === e.screen ? (e.page.hasLeft = 0 !== e.page.collection, void(e.page.hasRight = 6 < e.activeCollection.length && e.page.collection < m(e) - 1)) : void(e.page.hasLeft = -1 !== e.page.feed, e.page.hasRight = e.page.feed < f - 1)
    }

    function m(e) {
        return 'collection' === e.screen ? Math.ceil(e.activeCollection.length / 6) : f
    }
    Object.defineProperty(t, '__esModule', {
        value: !0
    });
    var g = a(1),
        h = a.n(g),
        b = a(7),
        y = a.n(b),
        f = h.a.FEED.length;
    Object.keys(h.a.SITES).forEach((e) => {
        h.a.SITES[e].isUserSite = !1
    });
    var v = JSON.parse(localStorage.getItem('userCollection') || '[]');
    v.forEach(c);
    var k = 'usercollection';
    AFRAME.registerState({
        initialState: {
            activeCollection: [],
            activeCollectionDescription: '',
            activeCollectionId: '',
            activeCollectionTitle: '',
            controller: '',
            hasError: !1,
            headset: '',
            highPerformance: window.highPerformance,
            isLoadingSite: !1,
            isSiteEnterable: !1,
            isSiteLoaded: !1,
            isSiteLoadedWithoutError: !1,
            linkDetail: {
                author: '',
                description: '',
                image: '#noURL',
                isSupercraft: !1,
                title: '',
                titleText: '',
                siteId: '',
                url: '',
                urlText: ''
            },
            loadingText: '',
            loadingUrl: '',
            loadingReturnText: '',
            tooltipReturnText: '',
            notificationMessage: '',
            notificationType: '',
            page: {
                collection: 0,
                feed: 0,
                hasLeft: !0,
                hasRight: !0
            },
            screen: '',
            screenHistory: [],
            site: {
                image: '#noURL',
                title: '',
                titleText: '',
                url: '',
                urlText: 'Select a site to load'
            },
            switchedToLobby: !1,
            tutorialImage: '',
            urlBarActive: !1,
            userCollection: v,
            userCollectionActive: !1,
            version: 0
        },
        handlers: {
            cancelloading: function(e) {
                e.hasError = !1, e.isLoadingSite = !1, e.site.url = '', d(e)
            },
            collectionopen: function(e) {
                e.page.collection = 0, l(e, 'collection'), p(e), gtag('event', 'collectionopen', {
                    value: e.activeCollectionId
                })
            },
            collectionset: function(e, t) {
                u(e, t.collectionId)
            },
            contentPageReady: function(e) {
                e.hasError = !1, e.isLoadingSite = !1, d(e)
            },
            contentPageLoaded: function(e, t) {
                e.site.title = t.title, e.site.url = t.url
            },
            controllerconnected: function(e, t) {
                e.controller = t.name, e.headset = t.name.split('-')[0], gtag('event', 'controllerconnected', {
                    value: t.name
                }), JSON.parse(localStorage.getItem('hasSeenTutorialModal')) || l(e, 'tutorialmodal')
            },
            dismisstutorialmodal: function(e) {
                localStorage.setItem('hasSeenTutorialModal', !0), d(e)
            },
            historyStateUpdated: function(e, t) {
                e.site.url = t.url
            },
            linkdetailopen: function(e, t) {
                var a;
                a = h.a.SITES[t.siteId], n(e, a), s(e, a), gtag('event', 'linkdetailopen', {
                    value: e.linkDetail.url
                }), l(e, 'linkdetail')
            },
            linkdetailopensearch: function(e, t) {
                Object.assign(e.linkDetail, t), e.linkDetail.logo = '', s(e, t), l(e, 'linkdetail')
            },
            navigate: function(e) {
                e.isLoadingSite = !0, 'linkdetail' === e.screen && (e.site.image = e.linkDetail.image, e.site.title = e.linkDetail.title, e.site.url = e.linkDetail.url), e.hasError = !1, e.notificationMessage = '', e.notificationType = '', e.switchedToLobby = !1, gtag('event', 'navigatefeaturedlink', {
                    value: e.site.url
                })
            },
            notificationError: function(e) {
                e.hasError = !0, e.notificationMessage = 'This site is taking time to load. Wait a bit then and click the image on the URL bar to re-enter the site.', e.notificationType = 'error', gtag('event', 'notificationerror', {
                    value: e.site.url
                })
            },
            pageleft: function(e) {
                var t = 'collection' === e.screen ? 'collection' : 'feed';
                ('collection' != e.screen || 0 !== e.page.collection) && (e.screen || -1 !== e.page.feed) && (e.page[t]--, p(e), gtag('event', 'featuredpageleft'))
            },
            pageright: function(e) {
                var t = 'collection' === e.screen ? 'collection' : 'feed';
                e.page[t] >= m(e) - 1 || (e.page[t]++, p(e), gtag('event', 'featuredpageright'))
            },
            pageset: function(e, t) {
                var a = 'collection' === e.screen ? 'collection' : 'feed';
                0 > t || t >= m(e) || (e.page[a] = t)
            },
            preSwitchToContent: function(e) {
                e.isSiteLoading = !1
            },
            refresh: function(e) {
                e.isLoadingSite = !0, gtag('event', 'refresh')
            },
            screenpop: function(e) {
                d(e)
            },
            "screenpop-collection": function(e) {
                e.page.collection = 0, p(e)
            },
            "screenpop-linkdetail": function(e) {
                gtag('event', 'linkdetailclose', {
                    value: e.linkDetail.url
                }), e.isLoadingSite || (e.linkDetail.image = '#noURL')
            },
            searchblur: function(e) {
                d(e), p(e)
            },
            searchfocus: function(e) {
                gtag('event', 'startsearch'), l(e, 'search'), p(e)
            },
            switchToLobby: function(e, t) {
                t && t.tabScreenshot && (e.site.image = `url(${t.tabScreenshot})`), e.switchedToLobby = !0, gtag('event', 'switchtolobby')
            },
            usercollectionadd: function(e, t) {
                c(t, e.userCollection.length), e.userCollection.push(t), localStorage.setItem('userCollection', JSON.stringify(e.userCollection)), gtag('event', 'usercollectionadd'), u(e, k), e.page.feed = -1
            },
            usercollectionremove: function(e, t) {
                e.userCollection.splice(t.index, 1), localStorage.setItem('userCollection', JSON.stringify(e.userCollection)), u(e, k)
            },
            usercollectionupdatetitle: function(e, t) {
                e.userCollection[t.index].title = t.title, e.userCollection.__dirty = !0, e.userCollectionActive && (e.activeCollection.__dirty = !0)
            },
            version: function(e, t) {
                e.version = parseFloat(t, 10)
            }
        },
        computeState: function(e) {
            e.isSiteLoaded = !!e.site.url && !e.isLoadingSite && !e.site.url.endsWith('blank.html'), e.urlBarActive = e.isSiteLoaded && !e.screen && !e.isLoadingSite, o(e), r(e)
        }
    })
}, function(e, t, a) {
    t = e.exports = a(99)(void 0), t.push([e.i, 'html,\nbody {\n  background: #2b2b2b;\n  font: 16px \'Source Sans Pro\', sans-serif;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.a-enter-vr-button {\n  display: none !important;\n}\n.panelContainer h1,\n.panelContainer h2,\n.panelContainer h3 {\n  color: #71fce7;\n  font-family: \'Sanchez\';\n}\n.panelContainer h2 {\n  font-size: 30px;\n}\n.panelContainer h3 {\n  font-size: 20px;\n  font-weight: normal;\n}\n.panelContainer ul {\n  padding-left: 15px;\n}\n.panelContainer a {\n  color: #fd78b7;\n  -webkit-transition: color 0.1s;\n  transition: color 0.1s;\n}\n.panelContainer a:hover {\n  color: #fd93c5;\n}\n.panelContainer .button {\n  background: #71fce7;\n  border: none;\n  border-radius: 8px;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font: 15px \'Source Sans Pro\', sans-serif;\n  font-weight: bold;\n  color: #4f4e4d;\n  cursor: pointer;\n  margin: 10px 0;\n  padding: 8px 0;\n  position: relative;\n  -webkit-transition: background-color 0.1s;\n  transition: background-color 0.1s;\n  width: 100%;\n}\n.panelContainer .button:hover {\n  background: #4dfbe1;\n}\n.panelContainer .button .buttonLoadingText {\n  display: none;\n}\n.panelContainer .button.buttonLoading {\n  background: #343434;\n  color: #aaa;\n  pointer-events: none;\n}\n.panelContainer .button.buttonLoading:before {\n  display: inline-block;\n}\n.panelContainer .button.buttonLoading .buttonText {\n  display: none;\n}\n.panelContainer .button.buttonLoading .buttonLoadingText {\n  display: inline-block;\n}\n.panelContainer .button:before {\n  -webkit-animation: loadingIndicator 1.4s infinite ease-in-out;\n          animation: loadingIndicator 1.4s infinite ease-in-out;\n  background-image: \'assets/img/logo-border.png\';\n  background-size: 20px 20px;\n  content: \'\';\n  display: none;\n  left: 12px;\n  position: absolute;\n  height: 20px;\n  top: 8px;\n  width: 20px;\n}\n.panelContainer .panelOptionContainer {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.panel,\n.panelSection {\n  border: 3px solid;\n  -o-border-image: linear-gradient(to bottom, #fd78b7, #71fce7) 1 100%;\n     border-image: -webkit-gradient(linear, left top, left bottom, from(#fd78b7), to(#71fce7)) 1 100%;\n     border-image: linear-gradient(to bottom, #fd78b7, #71fce7) 1 100%;\n  height: 100%;\n  opacity: 0.95;\n  padding: 10px 5px;\n  position: fixed;\n}\n.panelSection > :last-child {\n  padding-bottom: 30px;\n}\n.panel {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #333;\n  color: #fafafa;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  font-weight: bold;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 72px;\n  z-index: 999999999999;\n}\n.panel .logo {\n  margin-top: 15px;\n  margin-bottom: 30px;\n  height: 48px;\n  width: 48px;\n}\n.panelOption {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #7d7d7d;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 13px;\n  font-weight: bold;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 30px;\n  margin-top: 0px;\n}\n.panelOption:hover {\n  color: #fafafa;\n}\n.panelOption.panelOptionActive {\n  color: #71fce7;\n}\n.panelOption svg {\n  fill: #4b4b4b;\n  height: 40px;\n  margin-bottom: 2px;\n  width: 40px;\n}\n.panelOption:hover svg,\n.panelOption.panelOptionActive svg {\n  fill: url("#svggrad");\n}\n.panelSection {\n  background: #4b4b4b;\n  color: #ddd;\n  overflow: auto;\n  padding-left: 107px;\n  padding-right: 25px;\n  -webkit-transition: -webkit-transform 0.2s;\n  transition: -webkit-transform 0.2s;\n  transition: transform 0.2s;\n  transition: transform 0.2s, -webkit-transform 0.2s;\n  z-index: 99998;\n}\n.panelSection.panelSectionSites {\n  -webkit-transform: translate3d(-482px, 0, 0);\n          transform: translate3d(-482px, 0, 0);\n  width: 350px;\n}\n.panelSection.panelSectionSites.panelSectionActive {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n.panelSection.panelSectionSites input[type="text"] {\n  background: #363636;\n  border: none;\n  border-radius: 10px;\n  color: #ccc;\n  font-size: 13px;\n  margin-bottom: 0;\n  padding: 8px 13px;\n  width: 100%;\n  font-weight: bold;\n}\n.siteDelete {\n  bottom: 5px;\n  font-size: 30px;\n  position: relative;\n  text-decoration: none;\n}\n.panelSection.panelSectionNews {\n  -webkit-transform: translate3d(-412px, 0, 0);\n          transform: translate3d(-412px, 0, 0);\n  width: 280px;\n}\n.panelSection.panelSectionNews ul {\n  list-style: disc;\n  padding-left: 15px;\n}\n.panelSection.panelSectionNews li {\n  margin-bottom: 10px;\n}\n.panelSection.panelSectionNews.panelSectionActive {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n.panelSection.panelSectionHelp {\n  -webkit-transform: translate3d(-412px, 0, 0);\n          transform: translate3d(-412px, 0, 0);\n  width: 280px;\n}\n.panelSection.panelSectionHelp.panelSectionActive {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n.panelContainer .siteContainer {\n  padding-bottom: 40px;\n  padding-left: 0;\n  width: 100%;\n}\n.site {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #404040;\n  border-radius: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 8px;\n  padding-right: 10px;\n  margin: 10px 0;\n  -webkit-transition: color 0.1s;\n  transition: color 0.1s;\n}\n.site img {\n  margin-right: 10px;\n  height: 32px;\n  width: 32px;\n}\n.site p {\n  margin: 0;\n  font-size: 13px;\n  line-height: 18px;\n}\n.site p:first-child {\n  font-size: 20px;\n  font-weight: bold;\n}\n.site .siteData {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  max-width: 100%;\n}\n.aframe-inspector-opened .panelContainer {\n  display: none;\n}\n#svgGradient {\n  height: 0;\n  width: 0;\n}\n.helpBackLobbyVive {\n  display: none;\n}\n.helpBackLobbyOculus {\n  display: none;\n}\n#helpBackLobby[data-controller="vive-controls"] .helpBackLobbyVive {\n  display: block;\n}\n#helpBackLobby[data-controller="vive-controls"] .helpBackLobbyOculus {\n  display: none;\n}\n#helpBackLobby[data-controller="oculus-touch-controls"] .helpBackLobbyVive,\n#helpBackLobby[data-controller="windows-motion-controls"] .helpBackLobbyVive {\n  display: none;\n}\n#helpBackLobby[data-controller="oculus-touch-controls"] .helpBackLobbyOculus,\n#helpBackLobby[data-controller="windows-motion-controls"] .helpBackLobbyOculus {\n  display: block;\n}\n.helpBackLobby {\n  position: fixed;\n  right: 10px;\n  top: 0;\n  z-index: 9997;\n}\n.helpBackLobby img {\n  height: 200px;\n}\n.helpBackLobby div {\n  background: rgba(0,0,0,0.3);\n  border-radius: 13px;\n  color: #f0f0f0;\n  font: 15px \'Source Sans Pro\', sans-serif;\n  padding: 8px 14px 8px 10px;\n  position: absolute;\n  right: 185px;\n  text-align: right;\n  text-shadow: 0 0px 2px rgba(155,155,155,0.5);\n  top: 45px;\n  width: 170px;\n}\n#plugyourheadset {\n  background: #272727;\n  border-radius: 15px;\n  bottom: -100px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  font-size: 23px;\n  height: 80px;\n  left: 110px;\n  padding: 20px 30px;\n  position: absolute;\n  width: 350px;\n  z-index: 88888;\n}\n#plugyourheadset.slideup {\n  -webkit-animation: slide-top 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s both;\n          animation: slide-top 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s both;\n}\n#plugyourheadset.slideup img {\n  vertical-align: middle;\n  margin-right: 10px;\n  margin-bottom: 2px;\n}\n#devURLInput {\n  background-color: #88fee9;\n  color: #333;\n}\n#devURLInput:focus {\n  background-color: #363636;\n  color: #71fce7;\n}\nbody a-scene.fullscreen .a-canvas {\n  z-index: 0 !important;\n}\n#algoliaLogo img {\n  margin: 5px 0 20px 0;\n  width: 125px;\n}\n#loadingIndicatorContainer {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n}\n#loadingIndicatorContainer p {\n  color: #fafafa;\n  font-weight: bold;\n  font-size: 24px;\n}\n#loadingIndicator {\n  -webkit-animation: pulse 3s infinite;\n          animation: pulse 3s infinite;\n  position: relative;\n  left: 15px;\n}\n@-webkit-keyframes loadingIndicator {\n  0% {\n    opacity: 0.05;\n  }\n  50% {\n    opacity: 0.85;\n  }\n  100% {\n    opacity: 0.05;\n  }\n}\n@keyframes loadingIndicator {\n  0% {\n    opacity: 0.05;\n  }\n  50% {\n    opacity: 0.85;\n  }\n  100% {\n    opacity: 0.05;\n  }\n}\n@-webkit-keyframes slide-top {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(-120px);\n            transform: translateY(-120px);\n  }\n}\n@keyframes slide-top {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(-120px);\n            transform: translateY(-120px);\n  }\n}\n@-webkit-keyframes pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n', ''])
}, function(e) {
    function t(e, t) {
        var o = e[1] || '',
            r = e[3];
        if (!r) return o;
        if (t && 'function' == typeof btoa) {
            var n = a(r),
                s = r.sources.map(function(e) {
                    return '/*# sourceURL=' + r.sourceRoot + e + ' */'
                });
            return [o].concat(s).concat([n]).join('\n')
        }
        return [o].join('\n')
    }

    function a(e) {
        var t = btoa(unescape(encodeURIComponent(JSON.stringify(e))));
        return '/*# ' + ('sourceMappingURL=data:application/json;charset=utf-8;base64,' + t) + ' */'
    }
    e.exports = function(e) {
        var a = [];
        return a.toString = function() {
            return this.map(function(a) {
                var o = t(a, e);
                return a[2] ? '@media ' + a[2] + '{' + o + '}' : o
            }).join('')
        }, a.i = function(e, t) {
            'string' == typeof e && (e = [
                [null, e, '']
            ]);
            for (var o = {}, r = 0, n; r < this.length; r++) n = this[r][0], 'number' == typeof n && (o[n] = !0);
            for (r = 0; r < e.length; r++) {
                var s = e[r];
                'number' == typeof s[0] && o[s[0]] || (t && !s[2] ? s[2] = t : t && (s[2] = '(' + s[2] + ') and (' + t + ')'), a.push(s))
            }
        }, a
    }
}, function(e, t, a) {
    function o(e) {
        var a = 0,
            o;
        for (o in e) a = (a << 5) - a + e.charCodeAt(o), a |= 0;
        return t.colors[Math.abs(a) % t.colors.length]
    }

    function r(e) {
        function a() {
            if (a.enabled) {
                var e = a,
                    o = +new Date,
                    r = o - (n || o);
                e.diff = r, e.prev = n, e.curr = o, n = o;
                for (var s = Array(arguments.length), l = 0; l < s.length; l++) s[l] = arguments[l];
                s[0] = t.coerce(s[0]), 'string' != typeof s[0] && s.unshift('%O');
                var d = 0;
                s[0] = s[0].replace(/%([a-zA-Z%])/g, function(a, o) {
                    if ('%%' === a) return a;
                    d++;
                    var r = t.formatters[o];
                    if ('function' == typeof r) {
                        var n = s[d];
                        a = r.call(e, n), s.splice(d, 1), d--
                    }
                    return a
                }), t.formatArgs.call(e, s);
                var c = a.log || t.log || console.log.bind(console);
                c.apply(e, s)
            }
        }
        return a.namespace = e, a.enabled = t.enabled(e), a.useColors = t.useColors(), a.color = o(e), 'function' == typeof t.init && t.init(a), a
    }
    t = e.exports = r.debug = r['default'] = r, t.coerce = function(e) {
        return e instanceof Error ? e.stack || e.message : e
    }, t.disable = function() {
        t.enable('')
    }, t.enable = function(e) {
        t.save(e), t.names = [], t.skips = [];
        for (var a = ('string' == typeof e ? e : '').split(/[\s,]+/), o = a.length, r = 0; r < o; r++) a[r] && (e = a[r].replace(/\*/g, '.*?'), '-' === e[0] ? t.skips.push(new RegExp('^' + e.substr(1) + '$')) : t.names.push(new RegExp('^' + e + '$')))
    }, t.enabled = function(e) {
        var a, o;
        for (a = 0, o = t.skips.length; a < o; a++)
            if (t.skips[a].test(e)) return !1;
        for (a = 0, o = t.names.length; a < o; a++)
            if (t.names[a].test(e)) return !0;
        return !1
    }, t.humanize = a(103), t.names = [], t.skips = [], t.formatters = {};
    var n
}, function(e, t, a) {
    (function(t, a) {
        (function(t, a) {
            e.exports = a()
        })(this, function() {
            'use strict';

            function e(e) {
                var t = typeof e;
                return null !== e && ('object' == t || 'function' == t)
            }

            function o(e) {
                return 'function' == typeof e
            }

            function r() {
                return 'undefined' == typeof q ? n() : function() {
                    q(s)
                }
            }

            function n() {
                var e = setTimeout;
                return function() {
                    return e(s, 1)
                }
            }

            function s() {
                for (var e = 0; e < O; e += 2) {
                    var t = U[e],
                        a = U[e + 1];
                    t(a), U[e] = void 0, U[e + 1] = void 0
                }
                O = 0
            }

            function l(e, t) {
                var a = this,
                    o = new this.constructor(u);
                void 0 === o[G] && L(o);
                var r = a._state;
                if (r) {
                    var n = arguments[r - 1];
                    R(function() {
                        return C(r, o, n, a._result)
                    })
                } else A(a, o, e, t);
                return o
            }

            function d(e) {
                var t = this;
                if (e && 'object' == typeof e && e.constructor === t) return e;
                var a = new t(u);
                return f(a, e), a
            }

            function u() {}

            function c() {
                return new TypeError('You cannot resolve a promise with itself')
            }

            function p() {
                return new TypeError('A promises callback cannot return that same promise.')
            }

            function m(e) {
                try {
                    return e.then
                } catch (e) {
                    return Y.error = e, Y
                }
            }

            function g(e, t, a, o) {
                try {
                    e.call(t, a, o)
                } catch (t) {
                    return t
                }
            }

            function h(e, t, a) {
                R(function(e) {
                    var o = !1,
                        r = g(a, t, function(a) {
                            o || (o = !0, t === a ? k(e, a) : f(e, a))
                        }, function(t) {
                            o || (o = !0, x(e, t))
                        }, 'Settle: ' + (e._label || ' unknown promise'));
                    !o && r && (o = !0, x(e, r))
                }, e)
            }

            function b(e, t) {
                t._state === W ? k(e, t._result) : t._state === V ? x(e, t._result) : A(t, void 0, function(t) {
                    return f(e, t)
                }, function(t) {
                    return x(e, t)
                })
            }

            function y(e, t, a) {
                t.constructor === e.constructor && a === l && t.constructor.resolve === d ? b(e, t) : a === Y ? (x(e, Y.error), Y.error = null) : void 0 === a ? k(e, t) : o(a) ? h(e, t, a) : k(e, t)
            }

            function f(t, a) {
                t === a ? x(t, c()) : e(a) ? y(t, a, m(a)) : k(t, a)
            }

            function v(e) {
                e._onerror && e._onerror(e._result), S(e)
            }

            function k(e, t) {
                e._state !== Z || (e._result = t, e._state = W, 0 !== e._subscribers.length && R(S, e))
            }

            function x(e, t) {
                e._state !== Z || (e._state = V, e._result = t, R(v, e))
            }

            function A(e, t, a, o) {
                var r = e._subscribers,
                    n = r.length;
                e._onerror = null, r[n] = t, r[n + W] = a, r[n + V] = o, 0 === n && e._state && R(S, e)
            }

            function S(e) {
                var t = e._subscribers,
                    a = e._state;
                if (0 !== t.length) {
                    for (var o = void 0, r = void 0, n = e._result, s = 0; s < t.length; s += 3) o = t[s], r = t[s + a], o ? C(a, o, r, n) : r(n);
                    e._subscribers.length = 0
                }
            }

            function w(e, t) {
                try {
                    return e(t)
                } catch (t) {
                    return Y.error = t, Y
                }
            }

            function C(e, t, a, r) {
                var n = o(a),
                    s, l, d, c;
                if (!n) s = r, d = !0;
                else if (s = w(a, r), s === Y ? (c = !0, l = s.error, s.error = null) : d = !0, t === s) return void x(t, p());
                t._state !== Z || (n && d ? f(t, s) : c ? x(t, l) : e === W ? k(t, s) : e === V && x(t, s))
            }

            function E(t, e) {
                try {
                    e(function(e) {
                        f(t, e)
                    }, function(e) {
                        x(t, e)
                    })
                } catch (a) {
                    x(t, a)
                }
            }

            function T() {
                return X++
            }

            function L(e) {
                e[G] = X++, e._state = void 0, e._result = void 0, e._subscribers = []
            }

            function j() {
                return new Error('Array Methods must be provided an Array')
            }

            function _() {
                throw new TypeError('You must pass a resolver function as the first argument to the promise constructor')
            }

            function D() {
                throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.')
            }
            var I = Array.isArray ? Array.isArray : function(e) {
                return '[object Array]' === Object.prototype.toString.call(e)
            };
            var P = I,
                O = 0,
                R = function(e, t) {
                    U[O] = e, U[O + 1] = t, O += 2, 2 == O && (K ? K(s) : z())
                },
                M = 'undefined' == typeof window ? void 0 : window,
                N = M || {},
                H = N.MutationObserver || N.WebKitMutationObserver,
                B = 'undefined' == typeof self && 'undefined' != typeof t && '[object process]' === {}.toString.call(t),
                F = 'undefined' != typeof Uint8ClampedArray && 'undefined' != typeof importScripts && 'undefined' != typeof MessageChannel,
                U = Array(1e3),
                q, K, z;
            z = B ? function() {
                return function() {
                    return t.nextTick(s)
                }
            }() : H ? function() {
                var e = 0,
                    t = new H(s),
                    a = document.createTextNode('');
                return t.observe(a, {
                        characterData: !0
                    }),
                    function() {
                        a.data = e = ++e % 2
                    }
            }() : F ? function() {
                var e = new MessageChannel;
                return e.port1.onmessage = s,
                    function() {
                        return e.port2.postMessage(0)
                    }
            }() : void 0 !== M || 0 ? n() : function() {
                try {
                    var e = Function('return this')().require('vertx');
                    return q = e.runOnLoop || e.runOnContext, r()
                } catch (t) {
                    return n()
                }
            }();
            var G = Math.random().toString(36).substring(2),
                W = 1,
                V = 2,
                Y = {
                    error: null
                },
                X = 0,
                J = function() {
                    function e(e, t) {
                        this._instanceConstructor = e, this.promise = new e(u), this.promise[G] || L(this.promise), P(t) ? (this.length = t.length, this._remaining = t.length, this._result = Array(this.length), 0 === this.length ? k(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && k(this.promise, this._result))) : x(this.promise, j())
                    }
                    return e.prototype._enumerate = function(e) {
                        for (var t = 0; this._state === Z && t < e.length; t++) this._eachEntry(e[t], t)
                    }, e.prototype._eachEntry = function(e, t) {
                        var a = this._instanceConstructor,
                            o = a.resolve;
                        if (o === d) {
                            var r = m(e);
                            if (r === l && e._state !== Z) this._settledAt(e._state, t, e._result);
                            else if ('function' != typeof r) this._remaining--, this._result[t] = e;
                            else if (a === Q) {
                                var n = new a(u);
                                y(n, e, r), this._willSettleAt(n, t)
                            } else this._willSettleAt(new a(function(t) {
                                return t(e)
                            }), t)
                        } else this._willSettleAt(o(e), t)
                    }, e.prototype._settledAt = function(e, t, a) {
                        var o = this.promise;
                        o._state === Z && (this._remaining--, e === V ? x(o, a) : this._result[t] = a), 0 === this._remaining && k(o, this._result)
                    }, e.prototype._willSettleAt = function(e, t) {
                        var a = this;
                        A(e, void 0, function(e) {
                            return a._settledAt(W, t, e)
                        }, function(e) {
                            return a._settledAt(V, t, e)
                        })
                    }, e
                }(),
                Q = function() {
                    function e(t) {
                        this[G] = T(), this._result = this._state = void 0, this._subscribers = [], u !== t && ('function' != typeof t && _(), this instanceof e ? E(this, t) : D())
                    }
                    return e.prototype.catch = function(e) {
                        return this.then(null, e)
                    }, e.prototype.finally = function(e) {
                        var t = this,
                            a = t.constructor;
                        return t.then(function(t) {
                            return a.resolve(e()).then(function() {
                                return t
                            })
                        }, function(t) {
                            return a.resolve(e()).then(function() {
                                throw t
                            })
                        })
                    }, e
                }(),
                Z;
            return Q.prototype.then = l, Q.all = function(e) {
                return new J(this, e).promise
            }, Q.race = function(e) {
                var t = this;
                return P(e) ? new t(function(a, o) {
                    for (var r = e.length, n = 0; n < r; n++) t.resolve(e[n]).then(a, o)
                }) : new t(function(e, t) {
                    return t(new TypeError('You must pass an array to race.'))
                })
            }, Q.resolve = d, Q.reject = function(e) {
                var t = this,
                    a = new t(u);
                return x(a, e), a
            }, Q._setScheduler = function(e) {
                K = e
            }, Q._setAsap = function(e) {
                R = e
            }, Q._asap = R, Q.polyfill = function() {
                var e;
                if ('undefined' != typeof a) e = a;
                else if ('undefined' != typeof self) e = self;
                else try {
                    e = Function('return this')()
                } catch (t) {
                    throw new Error('polyfill failed because global object is unavailable in this environment')
                }
                var t = e.Promise;
                if (t) {
                    var o = null;
                    try {
                        o = Object.prototype.toString.call(t.resolve())
                    } catch (t) {}
                    if ('[object Promise]' === o && !t.cast) return
                }
                e.Promise = Q
            }, Q.Promise = Q, Q
        })
    }).call(t, a(9), a(5))
}, function(e, t, a) {
    (function(t) {
        var a;
        a = 'undefined' == typeof window ? 'undefined' == typeof t ? 'undefined' == typeof self ? {} : self : t : window, e.exports = a
    }).call(t, a(5))
}, function(e) {
    function t(e) {
        if (e += '', !(100 < e.length)) {
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (t) {
                var a = parseFloat(t[1]),
                    o = (t[2] || 'ms').toLowerCase();
                return 'years' === o || 'year' === o || 'yrs' === o || 'yr' === o || 'y' === o ? a * d : 'days' === o || 'day' === o || 'd' === o ? a * u : 'hours' === o || 'hour' === o || 'hrs' === o || 'hr' === o || 'h' === o ? a * c : 'minutes' === o || 'minute' === o || 'mins' === o || 'min' === o || 'm' === o ? a * s : 'seconds' === o || 'second' === o || 'secs' === o || 'sec' === o || 's' === o ? a * l : 'milliseconds' === o || 'millisecond' === o || 'msecs' === o || 'msec' === o || 'ms' === o ? a : void 0
            }
        }
    }

    function a(e) {
        return e >= u ? n(e / u) + 'd' : e >= c ? n(e / c) + 'h' : e >= s ? n(e / s) + 'm' : e >= l ? n(e / l) + 's' : e + 'ms'
    }

    function o(e) {
        return r(e, u, 'day') || r(e, c, 'hour') || r(e, s, 'minute') || r(e, l, 'second') || e + ' ms'
    }

    function r(e, t, a) {
        return e < t ? void 0 : e < 1.5 * t ? Math.floor(e / t) + ' ' + a : Math.ceil(e / t) + ' ' + a + 's'
    }
    var n = Math.round,
        l = 1e3,
        s = 60 * l,
        c = 60 * s,
        u = 24 * c,
        d = 365.25 * u;
    e.exports = function(e, r) {
        r = r || {};
        var n = typeof e;
        if ('string' == n && 0 < e.length) return t(e);
        if ('number' == n && !1 === isNaN(e)) return r.long ? o(e) : a(e);
        throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(e))
    }
}, function(e, t, a) {
    'use strict';
    var o = Object.prototype.hasOwnProperty,
        r = Object.prototype.toString,
        n = Array.prototype.slice,
        s = a(105),
        l = Object.prototype.propertyIsEnumerable,
        d = !l.call({
            toString: null
        }, 'toString'),
        c = l.call(function() {}, 'prototype'),
        u = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
        p = function(e) {
            var t = e.constructor;
            return t && t.prototype === e
        },
        m = {
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0
        },
        g = function() {
            if ('undefined' == typeof window) return !1;
            for (var e in window) try {
                if (!m['$' + e] && o.call(window, e) && null !== window[e] && 'object' == typeof window[e]) try {
                    p(window[e])
                } catch (t) {
                    return !0
                }
            } catch (t) {
                return !0
            }
            return !1
        }(),
        h = function(e) {
            if ('undefined' == typeof window || !g) return p(e);
            try {
                return p(e)
            } catch (t) {
                return !1
            }
        },
        b = function(e) {
            var t = null !== e && 'object' == typeof e,
                a = '[object Function]' === r.call(e),
                n = s(e),
                l = t && '[object String]' === r.call(e),
                p = [];
            if (!t && !a && !n) throw new TypeError('Object.keys called on a non-object');
            if (l && 0 < e.length && !o.call(e, 0))
                for (var m = 0; m < e.length; ++m) p.push(m + '');
            if (n && 0 < e.length)
                for (var g = 0; g < e.length; ++g) p.push(g + '');
            else
                for (var b in e) !(c && a && 'prototype' == b) && o.call(e, b) && p.push(b + '');
            if (d)
                for (var y = h(e), f = 0; f < u.length; ++f) !(y && 'constructor' === u[f]) && o.call(e, u[f]) && p.push(u[f]);
            return p
        };
    b.shim = function() {
        if (Object.keys) {
            var e = function() {
                return 2 === (Object.keys(arguments) || '').length
            }(1, 2);
            if (!e) {
                var t = Object.keys;
                Object.keys = function(e) {
                    return s(e) ? t(n.call(e)) : t(e)
                }
            }
        } else Object.keys = b;
        return Object.keys || b
    }, e.exports = b
}, function(e) {
    'use strict';
    var t = Object.prototype.toString;
    e.exports = function(e) {
        var a = t.call(e),
            o = '[object Arguments]' === a;
        return o || (o = '[object Array]' !== a && null !== e && 'object' == typeof e && 'number' == typeof e.length && 0 <= e.length && '[object Function]' === t.call(e.callee)), o
    }
}, function(e) {
    'use strict';

    function t(e, t) {
        if (e.map) return e.map(t);
        for (var a = [], o = 0; o < e.length; o++) a.push(t(e[o], o));
        return a
    }
    var a = function(e) {
        switch (typeof e) {
            case 'string':
                return e;
            case 'boolean':
                return e ? 'true' : 'false';
            case 'number':
                return isFinite(e) ? e : '';
            default:
                return '';
        }
    };
    e.exports = function(e, n, s, l) {
        return n = n || '&', s = s || '=', null === e && (e = void 0), 'object' == typeof e ? t(r(e), function(r) {
            var l = encodeURIComponent(a(r)) + s;
            return o(e[r]) ? t(e[r], function(e) {
                return l + encodeURIComponent(a(e))
            }).join(n) : l + encodeURIComponent(a(e[r]))
        }).join(n) : l ? encodeURIComponent(a(l)) + s + encodeURIComponent(a(e)) : ''
    };
    var o = Array.isArray || function(e) {
            return '[object Array]' === Object.prototype.toString.call(e)
        },
        r = Object.keys || function(e) {
            var t = [];
            for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.push(a);
            return t
        }
}, function(e, t, a) {
    function o(e, t) {
        for (var a = 0; a < e.length; a++) {
            var o = e[a],
                r = h[o.id];
            if (r) {
                r.refs++;
                for (var n = 0; n < r.parts.length; n++) r.parts[n](o.parts[n]);
                for (; n < o.parts.length; n++) r.parts.push(u(o.parts[n], t))
            } else {
                for (var s = [], n = 0; n < o.parts.length; n++) s.push(u(o.parts[n], t));
                h[o.id] = {
                    id: o.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }

    function r(e, t) {
        for (var a = [], o = {}, r = 0; r < e.length; r++) {
            var n = e[r],
                s = t.base ? n[0] + t.base : n[0],
                l = n[1],
                d = n[2],
                c = n[3],
                u = {
                    css: l,
                    media: d,
                    sourceMap: c
                };
            o[s] ? o[s].parts.push(u) : a.push(o[s] = {
                id: s,
                parts: [u]
            })
        }
        return a
    }

    function n(e, t) {
        var a = y(e.insertInto);
        if (!a) throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.');
        var o = k[k.length - 1];
        if ('top' === e.insertAt) o ? o.nextSibling ? a.insertBefore(t, o.nextSibling) : a.appendChild(t) : a.insertBefore(t, a.firstChild), k.push(t);
        else if ('bottom' === e.insertAt) a.appendChild(t);
        else if ('object' == typeof e.insertAt && e.insertAt.before) {
            var r = y(e.insertInto + ' ' + e.insertAt.before);
            a.insertBefore(t, r)
        } else throw new Error('[Style Loader]\n\n Invalid value for parameter \'insertAt\' (\'options.insertAt\') found.\n Must be \'top\', \'bottom\', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n')
    }

    function s(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = k.indexOf(e);
        0 <= t && k.splice(t, 1)
    }

    function l(e) {
        var t = document.createElement('style');
        return e.attrs.type = 'text/css', c(t, e.attrs), n(e, t), t
    }

    function d(e) {
        var t = document.createElement('link');
        return e.attrs.type = 'text/css', e.attrs.rel = 'stylesheet', c(t, e.attrs), n(e, t), t
    }

    function c(e, t) {
        Object.keys(t).forEach(function(a) {
            e.setAttribute(a, t[a])
        })
    }

    function u(e, t) {
        var a, o, r, n;
        if (t.transform && e.css)
            if (n = t.transform(e.css), n) e.css = n;
            else return function() {};
        if (t.singleton) {
            var c = v++;
            a = f || (f = l(t)), o = p.bind(null, a, c, !1), r = p.bind(null, a, c, !0)
        } else e.sourceMap && 'function' == typeof URL && 'function' == typeof URL.createObjectURL && 'function' == typeof URL.revokeObjectURL && 'function' == typeof Blob && 'function' == typeof btoa ? (a = d(t), o = g.bind(null, a, t), r = function() {
            s(a), a.href && URL.revokeObjectURL(a.href)
        }) : (a = l(t), o = m.bind(null, a), r = function() {
            s(a)
        });
        return o(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    o(e = t)
                } else r()
            }
    }

    function p(e, t, a, o) {
        var r = a ? '' : o.css;
        if (e.styleSheet) e.styleSheet.cssText = A(t, r);
        else {
            var n = document.createTextNode(r),
                s = e.childNodes;
            s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(n, s[t]) : e.appendChild(n)
        }
    }

    function m(e, t) {
        var a = t.css,
            o = t.media;
        if (o && e.setAttribute('media', o), e.styleSheet) e.styleSheet.cssText = a;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(a))
        }
    }

    function g(e, t, a) {
        var o = a.css,
            r = a.sourceMap,
            n = t.convertToAbsoluteUrls === void 0 && r;
        (t.convertToAbsoluteUrls || n) && (o = x(o)), r && (o += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + ' */');
        var s = new Blob([o], {
                type: 'text/css'
            }),
            l = e.href;
        e.href = URL.createObjectURL(s), l && URL.revokeObjectURL(l)
    }
    var h = {},
        b = function(e) {
            var t;
            return function() {
                return 'undefined' == typeof t && (t = e.apply(this, arguments)), t
            }
        }(function() {
            return window && document && document.all && !window.atob
        }),
        y = function(e) {
            var t = {};
            return function(a) {
                if ('undefined' == typeof t[a]) {
                    var o = e.call(this, a);
                    if (o instanceof window.HTMLIFrameElement) try {
                        o = o.contentDocument.head
                    } catch (t) {
                        o = null
                    }
                    t[a] = o
                }
                return t[a]
            }
        }(function(e) {
            return document.querySelector(e)
        }),
        f = null,
        v = 0,
        k = [],
        x = a(108);
    e.exports = function(e, t) {
        if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document) throw new Error('The style-loader cannot be used in a non-browser environment');
        t = t || {}, t.attrs = 'object' == typeof t.attrs ? t.attrs : {}, t.singleton || 'boolean' == typeof t.singleton || (t.singleton = b()), t.insertInto || (t.insertInto = 'head'), t.insertAt || (t.insertAt = 'bottom');
        var a = r(e, t);
        return o(a, t),
            function(e) {
                for (var n = [], s = 0; s < a.length; s++) {
                    var l = a[s],
                        d = h[l.id];
                    d.refs--, n.push(d)
                }
                if (e) {
                    var c = r(e, t);
                    o(c, t)
                }
                for (var s = 0, d; s < n.length; s++)
                    if (d = n[s], 0 === d.refs) {
                        for (var u = 0; u < d.parts.length; u++) d.parts[u]();
                        delete h[d.id]
                    }
            }
    };
    var A = function() {
        var e = [];
        return function(t, a) {
            return e[t] = a, e.filter(Boolean).join('\n')
        }
    }()
}, function(e) {
    e.exports = function(e) {
        var t = 'undefined' != typeof window && window.location;
        if (!t) throw new Error('fixUrls requires window.location');
        if (!e || 'string' != typeof e) return e;
        var a = t.protocol + '//' + t.host,
            o = a + t.pathname.replace(/\/[^\/]*$/, '/'),
            r = e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
                var r = t.trim().replace(/^"(.*)"$/, function(e, t) {
                    return t
                }).replace(/^'(.*)'$/, function(e, t) {
                    return t
                });
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r)) return e;
                var n;
                return n = 0 === r.indexOf('//') ? r : 0 === r.indexOf('/') ? a + r : o + r.replace(/^\.\//, ''), 'url(' + JSON.stringify(n) + ')'
            });
        return r
    }
}, function(e) {
    e.exports = 'uniform float brightness;\nuniform float time;\nuniform float opacity;\nuniform vec3 camera;\nuniform vec3 tint;\nvarying vec3 vWorldPosition;\n\nvoid main() {\n  vec2 uv = normalize(vWorldPosition - camera).xy;\n  vec3 c  = vec3(167.0, 204.0, 153.0) / 255.0;\n  vec3 floor = vec3(226.0, 142.0, 74.0) / 255.0;\n  vec3 c1 = vec3(79.0, 169.0, 198.0) / 255.0;\n  vec2 c1p = vec2(0.5, 0.5);\n  vec3 c2 = vec3(178.0, 86.0, 148.0) / 255.0;\n  vec2 c2p = vec2(0.0, 0.8);\n  c = mix(c, floor, 0.5 + (-uv.y - 0.2) * 0.5);\n  c = mix(c, c1, abs(1.0 - distance(c1p, uv)));\n  c = mix(c, c2, abs(1.0 - distance(c2p, uv)));\n  gl_FragColor = vec4((c + tint) * brightness, opacity);\n}\n'
}, function(e) {
    e.exports = 'varying vec3 vWorldPosition;\n\nvoid main() {\n  vec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n  vWorldPosition = worldPosition.xyz;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n'
}, function(e) {
    e.exports = 'uniform sampler2D src;\nuniform vec3 color;\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec3 vWorldPosition;\n\nfloat whenEqual(float x, float y) {\n  return 1.0 - abs(sign(x - y));\n}\n\nfloat whenLessThan(float x, float y) {\n  return max(sign(y - x), 0.0);\n}\n\n/**\n * Simple lambert.\n */\nfloat lambert(vec3 N, vec3 L) {\n  vec3 nrmN = normalize(N);\n  vec3 nrmL = normalize(L);\n  float result = dot(nrmN, nrmL);\n  return max(result, 0.0);\n}\n\n/**\n * Gradient.\n */\nvec3 getColor(vec3 baseColor, vec2 uv) {\n  vec2 color1Position = vec2(0.5, 0.5);\n  vec2 color2Position = vec2(0.9, 0.4);\n  vec3 color1 = baseColor;\n  vec3 color2 = baseColor * 0.8;\n  vec3 floor = baseColor * 1.4;\n  vec3 outColor = baseColor;\n  outColor = mix(outColor, floor, 0.5 + (-uv.y - 0.2) * 0.5);\n  outColor = mix(outColor, color1, abs(1.0 - distance(color1Position, uv)));\n  outColor = mix(outColor, color2, abs(1.0 - distance(color2Position, uv)));\n  return outColor;\n}\n\nvoid main() {\n  vec3 gradientColor = getColor(color, vUv);\n\n  // Fade out next/prev links.\n  float fadeAlpha = 1.0 - smoothstep(2.25, 3.75, length(vWorldPosition.xz));\n\n  // Texture lookup.\n  vec4 tex = texture2D(src, vUv);\n\n  // Transform alpha = 0 to color.\n  tex.xyz = mix(tex.xyz, gradientColor, whenEqual(tex.w, 0.0));\n\n  // Blend the semi-transparent pieces.\n  float texAlpha = mix(tex.w, 1.0, whenEqual(tex.w, 0.0));\n  tex.xyz = mix(color, tex.xyz, texAlpha);\n\n  // Light.\n  vec3 diffuse = vec3(1.0, 1.0, 1.0);\n  vec3 lightPosition = vec3(0.2, 2, 4);\n  tex.xyz = tex.xyz * lambert(vNormal, lightPosition);\n\n  gl_FragColor = vec4(tex.xyz, min(1.0, fadeAlpha));\n}\n'
}, function(e) {
    e.exports = '// Parallax bounds.\n#define BOUND 1.25\n// Pagination\n#define PAGE_WIDTH 1.16\n#define FADE_WIDTH 1.6\n\nuniform vec3 color;\nuniform sampler2D src;\nuniform float opacity;\nvarying vec3 vWorldPosition;\nvarying vec2 vUv;\n\nvoid main() {\n  // Fade out next/prev links.\n  float alpha = 1.0 - smoothstep(2.25, 3.75, length(vWorldPosition.xz));\n  vec4 tex = texture2D(src, vUv) * vec4(color, 1.0);\n  gl_FragColor = vec4(tex.xyz, min(1.0, tex.w * alpha * opacity));\n}\n'
}, function(e) {
    e.exports = '#ifdef GL_OES_standard_derivatives\n#extension GL_OES_standard_derivatives: enable\n#endif\n\nprecision highp float;\n// FIXME: Experimentally determined constants.\n#define BIG_ENOUGH 0.001\n#define MODIFIED_ALPHATEST (0.02 * isBigEnough / BIG_ENOUGH)\n#define ALL_SMOOTH 0.4\n#define ALL_ROUGH 0.02\n#define DISCARD_ALPHA (alphaTest / (2.2 - 1.2 * ratio))\nuniform sampler2D map;\nuniform vec3 color;\nuniform float opacity;\nuniform float alphaTest;\nuniform bool negate;\nvarying vec2 vUV;\nvarying vec3 vWorldPosition;\n\nfloat median(float r, float g, float b) {\n  return max(min(r, g), min(max(r, g), b));\n}\nvoid main() {\n  vec3 sample = texture2D(map, vUV).rgb;\n  if (negate) {\n    sample = 1.0 - sample;\n  }\n  float sigDist = median(sample.r, sample.g, sample.b) - 0.5;\n  float alpha = clamp(sigDist/fwidth(sigDist) + 0.5, 0.0, 1.0);\n  float dscale = 0.353505;\n  vec2 duv = dscale * (dFdx(vUV) + dFdy(vUV));\n  float isBigEnough = max(abs(duv.x), abs(duv.y));\n\n  // When texel is too small, blend raw alpha value rather than supersampling.\n  // FIXME: Experimentally determined constant.\n  if (isBigEnough > BIG_ENOUGH) {\n    float ratio = BIG_ENOUGH / isBigEnough;\n    alpha = ratio * alpha + (1.0 - ratio) * (sigDist + 0.5);\n  }\n\n  // When texel is big enough, do standard alpha test.\n  // FIXME: Experimentally determined constant.\n  // Looks much better if we *don\'t* do this, but do we get Z fighting?\n  if (isBigEnough <= BIG_ENOUGH && alpha < alphaTest) { discard; return; }\n\n  // Else, do modified alpha test.\n  // FIXME: Experimentally determined constant.\n  if (alpha < alphaTest * MODIFIED_ALPHATEST) { discard; return; }\n\n  // Fade out next/prev links.\n  float fadeAlpha = 1.0 - smoothstep(2.25, 3.75, length(vWorldPosition.xz));\n  gl_FragColor = vec4(color.xyz, alpha * opacity * fadeAlpha);\n}\n'
}, function(e) {
    e.exports = 'attribute vec2 uv;\nattribute vec3 position;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nvarying vec2 vUV;\nvarying vec3 vWorldPosition;\n\nvoid main(void) {\n  vec4 worldPosition = modelMatrix * vec4(position, 1.0);\n  vWorldPosition = worldPosition.xyz;\n  vUV = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n'
}, function(e) {
    e.exports = '// Parallax bounds.\n#define BOUND 1.25\n// Pagination\n#define PAGE_WIDTH 1.16\n#define FADE_WIDTH 1.6\nuniform sampler2D src;\nuniform float brightness;\nuniform float opacity;\nuniform float glare;\nuniform float uvXClamp;\nuniform float uvXOffset;\nuniform vec3 meshPosition;\nuniform vec3 sitesPosition;\n\nvarying vec3 vWorldPosition;\nvarying vec2 vUv;\nvarying vec3 vLocalCameraPosition;\n\nvoid main() {\n  float cameraOffsetX;\n  float cameraOffsetY;\n  float normalizedCameraOffsetX;\n  float normalizedCameraOffsetY;\n  float xMin;\n  float xMax;\n  float yMin;\n  float yMax;\n  vec2 sampleUV;\n\n  // Get offset of camera to image center.\n  cameraOffsetX = clamp(vLocalCameraPosition.x - meshPosition.x, -BOUND, BOUND);\n  cameraOffsetY = clamp(vLocalCameraPosition.y - meshPosition.y, -BOUND, BOUND);\n\n  // Convert [-BOUND, BOUND] to [0, 1].\n  normalizedCameraOffsetX = (cameraOffsetX + BOUND) / (2.0 * BOUND);\n  normalizedCameraOffsetY = (cameraOffsetY + BOUND) / (2.0 * BOUND);\n\n  // Given the camera offset, calculate the minimum and maximum UVs.\n  xMin = mix(0.10, 0.0, normalizedCameraOffsetX);\n  xMax = mix(1.0 * uvXClamp, 0.90 * uvXClamp, normalizedCameraOffsetX);\n  yMin = mix(0.10, 0.0, normalizedCameraOffsetY);\n  yMax = mix(1.0, 0.90, normalizedCameraOffsetY);\n\n  // Map UVs to the UVs bounds defined above.\n  sampleUV.x = mix(xMin, xMax, vUv.x) + uvXOffset;\n  sampleUV.y = mix(yMin, yMax, vUv.y);\n\n  // Fade out next/prev links.\n  float alpha  = 1.0 - smoothstep(2.25, 3.75, length(vWorldPosition.xz));\n\n  // Glare.\n  float g = smoothstep(0.0, 0.9, sin((1.0 - (1.0 - vUv.x) * vUv.y - glare * 2.0 - 1.0) * 3.14159)) * 0.14;\n\n  gl_FragColor = vec4(texture2D(src, sampleUV).xyz * vec3(brightness, brightness, brightness) + g, alpha * opacity);\n}\n'
}, function(e) {
    e.exports = 'uniform mat4 inverseMatrix;\nvarying vec3 vWorldPosition;\nvarying vec3 vLocalCameraPosition;\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n  vWorldPosition = worldPosition.xyz;\n\n  // Transform global camera position to local space of object.\n  vLocalCameraPosition = vec4(vec4(cameraPosition, 1.0) * inverseMatrix).xyz;\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n'
}, function() {
    var e, t, a;
    t = $$('.panelOption'), a = $$('.panelSection'), e = $('.panelOptionContainer'), e.addEventListener('click', (o) => {
        var r, n, s, l;
        if (o.target !== e) {
            for (n = o.target.closest('[data-panel]'), l = n.dataset.panel, s = $(`.panelSection[data-panel=${l}]`), n.classList.contains('panelOptionActive') || gtag('event', 'panelsectionopen', {
                    value: n
                }), r = 0; r < t.length; r++) t[r] === n ? n.classList.toggle('panelOptionActive') : t[r].classList.remove('panelOptionActive');
            for (r = 0; r < a.length; r++) a[r] === s ? s.classList.toggle('panelSectionActive') : a[r].classList.remove('panelSectionActive')
        }
    }), window.addEventListener('keydown', (e) => {
        var a;
        49 > e.keyCode || 53 < e.keyCode || e.altKey && (a = e.keyCode - 49, t[a] && t[a].click())
    }), window.addEventListener('click', (e) => {
        var o;
        if ('CANVAS' === e.target.tagName) {
            for (o = 0; o < a.length; o++) a[o].classList.remove('panelSectionActive');
            for (o = 0; o < t.length; o++) t[o].classList.remove('panelOptionActive')
        }
    })
}, function(e, t, a) {
    function o(e, t, a, o) {
        var r, n, d;
        n = document.createElement('li'), n.classList.add('site'), n.classList.add('userSite'), n.innerHTML = u.replace('{url}', l.truncate(e, 45)).replace('{title}', l.truncate(t, 25)).replace('{image}', a), m.append(n), o && (r = s(n), d = new XMLHttpRequest, d.open('GET', e), d.addEventListener('load', () => {
            var e;
            e = /<title>(.*?)<\/title>/m.exec(d.responseText)[1], n.querySelector('.siteDataTitle').innerHTML = e, c.emit('usercollectionupdatetitle', {
                index: r,
                title: e
            }, !1)
        }), d.send())
    }

    function r(e, t, a) {
        c.emit('usercollectionadd', {
            url: e,
            title: t,
            image: a
        }, !1), setTimeout(() => {
            c.emit('collectionopen')
        }, 200)
    }

    function n(e) {
        c.emit('usercollectionremove', {
            index: e
        }), m.removeChild(m.children[e])
    }

    function s(e) {
        for (var t = 0; null !== (e = e.previousSibling);) t++;
        return t
    }
    var l = a(7),
        d, c, u, p, m;
    u = `
<img class="siteFavicon" src="{image}">
<div class="siteData">
  <p class="siteDataTitle">{title}</p>
  <p class="siteDataUrl">{url}</p>
</div>
<a class="siteDelete" href="#">&#x2a2f;</a>
`, c = AFRAME.scenes[0],
        function() {
            var e;
            for (p = c.systems.state.state.userCollection, m = $('.userSiteContainer'), e = 0; e < p.length; e++) o(p[e].url, p[e].title, p[e].image);
            d = $('#addSiteInput'), d.addEventListener('keydown', (e) => {
                var t, a, n;
                13 === e.keyCode && (n = d.value, n && (!n.startsWith('http') && (n = 'https://' + n), a = n.replace('https://', '').replace('http://', ''), t = 'assets/img/logo-bg.png', o(n, a, t, !0), r(n, a, t)))
            }), m.addEventListener('click', (e) => {
                e.target.classList.contains('siteDelete') && n(s(e.target.closest('.site')))
            })
        }()
}]);