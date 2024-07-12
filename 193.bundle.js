"use strict";(self.webpackChunkreact_beginner_projects_1=self.webpackChunkreact_beginner_projects_1||[]).push([[193],{706:(e,t,n)=>{n.d(t,{$n:()=>i,Kw:()=>d,pd:()=>s});var r=n(6540),a=["title","onClick","styles","className","disabled","type"],l=["value","onChange","styles","className","onKeyDown","name","placeholder"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=function(e){var t=e.title,n=e.onClick,l=e.styles,i=e.className,s=void 0===i?"":i,d=e.disabled,m=e.type,u=c(e,a);return r.createElement("button",o({onClick:n,style:l,className:" px-3 py-2 border border-blue-500 rounded hover:bg-gray-500 m-1 ".concat(s),disabled:d,type:m},u),t)},s=function(e){var t=e.value,n=e.onChange,a=e.styles,i=e.className,s=void 0===i?"border border-blue-500 input rounded mx-1":i,d=e.onKeyDown,m=e.name,u=e.placeholder,p=c(e,l);return r.createElement("input",o({value:t,onKeyDown:d,onChange:n,className:s,style:a,placeholder:u,name:m},p))},d=function(e){var t=e.error,n=e.className;return t?r.createElement("div",{className:"text-error ".concat(n)},t):r.createElement(r.Fragment,null)}},4193:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var r=n(6540),a=n(5072),l=n.n(a),o=n(7825),c=n.n(o),i=n(7659),s=n.n(i),d=n(5056),m=n.n(d),u=n(540),p=n.n(u),f=n(1113),b=n.n(f),y=n(5902),h={};h.styleTagTransform=b(),h.setAttributes=m(),h.insert=s().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=p(),l()(y.A,h),y.A&&y.A.locals&&y.A.locals;var v=n(706);const g=function(e){var t=e.isOpen,n=e.onClose,a=e.children,l=e.onSave,o=e.title;return t?r.createElement("div",{className:"modal-overlay",onClick:function(e){e.target===e.currentTarget&&n()}},r.createElement("div",{className:"modal"},r.createElement(v.$n,{title:"Close",className:"close-btn",onClick:n}),r.createElement("div",{className:"header"},r.createElement("h1",{className:"font-bold"},o," ")),r.createElement("hr",null),r.createElement("div",{className:"body"},a),r.createElement("hr",null),r.createElement("div",{className:"footer"},r.createElement("div",{className:"footer-btns"},r.createElement(v.$n,{title:"Save",onClick:l}),r.createElement(v.$n,{title:"Cancel",onClick:n}))))):r.createElement(r.Fragment,null)};function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const E=function(){var e,t,n=(e=(0,r.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,c=[],i=!0,s=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=l.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){s=!0,a=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(s)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=n[0],l=n[1];return r.createElement("div",{className:"modal"},r.createElement("div",{className:"container mx-auto section"},r.createElement("h1",{className:"font-bold"},"Modal"),r.createElement("div",null,r.createElement(v.$n,{onClick:function(){l(!0)},title:"Open Modal"})),r.createElement(g,{isOpen:a,onClose:function(){l(!1)},onSave:function(){l(!1)},title:"Testing Modal"},r.createElement("div",{style:{height:"600px"}},r.createElement("h1",null,"MODAl OPENED")))))}},5902:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(1601),a=n.n(r),l=n(6314),o=n.n(l)()(a());o.push([e.id,".modal{width:100%}.modal .section{background-color:#888;width:50%;text-align:center;min-height:300px;margin:10px auto}.modal .modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.6);display:flex;justify-content:center;align-items:center}.modal .modal-overlay .modal{background-color:#fff;padding:10px;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,.3);max-width:500px;max-height:500px;position:relative;text-align:start}.modal .modal-overlay .modal .close-btn{position:absolute;top:5px;right:5px;background:none;border:none;cursor:pointer;color:#333;background-color:#7fffd4;border-radius:4px;padding:3px 6px;margin:0}.modal .modal-overlay .modal .close-btn:hover{color:#888}.modal .modal-overlay .modal .header{width:80%;min-height:30px}.modal .modal-overlay .modal .body{max-height:300px;overflow:hidden auto}.modal .modal-overlay .modal .footer{text-align:end;padding-top:5px}",""]);const c=o}}]);