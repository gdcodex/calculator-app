(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{13:function(e,t,a){e.exports=a(20)},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(10),r=a.n(c),i=a(8),o=a(22);a(18);var u=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=function(e){var t=e.target.value;c((function(e){return e+t}))},u=Object(n.useState)(!0),s=Object(i.a)(u,2),m=s[0],g=s[1],E=function(){g(!m)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:!0===m?"calculator-layout":"night-layout"},l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,"Calculator")," ",l.a.createElement("img",{className:"night",style:{display:!0===m?"none":"inline-block"},onClick:E,src:"https://www.flaticon.com/svg/static/icons/svg/1497/1497625.svg",alt:""})," ",l.a.createElement("img",{src:"/images/day.svg",style:{display:!1===m?"none":"inline-block"},onClick:E,alt:"",className:"day"})),l.a.createElement("div",{id:"show",style:{backgroundColor:!1===m?"#464141":"#A2BFBD",color:!0===m?"white":"rgb(245, 132, 2)"}},a),l.a.createElement("div",{className:"template"},l.a.createElement("div",{className:"num"},[1,2,3,4,5,6,7,8,9,0,".","%"].map((function(e){return l.a.createElement("button",{key:e,className:"numbers",value:e,onClick:r}," ",e)}))),l.a.createElement("div",{className:"side-opera"},["+","-","*","/"].map((function(e){return l.a.createElement("button",{key:e,value:e,onClick:r},e)})),l.a.createElement("button",{onClick:function(){return c(a.substr(0,a.length-1))}},"  Clear "),l.a.createElement("button",{onClick:function(){return c("")},value:""},"AC"),l.a.createElement("button",{onClick:function(e){try{c(String(Object(o.a)(a)).length>3&&String(Object(o.a)(a)).includes(".")?String(Object(o.a)(a).toFixed(4)):String(Object(o.a)(a)))}catch(t){console.log(e)}},value:"="},"=")))))},s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"landing"},l.a.createElement("img",{src:"/images/calculator.png",alt:"CALC"}),l.a.createElement("h1",null,"CALCULATOR")),l.a.createElement(u,null))};r.a.render(l.a.createElement(s,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.2af9a0f1.chunk.js.map