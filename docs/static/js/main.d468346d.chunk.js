(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(7),r=n.n(c),o=(n(14),n(8)),s=n(1),i=n(4),u=n(2),m=n.n(u),d=(n(15),function(e){var t=e.handleReset,n=e.winner,a=m()({"symbol-x":"x"===n,"symbol-o":"o"===n});return l.a.createElement("div",{className:"modal"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h6",null,"you won!")),l.a.createElement("div",{className:m()("modal-body",a)},l.a.createElement("span",null,n),l.a.createElement("span",null,"takes the round")),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{onClick:function(){return t(!0)}},"quit"),l.a.createElement("button",{className:a,onClick:function(){return t(!1)}},"next round"))))}),E=(n(16),function(e){var t=e.selected,n=e.handleReset;return l.a.createElement("div",{className:"header"},l.a.createElement("div",null,l.a.createElement("span",null,"x"),l.a.createElement("span",null,"o")),l.a.createElement("button",{className:"turn"},l.a.createElement("span",null,t)," turn"),l.a.createElement("button",{className:"reset",onClick:n},l.a.createElement("i",{className:"fa-solid fa-arrow-rotate-right"})))}),f=(n(17),function(e){var t=e.list,n=e.winnerState,a=e.cellsSelected,c=e.handleClick,r=n.winner,o=n.pattern;return l.a.createElement("div",{className:"container"},t.map(function(e,t){return l.a.createElement("div",{key:t,className:(s=o.includes(t),m()({cell:"cell","winner-cell-o":s&&"o"===r,"winner-cell-x":s&&"x"===r})),onClick:function(){return c(t)}},l.a.createElement("span",{className:(n=a[t],m()({"symbol-x":"x"===n,"symbol-o":"o"===n}))},a[t]));var n,s}))}),b=(n(18),function(e){var t=e.counter;return l.a.createElement("div",{className:"footer"},l.a.createElement("div",null,l.a.createElement("h6",null,"x (you)"),l.a.createElement("span",null,t.cross)),l.a.createElement("div",null,l.a.createElement("h6",null,"Ties"),l.a.createElement("span",null,t.ties)),l.a.createElement("div",null,l.a.createElement("h6",null,"o (cpu)"),l.a.createElement("span",null,t.circle)))}),v={horizontal:[[0,1,2],[3,4,5],[6,7,8]],vertical:[[0,3,6],[1,4,7],[2,5,8]],diagonal:[[6,4,2],[0,4,8]]},p=new Array(9).fill(""),w={cross:0,circle:0,ties:0},h={winner:null,pattern:[]},j=function(){var e=Object(a.useState)(p),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("x"),u=Object(i.a)(r,2),m=u[0],j=u[1],O=Object(a.useState)(w),x=Object(i.a)(O,2),N=x[0],k=x[1],y=Object(a.useState)(h),S=Object(i.a)(y,2),C=S[0],g=S[1],R=C.winner,J=function(e){g(Object(s.a)(Object(s.a)({},C),{},{winner:null})),j("x"),c(p),e&&k(w)};return Object(a.useEffect)(function(){R&&function(){var e=N.cross,t=N.circle,n=N.ties;R&&k("o"===m?Object(s.a)(Object(s.a)({},N),{},{cross:e+1,ties:n+1}):Object(s.a)(Object(s.a)({},N),{},{circle:t+1,ties:n+1}))}()},[R]),l.a.createElement(l.a.Fragment,null,l.a.createElement(E,{selected:m,handleReset:J}),l.a.createElement(f,{list:p,winnerState:C,cellsSelected:n,handleClick:function(e){var t=Object(o.a)(n);""===n[e]&&("x"===m?(t[e]="x",j("o")):(t[e]="o",j("x")),function(e,t){for(var n in v)v[n].forEach(function(n){""!==e[n[0]]&&""!==e[n[1]]&&""!==e[n[2]]&&e[n[0]]===e[n[1]]&&e[n[1]]===e[n[2]]&&t({winner:e[n[0]],pattern:n})})}(t,g),c(t))}}),l.a.createElement(b,{counter:N}),R&&l.a.createElement(d,{handleReset:J,winner:R}))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.d468346d.chunk.js.map