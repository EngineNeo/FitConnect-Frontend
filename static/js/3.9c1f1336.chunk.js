(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{150:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(916);function c(e){if(!e)return"#000";for(var t=0,n=0;n<e.length;n+=1)t=e.charCodeAt(n)+((t<<5)-t);for(var a="#",r=0;r<3;r+=1){a+="00".concat((t>>8*r&255).toString(16)).slice(-2)}return a}t.a=function(e){var t=e.className,n=e.iconSize,a=e.name||"Unknown User",i=2*n,l={backgroundColor:c(a),width:i,height:i,fontSize:n},s=function(e){var t=e.split(" ").filter(Boolean),n="";return t.length>0&&t[0]&&(n+=t[0][0]),t.length>1&&t[1]&&(n+=t[1][0]),n.toUpperCase()}(a);return r.a.createElement(o.a,{className:t,style:l},s)}},163:function(e,t,n){"use strict";var a=n(132),r=n(20),o=n(0),c=n.n(o),i=n(893),l=n(917),s=n(913),u=n(920),m=n(923),p=n(915),f=n(898),d=n(860),h=n(921),g=n(930),b=n(89),E=n(242),v=n.n(E),y=n(471),w=n.n(y),C=n(205),k=n.n(C),x=n(472),O=n.n(x),j=n(473),L=n.n(j),_=n(474),S=n.n(_),N=n(475),P=n.n(N),I=n(145),T=n.n(I);function R(e){var t=e.exercise,n=e.classes,a=e.onExerciseClick,r=function(e){switch(e.toLowerCase()){case"none":return w.a;case"barbell":case"dumbbells":return k.a;case"cables":return O.a;case"band":return L.a;case"kettlebell":return S.a;case"plate":return P.a;default:return w.a}}(t.equipment_name);return c.a.createElement(l.a,{item:!0,xs:6,sm:4,md:2,lg:1.714},c.a.createElement(s.a,{className:n.exerciseBox,onClick:function(){return a(t)}},c.a.createElement(r,{className:n.icon}),c.a.createElement(u.a,{variant:"subtitle2",style:{marginTop:"10px"}},t.name)))}t.a=Object(b.a)(function(e){return{searchContainer:{padding:e.spacing(2)},exerciseBox:{padding:e.spacing(1),textAlign:"center",width:"100%",aspectRatio:"1 / 1",border:"1px solid #ddd",backgroundColor:"transparent",margin:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"transform 0.2s ease-in-out",cursor:"default","&:hover":{transform:"scale(1.05)",cursor:"pointer"}},icon:{fontSize:40},gridContainer:{maxWidth:"calc(100% - 16px)",margin:"auto"},paginationContainer:{display:"flex",justifyContent:"center",padding:e.spacing(2)}}},{withTheme:!0})(function(e){var t=e.classes,n=(e.onExerciseClick,e.isDialogMode),b=e.onAddExercise,E=Object(o.useState)([]),y=Object(r.a)(E,2),w=y[0],C=y[1],k=Object(o.useState)(!1),x=Object(r.a)(k,2),O=x[0],j=x[1],L=Object(o.useState)(null),_=Object(r.a)(L,2),S=_[0],N=_[1],P=Object(o.useState)([]),I=Object(r.a)(P,2),A=I[0],B=I[1],F=Object(o.useState)(1),U=Object(r.a)(F,2),D=U[0],z=U[1],G=Object(o.useState)(""),W=Object(r.a)(G,2),M=W[0],q=W[1];Object(o.useEffect)(function(){i.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/FitConnect-Frontend"}).REACT_APP_API_BASE_URL,"fitConnect/exercises")).then(function(e){var t=e.data.map(function(e,t){return Object(a.a)({},e,{exercise_id:t+1})});C(t),B(t)}).catch(function(e){return console.log(e)})},[]),Object(o.useEffect)(function(){var e=w.filter(function(e){return e.name.toLowerCase().includes(M.toLowerCase())||e.muscle_group_name.toLowerCase().includes(M.toLowerCase())||e.equipment_name.toLowerCase().includes(M.toLowerCase())});B(e),z(1)},[M,w]);var V=function(e){N(e),j(!0)},Y=function(){j(!1),N(null)},H=14*D,J=H-14,X=A.slice(J,H);return c.a.createElement("div",{className:T()("container-fluid",t.containerFix,t.textWhite)},c.a.createElement(s.a,{className:t.searchContainer},c.a.createElement(l.a,{container:!0,spacing:2,alignItems:"center"},c.a.createElement(l.a,{item:!0,xs:!0},c.a.createElement(m.a,{fullWidth:!0,label:"Find an exercise",placeholder:"Search for exercises by name, muscle group, or equipment type",variant:"outlined",value:M,onChange:function(e){q(e.target.value)}})),c.a.createElement(l.a,{item:!0},c.a.createElement(p.a,{variant:"contained",color:"primary",startIcon:c.a.createElement(v.a,null)},"Search"))),c.a.createElement(l.a,{container:!0,spacing:3,className:t.gridContainer},X.map(function(e){return c.a.createElement(R,{key:e.name,exercise:e,classes:t,onExerciseClick:V,isDialogMode:n})})),c.a.createElement("div",{className:t.paginationContainer},c.a.createElement(f.a,{count:Math.ceil(A.length/14),page:D,onChange:function(e,t){z(t)},color:"primary"}))),c.a.createElement(d.a,{open:O,onClose:Y,"aria-labelledby":"exercise-dialog-title","aria-describedby":"exercise-dialog-description"},c.a.createElement(h.a,null,c.a.createElement(u.a,{variant:"h6",style:{marginBottom:"10px"}},"Exercise: ",S?S.name:""),c.a.createElement(u.a,{variant:"subtitle1"},"Muscle Group: ",S?S.muscle_group_name:""),c.a.createElement(u.a,{variant:"subtitle1"},"Equipment: ",S?S.equipment_name:""),c.a.createElement(u.a,{variant:"subtitle1",style:{marginTop:"10px"}},"Description: ",S?S.description:"")),c.a.createElement(g.a,null,n&&c.a.createElement(p.a,{onClick:function(){return e=S,void(n&&b&&b(e));var e},color:"primary"},"Add Exercise"),c.a.createElement(p.a,{onClick:Y,color:"primary"},"Close"))))})},187:function(e,t,n){"use strict";var a=n(165),r=n(0),o=n.n(r),c=n(7);t.a=function(e){var t=e.component,n=Object(a.a)(e,["component"]);return o.a.createElement(c.b,Object.assign({},n,{render:function(e){return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=Object.assign.apply(Object,[{}].concat(n));return o.a.createElement(e,r)}(t,e,n)}}))}},188:function(e,t,n){"use strict";var a=n(7),r=n(0),o=function(e){var t=e.pathname,n=e.search,a=e.hash;return t+(n?"?"+n:"")+(a?"#"+a:"")};t.a=function(){var e=Object(a.g)();Object(r.useEffect)(function(){return e.block(function(t,n){return"PUSH"!==n||o(t)!==o(e.location)})},[])}},189:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(38),c=n(918),i=n(943),l=n(906),s=n(887),u=n(936),m=n(928),p=n(885),f=n(920),d=n(89),h=n(173),g=n.n(h),b=n(886);t.a=Object(d.a)(function(e){return{closeIcon:{marginRight:e.spacing(.5)},headSection:{width:200},blackList:{backgroundColor:e.palette.common.black,height:"100%"},noDecoration:{textDecoration:"none !important"}}},{withTheme:!0})(function(e){var t=e.open,n=e.onClose,a=e.anchor,d=e.classes,h=e.menuItems,E=e.selectedItem,v=e.theme,y=Object(b.a)(v.breakpoints.up("sm"));return window.onresize=function(){y&&t&&n()},r.a.createElement(c.a,{variant:"temporary",open:t,onClose:n,anchor:a},r.a.createElement(i.a,{className:d.headSection},r.a.createElement(l.a,{style:{paddingTop:v.spacing(0),paddingBottom:v.spacing(0),height:"100%",justifyContent:"left"===a?"flex-start":"flex-end"},disableGutters:!0},r.a.createElement(s.a,{className:d.closeIcon},r.a.createElement(u.a,{onClick:n,"aria-label":"Close Navigation",size:"large"},r.a.createElement(g.a,{color:"primary"}))))),r.a.createElement(m.a,{className:d.blackList},h.map(function(e){return e.link?r.a.createElement(o.b,{key:e.name,to:e.link,className:d.noDecoration,onClick:n},r.a.createElement(l.a,{button:!0,selected:E===e.name,disableRipple:!0,disableTouchRipple:!0},r.a.createElement(s.a,null,e.icon),r.a.createElement(p.a,{primary:r.a.createElement(f.a,{variant:"subtitle1",className:"text-white"},e.name)}))):r.a.createElement(l.a,{button:!0,key:e.name,onClick:e.onClick},r.a.createElement(s.a,null,e.icon),r.a.createElement(p.a,{primary:r.a.createElement(f.a,{variant:"subtitle1",className:"text-white"},e.name)}))})))})},190:function(e,t,n){"use strict";var a=1/0;function r(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0&&a>e?(a=e,window.requestAnimationFrame(r),window.scrollTo(0,e-e/8)):a=1/0}t.a=function(){setTimeout(function(){r()},10)}},484:function(e,t,n){"use strict";var a=n(116),r=n(20),o=n(4),c=n(0),i=n.n(c),l=n(7),s=n(38),u=n(944),m=n(943),p=n(922),f=n(907),d=n(936),h=n(920),g=n(885),b=n(802),E=n(941),v=n(887),y=n(918),w=n(928),C=n(945),k=n(906),x=n(89),O=n(927),j=n(884),L=n(307),_=n.n(L),S=n(915),N=n(923),P=n(107),I=Object(P.a)(function(e){return{messageContainer:{display:"flex",flexDirection:"column",height:"100%"},messageList:{overflowY:"auto",flexGrow:1,marginBottom:"10px"},messageInputContainer:{borderTop:"1px solid grey",padding:"10px"}}}),T=function(e){var t=e.onBack,n=e.senderId,a=e.recipientId,o=Object(c.useState)(""),l=Object(r.a)(o,2),s=l[0],u=l[1],m=Object(c.useState)([]),p=Object(r.a)(m,2),f=p[0],d=p[1],g=Object(c.useState)(!1),b=Object(r.a)(g,2)[1],E=(Object(c.useRef)(null),I()),v=function(){null!==a&&fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/FitConnect-Frontend"}).REACT_APP_API_BASE_URL,"/fitConnect/get_messages/").concat(n,"/").concat(a,"/")).then(function(e){return e.json()}).then(function(e){return d(e.messages)}).catch(function(e){return console.error("Error fetching messages:",e)})};Object(c.useEffect)(function(){v(),b(function(e){return!e})},[n,a]);return i.a.createElement("div",{className:E.messageContainer},i.a.createElement(S.a,{onClick:t},"Back to Users"),i.a.createElement(w.a,{className:E.messageList},f.map(function(e,t){return i.a.createElement(k.a,{key:t,alignItems:"flex-start"},i.a.createElement(h.a,{variant:"subtitle2",component:"span",style:{fontWeight:"bold",marginRight:"10px"}},e.sender_name,":"),i.a.createElement(h.a,{variant:"body1",style:{wordBreak:"break-word"}},e.text))})),i.a.createElement("div",{className:E.messageInputContainer},i.a.createElement(N.a,{value:s,onChange:function(e){return u(e.target.value)},placeholder:"Type a message",fullWidth:!0,margin:"normal"}),i.a.createElement(S.a,{onClick:function(){""!==s.trim()?fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/FitConnect-Frontend"}).REACT_APP_API_BASE_URL,"/fitConnect/create_message/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sender_id:n,recipient_id:a,message_text:s})}).then(function(e){return e.json()}).then(function(e){"success"===e.status?(u(""),v()):console.error("Error sending message:",e)}).catch(function(e){return console.error("Error sending message:",e)}):console.error("Empty message cannot be sent")},variant:"contained",color:"primary"},"Send")))};function R(e){var t=e.classes,n=Object(c.useRef)(null),a=Object(c.useState)(!1),o=Object(r.a)(a,2),l=o[0],s=o[1],m=Object(c.useState)(null),f=Object(r.a)(m,2),b=f[0],E=f[1],v=Object(c.useState)([]),y=Object(r.a)(v,2),C=y[0],x=y[1],L=Object(c.useState)([]),S=Object(r.a)(L,2),N=S[0],P=S[1],I=Number(localStorage.getItem("user_id"));Object(c.useEffect)(function(){console.log("Sender ID:",I),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/FitConnect-Frontend"}).REACT_APP_API_BASE_URL,"/fitConnect/contactHistory/").concat(I,"/")).then(function(e){return e.json()}).then(function(e){return P(e)}).catch(function(e){return console.error("Error fetching users:",e)})},[]),console.log("Users:",N);var R=Object(c.useCallback)(function(){s(!l)},[l,s]),A=Object(c.useCallback)(function(e){n.current&&(n.current.contains(e.target)||e.target===n.current)||s(!1)},[s]),B=l?"scroll-playground":null;return i.a.createElement(c.Fragment,null,i.a.createElement(d.a,{onClick:R,"aria-label":"Open Messages","aria-describedby":B,color:"primary",size:"large"},i.a.createElement(_.a,null)),i.a.createElement(O.b,{disableScrollLock:!0,id:B,open:l,anchorEl:n.current,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},classes:{paper:t.popoverPaper},onClose:A},i.a.createElement(u.a,{position:"static",color:"inherit",className:t.noShadow},i.a.createElement(p.a,{pt:1,pl:2,pb:1,pr:1},i.a.createElement(h.a,{variant:"subtitle1"},"Messages")),i.a.createElement(j.a,{className:t.divider})),i.a.createElement(w.a,{dense:!0,className:t.tabContainer},null===b?N.map(function(e){return i.a.createElement(k.a,{key:e.user_id,button:!0,onClick:function(){return t=e.user_id,void fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/FitConnect-Frontend"}).REACT_APP_API_BASE_URL,"/fitConnect/get_messages/").concat(I,"/").concat(t,"/")).then(function(e){return e.json()}).then(function(e){x(e.messages),E(t)}).catch(function(e){return console.error("Error fetching messages:",e)});var t}},i.a.createElement(g.a,{primary:e.name}))}):i.a.createElement(T,{history:C,onBack:function(){E(null),x([])},senderId:I,recipientId:b}))))}R.defaultProps={messages:[]};var A=Object(x.a)(function(e){return{tabContainer:{overflowY:"auto",maxHeight:"calc(100vh - 100px)"},popoverPaper:Object(o.a)({width:"100%",maxWidth:700,maxHeight:"80vh",position:"fixed",bottom:0,left:0,marginLeft:e.spacing(2),marginRight:e.spacing(1),zIndex:1e3,overflowY:"auto"},e.breakpoints.down("md"),{maxWidth:500}),divider:{marginTop:-2},noShadow:{boxShadow:"none !important"}}},{withTheme:!0})(R),B=n(173),F=n.n(B),U={toolbar:{minWidth:240}};var D=Object(x.a)(U)(function(e){var t=e.classes,n=e.onClose,a=e.open;return i.a.createElement(y.a,{anchor:"right",open:a,variant:"temporary",onClose:n},i.a.createElement(m.a,{disableGutters:!0,className:t.toolbar},i.a.createElement(p.a,{pl:3,pr:3,display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},i.a.createElement(h.a,{variant:"h6"},"A Sidedrawer"),i.a.createElement(d.a,{onClick:n,color:"primary","aria-label":"Close Sidedrawer",size:"large"},i.a.createElement(F.a,null)))),i.a.createElement(j.a,null))}),z=n(189),G=n(886),W=n(310),M=n.n(W),q=n(48),V=n.n(q),Y=n(150),H=n(308),J=n.n(H),X=n(243),K=n.n(X),Q=n(206),Z=n.n(Q),$=n(205),ee=n.n($),te=n(309),ne=n.n(te);function ae(){ae=function(){return t};var e,t={},n=Object.prototype,a=n.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var o=t&&t.prototype instanceof b?t:b,c=Object.create(o.prototype),i=new N(a||[]);return r(c,"_invoke",{value:j(e,n,i)}),c}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var p="suspendedStart",f="suspendedYield",d="executing",h="completed",g={};function b(){}function E(){}function v(){}var y={};s(y,c,function(){return this});var w=Object.getPrototypeOf,C=w&&w(w(P([])));C&&C!==n&&a.call(C,c)&&(y=C);var k=v.prototype=b.prototype=Object.create(y);function x(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function O(e,t){function n(r,o,c,i){var l=m(e[r],e,o);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then(function(e){n("next",e,c,i)},function(e){n("throw",e,c,i)}):t.resolve(u).then(function(e){s.value=e,c(s)},function(e){return n("throw",e,c,i)})}i(l.arg)}var o;r(this,"_invoke",{value:function(e,a){function r(){return new t(function(t,r){n(e,a,t,r)})}return o=o?o.then(r,r):r()}})}function j(t,n,a){var r=p;return function(o,c){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw c;return{value:e,done:!0}}for(a.method=o,a.arg=c;;){var i=a.delegate;if(i){var l=L(i,a);if(l){if(l===g)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===p)throw r=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=d;var s=m(t,n,a);if("normal"===s.type){if(r=a.done?h:f,s.arg===g)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(r=h,a.method="throw",a.arg=s.arg)}}}function L(t,n){var a=n.method,r=t.iterator[a];if(r===e)return n.delegate=null,"throw"===a&&t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method)||"return"!==a&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+a+"' method")),g;var o=m(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var c=o.arg;return c?c.done?(n[t.resultName]=c.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):c:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function P(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(a.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return E.prototype=v,r(k,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:E,configurable:!0}),E.displayName=s(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===E||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,l,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},x(O.prototype),s(O.prototype,i,function(){return this}),t.AsyncIterator=O,t.async=function(e,n,a,r,o){void 0===o&&(o=Promise);var c=new O(u(e,n,a,r),o);return t.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},x(k),s(k,l,"Generator"),s(k,c,function(){return this}),s(k,"toString",function(){return"[object Generator]"}),t.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},t.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(a,r){return i.type="throw",i.arg=t,n.next=a,r&&(n.method="next",n.arg=e),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var l=a.call(c,"catchLoc"),s=a.call(c,"finallyLoc");if(l&&s){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(l){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;S(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,a){return this.delegate={iterator:P(t),resultName:n,nextLoc:a},"next"===this.method&&(this.arg=e),g}},t}var re="/images/logged_out/FitConnectLogo.png";t.a=Object(x.a)(function(e){var t,n;return{appBar:Object(o.a)({boxShadow:"none",backgroundColor:e.palette.common.darkBlack,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},e.breakpoints.down("sm"),{width:"100%",marginLeft:0}),appBarToolbar:(t={display:"flex",justifyContent:"space-between",backgroundColor:e.palette.common.darkBlack,paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},Object(o.a)(t,e.breakpoints.up("sm"),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),Object(o.a)(t,e.breakpoints.up("md"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),Object(o.a)(t,e.breakpoints.up("lg"),{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)}),t),logoContainer:{display:"flex",alignItems:"center"},accountAvatar:Object(o.a)({height:42,width:42,marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.down("sm"),{marginLeft:e.spacing(1.5),marginRight:e.spacing(1.5)}),drawerPaper:(n={height:"100%vh",whiteSpace:"nowrap",border:0,width:e.spacing(7),overflowX:"hidden",marginTop:e.spacing(8)},Object(o.a)(n,e.breakpoints.up("sm"),{width:e.spacing(9)}),Object(o.a)(n,"backgroundColor",e.palette.common.black),n),smBordered:Object(o.a)({},e.breakpoints.down("sm"),{borderRadius:"50% !important"}),menuLink:{textDecoration:"none",color:e.palette.text.primary},iconListItem:{width:"auto",borderRadius:e.shape.borderRadius,paddingTop:11,paddingBottom:11,marginLeft:e.spacing(1),marginRight:e.spacing(1)},textPrimary:{color:e.palette.primary.main},mobileItemSelected:{backgroundColor:"".concat(e.palette.primary.main," !important")},brandText:{fontFamily:"'Roboto', cursive",fontStyle:"bold",fontWeight:650,marginLeft:"10px"},username:{paddingLeft:0,paddingRight:e.spacing(2)},justifyCenter:{justifyContent:"center"},permanentDrawerListItem:{justifyContent:"center",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)}}},{withTheme:!0})(function(e){var t=e.selectedTab,n=e.setSelectedTab,o=e.messages,x=e.classes,O=e.theme,j=Object(c.useRef)([]),L=Object(c.useState)(!1),_=Object(r.a)(L,2),S=_[0],N=_[1],P=Object(c.useState)(!1),I=Object(r.a)(P,2),T=I[0],R=I[1],B=Object(G.a)(O.breakpoints.up("sm")),F=Object(c.useState)(""),U=Object(r.a)(F,2),W=U[0],q=U[1],H=Object(c.useState)(""),X=Object(r.a)(H,2),Q=X[0],$=X[1],te=Object(c.useState)(null),oe=Object(r.a)(te,2),ce=oe[0],ie=oe[1],le=function(){ie(null)},se=Object(l.h)(),ue=se.pathname,me=Object(l.g)();Object(c.useEffect)(function(){n({"/c/dashboard":"Dashboard","/c/coaches":"Coaches","/c/workoutplan":"Workout Plan"}[ue])},[ue]);var pe=Object(c.useCallback)(function(e){me.push(e),le()},[me]),fe=Object(c.useCallback)(Object(a.a)(ae().mark(function e(){var t,n,a;return ae().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("user_id"))){e.next=12;break}return e.prev=2,e.next=5,fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/FitConnect-Frontend"}).REACT_APP_API_BASE_URL,"fitConnect/logout/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:t})});case 5:(n=e.sent).ok?(localStorage.clear(),V.a.remove("authToken"),me.push(""),a=new Event("logout"),window.dispatchEvent(a)):(console.error("Logout failed"),console.log(n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error("Error during logout:",e.t0);case 12:case"end":return e.stop()}},e,null,[[2,9]])})),[me]);Object(c.useEffect)(function(){var e=localStorage.getItem("first_name"),t=localStorage.getItem("last_name");e&&q(e),t&&$(t)},[]);var de=Object(c.useCallback)(function(){N(!0)},[N]),he=Object(c.useCallback)(function(){N(!1)},[N]),ge=Object(c.useCallback)(function(){R(!1)},[R]),be=[{link:"/c/dashboard",name:"Dashboard",onClick:he,icon:{desktop:i.a.createElement(J.a,{className:"Dashboard"===t?x.textPrimary:"text-white",fontSize:"small"}),mobile:i.a.createElement(J.a,{className:"text-white"})}},{link:"/c/coaches",name:"Coaches",onClick:he,icon:{desktop:i.a.createElement(Z.a,{className:"Coaches"===t?x.textPrimary:"text-white",fontSize:"small"}),mobile:i.a.createElement(Z.a,{className:"text-white"})}},{link:"/c/workoutplan",name:"Workout Plan",onClick:he,icon:{desktop:i.a.createElement(ee.a,{className:"Workout Plan"===t?x.textPrimary:"text-white",fontSize:"small"}),mobile:i.a.createElement(ee.a,{className:"text-white"})}}],Ee=[{link:"/c/dashboard",name:"Dashboard",onClick:function(){return pe("/c/dashboard")},icon:{desktop:i.a.createElement(J.a,{className:"text-white",fontSize:"small"}),mobile:i.a.createElement(J.a,{className:"text-white"})}},{link:"/c/account",name:"Account",onClick:function(){return pe("/c/account")},icon:{desktop:i.a.createElement(ne.a,{className:"text-white",fontSize:"small"}),mobile:i.a.createElement(ne.a,{className:"text-white"})}},{name:"Logout",onClick:fe,icon:{desktop:i.a.createElement(M.a,{className:"text-white",fontSize:"small"}),mobile:i.a.createElement(M.a,{className:"text-white"})}}];return i.a.createElement(c.Fragment,null,i.a.createElement(u.a,{position:"fixed",className:x.appBar},i.a.createElement(m.a,{className:x.appBarToolbar},i.a.createElement(p.a,{display:"flex",alignItems:"center"},i.a.createElement(f.a,{smUp:!0},i.a.createElement(p.a,{mr:1},i.a.createElement(d.a,{"aria-label":"Open Navigation",onClick:de,color:"primary",size:"large"},i.a.createElement(K.a,null)))),i.a.createElement(f.a,{smDown:!0},i.a.createElement("div",{className:x.logoContainer},i.a.createElement(s.b,{to:"/"},i.a.createElement("img",{alt:"FitConnect",src:re,style:{width:"40px"}})),i.a.createElement(s.b,{to:"/",style:{textDecoration:"none"}},i.a.createElement(h.a,{variant:"h4",className:x.brandText,display:"inline",color:"secondary"},"FitConnect"))))),i.a.createElement(p.a,{display:"flex",justifyContent:"flex-end",alignItems:"center",width:"100%"},i.a.createElement(A,{messages:o}),i.a.createElement(d.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){ie(e.currentTarget)},color:"inherit"},i.a.createElement(Y.a,{className:x.accountAvatar,iconSize:23,name:"".concat(W," ").concat(Q)}),B&&i.a.createElement(g.a,{className:x.username,primary:i.a.createElement(h.a,{color:"textPrimary"},W||"User")})),i.a.createElement(b.a,{id:"menu-appbar",anchorEl:ce,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(ce),onClose:le,style:{marginTop:"45px"}},Ee.map(function(e){return i.a.createElement(E.a,{key:e.name,onClick:e.onClick},i.a.createElement(v.a,null,e.icon.desktop),i.a.createElement(h.a,{variant:"inherit"},e.name))}))),i.a.createElement(D,{open:T,onClose:ge}))),i.a.createElement(f.a,{smDown:!0},"/"!==se.pathname&&"/login"!==se.pathname&&i.a.createElement(y.a,{variant:"permanent",classes:{paper:x.drawerPaper},open:!1},i.a.createElement(w.a,null,be.map(function(n,a){return i.a.createElement(s.b,{to:n.link,className:x.menuLink,onClick:function(){n.onClick(),e.setSelectedTab(n.name)},key:a,ref:function(e){j.current[a]=e}},i.a.createElement(C.a,{title:n.name,placement:"right",key:n.name},i.a.createElement(k.a,{selected:t===n.name,button:!0,divider:a!==be.length-1,className:x.permanentDrawerListItem},i.a.createElement(v.a,{className:x.justifyCenter},n.icon.desktop))))})))),i.a.createElement(z.a,{menuItems:be.map(function(e){return{link:e.link,name:e.name,icon:e.icon.mobile,onClick:e.onClick}}),anchor:"left",open:S,selectedItem:t,onClose:he}))})}}]);
//# sourceMappingURL=3.9c1f1336.chunk.js.map