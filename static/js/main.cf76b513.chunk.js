(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{13:function(e,a,t){e.exports=t(45)},18:function(e,a,t){},19:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),n=t(10),s=t.n(n),l=(t(18),t(12)),m=t(2),o=(t(19),t(5)),p=t(11),i=t.n(p),u=(t(44),function(){return Object(o.usePromiseTracker)().promiseInProgress&&r.a.createElement("div",{className:"loader"},r.a.createElement(i.a,{type:"ThreeDots",color:"orange"}))}),_=function(){var e=Object(c.useState)([]),a=Object(m.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)([]),p=Object(m.a)(s,2),i=p[0],_=p[1],d=Object(c.useState)(8),E=Object(m.a)(d,2),h=E[0],N=E[1],y=Object(c.useState)("https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/cards?pageSize=".concat(h)),b=Object(m.a)(y,2),g=b[0],f=b[1],v=Object(c.useState)(!1),j=Object(m.a)(v,2),k=j[0],O=j[1],S=Object(c.useState)(""),w=Object(m.a)(S,2),C=w[0],x=w[1],P=Object(c.useCallback)((function(){O(!0),Object(o.trackPromise)(fetch(g).then((function(e){if(!e.ok)throw Error("Something gone wrong");return e.json()})).then((function(e){var a=e.cards;n(Object(l.a)(a)),O(!1)})).catch((function(e){console.error(e),O(!1)})))}),[g]);Object(c.useEffect)((function(){P()}),[P]);var L=t.map((function(e){var a=e.id,t=e.name,c=e.imageUrl,n=e.supertype,s=e.subtype,l=e.rarity,m=e.number;return r.a.createElement("div",{key:a,className:"card"},r.a.createElement("p",{className:"card__title"},r.a.createElement("span",{className:"card__name"},t),"Nr: ",m),r.a.createElement("img",{src:c,alt:"pokemon",className:"card__img"}),r.a.createElement("p",{className:"card__type-name"},r.a.createElement("span",{className:"card__type"},"Superttype: "),n),r.a.createElement("p",{className:"card__type-name"},r.a.createElement("span",{className:"card__type"},"Subtype: ")," ",s),r.a.createElement("p",{className:"card__type-name"},r.a.createElement("span",{className:"card__type"},"Rarity: ")," ",l))})),z=i.map((function(e){var a=e.id,t=e.name,c=e.imageUrl,n=e.supertype,s=e.subtype,l=e.rarity,m=e.number;return r.a.createElement("div",{key:a,className:"card"},r.a.createElement("p",{className:"card__title"},r.a.createElement("span",{className:"card__name"},t),"Nr: ",m),r.a.createElement("img",{src:c,alt:"pokemon",className:"card__img"}),r.a.createElement("p",{className:"card__type-name"},r.a.createElement("span",{className:"card__type"},"Superttype: "),n),r.a.createElement("p",{className:"card__type-name"},r.a.createElement("span",{className:"card__type"},"Subtype: ")," ",s),r.a.createElement("p",{className:"card__type-name"},r.a.createElement("span",{className:"card__type"},"Rarity: ")," ",l))}));return r.a.createElement("div",{className:"catalog"},r.a.createElement("div",{className:"catalog__header header"},r.a.createElement("h1",{className:"header__title"},"Pokemon ",r.a.createElement("span",{className:"header__title--brown"},"catalog")),r.a.createElement("div",{className:"header__container"},r.a.createElement("input",{type:"text",value:C,className:"header__input",onChange:function(e){var a=e.target.value,c=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));_(c),x(a)},placeholder:"Search"}),r.a.createElement("div",{className:C?"header__line header__line--red":"header__line"}),r.a.createElement("div",{className:"header__input-subtitle"},C&&"Search"))),r.a.createElement("div",{className:"catalog__cards"},C?z:L),r.a.createElement(u,null),C||k?null:r.a.createElement("button",{className:"catalog__button",onClick:function(){var e=h+8;N(e),f("https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/cards?pageSize=".concat(e))}},"Load ",8," more cards"))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.cf76b513.chunk.js.map