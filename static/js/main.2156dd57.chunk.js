(this["webpackJsonpmern-calculator"]=this["webpackJsonpmern-calculator"]||[]).push([[0],{14:function(e,c,n){},15:function(e,c,n){"use strict";n.r(c);var t=n(0),l=n(1),s=n.n(l),a=n(8),r=n.n(a),i=(n(14),n(6)),j=n(2),d=n(3),o=n(5),h=n(4),b=function(e){Object(o.a)(n,e);var c=Object(h.a)(n);function n(){return Object(j.a)(this,n),c.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(t.jsx)("p",{className:"col-auto",children:Object(t.jsx)("button",{className:"button",onClick:function(){return e.props.handleClick(e.props.children)},children:this.props.children})})}}]),n}(l.Component),u=function(e){Object(o.a)(n,e);var c=Object(h.a)(n);function n(){return Object(j.a)(this,n),c.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(t.jsx)("p",{className:"col-auto",children:Object(t.jsx)("button",{className:"button",onClick:function(){return e.props.handleClear(e.props.children)},children:this.props.children})})}}]),n}(l.Component),O=function(e){Object(o.a)(n,e);var c=Object(h.a)(n);function n(){return Object(j.a)(this,n),c.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(t.jsx)("p",{className:"col-auto",children:Object(t.jsx)("button",{className:"button btn--yellow",onClick:function(){return e.props.handleSolve(e.props.children)},children:this.props.children})})}}]),n}(l.Component);var x=function(e){var c=Object(l.useState)(""),n=Object(i.a)(c,2),s=n[0],a=n[1],r=Object(l.useState)(""),j=Object(i.a)(r,2),d=j[0],o=j[1],h=Object(l.useState)(""),x=Object(i.a)(h,2),p=x[0],f=x[1],m=Object(l.useState)(""),v=Object(i.a)(m,2),C=v[0],k=v[1],N=function(e){"+"===e||"-"===e||"/"===e||"*"===e?(k(e),console.log(e)):(a(s+e),console.log(s))};function g(e){o(s),a(""),k(e)}return Object(l.useEffect)((function(){if(""!==p&&(console.log(p),""!==C)){var e={"+":function(e,c){return e+c},"-":function(e,c){return e-c},"*":function(e,c){return e*c},"/":function(e,c){return e/c}}[C](parseFloat(d),parseFloat(p));a(e),k(""),f("")}}),[p,C,d]),Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("main",{className:"main",children:Object(t.jsxs)("div",{className:"card calc-body",children:[Object(t.jsxs)("div",{className:"card-body",children:[Object(t.jsxs)("span",{className:"card-title logo",children:["re",Object(t.jsx)("span",{className:"big-A",children:"A"}),"ct"]}),Object(t.jsx)("div",{className:"screen mx-auto",children:Object(t.jsx)("div",{className:"screen__inner",children:Object(t.jsx)("input",{type:"text",readOnly:!0,className:"output",value:s,placeholder:"0"})})}),Object(t.jsxs)("div",{className:"power-btns",children:[Object(t.jsx)("div",{className:"left",children:Object(t.jsx)("div",{className:"label"})}),Object(t.jsx)("div",{className:"right",children:Object(t.jsx)("div",{className:"label"})})]})]}),Object(t.jsxs)("div",{className:"card-body buttons-grid",children:[Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)(b,{handleClick:N}),Object(t.jsx)(b,{handleClick:N,children:"7"}),Object(t.jsx)(b,{handleClick:N,children:"8"}),Object(t.jsx)(b,{handleClick:N,children:"9"}),Object(t.jsx)(b,{handleClick:g,children:"/"})]}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)(b,{handleClick:N}),Object(t.jsx)(b,{handleClick:N,children:"4"}),Object(t.jsx)(b,{handleClick:N,children:"5"}),Object(t.jsx)(b,{handleClick:N,children:"6"}),Object(t.jsx)(b,{handleClick:g,children:"*"})]}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)(b,{handleClick:N,children:"%"}),Object(t.jsx)(b,{handleClick:N,children:"3"}),Object(t.jsx)(b,{handleClick:N,children:"2"}),Object(t.jsx)(b,{handleClick:N,children:"1"}),Object(t.jsx)(b,{handleClick:g,children:"-"})]}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)(u,{handleClear:function(){a(""),o(""),f(""),k("")},children:"CE"}),Object(t.jsx)(b,{handleClick:function(e){""!==s&&(a(s+e),console.log(s))},children:"0"}),Object(t.jsx)(b,{handleClick:function(e){-1===s.indexOf(".")&&(a(s+e),console.log(s))},children:"."}),Object(t.jsx)(O,{handleSolve:function(){f(s)},children:"="}),Object(t.jsx)(b,{handleClick:g,children:"+"})]})]})]})})})};var p=function(){return Object(t.jsx)(x,{})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(c){var n=c.getCLS,t=c.getFID,l=c.getFCP,s=c.getLCP,a=c.getTTFB;n(e),t(e),l(e),s(e),a(e)}))};r.a.render(Object(t.jsx)(s.a.StrictMode,{children:Object(t.jsx)(p,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.2156dd57.chunk.js.map