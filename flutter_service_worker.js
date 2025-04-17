'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3cf3e009ba41adea76dec74f5db0a99a",
"version.json": "2593b4537c8f9a808898a79d654679f2",
"index.html": "6d1f796c17df132bc40767ee174d15e5",
"/": "6d1f796c17df132bc40767ee174d15e5",
"main.dart.js": "89c6b0a304818b37557793ea31b668e7",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"manifest.json": "da568515b2a5cf09ca388fb1eedf7f88",
"assets/AssetManifest.json": "2dcd8ffdeab698ede93231557aa24fa0",
"assets/NOTICES": "32939dadb467266b71fe723f5104db27",
"assets/FontManifest.json": "9333bda650133932a3f35d5f052020eb",
"assets/AssetManifest.bin.json": "5d18c27582dd525ca5f7b0937f41a561",
"assets/packages/raphy_wedding_ui/assets/images/assist_button.png": "a1c2e7fa3443a00519b9cb499f21c835",
"assets/packages/raphy_wedding_ui/assets/images/colors.png": "304699314fcabb108b27ac4343b6b514",
"assets/packages/raphy_wedding_ui/assets/images/calendart_icon.png": "b24b1744aa5accd893837b745f5f5117",
"assets/packages/raphy_wedding_ui/assets/images/google_maps_icon.png": "bccb6956bca9669c950f1e61375f7d01",
"assets/packages/raphy_wedding_ui/assets/images/flowers_4.png": "3edc5740ac8ffaa84fb425310c88b59b",
"assets/packages/raphy_wedding_ui/assets/images/flowers_1.png": "47ccb37d34020714a69ea6a53859b2c1",
"assets/packages/raphy_wedding_ui/assets/images/full_main_photo.png": "9c55c1e0ea305e8838f9876c6c1769c9",
"assets/packages/raphy_wedding_ui/assets/images/yape_and_bcp.png": "27fd74582da883cf42f2b7d25b9f4283",
"assets/packages/raphy_wedding_ui/assets/images/flowers_3.png": "9e9390aaaf72e0b3e3b54e01a26be545",
"assets/packages/raphy_wedding_ui/assets/images/flowers_2.png": "1bdc377ca5f64c5b65abdde915681175",
"assets/packages/raphy_wedding_ui/assets/images/large_separator.png": "280927dc3384fcfe66476458a75b8fd0",
"assets/packages/raphy_wedding_ui/assets/images/logo.png": "7114fde3151dce4898d73123c048293c",
"assets/packages/raphy_wedding_ui/assets/images/info_separator.png": "aa6ff09e7b12accab822dd488281ae72",
"assets/packages/raphy_wedding_ui/assets/images/golden_detail_2.png": "bae1978da4c982a2db1b85790fb92aa3",
"assets/packages/raphy_wedding_ui/assets/images/golden_detail_1.png": "ed311e1194346473dec47bf47dc7b45a",
"assets/packages/raphy_wedding_ui/assets/images/main_photo.png": "e197a8053a276fd2144ec681c00ac494",
"assets/packages/raphy_wedding_ui/assets/images/qr.png": "a82d238e0cfd23b54cf7c8c9813e5755",
"assets/packages/raphy_wedding_ui/assets/images/small_separator.png": "a65249268d32de183e895442bdf8f2f9",
"assets/packages/raphy_wedding_ui/assets/fonts/LexendDeca-Light.ttf": "574ea20b15da019bfb7fbe81cdaebb09",
"assets/packages/raphy_wedding_ui/assets/fonts/LexendDeca-Bold.ttf": "f47776685e9e1ae2da8caa912c9bb717",
"assets/packages/raphy_wedding_ui/assets/fonts/LexendDeca-Medium.ttf": "69965eb88a975b3696b90be4a7198635",
"assets/packages/raphy_wedding_ui/assets/fonts/LexendDeca-Regular.ttf": "d1b1822b6d14fdc9d556018a901786f1",
"assets/packages/raphy_wedding_ui/assets/fonts/LexendDeca-Black.ttf": "9f8cc3ec2d88209be37af7107cf86b36",
"assets/packages/raphy_wedding_ui/assets/fonts/LexendDeca-Thin.ttf": "31972b78291bdf4e5afb3161a879b8b6",
"assets/packages/raphy_wedding_ui/assets/fonts/LexendDeca-ExtraLight.ttf": "b80ae7e7fdbbc6e349a2bf4b78dcba3a",
"assets/packages/raphy_wedding_ui/assets/fonts/LexendDeca-SemiBold.ttf": "f1e78d8510f2f9f8a26a1cefb5c4dc2e",
"assets/packages/raphy_wedding_ui/assets/fonts/LexendDeca-ExtraBold.ttf": "8e603349db923d3bc2f0c34ea38bba29",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ad1c0c9a982d4507aa976a4f42a403e8",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
