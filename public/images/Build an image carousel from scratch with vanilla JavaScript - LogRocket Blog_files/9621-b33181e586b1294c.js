(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9621],{87944:function(e){function r(e){var o,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e){if(Array.isArray(e))for(o=0;o<e.length;o++)e[o]&&(t=r(e[o]))&&(n&&(n+=" "),n+=t);else for(o in e)e[o]&&(n&&(n+=" "),n+=o)}return n}function o(){for(var e,o,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(o=r(e))&&(n&&(n+=" "),n+=o);return n}e.exports=o,e.exports.clsx=o},52766:function(e,r,o){"use strict";e.exports=o(9119)},9119:function(e,r){"use strict";function o(){for(var e,r,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(r=t(e))&&(n&&(n+=" "),n+=r);return n}function t(e){if("string"==typeof e)return e;for(var r,o="",n=0;n<e.length;n++)e[n]&&(r=t(e[n]))&&(o&&(o+=" "),o+=r);return o}Object.defineProperty(r,"__esModule",{value:!0});var n=/^\[(.+)\]$/;function i(e,r){var o=e;return r.split("-").forEach(function(e){o.nextPart.has(e)||o.nextPart.set(e,{nextPart:new Map,validators:[]}),o=o.nextPart.get(e)}),o}var l=/\s+/;function a(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];var a,s,c,d=function(e){var o,t,l,p,f,b,m,g,h,v,y,x,w,k,z,C,j,M=r[0];return s=(a={cache:function(e){if(e<1)return{get:function(){},set:function(){}};var r=0,o=new Map,t=new Map;function n(n,i){o.set(n,i),++r>e&&(r=0,t=o,o=new Map)}return{get:function(e){var r=o.get(e);return void 0!==r?r:void 0!==(r=t.get(e))?(n(e,r),r):void 0},set:function(e,r){o.has(e)?o.set(e,r):n(e,r)}}}((o=r.slice(1).reduce(function(e,r){return r(e)},M())).cacheSize),splitModifiers:(p=1===(l=o.separator||":").length,f=l[0],b=l.length,function(e){for(var r,o=[],t=0,n=0,i=0;i<e.length;i++){var a=e[i];if(0===t){if(a===f&&(p||e.slice(i,i+b)===l)){o.push(e.slice(n,i)),n=i+b;continue}if("/"===a){r=i;continue}}"["===a?t++:"]"===a&&t--}var s=0===o.length?e:e.substring(n),c=s.startsWith("!");return{modifiers:o,hasImportantModifier:c,baseClassName:c?s.substring(1):s,maybePostfixModifierPosition:r&&r>n?r-n:void 0}}),...(y=o.theme,x=o.prefix,w={nextPart:new Map,validators:[]},(h=Object.entries(o.classGroups),x?h.map(function(e){return[e[0],e[1].map(function(e){return"string"==typeof e?x+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(function(e){return[x+e[0],e[1]]})):e})]}):h).forEach(function(e){(function e(r,o,t,n){r.forEach(function(r){if("string"!=typeof r){if("function"==typeof r)return r.isThemeGetter?void e(r(n),o,t,n):void o.validators.push({validator:r,classGroupId:t});Object.entries(r).forEach(function(r){e(r[1],i(o,r[0]),t,n)})}else(""===r?o:i(o,r)).classGroupId=t})})(e[1],w,e[0],y)}),z=o.conflictingClassGroups,j=void 0===(C=o.conflictingClassGroupModifiers)?{}:C,{getClassGroupId:function(e){var r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),function e(r,o){if(0===r.length)return o.classGroupId;var t=o.nextPart.get(r[0]),n=t?e(r.slice(1),t):void 0;if(n)return n;if(0!==o.validators.length){var i=r.join("-");return o.validators.find(function(e){return e.validator(i)})?.classGroupId}}(r,w)||function(e){if(n.test(e)){var r=n.exec(e)[1],o=r?.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}}(e)},getConflictingClassGroupIds:function(e,r){var o=z[e]||[];return r&&j[e]?[].concat(o,j[e]):o}})}).cache.get,c=a.cache.set,d=u,u(e)};function u(e){var r=s(e);if(r)return r;var o,t,n,i,d,u,p=(n=(t=a).splitModifiers,i=t.getClassGroupId,d=t.getConflictingClassGroupIds,u=new Set,e.trim().split(l).map(function(e){var r=n(e),o=r.modifiers,t=r.hasImportantModifier,l=r.baseClassName,a=r.maybePostfixModifierPosition,s=i(a?l.substring(0,a):l),c=Boolean(a);if(!s){if(!a||!(s=i(l)))return{isTailwindClass:!1,originalClassName:e};c=!1}var d=(function(e){if(e.length<=1)return e;var r=[],o=[];return e.forEach(function(e){"["===e[0]?(r.push.apply(r,o.sort().concat([e])),o=[]):o.push(e)}),r.push.apply(r,o.sort()),r})(o).join(":");return{isTailwindClass:!0,modifierId:t?d+"!":d,classGroupId:s,originalClassName:e,hasPostfixModifier:c}}).reverse().filter(function(e){if(!e.isTailwindClass)return!0;var r=e.modifierId,o=e.classGroupId,t=e.hasPostfixModifier,n=r+o;return!u.has(n)&&(u.add(n),d(o,t).forEach(function(e){return u.add(r+e)}),!0)}).reverse().map(function(e){return e.originalClassName}).join(" "));return c(e,p),p}return function(){return d(o.apply(null,arguments))}}function s(e){var r=function(r){return r[e]||[]};return r.isThemeGetter=!0,r}var c=/^\[(?:([a-z-]+):)?(.+)\]$/i,d=/^\d+\/\d+$/,u=new Set(["px","full","screen"]),p=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,f=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,b=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function m(e){return w(e)||u.has(e)||d.test(e)||g(e)}function g(e){return P(e,"length",A)}function h(e){return P(e,"size",I)}function v(e){return P(e,"position",I)}function y(e){return P(e,"url",N)}function x(e){return P(e,"number",w)}function w(e){return!Number.isNaN(Number(e))}function k(e){return e.endsWith("%")&&w(e.slice(0,-1))}function z(e){return S(e)||P(e,"number",S)}function C(e){return c.test(e)}function j(){return!0}function M(e){return p.test(e)}function G(e){return P(e,"",_)}function P(e,r,o){var t=c.exec(e);return!!t&&(t[1]?t[1]===r:o(t[2]))}function A(e){return f.test(e)}function I(){return!1}function N(e){return e.startsWith("url(")}function S(e){return Number.isInteger(Number(e))}function _(e){return b.test(e)}function E(){var e=s("colors"),r=s("spacing"),o=s("blur"),t=s("brightness"),n=s("borderColor"),i=s("borderRadius"),l=s("borderSpacing"),a=s("borderWidth"),c=s("contrast"),d=s("grayscale"),u=s("hueRotate"),p=s("invert"),f=s("gap"),b=s("gradientColorStops"),P=s("gradientColorStopPositions"),A=s("inset"),I=s("margin"),N=s("opacity"),S=s("padding"),_=s("saturate"),E=s("scale"),T=s("sepia"),O=s("skew"),W=s("space"),$=s("translate"),R=function(){return["auto",C,r]},q=function(){return[C,r]},L=function(){return["",m]},B=function(){return["auto",w,C]},D=function(){return["","0",C]},J=function(){return[w,x]},U=function(){return[w,C]};return{cacheSize:500,theme:{colors:[j],spacing:[m],blur:["none","",M,C],brightness:J(),borderColor:[e],borderRadius:["none","","full",M,C],borderSpacing:q(),borderWidth:L(),contrast:J(),grayscale:D(),hueRotate:U(),invert:D(),gap:q(),gradientColorStops:[e],gradientColorStopPositions:[k,g],inset:R(),margin:R(),opacity:J(),padding:q(),saturate:J(),scale:J(),sepia:D(),skew:U(),space:q(),translate:q()},classGroups:{aspect:[{aspect:["auto","square","video",C]}],container:["container"],columns:[{columns:[M]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],[C])}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[A]}],"inset-x":[{"inset-x":[A]}],"inset-y":[{"inset-y":[A]}],start:[{start:[A]}],end:[{end:[A]}],top:[{top:[A]}],right:[{right:[A]}],bottom:[{bottom:[A]}],left:[{left:[A]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",z]}],basis:[{basis:R()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",C]}],grow:[{grow:D()}],shrink:[{shrink:D()}],order:[{order:["first","last","none",z]}],"grid-cols":[{"grid-cols":[j]}],"col-start-end":[{col:["auto",{span:["full",z]},C]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[j]}],"row-start-end":[{row:["auto",{span:[z]},C]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",C]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",C]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal"].concat(["start","end","center","between","around","evenly","stretch"])}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(["start","end","center","between","around","evenly","stretch"],["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(["start","end","center","between","around","evenly","stretch"],["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[S]}],px:[{px:[S]}],py:[{py:[S]}],ps:[{ps:[S]}],pe:[{pe:[S]}],pt:[{pt:[S]}],pr:[{pr:[S]}],pb:[{pb:[S]}],pl:[{pl:[S]}],m:[{m:[I]}],mx:[{mx:[I]}],my:[{my:[I]}],ms:[{ms:[I]}],me:[{me:[I]}],mt:[{mt:[I]}],mr:[{mr:[I]}],mb:[{mb:[I]}],ml:[{ml:[I]}],"space-x":[{"space-x":[W]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[W]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",C,r]}],"min-w":[{"min-w":["min","max","fit",C,m]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[M]},M,C]}],h:[{h:[C,r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",C,m]}],"max-h":[{"max-h":[C,r,"min","max","fit"]}],"font-size":[{text:["base",M,g]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",x]}],"font-family":[{font:[j]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",C]}],"line-clamp":[{"line-clamp":["none",w,x]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",C,m]}],"list-image":[{"list-image":["none",C]}],"list-style-type":[{list:["none","disc","decimal",C]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[N]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[N]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(["solid","dashed","dotted","double","none"],["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",m]}],"underline-offset":[{"underline-offset":["auto",C,m]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:q()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",C]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",C]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[N]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],[v])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",h]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},y]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[P]}],"gradient-via-pos":[{via:[P]}],"gradient-to-pos":[{to:[P]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[N]}],"border-style":[{border:[].concat(["solid","dashed","dotted","double","none"],["hidden"])}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[N]}],"divide-style":[{divide:["solid","dashed","dotted","double","none"]}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(["solid","dashed","dotted","double","none"])}],"outline-offset":[{"outline-offset":[C,m]}],"outline-w":[{outline:[m]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:L()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[N]}],"ring-offset-w":[{"ring-offset":[m]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",M,G]}],"shadow-color":[{shadow:[j]}],opacity:[{opacity:[N]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",M,C]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[p]}],saturate:[{saturate:[_]}],sepia:[{sepia:[T]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[N]}],"backdrop-saturate":[{"backdrop-saturate":[_]}],"backdrop-sepia":[{"backdrop-sepia":[T]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",C]}],duration:[{duration:U()}],ease:[{ease:["linear","in","out","in-out",C]}],delay:[{delay:U()}],animate:[{animate:["none","spin","ping","pulse","bounce",C]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[E]}],"scale-x":[{"scale-x":[E]}],"scale-y":[{"scale-y":[E]}],rotate:[{rotate:[z,C]}],"translate-x":[{"translate-x":[$]}],"translate-y":[{"translate-y":[$]}],"skew-x":[{"skew-x":[O]}],"skew-y":[{"skew-y":[O]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",C]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",C]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":q()}],"scroll-mx":[{"scroll-mx":q()}],"scroll-my":[{"scroll-my":q()}],"scroll-ms":[{"scroll-ms":q()}],"scroll-me":[{"scroll-me":q()}],"scroll-mt":[{"scroll-mt":q()}],"scroll-mr":[{"scroll-mr":q()}],"scroll-mb":[{"scroll-mb":q()}],"scroll-ml":[{"scroll-ml":q()}],"scroll-p":[{"scroll-p":q()}],"scroll-px":[{"scroll-px":q()}],"scroll-py":[{"scroll-py":q()}],"scroll-ps":[{"scroll-ps":q()}],"scroll-pe":[{"scroll-pe":q()}],"scroll-pt":[{"scroll-pt":q()}],"scroll-pr":[{"scroll-pr":q()}],"scroll-pb":[{"scroll-pb":q()}],"scroll-pl":[{"scroll-pl":q()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",C]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[m,x]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}function T(e,r){for(var o in r)$(e,o,r[o]);return e}var O=Object.prototype.hasOwnProperty,W=new Set(["string","number","boolean"]);function $(e,r,o){if(O.call(e,r)&&!W.has(typeof o)&&null!==o){if(Array.isArray(o)&&Array.isArray(e[r]))e[r]=e[r].concat(o);else if("object"==typeof o&&"object"==typeof e[r]){if(null===e[r])return void(e[r]=o);for(var t in o)$(e[r],t,o[t])}}else e[r]=o}var R=a(E);r.createTailwindMerge=a,r.extendTailwindMerge=function(e){for(var r=arguments.length,o=Array(r>1?r-1:0),t=1;t<r;t++)o[t-1]=arguments[t];return a.apply(void 0,"function"==typeof e?[E,e].concat(o):[function(){return T(E(),e)}].concat(o))},r.fromTheme=s,r.getDefaultConfig=E,r.join=o,r.mergeConfigs=T,r.twJoin=o,r.twMerge=R,r.validators={__proto__:null,isAny:j,isArbitraryLength:g,isArbitraryNumber:x,isArbitraryPosition:v,isArbitraryShadow:G,isArbitrarySize:h,isArbitraryUrl:y,isArbitraryValue:C,isArbitraryWeight:x,isInteger:z,isLength:m,isNumber:w,isPercent:k,isTshirtSize:M}}}]);