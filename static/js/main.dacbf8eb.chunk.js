(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,n,a){},14:function(e,n,a){},16:function(e,n,a){"use strict";a.r(n);var t=a(0),i=a(1),r=a(3),s=a.n(r),c=(a(13),a(14),a(4)),o=a(5),l=a(7),h=a(6),m=function(e){var n=e.name,a=e.email,i=e.id;return Object(t.jsxs)("div",{className:"tc bg-dark-blue dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(t.jsx)("img",{src:"https://robohash.org/".concat(i,"?200x200"),alt:"robots"}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h2",{children:n}),Object(t.jsx)("p",{children:a})]})]})},u=function(e){var n=e.robots;return Object(t.jsx)("div",{children:n.map((function(e,a){return Object(t.jsx)(m,{id:n[a].id,name:n[a].name,email:n[a].email},a)}))})},d=function(e){e.searchfield;var n=e.searchChange;return Object(t.jsx)("div",{className:"pa2",children:Object(t.jsx)("input",{className:"pa3 ba br4 b--blue bg-blue ",type:"search",placeholder:"search robots",onChange:n})})},b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],j=function(e){return Object(t.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"900px"},children:e.children})},f=function(e){Object(l.a)(a,e);var n=Object(h.a)(a);function a(){var e;return Object(c.a)(this,a),(e=n.call(this)).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:[],searchfield:""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({robots:b})}},{key:"render",value:function(){var e=this,n=this.state.robots.filter((function(n){return n.name.toLowerCase().includes(e.state.searchfield)}));return Object(t.jsxs)("div",{className:"tc",children:[Object(t.jsx)("h1",{className:"f1",children:"Robot Friends"}),Object(t.jsx)(d,{searchChange:this.onSearchChange}),Object(t.jsx)(j,{children:Object(t.jsx)(u,{robots:n})})]})}}]),a}(i.Component),g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(n){var a=n.getCLS,t=n.getFID,i=n.getFCP,r=n.getLCP,s=n.getTTFB;a(e),t(e),i(e),r(e),s(e)}))};a(15);s.a.render(Object(t.jsx)(f,{}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.dacbf8eb.chunk.js.map