webpackJsonp([10],{ELWf:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a=n("Dd8w"),o=n.n(a),s=n("p+dL"),i="/auth/register",u="/auth/login",c="/auth/logout",l="/auth",d=function(e){var t=e.username,n=e.password;return Object(s.a)(i,"POST",{username:t,password:n})},f=function(e){var t=e.username,n=e.password;return Object(s.a)(u,"POST",{username:t,password:n})},h=function(){return localStorage.removeItem("token"),Object(s.a)(c)},p=function(){return Object(s.a)(l)},m=n("NYxO"),g={data:function(){return{}},computed:o()({},Object(m.c)(["isLogin","user"])),created:function(){this.checkLogin()},methods:o()({},Object(m.b)(["checkLogin","logout"]),{onLogout:function(){this.logout()}})},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{class:{login:e.isLogin,"no-login":!e.isLogin}},[e.isLogin?e._e():[n("h1",[e._v("Let's share")]),e._v(" "),n("p",[e._v("精品博客汇聚")]),e._v(" "),n("div",{staticClass:"btns"},[n("router-link",{attrs:{to:"/login"}},[n("el-button",[e._v("立即登录")])],1),e._v(" "),n("router-link",{attrs:{to:"/register"}},[n("el-button",[e._v("注册账号")])],1)],1)],e._v(" "),e.isLogin?[n("h1",[n("router-link",{attrs:{to:"/"}},[e._v("Let's share")])],1),e._v(" "),n("router-link",{attrs:{to:"/create"}},[n("i",{staticClass:"edit el-icon-plus"})]),e._v(" "),n("div",{staticClass:"user"},[n("img",{staticClass:"avatar",attrs:{src:e.user.avatar,alt:e.user.username,title:e.user.username}}),e._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/my"}},[e._v("我的")])],1),e._v(" "),n("li",[n("a",{attrs:{href:"#"},on:{click:e.onLogout}},[e._v("注销")])])])])]:e._e()],2)},staticRenderFns:[]};var L={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("footer",[t("p",[this._v("©️ 星子 2022")])])}]};var b={name:"App",components:{Header:n("VU/8")(g,v,!1,function(e){n("NN43")},null,null).exports,Footer:n("VU/8")(null,L,!1,function(e){n("ELWf")},"data-v-1920c086",null).exports}},w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{id:"header"}}),this._v(" "),t("main",{attrs:{id:"main"}},[t("router-view")],1),this._v(" "),t("Footer",{attrs:{id:"footer"}})],1)},staticRenderFns:[]};var _=n("VU/8")(b,w,!1,function(e){n("mwgR")},null,null).exports,k=n("/ocq"),x=n("Xxa5"),O=n.n(x),P=n("exGp"),y=n.n(P),q={state:{user:null,isLogin:!1},getters:{user:function(e){return e.user},isLogin:function(e){return e.isLogin}},mutations:{setUser:function(e,t){e.user=t.user},setLogin:function(e,t){e.isLogin=t.isLogin}},actions:{login:function(e,t){var n=e.commit,r=t.username,a=t.password;return f({username:r,password:a}).then(function(e){n("setUser",{user:e.data}),n("setLogin",{isLogin:!0})})},register:function(e,t){var n=this,r=e.commit,a=t.username,o=t.password;return y()(O.a.mark(function e(){var t;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({username:a,password:o});case 2:return t=e.sent,r("setUser",{user:t.data}),r("setLogin",{isLogin:!0}),e.abrupt("return",t.data);case 6:case"end":return e.stop()}},e,n)}))()},logout:function(e){var t=this,n=e.commit;return y()(O.a.mark(function e(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:n("setUser",{user:null}),n("setLogin",{isLogin:!1});case 4:case"end":return e.stop()}},e,t)}))()},checkLogin:function(e){var t=this,n=e.commit,r=e.state;return y()(O.a.mark(function e(){var a;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.isLogin){e.next=2;break}return e.abrupt("return",!0);case 2:return e.next=4,p();case 4:if(a=e.sent,n("setLogin",{isLogin:a.isLogin}),a.isLogin){e.next=8;break}return e.abrupt("return",!1);case 8:return n("setUser",{user:a.data}),e.abrupt("return",!0);case 10:case"end":return e.stop()}},e,t)}))()}}};r.default.use(m.a);var E=new m.a.Store({modules:{auth:q,blog:{state:{},getters:{},mutations:{},actions:{}}}});r.default.use(k.a);var R=new k.a({routes:[{path:"/",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"epW7"))}},{path:"/login",component:function(){return n.e(8).then(n.bind(null,"OpX7"))}},{path:"/detail/:blogId",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"YE8u"))}},{path:"/edit/:blogId",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"R6sS"))},meta:{requiresAuth:!0}},{path:"/create",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"/oBs"))},meta:{requiresAuth:!0}},{path:"/user/:userId",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"bywM"))}},{path:"/my",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"vv7P"))},meta:{requiresAuth:!0}},{path:"/register",component:function(){return n.e(3).then(n.bind(null,"YDhy"))}}]});R.beforeEach(function(e,t,n){e.matched.some(function(e){return e.meta.requiresAuth})?E.dispatch("checkLogin").then(function(t){t?n():n({path:"/login",query:{redirect:e.fullPath}})}):n()});var U=R,j=n("zL8q"),A=n.n(j),M=(n("tvR6"),n("pFYg")),S=n.n(M);function F(e){var t=("object"===(void 0===e?"undefined":S()(e))?e:new Date(e)).getTime(),n=Date.now()-t,r="";switch(!0){case n<6e4:r="刚刚";break;case n<36e5:r=Math.floor(n/6e4)+"分钟前";break;case n<864e5:r=Math.floor(n/36e5)+"小时前";break;default:r=Math.floor(n/864e5)+"天前"}return r}var N={install:function(e,t){e.prototype.friendlyDate=F}};r.default.use(A.a),r.default.use(N),r.default.config.productionTip=!1,new r.default({el:"#app",router:U,store:E,components:{App:_},template:"<App/>"})},NN43:function(e,t){},mwgR:function(e,t){},"p+dL":function(e,t,n){"use strict";t.a=u;var r=n("//Fk"),a=n.n(r),o=n("mtWM"),s=n.n(o),i=n("zL8q");n.n(i);function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new a.a(function(r,a){var o={url:e,method:t};"get"===t.toLowerCase()?o.params=n:o.data=n,localStorage.token&&(s.a.defaults.headers.common.Authorization=localStorage.token),s()(o).then(function(e){console.log(e.data),"ok"===e.data.status?(e.data.token&&(localStorage.token=e.data.token),r(e.data)):(i.Message.error(e.data.msg),a(e.data))}).catch(function(e){i.Message.error("网络异常"),a({msg:"网络异常"})})})}s.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",s.a.defaults.baseURL="//blog-server.hunger-valley.com",window.request=u},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.63134b89013d3662a509.js.map