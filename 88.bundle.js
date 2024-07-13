"use strict";(self.webpackChunkreact_beginner_projects_1=self.webpackChunkreact_beginner_projects_1||[]).push([[88],{706:(e,t,n)=>{n.d(t,{$n:()=>c,Kw:()=>s,pd:()=>u});var r=n(6540),a=["title","onClick","styles","className","disabled","type"],l=["value","onChange","styles","className","onKeyDown","name","placeholder"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=function(e){var t=e.title,n=e.onClick,l=e.styles,c=e.className,u=void 0===c?"":c,s=e.disabled,m=e.type,d=i(e,a);return r.createElement("button",o({onClick:n,style:l,className:" px-3 py-2 border border-blue-500 rounded hover:bg-gray-500 m-1 ".concat(u),disabled:s,type:m},d),t)},u=function(e){var t=e.value,n=e.onChange,a=e.styles,c=e.className,u=void 0===c?"border border-blue-500 input rounded mx-1":c,s=e.onKeyDown,m=e.name,d=e.placeholder,f=i(e,l);return r.createElement("input",o({value:t,onKeyDown:s,onChange:n,className:u,style:a,placeholder:d,name:m},f))},s=function(e){var t=e.error,n=e.className;return t?r.createElement("div",{className:"text-error ".concat(n)},t):r.createElement(r.Fragment,null)}},6088:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var r=n(6540),a=n(5072),l=n.n(a),o=n(7825),i=n.n(o),c=n(7659),u=n.n(c),s=n(5056),m=n.n(s),d=n(540),f=n.n(d),p=n(1113),y=n.n(p),b=n(2255),v={};v.styleTagTransform=y(),v.setAttributes=m(),v.insert=u().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=f(),l()(b.A,v),b.A&&b.A.locals&&b.A.locals;var g=n(706),h=n(6081),E={name:"",email:"",mobile:"",password:"",gender:"",dob:"",age:"",state:"",file:""},w={name:"Name",email:"Email",mobile:"Mobile",password:"Password",gender:"Gender",dob:"Date of Birth",age:"Age",state:"State",file:"Profile Image"},O=["text","date","password"],k=function(e){var t=e.field,n=e.value,a=e.error,l=e.validator,o=e.handleChange,i=t.key,c=t.type,u=t.title,s=t.placeholder,m=t.options;return r.createElement("div",{key:i,className:"my-1"},r.createElement("span",{className:"font-bold inline-block w-28"},u),function(e){return O.includes(e)?r.createElement(g.pd,{value:n,onBlur:function(e){return l(i,e.target.value)},onChange:function(e){return o(i,e.target.value)},name:i,placeholder:s,type:e}):"file"===e?r.createElement(g.pd,{onBlur:function(e){return l(i,e.target.value)},onChange:function(e){return o(i,e.target.files?e.target.files[0]:"")},name:i,placeholder:s,type:e}):"radio"===e?r.createElement(r.Fragment,null,m&&(null==m?void 0:m.map((function(t){return r.createElement("label",{key:t.value},r.createElement(g.pd,{name:i,value:t.value,type:e,onChange:function(e){return o(i,e.target.value)}}),t.title)})))):"select"===e?r.createElement("select",{onChange:function(e){return o(i,e.target.value)},onBlur:function(e){return l(i,e.target.value)},className:"p-2 border mx-1"},r.createElement("option",{value:""},"Select an Option"),m&&m.map((function(e){return r.createElement("option",{key:e.value,value:e.value},e.title)}))):void 0}(c),r.createElement(g.Kw,{error:a,className:"ml-32"}))};const j=function(e){var t=e.userData,n=e.onBack;return r.createElement("div",null,Object.entries(t).map((function(e){return r.createElement("div",{key:e[0]},r.createElement("span",{className:"font-bold inline-block w-32"},w[e[0]]," :")," ","file"===e[0]?r.createElement("img",{src:e[1],alt:"img"}):r.createElement("span",null,e[1]))})),r.createElement(g.$n,{title:"Back",onClick:n}))};var S=[{title:"Name",key:"name",type:"text",placeholder:"Enter Name..."},{title:"Email",key:"email",type:"text",placeholder:"Enter Email..."},{title:"Mobile",key:"mobile",type:"text",placeholder:"Enter Mobile..."},{title:"Date of Birth",key:"dob",max:(new Date).toISOString().split("T")[0],type:"date",placeholder:"Enter DOB..."},{title:"Gender",key:"gender",options:[{title:"Male",value:"male"},{title:"FeMale",value:"female"},{title:"Not Specifid",value:"other"}],type:"radio"},{title:"Age",key:"age",type:"text",placeholder:"Enter Age..."},{title:"State",key:"state",type:"select",options:[{title:"Telangana",value:"TS"},{title:"Andhra Pradesh",value:"AP"},{title:"Karnataka",value:"KA"},{title:"Maharastra",value:"MH"},{title:"Tamil Nadu",value:"TN"},{title:"Kerala",value:"KL"}]},{title:"Profile Image",key:"file",type:"file"},{title:"Password",key:"password",type:"password",placeholder:"Enter Password..."}];function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){var r;return r=function(e,t){if("object"!=N(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==N(r)?r:r+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],c=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const F=function(){var e=D((0,r.useState)(E),2),t=e[0],n=e[1],a=D((0,r.useState)(E),2),l=a[0],o=a[1],i=D((0,r.useState)(E),2),c=i[0],u=i[1],s=D((0,r.useState)(!1),2),m=s[0],d=s[1],f=function(e,r){if("file"===e){if(r){var a=new FileReader;a.onloadend=function(){n(x(x({},t),{},P({},e,a.result)))},a.readAsDataURL(r)}}else n(x(x({},t),{},P({},e,r)));c[e]&&p(e,r)},p=function(e,t){if(t){var n=function(e,t){var n,r="";if("name"===e&&(h._u.test(t)||(r="Name must contain only alphabets")),"dob"===e){var a=(n=new Date,new Date(n.getFullYear()-18,n.getMonth(),n.getDate()));new Date(t)>a&&(r="User Must has 18 years")}if("email"===e&&(t.match(h.z6)||(r="Email is not valid")),"mobile"===e&&(t.match(h.tl)||(r="Enter valid mobile number")),"age"==e){var l=Number(t);(l<h.ZF.min||l>h.ZF.max)&&(r="Age must be in the 18 to 99")}return"password"===e&&(t.match(h.WX)||(r="Kin 8 chars, One capital, lne lower , one digit, one special char")),r}(e,t);u((function(t){return x(x({},t),{},P({},e,n))}))}else u((function(t){return x(x({},t),{},P({},e,"This field is required"))}))};return r.createElement("div",null,m?r.createElement(j,{userData:l,onBack:function(){return d(!1)}}):r.createElement(r.Fragment,null,S.map((function(e){return r.createElement(k,{key:e.key,field:e,error:c[e.key],value:t[e.key],validator:p,handleChange:f})})),r.createElement("div",{className:"text-center"},r.createElement(g.$n,{title:"Submit",onClick:function(){var e=Object.entries(t),n=e.filter((function(e){return e[1]})).length;0===Object.values(c).filter((function(e){return e})).length&&n===e.length?(o(t),d(!0)):(e.map((function(e){p(e[0],e[1])})),d(!1),o(E))}}))))},K=function(){return r.createElement("div",{className:"form-validation"},r.createElement("div",{className:"font-bold text-center"},"Form Validation"),r.createElement(F,null))}},6081:(e,t,n)=>{n.d(t,{WX:()=>a,ZF:()=>i,_u:()=>l,tl:()=>o,us:()=>c,z6:()=>r});var r=/^[a-z][a-z0-9]+@[a-z]+(?:[.][a-z]{2,})+$/,a=/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%&*<>]).{8,}$/,l=/^[a-zA-Z]{3,}$/,o=/^\d{10}$/,i={min:18,max:99},c="16e562653339ad25e1de42459c24fbcb"},2255:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(1601),a=n.n(r),l=n(6314),o=n.n(l)()(a());o.push([e.id,".form-validation{width:50%;background-color:#888;padding:10px;margin:auto}@media(max-width: 967px){.form-validation{width:70%}}@media(max-width: 767px){.form-validation{width:90%}}",""]);const i=o}}]);