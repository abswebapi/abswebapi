(this["webpackJsonpabs-web"]=this["webpackJsonpabs-web"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t){document.addEventListener("DOMContentLoaded",(function(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach((function(e){e.addEventListener("click",(function(){var t=e.dataset.target,a=document.getElementById(t);e.classList.toggle("is-active"),a.classList.toggle("is-active")}))}))}))},36:function(e,t,a){"use strict";a.r(t);a(25),a(26);var n=a(1),c=a.n(n),s=a(21),i=a.n(s),r=a(0);function l(){return Object(r.jsx)("footer",{className:"footer",children:Object(r.jsxs)("div",{className:"content is-size-4",children:[Object(r.jsxs)("div",{className:"",children:["Created by ",Object(r.jsx)("a",{className:"link",href:"https://github.com/sthfaceless",children:"@sthfaceless"})]}),Object(r.jsx)("div",{className:"",children:Object(r.jsx)("a",{href:"https://github.com/sthfaceless/abs-web",children:Object(r.jsx)("img",{alt:"github",className:"footer__github-link",src:"/static/github-alt.png"})})})]})})}var u=a(9);function d(e){var t=Object(n.useState)("main"),a=Object(u.a)(t,2),c=a[0],s=a[1];return e.context.updatePage=s,Object(r.jsxs)("nav",{className:"navbar header",role:"navigation","aria-label":"main navigation",children:[Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsxs)("a",{className:"navbar-item header__project-link",href:"/",children:[Object(r.jsx)("img",{alt:"logo",src:"/static/apple-touch-iconp.png"}),Object(r.jsx)("h1",{className:"header__project-name has-text-dark",children:"Algebraic Bayesian Networks"})]}),Object(r.jsxs)("a",{href:"#",role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbar-main",children:[Object(r.jsx)("span",{"aria-hidden":"true"}),Object(r.jsx)("span",{"aria-hidden":"true"}),Object(r.jsx)("span",{"aria-hidden":"true"})]})]}),Object(r.jsx)("div",{id:"navbar-main",className:"navbar-menu is-active",children:Object(r.jsx)("div",{className:"navbar-start",children:Object(r.jsx)("a",{className:"navbar-item"+("main"===c?" is-page":""),href:"/",children:"Knowledge Pattern"})})}),Object(r.jsx)("div",{className:"navbar-end"})]})}var j=a(23),o=a(2);function b(){return Object(r.jsx)("div",{className:"httpcode",children:Object(r.jsxs)("div",{className:"card httpcode__card",children:[Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("p",{className:"title",children:"404"}),Object(r.jsx)("p",{className:"subtitle",children:"Not found"})]}),Object(r.jsx)("div",{className:"card-footer",children:Object(r.jsx)("p",{className:"card-footer-item",children:Object(r.jsx)("span",{children:Object(r.jsx)("a",{href:"/",className:"httpcode__card__link",children:"Main page"})})})})]})})}var m=a(8),O=a(6),h=a(13);function p(e){return Object(r.jsxs)("div",{className:"kp-container__modifiers",children:[Object(r.jsx)("div",{className:"tags kp-container__modifiers__checkbox",children:Object.values(e.estimationTypes).map((function(t){return Object(r.jsx)("div",{className:"tag kp-container__modifiers__checkitem is-medium"+(t===e.estimationType?" is-active":""),onClick:function(){return e.updateEstimationType(t)},children:t},t)}))}),Object(r.jsxs)("div",{className:"tags has-addons kp-container__modifiers__number",children:[Object(r.jsx)("div",{className:"tag is-medium kp-container__modifiers__number-action",onClick:function(){return e.updateBaseNumber(-1)},children:"-"}),Object(r.jsx)("div",{className:"tag is-medium",children:e.baseNumber}),Object(r.jsx)("div",{className:"tag is-medium kp-container__modifiers__number-action",onClick:function(){return e.updateBaseNumber(1)},children:"+"})]})]})}var v=a(22);function f(e){return Object(r.jsxs)("div",{className:"tags",children:[Object(r.jsx)("div",{className:"tag is-medium kp-container__tab__input-item",children:Object(r.jsx)("input",{type:"text",value:e.firstValue,onChange:function(t){return e.updateValue(t.target.value,0)},className:"input is-small",disabled:!e.modificable})}),Object(r.jsx)("div",{className:"tag is-medium kp-container__tab__center-item "+e.className,children:Object(r.jsx)(v.a,{children:e.expression})}),e.estimationType===e.estimationTypes.INTERVAL&&Object(r.jsx)("div",{className:"kp-container__tab__input-item tag is-medium",children:Object(r.jsx)("input",{type:"text",value:e.secondValue,className:"input is-small",disabled:!e.modificable,onChange:function(t){return e.updateValue(t.target.value,1)}})})]})}var x="/api/kp/inconsistency";var N={INTERVAL:"Interval",POINT:"Point"},_=0,g=1,k=2,y=3,T=4;function C(e){var t,a=Object(n.useState)(N.INTERVAL),c=Object(u.a)(a,2),s=c[0],i=c[1],l=Object(n.useState)(3),d=Object(u.a)(l,2),j=d[0],o=d[1],b=Object(n.useState)(_),v=Object(u.a)(b,2),C=v[0],S=v[1],A=Object(n.useState)({}),E=Object(u.a)(A,2),I=E[0],V=E[1],w=Object(n.useState)(!1),L=Object(u.a)(w,2),J=L[0],P=L[1],U=(t={},Object(O.a)(t,e.kpTypes.CONJUCTS,(function(e,t){return Object(h.a)(Array(e).keys()).map((function(e){return 1<<e&t?"x_{"+(e+1)+"}":""})).reduce((function(e,t){return e+t}))||"\\emptyset"})),Object(O.a)(t,e.kpTypes.DISJUNCTS,(function(e,t){return Object(h.a)(Array(e).keys()).map((function(e){return 1<<e&t?"x_{"+(e+1)+"}":""})).reduce((function(e,t){return e+t}))||"\\emptyset"})),Object(O.a)(t,e.kpTypes.QUANTS,(function(e,t){return Object(h.a)(Array(e).keys()).map((function(e){return(1<<e&t?"":"\\bar ")+"x_{"+(e+1)+"}"})).reduce((function(e,t){return e+t}))})),t),B=function(e){return!!/^[0-9]+(\.[0-9]+)?$/.test(e)&&!(0>(e=Number.parseFloat(e))||e>1)},D=function(e){e!==J&&P(e)},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j;(!e||Object.keys(e).length<1<<t)&&D(!1);for(var a=0;a<1<<t;a++)if(!e[a]||!e[a].valid)return void D(!1);D(!0)},R=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s;return Object(m.a)(Object(m.a)({},Object(O.a)({},0,e)),a===N.INTERVAL?Object(O.a)({},1,t):{})},q=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s;return B(e)&&(a===N.POINT||B(t)&&t-e>=0)},F=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s;return q(e,t,a)?"is-success":!e||!t&&a===N.INTERVAL?"is-dark":"is-danger"},Q=function(){if(M(I),J&&(C===_||C===k)){var t=Object.keys(I).slice(0,1<<j).reduce((function(e,t){return Object(m.a)(Object(m.a)({},e),{},Object(O.a)({},t,I[t].value))}),{});t.type=e.kpType.toLowerCase(),t.estimationType=s.toLowerCase(),S(g),function(e,t,a){fetch(x,{method:"post",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){if(!e.ok)throw new Error("Request failed.");return e.json()})).then((function(e){return t(e)})).catch((function(e){return a(e)}))}(t,(function(e){e.result?S(y):S(T)}),(function(e){S(k)}))}};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p,{estimationTypes:N,estimationType:s,updateEstimationType:function(e){var t=Object.keys(I).reduce((function(t,a){var n=R(I[a].value[0],I[a].value[1],e),c=q(I[a].value[0],I[a].value[1],e),s=F(I[a].value[0],I[a].value[1],e);return Object(m.a)(Object(m.a)({},t),{},Object(O.a)({},a,{value:n,valid:c,className:s}))}),{});i(e),V(t),M(t)},baseNumber:j,updateBaseNumber:function(e){var t=j+e;t=Math.max(t,1),t=Math.min(t,10),o(t);var a=Object.keys(I).splice(0,1<<t).reduce((function(e,t){return Object(m.a)(Object(m.a)({},e),{},Object(O.a)({},t,I[t]))}),{});V(a),M(a,t)}}),Object(r.jsx)("div",{className:"kp-container__tab",children:Object(h.a)(Array(1<<j).keys()).map((function(t){var a="$p_{"+U[e.kpType](j,t)+"}$";return Object(r.jsx)(f,{expression:a,estimationType:s,estimationTypes:N,modificable:C===_,updateValue:function(e,a){return function(e,t,a){var n=0===t?e:I[a]?I[a].value[0]:"",c=1===t?e:I[a]?I[a].value[1]:"",s=R(n,c),i=q(n,c),r=F(n,c),l=Object(m.a)(Object(m.a)({},I),{},Object(O.a)({},a,{value:s,valid:i,className:r}));V(l),M(l)}(e,a,t)},firstValue:I[t]&&I[t].value[0]?I[t].value[0]:"",secondValue:I[t]&&I[t].value[1]?I[t].value[1]:"",className:I[t]?I[t].className:"is-dark"},t)}))}),Object(r.jsxs)("div",{className:"kp-container__validate level",children:[Object(r.jsx)("div",{className:"level-left",children:Object(r.jsx)("div",{className:"button kp-container__validate__submit "+(!J||C!==_&&C!==k?"is-grey":"is-purple"),onClick:function(){return Q()},children:"Validate"})}),Object(r.jsxs)("div",{className:"level-right",children:[Object(r.jsxs)("div",{className:"kp-container__result",children:[C===g&&Object(r.jsx)("progress",{className:"progress is-small is-primary"}),C===k&&Object(r.jsx)("p",{className:"has-text-danger",children:"Server error"}),C===y&&Object(r.jsx)("p",{className:"has-text-success",children:"Data is inconsistent!"}),C===T&&Object(r.jsx)("p",{className:"has-text-danger-dark",children:"Data is not inconsistent!"})]}),C!==_&&Object(r.jsxs)("div",{className:"kp-container__requested",children:[Object(r.jsx)("div",{className:"button is-purple kp-container__requested__state-changer",onClick:function(){return S(_),void M(I)},children:"Modify"}),Object(r.jsx)("div",{className:"button is-grey-light kp-container__requested__state-changer",onClick:function(){return S(_),V({}),void M({})},children:"Clean"})]})]})]})]})}var S={CONJUCTS:"Conjucts",DISJUNCTS:"Disjuncts",QUANTS:"Quants"};function A(){var e=Object(n.useState)(S.CONJUCTS),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(r.jsxs)("div",{className:"kp-container",children:[Object(r.jsx)("h1",{className:"kp-container__title title",children:"Inconsistency checking"}),Object(r.jsx)("div",{className:"kp-container__tab-links tabs",children:Object(r.jsx)("ul",{children:Object.values(S).map((function(e){return Object(r.jsx)("li",{className:a===e?" is-active":"",children:Object(r.jsx)("a",{href:"#",className:"panel__tab-link",onClick:function(){return c(e)},children:e})},e)}))})}),Object(r.jsx)(C,{kpType:a,kpTypes:S})]})}function E(e){return Object(r.jsx)("div",{className:"container main-container",children:Object(r.jsx)(j.a,{children:Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{path:"/",exact:!0,render:function(){return e.header.updatePage("main"),Object(r.jsx)(A,{})}}),Object(r.jsx)(o.a,{render:function(){return e.header.updatePage("unknown"),Object(r.jsx)(b,{})}})]})})})}function I(){var e={updatePage:function(){}};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{context:e}),Object(r.jsx)(E,{header:e}),Object(r.jsx)(l,{})]})}i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(I,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.29b7d5e7.chunk.js.map