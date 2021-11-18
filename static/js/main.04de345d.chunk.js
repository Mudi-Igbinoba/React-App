(this["webpackJsonpkode-camp-react-task"]=this["webpackJsonpkode-camp-react-task"]||[]).push([[0],{108:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),i=t(20),r=t.n(i),s=(t(58),{character1:t(75).default,character2:t(59).default,character3:t(76).default,character4:t(77).default,character5:t(78).default,character6:t(79).default,character7:t(80).default,character8:t(81).default,character9:t(82).default,character10:t(83).default,character11:t(84).default,character12:t(85).default,character13:t(86).default,character14:t(87).default,character15:t(88).default,character16:t(89).default}),l={planet1:t(60).default,planet2:t(61).default,planet3:t(62).default,planet4:t(90).default,planet5:t(91).default,planet6:t(92).default,planet7:t(93).default,planet8:t(94).default,planet9:t(95).default,planet10:t(62).default,planet11:t(61).default,planet12:t(60).default},d=[{image:l.planet9,name:"Planet Alpha",pop:235,id:1},{image:l.planet8,name:"Planet Alpha",pop:235,id:2},{image:l.planet7,name:"Planet Alpha",pop:235,id:3},{image:l.planet6,name:"Planet Alpha",pop:235,id:4},{image:l.planet6,name:"Planet Alpha",pop:235,id:5},{image:l.planet5,name:"Planet Alpha",pop:235,id:6},{image:l.planet1,name:"Planet Alpha",pop:235,id:7},{image:l.planet2,name:"Planet Alpha",pop:235,id:8},{image:l.planet2,name:"Planet Alpha",pop:235,id:9},{image:l.planet4,name:"Planet Alpha",pop:235,id:10},{image:l.planet3,name:"Planet Alpha",pop:235,id:11},{image:l.planet5,name:"Planet Alpha",pop:235,id:12}],j=[{image:s.character7,name:"Brooklyn Simmons",friends:23,id:1},{image:s.character13,name:"Cameron Williamson",friends:23,id:2},{image:s.character2,name:"Leslie Alexander",friends:23,id:3},{image:s.character8,name:"Kristin Watson",friends:23,id:4},{image:s.character5,name:"Jenny Wilson",friends:23,id:5},{image:s.character12,name:"Marvin McKinney",friends:23,id:6},{image:s.character6,name:"Jerome Bell",friends:23,id:7},{image:s.character4,name:"Guy Hawkins",friends:23,id:8},{image:s.character10,name:"Robert Fox",friends:23,id:9},{image:s.character3,name:"Diego Vega",friends:23,id:10},{image:s.character1,name:"Dawn Weir",friends:23,id:11},{image:s.character9,name:"Eleanor Pena",friends:23,id:12}],o=t(96).default,u=t(1),p=function(){return Object(u.jsx)("div",{className:"loader",children:Object(u.jsx)("div",{className:"loader-div",children:Object(u.jsx)("img",{id:"loader-img",src:o,alt:""})})})},b=t(6),m=t(111),h=t(65),f=t(117),x=t(30),O=t(116),g=t(114),v=t(110),y=function(e){var a=e.cancel,t=Object(c.useState)(!1),n=Object(b.a)(t,2),i=n[0],r=n[1];return Object(u.jsxs)(g.a,{id:"planets-form",noValidate:!0,validated:i,onSubmit:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),r(!0)},children:[Object(u.jsxs)(g.a.Group,{className:"mb-3",children:[Object(u.jsx)(g.a.Label,{children:"Image"}),Object(u.jsx)(g.a.Control,{id:"planet-image",size:"lg",type:"url",required:!0}),Object(u.jsx)(g.a.Control.Feedback,{type:"invalid"}),Object(u.jsx)(g.a.Text,{className:"",children:"Paste the URL of a JPG or PNG of max 20 kb"})]}),Object(u.jsxs)(g.a.Group,{className:"mb-3",children:[Object(u.jsx)(g.a.Label,{children:"Name"}),Object(u.jsx)(g.a.Control,{id:"planet-name",size:"lg",type:"text",required:!0}),Object(u.jsx)(g.a.Control.Feedback,{type:"invalid"})]}),Object(u.jsxs)(g.a.Group,{className:"mb-3",children:[Object(u.jsx)(g.a.Label,{children:"Description"}),Object(u.jsx)(g.a.Control,{size:"lg",as:"textarea",rows:3,required:!0}),Object(u.jsx)(g.a.Control.Feedback,{type:"invalid",children:"Bummer! We can\u2019t create this planet right now. Probably a black hole in the way. Try later please."})]}),Object(u.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(u.jsx)(v.a,{className:"me-3",variant:"primary",type:"button",onClick:a,id:"cancel-btn",children:"Cancel"}),Object(u.jsx)(v.a,{variant:"primary",type:"submit",id:"submit-btn",children:"Create Planet"})]})]})},N=function(e){var a=e.show,t=e.close;return Object(u.jsxs)(O.a,{size:"lg",show:a,onHide:t,backdrop:"static",keyboard:!1,id:"planet-modal",children:[Object(u.jsx)(O.a.Header,{closeButton:!0}),Object(u.jsx)(O.a.Header,{children:Object(u.jsx)(O.a.Title,{className:"modal-title",children:"Planet"})}),Object(u.jsx)(O.a.Body,{children:Object(u.jsx)(y,{cancel:t})})]})},k=function(e){var a=e.data,t=Object(c.useState)(!1),n=Object(b.a)(t,2),i=n[0],r=n[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(m.a,{xs:1,md:4,className:"g-3",id:"planet-row",children:a.map((function(e){return Object(u.jsx)(h.a,{children:Object(u.jsxs)(f.a,{id:"planet-cards",children:[Object(u.jsx)(f.a.Img,{variant:"top",src:e.image}),Object(u.jsxs)(f.a.Body,{children:[Object(u.jsx)(f.a.Title,{children:e.name}),Object(u.jsxs)(f.a.Text,{children:["pop: ",e.pop]})]})]})},e.id)}))}),Object(u.jsx)(x.b,{className:"plus-circle",onClick:function(){return r(!0)}}),Object(u.jsx)(N,{show:i,close:function(){return r(!1)}})]})},P=function(e){var a=Object(c.useState)(null),t=Object(b.a)(a,2),n=t[0],i=t[1],r=Object(c.useState)(!0),s=Object(b.a)(r,2),l=s[0],d=s[1];return Object(c.useEffect)((function(){setTimeout((function(){fetch(n).then((function(a){d(!1),i(e)}))}),1500)}),[]),{cards:n,isPending:l}},C=function(){var e=P(d),a=e.cards,t=e.isPending;return Object(u.jsxs)("div",{children:[t&&Object(u.jsx)(p,{}),a&&Object(u.jsx)(k,{data:d})]})},w=t(115),A=t(113),T=function(e){return Object(u.jsxs)("div",{id:"navigation",className:"d-flex justify-content-between",children:[Object(u.jsx)(w.a,{children:Object(u.jsxs)(A.a,{variant:"pills",className:"pb-3",id:"tabs",children:[Object(u.jsx)(A.a.Item,{className:"planets",children:Object(u.jsx)(A.a.Link,{href:"/",active:e.true,children:"PLANETS"})}),Object(u.jsx)(A.a.Item,{className:"characters",children:Object(u.jsx)(A.a.Link,{href:"/characters",active:e.false,children:"CHARACTERS"})})]})}),Object(u.jsxs)(g.a.Select,{id:"dropdown-basic",className:e.display,children:[Object(u.jsx)("option",{children:"Planets: All"}),Object(u.jsx)("option",{value:"1",children:"Alpha"})]})]})},S=t(69),L=t(9),B=function(e){var a=e.cancel,n=Object(c.useState)(!1),i=Object(b.a)(n,2),r=i[0],s=i[1];return Object(u.jsxs)(g.a,{id:"character-form",noValidate:!0,validated:r,onSubmit:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),s(!0)},children:[Object(u.jsxs)(g.a.Group,{className:"mb-3",children:[Object(u.jsx)(g.a.Label,{children:"Image"}),Object(u.jsx)(g.a.Control,{id:"planet-image",size:"lg",type:"url",required:!0}),Object(u.jsx)(g.a.Control.Feedback,{type:"invalid"}),Object(u.jsx)(g.a.Text,{className:"",children:"Paste the URL of a JPG or PNG of max 20 kb"})]}),Object(u.jsxs)(g.a.Group,{className:"mb-3",children:[Object(u.jsx)(g.a.Label,{children:"Name"}),Object(u.jsx)(g.a.Control,{id:"planet-name",size:"lg",type:"text",required:!0}),Object(u.jsx)(g.a.Control.Feedback,{type:"invalid"})]}),Object(u.jsxs)(g.a.Group,{className:"mb-3",children:[Object(u.jsx)(g.a.Label,{children:"Description"}),Object(u.jsx)(g.a.Control,{size:"lg",as:"textarea",rows:3,required:!0}),Object(u.jsx)(g.a.Control.Feedback,{type:"invalid",children:"Bummer! We can\u2019t create this planet right now. Probably a black hole in the way. Try later please."})]}),Object(u.jsxs)(g.a.Group,{className:"mb-3",id:"friend",children:[Object(u.jsx)(g.a.Label,{children:"Friends"}),Object(u.jsxs)("div",{className:"form-control d-flex justify-content-between  mb-3",type:"text",children:[Object(u.jsxs)("div",{className:"d-flex friend  align-items-center gap-2",children:[Object(u.jsx)("img",{className:" ms-1 ",src:t(59).default,alt:"profile pic"}),Object(u.jsx)("p",{className:"mb-0  jane",children:"Jane Cooper"}),Object(u.jsx)("p",{className:"mb-1  ms-1 close",children:Object(u.jsx)(x.c,{})})]}),Object(u.jsx)("p",{className:"mb-0 down",children:Object(u.jsx)(x.a,{})})]})]}),Object(u.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(u.jsx)(v.a,{className:"me-3",variant:"primary",type:"button",onClick:a,id:"cancel-btn",children:"Cancel"}),Object(u.jsx)(v.a,{variant:"primary",type:"submit",id:"submit-btn",children:"Create Character"})]})]})},G=function(e){var a=e.show,t=e.close;return Object(u.jsxs)(O.a,{size:"lg",show:a,onHide:t,backdrop:"static",keyboard:!1,id:"planet-modal",children:[Object(u.jsx)(O.a.Header,{closeButton:!0}),Object(u.jsx)(O.a.Header,{children:Object(u.jsx)(O.a.Title,{className:"modal-title",children:"Character"})}),Object(u.jsx)(O.a.Body,{children:Object(u.jsx)(B,{cancel:t})})]})},z=function(){var e=Object(c.useState)(!1),a=Object(b.a)(e,2),t=a[0],n=a[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(m.a,{xs:1,md:4,className:"g-3",children:j.map((function(e){return Object(u.jsx)(h.a,{children:Object(u.jsxs)(f.a,{id:"character-cards",className:"h-100",children:[Object(u.jsx)(f.a.Img,{variant:"top",src:e.image}),Object(u.jsxs)(f.a.Body,{children:[Object(u.jsx)(f.a.Title,{children:e.name}),Object(u.jsxs)(f.a.Text,{children:[e.friends," friends"]})]})]})},e.id)}))}),Object(u.jsx)(x.b,{className:"plus-circle",onClick:function(){return n(!0)}}),Object(u.jsx)(G,{show:t,close:function(){return n(!1)}})]})},F=t(112);t(102);var H=function(){var e=P(d).cards;return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(F.a,{className:"p-5",children:Object(u.jsxs)(m.a,{children:[Object(u.jsx)(w.a,{expand:"lg",variant:"light",className:"flex-column align-items-start ",children:Object(u.jsx)(w.a.Brand,{href:"#",className:"pb-1",children:"Spacious"})}),Object(u.jsx)(S.a,{children:Object(u.jsx)("div",{class:"home",children:Object(u.jsxs)(L.c,{children:[Object(u.jsxs)(L.a,{exact:!0,path:"/",children:[e&&Object(u.jsx)(T,{true:!0,false:!1,display:"d-none"}),Object(u.jsx)(C,{})]}),Object(u.jsxs)(L.a,{path:"/characters",children:[e&&Object(u.jsx)(T,{true:!1,false:!0,display:"d-block"}),Object(u.jsx)(z,{})]})]})})})]})})})};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(H,{})}),document.getElementById("root"))},58:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-2.6859fefd.png"},60:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-1.384a5457.svg"},61:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-2.83ed008c.svg"},62:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-3.1e7e89f2.svg"},75:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-1.b8cf9c50.png"},76:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-3.a7f4a59a.png"},77:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-4.1fd020f5.png"},78:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-5.2316ee86.png"},79:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-6.839b5ded.png"},80:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-7.fadfa678.png"},81:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-8.341f1453.png"},82:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-9.d1414f7c.png"},83:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-10.f6fdbe59.png"},84:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-11.436dd33b.png"},85:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-12.93868536.png"},86:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-13.323d7c56.png"},87:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-14.e769e338.png"},88:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-15.6290ce78.png"},89:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-16.68426aac.png"},90:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-4.dcf17b9a.svg"},91:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-5.92952d74.svg"},92:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-6.66e9910c.svg"},93:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-7.2f74e7f8.svg"},94:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-8.48c0a610.svg"},95:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-9.c5b1f749.svg"},96:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-loader.7e184522.svg"}},[[108,1,2]]]);
//# sourceMappingURL=main.04de345d.chunk.js.map