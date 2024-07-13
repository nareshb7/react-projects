"use strict";(self.webpackChunkreact_beginner_projects_1=self.webpackChunkreact_beginner_projects_1||[]).push([[112],{706:(e,t,r)=>{r.d(t,{$n:()=>o,Kw:()=>u,pd:()=>s});var n=r(6540),a=["title","onClick","styles","className","disabled","type"],l=["value","onChange","styles","className","onKeyDown","name","placeholder"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=function(e){var t=e.title,r=e.onClick,l=e.styles,o=e.className,s=void 0===o?"":o,u=e.disabled,d=e.type,m=c(e,a);return n.createElement("button",i({onClick:r,style:l,className:" px-3 py-2 border border-blue-500 rounded hover:bg-gray-500 m-1 ".concat(s),disabled:u,type:d},m),t)},s=function(e){var t=e.value,r=e.onChange,a=e.styles,o=e.className,s=void 0===o?"border border-blue-500 input rounded mx-1":o,u=e.onKeyDown,d=e.name,m=e.placeholder,p=c(e,l);return n.createElement("input",i({value:t,onKeyDown:u,onChange:r,className:s,style:a,placeholder:m,name:d},p))},u=function(e){var t=e.error,r=e.className;return t?n.createElement("div",{className:"text-error ".concat(r)},t):n.createElement(n.Fragment,null)}},5142:(e,t,r)=>{r.d(t,{A:()=>E});var n=r(6540),a=r(5072),l=r.n(a),i=r(7825),c=r.n(i),o=r(7659),s=r.n(o),u=r(5056),d=r.n(u),m=r(540),p=r.n(m),f=r(1113),y=r.n(f),v=r(8067),g={};g.styleTagTransform=y(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=p(),l()(v.A,g),v.A&&v.A.locals&&v.A.locals;var b=r(706);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const E=function(e){var t,r,a=e.slides,l=e.renderCard,i=(t=(0,n.useState)(0),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,i,c=[],o=!0,s=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;o=!1}else for(;!(o=(n=l.call(r)).done)&&(c.push(n.value),c.length!==t);o=!0);}catch(e){s=!0,a=e}finally{try{if(!o&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return c}}(t,r)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=i[0],o=i[1];return n.createElement("div",{className:"slider-wrapper"},n.createElement("div",{className:"slides-container"},n.createElement("div",{className:"slides",style:{transform:"translateX(-".concat(34*c,"%)")}},a.map((function(e,t){return n.createElement("div",{className:"slide",key:t}," ",l(e,t))}))),c>0&&n.createElement(b.$n,{className:"slider-control prev",title:"❮",onClick:function(){o((c-1+a.length-2)%(a.length-2))}}),n.createElement(b.$n,{className:"slider-control next",title:"❯",onClick:function(){o((c+1)%(a.length-2))}})))}},4112:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=r(5142),a=r(6540),l=r(1468),i=r(7767),c=r(9283),o=r(6093);const s=function(){var e=(0,i.Zp)(),t=(0,l.d4)(o.Ah),r=function(t,r,n){e("".concat(n,"&").concat(r,"&").concat(t))};return a.createElement("div",null,a.createElement("div",{className:"font-semibold text-lg"},"Mobiles "),a.createElement(n.A,{slides:t.mobiles,renderCard:function(e,t){return(0,c.rN)(e,t,r)}}),a.createElement("div",{className:"font-semibold text-lg"},"Laptops "),a.createElement("div",{className:"flex flex-wrap gap-1"},t.laptops.map((function(e,t){return a.createElement("div",{key:e.id,className:"w-[30%] mx-auto",style:{flex:"0 1 30%"}},(0,c.vK)(e,t,r))}))))}},9283:(e,t,r)=>{r.d(t,{Ks:()=>o,rN:()=>i,vK:()=>c});var n=r(6540),a=r(4316),l=r(192),i=function(e,t,r){return n.createElement("div",{className:"w-[100%] h-[350px] bg-slate-300 m-2 text-center rounded",onClick:function(){return r(e.id,e.title,e.tag)}},n.createElement(a.S,{url:e.imageUrl,className:"w-[250px] h-[250px] p-2 mx-auto"}),n.createElement("span",null,e.title,"(",e.color,", ",e.ram,"GB, ",e.rom,"GB)"),n.createElement("div",null,n.createElement("del",null," ",(0,l.On)(e.actualPrice))," ",n.createElement("span",null,e.discount,"%")," ",n.createElement("span",null,(0,l.On)(e.finalPrice))))},c=function(e,t,r){return n.createElement("div",{className:"w-[100%] bg-slate-300 m-2 rounded min-h-[420px]",onClick:function(){return r(e.id,e.title,e.tag)}},n.createElement(a.S,{url:e.imageUrl,className:"w-[100%] h-[250px] p-2 mx-auto"}),n.createElement("span",{className:"ml-1 font-semibold"},e.title," (",e.ram,"GB, ",e.rom,"GB)"),n.createElement("ul",{className:"ml-2"},n.createElement("li",null,e.processor),n.createElement("li",null,e.ram," GB"),n.createElement("li",null,e.rom,"GB ",e.romType),n.createElement("li",null,e.displayType," ",e.displaySize),n.createElement("li",null," ",e.rating,"*"),n.createElement("li",null,n.createElement("del",null," ",(0,l.On)(e.actualPrice))," ",n.createElement("span",null,e.discount,"%")," ",n.createElement("span",null,(0,l.On)(e.finalPrice)))))},o=function(e){var t=e.split("&");return{tag:t[0],productName:t[1],id:Number(t[2])}}},6093:(e,t,r)=>{r.d(t,{Ah:()=>p,Ai:()=>i,Ay:()=>d,CT:()=>m,GL:()=>o,Qm:()=>s,VQ:()=>c,bE:()=>l,sX:()=>u});var n=(0,r(7088).Z0)({name:"cart",initialState:{cart:[],data:{mobiles:[],laptops:[],isLoading:!1}},reducers:{addToCart:function(e,t){var r=t.payload,n=r.type,a=r.id,l=e.data[n].find((function(e){return e.id===a}));if(l&&!e.cart.find((function(e){return e.id===l.id&&e.tag===l.tag}))){console.log("ADDED::");var i=l.id,c=l.tag,o=l.title,s=l.displaySize,u=l.displayType,d=l.actualPrice,m=l.finalPrice,p=l.discount,f=l.imageUrl,y=l.color;e.cart.push({id:i,tag:c,title:o,displaySize:s,displayType:u,actualPrice:d,finalPrice:m,discount:p,count:1,imageUrl:f,color:y})}},increaseTheProductCount:function(e,t){var r=t.payload,n=r.type,a=r.id,l=e.cart.find((function(e){return e.id===a&&e.tag===n}));l&&(l.count=l.count+1)},decreaseTheProductCount:function(e,t){var r=t.payload,n=r.type,a=r.id,l=e.cart.find((function(e){return e.id===a&&e.tag===n}));l&&(l.count=l.count-1)},removeItem:function(e,t){var r=t.payload,n=r.type,a=r.id;e.cart=e.cart.filter((function(e){return!n.includes(e.tag)||e.id!==a}))},clearCart:function(e){e.cart=[]},updateStateData:function(e,t){var r=t.payload,n=r.mobiles,a=r.laptops,l=r.cartData;e.data={mobiles:n,laptops:a,isLoading:!1},e.cart=l}}}),a=n.actions,l=a.addToCart,i=a.removeItem,c=a.updateStateData,o=a.increaseTheProductCount,s=a.decreaseTheProductCount,u=a.clearCart;const d=n.reducer;var m=function(e){return e.data.cart},p=function(e){return e.data.data}},4316:(e,t,r)=>{r.d(t,{S:()=>a});var n=r(6540),a=function(e){var t=e.url,r=e.className,a=e.alt;return n.createElement("div",{className:"".concat(r)},n.createElement("img",{src:t,className:"w-[100%] h-[100%] rounded",alt:null!=a?a:"card-img"}))}},192:(e,t,r)=>{r.d(t,{HX:()=>i,On:()=>c,RI:()=>a,d4:()=>l,sg:()=>o});var n=r(6540),a=function(e){return 0==Object.keys(e).length},l=function(){return n.createElement(n.Fragment,null,"★")},i=function(){return n.createElement(n.Fragment,null,"✓")},c=function(e){return n.createElement(n.Fragment,null,null==e?void 0:e.toLocaleString("en-IN",{style:"currency",currency:"INR"}))},o=function(e,t){var r;return function(){for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];clearTimeout(r),r=setTimeout((function(){e.apply(void 0,a)}),t)}}},8067:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(1601),a=r.n(n),l=r(6314),i=r.n(l)()(a());i.push([e.id,".slider-wrapper{position:relative;width:100%;max-width:90%;margin:auto}.slider-wrapper .slides-container{width:100%;overflow:hidden}.slider-wrapper .slides-container .slides{display:flex;transition:transform .5s ease-in-out}.slider-wrapper .slides-container .slides .slide{flex:0 0 33%;display:flex;align-items:center;justify-content:center}.slider-wrapper .slides-container .slides .slide .card{width:90%;height:300px;background-size:cover;background-position:center;border-radius:10px;box-shadow:0 4px 8px rgba(0,0,0,.1)}.slider-wrapper .slides-container .slider-control{position:absolute;top:50%;transform:translate(-50%);border:none;color:#fff;background-color:rgba(0,0,0,.5);cursor:pointer;z-index:1}.slider-wrapper .slides-container .slider-control.prev{left:20px}.slider-wrapper .slides-container .slider-control.next{right:0}",""]);const c=i}}]);