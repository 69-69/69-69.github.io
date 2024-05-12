'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "0a1b4593442ce7870964eaf14fa6aa56",
"index.html": "d126d044e30d4b6d8a36bcb92523480a",
"/": "d126d044e30d4b6d8a36bcb92523480a",
"main.dart.js": "cf7190180d4a78d8f42fc0106086a5ac",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "12124e67d7179deccfea66b58cb1b73e",
"assets/AssetManifest.json": "53b6ad85132790ffe4883b5e640cfd50",
"assets/NOTICES": "baa0fb0b8d9d0de9232fd136c43a9934",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "d0e62f88be55dde481fd37fb06da62b3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7f8280efa97f487b4f2b6000f41e65ad",
"assets/fonts/MaterialIcons-Regular.otf": "8c9fba54247cade123eb3a3596b55fd2",
"assets/assets/images/Img_1.png": "8737b19ca2018ab533c0ea38926d307d",
"assets/assets/images/Img_0.png": "afbe6d2666c4766da1192ed32c81e379",
"assets/assets/images/Logo%2520Outlook.png": "b30d7f8d436a715920f5766a8f4f590c",
"assets/assets/images/Img_2.png": "50bf76bfe52288249408bfe76af6c02d",
"assets/assets/images/popular-location.png": "0e43004532aa446dbea7fe401a37333d",
"assets/assets/images/user_2.png": "7eccb0a70693054530486c9faf4a27dd",
"assets/assets/images/ads-bg.png": "bdb08af5d14259ab5c61802ce5cbb6f3",
"assets/assets/images/user_3.png": "4175bf553052bdd6e1f3e93b71aab1b5",
"assets/assets/images/user_1.png": "b27e4014918be9067acf17512520f699",
"assets/assets/images/user_4.png": "bc10492e902061e17e16fd406be2c328",
"assets/assets/images/user_5.png": "8e98aa502e33de2e867686b60507a8c7",
"assets/assets/images/profile.png": "057d526daa4cfcbadc8e574c2dfbaa28",
"assets/assets/Icons/Transfer.svg": "afc6001cc5d53124ffac78b68ad0ecbe",
"assets/assets/Icons/Search.svg": "c7155466276712980bdf822025286c58",
"assets/assets/Icons/Reply.svg": "378c21add4d4219e7969f647a2ea15be",
"assets/assets/Icons/Markup%2520filled.svg": "40d059b79ceb381a4fff5cf4f94d7717",
"assets/assets/Icons/Reply%2520all.svg": "cbeaee2532b1f864de2a7fb44c3da9dd",
"assets/assets/Icons/Inbox.svg": "a4777c9e21a6fbd3802c164237a59b0e",
"assets/assets/Icons/File.svg": "6ebd5cba586daf5f6a8cd2ae69974d01",
"assets/assets/Icons/Markup.svg": "2a0f37b8f81e85e200239f26c8295718",
"assets/assets/Icons/Download.svg": "0605a445a2241a5f4d8039cbe62deb65",
"assets/assets/Icons/Plus.svg": "db9e94598d5272bad2ed4d0095d3feb5",
"assets/assets/Icons/Paperclip.svg": "d7e7dec5e3b15d70d1cc543902e3e3b8",
"assets/assets/Icons/Angle%2520down.svg": "a0e3ff9e10cbd5a20fd4b3af570bb403",
"assets/assets/Icons/Send.svg": "f29a3dd14ca59dec3c9cd1fe18cb8b4b",
"assets/assets/Icons/Printer.svg": "4984ba164d6a117030f2066d5aa59e1f",
"assets/assets/Icons/Trash.svg": "4a2cbcd29c9e345be576fc644b154810",
"assets/assets/Icons/More%2520vertical.svg": "23720f8fc4d7e46f590006947dd30b42",
"assets/assets/Icons/Edit.svg": "b4342990aa20448ca5c23e421217b76a",
"assets/assets/Icons/Angle%2520right.svg": "aae36377adfd82ebde3949fdcfd7d383",
"assets/assets/Icons/Sort.svg": "d3cfa59524245d5533c0ab4a5fc9d443",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
