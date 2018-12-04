importScripts('workbox-v3.4.1/workbox-sw.js')

/*
  This is our code to handle push events.
*/
self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Notification';
  const options = {
    body: `${event.data.text()}`,
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.workbox.precaching.precacheAndRoute([
  {
    "url": "build/app.css",
    "revision": "30962dada4a1c4eedb1ea75d3448b8c0"
  },
  {
    "url": "build/app.js",
    "revision": "bc2264aa6c714e58fbce991bfdfeff0b"
  },
  {
    "url": "build/app/0wpjemnz.entry.js",
    "revision": "d303c910c35951d09e2a91470cfe4376"
  },
  {
    "url": "build/app/0wpjemnz.sc.entry.js",
    "revision": "072be65684455e06d234e1f6221959e2"
  },
  {
    "url": "build/app/7tk2ofix.entry.js",
    "revision": "eed936a05217a557297a7d5c3b9fadb5"
  },
  {
    "url": "build/app/7tk2ofix.sc.entry.js",
    "revision": "0f102710861910dc65e2c616259ab53b"
  },
  {
    "url": "build/app/9qwrh5ia.entry.js",
    "revision": "f6a59187921a3a6230358e360edfbe3f"
  },
  {
    "url": "build/app/9qwrh5ia.sc.entry.js",
    "revision": "310d13815f1fdf10a23e049338e31bd4"
  },
  {
    "url": "build/app/app.mbfn4pkm.js",
    "revision": "31b7e7e0f90c536a8bae1954a6af04b0"
  },
  {
    "url": "build/app/app.q9nf97hy.js",
    "revision": "43d9c5f7b1d8cdf4c039e89138e09e89"
  },
  {
    "url": "build/app/bijxvvle.entry.js",
    "revision": "6e2271bef95e41fadff29f754c0d9f07"
  },
  {
    "url": "build/app/bijxvvle.sc.entry.js",
    "revision": "81ce210b2bc7700e8b36056d25283d8e"
  },
  {
    "url": "build/app/chunk-07cd1608.es5.js",
    "revision": "67f1bc2f5276752b69cd36b817748423"
  },
  {
    "url": "build/app/chunk-1004ea03.js",
    "revision": "b038609a1bc114484894ac5183f0713f"
  },
  {
    "url": "build/app/chunk-af80afde.es5.js",
    "revision": "7cbab6e2528e00d17051c226cdd737e3"
  },
  {
    "url": "build/app/chunk-b760673a.es5.js",
    "revision": "50a455e2d05c0068c5e2cedc630bff32"
  },
  {
    "url": "build/app/chunk-bbc0ff40.js",
    "revision": "f5262a1b8466d457a12b3bdcb7a553bc"
  },
  {
    "url": "build/app/chunk-f49656cd.js",
    "revision": "345ca36e95fae51f103a9226800a4ed2"
  },
  {
    "url": "build/app/fd0uqf26.entry.js",
    "revision": "15dd14a85dba85724193825fbb93c173"
  },
  {
    "url": "build/app/fd0uqf26.sc.entry.js",
    "revision": "15dd14a85dba85724193825fbb93c173"
  },
  {
    "url": "build/app/gesture.es5.js",
    "revision": "e13305df0e021997f165bf2a77e2c244"
  },
  {
    "url": "build/app/gesture.js",
    "revision": "447e90b22362a907155401f8d060ca01"
  },
  {
    "url": "build/app/hardware-back-button.es5.js",
    "revision": "a6f7e1595f5f8ffa8574c2574f1a7b69"
  },
  {
    "url": "build/app/hardware-back-button.js",
    "revision": "23dd14024cf4efa75a4b9263a47f9396"
  },
  {
    "url": "build/app/input-shims.es5.js",
    "revision": "18e57df9840f41be2d7f317ebb32c0c9"
  },
  {
    "url": "build/app/input-shims.js",
    "revision": "3f6e4f98b84a19bdba8d24b56a4f96af"
  },
  {
    "url": "build/app/ios.transition.es5.js",
    "revision": "7e0472e5cd36676185e704685c1060e4"
  },
  {
    "url": "build/app/ios.transition.js",
    "revision": "6599465a1649c3f0cd7ac45d5244bb84"
  },
  {
    "url": "build/app/md.transition.es5.js",
    "revision": "a6482485d53ad3d6f48350b055e1e28a"
  },
  {
    "url": "build/app/md.transition.js",
    "revision": "d85579b8d831ecdcc37d188f1c0783f7"
  },
  {
    "url": "build/app/ntttyd4r.entry.js",
    "revision": "9edb6dc83e2b5f9aa80243ccd30d92a9"
  },
  {
    "url": "build/app/ntttyd4r.sc.entry.js",
    "revision": "02c75d0de2788613b5445a0f2915e2a3"
  },
  {
    "url": "build/app/status-tap.es5.js",
    "revision": "1678715ca22b4d5b907f3e31b36da4a5"
  },
  {
    "url": "build/app/status-tap.js",
    "revision": "4d3c2d99f88e8b8f0507550571d3309a"
  },
  {
    "url": "build/app/svg/index.js",
    "revision": "35b1701e9c9c1dacb8be33a8bace509b"
  },
  {
    "url": "build/app/swipe-back.es5.js",
    "revision": "5d05aa130ec561356556a26b924711cd"
  },
  {
    "url": "build/app/swipe-back.js",
    "revision": "ebc9498a368d7e059d9d8be3aeb5b4cd"
  },
  {
    "url": "build/app/tap-click.es5.js",
    "revision": "7709f5bd7e5c89759fe191ec15165825"
  },
  {
    "url": "build/app/tap-click.js",
    "revision": "eda0d48d3a074d3333a16b21a4196b57"
  },
  {
    "url": "build/app/txxa2jkm.entry.js",
    "revision": "4f1c5ada32a644cb97cd2befe0f55c6d"
  },
  {
    "url": "build/app/txxa2jkm.sc.entry.js",
    "revision": "19abcdaea99e93648981dd530b11cf55"
  },
  {
    "url": "build/app/voorsmou.entry.js",
    "revision": "568a11b0c39473cdb4bfcd80016c4af1"
  },
  {
    "url": "build/app/voorsmou.sc.entry.js",
    "revision": "568a11b0c39473cdb4bfcd80016c4af1"
  },
  {
    "url": "index.html",
    "revision": "12e31df236e3ca5ddbdee55867d054d0"
  },
  {
    "url": "manifest.json",
    "revision": "22a08e9dfbbbd7110475009ed00fdb90"
  }
]);
