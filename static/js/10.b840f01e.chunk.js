(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{150:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(916);function c(e){if(!e)return"#000";for(var t=0,n=0;n<e.length;n+=1)t=e.charCodeAt(n)+((t<<5)-t);for(var a="#",r=0;r<3;r+=1){a+="00".concat((t>>8*r&255).toString(16)).slice(-2)}return a}t.a=function(e){var t=e.className,n=e.iconSize,a=e.name||"Unknown User",i=2*n,l={backgroundColor:c(a),width:i,height:i,fontSize:n},s=function(e){var t=e.split(" ").filter(Boolean),n="";return t.length>0&&t[0]&&(n+=t[0][0]),t.length>1&&t[1]&&(n+=t[1][0]),n.toUpperCase()}(a);return r.a.createElement(o.a,{className:t,style:l},s)}},187:function(e,t,n){"use strict";var a=n(165),r=n(0),o=n.n(r),c=n(7);t.a=function(e){var t=e.component,n=Object(a.a)(e,["component"]);return o.a.createElement(c.b,Object.assign({},n,{render:function(e){return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=Object.assign.apply(Object,[{}].concat(n));return o.a.createElement(e,r)}(t,e,n)}}))}},188:function(e,t,n){"use strict";var a=n(7),r=n(0),o=function(e){var t=e.pathname,n=e.search,a=e.hash;return t+(n?"?"+n:"")+(a?"#"+a:"")};t.a=function(){var e=Object(a.g)();Object(r.useEffect)(function(){return e.block(function(t,n){return"PUSH"!==n||o(t)!==o(e.location)})},[])}},189:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(38),c=n(918),i=n(943),l=n(906),s=n(887),u=n(936),m=n(928),h=n(885),p=n(920),d=n(89),f=n(173),g=n.n(f),b=n(886);t.a=Object(d.a)(function(e){return{closeIcon:{marginRight:e.spacing(.5)},headSection:{width:200},blackList:{backgroundColor:e.palette.common.black,height:"100%"},noDecoration:{textDecoration:"none !important"}}},{withTheme:!0})(function(e){var t=e.open,n=e.onClose,a=e.anchor,d=e.classes,f=e.menuItems,v=e.selectedItem,y=e.theme,E=Object(b.a)(y.breakpoints.up("sm"));return window.onresize=function(){E&&t&&n()},r.a.createElement(c.a,{variant:"temporary",open:t,onClose:n,anchor:a},r.a.createElement(i.a,{className:d.headSection},r.a.createElement(l.a,{style:{paddingTop:y.spacing(0),paddingBottom:y.spacing(0),height:"100%",justifyContent:"left"===a?"flex-start":"flex-end"},disableGutters:!0},r.a.createElement(s.a,{className:d.closeIcon},r.a.createElement(u.a,{onClick:n,"aria-label":"Close Navigation",size:"large"},r.a.createElement(g.a,{color:"primary"}))))),r.a.createElement(m.a,{className:d.blackList},f.map(function(e){return e.link?r.a.createElement(o.b,{key:e.name,to:e.link,className:d.noDecoration,onClick:n},r.a.createElement(l.a,{button:!0,selected:v===e.name,disableRipple:!0,disableTouchRipple:!0},r.a.createElement(s.a,null,e.icon),r.a.createElement(h.a,{primary:r.a.createElement(p.a,{variant:"subtitle1",className:"text-white"},e.name)}))):r.a.createElement(l.a,{button:!0,key:e.name,onClick:e.onClick},r.a.createElement(s.a,null,e.icon),r.a.createElement(h.a,{primary:r.a.createElement(p.a,{variant:"subtitle1",className:"text-white"},e.name)}))})))})},190:function(e,t,n){"use strict";var a=1/0;function r(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0&&a>e?(a=e,window.requestAnimationFrame(r),window.scrollTo(0,e-e/8)):a=1/0}t.a=function(){setTimeout(function(){r()},10)}},207:function(e,t,n){"use strict";var a=n(20),r=n(0),o=n.n(r),c=n(904),i=n(89);t.a=Object(i.a)(function(e){return{root:{backgroundColor:e.palette.primary.main,paddingTop:0,paddingBottom:0}}},{withTheme:!0})(function(e){var t=e.classes,n=e.getPushMessageFromChild,i=Object(r.useState)(!1),l=Object(a.a)(i,2),s=l[0],u=l[1],m=Object(r.useState)({}),h=Object(a.a)(m,2),p=h[0],d=h[1],f=Object(r.useRef)([]),g=Object(r.useCallback)(function(){f.current.length>0&&(d(f.current.shift()),u(!0))},[d,u,f]),b=Object(r.useCallback)(function(e,t){"clickaway"!==t&&u(!1)},[u]),v=Object(r.useCallback)(function(e){f.current.push({message:e,key:(new Date).getTime()}),s?u(!1):g()},[f,s,u,g]);return Object(r.useEffect)(function(){n(v)},[n,v]),o.a.createElement(c.a,{disableWindowBlurListener:!0,key:p.key,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:s,autoHideDuration:6e3,onClose:b,ContentProps:{classes:{root:t.root}},message:o.a.createElement("span",null,p.message?p.message.text:null),TransitionProps:{onExited:g}})})},899:function(e,t,n){"use strict";n.r(t);var a=n(20),r=n(4),o=n(0),c=n.n(o),i=n(145),l=n.n(i),s=n(89),u=n(7),m=n(915),h=n(922),p=n(920),d=n(928),f=n(906),g=n(884),b=n(923),v=n(111),y=Object(v.a)(m.a)(function(e){return{margin:e.theme.spacing(1),transition:"transform 0.3s ease-in-out","&:hover":{transform:"scale(1.05)"}}}),E=function(){var e=Object(o.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(o.useState)([]),l=Object(a.a)(i,2),s=l[0],u=l[1],m=Object(o.useState)(""),v=Object(a.a)(m,2),E=v[0],w=v[1];Object(o.useEffect)(function(){fetch("".concat("http://construct2340.duckdns.org:8000/","/fitConnect/manage_become_coach_request")).then(function(e){return e.json()}).then(function(e){console.log("Fetched exercises:",e),r(e)}).catch(function(e){return console.error("Error fetching coach requests:",e)}),fetch("".concat("http://construct2340.duckdns.org:8000/","/fitConnect/exercises")).then(function(e){return e.json()}).then(function(e){console.log("Fetched exercises:",e),u(e)}).catch(function(e){return console.error("Error fetching exercises:",e)})},[]);var k=function(){fetch("".concat("http://construct2340.duckdns.org:8000/","/fitConnect/exercises")).then(function(e){return e.json()}).then(function(e){return u(e)}).catch(function(e){return console.error("Error fetching exercises:",e)})};return c.a.createElement(h.a,{sx:{width:"100%",height:"100vh",backgroundColor:"black",color:"white",p:3,boxSizing:"border-box"}},c.a.createElement(h.a,{mb:4},c.a.createElement(p.a,{variant:"h6",gutterBottom:!0,sx:{fontWeight:"bold"}},"Manage Coach Requests"),c.a.createElement(h.a,{sx:{maxHeight:300,overflow:"auto",backgroundColor:"black"}},c.a.createElement(d.a,null,n.map(function(e){return c.a.createElement(f.a,{key:e.id,sx:{borderBottom:"1px solid grey",display:"flex",justifyContent:"space-between"}},c.a.createElement(h.a,null,e.name," - ",e.requestDate),c.a.createElement(h.a,null,c.a.createElement(y,{variant:"contained",color:"success",onClick:function(){return t=e.user_id,void fetch("".concat("http://construct2340.duckdns.org:8000/","/fitConnect/manage_become_coach_request"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:t,is_approved:!0})}).then(function(){});var t}},"Accept"),c.a.createElement(y,{variant:"contained",color:"error",onClick:function(){return t=e.user_id,void fetch("".concat("http://construct2340.duckdns.org:8000/","/fitConnect/manage_become_coach_request"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:t})}).then(function(){});var t}},"Reject")))})))),c.a.createElement(g.a,{light:!0}),c.a.createElement(h.a,{mt:4,display:"flex",gap:2},c.a.createElement(h.a,{width:"50%"},c.a.createElement(p.a,{variant:"h6",gutterBottom:!0,sx:{fontWeight:"bold"}},"Add Exercise to Exercise Bank"),c.a.createElement(b.a,{label:"New Exercise",value:E,onChange:function(e){return w(e.target.value)},variant:"outlined",sx:{input:{color:"white"},label:{color:"white"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:"white"}},mb:2},fullWidth:!0}),c.a.createElement(y,{onClick:function(){fetch("".concat("http://construct2340.duckdns.org:8000/","/fitConnect/edit_exercise_bank"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:E,description:"",muscle_group:1,equipment:1})}).then(function(){w(""),k()})},variant:"contained",color:"success"},"Add Exercise")),c.a.createElement(h.a,{width:"50%",sx:{overflow:"auto",maxHeight:"300px"}},c.a.createElement(p.a,{variant:"h6",gutterBottom:!0,sx:{fontWeight:"bold"}},"Exercise Bank"),c.a.createElement(d.a,null,s.map(function(e){return c.a.createElement(h.a,{key:e.exercise_id,sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:1}},c.a.createElement(p.a,null,e.name),c.a.createElement(y,{variant:"contained",color:"error",onClick:function(){return t=e.exercise_id,console.log("Attempting to remove exercise with ID:",t),void fetch("".concat("http://construct2340.duckdns.org:8000/","/fitConnect/edit_exercise_bank"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({exercise_id:t})}).then(function(){k()});var t}},"Remove"))})))))},w=n(187),k=n(188);var j=Object(s.a)(function(e){return{wrapper:{width:"100%",height:"100vh",margin:0,padding:0,overflow:"hidden"}}},{withTheme:!0})(Object(o.memo)(function(e){var t=e.classes,n=(e.pushMessageToSnackbar,e.selectDashboard);Object(k.a)();var r=Object(o.useState)(null),i=Object(a.a)(r,2),l=i[0],s=i[1];return Object(o.useEffect)(function(){var e=localStorage.getItem("user_id");s(e)},[]),c.a.createElement("div",{className:t.wrapper},c.a.createElement(u.d,null,c.a.createElement(w.a,{path:"/c/dashboard",user_id:l,component:E,selectDashboard:n})))})),O=n(116),x=n(38),C=n(944),S=n(943),L=n(907),T=n(936),N=n(885),_=n(802),P=n(941),I=n(887),D=n(918),R=n(945),B=n(927),F=n(307),z=n.n(F),A=n(948),G=n(916),M=n(801),W=n.n(M),q=n(806);var U=function(e){var t=e.message,n=e.divider,r=Object(o.useState)(!1),i=Object(a.a)(r,2),l=i[0],s=i[1],u=Object(o.useCallback)(function(){s(!0)},[s]);return c.a.createElement(f.a,{divider:n},c.a.createElement(A.a,null,l?c.a.createElement(W.a,{color:"secondary"}):c.a.createElement(G.a,{src:l?null:t.src,onError:u})),c.a.createElement(N.a,{primary:t.text,secondary:"".concat(Object(q.a)(1e3*t.date,new Date)," ago")}))};function J(e){var t=e.classes,n=e.messages,r=void 0===n?[]:n,i=Object(o.useRef)(),l=Object(o.useState)(!1),s=Object(a.a)(l,2),u=s[0],m=s[1],b=Object(o.useCallback)(function(){m(!u)},[u,m]),v=Object(o.useCallback)(function(){m(!1)},[m]),y=u?"scroll-playground":null;return c.a.createElement(o.Fragment,null,c.a.createElement(T.a,{onClick:b,buttonRef:i,"aria-label":"Open Messages","aria-describedby":y,color:"primary",size:"large"},c.a.createElement(z.a,null)),c.a.createElement(B.b,{disableScrollLock:!0,id:y,open:u,anchorEl:i.current,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},classes:{paper:t.popoverPaper},onClose:v},c.a.createElement(C.a,{position:"static",color:"inherit",className:t.noShadow},c.a.createElement(h.a,{pt:1,pl:2,pb:1,pr:1},c.a.createElement(p.a,{variant:"subtitle1"},"Messages")),c.a.createElement(g.a,{className:t.divider})),c.a.createElement(d.a,{dense:!0,className:t.tabContainer},0===r.length?c.a.createElement(f.a,null,c.a.createElement(N.a,null,"You haven't received any messages yet.")):r.map(function(e,t){return c.a.createElement(U,{key:t,message:e,divider:t!==r.length-1})}))))}J.defaultProps={messages:[]};var H=Object(s.a)(function(e){return{tabContainer:{overflowY:"auto",maxHeight:350},popoverPaper:Object(r.a)({width:"100%",maxWidth:350,marginLeft:e.spacing(2),marginRight:e.spacing(1)},e.breakpoints.down("md"),{maxWidth:270}),divider:{marginTop:-2},noShadow:{boxShadow:"none !important"}}},{withTheme:!0})(J),Y=n(173),X=n.n(Y),K={toolbar:{minWidth:240}};var Q=Object(s.a)(K)(function(e){var t=e.classes,n=e.onClose,a=e.open;return c.a.createElement(D.a,{anchor:"right",open:a,variant:"temporary",onClose:n},c.a.createElement(S.a,{disableGutters:!0,className:t.toolbar},c.a.createElement(h.a,{pl:3,pr:3,display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},c.a.createElement(p.a,{variant:"h6"},"A Sidedrawer"),c.a.createElement(T.a,{onClick:n,color:"primary","aria-label":"Close Sidedrawer",size:"large"},c.a.createElement(X.a,null)))),c.a.createElement(g.a,null))}),V=n(189),Z=n(886),$=n(310),ee=n.n($),te=n(48),ne=n.n(te),ae=n(150),re=n(308),oe=n.n(re),ce=n(243),ie=n.n(ce),le=n(309),se=n.n(le);function ue(){ue=function(){return t};var e,t={},n=Object.prototype,a=n.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var o=t&&t.prototype instanceof b?t:b,c=Object.create(o.prototype),i=new N(a||[]);return r(c,"_invoke",{value:C(e,n,i)}),c}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var h="suspendedStart",p="suspendedYield",d="executing",f="completed",g={};function b(){}function v(){}function y(){}var E={};s(E,c,function(){return this});var w=Object.getPrototypeOf,k=w&&w(w(_([])));k&&k!==n&&a.call(k,c)&&(E=k);var j=y.prototype=b.prototype=Object.create(E);function O(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function x(e,t){function n(r,o,c,i){var l=m(e[r],e,o);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then(function(e){n("next",e,c,i)},function(e){n("throw",e,c,i)}):t.resolve(u).then(function(e){s.value=e,c(s)},function(e){return n("throw",e,c,i)})}i(l.arg)}var o;r(this,"_invoke",{value:function(e,a){function r(){return new t(function(t,r){n(e,a,t,r)})}return o=o?o.then(r,r):r()}})}function C(t,n,a){var r=h;return function(o,c){if(r===d)throw new Error("Generator is already running");if(r===f){if("throw"===o)throw c;return{value:e,done:!0}}for(a.method=o,a.arg=c;;){var i=a.delegate;if(i){var l=S(i,a);if(l){if(l===g)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===h)throw r=f,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=d;var s=m(t,n,a);if("normal"===s.type){if(r=a.done?f:p,s.arg===g)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(r=f,a.method="throw",a.arg=s.arg)}}}function S(t,n){var a=n.method,r=t.iterator[a];if(r===e)return n.delegate=null,"throw"===a&&t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method)||"return"!==a&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+a+"' method")),g;var o=m(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var c=o.arg;return c?c.done?(n[t.resultName]=c.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):c:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function _(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(a.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return v.prototype=y,r(j,"constructor",{value:y,configurable:!0}),r(y,"constructor",{value:v,configurable:!0}),v.displayName=s(y,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s(e,l,"GeneratorFunction")),e.prototype=Object.create(j),e},t.awrap=function(e){return{__await:e}},O(x.prototype),s(x.prototype,i,function(){return this}),t.AsyncIterator=x,t.async=function(e,n,a,r,o){void 0===o&&(o=Promise);var c=new x(u(e,n,a,r),o);return t.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},O(j),s(j,l,"Generator"),s(j,c,function(){return this}),s(j,"toString",function(){return"[object Generator]"}),t.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},t.values=_,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(a,r){return i.type="throw",i.arg=t,n.next=a,r&&(n.method="next",n.arg=e),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var l=a.call(c,"catchLoc"),s=a.call(c,"finallyLoc");if(l&&s){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(l){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;T(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,a){return this.delegate={iterator:_(t),resultName:n,nextLoc:a},"next"===this.method&&(this.arg=e),g}},t}var me="/FitConnect-Frontend/images/logged_out/FitConnectLogo.png";var he=Object(s.a)(function(e){var t,n;return{appBar:Object(r.a)({boxShadow:"none",backgroundColor:e.palette.common.darkBlack,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},e.breakpoints.down("sm"),{width:"100%",marginLeft:0}),appBarToolbar:(t={display:"flex",justifyContent:"space-between",backgroundColor:e.palette.common.darkBlack,paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},Object(r.a)(t,e.breakpoints.up("sm"),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),Object(r.a)(t,e.breakpoints.up("md"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),Object(r.a)(t,e.breakpoints.up("lg"),{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)}),t),logoContainer:{display:"flex",alignItems:"center"},accountAvatar:Object(r.a)({height:42,width:42,marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.down("sm"),{marginLeft:e.spacing(1.5),marginRight:e.spacing(1.5)}),drawerPaper:(n={height:"100%vh",whiteSpace:"nowrap",border:0,width:e.spacing(7),overflowX:"hidden",marginTop:e.spacing(8)},Object(r.a)(n,e.breakpoints.up("sm"),{width:e.spacing(9)}),Object(r.a)(n,"backgroundColor",e.palette.common.black),n),smBordered:Object(r.a)({},e.breakpoints.down("sm"),{borderRadius:"50% !important"}),menuLink:{textDecoration:"none",color:e.palette.text.primary},iconListItem:{width:"auto",borderRadius:e.shape.borderRadius,paddingTop:11,paddingBottom:11,marginLeft:e.spacing(1),marginRight:e.spacing(1)},textPrimary:{color:e.palette.primary.main},mobileItemSelected:{backgroundColor:"".concat(e.palette.primary.main," !important")},brandText:{fontFamily:"'Roboto', cursive",fontStyle:"bold",fontWeight:650,marginLeft:"10px"},username:{paddingLeft:0,paddingRight:e.spacing(2)},justifyCenter:{justifyContent:"center"},permanentDrawerListItem:{justifyContent:"center",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)}}},{withTheme:!0})(function(e){var t=e.selectedTab,n=e.setSelectedTab,r=e.messages,i=e.classes,l=e.theme,s=Object(o.useRef)([]),m=Object(o.useState)(!1),g=Object(a.a)(m,2),b=g[0],v=g[1],y=Object(o.useState)(!1),E=Object(a.a)(y,2),w=E[0],k=E[1],j=Object(Z.a)(l.breakpoints.up("sm")),B=Object(o.useState)(""),F=Object(a.a)(B,2),z=F[0],A=F[1],G=Object(o.useState)(""),M=Object(a.a)(G,2),W=M[0],q=M[1],U=Object(o.useState)(null),J=Object(a.a)(U,2),Y=J[0],X=J[1],K=function(){X(null)},$=Object(u.h)(),te=$.pathname,re=Object(u.g)();Object(o.useEffect)(function(){n({"/c/dashboard":"Dashboard"}[te])},[te]);var ce=Object(o.useCallback)(function(e){re.push(e),K()},[re]),le=Object(o.useCallback)(Object(O.a)(ue().mark(function e(){var t,n;return ue().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("user_id"))){e.next=12;break}return e.prev=2,e.next=5,fetch("".concat("http://construct2340.duckdns.org:8000/","/fitConnect/logout/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:t})});case 5:(n=e.sent).ok?(localStorage.clear(),ne.a.remove("authToken"),re.push("")):(console.error("Logout failed"),console.log(n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error("Error during logout:",e.t0);case 12:case"end":return e.stop()}},e,null,[[2,9]])})),[re]);Object(o.useEffect)(function(){var e=localStorage.getItem("first_name"),t=localStorage.getItem("last_name");e&&A(e),t&&q(t)},[]);var he=Object(o.useCallback)(function(){v(!0)},[v]),pe=Object(o.useCallback)(function(){v(!1)},[v]),de=Object(o.useCallback)(function(){k(!1)},[k]),fe=[{link:"/c/dashboard",name:"Dashboard",onClick:pe,icon:{desktop:c.a.createElement(oe.a,{className:"Dashboard"===t?i.textPrimary:"text-white",fontSize:"small"}),mobile:c.a.createElement(oe.a,{className:"text-white"})}}],ge=[{link:"/c/dashboard",name:"Dashboard",onClick:function(){return ce("/c/dashboard")},icon:{desktop:c.a.createElement(oe.a,{className:"text-white",fontSize:"small"}),mobile:c.a.createElement(oe.a,{className:"text-white"})}},{link:"/c/account",name:"Account",onClick:function(){return ce("/c/account")},icon:{desktop:c.a.createElement(se.a,{className:"text-white",fontSize:"small"}),mobile:c.a.createElement(se.a,{className:"text-white"})}},{name:"Logout",onClick:le,icon:{desktop:c.a.createElement(ee.a,{className:"text-white",fontSize:"small"}),mobile:c.a.createElement(ee.a,{className:"text-white"})}}];return c.a.createElement(o.Fragment,null,c.a.createElement(C.a,{position:"fixed",className:i.appBar},c.a.createElement(S.a,{className:i.appBarToolbar},c.a.createElement(h.a,{display:"flex",alignItems:"center"},c.a.createElement(L.a,{smUp:!0},c.a.createElement(h.a,{mr:1},c.a.createElement(T.a,{"aria-label":"Open Navigation",onClick:he,color:"primary",size:"large"},c.a.createElement(ie.a,null)))),c.a.createElement(L.a,{smDown:!0},c.a.createElement("div",{className:i.logoContainer},c.a.createElement(x.b,{to:"/"},c.a.createElement("img",{alt:"FitConnect",src:me,style:{width:"40px"}})),c.a.createElement(x.b,{to:"/",style:{textDecoration:"none"}},c.a.createElement(p.a,{variant:"h4",className:i.brandText,display:"inline",color:"secondary"},"FitConnect"))))),c.a.createElement(h.a,{display:"flex",justifyContent:"flex-end",alignItems:"center",width:"100%"},c.a.createElement(H,{messages:r}),c.a.createElement(T.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){X(e.currentTarget)},color:"inherit"},c.a.createElement(ae.a,{className:i.accountAvatar,iconSize:23,name:"".concat(z," ").concat(W)}),j&&c.a.createElement(N.a,{className:i.username,primary:c.a.createElement(p.a,{color:"textPrimary"},z||"User")})),c.a.createElement(_.a,{id:"menu-appbar",anchorEl:Y,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(Y),onClose:K,style:{marginTop:"45px"}},ge.map(function(e){return c.a.createElement(P.a,{key:e.name,onClick:e.onClick},c.a.createElement(I.a,null,e.icon.desktop),c.a.createElement(p.a,{variant:"inherit"},e.name))}))),c.a.createElement(Q,{open:w,onClose:de}))),c.a.createElement(L.a,{smDown:!0},"/"!==$.pathname&&"/login"!==$.pathname&&c.a.createElement(D.a,{variant:"permanent",classes:{paper:i.drawerPaper},open:!1},c.a.createElement(d.a,null,fe.map(function(n,a){return c.a.createElement(x.b,{to:n.link,className:i.menuLink,onClick:function(){n.onClick(),e.setSelectedTab(n.name)},key:a,ref:function(e){s.current[a]=e}},c.a.createElement(R.a,{title:n.name,placement:"right",key:n.name},c.a.createElement(f.a,{selected:t===n.name,button:!0,divider:a!==fe.length-1,className:i.permanentDrawerListItem},c.a.createElement(I.a,{className:i.justifyCenter},n.icon.desktop))))})))),c.a.createElement(V.a,{menuItems:fe.map(function(e){return{link:e.link,name:e.name,icon:e.icon.mobile,onClick:e.onClick}}),anchor:"left",open:b,selectedItem:t,onClose:pe}))}),pe=n(207),de=n(190);t.default=Object(s.a)(function(e){return{main:Object(r.a)({marginTop:"100px",marginLeft:e.spacing(9),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},e.breakpoints.down("sm"),{marginLeft:0})}},{withTheme:!0})(Object(o.memo)(function(e){var t=e.classes,n=Object(o.useState)(null),r=Object(a.a)(n,2),i=r[0],s=r[1],u=Object(o.useState)(null),m=Object(a.a)(u,2),h=m[0],p=m[1],d=Object(o.useCallback)(function(){Object(de.a)(),document.title="FitConnect - User Dashboard",s("Dashboard")},[s]),f=Object(o.useCallback)(function(e){p(function(){return e})},[p]);return c.a.createElement(o.Fragment,null,c.a.createElement(he,{selectedTab:i,setSelectedTab:s,messages:[]}),c.a.createElement(pe.a,{getPushMessageFromChild:f}),c.a.createElement("main",{className:l()(t.main)},c.a.createElement(j,{pushMessageToSnackbar:h,selectDashboard:d})))}))}}]);
//# sourceMappingURL=10.b840f01e.chunk.js.map