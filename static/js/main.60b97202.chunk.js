(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(n,t,e){n.exports=e(80)},71:function(n,t,e){n.exports=e.p+"static/media/logo.ee7cd8ed.svg"},80:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),a=e(30),i=e.n(a),c=e(10),u=e(8),s=e(9),l=e(33),h=e.n(l),d=Object({NODE_ENV:"production",PUBLIC_URL:"/hacker-news-clone"}).URL||"http://localhost:3000/",f=2e4,p={"Content-Type":"application/json",Accept:"application/json"},S=new(function(){function n(t){var e=t.baseURL,r=void 0===e?d:e,o=t.timeout,a=void 0===o?f:o,i=t.headers,c=void 0===i?p:i,s=t.auth;Object(u.a)(this,n);var l=h.a.create({baseURL:r,timeout:a,headers:c,auth:s});l.interceptors.response.use(this.handleSuccess,this.handleError),this.client=l}return Object(s.a)(n,[{key:"handleSuccess",value:function(n){return n}},{key:"handleError",value:function(n){return Promise.reject(n)}},{key:"get",value:function(n){return this.client.get(n).then(function(n){return n.data})}},{key:"post",value:function(n,t){return this.client.post(n,t).then(function(n){return n.data})}},{key:"put",value:function(n,t){return this.client.put(n,t).then(function(n){return n.data})}},{key:"patch",value:function(n,t){return this.client.patch(n,t).then(function(n){return n.data})}},{key:"delete",value:function(n){return this.client.delete(n).then(function(n){return n.data})}}]),n}())({baseURL:"https://hacker-news.firebaseio.com/v0"}),m={};m.getTopStoryIds=function(){return S.get("/topstories".concat(".json?print=pretty"))},m.getStory=function(n){return S.get("/item/".concat(n).concat(".json?print=pretty"))},m.getStoriesByPage=function(n,t){var e=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{begin:t*n,end:(t+1)*n}}(20,t),r=function(n){var t=n.begin,e=n.end;return n.items.slice(t,e)}({begin:e.begin,end:e.end,items:n}).map(function(n){return m.getStory(n)});return Promise.all(r)};var E=m,g="@hnClone/story",b={FETCH_STORY_IDS_REQUEST:"".concat(g,"/FETCH_STORY_IDS_REQUEST"),FETCH_STORY_IDS_SUCCESS:"".concat(g,"/FETCH_STORY_IDS_SUCCESS"),FETCH_STORY_IDS_FAILURE:"".concat(g,"/FETCH_STORY_IDS_FAILURE"),FETCH_STORIES_REQUEST:"".concat(g,"/FETCH_STORIES_REQUEST"),FETCH_STORIES_SUCCESS:"".concat(g,"/FETCH_STORIES_SUCCESS"),FETCH_STORIES_FAILURE:"".concat(g,"/FETCH_STORIES_FAILURE")},y=function(n,t){return{type:n,payload:t}},v={fetchStoryIds:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return t(y(b.FETCH_STORY_IDS_REQUEST,n)),E.getTopStoryIds().then(function(n){return t(y(b.FETCH_STORY_IDS_SUCCESS,{storyIds:n})),t(v.fetchStories({storyIds:n,page:0})),n}).catch(function(n){return t(y(b.FETCH_STORY_IDS_FAILURE,n))})}},fetchStories:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var e=n.storyIds,r=n.page;return t(y(b.FETCH_STORIES_REQUEST,n)),E.getStoriesByPage(e,r).then(function(n){return t(y(b.FETCH_STORIES_SUCCESS,{stories:n}))}).catch(function(n){return t(y(b.FETCH_STORY_IDS_FAILURE,n))})}}},T=v,_=e(34),O=Object(_.a)(function(n){return n.story.storyIds},function(n){return n.story.stories},function(n,t){return n.length>t.length}),I=e(43),w=e(35),C=e(44),R=e(36),x=e.n(R),j=(e(71),e(2)),F=e(39),k=e.n(F),U=e(40),H=e.n(U),D=function(n){var t="";return n&&(n.includes("//")||(n="http://".concat(n)),t=H.a.parse(n).hostname),t.includes("www.")&&(t=t.split("www.")[1]),t},L="https://news.ycombinator.com",Y="".concat(L,"/item?id="),A="".concat(L,"/user?id="),Q=function(n){var t=n.url,e=n.id,r="".concat(Y).concat(e);return t||r},M=e(3);function P(){var n=Object(M.a)(["\n  color: ",";\n\n  &:visited {\n    color: ",";\n  }\n"]);return P=function(){return n},n}function z(){var n=Object(M.a)(["\n  font-size: 14px;\n  color: ",";\n"]);return z=function(){return n},n}function B(){var n=Object(M.a)(["\n  color: ",";\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: row;\n  align-items: center;\n  text-decoration: none;\n"]);return B=function(){return n},n}function N(){var n=Object(M.a)(["\n  color: ",";\n  font-size: 12px;\n"]);return N=function(){return n},n}function J(){var n=Object(M.a)(["\n  color: ",";\n  margin-top: 0;\n  margin-bottom: 6px;\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: 0.4px;\n"]);return J=function(){return n},n}function W(){var n=Object(M.a)(["\n  border-bottom: 1px solid ",";\n  padding: 14px 24px;\n\n  &:last-child {\n    border-bottom: none;\n  }\n"]);return W=function(){return n},n}var V=j.b.li(W(),function(n){return n.theme.border}),$=j.b.h3(J(),function(n){return n.theme.text}),q=j.b.span(N(),function(n){return n.theme.textSecondary}),G=j.b.a(B(),function(n){return n.theme.text}),K=j.b.div(z(),function(n){return n.theme.textSecondary}),X=j.b.a(P(),function(n){return n.theme.textSecondary},function(n){return n.theme.textSecondary}),Z=k()(),nn="nofollow noreferrer noopener",tn=function(n){var t=n.by,e=n.kids,r=void 0===e?[]:e,a=n.score,i=n.url,c=n.title,u=n.id,s=(n.type,n.time),l=D(i)||"new.ycombinator.com",h=Q({url:i,id:u}),d="".concat(Y).concat(u),f="".concat(A).concat(t);return o.a.createElement(V,null,o.a.createElement(G,{href:h,rel:nn,target:"_blank"},o.a.createElement($,null,c," ",o.a.createElement(q,null,"(",l,")"))),o.a.createElement(K,null,a," points by"," ",o.a.createElement(X,{href:f,rel:nn,target:"_blank"},t),Z.format(new Date(1e3*s).toISOString())," | ",o.a.createElement(X,{href:d,rel:nn,target:"_blank"},r.length," Comments")))};function en(){var n=Object(M.a)(["\n\tbackground-color: ",";\n\tborder-radius: 4px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-bottom: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n"]);return en=function(){return n},n}var rn=j.b.ul(en(),function(n){return n.theme.backgroundSecondary}),on=function(n){var t=n.stories;return o.a.createElement(rn,null,t.map(function(n){return o.a.createElement(tn,Object.assign({key:n.id},n))}))},an={background:"#272727",backgroundSecondary:"#393C3E",text:"#bfbebe",textSecondary:"#848886",border:"#272727"};function cn(){var n=Object(M.a)(["\n  text-align: center;\n\n  span {\n    color: ",";\n    display: inline-block;\n    margin-left: 4px;\n    margin-right: 4px;\n    font-size: 80px;\n    line-height: 0.1;\n\n    /**\n    * Use the blink animation, which is defined above\n    */\n    animation-name: ",";\n    /**\n    * The total time of animation\n    */\n    animation-duration: 1s;\n    /**\n    * It will repeat itself forever\n    */\n    animation-iteration-count: infinite;\n    /**\n    * This makes sure that the starting style (opacity: .2)\n    * of the animation is applied before the animation starts.\n    * Otherwise we would see a short flash or would have\n    * to set the default styling of the dots to the same\n    * as the animation. Same applies for the ending styles.\n    */\n    animation-fill-mode: both;\n  }\n\n  span:nth-child(2) {\n    animation-delay: 0.2s;\n  }\n  span:nth-child(3) {\n    animation-delay: 0.4s;\n  }\n"]);return cn=function(){return n},n}function un(){var n=Object(M.a)(["\n  /**\n  * At the start of the animation the dot\n  * has an opacity of .2\n  */\n  0% {\n    opacity: .2;\n  }\n  /**\n  * At 20% the dot is fully visible and\n  * then fades out slowly\n  */\n  20% {\n    opacity: 1;\n  }\n  /**\n  * Until it reaches an opacity of .2 and\n  * the animation can start again\n  */\n  100% {\n    opacity: .2;\n  }\n"]);return un=function(){return n},n}var sn=Object(j.d)(un()),ln=j.b.div(cn(),function(n){return n.theme.textSecondary},sn),hn=function(){return o.a.createElement(ln,null,o.a.createElement("span",null,"."),o.a.createElement("span",null,"."),o.a.createElement("span",null,"."))};function dn(){var n=Object(M.a)(["\n  color: ",";\n  font-size: 20px;\n  font-weight: 300;\n"]);return dn=function(){return n},n}function fn(){var n=Object(M.a)(["\n  width: 85%;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100%;\n  overflow: hidden;\n  padding-bottom: 200px;\n\n  "," {\n    width: 96%;\n  }\n"]);return fn=function(){return n},n}var pn=j.b.div(fn(),"@media only screeen and (max-width: 768px)"),Sn=j.b.h1(dn(),function(n){return n.theme.textSecondary}),mn=function(n){function t(){var n,e;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=Object(I.a)(this,(n=Object(w.a)(t)).call.apply(n,[this].concat(o)))).fetchStories=function(){var n=e.props,t=n.storyIds,r=n.page,o=n.fetchStories;n.isFetching||o({storyIds:t,page:r})},e}return Object(C.a)(t,n),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStoriesFirstPage()}},{key:"render",value:function(){var n=this.props,t=n.stories,e=n.hasMoreStories;return o.a.createElement(j.a,{theme:an},o.a.createElement("div",null,o.a.createElement(pn,null,o.a.createElement(Sn,null,"// Hacker News Reader"),o.a.createElement(x.a,{dataLength:t.length,next:this.fetchStories,hasMore:e,loader:o.a.createElement(hn,null),style:{height:"100%",overflow:"visible"}},o.a.createElement(on,{stories:t})))))}}]),t}(r.Component),En=Object(c.b)(function(n){return{stories:n.story.stories,page:n.story.page,storyIds:n.story.storyIds,isFetching:n.story.isFetching,hasMoreStories:O(n)}},function(n){return{fetchStoriesFirstPage:function(){return n(T.fetchStoryIds())},fetchStories:function(t){var e=t.storyIds,r=t.page;return n(T.fetchStories({storyIds:e,page:r}))}}})(mn),gn=e(5),bn=e(6),yn={SET_THEME:"".concat("@hnReader/app","/SET_THEME")},vn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{theme:"dark"},t=arguments.length>1?arguments[1]:void 0,e=t.type,r=t.payload;switch(e){case yn.SET_THEME:return Object(bn.a)({},n,r);default:return n}},Tn=e(18),_n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{storyIds:[],stories:[],page:0,isFetching:!1,error:""},t=arguments.length>1?arguments[1]:void 0,e=t.type,r=t.payload;switch(e){case b.FETCH_STORY_IDS_REQUEST:case b.FETCH_STORIES_REQUEST:return Object(bn.a)({},n,{isFetching:!0});case b.FETCH_STORY_IDS_SUCCESS:return Object(bn.a)({},n,r);case b.FETCH_STORIES_SUCCESS:return Object(bn.a)({},n,{stories:Object(Tn.a)(n.stories).concat(Object(Tn.a)(r.stories)),page:n.page+1,isFetching:!1});default:return n}},On=Object(gn.c)({app:vn,story:_n}),In=e(41),wn=(e(42),[]);wn.push(In.a);var Cn=Object(gn.d)(gn.a.apply(void 0,wn)),Rn=function(n){return Object(gn.e)(On,n,Cn)};function xn(){var n=Object(M.a)(["\n    * {\n      box-sizing: border-box;\n    }\n\n    html, body {\n      font-family: 'Lato',Helvetica-Neue,Helvetica,Arial,sans-serif;\n      width: 100vw;\n      overflow-x: hidden;\n      margin: 0;\n      padding: 0;\n      background-color: ",";\n    }\n\n    ul {\n      list-style: none;\n      padding: 0;\n    }\n\n    a {\n      text-decoration: none;\n\n      &:visited {\n        color: inherit;\n      }\n    }\n  "]);return xn=function(){return n},n}var jn=function(){return Object(j.c)(xn(),an.background)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));jn();!function(){var n=Rn({});n.dispatch({type:"@hnReader/@@INIT"}),i.a.render(o.a.createElement(c.a,{store:n},o.a.createElement(En,null)),document.getElementById("root"))}(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[45,2,1]]]);
//# sourceMappingURL=main.60b97202.chunk.js.map