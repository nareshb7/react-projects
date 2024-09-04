"use strict";(self.webpackChunkreact_beginner_projects_1=self.webpackChunkreact_beginner_projects_1||[]).push([[534],{706:(e,r,t)=>{t.d(r,{$n:()=>c,Kw:()=>u,pd:()=>s});var n=t(6540),o=["title","onClick","styles","className","disabled","type"],a=["value","onChange","styles","className","onKeyDown","name","placeholder"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=function(e){var r=e.title,t=e.onClick,a=e.styles,c=e.className,s=void 0===c?"":c,u=e.disabled,f=e.type,m=l(e,o);return n.createElement("button",i({onClick:t,style:a,className:" px-3 py-2 border border-blue-500 rounded hover:bg-gray-500 m-1 ".concat(s),disabled:u,type:f},m),r)},s=function(e){var r=e.value,t=e.onChange,o=e.styles,c=e.className,s=void 0===c?"border border-blue-500 input rounded mx-1":c,u=e.onKeyDown,f=e.name,m=e.placeholder,b=l(e,a);return n.createElement("input",i({value:r,onKeyDown:u,onChange:t,className:s,style:o,placeholder:m,name:f},b))},u=function(e){var r=e.error,t=e.className;return r?n.createElement("div",{className:"text-error ".concat(t)},r):n.createElement(n.Fragment,null)}},7350:(e,r,t)=>{t.d(r,{e:()=>n,f:()=>o});var n={name:"",email:"",mobile:"",location:"",role:"",password:"",confirmPassword:""},o={name:"Name",email:"Email",mobile:"Mobile",password:"Password",confirmPassword:"Confirm Password",location:"Location",role:"Role"}},1534:(e,r,t)=>{t.r(r),t.d(r,{RenderInputField:()=>p,default:()=>y});var n=t(706),o=t(6540),a=t(7350),i=t(463),l=t(7767),c=t(5382);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){m(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function m(e,r,t){var n;return n=function(e,r){if("object"!=s(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r),(r="symbol"==s(n)?n:n+"")in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function b(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a,i,l=[],c=!0,s=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=a.call(t)).done)&&(l.push(n.value),l.length!==r);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(s)throw o}}return l}}(e,r)||function(e,r){if(e){if("string"==typeof e)return d(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var p=function(e){var r=e.name,t=e.value,a=e.handleChange,l=e.error;return o.createElement(o.Fragment,null,o.createElement("div",{className:"font-bold"},(0,i._x)(r)),o.createElement(n.pd,{name:r,value:t,onChange:function(e){return a(r,e.target.value)}}),o.createElement(n.Kw,{error:l}))};const y=function(){var e=b((0,o.useState)(a.e),2),r=e[0],t=e[1],s=b((0,o.useState)(a.e),2),u=s[0],d=s[1],y=b((0,o.useState)(""),2),v=y[0],g=y[1],h=(0,l.Zp)(),O=function(e,t){var n;if(!t)return d((function(r){return f(f({},r),{},m({},e,"This field is required"))})),"This field is required";var o="confirmPassword"===e?r.password:"";return n=(0,c.N)(e,t,o),d((function(r){return f(f({},r),{},m({},e,n))})),n},w=function(e,n){O(e,n),t(f(f({},r),{},m({},e,n)))};return o.createElement("div",null,o.createElement("h3",{className:"font-bold text-lg"},"Sign Up Form"),Object.keys(a.e).map((function(e,t){return o.createElement(p,{key:t,handleChange:w,name:e,value:r[e],error:u[e]})})),o.createElement("div",null,o.createElement(n.Kw,{error:v}),o.createElement(n.$n,{onClick:function(){if(0==Object.keys(r).filter((function(e){return O(e,r[e])})).length){var e=(0,i.H9)(r);g(e),e||h("/login-form/login")}},title:"Submit"})))}},5382:(e,r,t)=>{t.d(r,{N:()=>o});var n=t(6081),o=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o="";switch(e){case"role":case"location":case"name":o=n._u.test(r)?"":"Min. 3 chars required";break;case"email":o=n.z6.test(r)?"":"Email is not valid";break;case"mobile":o=n.tl.test(r)?"":"Mobile number is not valid";break;case"password":o=n.WX.test(r)?"":"Min 8 chars required, One Upercase, lowercase, digit, symbol";break;case"confirmPassword":o=t===r?"":"Confirm password not matching"}return o}},463:(e,r,t)=>{t.d(r,{H9:()=>c,Se:()=>a,Tw:()=>i,V6:()=>s,_x:()=>o});var n=t(7350),o=function(e){return n.f[e]},a=function(e){return localStorage.getItem(e)},i=function(e){return localStorage.removeItem(e)},l=function(e,r){return localStorage.setItem(e,r)},c=function(e){var r=a("formUsers");if(r){var t=JSON.parse(r);if(t.find((function(r){return r.mobile===e.mobile})))return"Mobile Number is already registered, please use login";t.push(e),localStorage.setItem("formUsers",JSON.stringify(t)),l("formUsers",JSON.stringify(t))}else l("formUsers",JSON.stringify([e]));return""},s=function(e){var r=e.mobile,t=e.password,n=a("formUsers");if(n){var o=JSON.parse(n).find((function(e){return e.mobile===r}));return o?o.password==t?(l("formLoggedInUser",JSON.stringify(o)),o):"Password not matching":"User Not Found"}return"No Records matching"}},6081:(e,r,t)=>{t.d(r,{Ox:()=>s,WX:()=>o,ZF:()=>l,_u:()=>a,tl:()=>i,us:()=>c,z6:()=>n});var n=/^[a-z][a-z0-9]+@[a-z]+(?:[.][a-z]{2,})+$/,o=/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%&*<>]).{8,}$/,a=/^[a-zA-Z]{3,}$/,i=/^\d{10}$/,l={min:18,max:99},c="16e562653339ad25e1de42459c24fbcb",s="https://react-projects-pdiv.onrender.com"}}]);