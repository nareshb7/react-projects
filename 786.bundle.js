"use strict";(self.webpackChunkreact_beginner_projects_1=self.webpackChunkreact_beginner_projects_1||[]).push([[786],{8786:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var r=n(6540),l=n(5072),i=n.n(l),a=n(7825),o=n.n(a),c=n(7659),s=n.n(c),u=n(5056),f=n.n(u),d=n(540),m=n.n(d),p=n(1113),g=n.n(p),h=n(5565),b={};b.styleTagTransform=g(),b.setAttributes=f(),b.insert=s().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=m(),i()(h.A,b),h.A&&h.A.locals&&h.A.locals;const v=function(e){var t=e.data,n=e.isLoading,l=e.hasData,i=e.loadMore,a=(0,r.useRef)(null),o=function(){var e=a.current,r=e.scrollTop,o=e.scrollHeight;r+e.clientHeight>=o-5&&l&&!n&&i(t.length)};return(0,r.useEffect)((function(){return a.current&&a.current.addEventListener("scroll",o),function(){a.current&&a.current.removeEventListener("scroll",o)}}),[t]),r.createElement("div",{ref:a,className:"infinite-scroll-list"},r.createElement("ul",null,t.map((function(e){return r.createElement("li",{key:e.id,className:"infinite-scroll-item"},e.id,": ",e.name)})),!l&&r.createElement("li",{className:"loading"},"...No more Data..."),n&&r.createElement("li",{className:"loading"},"Loading...")))};function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,i,a,o=[],c=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(o.push(r.value),o.length!==t);c=!0);}catch(e){s=!0,l=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw l}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var w=Array(100).fill(1).map((function(e,t){return{id:t+1,name:"Test".concat(t+1)}}));const E=function(){var e=y((0,r.useState)(w.slice(0,10)),2),t=e[0],n=e[1],l=y((0,r.useState)(!1),2),i=l[0],a=l[1];return r.createElement("div",{className:"infinite-scroll-wrapper"},r.createElement("span",{className:"font-bold text-center"},"Infinite Scroll Main"),r.createElement(v,{data:t,loadMore:function(e){a(!0),setTimeout((function(){if(a(!1),e<w.length){var t=w.slice(0,e+10);n(t)}}),1500)},isLoading:i,hasData:w.length!==t.length}))}},5565:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(1601),l=n.n(r),i=n(6314),a=n.n(i)()(l());a.push([e.id,".infinite-scroll-wrapper{width:50%;margin:auto}.infinite-scroll-wrapper .infinite-scroll-list{max-height:300px;overflow:auto}.infinite-scroll-wrapper .infinite-scroll-list .infinite-scroll-item{padding:10px 20px;margin-block:3px;background-color:#888}.infinite-scroll-wrapper .infinite-scroll-list .loading{background-color:#ddd;padding:10px 20px;margin-block:3px}",""]);const o=a}}]);