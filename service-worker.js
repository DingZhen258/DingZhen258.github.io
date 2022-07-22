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
    "revision": "7d2ff24f5a4833e0e836fd9af2866aff"
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
    "url": "assets/js/12.4cc9c99f.js",
    "revision": "9ac2f230b43a1505111309b4e2d66143"
  },
  {
    "url": "assets/js/13.9c122b31.js",
    "revision": "bbb1d688731d3f77d9584267dd5a6eab"
  },
  {
    "url": "assets/js/14.3ce24242.js",
    "revision": "39e5e6f084e4f74d8c47b6344ad6a523"
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
    "url": "assets/js/app.1b82629d.js",
    "revision": "ed651ab48a0519dd7447621d8ccc6e26"
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
    "revision": "1b85c1974372b5f4d2da7b98af3c524b"
  },
  {
    "url": "categories/java/index.html",
    "revision": "73ec4588871d3849c254158d542073d3"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "2bfdf47f3d15fddd024dfbcdd871f6d3"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "fc765ba2f1f8f9690137bf3563fc55ad"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "9c0a814989fcc3856b7a5c52ce5fbe1d"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "2cafbd5ad49ab1bcfdc951b36f3b71ba"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
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
    "revision": "a51f0195334eba58c85afab6d66f5bb9"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "db6402da17f967e3474387114a6ac540"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "c816db327b727c768fb68bc708f54e13"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "184b139e6e1924616dadea0c407891d6"
  },
  {
    "url": "tags/js/index.html",
    "revision": "36c19f23975ce24a3a1ea534e0231732"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "fccf86991af16310fa20c3c20db828b0"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "e634c6f5c73d6098029648cba090c5c2"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "169daeaf0ca2ce423517affb2cab5e60"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "f4311512109246fd6c1295580b3a9d08"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "412ac10239a1b4b804e328d6fa417034"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "146423af4ac76798f476a246a5c697d6"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "8ae678f7a98e77726c94c93705a05d80"
  },
  {
    "url": "timeline/index.html",
    "revision": "7e0a302c946ddcf0ba2783671080c8db"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "31f784ed3fd80ccf1adb27c6426cc12b"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "92dedede87befd23ee0553c80fd3bc56"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "b073126c025f81576b260e698c946fac"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "65b761e9a9aee3b03f5e3087009c4318"
  },
  {
    "url": "生活分享/life.html",
    "revision": "140664e752d3172fe7727b19cd400aad"
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
