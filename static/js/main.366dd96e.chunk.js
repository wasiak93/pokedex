(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],[,,,,,,,,,,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA+QAAAPkBHYYEgQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJuSURBVFiFrZaxT1NBGMB/3yO+GvoUC/+BcWMkFhcXW4M1EeNQBx3QycE4KSQmxsWYCJvB0cHFmECIiUttAk4MFq1xcZPdhRKklvbR8jlIicB7vet779vu3d33++Xe3X0n7Ec9n72FMiPg7aFvveHGc1n84ZNAaHHUrde8J6C3BbZRZr1Pa+8AZB8+jTJ3eJqU0u7GDSn9bMWHpxcErh/Kjj5Nr3x5JvVcdgp4EzhZ9IOXaRSjroQWR9365uCiqEwGDhCmZDuXXRc4G5okooQRDgisOyJkeiUSlcn65uCiFkfdJOEAChlHlSVTwn4kbOEAqrLk+K48RKgkIdEPHKHip3gkALX82NAJHfgocME4MeR0hO32EHi13XQvn1ld3ZTutzgSUeH/mv9FFAm8lEaFHxPoW0Ioo+qDXIsCDxToW8ImQuChAolK9ID3FEhEwgA3CsSSsIBbCXQlUgyUVRm3o+u3diuVN8EBHJt0mUxzp7PHhh0cFKc2dOpXw2asUaB7yTjCVVsBQfN//JH3WjiXMo+1gFtdMsHpjY+aUIH4cDuJQIHk4GaJY3ugz8LyfQ++mgW0ELYnDglEqGqX2tLJK3yOKnHwC+KU1DilXOLCuxFVQvp+RtGZGF6ubgV11/JjQy4DZSxuzIPXdj2XnQVm4sKjSCDMOsCdpOAAw8vVLZ/OhM1DF+WuA+wa4NV20y3YwI9KWJyOloPwsge84tPJ2VS1IIld6VzpuRLCvChII3d+XpH7Rzqt6rkpwk6Hwmvv4to92W9II5d9rDANnAQWWq48GClVfseBd2OjMH46tauvUG4COyBz6ZXKCwH9C4uZtSoMwAAPAAAAAElFTkSuQmCC"},function(e,t,a){e.exports=a(55)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),o=a.n(r),l=(a(19),a(3)),u=a(2),i=(a(20),a(6)),s=a(12),m=a.n(s),p=(a(45),function(){return Object(i.usePromiseTracker)().promiseInProgress&&c.a.createElement("div",{className:"loader"},c.a.createElement(m.a,{type:"ThreeDots",color:"orange"}))}),d=(a(46),function(e){var t=e.text,a=e.nameClass,n=e.onClick,r=e.name,o=e.actualType;return c.a.createElement("button",{className:"button ".concat(a," ").concat(o===r?"button--active":""),onClick:r?function(){return n(r)}:n},t)}),f=(a(47),function(e){var t=e.bigger,a=e.name,n=e.type;return c.a.createElement("p",{className:"card__acapit"},c.a.createElement("span",{className:"card__type ".concat(t?"card__type--bigger":"")},a),n)}),E=function(e){var t=e.id,a=e.name,n=e.imageUrl,r=e.subtype,o=e.rarity,l=e.number,u=e.onClick,i=e.types,s=e.cardInPopup,m=[{id:0,name:"Type",type:i[0]},{id:1,name:"Subtype",type:r},{id:2,name:"Rarity",type:o}],p="Nr: ".concat(l),d=m.map((function(e){return c.a.createElement(f,Object.assign({key:e.id},e))}));return c.a.createElement("div",{className:"card ".concat(s?"card--in-popup":""),onClick:u?function(){return u(t)}:null},c.a.createElement(f,{bigger:"1",name:a,type:p}),c.a.createElement("img",{src:n,alt:"pokemon",className:"card__img"}),d)},A=(a(48),a(49),function(e){var t=e.inputValue,a=e.handlerInput;return c.a.createElement("form",{className:"form"},c.a.createElement("input",{type:"text",value:t,className:"form__input",onChange:a,placeholder:"Search"}),c.a.createElement("div",{className:"form__line ".concat(t&&"form__line--color")}),c.a.createElement("div",null,t&&"Search"))}),b=function(e){var t=e.inputValue,a=e.handlerInput;return c.a.createElement("div",{className:"catalog__header header"},c.a.createElement("h1",{className:"header__title"},"Pokemon ",c.a.createElement("span",{className:"header__title--brown"},"catalog")),c.a.createElement(A,{inputValue:t,handlerInput:a}))},v=(a(50),a(51),function(e){var t=e.title,a=e.array;return c.a.createElement("div",{className:"popup__detail"},c.a.createElement("p",{className:"popup__detail-type"},t),a)}),g=(a(52),function(e){var t=e.name,a=e.value;return c.a.createElement("p",{className:"popup__detail-name",key:t},t,c.a.createElement("span",{className:"popup__name"},a))}),k=(a(53),a(13)),O=a.n(k),C=function(e){var t=e.onClick;return c.a.createElement("button",{className:"popup__button",onClick:t},c.a.createElement("img",{src:O.a,alt:"close"}))},j=function(e){var t=e.card,a=e.onClick,r=e.onKeyDown,o=t[0],l=t[0].name,u=[{id:0,title:"attacks",array:o.attacks&&o.attacks.map((function(e){var t=e.name,a=e.damage;return c.a.createElement(g,{key:t,name:t,value:a})}))},{id:1,title:"weaknesses",array:o.weaknesses&&o.weaknesses.map((function(e){var t=e.type,a=e.value;return c.a.createElement(g,{key:t,name:t,value:a})}))}].map((function(e){var t=e.title,a=e.array,n=e.id;return c.a.createElement(v,{title:t,array:a,key:n})}));return Object(n.useEffect)((function(){document.addEventListener("keydown",r)}),[]),c.a.createElement("div",{className:"popup"},c.a.createElement("div",{className:"popup__wrapper"},c.a.createElement(C,{onClick:a}),c.a.createElement("h2",{className:"popup__title"},l," fight details"),c.a.createElement(E,Object.assign({cardInPopup:"true"},o)),c.a.createElement("div",{className:"popup__fight-details"},u)))},y=(a(54),function(){return c.a.createElement("p",{className:"error"},"Ooooops, something gone wrong")}),h=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),s=Object(u.a)(o,2),m=s[0],f=s[1],A=Object(n.useState)([]),v=Object(u.a)(A,2),g=v[0],k=v[1],O=Object(n.useState)([]),C=Object(u.a)(O,2),h=C[0],_=C[1],N=Object(n.useState)(4),w=Object(u.a)(N,2),S=w[0],I=w[1],H=Object(n.useState)("https://api.pokemontcg.io/v1/cards?pageSize=".concat(S)),B=Object(u.a)(H,2),V=B[0],x=B[1],F=Object(n.useState)(!1),J=Object(u.a)(F,2),Q=J[0],U=J[1],X=Object(n.useState)(""),L=Object(u.a)(X,2),P=L[0],D=L[1],K=Object(n.useState)(!1),R=Object(u.a)(K,2),M=R[0],Z=R[1],T=Object(n.useState)("All"),W=Object(u.a)(T,2),G=W[0],z=W[1],q=Object(n.useState)(!1),Y=Object(u.a)(q,2),$=Y[0],ee=Y[1],te=Object(n.useState)({}),ae=Object(u.a)(te,2),ne=ae[0],ce=ae[1],re=Object(n.useCallback)((function(){U(!0),Object(i.trackPromise)(fetch(V).then((function(e){if(!e.ok)throw Z(!0),Error("Something gone wrong");return e.json()})).then((function(e){var t=e.cards.filter((function(e){return e.types})),a=t.map((function(e){return e.types[0]})),n=Object(l.a)(new Set(a));Z(!1),r(Object(l.a)(t)),f(Object(l.a)(t)),k(Object(l.a)(t)),U(!1),_(n)})).catch((function(e){console.error(e),Z(!0),U(!1)})))}),[V]);Object(n.useEffect)((function(){re()}),[re]);var oe=function(e){z(e);var t=a.filter((function(t){return t.types[0]===e}));switch(e){case"All":if(f(a),P){var n=a.filter((function(e){return e.name.toLowerCase().includes(P.toLowerCase())}));k(Object(l.a)(n))}break;default:if(f(t),P){var c=t.filter((function(e){return e.name.toLowerCase().includes(P.toLowerCase())}));k(Object(l.a)(c))}}},le=function(e){var t=a.filter((function(t){return t.id===e}));ee(!0),ce(t)},ue=(P?g:m).map((function(e){return c.a.createElement(E,Object.assign({key:e.id,onClick:le},e))})),ie=h.map((function(e,t){return c.a.createElement(d,{key:t,nameClass:"button--smaller",text:e,onClick:oe,name:e,actualType:G,id:t})})),se=$&&c.a.createElement(j,{card:ne,onClick:function(){ee(!1)},onKeyDown:function(e){27===e.keyCode&&ee(!1)}}),me=!Q&&!M&&c.a.createElement("div",{className:"catalog__buttons-wrapper"},c.a.createElement(d,{nameClass:"button--smaller",text:"All",name:"All",onClick:oe,actualType:G}),ie),pe=!P&&!Q&&!M&&c.a.createElement(d,{onClick:function(){var e=S+4;I(e),x("https://api.pokemontcg.io/v1/cards?pageSize=".concat(e))},text:"Load ".concat(4," more cards"),nameClass:"button-more",actualType:G}),de=M&&c.a.createElement(y,null);return c.a.createElement("div",{className:"catalog"},c.a.createElement(b,{inputValue:P,handlerInput:function(e){var t=e.target.value,a=m.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));k(Object(l.a)(a)),D(t)}}),me,se,c.a.createElement("div",{className:"catalog__cards"},ue),c.a.createElement(p,null),pe,de)};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.366dd96e.chunk.js.map