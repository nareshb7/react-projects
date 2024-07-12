"use strict";(self.webpackChunkreact_beginner_projects_1=self.webpackChunkreact_beginner_projects_1||[]).push([[207],{706:(e,t,n)=>{n.d(t,{$n:()=>i,Kw:()=>s,pd:()=>u});var r=n(6540),o=["title","onClick","styles","className","disabled","type"],c=["value","onChange","styles","className","onKeyDown","name","placeholder"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=function(e){var t=e.title,n=e.onClick,c=e.styles,i=e.className,u=void 0===i?"":i,s=e.disabled,m=e.type,f=a(e,o);return r.createElement("button",l({onClick:n,style:c,className:" px-3 py-2 border border-blue-500 rounded hover:bg-gray-500 m-1 ".concat(u),disabled:s,type:m},f),t)},u=function(e){var t=e.value,n=e.onChange,o=e.styles,i=e.className,u=void 0===i?"border border-blue-500 input rounded mx-1":i,s=e.onKeyDown,m=e.name,f=e.placeholder,b=a(e,c);return r.createElement("input",l({value:t,onKeyDown:s,onChange:n,className:u,style:o,placeholder:f,name:m},b))},s=function(e){var t=e.error,n=e.className;return t?r.createElement("div",{className:"text-error ".concat(n)},t):r.createElement(r.Fragment,null)}},207:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var r=n(6540),o=n(706),c=n(1468);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}const i=(0,c.Ng)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){var r,o,c,a;r=e,o=t,c=n[t],a=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==l(a)?a:a+"")in r?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e)}),(function(e){return{buyItem:function(){return e({type:"BUY"})}}}))((function(e){var t=e.buyItem,n=e.bakery;return r.createElement("div",null,r.createElement("span",{className:"font-bold"},"Bakery"),r.createElement("div",null,"Total Items : ",n.items),r.createElement("div",null,r.createElement(o.$n,{onClick:t,title:"Buy"})))}));var u=n(4644),s={items:20},m=(0,u.HY)({bakery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;return"BUY"===(arguments.length>1?arguments[1]:void 0).type?{items:e.items-1}:e}}),f=(0,u.y$)(m);const b=function(){return r.createElement(c.Kq,{store:f},r.createElement("div",{className:"connect-method"},r.createElement("div",{className:"font-bold text-center"},"ConnectMethod"),r.createElement(i,null)))};var y=n(7088),d=(0,y.Z0)({name:"counter",initialState:{count:0},reducers:{increment:function(e){e.count++},decrement:function(e){e.count--}}}),p=d.actions,v=p.increment,O=p.decrement,E={counter:d.reducer},g=(0,y.U1)({reducer:E});const h=function(){var e=(0,c.wA)(),t=(0,c.d4)((function(e){return e.counter}));return r.createElement("div",null,r.createElement("span",{className:"font-semibold"},"Counter: ",t.count),r.createElement("div",null,r.createElement(o.$n,{title:"Increment",onClick:function(){return e(v())}}),r.createElement(o.$n,{title:"Decrement",onClick:function(){return e(O())}})))},j=function(){return r.createElement(c.Kq,{store:g},r.createElement("div",{className:"font-bold text-center"},"ToolKitMethod"),r.createElement(h,null))},w=function(){return r.createElement("div",{className:"redux-wrapper"},r.createElement("div",{className:"text-center font-bold"},"ReduxStore"),r.createElement(b,null),r.createElement(j,null))}}}]);