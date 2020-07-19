(this["webpackJsonpportfolio-light"]=this["webpackJsonpportfolio-light"]||[]).push([[0],{140:function(e,t,a){e.exports=a(356)},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},354:function(e,t,a){},355:function(e,t,a){},356:function(e,t,a){"use strict";a.r(t),a.d(t,"routers",(function(){return J}));var n,r,l=a(1),c=a.n(l),o=a(136),i=a.n(o),s=a(139),m=a(358),u=a(359),f=new Date(2019,6,17),p=(n=f,r=new Date,Object(m.a)(r)-Object(m.a)(n)+12*(Object(u.a)(r)-Object(u.a)(n))),d=p%12,v=Math.floor(p/12),g=(a(145),function(){return c.a.createElement("div",{className:"section",id:"home"},c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__greeting"},"Hello, I'm"),c.a.createElement("div",{className:"home__name"},"Sergei Morozov"),c.a.createElement("div",{className:"home__description"},"I have ",function(){var e="";return v>1&&(e+=v+" years "),1===v&&(e+=v+" year "),d>1&&(e+=d+" months "),1===d&&(e+=d+" month "),e}()," of experience as Frontend Developer")))}),E=function(e){var t=e.date,a=e.company,n=e.duties,r=e.technologies,l=e.projects;return c.a.createElement("div",{className:"about__experience"},c.a.createElement("small",{className:"about__date"},t),c.a.createElement("div",{className:"about__content"},c.a.createElement("h3",{className:"about__company"},a),c.a.createElement("ul",{className:"about__list"},n.map((function(e){return c.a.createElement("li",{key:e},e,".")}))),c.a.createElement("h6",{className:"about__section"},"Technologies:"),c.a.createElement("p",{className:"about__list"},r.map((function(e,t){return c.a.createElement("span",{key:t},e,t===r.length-1?".":", ")}))),c.a.createElement("h6",{className:"about__section"},"Projects:"),c.a.createElement("ul",{className:"about__list"},l.map((function(e){return c.a.createElement("li",{key:e},e,".")})))))},b=[{id:2,date:"February 2020 \u2014 currently",company:"PTNL.Moscow",duties:["Development and maintenance of new applications","Writing application documentation","Optimizing and refactoring legacy code","Extending application functionality","Collaboration with back end development teams","Code Review"],technologies:["React","Redux","Redux-Saga","TypeScript","SCSS","Webpack"," Material-UI","Highchart"],projects:["Visualization and data analysis system"," Analytical dashboard system","UI components library"]},{id:1,date:"July 2019 \u2014 February 2020",company:"Inanomo",duties:["Development new application functionality","Writing application documentation","Collaboration with back end development teams"],technologies:["React","Redux","Redux-Saga","TypeScript","Material-UI","Draft.js"],projects:["User Notification System"]}],h=(a(146),function(){return c.a.createElement("div",{className:"section",id:"about"},c.a.createElement("div",{className:"about"},c.a.createElement("h2",{className:"about__header"},"Experience"),c.a.createElement("div",{className:"about__timeline"},b.map((function(e){return c.a.createElement(E,Object.assign({},e,{key:e.id}))})))))});a(147);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var _=c.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.8862 31.772C24.6598 31.772 31.7723 24.6596 31.7723 15.886C31.7723 7.11241 24.6598 0 15.8862 0C7.11248 0 0 7.11241 0 15.886C0 24.6596 7.11248 31.772 15.8862 31.772ZM22.3717 15.6567H20.531V17.501H22.3717V19.3417H24.2124V17.501H26.0531V15.6567H24.2124V13.8196H22.3717V15.6567ZM5.52212 16.5665C5.52212 12.9694 8.29662 10.0533 11.8938 10.0533C13.6115 10.0533 15.261 10.581 16.4248 11.6674L14.8106 13.3949C13.8761 12.7435 12.9648 12.4603 11.8938 12.4603C9.62602 12.4603 7.9292 14.5842 7.9292 16.5665C7.9292 18.5488 9.84271 20.6727 12.177 20.6727C14.5113 20.6727 15.5752 18.832 15.7984 17.8408H12.0354V15.6567H18.344C18.5487 20.1063 16.1416 23.0797 12.177 23.0797C8.21239 23.0797 5.52212 20.1637 5.52212 16.5665Z",fill:"black"}),O=function(e){var t=e.svgRef,a=e.title,n=y(e,["svgRef","title"]);return c.a.createElement("svg",C({width:32,height:32,viewBox:"0 0 32 32",fill:"none",ref:t},n),a?c.a.createElement("title",null,a):null,_)},N=c.a.forwardRef((function(e,t){return c.a.createElement(O,C({svgRef:t},e))}));a.p;function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var k=c.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0ZM19.3785 22.6714C19.3785 24.3411 19.3639 25.6851 19.3639 26.0961C19.3639 26.2409 19.4067 26.3963 19.5071 26.5156C18.5447 26.7742 17.5343 26.914 16.4911 26.914C15.3121 26.914 14.1747 26.7363 13.1017 26.4087C13.1529 26.3107 13.1761 26.2006 13.1761 26.0961C13.1761 25.7985 13.1645 24.8154 13.1593 23.7726C9.68727 24.5275 8.95462 22.3002 8.95462 22.3002C8.38691 20.8576 7.56902 20.4742 7.56902 20.4742C6.4368 19.6996 7.6544 19.7155 7.6544 19.7155C8.90749 19.8036 9.56742 21.0016 9.56742 21.0016C10.6804 22.9095 12.4868 22.3579 13.199 22.0391C13.311 21.2324 13.6345 20.682 13.9913 20.3703C11.2195 20.0547 8.30545 18.9846 8.30545 14.2027C8.30545 12.8404 8.79302 11.727 9.59142 10.8531C9.46182 10.5386 9.03476 9.26936 9.71229 7.55038C9.71229 7.55038 10.7603 7.21496 13.1452 8.82965C14.1405 8.553 15.2081 8.41438 16.2688 8.40973C17.3295 8.41453 18.3978 8.553 19.3952 8.82965C21.7772 7.21496 22.8237 7.55038 22.8237 7.55038C23.503 9.26936 23.0756 10.5387 22.946 10.8531C23.7462 11.727 24.2304 12.8403 24.2304 14.2027C24.2304 18.9959 21.311 20.0513 18.5321 20.3603C18.9796 20.7476 19.3785 21.5072 19.3785 22.6714Z",fill:"black"}),R=function(e){var t=e.svgRef,a=e.title,n=j(e,["svgRef","title"]);return c.a.createElement("svg",w({width:32,height:32,viewBox:"0 0 32 32",fill:"none",ref:t},n),a?c.a.createElement("title",null,a):null,k)},x=c.a.forwardRef((function(e,t){return c.a.createElement(R,w({svgRef:t},e))}));a.p;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var P=c.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM9 22V12H12V22H9ZM14 12H17V13.3597C18.2449 12.0762 19.1767 11.65 20.75 11.65C23.25 11.75 24 13.75 24 16V22H21V16.5C21 15.35 20.6604 14.3559 19.5 14.3C18.3396 14.2441 17.11 15.1342 17 16.5V22H14V12ZM12 9.5C12 8.67157 11.3284 8 10.5 8C9.67157 8 9 8.67157 9 9.5C9 10.3284 9.67157 11 10.5 11C11.3284 11 12 10.3284 12 9.5Z",fill:"black"}),H=function(e){var t=e.svgRef,a=e.title,n=M(e,["svgRef","title"]);return c.a.createElement("svg",S({width:32,height:32,viewBox:"0 0 32 32",fill:"none",ref:t},n),a?c.a.createElement("title",null,a):null,P)},V=c.a.forwardRef((function(e,t){return c.a.createElement(H,S({svgRef:t},e))}));a.p;function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Z=c.a.createElement("path",{d:"M21.7143 11.5429L12.8 19.4286C12.6857 19.5429 12.6857 19.6572 12.6857 19.7714L12.3429 22.8572C12.3429 22.9714 12.2286 22.9714 12.1143 22.8572L10.7429 18.2857C10.6286 18.0572 10.7429 17.8286 10.9714 17.7143L21.3714 11.2C21.7143 11.0857 21.9429 11.4286 21.7143 11.5429Z",fill:"black"}),z=c.a.createElement("path",{d:"M16 0C11.6259 0 7.59712 1.73913 4.71942 4.63768C1.84173 7.53623 0 11.5942 0 16C0 20.4058 1.72662 24.4638 4.71942 27.3623C7.59712 30.2609 11.6259 32 16 32C20.3741 32 24.4029 30.2609 27.2806 27.3623C30.1583 24.4638 32 20.4058 32 16C31.8849 7.18841 24.7482 0 16 0ZM25.4389 9.15942L22.2158 24.9275C22.1007 25.6232 21.1799 25.971 20.6043 25.5072L15.6547 21.7971L13.1223 24.3478C12.6619 24.8116 11.9712 24.5797 11.741 24L9.89928 18.2029L5.06475 16.6957C4.3741 16.4638 4.3741 15.6522 5.06475 15.4203L24.2878 7.88406C24.8633 7.76812 25.6691 8.34783 25.4389 9.15942Z",fill:"black"}),T=function(e){var t=e.svgRef,a=e.title,n=L(e,["svgRef","title"]);return c.a.createElement("svg",I({width:32,height:32,viewBox:"0 0 32 32",fill:"none",ref:t},n),a?c.a.createElement("title",null,a):null,Z,z)},D=c.a.forwardRef((function(e,t){return c.a.createElement(T,I({svgRef:t},e))})),B=(a.p,function(){return c.a.createElement("div",{className:"section",id:"contacts"},c.a.createElement("div",{className:"contacts"},c.a.createElement("div",{className:"contacts__content"},c.a.createElement("div",{className:"contacts__col"},c.a.createElement("a",{href:"https://www.linkedin.com/in/morozserge/",className:"contacts__link"},c.a.createElement(V,{className:"contacts__icon"}),c.a.createElement("span",{className:"contacts__text"},"/morozserge")),c.a.createElement("a",{href:"https://t.me/morozserge",className:"contacts__link"},c.a.createElement(D,{className:"contacts__icon"}),c.a.createElement("span",{className:"contacts__text"},"/morozserge"))),c.a.createElement("div",{className:"contacts__col"},c.a.createElement("a",{href:"https://github.com/morozserge1st",className:"contacts__link"},c.a.createElement(x,{className:"contacts__icon"}),c.a.createElement("span",{className:"contacts__text"},"/morozserge1st")),c.a.createElement("a",{href:"mailto:morozserge1st@gmail.com",className:"contacts__link"},c.a.createElement(N,{className:"contacts__icon"}),c.a.createElement("span",{className:"contacts__text"},"morozserge1st@gmail.com"))))))}),F=a(137),U=(a(354),function(e){var t=e.handleClick,a=e.page;return c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("button",{name:"0",onClick:t,className:0===a?"is-dark":""},c.a.createElement("span",{className:"nav-dot"}),c.a.createElement("span",{className:"nav-label"},"Intro"))),c.a.createElement("li",null,c.a.createElement("button",{name:"1",onClick:t,className:1===a?"is-dark":""},c.a.createElement("span",{className:"nav-dot"}),c.a.createElement("span",{className:"nav-label"},"About"))),c.a.createElement("li",null,c.a.createElement("button",{name:"2",onClick:t,className:2===a?"is-dark":""},c.a.createElement("span",{className:"nav-dot"}),c.a.createElement("span",{className:"nav-label"},"\u0421ontacts")))))}),A=function(){var e=Object(l.useState)(0),t=Object(s.a)(e,2),a=t[0],n=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(U,{handleClick:function(e){e.preventDefault(),n(+e.currentTarget.name)},page:a}),c.a.createElement(F.a,{pageOnChange:function(e){n(e)},customPageNumber:a,transitionTimingFunction:"ease-in",animationTimer:500,animationTimerBuffer:0,renderAllPagesOnFirstRender:!1},c.a.createElement(g,null),c.a.createElement(h,null),c.a.createElement(B,null)))},J=(a(355),{home:"/",about:"/about",works:"/works"});i.a.render(c.a.createElement(A,null),document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.67a08f54.chunk.js.map