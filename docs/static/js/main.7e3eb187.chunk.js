(this["webpackJsonpmy-city-weather"]=this["webpackJsonpmy-city-weather"]||[]).push([[0],{47:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n(0),i=n.n(a),c=n(33),o=n.n(c),s=(n(47),n(11)),d=n(10),l=n(17),h=n(40);function u(){var t=Object(s.a)(["\n  border-radius: 4px;\n  background: #256ce1;\n  padding: 10px 22px;\n  color: #fff;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  /* Second Nav */\n  margin-left: 24px;\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #fff;\n    color: #010606;\n  }\n"]);return u=function(){return t},t}function p(){var t=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n  /* Third Nav */\n  justify-content: flex-end;\n  width: 100vw;\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return p=function(){return t},t}function b(){var t=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  // margin-right: -24px;\n\n  /* Second Nav */\n  // margin-right: 24px;\n\n  /* Third Nav */\n  width: 100vw;\n  white-space: nowrap;\n\n  @media screen and (max-width: 720px) {\n    display: none;\n  }\n"]);return b=function(){return t},t}function j(){var t=Object(s.a)(["\n  display: none;\n  color: #fff;\n  @media screen and (max-width: 720px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]);return j=function(){return t},t}function f(){var t=Object(s.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  white-space: nowrap;\n\n  &.active {\n    color: #15cdfc;\n  }\n"]);return f=function(){return t},t}function x(){var t=Object(s.a)(["\n  background-color: #000;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n\n  &:hover {\n    color: #15cdfc;\n  }\n"]);return x=function(){return t},t}function m(){var t=Object(s.a)(["\n  background-color: #000;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  border-radius: 50%;\n\n  &:hover {\n    background-color: #ff0088;\n    color: #441111;\n  }\n"]);return m=function(){return t},t}function g(){var t=Object(s.a)(["\n  background: #000;\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem calc((100vw - 1000px) / 2);\n  z-index: 10;\n\n  /* Third Nav */\n  // justify-content: flex-start;\n"]);return g=function(){return t},t}var w=d.a.nav(g()),O=d.a.a(m()),y=d.a.a(x()),v=Object(d.a)(l.b)(f()),_=(Object(d.a)(h.a)(j()),d.a.div(b())),k=(d.a.nav(p()),Object(d.a)(l.b)(u()),function(){return Object(r.jsxs)(w,{children:[Object(r.jsx)(O,{href:"https://github.com/legendof17",className:"Logo",children:Object(r.jsx)("h1",{children:"LO17"})}),Object(r.jsx)(v,{to:"/",activeStyle:!0,children:Object(r.jsx)("h3",{children:"MY CITY WEATHER"})}),Object(r.jsx)(_,{children:Object(r.jsx)(v,{to:"/weather",activeStyle:!0,children:"Weather?"})}),Object(r.jsx)(y,{href:"https://github.com/legendof17/my-city-weather",children:Object(r.jsx)("h3",{children:"GitHub"})})]})}),C=n(3),T=n(18),W=function(){return Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"90vh"},children:Object(r.jsx)("h1",{style:{textAlign:"center"},children:Object(r.jsx)(T.a,{loop:1/0,wrapper:"b",steps:["Hello World.",100,"Hello World..",100,"Hello World..!",100,"Hello World..! \ud83c\udf83",250,"Rotate your phone \ud83d\udd04",300,'To see "magic Weather? button" \ud83d\udd77\ufe0f',600]})})})},H=n(2),M=n.n(H),S=n(5),I=n(37),N=n(38),A=n(41),F=n(39),L=n(12),E=n.n(L);function P(){return z.apply(this,arguments)}function z(){return(z=Object(S.a)(M.a.mark((function t(){var e;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E()("https://api.ipify.org/?format=json");case 2:return e=t.sent,t.abrupt("return",e.data.ip);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function B(){return D.apply(this,arguments)}function D(){return(D=Object(S.a)(M.a.mark((function t(){var e,n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P();case 2:return e=t.sent,t.next=5,E()("https://freegeoip.app/json/"+e);case 5:return n=t.sent,t.abrupt("return",n.data.city);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function J(){return R.apply(this,arguments)}function R(){return(R=Object(S.a)(M.a.mark((function t(){var e,n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B();case 2:return e=t.sent,t.next=5,E()("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query="+e);case 5:return n=t.sent,t.abrupt("return",n.data[0].woeid);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Y(){return q.apply(this,arguments)}function q(){return(q=Object(S.a)(M.a.mark((function t(){var e,n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J();case 2:return e=t.sent,t.next=5,E()("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/"+e+"/");case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var G=function(t){Object(A.a)(n,t);var e=Object(F.a)(n);function n(){var t;Object(I.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={loading:!0,city:null,weather:null,weather_abbr:null,image:null,humidity:null,predictability:null,min_temp:null,max_temp:null},t.loadinganim={a:"loading.\\",b:"loading.|",c:"loading./",d:"loading.-"},t}return Object(N.a)(n,[{key:"componentDidMount",value:function(){var t=Object(S.a)(M.a.mark((function t(){var e;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y();case 2:e=t.sent,this.setState({city:e.data.title,weather:e.data.consolidated_weather[0].weather_state_name,weather_abbr:e.data.consolidated_weather[0].weather_state_abbr,image:"https://www.metaweather.com/static/img/weather/"+e.data.consolidated_weather[0].weather_state_abbr+".svg",humidity:e.data.consolidated_weather[0].humidity,predictability:e.data.consolidated_weather[0].predictability,min_temp:e.data.consolidated_weather[0].min_temp,max_temp:e.data.consolidated_weather[0].max_temp,loading:!1});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(r.jsx)("div",{children:this.state.loading||!this.state.weather?Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:Object(r.jsx)(T.a,{loop:1/0,wrapper:"b",steps:[this.loadinganim.a,50,this.loadinganim.b,50,this.loadinganim.c,50,this.loadinganim.d,50]})})}):Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{style:{"margin-top":"10px","margin-bottom":"10px"},children:[Object(r.jsx)("img",{src:this.state.image,alt:"Weather Image",width:"320"}),Object(r.jsx)("br",{})]}),Object(r.jsx)("div",{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"City"})," : ",this.state.city]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"Weather"})," : ",this.state.weather]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"Humidity"})," : ",this.state.humidity,"\ud83d\udca7"]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"Prediction"})," : ",this.state.predictability,"%"]}),Object(r.jsx)("hr",{}),Object(r.jsx)("b",{children:"Temperature:"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"Min"})," : ",Math.round(10*this.state.min_temp)/10,"\xb0C  |  ",Object(r.jsx)("b",{children:"Max"})," : ",Math.round(10*this.state.max_temp)/10,"\xb0C"]})]})})]})})}}]),n}(a.Component),K=function(){return Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"90vh",textAlign:"center",width:"100%"},children:Object(r.jsx)(G,{})})};var Q=function(){return Object(r.jsxs)(l.a,{basename:"/my-city-weather",children:[Object(r.jsx)(k,{}),Object(r.jsxs)(C.d,{children:[Object(r.jsx)(C.b,{path:"/",exact:!0,component:W}),Object(r.jsx)(C.b,{path:"/weather",exact:!0,component:K}),Object(r.jsx)(C.a,{path:"*",to:"/"})]})]})},U=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),r(t),a(t),i(t),c(t)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(Q,{})}),document.getElementById("root")),U()}},[[70,1,2]]]);
//# sourceMappingURL=main.7e3eb187.chunk.js.map