(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7166],{33718:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(30195).default,o=i(54566).Z,a=i(9788).Z;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e,i,c=t.src,s=t.sizes,m=t.unoptimized,p=void 0!==m&&m,w=t.priority,E=void 0!==w&&w,k=t.loading,I=t.lazyRoot,O=t.lazyBoundary,L=t.className,R=t.quality,_=t.width,q=t.height,C=t.style,N=t.objectFit,P=t.objectPosition,W=t.onLoadingComplete,B=t.placeholder,D=void 0===B?"empty":B,M=t.blurDataURL,Z=l(t,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),V=u.useContext(h.ImageConfigContext),U=u.useMemo(function(){var t=y||V||f.imageConfigDefault,e=a(t.deviceSizes).concat(a(t.imageSizes)).sort(function(t,e){return t-e}),i=t.deviceSizes.sort(function(t,e){return t-e});return r({},t,{allSizes:e,deviceSizes:i})},[V]),F=s?"responsive":"intrinsic";"layout"in Z&&(Z.layout&&(F=Z.layout),delete Z.layout);var H=x;if("loader"in Z){if(Z.loader){var G=Z.loader;H=function(t){t.config;var e=l(t,["config"]);return G(e)}}delete Z.loader}var T="";if(function(t){var e;return"object"==typeof t&&(S(t)||void 0!==t.src)}(c)){var J=S(c)?c.default:c;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(M=M||J.blurDataURL,T=J.src,(!F||"fill"!==F)&&(q=q||J.height,_=_||J.width,!J.height||!J.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}c="string"==typeof c?c:T;var Q=!E&&("lazy"===k||void 0===k);(c.startsWith("data:")||c.startsWith("blob:"))&&(p=!0,Q=!1),v.has(c)&&(Q=!1),U.unoptimized&&(p=!0);var K=o(u.useState(!1),2),X=K[0],Y=K[1],$=o(g.useIntersection({rootRef:void 0===I?null:I,rootMargin:O||"200px",disabled:!Q}),3),tt=$[0],te=$[1],ti=$[2],tn=!Q||te,to={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ta={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},tr=!1,tc=A(_),ts=A(q),tl=A(R),tu=Object.assign({},C,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:N,objectPosition:P}),td="blur"!==D||X?{}:{backgroundSize:N||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(M,'")')};if("fill"===F)to.display="block",to.position="absolute",to.top=0,to.left=0,to.bottom=0,to.right=0;else if(void 0!==tc&&void 0!==ts){var tf=ts/tc,tg=isNaN(tf)?"100%":"".concat(100*tf,"%");"responsive"===F?(to.display="block",to.position="relative",tr=!0,ta.paddingTop=tg):"intrinsic"===F?(to.display="inline-block",to.position="relative",to.maxWidth="100%",tr=!0,ta.maxWidth="100%",e="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(tc,"%27%20height=%27").concat(ts,"%27/%3e")):"fixed"===F&&(to.display="inline-block",to.position="relative",to.width=tc,to.height=ts)}var th={src:b,srcSet:void 0,sizes:void 0};tn&&(th=z({config:U,src:c,unoptimized:p,layout:F,width:tc,quality:tl,sizes:s,loader:H}));var tm=c,tp=(n(i={},"imagesrcset",th.srcSet),n(i,"imagesizes",th.sizes),n(i,"crossOrigin",Z.crossOrigin),i),ty=u.default.useLayoutEffect,tv=u.useRef(W),tb=u.useRef(c);u.useEffect(function(){tv.current=W},[W]),ty(function(){tb.current!==c&&(ti(),tb.current=c)},[ti,c]);var tw=r({isLazy:Q,imgAttributes:th,heightInt:ts,widthInt:tc,qualityInt:tl,layout:F,className:L,imgStyle:tu,blurStyle:td,loading:k,config:U,unoptimized:p,placeholder:D,loader:H,srcString:tm,onLoadingCompleteRef:tv,setBlurComplete:Y,setIntersection:tt,isVisible:tn,noscriptSizes:s},Z);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:to},tr?u.default.createElement("span",{style:ta},e?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:e}):null):null,u.default.createElement(j,Object.assign({},tw))),E?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+th.src+th.srcSet+th.sizes,rel:"preload",as:"image",href:th.srcSet?void 0:th.src},tp))):null)};var r=i(59419).Z,c=i(23903).Z,s=i(30199).Z,l=i(15154).Z,u=s(i(2784)),d=c(i(75913)),f=i(18113),g=i(22030),h=i(20001);i(34750);var m=i(60583);function p(t){return"/"===t[0]?t.slice(1):t}var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1},v=new Set,b="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",w=new Map([["default",function(t){var e=t.config,i=t.src,n=t.width,o=t.quality;return i.endsWith(".svg")&&!e.dangerouslyAllowSVG?i:"".concat(m.normalizePathTrailingSlash(e.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(t){var e=t.config,i=t.src,n=t.width,o=t.quality,a=new URL("".concat(e.path).concat(p(i))),r=a.searchParams;return r.set("auto",r.getAll("auto").join(",")||"format"),r.set("fit",r.get("fit")||"max"),r.set("w",r.get("w")||n.toString()),o&&r.set("q",o.toString()),a.href}],["cloudinary",function(t){var e,i=t.config,n=t.src,o=t.width,a=["f_auto","c_limit","w_"+o,"q_"+(t.quality||"auto")].join(",")+"/";return"".concat(i.path).concat(a).concat(p(n))}],["akamai",function(t){var e=t.config,i=t.src,n=t.width;return"".concat(e.path).concat(p(i),"?imwidth=").concat(n)}],["custom",function(t){var e=t.src;throw Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function S(t){return void 0!==t.default}function z(t){var e=t.config,i=t.src,n=t.unoptimized,o=t.layout,r=t.width,c=t.quality,s=t.sizes,l=t.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var u=function(t,e,i,n){var o=t.deviceSizes,r=t.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var c=/(^|\s)(1?\d?\d)vw/g,s=[];l=c.exec(n);l)s.push(parseInt(l[2]));if(s.length){var l,u,d=.01*(u=Math).min.apply(u,a(s));return{widths:r.filter(function(t){return t>=o[0]*d}),kind:"w"}}return{widths:r,kind:"w"}}return"number"!=typeof e||"fill"===i||"responsive"===i?{widths:o,kind:"w"}:{widths:a(new Set([e,2*e].map(function(t){return r.find(function(e){return e>=t})||r[r.length-1]}))),kind:"x"}}(e,r,o,s),d=u.widths,f=u.kind,g=d.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:d.map(function(t,n){return"".concat(l({config:e,src:i,quality:c,width:t})," ").concat("w"===f?t:n+1).concat(f)}).join(", "),src:l({config:e,src:i,quality:c,width:d[g]})}}function A(t){return"number"==typeof t?t:"string"==typeof t?parseInt(t,10):void 0}function x(t){var e,i=(null==(e=t.config)?void 0:e.loader)||"default",n=w.get(i);if(n)return n(t);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function E(t,e,i,n,o,a){t&&t.src!==b&&t["data-loaded-src"]!==e&&(t["data-loaded-src"]=e,("decode"in t?t.decode():Promise.resolve()).catch(function(){}).then(function(){if(t.parentNode&&(v.add(e),"blur"===n&&a(!0),null==o?void 0:o.current)){var i=t.naturalWidth,r=t.naturalHeight;o.current({naturalWidth:i,naturalHeight:r})}}))}var j=function(t){var e=t.imgAttributes,i=(t.heightInt,t.widthInt),n=t.qualityInt,o=t.layout,a=t.className,c=t.imgStyle,s=t.blurStyle,d=t.isLazy,f=t.placeholder,g=t.loading,h=t.srcString,m=t.config,p=t.unoptimized,y=t.loader,v=t.onLoadingCompleteRef,b=t.setBlurComplete,w=t.setIntersection,S=t.onLoad,A=t.onError,x=(t.isVisible,t.noscriptSizes),j=l(t,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=d?"lazy":g,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},j,e,{decoding:"async","data-nimg":o,className:a,style:r({},c,s),ref:u.useCallback(function(t){w(t),(null==t?void 0:t.complete)&&E(t,h,o,f,v,b)},[w,h,o,f,v,b,]),onLoad:function(t){E(t.currentTarget,h,o,f,v,b),S&&S(t)},onError:function(t){"blur"===f&&b(!0),A&&A(t)}})),(d||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},j,z({config:m,src:h,unoptimized:p,layout:o,width:i,quality:n,sizes:x,loader:y}),{decoding:"async","data-nimg":o,style:c,className:a,loading:g}))))};("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},96577:function(t,e,i){t.exports=i(33718)},20452:function(t,e,i){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var n=i(2784),o="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},a=n.useState,r=n.useEffect,c=n.useLayoutEffect,s=n.useDebugValue;function l(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!o(t,i)}catch(n){return!0}}function u(t,e){return e()}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?u:function(t,e){var i=e(),n=a({inst:{value:i,getSnapshot:e}}),o=n[0].inst,u=n[1];return c(function(){o.value=i,o.getSnapshot=e,l(o)&&u({inst:o})},[t,i,e]),r(function(){return l(o)&&u({inst:o}),t(function(){l(o)&&u({inst:o})})},[t]),s(i),i};e.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:d},43100:function(t,e,i){"use strict";t.exports=i(20452)},7896:function(t,e,i){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}i.d(e,{Z:function(){return n}})},31461:function(t,e,i){"use strict";function n(t,e){if(null==t)return{};var i,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}i.d(e,{Z:function(){return n}})}}]);