!function(t){function e(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var a={};e.m=t,e.c=a,e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="./public/",e(e.s=4)}([function(t,e){function a(t,e){var a=t[1]||"",r=t[3];if(!r)return a;if(e&&"function"==typeof btoa){var s=n(r);return[a].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([s]).join("\n")}return[a].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=a(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(n[s]=!0)}for(r=0;r<t.length;r++){var o=t[r];"number"==typeof o[0]&&n[o[0]]||(a&&!o[2]?o[2]=a:a&&(o[2]="("+o[2]+") and ("+a+")"),e.push(o))}},e}},function(t,e,a){function n(t,e){for(var a=0;a<t.length;a++){var n=t[a],r=m[n.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](n.parts[s]);for(;s<n.parts.length;s++)r.parts.push(c(n.parts[s],e))}else{for(var o=[],s=0;s<n.parts.length;s++)o.push(c(n.parts[s],e));m[n.id]={id:n.id,refs:1,parts:o}}}}function r(t,e){for(var a=[],n={},r=0;r<t.length;r++){var s=t[r],o=e.base?s[0]+e.base:s[0],i=s[1],l=s[2],p=s[3],c={css:i,media:l,sourceMap:p};n[o]?n[o].parts.push(c):a.push(n[o]={id:o,parts:[c]})}return a}function s(t,e){var a=h(t.insertInto);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=b[b.length-1];if("top"===t.insertAt)n?n.nextSibling?a.insertBefore(e,n.nextSibling):a.appendChild(e):a.insertBefore(e,a.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");a.appendChild(e)}}function o(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function i(t){var e=document.createElement("style");return t.attrs.type="text/css",p(e,t.attrs),s(t,e),e}function l(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",p(e,t.attrs),s(t,e),e}function p(t,e){Object.keys(e).forEach(function(a){t.setAttribute(a,e[a])})}function c(t,e){var a,n,r,s;if(e.transform&&t.css){if(!(s=e.transform(t.css)))return function(){};t.css=s}if(e.singleton){var p=w++;a=v||(v=i(e)),n=f.bind(null,a,p,!1),r=f.bind(null,a,p,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=l(e),n=d.bind(null,a,e),r=function(){o(a),a.href&&URL.revokeObjectURL(a.href)}):(a=i(e),n=u.bind(null,a),r=function(){o(a)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}function f(t,e,a,n){var r=a?"":n.css;if(t.styleSheet)t.styleSheet.cssText=k(e,r);else{var s=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function u(t,e){var a=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}function d(t,e,a){var n=a.css,r=a.sourceMap,s=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||s)&&(n=g(n)),r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var m={},y=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),h=function(t){var e={};return function(a){return void 0===e[a]&&(e[a]=t.call(this,a)),e[a]}}(function(t){return document.querySelector(t)}),v=null,w=0,b=[],g=a(7);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=y()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var a=r(t,e);return n(a,e),function(t){for(var s=[],o=0;o<a.length;o++){var i=a[o],l=m[i.id];l.refs--,s.push(l)}if(t){n(r(t,e),e)}for(var o=0;o<s.length;o++){var l=s[o];if(0===l.refs){for(var p=0;p<l.parts.length;p++)l.parts[p]();delete m[l.id]}}}};var k=function(){var t=[];return function(e,a){return t[e]=a,t.filter(Boolean).join("\n")}}()},function(t,e,a){t.exports=a.p+"images/lips.svg"},function(t,e,a){t.exports=a.p+"images/i-miss-u.png"},function(t,e,a){"use strict";a(5),a(8),a(11),a(13),a(15);var n=a(17);window.onload=function(){n.go()}},function(t,e,a){var n=a(6);"string"==typeof n&&(n=[[t.i,n,""]]);var r={};r.transform=void 0;a(1)(n,r);n.locals&&(t.exports=n.locals)},function(t,e,a){e=t.exports=a(0)(void 0),e.push([t.i,".stars{width:8.33333vw;position:absolute;top:-8.33333vw}.stars:first-child{left:69vw;animation:5s drop1 linear forwards .71127s}.stars:nth-child(2){left:77vw;animation:6s drop2 linear forwards 3.28933s}.stars:nth-child(3){left:17vw;animation:4s drop3 linear forwards 5.52924s}.stars:nth-child(4){left:16vw;animation:4s drop4 linear forwards .75122s}.stars:nth-child(5){left:13vw;animation:3s drop5 linear forwards 3.10142s}.stars:nth-child(6){left:18vw;animation:4s drop6 linear forwards 2.88709s}.stars:nth-child(7){left:8vw;animation:3s drop7 linear forwards 2.01985s}.stars:nth-child(8){left:11vw;animation:7s drop8 linear forwards 2.82666s}.stars:nth-child(9){left:73vw;animation:5s drop9 linear forwards 5.94139s}.stars:nth-child(10){left:69vw;animation:5s drop10 linear forwards 5.61361s}.stars:nth-child(11){left:11vw;animation:4s drop11 linear forwards 2.0668s}.stars:nth-child(12){left:91vw;animation:7s drop12 linear forwards .38783s}.stars:nth-child(13){left:92vw;animation:3s drop13 linear forwards 2.34049s}.stars:nth-child(14){left:65vw;animation:3s drop14 linear forwards 5.77351s}.stars:nth-child(15){left:31vw;animation:6s drop15 linear forwards 3.36042s}.stars:nth-child(16){left:71vw;animation:5s drop16 linear forwards 3.24768s}.stars:nth-child(17){left:48vw;animation:3s drop17 linear forwards .90859s}.stars:nth-child(18){left:18vw;animation:4s drop18 linear forwards .58581s}.stars:nth-child(19){left:53vw;animation:6s drop19 linear forwards 5.88841s}.stars:nth-child(20){left:87vw;animation:7s drop20 linear forwards .77352s}.stars:nth-child(21){left:67vw;animation:3s drop21 linear forwards 3.36695s}.stars:nth-child(22){left:69vw;animation:6s drop22 linear forwards .97564s}.stars:nth-child(23){left:80vw;animation:6s drop23 linear forwards 2.88097s}.stars:nth-child(24){left:28vw;animation:5s drop24 linear forwards 3.94437s}.stars:nth-child(25){left:71vw;animation:3s drop25 linear forwards 3.27735s}.stars:nth-child(26){left:74vw;animation:5s drop26 linear forwards 3.38699s}.stars:nth-child(27){left:24vw;animation:3s drop27 linear forwards 5.64178s}.stars:nth-child(28){left:16vw;animation:7s drop28 linear forwards 5.21738s}.stars:nth-child(29){left:92vw;animation:3s drop29 linear forwards .58291s}.stars:nth-child(30){left:65vw;animation:4s drop30 linear forwards 1.5745s}@keyframes drop1{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(39vw)}}@keyframes drop2{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(38vw)}}@keyframes drop3{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(17vw)}}@keyframes drop4{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(4vw)}}@keyframes drop5{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(3vw)}}@keyframes drop6{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(18vw)}}@keyframes drop7{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(-48vw)}}@keyframes drop8{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(-49vw)}}@keyframes drop9{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(-23vw)}}@keyframes drop10{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(-37vw)}}@keyframes drop11{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(32vw)}}@keyframes drop12{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(22vw)}}@keyframes drop13{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(3vw)}}@keyframes drop14{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(-24vw)}}@keyframes drop15{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(-6vw)}}@keyframes drop16{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(43vw)}}@keyframes drop17{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(39vw)}}@keyframes drop18{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(43vw)}}@keyframes drop19{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(-5vw)}}@keyframes drop20{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(-7vw)}}@keyframes drop21{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(5vw)}}@keyframes drop22{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(44vw)}}@keyframes drop23{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(25vw)}}@keyframes drop24{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(-30vw)}}@keyframes drop25{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(39vw)}}@keyframes drop26{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(22vw)}}@keyframes drop27{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(-37vw)}}@keyframes drop28{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(36vw)}}@keyframes drop29{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(24vw)}}@keyframes drop30{to{transform:translateY(calc(100vh + 8.333333333333334vw)) translateX(-37vw)}}",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var a=e.protocol+"//"+e.host,n=a+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var s;return s=0===r.indexOf("//")?r:0===r.indexOf("/")?a+r:n+r.replace(/^\.\//,""),"url("+JSON.stringify(s)+")"})}},function(t,e,a){var n=a(9);"string"==typeof n&&(n=[[t.i,n,""]]);var r={minimize:!0};r.transform=void 0;a(1)(n,r);n.locals&&(t.exports=n.locals)},function(t,e,a){e=t.exports=a(0)(void 0),e.push([t.i,".comment{width:103px;height:30px;position:relative;margin:30px auto 0;background:#c8f064;border-radius:5px;border:1px solid #a5d01b;font-size:17px;text-align:center;position:absolute;right:30px}.wx{background-image:url("+a(10)+');top:10px;width:30px;height:30px;background-size:cover;left:4px}.foot,.wx{position:absolute}.foot{background:#fff;width:100%;bottom:0;height:50px}.foot>.main{color:#000;line-height:30px;position:absolute;top:10px;left:52px;border:none;padding:0;margin:0;box-sizing:border-box;width:60%;font-size:20px;padding-left:20px;border-bottom:1px solid green}#send,#send:visited{display:inline-block;padding:5px 10px 6px;border-radius:3px;position:relative;cursor:pointer;color:#fff;position:absolute;top:10px;right:4px;border:none;background-color:#00af34;outline:none}.comment:after{content:"";width:0;height:0;position:absolute;top:4px;right:-14px;border:8px solid;border-color:transparent transparent transparent #c8f064;font-size:0}',""])},function(t,e,a){t.exports=a.p+"images/wx.png"},function(t,e,a){var n=a(12);"string"==typeof n&&(n=[[t.i,n,""]]);var r={minimize:!0};r.transform=void 0;a(1)(n,r);n.locals&&(t.exports=n.locals)},function(t,e,a){e=t.exports=a(0)(void 0),e.push([t.i,".purple{color:#c66cdc}.blue{color:#61a2c0}.gray{color:#bbbba1}.red{color:#c34034}.green{color:#98c379}.green-blue{color:#56b6c2}.yellow{color:#d9963f}.heartBg{background-color:#fc2e5a}.note{color:#5c6370;font-size:.12rem}.blank,.note{margin:0}",""])},function(t,e,a){var n=a(14);"string"==typeof n&&(n=[[t.i,n,""]]);var r={minimize:!0};r.transform=void 0;a(1)(n,r);n.locals&&(t.exports=n.locals)},function(t,e,a){e=t.exports=a(0)(void 0),e.push([t.i,'html{font-size:14.9925vh}body,html{background-color:#282c34;color:#282c34;overflow:hidden}body{padding:0 20px}#typer{font-size:medium}.startsContainer{position:fixed;top:0;left:0;width:0;height:0}span{margin:.05rem 0;font-size:.16rem;display:inline-block}.heart{position:absolute;width:100px;height:90px;top:30%;left:50%;margin-top:-45px;margin-left:-50px}.heart:after,.heart:before{content:"";position:absolute;top:0;width:50px;height:80px;background:#fc2e5a;border-radius:50px 50px 0 0}.heart:before{left:50px;transform:rotate(-45deg);transform-origin:0 100%}.heart:after{left:0;transform:rotate(45deg);transform-origin:100% 100%}.heart-main{animation:pounding .5s linear infinite alternate}.show{animation:a-show 5s linear}@keyframes pounding{0%{transform:scale(1.5)}to{transform:scale(1)}}@keyframes a-show{0%{opacity:0}to{opacity:1}}#timer{position:absolute;width:100%;text-align:center;top:60%}#timer>span{color:#fff;font-weight:700;font-size:.8rem;text-shadow:0 8px 9px #c4b59d,0 -2px 1px #fff}.board{width:100%;height:100%;right:calc(-100vw - 10px);background-color:#282c34;top:0;border-left:10px solid wheat;transition:right 2s;-moz-transition:right 2s;-webkit-transition:right 2s;-o-transition:right 2s}.board,.lip{position:absolute}.lip{animation:a-lip 2.5s linear forwards 1;left:0;top:127px;width:490px;height:372.4px;overflow:hidden;background-image:url('+a(2)+");background-size:cover}@keyframes a-lip{0%{transform:scale(0) rotate(3deg) translateY(0)}7%{transform:scale(.1) rotate(3deg) translateY(0)}20%{opacity:1;transform:scale(.1) rotate(3deg) translateY(0)}55%{opacity:0;transform:scale(1) rotate(3deg) translateY(10px)}to{opacity:0;transform:scale(1) rotate(3deg) translateY(0)}}",""])},function(t,e,a){var n=a(16);"string"==typeof n&&(n=[[t.i,n,""]]);var r={minimize:!0};r.transform=void 0;a(1)(n,r);n.locals&&(t.exports=n.locals)},function(t,e,a){e=t.exports=a(0)(void 0),e.push([t.i,'#typer:after{content:"";display:inline-block;vertical-align:baseline;height:.14rem;width:2px;background:#528bff;margin-left:5px;position:relative;top:2px;-webkit-animation:typish-blink .5s linear infinite;animation:typish-blink .5s linear infinite}#typer.-nocursor:after{display:none}@-webkit-keyframes typish-blink{0%{opacity:1}30%{opacity:1}40%{opacity:0}90%{opacity:0}to{opacity:1}}@keyframes typish-blink{0%{opacity:1}30%{opacity:1}40%{opacity:0}90%{opacity:0}to{opacity:1}}',""])},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(){(0,f.default)("#typer").type("/**",'<span class="note">').type("0","<br>").type("00",'<span class="blank">').type("今天wood先生教你写代码呀",'<span class="note">').type("0","<br>").type("00",'<span class="blank">').wait(10).type("等下。。。",'<span class="note">').wait(10).type("么么哒~o(*≧▽≦)ツ",'<span class="note">',0).wait(10).then(function(){s()}).wait(25).type("0","<br>").type("*/",'<span class="note">').type("0","<br>").type("function",'<span class="purple">').type("0",'<span class="blank">').type("foreverLove",'<span class="blue">').type("()",'<span class="gray">').type("0",'<span class="blank">').type("{",'<span class="gray">').type("0","<br>").type("00",'<span class="blank">').type("let",'<span class="purple">').type("0",'<span class="blank">').type("timerOptions",'<span class="gray">').type("0",'<span class="blank">').type("=",'<span class="blue">').type("0",'<span class="blank">').type("{",'<span class="gray">').type("0","<br>").type("0000",'<span class="blank">').type("boy",'<span class="gray">').type(":",'<span class="blue">').type("0",'<span class="blank">').type("'wood'",'<span class="green">').wait(15).del(6).type("'洪榕森'",'<span class="green">').type(",",'<span class="gray">').type("0","<br>").type("0000",'<span class="blank">').type("girl",'<span class="gray">').type(":",'<span class="blue">').type("0",'<span class="blank">').type("'黄珊珊'",'<span class="green">').type(",",'<span class="gray">').type("0","<br>").type("0000",'<span class="blank">').type("start",'<span class="gray">').type(":",'<span class="blue">').type("0",'<span class="blank">').type("'2017-07-10'",'<span class="green">').type("0","<br>").type("00",'<span class="blank">').type("}",'<span class="gray">').type("0","<br>").type("00",'<span class="blank">').type("let",'<span class="purple">').type("0",'<span class="blank">').type("heartOptions",'<span class="gray">').type("0",'<span class="blank">').type("=",'<span class="blue">').type("0",'<span class="blank">').type("{",'<span class="gray">').type("0","<br>").type("0000",'<span class="blank">').type("color",'<span class="gray">').type(":",'<span class="blue">').type("0",'<span class="blank">').type("'#fc2e5a'",'<span class="green heartBg">').type(",",'<span class="gray">').type("0","<br>").type("0000",'<span class="blank">').type("width",'<span class="gray">').type(":",'<span class="blue">').type("0",'<span class="blank">').type("'150px'",'<span class="green">').type(",",'<span class="gray">').type("0","<br>").type("0000",'<span class="blank">').type("margin",'<span class="gray">').type(":",'<span class="blue">').type("0",'<span class="blank">').type("'0 auto'",'<span class="green">').type(",",'<span class="gray">').type("0","<br>").type("0000",'<span class="blank">').type("top",'<span class="gray">').type(":",'<span class="blue">').type("0",'<span class="blank">').type("'30%'",'<span class="green">').type(",",'<span class="gray">').type("0","<br>").type("0000",'<span class="blank">').type("duration",'<span class="gray">').type(":",'<span class="blue">').type("0",'<span class="blank">').type("'0.5s'",'<span class="green">').type("0","<br>").type("00",'<span class="blank">').type("}",'<span class="gray">').type("0","<br>").type("00",'<span class="blank">').type("let",'<span class="purple">').type("0",'<span class="blank">').type("timer",'<span class="red">').type("0",'<span class="blank">').type("=",'<span class="blue">').type("0",'<span class="blank">').type("new",'<span class="purple">').type("0",'<span class="blank">').type("Timer",'<span class="yellow">').type("(timerOptions)",'<span class="gray">').type("0","<br>").type("00",'<span class="blank">').type("let",'<span class="purple">').type("0",'<span class="blank">').type("heart",'<span class="red">').type("0",'<span class="blank">').type("=",'<span class="blue">').type("0",'<span class="blank">').type("new",'<span class="purple">').type("0",'<span class="blank">').type("Heart",'<span class="yellow">').type("(heartOptions)",'<span class="gray">').type("0","<br>").type("00",'<span class="blank">').type("document",'<span class="red">').type(".",'<span class="gray">').type("body",'<span class="red">').type(".",'<span class="gray">').type("appendChild",'<span class="green-blue">').type("(timer)",'<span class="gray">').type("0","<br>").type("00",'<span class="blank">').type("document",'<span class="red">').type(".",'<span class="gray">').type("body",'<span class="red">').type(".",'<span class="gray">').type("appendChild",'<span class="green-blue">').type("(heart)",'<span class="gray">').type("0","<br>").type("}",'<span class="gray">').wait(20).type("0","<br>").type("foreverLove",'<span class="blue">').type("()",'<span class="gray">').wait(5).then(function(){o("show",function(){i()})})}function s(){var t=document.createElement("div");t.className="lip",document.body.appendChild(t),setTimeout(function(){t.remove()},2500)}function o(t,e){var a=document.querySelector(".board");a.style.right=t&&"hide"!==t?"0":"calc(-100vw - 10px)",setTimeout(function(){e&&e()},2e3)}function i(){var t=document.querySelector("#showArea"),e=document.querySelector(".foot");document.querySelector("#send").addEventListener("click",function(){p()}),t.className="show",heartMain.style.display="block",e.style.display="block",setTimeout(function(){l()},2e3)}function l(){var t=new Date("2017-07-10 00:00:00"),e=Date(),a=(Date.parse(e)-Date.parse(t))/1e3,n=Math.floor(a/86400);document.querySelector("#timer").style.display="block",new d.default("count",0,n,0,5).start()}function p(){var t=document.querySelector("#send");t.setAttribute("disabled",""),setTimeout(function(){t.removeAttribute("disabled")},2e3);var e=document.createElement("div");e.className="startsContainer";for(var n=0;n<30;n++){var r=document.createElement("img"),s=a(3);r.setAttribute("src",s),r.setAttribute("class","stars"),e.appendChild(r)}var o=document.querySelectorAll(".comment"),i=0;if(o&&(i=o.length)>7){for(var l=0;l<i;l++)o[l].remove();i=0}var p=document.createElement("div");p.className="comment",p.style.bottom=80+55*i+"px",p.innerHTML="我想你了",document.body.appendChild(p),document.body.appendChild(e);var c=document.querySelectorAll(".startsContainer");c.length>5&&c[0].remove()}Object.defineProperty(e,"__esModule",{value:!0}),e.go=void 0;var c=a(18),f=n(c),u=a(19),d=n(u),m=a(3),y=a(2),h=document.createElement("img"),v=document.createElement("img");h.setAttribute("src",m),v.setAttribute("src",y),e.go=r},function(t,e,a){"use strict";var n,r;"function"==typeof Symbol&&Symbol.iterator;!function(s,o){n=o,void 0!==(r="function"==typeof n?n.call(e,a,e,t):n)&&(t.exports=r)}(0,function(){function t(e,a){if(!(this instanceof t))return new n(e,a);if("string"==typeof e&&(e=document.querySelector(e)),e&&e[0]&&e[0].nodeName&&(e=e[0]),!e)throw new Error("Unknown element");this.el=e,this.stack=[],this.last=null,this._speed=50+Math.round(30*Math.random()),this.length=0,this.iterations=0,this.classNames={typing:"-typish-typing",waiting:"-typish-waiting"},this.clearAllSync()}function e(t,e){if(t.classList)t.classList.remove(e);else{var a=new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi");t.className=t.className.replace(a," ").replace(/(^\s*)|(\s*$)/g,"").replace(/\s{2,}/g," ")}}function a(t,e){t.classList?t.classList.add(e):t.className=(t.className+" "+e).replace(/(^\s*)|(\s*$)/g,"").replace(/\s{2,}/g," ")}var n=t;return t.defaultSpeed=50,t.prototype.type=function(t,n,r){"number"==typeof n&&(r=n,n=void 0);var s,o=this;s=0===r?[t]:t.split("");for(var i=0,l=s.length;i<l;i++){var p=s[i];!function(t,s){o.queue(function(i){0===s&&(a(o.el,o.classNames.typing),o.spanSync(n)),o.typeSync(t),s===l-1&&e(o.el,o.classNames.typing),o.defer(i,r)})}(p,i)}return this},t.prototype.del=function(t,e){void 0===t&&(t=1);for(var a=0;a<t;a++)this.queue(function(t){this.delSync(),this.defer(t,e)});return this},t.prototype.wait=function(t){return this.queue(function(n){a(this.el,this.classNames.waiting),this.defer(function(){e(this.el,this.classNames.waiting),n()},t)})},t.prototype.clear=function(t){var e=this;return 0===t?this.queue(function(t){this.clearAllSync(),t()}):this.queue(function(a){function n(){if(0===e.length)return a();e.delSync(),e.defer(n,t)}n()})},t.prototype.then=function(t){return this.queue(function(e){t.apply(this),e()})},t.prototype.speed=function(t){return this.then(function(){return this._speed=t,this})},t.prototype.queue=function(t){function e(){n.shift(),n.length&&(n[0].call(a,e),a.iterations++)}var a=this,n=this.stack;return n.push(t),1===n.length&&(this.iterations++,t.call(a,e)),this},t.prototype.defer=function(t,e){if(0===e)return t.call(this),this;"number"==typeof e?e*=this._speed:e=Math.floor(101*Math.random())+50;var a=this;return setTimeout(function(){t.call(a)},e),this},t.prototype.spanSync=function(t){var e;if(t&&"<"===t.substr(0,1)){var a=document.createElement("div");a.innerHTML=t,e=a.children[0],e||(e=document.createElement("span"))}else e=document.createElement("span"),t&&(e.className=t.replace(/\./," "));return this.el.appendChild(e),this.last=e,this},t.prototype.typeSync=function(t,e){return e?this.spanSync(e):this.last||this.spanSync(),this.length+=t.length,t=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>"),this.last.innerHTML+=t,this},t.prototype.delSync=function(){if(!this.last)return this;this.length--;var t=this.last.innerHTML;return 1===t.length?this.popSpanSync():(this.last.innerHTML=t.substr(t,t.length-1),0===t.length?this.popSpanSync():this)},t.prototype.popSpanSync=function(){return this.last?(this.el.removeChild(this.last),this.el.children.length?this.last=this.el.children[this.el.children.length-1]:this.last=void 0,this):this},t.prototype.clearAllSync=function(){this.el.innerHTML="",this.length=0},t})},function(t,e,a){var n,r;!function(s,o){n=o,void 0!==(r="function"==typeof n?n.call(e,a,e,t):n)&&(t.exports=r)}(0,function(t,e,a){return function(t,e,a,n,r,s){function o(t){t=t.toFixed(p.decimals),t+="";var e,a,n,r;if(e=t.split("."),a=e[0],n=e.length>1?p.options.decimal+e[1]:"",r=/(\d+)(\d{3})/,p.options.useGrouping)for(;r.test(a);)a=a.replace(r,"$1"+p.options.separator+"$2");return p.options.numerals.length&&(a=a.replace(/[0-9]/g,function(t){return p.options.numerals[+t]}),n=n.replace(/[0-9]/g,function(t){return p.options.numerals[+t]})),p.options.prefix+a+n+p.options.suffix}function i(t,e,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+e}function l(t){return"number"==typeof t&&!isNaN(t)}var p=this;if(p.version=function(){return"1.9.1"},p.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:i,formattingFn:o,prefix:"",suffix:"",numerals:[]},s&&"object"==typeof s)for(var c in p.options)s.hasOwnProperty(c)&&null!==s[c]&&(p.options[c]=s[c]);""===p.options.separator&&(p.options.useGrouping=!1);for(var f=0,u=["webkit","moz","ms","o"],d=0;d<u.length&&!window.requestAnimationFrame;++d)window.requestAnimationFrame=window[u[d]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[u[d]+"CancelAnimationFrame"]||window[u[d]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var a=(new Date).getTime(),n=Math.max(0,16-(a-f)),r=window.setTimeout(function(){t(a+n)},n);return f=a+n,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)}),p.initialize=function(){return!(!p.initialized&&(p.error="",p.d="string"==typeof t?document.getElementById(t):t,p.d?(p.startVal=Number(e),p.endVal=Number(a),l(p.startVal)&&l(p.endVal)?(p.decimals=Math.max(0,n||0),p.dec=Math.pow(10,p.decimals),p.duration=1e3*Number(r)||2e3,p.countDown=p.startVal>p.endVal,p.frameVal=p.startVal,p.initialized=!0,0):(p.error="[CountUp] startVal ("+e+") or endVal ("+a+") is not a number",1)):(p.error="[CountUp] target is null or undefined",1)))},p.printValue=function(t){var e=p.options.formattingFn(t);"INPUT"===p.d.tagName?this.d.value=e:"text"===p.d.tagName||"tspan"===p.d.tagName?this.d.textContent=e:this.d.innerHTML=e},p.count=function(t){p.startTime||(p.startTime=t),p.timestamp=t;var e=t-p.startTime;p.remaining=p.duration-e,p.options.useEasing?p.countDown?p.frameVal=p.startVal-p.options.easingFn(e,0,p.startVal-p.endVal,p.duration):p.frameVal=p.options.easingFn(e,p.startVal,p.endVal-p.startVal,p.duration):p.countDown?p.frameVal=p.startVal-(p.startVal-p.endVal)*(e/p.duration):p.frameVal=p.startVal+(p.endVal-p.startVal)*(e/p.duration),p.countDown?p.frameVal=p.frameVal<p.endVal?p.endVal:p.frameVal:p.frameVal=p.frameVal>p.endVal?p.endVal:p.frameVal,p.frameVal=Math.round(p.frameVal*p.dec)/p.dec,p.printValue(p.frameVal),e<p.duration?p.rAF=requestAnimationFrame(p.count):p.callback&&p.callback()},p.start=function(t){p.initialize()&&(p.callback=t,p.rAF=requestAnimationFrame(p.count))},p.pauseResume=function(){p.paused?(p.paused=!1,delete p.startTime,p.duration=p.remaining,p.startVal=p.frameVal,requestAnimationFrame(p.count)):(p.paused=!0,cancelAnimationFrame(p.rAF))},p.reset=function(){p.paused=!1,delete p.startTime,p.initialized=!1,p.initialize()&&(cancelAnimationFrame(p.rAF),p.printValue(p.startVal))},p.update=function(t){if(p.initialize()){if(t=Number(t),!l(t))return void(p.error="[CountUp] update() - new endVal is not a number: "+t);p.error="",t!==p.frameVal&&(cancelAnimationFrame(p.rAF),p.paused=!1,delete p.startTime,p.startVal=p.frameVal,p.endVal=t,p.countDown=p.startVal>p.endVal,p.rAF=requestAnimationFrame(p.count))}},p.initialize()&&p.printValue(p.startVal)}})}]);