(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),n=t(5),s=t.n(n),l=(t(12),t(6)),m=t(1),o=(t(13),function(){var e=Object(c.useState)([]),a=Object(m.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)([]),o=Object(m.a)(s,2),p=o[0],i=o[1],_=Object(c.useState)(8),d=Object(m.a)(_,2),u=d[0],E=d[1],N=Object(c.useState)("https://api.pokemontcg.io/v1/cards?pageSize=".concat(u)),b=Object(m.a)(N,2),y=b[0],h=b[1],g=Object(c.useState)(!1),f=Object(m.a)(g,2),v=f[0],j=f[1],S=Object(c.useState)(""),O=Object(m.a)(S,2),k=O[0],w=O[1],C=Object(c.useCallback)((function(){j(!0),fetch(y).then((function(e){if(!e.ok)throw Error("Something gone wrong");return e.json()})).then((function(e){var a=e.cards;n(Object(l.a)(a)),j(!1)})).catch((function(e){console.error(e),j(!1)}))}),[y]);Object(c.useEffect)((function(){C()}),[C]);var x=t.map((function(e){var a=e.id,t=e.name,c=e.imageUrl,n=e.supertype,s=e.subtype,l=e.rarity,m=e.number;return r.a.createElement("div",{key:a,className:"card"},r.a.createElement("p",{className:"card__title"},r.a.createElement("span",{className:"card__name"},t),"Nr: ",m),r.a.createElement("img",{src:c,alt:"pokemon",className:"card__img"}),r.a.createElement("p",{className:"card__type-name"},r.a.createElement("span",{className:"card__type"},"Superttype: "),n),r.a.createElement("p",{className:"card__type-name"},r.a.createElement("span",{className:"card__type"},"Subtype: ")," ",s),r.a.createElement("p",{className:"card__type-name"},r.a.createElement("span",{className:"card__type"},"Rarity: ")," ",l))})),L=p.map((function(e){var a=e.id,t=e.name,c=e.imageUrl,n=e.supertype,s=e.subtype,l=e.rarity,m=e.number;return r.a.createElement("div",{key:a,className:"card"},r.a.createElement("p",{className:"card__title"},r.a.createElement("span",{className:"card__name"},t),"Nr: ",m),r.a.createElement("img",{src:c,alt:"pokemon",className:"card__img"}),r.a.createElement("p",{className:"card__type-name"},r.a.createElement("span",{className:"card__type"},"Superttype: "),n),r.a.createElement("p",{className:"card__type-name"},r.a.createElement("span",{className:"card__type"},"Subtype: ")," ",s),r.a.createElement("p",{className:"card__type-name"},r.a.createElement("span",{className:"card__type"},"Rarity: ")," ",l))}));return r.a.createElement("div",{className:"catalog"},r.a.createElement("div",{className:"catalog__header header"},r.a.createElement("h1",{className:"header__title"},"Pokemon ",r.a.createElement("span",{className:"header__title--brown"},"catalog")),r.a.createElement("div",{className:"header__container"},r.a.createElement("input",{type:"text",value:k,className:"header__input",onChange:function(e){var a=e.target.value,c=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));i(c),w(a)},placeholder:"Search"}),r.a.createElement("div",{className:k?"header__line header__line--red":"header__line"}),r.a.createElement("div",{className:"header__input-subtitle"},k&&"Search"))),r.a.createElement("div",{className:"catalog__cards"},k?L:x),v&&r.a.createElement("p",{className:"catalog__loader"},'"loading"'),k||v?null:r.a.createElement("button",{className:"catalog__button",onClick:function(){var e=u+8;E(e),h("https://api.pokemontcg.io/v1/cards?pageSize=".concat(e))}},"Load ",8," more cards"))});s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o,null)),document.getElementById("root"))},7:function(e,a,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.494a7854.chunk.js.map