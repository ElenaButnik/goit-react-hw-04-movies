(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{16:function(e,t,n){e.exports={list:"MoviesList_list__2eouX"}},21:function(e,t,n){e.exports={title:"HomePage_title__1N0SM"}},23:function(e,t,n){e.exports={link:"MoviesPage_link__2d_s5"}},28:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(18),s=n.n(a),r=n(7),o=(n(28),n(2)),j=n(9),l=n.n(j),u=n(1),b=function(){return Object(u.jsxs)("nav",{className:l.a.nav,children:[Object(u.jsx)(r.c,{exact:!0,to:"/",className:l.a.link,activeClassName:l.a.activeLink,children:"Home"}),Object(u.jsx)(r.c,{to:"/Movies",className:l.a.link,activeClassName:l.a.activeLink,children:"Movies"})]})},d=n(11),h=n(21),v=n.n(h),x=n(15),O=n.n(x),f=n(22),m="https://api.themoviedb.org/3",p="2b5d178c741f6b8e682bbf189cae36ed";function _(){return g.apply(this,arguments)}function g(){return g=Object(f.a)(O.a.mark((function e(){var t,n,c,i=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",n=i.length>1&&void 0!==i[1]?i[1]:{},e.next=4,fetch(t,n);case 4:if(!(c=e.sent).ok){e.next=11;break}return e.next=8,c.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}var k=n(16),N=n.n(k);function w(e){var t=e.movies,n=Object(o.g)().url;return Object(u.jsx)("ul",{className:N.a.list,children:t.map((function(e){return Object(u.jsx)("li",{className:N.a.listName,children:Object(u.jsx)(r.b,{to:"".concat(n,"/").concat(e.id),children:e.title})},e.id)}))})}function M(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){_("".concat(m,"/trending/movie/week?api_key=").concat(p)).then((function(e){i(e.results)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:v.a.title,children:"Trending today"}),n&&Object(u.jsx)(w,{movies:n})]})}var F=n(23),L=n.n(F);function y(){return Object(u.jsx)(r.b,{to:"/",className:L.a.link,children:"go back"})}function P(){var e=Object(o.f)().movieId,t=Object(c.useState)([]),n=Object(d.a)(t,2),i=n[0],a=n[1];return Object(c.useEffect)((function(){(function(e){return _("".concat(m,"/movie/").concat(e,"?api_key=").concat(p))})(e).then((function(e){a(e)}))}),[e]),Object(u.jsx)(u.Fragment,{children:i&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:i.title}),Object(u.jsx)("img",{src:i.poster_path,alt:i.title}),Object(u.jsx)("p",{children:i.genre_ids}),Object(u.jsx)("p",{children:i.overview}),Object(u.jsx)("p",{children:"Additional information"})]})})}function C(){return Object(u.jsx)("h1",{children:"404 Page not found"})}n(36);var S=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",children:Object(u.jsx)(M,{})}),Object(u.jsx)(o.a,{path:"/Movies/:movieId",children:Object(u.jsx)(P,{})}),Object(u.jsx)(o.a,{path:"/Movies",children:Object(u.jsx)(y,{})}),Object(u.jsx)(o.a,{children:Object(u.jsx)(C,{})})]})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(r.a,{children:Object(u.jsx)(S,{})})}),document.getElementById("root")),X()},9:function(e,t,n){e.exports={link:"Nav_link__3l_Xs",nav:"Nav_nav__2gM_0",activeLink:"Nav_activeLink__1XXVg Nav_link__3l_Xs"}}},[[37,1,2]]]);
//# sourceMappingURL=main.4bde833e.chunk.js.map