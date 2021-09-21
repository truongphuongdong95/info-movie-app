(this["webpackJsonpinfo-movie-app"]=this["webpackJsonpinfo-movie-app"]||[]).push([[0],{22:function(e,t){e.exports={APIKey:"9022117f"}},38:function(e,t,c){},39:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(15),i=c.n(n),r=(c(38),c(39),c(9)),o=c(1);var l=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("footer",{className:"mastfoot my-auto bg-dark",children:Object(o.jsx)("div",{className:"inner",children:Object(o.jsxs)("p",{className:"text-light",children:["InfoMovieApp Dev for ",Object(o.jsx)(r.b,{to:"",id:"imdb-logo",children:"DongTruong"}),"."]})})})})};var j=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(r.b,{className:"navbar-brand",to:"/",children:"InfoMovieApp"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(o.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("i",{className:"fab fa-imdb fa-5x",id:"imdb-logo"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("i",{className:"fab fa-react fa-5x",id:"react-logo"})})]})})]})})})},d=c(10),b="SEARCH_MOVIE",m="FETCH_MOVIES",h="FETCH_MOVIE",x="LOADING",O=c(21),u=c.n(O),v=c(22),p=function(){return{type:x}};var g=Object(d.b)((function(e){return{text:e.movies.text}}),{searchMovie:function(e){return function(t){t({type:b,payload:e})}},fetchMovies:function(e){return function(t){u.a.get("http://www.omdbapi.com/?apikey=".concat(v.APIKey,"&s=").concat(e)).then((function(e){return t({type:m,payload:e.data})})).catch((function(e){return console.log(e)}))}},setLoading:p})((function(e){var t=e.text,c=e.searchMovie,a=e.fetchMovies,s=e.setLoading;return Object(o.jsx)("div",{className:"jumbotron jumbotron-fluid mt-5 text-center",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("h1",{className:"display-4 mb-3",children:[Object(o.jsx)("i",{className:"fa fa-search"})," Search for a movie ,TV series .."]}),Object(o.jsxs)("form",{id:"searchForm",onSubmit:function(e){e.preventDefault(),a(t),s()},children:[Object(o.jsx)("input",{type:"text",className:"form-control",name:"searchText",placeholder:"Search Movies, TV Series ...",onChange:function(e){c(e.target.value)}}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary btn-bg mt-3",children:"Search"})]})]})})})),f=c.p+"static/media/spinner.0d8837f6.gif";var N=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:f,style:{width:"200px",margin:"auto",display:"block"},alt:"loading..."})})};var y=function(e){var t=e.movie;return Object(o.jsx)("div",{className:"col-md-3 mb-5",children:Object(o.jsxs)("div",{className:"card card-body bg-dark text-center h-100",children:[Object(o.jsx)("img",{className:"w-100 mb-2",src:t.Poster,alt:t.Title}),Object(o.jsxs)("h5",{className:"text-light card-title",children:[t.Title," - ",t.Year]}),Object(o.jsxs)(r.b,{className:"btn btn-primary",to:"/movie/"+t.imdbID,children:["Movie Detail ",Object(o.jsx)("i",{className:"fas fa-chevron-right"})]})]})})};var w=Object(d.b)((function(e){return{movies:e.movies.movies}}))((function(e){var t,c=e.movies;return t="True"===c.Response?c.Search.map((function(e,t){return Object(o.jsx)(y,{movie:e},t)})):null,Object(o.jsx)("div",{className:"row mt-3",children:t})}));var M=Object(d.b)((function(e){return{loading:e.movies.loading}}))((function(e){var t=e.loading;return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(g,{}),t?Object(o.jsx)(N,{}):Object(o.jsx)(w,{})]})})),I=c(3),T=c(13),k=c(32),D=c(33),A=c(11),S={text:"",movies:[],loading:!1,movie:[]},R=Object(T.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(A.a)(Object(A.a)({},e),{},{text:t.payload,loading:!1});case m:return Object(A.a)(Object(A.a)({},e),{},{movies:t.payload,loading:!1});case h:return Object(A.a)(Object(A.a)({},e),{},{movie:t.payload,loading:!1});case x:return Object(A.a)(Object(A.a)({},e),{},{loading:!0});default:return e}}}),E=[k.a],P=Object(T.createStore)(R,{},Object(D.composeWithDevTools)(T.applyMiddleware.apply(void 0,E)));var V=Object(d.b)((function(e){return{movie:e.movies.movie,loading:e.movies.loading}}),{setLoading:p,fetchMovie:function(e){return function(t){u.a.get("http://www.omdbapi.com/?apikey=".concat(v.APIKey,"&i=").concat(e)).then((function(e){return t({type:h,payload:e.data})})).catch((function(e){return console.log(e)}))}}})((function(e){var t=e.movie,c=e.loading,s=e.fetchMovie,n=Object(I.e)().id;Object(a.useEffect)((function(){s(n),p()}),[n]);var i=Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-4 card card-body",children:Object(o.jsx)("img",{src:t.Poster,className:"thumbnail",alt:"Poster"})}),Object(o.jsxs)("div",{className:"col-md-8",children:[Object(o.jsx)("h2",{className:"mb-4",children:t.Title}),Object(o.jsxs)("ul",{className:"list-group",children:[Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("strong",{children:"Genre:"})," ",t.Genre]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("strong",{children:"Released:"})," ",t.Released]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("strong",{children:"Rated:"})," ",t.Rated]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("strong",{children:"IMDB Rating:"})," ",t.imdbRating]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("strong",{children:"Director:"})," ",t.Director]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("strong",{children:"Writer:"})," ",t.Writer]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("strong",{children:"Actors:"})," ",t.Actors]})]})]})]}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"card card-body bg-dark my-5 text-light",children:Object(o.jsxs)("div",{className:"col-md-12",children:[Object(o.jsx)("h3",{children:"About "}),t.Plot,Object(o.jsx)("hr",{}),Object(o.jsx)("a",{href:"https://www.imdb.com/title/"+t.imdbID,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",children:"View on IMDB"}),Object(o.jsx)(r.b,{to:"/",className:"btn btn-default text-light",children:"Go Back To Search"})]})})})]}),l=c?Object(o.jsx)(N,{}):i;return Object(o.jsx)(o.Fragment,{children:l})}));var B=function(){return Object(o.jsx)(d.a,{store:P,children:Object(o.jsx)(r.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{}),Object(o.jsx)(I.a,{exact:!0,path:"/",component:M}),Object(o.jsx)(I.a,{exact:!0,path:"/movie/:id",component:V}),Object(o.jsx)(l,{})]})})})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(B,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.c6a99686.chunk.js.map