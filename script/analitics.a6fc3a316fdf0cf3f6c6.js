!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=154)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(68))},function(t,e,n){var r=n(0),o=n(14),i=n(33),c=n(60),u=r.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=c&&u[t]||(c?u:i)("Symbol."+t))}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(0),o=n(21).f,i=n(8),c=n(16),u=n(26),a=n(56),f=n(59);t.exports=function(t,e){var n,s,l,p,v,y=t.target,g=t.global,h=t.stat;if(n=g?r:h?r[y]||u(y,{}):(r[y]||{}).prototype)for(s in e){if(p=e[s],l=t.noTargetGet?(v=o(n,s))&&v.value:n[s],!f(g?s:y+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,s,p,t)}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(2);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(7),o=n(9),i=n(20);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(7),o=n(47),i=n(5),c=n(22),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(39),o=n(19);t.exports=function(t){return r(o(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(57),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(29),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(25),o=n(69);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.4.1",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(31);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,o;return e=t,o=[{key:"ToNewsDateFormat",value:function(t){var e=new Date(t),n=e.getDate(),r=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"][e.getMonth()],o=e.getFullYear();return"".concat(n," ").concat(r,", ").concat(o)}},{key:"ToDateTagFormat",value:function(t){var e=new Date(t),n=e.getDate(),r=e.getMonth(),o=e.getFullYear();return"".concat(o,"-").concat(n,"-").concat(r)}},{key:"ToCommitDateFormat",value:function(t){var e=new Date(t),n=e.getDate(),r=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"][e.getMonth()],o=e.getFullYear();return"".concat(n," ").concat(r,", ").concat(o)}},{key:"ToStorageDate",value:function(t){var e=new Date(t),n=e.getDate(),r=["пн","вт","ср","чт","пт","сб","вс"][e.getDay()];return"".concat(n,", ").concat(r)}},{key:"ToStorageDateKey",value:function(t){var e=new Date(t);return 100*e.getMonth()+e.getDate()}},{key:"GetCurrentMonthName",value:function(){return["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"][(new Date).getMonth()]}},{key:"GetNewsApiDateInterval",value:function(){var t=new Date,e=new Date;return e.setDate(e.getDate()-7),{from:"".concat(e.getFullYear(),"-0").concat(e.getMonth()+1,"-").concat(e.getDate()),to:"".concat(t.getFullYear(),"-0").concat(t.getMonth()+1,"-").concat(t.getDate())}}}],(n=null)&&r(e.prototype,n),o&&r(e,o),t}()},function(t,e,n){var r=n(0),o=n(14),i=n(8),c=n(6),u=n(26),a=n(48),f=n(27),s=f.get,l=f.enforce,p=String(a).split("toString");o("inspectSource",(function(t){return a.call(t)})),(t.exports=function(t,e,n,o){var a=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof e||c(n,"name")||i(n,"name",e),l(n).source=p.join("string"==typeof e?e:"")),t!==r?(a?!s&&t[e]&&(f=!0):delete t[e],f?t[e]=n:i(t,e,n)):f?t[e]=n:u(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a.call(this)}))},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(19);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(7),o=n(55),i=n(20),c=n(10),u=n(22),a=n(6),f=n(47),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=c(t),e=u(e,!0),f)try{return s(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports={}},function(t,e,n){var r=n(11);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e){t.exports=!1},function(t,e,n){var r=n(0),o=n(8);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r,o,i,c=n(70),u=n(0),a=n(4),f=n(8),s=n(6),l=n(28),p=n(23),v=u.WeakMap;if(c){var y=new v,g=y.get,h=y.has,d=y.set;r=function(t,e){return d.call(y,t,e),e},o=function(t){return g.call(y,t)||{}},i=function(t){return h.call(y,t)}}else{var m=l("state");p[m]=!0,r=function(t,e){return f(t,m,e),e},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(14),o=n(33),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){"use strict";var r=n(3),o=n(2),i=n(24),c=n(4),u=n(18),a=n(13),f=n(53),s=n(43),l=n(37),p=n(1),v=n(35),y=p("isConcatSpreadable"),g=v>=51||!o((function(){var t=[];return t[y]=!1,t.concat()[0]!==t})),h=l("concat"),d=function(t){if(!c(t))return!1;var e=t[y];return void 0!==e?!!e:i(t)};r({target:"Array",proto:!0,forced:!g||!h},{concat:function(t){var e,n,r,o,i,c=u(this),l=s(c,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?c:arguments[e],d(i)){if(p+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&f(l,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},function(t,e,n){var r=n(0),o=n(4),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(42),o=n(39),i=n(18),c=n(13),u=n(43),a=[].push,f=function(t){var e=1==t,n=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,y,g,h){for(var d,m,x=i(v),S=o(x),b=r(y,g,3),w=c(S.length),T=0,O=h||u,M=e?O(v,w):n?O(v,0):void 0;w>T;T++)if((p||T in S)&&(m=b(d=S[T],T,x),t))if(e)M[T]=m;else if(m)switch(t){case 3:return!0;case 5:return d;case 6:return T;case 2:a.call(M,d)}else if(s)return!1;return l?-1:f||s?s:M}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,e,n){var r,o,i=n(0),c=n(63),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){var r=n(5),o=n(77),i=n(30),c=n(23),u=n(62),a=n(32),f=n(28)("IE_PROTO"),s=function(){},l=function(){var t,e=a("iframe"),n=i.length;for(e.style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;n--;)delete l.prototype[i[n]];return l()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[f]=t):n=l(),void 0===e?n:o(n,e)},c[f]=!0},function(t,e,n){var r=n(2),o=n(1),i=n(35),c=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){"use strict";var r=n(3),o=n(51);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e,n){var r=n(2),o=n(11),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(49),o=n(30).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(10),o=n(13),i=n(50),c=function(t){return function(e,n,c){var u,a=r(e),f=o(a.length),s=i(c,f);if(t&&n!=n){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(17);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(4),o=n(24),i=n(1)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){var r=n(49),o=n(30);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(0),o=n(66),i=n(51),c=n(8);for(var u in o){var a=r[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,e,n){var r=n(7),o=n(2),i=n(32);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(14);t.exports=r("native-function-to-string",Function.toString)},function(t,e,n){var r=n(6),o=n(10),i=n(41).indexOf,c=n(23);t.exports=function(t,e){var n,u=o(t),a=0,f=[];for(n in u)!r(c,n)&&r(u,n)&&f.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){var r=n(29),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e,n){"use strict";var r=n(34).forEach,o=n(44);t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},,function(t,e,n){"use strict";var r=n(22),o=n(9),i=n(20);t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},,function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(6),o=n(71),i=n(21),c=n(9);t.exports=function(t,e){for(var n=o(e),u=c.f,a=i.f,f=0;f<n.length;f++){var s=n[f];r(t,s)||u(t,s,a(e,s))}}},function(t,e,n){t.exports=n(0)},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(2),o=/#|\.prototype\./,i=function(t,e){var n=u[c(t)];return n==f||n!=a&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,e,n){var r=n(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},,function(t,e,n){var r=n(12);t.exports=r("document","documentElement")},function(t,e,n){var r=n(12);t.exports=r("navigator","userAgent")||""},function(t,e,n){var r=n(1),o=n(36),i=n(8),c=r("unscopables"),u=Array.prototype;null==u[c]&&i(u,c,o(null)),t.exports=function(t){u[c][t]=!0}},,function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){var r=n(4),o=n(11),i=n(1)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(0),o=n(26),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(0),o=n(48),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,e,n){var r=n(12),o=n(40),i=n(58),c=n(5);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},,,,,,function(t,e,n){var r=n(7),o=n(9),i=n(5),c=n(45);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=c(e),u=r.length,a=0;u>a;)o.f(t,n=r[a++],e[n]);return t}},,function(t,e,n){"use strict";var r=n(3),o=n(41).includes,i=n(64);r({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},function(t,e,n){"use strict";var r=n(3),o=n(81),i=n(19);r({target:"String",proto:!0,forced:!n(82)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var r=n(67);t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,e,n){var r=n(1)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,"/./"[t](e)}catch(t){}}return!1}},,,function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(38),n(79),n(80),n(46);var r=n(15);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i;return e=t,(n=[{key:"storeQueryResult",value:function(t,e){localStorage.setItem("NEWS-COUNT",t.totalResults),localStorage.setItem("QUERY-NAME",e),localStorage.setItem("CURRENT-MONTH",r.a.GetCurrentMonthName()),this.titleMentionCount=0;var n=this._evaluateStatistics(t.articles,e);localStorage.setItem("TITLE-MENTION-COUNT",this.titleMentionCount),localStorage.setItem("STATISTICS",JSON.stringify(n))}},{key:"getQueryName",value:function(){return localStorage.getItem("QUERY-NAME")}},{key:"getNewsCount",value:function(){return localStorage.getItem("NEWS-COUNT")}},{key:"getTitleMentionCount",value:function(){return localStorage.getItem("TITLE-MENTION-COUNT")}},{key:"getStatistics",value:function(){return localStorage.getItem("STATISTICS")}},{key:"getCurrentMonth",value:function(){return localStorage.getItem("CURRENT-MONTH")}},{key:"_evaluateStatistics",value:function(t,e){var n=this,o={};return t.forEach((function(t){t.title.toLowerCase().includes(e)&&n.titleMentionCount++;var i=r.a.ToStorageDate(t.publishedAt),c=r.a.ToStorageDateKey(t.publishedAt);void 0===o[c]?o[c]={date:i,articlesCount:1}:o[c].articlesCount++})),o}}])&&o(e.prototype,n),i&&o(e,i),t}()},,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var r=n(3),o=n(17),i=n(18),c=n(2),u=n(44),a=[],f=a.sort,s=c((function(){a.sort(void 0)})),l=c((function(){a.sort(null)})),p=u("sort");r({target:"Array",proto:!0,forced:s||!l||p},{sort:function(t){return void 0===t?f.call(i(this)):f.call(i(this),o(t))}})},function(t,e,n){var r=n(3),o=n(18),i=n(45);r({target:"Object",stat:!0,forced:n(2)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){},,,function(t,e,n){"use strict";n.r(e);n(38),n(111),n(112),n(46),n(151);var r=n(85);n(31);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.lineDate=e,this.lineValue=n}var e,n,r;return e=t,(n=[{key:"createSchemeItem",value:function(t){return'\n            <div class="scheme__item">\n                <div class="scheme__data-item">'.concat(this.lineDate,'</div>\n                <span class="scheme__value-item">').concat(this.lineValue,'</span>\n                <svg class="scheme__bar-container" viewBox="0 0 100 100" preserveAspectRatio="none">\n                    <rect class="scheme__value-bar" fill="#2F71E5" width="').concat(this.lineValue,'%" />\n                </svg>\n            </div>\n        ')}}])&&o(e.prototype,n),r&&o(e,r),t}(),c=document.querySelector("#keyWord"),u=document.querySelector("#weekCount"),a=document.querySelector("#titleCount"),f=document.querySelector(".scheme__items"),s=document.querySelector(".data-month"),l=new r.a;c.textContent=l.getQueryName(),u.textContent=l.getNewsCount(),a.textContent=l.getTitleMentionCount(),s.textContent=l.getCurrentMonth();var p=JSON.parse(l.getStatistics());Object.keys(p).sort().forEach((function(t,e){var n=p[t],r=new i(n.date,n.articlesCount);f.insertAdjacentHTML("beforeend",r.createSchemeItem())}))}]);