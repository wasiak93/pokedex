(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{13:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA+QAAAPkBHYYEgQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJuSURBVFiFrZaxT1NBGMB/3yO+GvoUC/+BcWMkFhcXW4M1EeNQBx3QycE4KSQmxsWYCJvB0cHFmECIiUttAk4MFq1xcZPdhRKklvbR8jlIicB7vet779vu3d33++Xe3X0n7Ec9n72FMiPg7aFvveHGc1n84ZNAaHHUrde8J6C3BbZRZr1Pa+8AZB8+jTJ3eJqU0u7GDSn9bMWHpxcErh/Kjj5Nr3x5JvVcdgp4EzhZ9IOXaRSjroQWR9365uCiqEwGDhCmZDuXXRc4G5okooQRDgisOyJkeiUSlcn65uCiFkfdJOEAChlHlSVTwn4kbOEAqrLk+K48RKgkIdEPHKHip3gkALX82NAJHfgocME4MeR0hO32EHi13XQvn1ld3ZTutzgSUeH/mv9FFAm8lEaFHxPoW0Ioo+qDXIsCDxToW8ImQuChAolK9ID3FEhEwgA3CsSSsIBbCXQlUgyUVRm3o+u3diuVN8EBHJt0mUxzp7PHhh0cFKc2dOpXw2asUaB7yTjCVVsBQfN//JH3WjiXMo+1gFtdMsHpjY+aUIH4cDuJQIHk4GaJY3ugz8LyfQ++mgW0ELYnDglEqGqX2tLJK3yOKnHwC+KU1DilXOLCuxFVQvp+RtGZGF6ubgV11/JjQy4DZSxuzIPXdj2XnQVm4sKjSCDMOsCdpOAAw8vVLZ/OhM1DF+WuA+wa4NV20y3YwI9KWJyOloPwsge84tPJ2VS1IIld6VzpuRLCvChII3d+XpH7Rzqt6rkpwk6Hwmvv4to92W9II5d9rDANnAQWWq48GClVfseBd2OjMH46tauvUG4COyBz6ZXKCwH9C4uZtSoMwAAPAAAAAElFTkSuQmCC"},14:function(e,a,t){e.exports=t(53)},19:function(e,a,t){},20:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(11),l=t.n(r),o=(t(19),t(3)),s=t(2),u=(t(20),t(6)),i=t(12),m=t.n(i),p=(t(45),function(){return Object(u.usePromiseTracker)().promiseInProgress&&c.a.createElement("div",{className:"loader"},c.a.createElement(m.a,{type:"ThreeDots",color:"orange"}))}),d=(t(46),function(e){var a=e.text,t=e.nameClass,n=e.onClick,r=e.name,l=e.actualType;return c.a.createElement("button",{className:t?l===r?"catalog__button ".concat(t," catalog__button--active"):"catalog__button ".concat(t):"catalog__button",onClick:r?function(){return n(r)}:n},a)}),E=(t(47),function(e){var a=e.id,t=e.name,n=e.imageUrl,r=e.subtype,l=e.rarity,o=e.number,s=e.onClick,u=e.types,i=e.cardInPopup;return c.a.createElement("div",{className:"card ".concat(i&&"card--in-popup"),onClick:s?function(){return s(a)}:null},c.a.createElement("p",{className:"card__title"},c.a.createElement("span",{className:"card__name"},t),"Nr: ",o),c.a.createElement("img",{src:n,alt:"pokemon",className:"card__img"}),c.a.createElement("p",{className:"card__type-name"},c.a.createElement("span",{className:"card__type"},"Type: "),u[0]),c.a.createElement("p",{className:"card__type-name"},c.a.createElement("span",{className:"card__type"},"Subtype: ")," ",r),c.a.createElement("p",{className:"card__type-name"},c.a.createElement("span",{className:"card__type"},"Rarity: ")," ",l))}),f=(t(48),function(e){var a=e.inputValue,t=e.handlerInput;return c.a.createElement("div",{className:"catalog__header header"},c.a.createElement("h1",{className:"header__title"},"Pokemon ",c.a.createElement("span",{className:"header__title--brown"},"catalog")),c.a.createElement("form",{className:"header__form"},c.a.createElement("input",{type:"text",value:a,className:"header__input",onChange:t,placeholder:"Search"}),c.a.createElement("div",{className:a?"header__line header__line--color":"header__line"}),c.a.createElement("div",{className:"header__input-subtitle"},a&&"Search")))}),_=(t(49),t(50),function(e){var a=e.title,t=e.array;return c.a.createElement("div",{className:"popup__detail"},c.a.createElement("p",{className:"popup__detail-type"},a),t)}),A=(t(51),function(e){var a=e.name,t=e.value;return c.a.createElement("p",{className:"popup__detail-name",key:a},a,c.a.createElement("span",{className:"popup__name"},t))}),b=(t(52),t(13)),v=t.n(b),g=function(e){var a=e.onClick;return c.a.createElement("button",{className:"popup__button",onClick:a},c.a.createElement("img",{src:v.a,alt:"close"}))},k=function(e){var a=e.card,t=e.onClick,r=e.onKeyDown,l=a[0],o=a[0].name,s=[{id:0,title:"attacks",array:l.attacks&&l.attacks.map((function(e){var a=e.name,t=e.damage;return c.a.createElement(A,{key:a,name:a,value:t})}))},{id:1,title:"weaknesses",array:l.weaknesses&&l.weaknesses.map((function(e){var a=e.type,t=e.value;return c.a.createElement(A,{key:a,name:a,value:t})}))}].map((function(e){var a=e.title,t=e.array,n=e.id;return c.a.createElement(_,{title:a,array:t,key:n})}));return Object(n.useEffect)((function(){document.addEventListener("keydown",r)}),[]),c.a.createElement("div",{className:"popup"},c.a.createElement("div",{className:"popup__wrapper"},c.a.createElement(g,{onClick:t}),c.a.createElement("h2",{className:"popup__title"},o," fight details"),c.a.createElement(E,Object.assign({cardInPopup:"true"},l)),c.a.createElement("div",{className:"popup__fight-details"},s)))},O=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)([]),i=Object(s.a)(l,2),m=i[0],_=i[1],A=Object(n.useState)([]),b=Object(s.a)(A,2),v=b[0],g=b[1],O=Object(n.useState)([]),C=Object(s.a)(O,2),j=C[0],h=C[1],y=Object(n.useState)(4),N=Object(s.a)(y,2),w=N[0],S=N[1],I=Object(n.useState)("https://api.pokemontcg.io/v1/cards?pageSize=".concat(w)),H=Object(s.a)(I,2),B=H[0],x=H[1],V=Object(n.useState)(!1),F=Object(s.a)(V,2),J=F[0],Q=F[1],U=Object(n.useState)(""),X=Object(s.a)(U,2),L=X[0],P=X[1],D=Object(n.useState)(!1),K=Object(s.a)(D,2),R=K[0],M=K[1],Z=Object(n.useState)("All"),W=Object(s.a)(Z,2),G=W[0],T=W[1],z=Object(n.useState)(!1),q=Object(s.a)(z,2),Y=q[0],$=q[1],ee=Object(n.useState)({}),ae=Object(s.a)(ee,2),te=ae[0],ne=ae[1],ce=Object(n.useCallback)((function(){Q(!0),Object(u.trackPromise)(fetch(B).then((function(e){if(!e.ok)throw M(!0),Error("Something gone wrong");return e.json()})).then((function(e){var a=e.cards.filter((function(e){return e.types})),t=a.map((function(e){return e.types[0]})),n=Object(o.a)(new Set(t));M(!1),r(Object(o.a)(a)),_(Object(o.a)(a)),g(Object(o.a)(a)),Q(!1),h(n)})).catch((function(e){console.error(e),M(!0),Q(!1)})))}),[B]);Object(n.useEffect)((function(){ce()}),[ce]);var re=function(e){T(e);var a=t.filter((function(a){return a.types[0]===e}));switch(e){case"All":if(_(t),L){var n=t.filter((function(e){return e.name.toLowerCase().includes(L.toLowerCase())}));g(Object(o.a)(n))}break;default:if(_(a),L){var c=a.filter((function(e){return e.name.toLowerCase().includes(L.toLowerCase())}));g(Object(o.a)(c))}}},le=function(e){var a=t.filter((function(a){return a.id===e}));$(!0),ne(a)},oe=(L?v:m).map((function(e){return c.a.createElement(E,Object.assign({key:e.id,onClick:le},e))})),se=j.map((function(e,a){return c.a.createElement(d,{key:a,nameClass:"catalog__button--smaller",text:e,onClick:re,name:e,actualType:G,id:a})})),ue=Y&&c.a.createElement(k,{card:te,onClick:function(){$(!1)},onKeyDown:function(e){27===e.keyCode&&$(!1)}}),ie=!J&&!R&&c.a.createElement("div",{className:"catalog__buttons-wrapper"},c.a.createElement(d,{nameClass:"catalog__button--smaller",text:"All",name:"All",onClick:re,actualType:G}),se),me=!L&&!J&&!R&&c.a.createElement(d,{onClick:function(){var e=w+4;S(e),x("https://api.pokemontcg.io/v1/cards?pageSize=".concat(e))},text:"Load ".concat(4," more cards")}),pe=R&&c.a.createElement("p",{className:"error"},"Ooooops, something gone wrong");return c.a.createElement("div",{className:"catalog"},c.a.createElement(f,{inputValue:L,handlerInput:function(e){var a=e.target.value,t=m.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));g(Object(o.a)(t)),P(a)}}),ie,ue,c.a.createElement("div",{className:"catalog__cards"},oe),c.a.createElement(p,null),me,pe)};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7847a485.chunk.js.map