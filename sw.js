importScripts("https://img.dreamfall.cn/workbox-sw.js"),workbox?console.log("workbox加载成功🎉"):console.log("workbox加载失败😬"),workbox.setConfig({debug:!0}),workbox.core.setCacheNameDetails({prefix:"梦璃雨落",suffix:"缓存",precache:"离线后备",runtime:"运行时"}),self.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"07c6fd3d7b82dbf408a63cb6ac9604ca",url:"./404.html"},{revision:"5be0ff23bd5cab48cba829ca10d05a5c",url:"./index.html"},{revision:"c1af462dae036cfccb0dae0735d2ad77",url:"./atom.xml"},{revision:"82e3e2ceb8761806d2fb27197a9c7786",url:"./baidusitemap.xml"},{revision:"215cd1301e569f833098ab3ed59f60ae",url:"./css/index.css"},{revision:"efb57614f6e6a97f61bf8048e6c023ff",url:"./css/screen.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"676031bd577daa40ab16ef421ab041a9",url:"./img/siteicon/browserconfig.xml"},{revision:"405e65bc3a211b60fa56f7f578eb474b",url:"./js/custom/cdiytitle.js"},{revision:"45a789e9817f8bb82cdab8d075b9d4da",url:"./js/custom/commentBarrage.js"},{revision:"034f91e9b83b41bf794b0410efd45025",url:"./js/custom/custom.js"},{revision:"d72529613747fdec43a2abd78c8eb378",url:"./js/custom/fixed_card_widget.js"},{revision:"abcf394ad8353cb304ecc5d3f23b4b5c",url:"./js/custom/fixed_comment.js"},{revision:"92bacff50587527d43589642a7caecff",url:"./js/custom/ip_content.js"},{revision:"fec0925627d19d2d0852cbb9a99849be",url:"./js/custom/popup.js"},{revision:"34ebbdd7840f84e5e6ec306f6dc06b71",url:"./js/custom/sun_moon.js"},{revision:"c2d6628801fd2dc0ea1739901cf5d99b",url:"./js/main.js"},{revision:"d36a279469bce7854189f9481d3d0860",url:"./js/search/algolia.js"},{revision:"4f79884e04a163f9348c3961cf84d50e",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"a8fece86a37328e6c6b35883347dc08a",url:"./js/txmap.js"},{revision:"24971090b8b1bd5d3f538d414e270fd3",url:"./js/utils.js"},{revision:"3de12a8596b8341a36906078252f18b1",url:"./search.xml"},{revision:"43f1bf714dad5b61be06d396c39cefa3",url:"./sitemap.xml"}],{ignoreUrlParametersMatching:[/.*/],directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches();const FALLBACK_CACHE_NAME="离线后备",FALLBACK_HTML="/offline/index.html";self.addEventListener("install",(e=>{e.waitUntil(caches.open("离线后备").then((e=>e.add(FALLBACK_HTML))))}));const Timeout=new workbox.strategies.NetworkOnly({networkTimeoutSeconds:5,plugins:[{handlerDidError:async()=>await caches.match(FALLBACK_HTML,{cacheName:"离线后备"})}]});workbox.routing.registerRoute(new workbox.routing.NavigationRoute(Timeout)),workbox.routing.registerRoute(/\.(?:js|css)$/,new workbox.strategies.StaleWhileRevalidate({cacheName:"静态资源",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:svg|ico|cur|background.webp)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();