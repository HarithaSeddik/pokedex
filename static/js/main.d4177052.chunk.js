(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(18),o=n.n(i),s=(n(24),n(19)),r=n(3),j=(n(25),n(8)),b=n.n(j),l=n(0),u=Object(c.createContext)(),d=function(e){var t=Object(c.useState)([]),n=Object(r.a)(t,2),a=n[0],i=n[1],o=Object(c.useState)([]),s=Object(r.a)(o,2),j={pokemons:a,setPokemons:i,capturedPokemons:s[0],setCapturedPokemons:s[1]};return Object(l.jsx)(u.Provider,{value:j,children:e.children})},O=function(e){var t=e.id,n=e.image,a=e.name,i=e.type,o=e.weight,s=e.height,r=e.ability,j=(e._callback,i+" thumb-container");return Object(c.useContext)(u),Object(l.jsxs)("div",{className:j,children:[Object(l.jsx)("div",{className:"number",children:Object(l.jsxs)("small",{children:["#0",t]})}),Object(l.jsx)("img",{src:n,alt:a}),Object(l.jsxs)("div",{className:"detail-wrapper",children:[Object(l.jsx)("h3",{children:a}),Object(l.jsxs)("small",{children:["Type: ",i]}),Object(l.jsx)("div",{className:"Card__data Card__data--weight",children:Object(l.jsxs)("p",{className:"title",children:["Weight : ",o,"  ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Height :",s," ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Ability : ",r," ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{})," "]})})]}),Object(l.jsx)("button",{children:" CAPTURE POKEMON"})]})},h=function(e){var t=e.pokemon;return Object(l.jsx)("div",{className:"all-container",children:t.map((function(e,t){return Object(l.jsx)(O,{pokemonStats:e,id:e.id,image:e.sprites.other.dream_world.front_default,name:e.name,type:e.types[0].type.name,weight:e.weight,height:e.height,ability:e.abilities[0].ability.name},t)}))})},x=function(e){var t=e.goToNextPage,n=e.goToPrevPage;return Object(l.jsxs)("div",{children:[n&&Object(l.jsx)("button",{onClick:n,children:" Previous "}),t&&Object(l.jsx)("button",{onClick:t,children:" Next "})]})};var p=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)("https://pokeapi.co/api/v2/pokemon?limit=20"),o=Object(r.a)(i,2),j=o[0],u=o[1],O=Object(c.useState)(),p=Object(r.a)(O,2),m=p[0],g=p[1],f=Object(c.useState)(),v=Object(r.a)(f,2),k=v[0],P=v[1],N=Object(c.useState)(!0),C=Object(r.a)(N,2),T=C[0],y=C[1];function S(){u(m)}function w(){u(k)}return Object(c.useEffect)((function(){var e;return y(!0),b.a.get(j,{cancelToken:new b.a.CancelToken((function(t){return e=t}))}).then((function(e){return y(!1),g(e.data.next),P(e.data.previous),e.data})).then((function(e){a([]),e.results.forEach((function(e){b.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e.name)).then((function(e){var t=e.data;a((function(e){return[].concat(Object(s.a)(e),[t])}))}))}))})),function(){return e()}}),[j]),T?"LOADING...":Object(l.jsx)(d,{children:Object(l.jsxs)("div",{className:"app-container",children:[Object(l.jsx)("h1",{children:"Pokedex"}),Object(l.jsx)(x,{goToNextPage:m?S:null,goToPrevPage:k?w:null}),Object(l.jsxs)("div",{className:"pokemon-container",children:[console.log(k),Object(l.jsx)(h,{pokemon:n}),Object(l.jsx)(x,{goToNextPage:m?S:null,goToPrevPage:k?w:null})]})]})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),m()}},[[45,1,2]]]);
//# sourceMappingURL=main.d4177052.chunk.js.map