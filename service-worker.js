/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "613b9e4810eebcd283b61b934d8483fc"
  },
  {
    "url": "assets/css/0.styles.a6776394.css",
    "revision": "0cf9031d8e25e7b1ef634850eba4ca18"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.d1e879a0.js",
    "revision": "b5326cd3d3548377ca4628442fb45e52"
  },
  {
    "url": "assets/js/10.4d733ea2.js",
    "revision": "bb26265b302135e074eb7400be52e642"
  },
  {
    "url": "assets/js/11.ef746ede.js",
    "revision": "966dd5eab6f328b65f4ddd680a46e0c9"
  },
  {
    "url": "assets/js/12.cc989c3e.js",
    "revision": "d43bb3e38d8980cb8dcf2ade1400a827"
  },
  {
    "url": "assets/js/13.d3059b5b.js",
    "revision": "e6f24b5c2efd47346c6c52e9a6d160a6"
  },
  {
    "url": "assets/js/14.aab3276d.js",
    "revision": "58e4964a4e22e7429578d8dcdcf8746f"
  },
  {
    "url": "assets/js/15.1ad9e7af.js",
    "revision": "db8f0050de63e8e9fb79afb1f14d8086"
  },
  {
    "url": "assets/js/16.0a78aac3.js",
    "revision": "6de673e7ef988dbbfd15aabb0c2f81dd"
  },
  {
    "url": "assets/js/17.79a44560.js",
    "revision": "68e21a8b800caa000b89214f35b6becf"
  },
  {
    "url": "assets/js/18.54f12e55.js",
    "revision": "0d28aa7b2977ece511f2b2193ad79b44"
  },
  {
    "url": "assets/js/4.620f8225.js",
    "revision": "f2833b09be13701999bed8a90947cc5f"
  },
  {
    "url": "assets/js/5.4a08826e.js",
    "revision": "1271cf47e6993c434bd67cbb5ea17551"
  },
  {
    "url": "assets/js/6.da361a5a.js",
    "revision": "e9d64c920beda261a774114bb13b9d8e"
  },
  {
    "url": "assets/js/7.0c009bd3.js",
    "revision": "aced2a84ca19cbbbc660c2300eae049d"
  },
  {
    "url": "assets/js/8.1c1995c7.js",
    "revision": "885e4b234295b6121d213af01ae51852"
  },
  {
    "url": "assets/js/9.7d4f4532.js",
    "revision": "6e5e19efc90053ebc2da57d003f1b99c"
  },
  {
    "url": "assets/js/app.837f9f73.js",
    "revision": "a663a8c636f503229cc779c28af8c17c"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.f362bf99.js",
    "revision": "471aa90869104f9121130a6c8fae7c63"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "4be1c626620e556dd9a760719c20cbda"
  },
  {
    "url": "categories/java/index.html",
    "revision": "cfd1e8ddb650026987ebd9cdb7704076"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "c33a53feea77f8a8aa0789a3b6377a3d"
  },
  {
    "url": "categories/js/index.html",
    "revision": "11e7a40b23d8c36d30e12b9e8f8dd81b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "eeae5c305d4a2f558f15717a5c2f08c6"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "865d8f4dd6e848c0ce2553fd375a0676"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "11efb00810844c08adb7d7c81b5fc773"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "23c986b08ff7c7e26a54efca7160f049"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "9b6dff12d53996a9e03b9c61e9ece811"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "56abe0fa2e35c88eee91f7d8b039787d"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "81bf103ac755c4bbe0393022986c3fb0"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "72cd43739a2b068f29caf1fd5c74d7a0"
  },
  {
    "url": "tags/js/index.html",
    "revision": "adbce94abbb3419b900f928cc7334f3c"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "4e1428ac6381973a7bc9d11992e188a5"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "086f7529d7e0a55e38412cf852771745"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "ace28384681ef867a51e260e4010eb0a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "1b31f66095b2e5d94e4a107fb2f745e5"
  },
  {
    "url": "tags/框架/index.html",
    "revision": "54d2f1faebdfff931c0af656dcf742cc"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "f93767eeea8e59d084dd0d0babc7ccc2"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "532f8afef351664a36708772c19bafc9"
  },
  {
    "url": "timeline/index.html",
    "revision": "385487cd72a73fdbe46e903cd0e0b15f"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "fc5fa32854bdc54d47f3c6dd25592e9d"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "98d07294712924a913c62773e85f8eb1"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "18c660d2ff5f33f54062ce62b22ff2f2"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "12b3136f3873e3310be46ccbdd23ecd6"
  },
  {
    "url": "生活分享/life.html",
    "revision": "d382020f10730d86197da95c6cfbedaf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
