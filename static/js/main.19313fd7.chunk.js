(this["webpackJsonpkode-camp-react-task"]=this["webpackJsonpkode-camp-react-task"]||[]).push([[0],{109:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),i=t(20),r=t.n(i),s=(t(59),t(76),t(113)),l=t(112),d=t(117),j={character1:t(77).default,character2:t(60).default,character3:t(78).default,character4:t(79).default,character5:t(80).default,character6:t(81).default,character7:t(82).default,character8:t(83).default,character9:t(84).default,character10:t(85).default,character11:t(86).default,character12:t(87).default,character13:t(88).default,character14:t(89).default,character15:t(90).default,character16:t(91).default},o={planet1:t(61).default,planet2:t(62).default,planet3:t(63).default,planet4:t(92).default,planet5:t(93).default,planet6:t(94).default,planet7:t(95).default,planet8:t(96).default,planet9:t(97).default,planet10:t(63).default,planet11:t(62).default,planet12:t(61).default},u=[{image:o.planet9,name:"Planet Alpha",pop:235,id:1},{image:o.planet8,name:"Planet Alpha",pop:235,id:2},{image:o.planet7,name:"Planet Alpha",pop:235,id:3},{image:o.planet6,name:"Planet Alpha",pop:235,id:4},{image:o.planet6,name:"Planet Alpha",pop:235,id:5},{image:o.planet5,name:"Planet Alpha",pop:235,id:6},{image:o.planet1,name:"Planet Alpha",pop:235,id:7},{image:o.planet2,name:"Planet Alpha",pop:235,id:8},{image:o.planet2,name:"Planet Alpha",pop:235,id:9},{image:o.planet4,name:"Planet Alpha",pop:235,id:10},{image:o.planet3,name:"Planet Alpha",pop:235,id:11},{image:o.planet5,name:"Planet Alpha",pop:235,id:12}],b=[{image:j.character7,name:"Brooklyn Simmons",friends:23,id:1},{image:j.character13,name:"Cameron Williamson",friends:23,id:2},{image:j.character2,name:"Leslie Alexander",friends:23,id:3},{image:j.character8,name:"Kristin Watson",friends:23,id:4},{image:j.character5,name:"Jenny Wilson",friends:23,id:5},{image:j.character12,name:"Marvin McKinney",friends:23,id:6},{image:j.character6,name:"Jerome Bell",friends:23,id:7},{image:j.character4,name:"Guy Hawkins",friends:23,id:8},{image:j.character10,name:"Robert Fox",friends:23,id:9},{image:j.character3,name:"Diego Vega",friends:23,id:10},{image:j.character1,name:"Dawn Weir",friends:23,id:11},{image:j.character9,name:"Eleanor Pena",friends:23,id:12}],p=t(98).default,m=t(1),h=function(){return Object(m.jsx)("div",{className:"loader",children:Object(m.jsx)("div",{className:"loader-div",children:Object(m.jsx)("img",{id:"loader-img",src:p,alt:""})})})},f=t(6),x=t(66),O=t(118),g=t(21),v=t(116),y=t(115),N=t(111),k=function(e){var a=e.cancel,t=Object(c.useState)(!1),n=Object(f.a)(t,2),i=n[0],r=n[1];return Object(m.jsxs)(y.a,{id:"planets-form",noValidate:!0,validated:i,onSubmit:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),r(!0)},children:[Object(m.jsxs)(y.a.Group,{className:"mb-3",children:[Object(m.jsx)(y.a.Label,{children:"Image"}),Object(m.jsx)(y.a.Control,{id:"planet-image",size:"lg",type:"url",required:!0}),Object(m.jsx)(y.a.Control.Feedback,{type:"invalid"}),Object(m.jsx)(y.a.Text,{className:"",children:"Paste the URL of a JPG or PNG of max 20 kb"})]}),Object(m.jsxs)(y.a.Group,{className:"mb-3",children:[Object(m.jsx)(y.a.Label,{children:"Name"}),Object(m.jsx)(y.a.Control,{id:"planet-name",size:"lg",type:"text",required:!0}),Object(m.jsx)(y.a.Control.Feedback,{type:"invalid"})]}),Object(m.jsxs)(y.a.Group,{className:"mb-3",children:[Object(m.jsx)(y.a.Label,{children:"Description"}),Object(m.jsx)(y.a.Control,{size:"lg",as:"textarea",rows:3,required:!0}),Object(m.jsx)(y.a.Control.Feedback,{type:"invalid",children:"Bummer! We can\u2019t create this planet right now. Probably a black hole in the way. Try later please."})]}),Object(m.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(m.jsx)(N.a,{className:"me-3",variant:"primary",type:"button",onClick:a,id:"cancel-btn",children:"Cancel"}),Object(m.jsx)(N.a,{variant:"primary",type:"submit",id:"submit-btn",children:"Create Planet"})]})]})},P=function(e){var a=e.show,t=e.close;return Object(m.jsxs)(v.a,{size:"lg",show:a,onHide:t,backdrop:"static",keyboard:!1,id:"planet-modal",children:[Object(m.jsx)(v.a.Header,{closeButton:!0}),Object(m.jsx)(v.a.Header,{children:Object(m.jsx)(v.a.Title,{className:"modal-title",children:"Planet"})}),Object(m.jsx)(v.a.Body,{children:Object(m.jsx)(k,{cancel:t})})]})},C=t(70);var w=function(e){var a=e.show,t=e.close,n=Object(c.useState)([{image:j.character16,name:"Darlene Robertson",id:1},{image:j.character4,name:"Kathryn Murphy",id:2},{image:j.character3,name:"Jenny Wilson",id:3},{image:j.character5,name:"Arlene McCoy",id:4},{image:j.character11,name:"Darell Steward",id:5},{image:j.character6,name:"Bessie Cooper",id:6}]),i=Object(f.a)(n,2),r=i[0];return i[1],console.log(r),Object(m.jsxs)(C.a,{show:a,onHide:t,placement:"end",backdrop:!1,scroll:!0,children:[Object(m.jsxs)(C.a.Header,{closeButton:!0,className:"d-flex flex-column align-items-start",children:[Object(m.jsx)(C.a.Title,{children:"Planet Alpha"}),Object(m.jsx)("p",{children:"Planet Alpha is the place to be if you like everything related to planets. I know it\u2019s a bit meta, but come see by yourself."}),Object(m.jsx)("div",{children:"Population"}),Object(m.jsx)("div",{children:"234"})]}),Object(m.jsxs)(C.a.Body,{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h5",{children:"Characters"}),Object(m.jsx)(g.b,{className:"close-btn"})]}),Object(m.jsx)("div",{className:"chars",children:r.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:e.image,alt:""}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h6",{children:e.name}),Object(m.jsx)("p",{children:"23 friends"})]})]},e.id)}))})]})]})},A=function(e){var a=e.data,t=Object(c.useState)(!1),n=Object(f.a)(t,2),i=n[0],r=n[1],s=Object(c.useState)(!1),d=Object(f.a)(s,2),j=d[0],o=d[1],u=function(){return o(!0)};return Object(m.jsxs)("div",{children:[Object(m.jsx)(l.a,{xs:1,md:4,className:"g-3",id:"planet-row",children:a.map((function(e){return Object(m.jsx)(x.a,{children:Object(m.jsxs)(O.a,{id:"planet-cards",onClick:u,children:[Object(m.jsx)(O.a.Img,{variant:"top",src:e.image}),Object(m.jsxs)(O.a.Body,{children:[Object(m.jsx)(O.a.Title,{children:e.name}),Object(m.jsxs)(O.a.Text,{children:["pop: ",e.pop]})]})]})},e.id)}))}),Object(m.jsx)(g.b,{className:"plus-circle",onClick:function(){return r(!0)}}),Object(m.jsx)(P,{show:i,close:function(){return r(!1)}}),Object(m.jsx)(w,{show:j,close:function(){return o(!1)}})]})},S=function(e){var a=Object(c.useState)(null),t=Object(f.a)(a,2),n=t[0],i=t[1],r=Object(c.useState)(!0),s=Object(f.a)(r,2),l=s[0],d=s[1];return Object(c.useEffect)((function(){setTimeout((function(){fetch(n).then((function(a){d(!1),i(e)}))}),1500)}),[]),{cards:n,isPending:l}},T=function(){var e=S(u),a=e.cards,t=e.isPending;return Object(m.jsxs)("div",{children:[t&&Object(m.jsx)(h,{}),a&&Object(m.jsx)(A,{data:u})]})},B=t(114),L=t(41),G=function(e){return Object(m.jsxs)("div",{id:"navigation",className:"d-flex justify-content-between",children:[Object(m.jsx)(d.a,{children:Object(m.jsxs)(B.a,{variant:"pills",className:"pb-3",id:"tabs",children:[Object(m.jsx)(B.a.Item,{className:"planets",children:Object(m.jsx)(B.a.Link,{as:L.b,to:"/",active:e.true,children:"PLANETS"})}),Object(m.jsx)(B.a.Item,{className:"characters",children:Object(m.jsx)(B.a.Link,{as:L.b,to:"/characters",active:e.false,children:"CHARACTERS"})})]})}),Object(m.jsxs)(y.a.Select,{id:"dropdown-basic",className:e.display,children:[Object(m.jsx)("option",{children:"Planets: All"}),Object(m.jsx)("option",{value:"1",children:"Alpha"})]})]})},H=t(9),z=function(e){var a=e.cancel,n=Object(c.useState)(!1),i=Object(f.a)(n,2),r=i[0],s=i[1];return Object(m.jsxs)(y.a,{id:"character-form",noValidate:!0,validated:r,onSubmit:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),s(!0)},children:[Object(m.jsxs)(y.a.Group,{className:"mb-3",children:[Object(m.jsx)(y.a.Label,{children:"Image"}),Object(m.jsx)(y.a.Control,{id:"planet-image",size:"lg",type:"url",required:!0}),Object(m.jsx)(y.a.Control.Feedback,{type:"invalid"}),Object(m.jsx)(y.a.Text,{className:"",children:"Paste the URL of a JPG or PNG of max 20 kb"})]}),Object(m.jsxs)(y.a.Group,{className:"mb-3",children:[Object(m.jsx)(y.a.Label,{children:"Name"}),Object(m.jsx)(y.a.Control,{id:"planet-name",size:"lg",type:"text",required:!0}),Object(m.jsx)(y.a.Control.Feedback,{type:"invalid"})]}),Object(m.jsxs)(y.a.Group,{className:"mb-3",children:[Object(m.jsx)(y.a.Label,{children:"Description"}),Object(m.jsx)(y.a.Control,{size:"lg",as:"textarea",rows:3,required:!0}),Object(m.jsx)(y.a.Control.Feedback,{type:"invalid",children:"Bummer! We can\u2019t create this planet right now. Probably a black hole in the way. Try later please."})]}),Object(m.jsxs)(y.a.Group,{className:"mb-3",id:"friend",children:[Object(m.jsx)(y.a.Label,{children:"Friends"}),Object(m.jsxs)("div",{className:"form-control d-flex justify-content-between  mb-3",type:"text",children:[Object(m.jsxs)("div",{className:"d-flex friend  align-items-center gap-2",children:[Object(m.jsx)("img",{className:" ms-1 ",src:t(60).default,alt:"profile pic"}),Object(m.jsx)("p",{className:"mb-0  jane",children:"Jane Cooper"}),Object(m.jsx)("p",{className:"mb-1  ms-1 close",children:Object(m.jsx)(g.c,{})})]}),Object(m.jsx)("p",{className:"mb-0 down",children:Object(m.jsx)(g.a,{})})]})]}),Object(m.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(m.jsx)(N.a,{className:"me-3",variant:"primary",type:"button",onClick:a,id:"cancel-btn",children:"Cancel"}),Object(m.jsx)(N.a,{variant:"primary",type:"submit",id:"submit-btn",children:"Create Character"})]})]})},D=function(e){var a=e.show,t=e.close;return Object(m.jsxs)(v.a,{size:"lg",show:a,onHide:t,backdrop:"static",keyboard:!1,id:"planet-modal",children:[Object(m.jsx)(v.a.Header,{closeButton:!0}),Object(m.jsx)(v.a.Header,{children:Object(m.jsx)(v.a.Title,{className:"modal-title",children:"Character"})}),Object(m.jsx)(v.a.Body,{children:Object(m.jsx)(z,{cancel:t})})]})},F=function(){var e=Object(c.useState)(!1),a=Object(f.a)(e,2),t=a[0],n=a[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)(l.a,{xs:1,md:4,className:"g-3",children:b.map((function(e){return Object(m.jsx)(x.a,{children:Object(m.jsxs)(O.a,{id:"character-cards",className:"h-100",children:[Object(m.jsx)(O.a.Img,{variant:"top",src:e.image}),Object(m.jsxs)(O.a.Body,{children:[Object(m.jsx)(O.a.Title,{children:e.name}),Object(m.jsxs)(O.a.Text,{children:[e.friends," friends"]})]})]})},e.id)}))}),Object(m.jsx)(g.b,{className:"plus-circle",onClick:function(){return n(!0)}}),Object(m.jsx)(D,{show:t,close:function(){return n(!1)}})]})},I=function(){var e=S(u).cards;return Object(m.jsx)(L.a,{children:Object(m.jsx)("div",{class:"home",children:Object(m.jsxs)(H.c,{children:[Object(m.jsxs)(H.a,{exact:!0,path:"/",children:[e&&Object(m.jsx)(G,{true:!0,false:!1,display:"d-none"}),Object(m.jsx)(T,{})]}),Object(m.jsxs)(H.a,{path:"/characters",children:[e&&Object(m.jsx)(G,{true:!1,false:!0,display:"d-block"}),Object(m.jsx)(F,{})]})]})})})},J=function(){return Object(m.jsx)(s.a,{className:"p-5",children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(d.a,{expand:"lg",variant:"light",className:"flex-column align-items-start ",children:Object(m.jsx)(d.a.Brand,{href:"#",className:"pb-1",children:"Spacious"})}),Object(m.jsx)(I,{})]})})};var W=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(J,{})})};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(W,{})}),document.getElementById("root"))},59:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-2.6859fefd.png"},61:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-1.384a5457.svg"},62:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-2.83ed008c.svg"},63:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-3.1e7e89f2.svg"},77:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-1.b8cf9c50.png"},78:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-3.a7f4a59a.png"},79:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-4.1fd020f5.png"},80:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-5.2316ee86.png"},81:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-6.839b5ded.png"},82:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-7.fadfa678.png"},83:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-8.341f1453.png"},84:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-9.d1414f7c.png"},85:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-10.f6fdbe59.png"},86:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-11.436dd33b.png"},87:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-12.93868536.png"},88:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-13.323d7c56.png"},89:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-14.e769e338.png"},90:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-15.6290ce78.png"},91:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/character-16.68426aac.png"},92:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-4.dcf17b9a.svg"},93:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-5.92952d74.svg"},94:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-6.66e9910c.svg"},95:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-7.2f74e7f8.svg"},96:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-8.48c0a610.svg"},97:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-9.c5b1f749.svg"},98:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/planet-loader.7e184522.svg"}},[[109,1,2]]]);
//# sourceMappingURL=main.19313fd7.chunk.js.map