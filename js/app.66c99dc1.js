(function(){"use strict";var e={6787:function(e,t,r){var n=r(9242),l=r(3396),o=r(7139);const i={class:"container mx-auto flex flex-col items-center bg-gray-100 p-4"},s={class:"container"},a=(0,l._)("div",{class:"w-full my-4"},null,-1),c={class:"flex"},d={class:"max-w-xs"},u=(0,l._)("label",{for:"wallet",class:"block text-sm font-medium text-gray-700"},"Тикер",-1),f={class:"mt-1 relative rounded-md shadow-md"},h=(0,l._)("svg",{class:"-ml-0.5 mr-2 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"#ffffff"},[(0,l._)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})],-1),g=(0,l.Uk)(" Добавить "),p=[h,g],m=(0,l._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),w={class:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3"},v=["onClick"],b={class:"px-4 py-5 sm:p-6 text-center"},y={class:"text-sm font-medium text-gray-500 truncate"},x={class:"mt-1 text-3xl font-semibold text-gray-900"},k=(0,l._)("div",{class:"w-full border-t border-gray-200"},null,-1),_=["onClick"],D=(0,l._)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"#718096","aria-hidden":"true"},[(0,l._)("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),z=(0,l.Uk)("Удалить "),U=[D,z],j=(0,l._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),C={key:1,class:"relative"},O={class:"text-lg leading-6 font-medium text-gray-900 my-8"},M={class:"flex items-end border-gray-600 border-b border-l h-64"},S={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",version:"1.1",width:"30",height:"30",x:"0",y:"0",viewBox:"0 0 511.76 511.76",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve"},H=(0,l._)("g",null,[(0,l._)("path",{d:"M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048    c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z     M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165    c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0    c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z",fill:"#718096","data-original":"#000000"})],-1),V=[H];function B(e,t,r,h,g,D){return(0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("div",s,[a,(0,l._)("section",null,[(0,l._)("div",c,[(0,l._)("div",d,[u,(0,l._)("div",f,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>g.ticker=e),onKeydown:t[1]||(t[1]=(0,n.D2)(((...e)=>D.add&&D.add(...e)),["enter"])),type:"text",name:"wallet",id:"wallet",class:"block w-full pr-10 pl-5 py-2 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md",placeholder:"Например DOGE"},null,544),[[n.nr,g.ticker]])])])]),(0,l._)("button",{onClick:t[2]||(t[2]=(...e)=>D.add&&D.add(...e)),type:"button",class:"my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"},p)]),g.tickers.length?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[m,(0,l.Uk)(" "+(0,o.zw)(g.sel)+" ",1),(0,l._)("dl",w,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(g.tickers,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e,onClick:t=>D.select(e),class:(0,o.C_)([{"border-4":g.sel===e},"bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer"])},[(0,l._)("div",b,[(0,l._)("dt",y,(0,o.zw)(e.name)+" - USD ",1),(0,l._)("dd",x,(0,o.zw)(e.price),1)]),k,(0,l._)("button",{onClick:(0,n.iM)((t=>D.handleDelete(e)),["stop"]),class:"flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none"},U,8,_)],10,v)))),128))]),j],64)):(0,l.kq)("",!0),g.sel?((0,l.wg)(),(0,l.iD)("section",C,[(0,l._)("h3",O,(0,o.zw)(g.sel.name)+" - USD ",1),(0,l._)("div",M,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(D.normalizeGraph(),((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,style:(0,o.j5)({height:`${e}%`}),class:"bg-purple-800 border w-10"},(0,o.zw)(t),5)))),128))]),(0,l._)("button",{onClick:t[3]||(t[3]=e=>g.sel=null),type:"button",class:"absolute top-0 right-0"},[((0,l.wg)(),(0,l.iD)("svg",S,V))])])):(0,l.kq)("",!0)])])}r(7658);var G={name:"App",data(){return{ticker:"",tickers:[],sel:null,graph:[]}},methods:{add(){const e={name:this.ticker.toUpperCase(),price:"-"};this.tickers.push(e),setInterval((async()=>{const t=await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${e.name}&tsyms=USD&api_key=c4a94e93dff5e4b0f6b6cb58c1c3d68734a6c3dcf8a1f27370f88ad842cb8e3f`),r=await t.json();console.log(e),this.tickers.find((t=>t.name===e.name)).price=r.USD>1?r.USD.toFixed(2):r.USD.toPrecision(2),e.price=r.USD,this.sel?.name===e.name&&this.graph.push(r.USD)}),3e3),this.ticker=""},select(e){this.sel=e,this.graph=[]},handleDelete(e){this.tickers=this.tickers.filter((t=>t!==e))},normalizeGraph(){const e=Math.max(...this.graph),t=Math.min(...this.graph);return this.graph.map((r=>5+95*(r-t)/(e-t)))}}},K=r(89);const P=(0,K.Z)(G,[["render",B]]);var Y=P;(0,n.ri)(Y).mount("#app")}},t={};function r(n){var l=t[n];if(void 0!==l)return l.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,n,l,o){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],l=e[d][1],o=e[d][2];for(var s=!0,a=0;a<n.length;a++)(!1&o||i>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[a])}))?n.splice(a--,1):(s=!1,o<i&&(i=o));if(s){e.splice(d--,1);var c=l();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,l,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,o,i=n[0],s=n[1],a=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(l in s)r.o(s,l)&&(r.m[l]=s[l]);if(a)var d=a(r)}for(t&&t(n);c<i.length;c++)o=i[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},n=self["webpackChunkbadcode"]=self["webpackChunkbadcode"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(6787)}));n=r.O(n)})();
//# sourceMappingURL=app.66c99dc1.js.map