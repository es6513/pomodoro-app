(this["webpackJsonppomodoro-app"]=this["webpackJsonppomodoro-app"]||[]).push([[0],{34:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),c=a.n(n),i=a(25),s=a.n(i),l=(a(34),a(3)),o=a(8),u=a(6),d=a(2),m=a(43),f=1500,b=300,j=Object(m.a)(),O={taskLists:new Array(5).fill(),timer:{currentId:j,isCountDown:!1}};O.taskLists=O.taskLists.map((function(e,t){return{id:0===t?j:Object(m.a)(),isArchived:!1,isDone:!1,isBreak:2===t,taskTitle:"Task"+String(t+1),estimatedTomato:t+1,estimatedWorkTime:(t+1)*f,workTime:3===t?1498:0,breakTime:3===t?298:0,finishTomato:3===t?5:0}}));var h=O,p={ADD_TASK:"ADD_TASK",UPDATE_TASK_STATE:"UPDATE_TASK_STATE",SET_CURRENT_TASK:"SET_CURRENT_TASK",SET_IS_COUNT_DOWN:"SET_COUNT_DOWN",SET_IS_BREAK:"SET_IS_BREAK",SET_WORK_TIME:"SET_WORK_TIME",SET_BREAK_TIME:"SET_BREAK_TIME"},_=function(e,t){switch(t.type){case p.ADD_TASK:return Object(d.a)(Object(d.a)({},e),{},{taskLists:[].concat(Object(u.a)(e.taskLists),[t.payload])});case p.UPDATE_TASK_STATE:var a=t.payload,r=a.id,n=Object(o.a)(a,["id"]),c=e.taskLists.map((function(e){return e.id===r?Object(d.a)(Object(d.a)({},e),n):e}));return Object(d.a)(Object(d.a)({},e),{},{taskLists:c});case p.SET_CURRENT_TASK:var i=t.payload.id;return Object(d.a)(Object(d.a)({},e),{},{timer:Object(d.a)(Object(d.a)({},e.timer),{},{currentId:i})});case p.SET_IS_COUNT_DOWN:var s=t.payload.isCountDown;return Object(d.a)(Object(d.a)({},e),{},{timer:Object(d.a)(Object(d.a)({},e.timer),{},{isCountDown:s})});case p.SET_IS_BREAK:var l=t.payload,m=l.id,f=l.isBreak,b=e.taskLists.map((function(e){return e.id===m?Object(d.a)(Object(d.a)({},e),{},{isBreak:f}):e}));return Object(d.a)(Object(d.a)({},e),{},{taskLists:b});case p.SET_WORK_TIME:var j=t.payload,O=j.id,h=j.workTime,_=e.taskLists.map((function(e){return e.id===O?Object(d.a)(Object(d.a)({},e),{},{workTime:h}):e}));return Object(d.a)(Object(d.a)({},e),{},{taskLists:_});case p.SET_BREAK_TIME:var v=t.payload,x=v.id,y=v.breakTime,g=e.taskLists.map((function(e){return e.id===x?Object(d.a)(Object(d.a)({},e),{},{breakTime:y}):e}));return Object(d.a)(Object(d.a)({},e),{},{taskLists:g});default:return e}},v=c.a.createContext({}),x=function(e){var t=e.children,a=Object(n.useReducer)(_,h),c=Object(l.a)(a,2),i={taskState:c[0],taskDispatch:c[1]};return Object(r.jsx)(v.Provider,{value:i,children:t})},y=(v.Consumer,{ROOT_CLASS:"pomodoro"}),g=function(e){return{type:p.ADD_TASK,payload:e}},E={addTask:g,updateTaskState:function(e){return{type:p.UPDATE_TASK_STATE,payload:e}},setCurrentTask:function(e){return{type:p.SET_CURRENT_TASK,payload:e}},setIsCountDown:function(e){return{type:p.SET_IS_COUNT_DOWN,payload:e}},setIsBreak:function(e){return{type:p.SET_IS_BREAK,payload:e}},setWorkTime:function(e){return{type:p.SET_WORK_TIME,payload:e}},setBreakTime:function(e){return{type:p.SET_BREAK_TIME,payload:e}}};var T=function(e){var t=e.headTag,a=e.children,r=Object(o.a)(e,["headTag","children"]);return c.a.createElement(t,Object(d.a)({},r),a)};function k(e){var t=e.className,a=e.children,n=e.handleClick,c=Object(o.a)(e,["className","children","handleClick"]);return Object(r.jsx)("button",Object(d.a)(Object(d.a)({className:t,onClick:n},c),{},{children:a}))}var C=k;k.defaultProps={className:"",handleClick:function(){return null}};var N=a.p+"static/media/start_gray.9178f41d.svg",S=a.p+"static/media/pause_gray.f4bb90a5.svg",w=a.p+"static/media/reset_gray.43dd4e5a.svg",A=y.ROOT_CLASS;function D(e){var t=e.task,a=e.className,c=e.isCountDown,i=e.handleCountDown,s=e.handleBreak,l=e.handleWorkTIme,o=e.handleBreakTIme,u=e.handleUpdateTask,d=t.id,m=t.workTime,j=t.breakTime,O=t.isBreak,h=t.finishTomato,p=Math.round(753.96),_=function(e){return(e*p).toFixed(2)}(O?j/b:m/f),v=function(e){var t=new Date(0);return t.setSeconds(e),t.toISOString().substr(14,5)},x=v(O?b-j:f-m),y=Object(n.useRef)(null),g=function(e,t){return e===t},E=O?g(j,b):g(m,f);Object(n.useEffect)((function(){return c&&(O||E?O&&!E?y.current=setTimeout((function(){o({id:d,breakTime:j+1})}),1e3):!O&&E?(i(!1),s({id:d,isBreak:!0}),l({id:d,workTime:0}),u({id:d,finishTomato:h+1})):O&&E&&(i(!1),s({id:d,isBreak:!1}),o({id:d,breakTime:0})):y.current=setTimeout((function(){l({id:d,workTime:m+1})}),1e3)),function(){clearTimeout(y.current)}}),[d,O,c,m,j,h,E,l,s,o,i,u]);return Object(r.jsxs)("div",{className:a,children:[Object(r.jsx)("div",{className:"".concat(A,"__timer"),children:Object(r.jsxs)("svg",{width:"350",height:"300",children:[Object(r.jsx)("circle",{cx:"175",cy:"150",r:"120",fill:"#fcfcfc",stroke:O?"#b5e254":"#acacac",strokeWidth:"40"}),Object(r.jsx)("circle",{cx:"175",cy:"150",r:"120",fill:"none",stroke:O?"#acacac":"#ea5548",strokeWidth:"40",strokeDasharray:"".concat(_,",10000"),transform:"rotate(-90,175,150)"}),Object(r.jsx)("text",{textAnchor:"middle",x:"175",y:"150",children:x})]})}),Object(r.jsxs)("div",{className:"".concat(A,"__button-group"),children:[Object(r.jsx)(C,{"data-size":"medium","data-radius":"rounded","data-after":"START",type:"button",className:"".concat(A,"__timer-button"),handleClick:function(){i(!0)},disabled:c,children:Object(r.jsx)("img",{src:N,alt:"start",className:"".concat(A,"__timer-button__icon")})}),Object(r.jsx)(C,{"data-size":"medium","data-radius":"rounded","data-after":"PAUSE",type:"button",className:"".concat(A,"__timer-button"),handleClick:function(){i(!1)},disabled:!c,children:Object(r.jsx)("img",{src:S,alt:"pause",className:"".concat(A,"__timer-button__icon")})}),Object(r.jsx)(C,{"data-size":"medium","data-radius":"rounded","data-after":"RESET",type:"button",className:"".concat(A,"__timer-button"),handleClick:function(){O?o({id:d,breakTime:0}):l({id:d,workTime:0})},disabled:c||(O?0===j:0===m),children:Object(r.jsx)("img",{src:w,alt:"reset",className:"".concat(A,"__timer-button__icon")})})]})]})}var B=D;function I(e){var t=e.className,a=e.dataSize,n=e.percentage,c=Object(o.a)(e,["className","dataSize","percentage"]),i="small"===a?10:15,s=i/4,l=i,u=i/2-1,m=i/2-1,f=Math.round(2*s*3.1415),b=function(e){return(e*f).toFixed(2)}(n);return Object(r.jsx)("svg",Object(d.a)(Object(d.a)({width:i,height:i,className:t},c),{},{children:Object(r.jsx)("circle",{r:s,cx:u,cy:m,className:"circleSector",strokeWidth:l/2,strokeDasharray:"".concat(b," ").concat(f)})}))}D.defaultProps={className:""};var R=I;I.defaultProps={className:"",dataSize:"small"};var F=y.ROOT_CLASS;function P(e){var t=e.task,a=e.estimatedTomato,n=e.finishTomato,c=(e.className,e.dataSize),i=Object(o.a)(e,["task","estimatedTomato","finishTomato","className","dataSize"]),s=t.workTime/f;return Object(r.jsx)("div",{children:a>n?Object(r.jsx)("div",Object(d.a)(Object(d.a)({className:"".concat(F,"__circle-group")},i),{},{children:new Array(a).fill().map((function(e,t){return Object(r.jsx)(R,{className:"".concat(F,"__circle"),dataSize:c,percentage:0},t)})).map((function(e,t){return t<n?Object(r.jsx)(R,{className:"".concat(F,"__circle"),dataSize:c,percentage:1},t):e})).map((function(e,t){return t===n?Object(r.jsx)(R,{className:"".concat(F,"__circle"),dataSize:c,percentage:s},t):e}))})):a<=n?Object(r.jsx)("div",Object(d.a)(Object(d.a)({className:"".concat(F,"__circle-group")},i),{},{children:new Array(n).fill().map((function(e,t){return Object(r.jsx)(R,{className:"".concat(F,"__circle"),dataSize:c,percentage:1},t)})).concat([s>0?Object(r.jsx)(R,{className:"".concat(F,"__circle"),dataSize:c,percentage:s},n):null])})):void 0})}var L=P;function z(e){var t=e.className,a=e.handleArchive,c=e.handleClose;return Object(n.useEffect)((function(){return window.addEventListener("click",c),function(){window.removeEventListener("click",c)}}),[c]),Object(r.jsx)("div",{className:t,children:Object(r.jsxs)("div",{className:"light-box-content",children:[Object(r.jsx)("div",{className:"light-box-header",children:Object(r.jsx)(T,{headTag:"h3",children:"Archive Task"})}),Object(r.jsx)("div",{className:"light-box-body",children:"Are you sure you want to archive this task?"}),Object(r.jsxs)("div",{className:"light-box-button-group",children:[Object(r.jsx)(C,{"data-size":"big","data-color":"gray","data-radius":"general",handleClick:c,children:"CANCEL"}),Object(r.jsx)(C,{"data-size":"big","data-color":"primary","data-radius":"general",handleClick:function(){a(),c()},children:"ARCHIVE"})]})]})})}P.defaultProps={className:"",dataSize:"small"};var M=z;function W(e){var t=e.className,a=e.handleDond,c=e.handleClose;return Object(n.useEffect)((function(){return window.addEventListener("click",c),function(){window.removeEventListener("click",c)}}),[c]),Object(r.jsx)("div",{className:t,children:Object(r.jsxs)("div",{className:"light-box-content",children:[Object(r.jsx)("div",{className:"light-box-header",children:Object(r.jsx)(T,{headTag:"h3",children:"Hooray!"})}),Object(r.jsxs)("div",{className:"light-box-body",children:[Object(r.jsx)("p",{children:"You can check this task in done list."}),Object(r.jsx)("br",{}),Object(r.jsx)("p",{children:"Don\u2019t forget to select next task to continue."})]}),Object(r.jsxs)("div",{className:"light-box-button-group",children:[Object(r.jsx)(C,{"data-size":"big","data-color":"gray","data-radius":"general",handleClick:c,children:"CANCEL"}),Object(r.jsx)(C,{"data-size":"big","data-color":"primary","data-radius":"general",handleClick:function(){a(),c()},children:"SELECT NEXT TASK"})]})]})})}z.defaultProps={className:""};var K=W;W.defaultProps={className:""};var H=a.p+"static/media/tomato_small_color.1066034a.svg",U=a.p+"static/media/complete.7694ebc4.svg";var V=function(e){var t=Object(n.useState)(e),a=Object(l.a)(t,2),r=a[0],c=a[1];return[r,function(){c(!0)},function(){c(!1)}]},G=y.ROOT_CLASS;var J=function(){var e=Object(n.useContext)(v),t=e.taskState,a=t.taskLists,c=t.timer,i=c.currentId,s=c.isCountDown,o=e.taskDispatch,u=V(!1),d=Object(l.a)(u,3),m=d[0],f=d[1],b=d[2],j=i?a.find((function(e){return e.id===i})):null,O=function(e){var t={isCountDown:e};o(E.setIsCountDown(t))},h=function(e){o(E.setIsBreak(e))},p=function(e){o(E.setWorkTime(e))},_=function(e){o(E.setBreakTime(e))},x=function(e){o(E.updateTaskState(e))},y=function(e){x({id:i,isDone:!0}),function(){var e=a.filter((function(e){return!e.isDone&&!e.isArchived})).filter((function(e){return e.id!==i}));if(e.length){var t={id:e[0].id};o(E.setCurrentTask(t))}else o(E.setCurrentTask({id:null}))}()};return Object(r.jsxs)("div",{className:"".concat(G,"__modal-timer"),children:[function(e){return e?Object(r.jsxs)("div",{className:"".concat(G,"__modal-timer__content"),children:[Object(r.jsx)(T,{headTag:"h1",children:e.taskTitle}),e.isBreak?Object(r.jsx)("div",{className:"".concat(G,"__modal-timer__break-label"),children:"BREAK"}):Object(r.jsx)("div",{className:"".concat(G,"__modal-timer__circle"),children:Object(r.jsx)(L,{dataSize:"big",estimatedTomato:e.estimatedTomato,finishTomato:e.finishTomato,task:e})}),Object(r.jsx)(B,{task:e,className:"".concat(G,"__modal-timer__timer"),isCountDown:s,handleCountDown:O,handleBreak:h,handleWorkTIme:p,handleBreakTIme:_,handleUpdateTask:x}),Object(r.jsxs)(C,{type:"button",disabled:s,handleClick:f,className:"".concat(G,"__undone-button"),children:["TASK COMPLETE",Object(r.jsx)("img",{alt:"complete",src:U})]})]}):Object(r.jsxs)("div",{className:"".concat(G,"__modal-timer__content ").concat(G,"__modal-timer__content--empty"),children:[Object(r.jsxs)("div",{className:"".concat(G,"__modal-timer__empty-tomato"),children:[Object(r.jsx)(T,{headTag:"h2",children:"PODOMORO"}),Object(r.jsx)("img",{alt:"emptyTomato",src:H})]}),Object(r.jsxs)("div",{className:"".concat(G,"__modal-timer__empty-text"),children:["You don\u2019t have any task now,",Object(r.jsx)("br",{})," please add task first!"]})]})}(j),Object(r.jsx)("footer",{children:"POMODORO"}),m?Object(r.jsx)(K,{className:"".concat(G,"__light-box"),handleDond:function(){return y()},handleClose:b}):null]})},Y=a(5),Z=a(15),q=a.n(Z);function X(e){var t=e.className,a=e.children;return Object(r.jsx)("ul",{className:t,children:a})}var Q=X;function $(e){var t=e.className,a=e.handelClick,n=Object(o.a)(e,["className","handelClick"]);return Object(r.jsx)("li",Object(d.a)({className:t,onClick:a},n))}X.defaultProps={className:""};var ee=$;$.defaultProps={className:"",handelClick:function(){return null}};var te=a(19);function ae(e){var t=e.to,a=e.activeClassName,n=Object(o.a)(e,["to","activeClassName"]);return Object(r.jsx)(te.b,Object(d.a)({to:t,activeClassName:a},n))}var re=ae;ae.defaultProps={activeClassName:""};var ne=y.ROOT_CLASS;var ce=function(e){return function(t){return Object(r.jsx)("div",{className:"".concat(ne,"__aside-panel__layout"),children:Object(r.jsx)(e,Object(d.a)({},t))})}},ie=a(16);function se(){return(se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function le(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var oe=n.createElement("g",{id:"\\u30B0\\u30EB\\u30FC\\u30D7_177","data-name":"\\u30B0\\u30EB\\u30FC\\u30D7 177",transform:"translate(-1321 -953)"},n.createElement("circle",{id:"\\u6955\\u5186\\u5F62_14","data-name":"\\u6955\\u5186\\u5F62 14",cx:12.5,cy:12.5,r:12.5,transform:"translate(1321 953)",fill:"#ea5548"}),n.createElement("rect",{id:"\\u9577\\u65B9\\u5F62_27","data-name":"\\u9577\\u65B9\\u5F62 27",width:4.688,height:6.25,rx:2.344,transform:"translate(1342.629 953) rotate(45)",fill:"#316901"}));function ue(e,t){var a=e.title,r=e.titleId,c=le(e,["title","titleId"]);return n.createElement("svg",se({width:25,height:25,viewBox:"0 0 25 25",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,oe)}var de=n.forwardRef(ue),me=(a.p,a.p+"static/media/arrow.0bb4ded5.svg");function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function be(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var je=n.createElement("style",{type:"text/css"},"\n\t.st0{fill:none;}\n\t.st1{fill:#FCFCFC;}\n"),Oe=n.createElement("g",{id:"\\u30B0\\u30EB\\u30FC\\u30D7_187",transform:"translate(-1120)"},n.createElement("rect",{id:"\\u9577\\u65B9\\u5F62_24",x:1120,y:0,className:"st0",width:80,height:80}),n.createElement("g",{id:"\\u30B0\\u30EB\\u30FC\\u30D7_25"},n.createElement("g",{id:"\\u6955\\u5186\\u5F62_16",transform:"translate(1148 28)"},n.createElement("circle",{className:"st0",cx:12.5,cy:12.5,r:12.5}),n.createElement("path",{className:"st1",d:"M12.5,25C5.6,25,0,19.4,0,12.5C0,5.6,5.6,0,12.5,0S25,5.6,25,12.5C25,19.4,19.4,25,12.5,25z M12.5,3 C7.3,3,3,7.3,3,12.5c0,5.2,4.3,9.5,9.5,9.5s9.5-4.3,9.5-9.5C22,7.3,17.7,3,12.5,3z"})),n.createElement("path",{className:"st1",d:"M1164.5,39h-2.5v-2.5c0-0.8-0.7-1.5-1.5-1.5s-1.5,0.7-1.5,1.5V39h-2.5c-0.8,0-1.5,0.7-1.5,1.5 s0.7,1.5,1.5,1.5h2.5v2.5c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5V42h2.5c0.8,0,1.5-0.7,1.5-1.5S1165.3,39,1164.5,39z"})));function he(e,t){var a=e.title,r=e.titleId,c=be(e,["title","titleId"]);return n.createElement("svg",fe({id:"\\u30EC\\u30A4\\u30E4\\u30FC_1",x:"0px",y:"0px",viewBox:"0 0 80 80",style:{enableBackground:"new 0 0 80 80"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,je,Oe)}var pe=n.forwardRef(he);a.p;function _e(){return(_e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function ve(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var xe=n.createElement("style",{type:"text/css"},"\n\t.st0{fill:none;}\n\t.st1{fill:#FCFCFC;}\n"),ye=n.createElement("g",{id:"\\u30B0\\u30EB\\u30FC\\u30D7_182",transform:"translate(-33 -8501)"},n.createElement("rect",{id:"\\u9577\\u65B9\\u5F62_25",x:33,y:8501,className:"st0",width:80,height:80}),n.createElement("g",null,n.createElement("path",{className:"st1",d:"M64.5,8536h18c0.8,0,1.5-0.7,1.5-1.5s-0.7-1.5-1.5-1.5h-18c-0.8,0-1.5,0.7-1.5,1.5S63.7,8536,64.5,8536z"}),n.createElement("path",{className:"st1",d:"M82.5,8541h-18c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h18c0.8,0,1.5-0.7,1.5-1.5S83.3,8541,82.5,8541z"}),n.createElement("path",{className:"st1",d:"M82.5,8549h-18c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h18c0.8,0,1.5-0.7,1.5-1.5S83.3,8549,82.5,8549z"})));function ge(e,t){var a=e.title,r=e.titleId,c=ve(e,["title","titleId"]);return n.createElement("svg",_e({id:"\\u30EC\\u30A4\\u30E4\\u30FC_1",x:"0px",y:"0px",viewBox:"0 0 80 80",style:{enableBackground:"new 0 0 80 80"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,xe,ye)}var Ee=n.forwardRef(ge);a.p;function Te(){return(Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function ke(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var Ce=n.createElement("style",{type:"text/css"},"\n\t.st0{fill:none;}\n\t.st1{fill:#EA5548;}\n\t.st2{fill:#316901;}\n"),Ne=n.createElement("g",{id:"\\u30B0\\u30EB\\u30FC\\u30D7_194",transform:"translate(-604 -8728)"},n.createElement("g",{id:"\\u6955\\u5186\\u5F62_17",transform:"translate(604 8728)"},n.createElement("circle",{className:"st0",cx:8,cy:8,r:8}),n.createElement("path",{className:"st1",d:"M8,16c-4.4,0-8-3.6-8-8c0-4.4,3.6-8,8-8s8,3.6,8,8C16,12.4,12.4,16,8,16z M8,2C4.7,2,2,4.7,2,8 c0,3.3,2.7,6,6,6s6-2.7,6-6C14,4.7,11.3,2,8,2z"})),n.createElement("polygon",{className:"st2",points:"610.6,8739.3 607.8,8736.4 609.2,8735 610.6,8736.4 614.2,8732.9 615.6,8734.3  "}));function Se(e,t){var a=e.title,r=e.titleId,c=ke(e,["title","titleId"]);return n.createElement("svg",Te({id:"\\u30EC\\u30A4\\u30E4\\u30FC_1",x:"0px",y:"0px",viewBox:"0 0 16 16",style:{enableBackground:"new 0 0 16 16"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,Ce,Ne)}var we=n.forwardRef(Se);a.p;function Ae(){return(Ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function De(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var Be=n.createElement("g",{id:"\\u30B0\\u30EB\\u30FC\\u30D7_188","data-name":"\\u30B0\\u30EB\\u30FC\\u30D7 188",transform:"translate(-534 -8525)"},n.createElement("rect",{id:"\\u9577\\u65B9\\u5F62_20","data-name":"\\u9577\\u65B9\\u5F62 20",width:50,height:50,transform:"translate(534 8525)",fill:"none"}),n.createElement("path",{id:"\\u591A\\u89D2\\u5F62_2","data-name":"\\u591A\\u89D2\\u5F62 2",d:"M9.168,1.248a1,1,0,0,1,1.664,0l8.131,12.2A1,1,0,0,1,18.131,15H1.869a1,1,0,0,1-.832-1.555Z",transform:"translate(569 8540) rotate(90)",fill:"#acacac"}));function Ie(e,t){var a=e.title,r=e.titleId,c=De(e,["title","titleId"]);return n.createElement("svg",Ae({width:50,height:50,viewBox:"0 0 50 50",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,Be)}var Re=n.forwardRef(Ie);a.p;function Fe(){return(Fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function Pe(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var Le=n.createElement("g",{id:"\\u30B0\\u30EB\\u30FC\\u30D7_191","data-name":"\\u30B0\\u30EB\\u30FC\\u30D7 191",transform:"translate(-534 -8627)"},n.createElement("rect",{id:"\\u9577\\u65B9\\u5F62_20","data-name":"\\u9577\\u65B9\\u5F62 20",width:50,height:50,transform:"translate(534 8627)",fill:"none"}),n.createElement("path",{id:"\\u591A\\u89D2\\u5F62_2","data-name":"\\u591A\\u89D2\\u5F62 2",d:"M9.168,1.248a1,1,0,0,1,1.664,0l8.131,12.2A1,1,0,0,1,18.131,15H1.869a1,1,0,0,1-.832-1.555Z",transform:"translate(569 8642) rotate(90)",fill:"#ea5548"}));function ze(e,t){var a=e.title,r=e.titleId,c=Pe(e,["title","titleId"]);return n.createElement("svg",Fe({width:50,height:50,viewBox:"0 0 50 50",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,Le)}var Me=n.forwardRef(ze);a.p;function We(){return(We=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function Ke(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var He=n.createElement("style",{type:"text/css"},"\n\t.st0{fill:none;}\n\t.st1{fill:#ACACAC;}\n"),Ue=n.createElement("g",{id:"\\u30B0\\u30EB\\u30FC\\u30D7_196",transform:"translate(-659 -8525)"},n.createElement("rect",{id:"\\u9577\\u65B9\\u5F62_136",x:659,y:8525,className:"st0",width:50,height:50}),n.createElement("g",null,n.createElement("path",{className:"st1",d:"M680.5,8543H678c-0.6,0-1,0.4-1,1v13c0,0.6,0.4,1,1,1h2.5c0.6,0,1-0.4,1-1v-13 C681.5,8543.4,681.1,8543,680.5,8543z"}),n.createElement("path",{className:"st1",d:"M690,8543h-2.5c-0.6,0-1,0.4-1,1v13c0,0.6,0.4,1,1,1h2.5c0.6,0,1-0.4,1-1v-13C691,8543.4,690.6,8543,690,8543 z"})));function Ve(e,t){var a=e.title,r=e.titleId,c=Ke(e,["title","titleId"]);return n.createElement("svg",We({id:"\\u30EC\\u30A4\\u30E4\\u30FC_1",x:"10px",y:"10px",viewBox:"0 0 50 50",style:{enableBackground:"new 0 0 50 50"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,He,Ue)}var Ge=n.forwardRef(Ve);a.p;function Je(){return(Je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function Ye(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var Ze=n.createElement("style",{type:"text/css"},"\n\t.st0{fill:none;}\n\t.st1{fill:#EA5548;}\n"),qe=n.createElement("g",{id:"\\u30B0\\u30EB\\u30FC\\u30D7_192",transform:"translate(-659 -8627)"},n.createElement("rect",{id:"\\u9577\\u65B9\\u5F62_21",x:659,y:8627,className:"st0",width:50,height:50}),n.createElement("g",null,n.createElement("path",{className:"st1",d:"M680.5,8645H678c-0.6,0-1,0.4-1,1v13c0,0.6,0.4,1,1,1h2.5c0.6,0,1-0.4,1-1v-13 C681.5,8645.4,681.1,8645,680.5,8645z"}),n.createElement("path",{className:"st1",d:"M690,8645h-2.5c-0.6,0-1,0.4-1,1v13c0,0.6,0.4,1,1,1h2.5c0.6,0,1-0.4,1-1v-13C691,8645.4,690.6,8645,690,8645 z"})));function Xe(e,t){var a=e.title,r=e.titleId,c=Ye(e,["title","titleId"]);return n.createElement("svg",Je({id:"\\u30EC\\u30A4\\u30E4\\u30FC_1",x:"0px",y:"0px",viewBox:"0 0 50 50",style:{enableBackground:"new 0 0 50 50"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,Ze,qe)}var Qe=n.forwardRef(Xe);a.p;function $e(){return($e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function et(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var tt=n.createElement("style",{type:"text/css"},"\n\t.st0{fill:none;}\n\t.st1{fill:#ACACAC;}\n"),at=n.createElement("g",{id:"\\u30B0\\u30EB\\u30FC\\u30D7_195",transform:"translate(-784 -8525)"},n.createElement("rect",{id:"\\u9577\\u65B9\\u5F62_137",x:784,y:8525,className:"st0",width:50,height:50}),n.createElement("path",{className:"st1",d:"M809,8540c-5.5,0-10,4.5-10,10h-2.8c-0.1,0-0.3,0.1-0.4,0.1c-0.2,0.2-0.2,0.5,0,0.7l4.8,4.8 c0.2,0.2,0.5,0.2,0.7,0l4.8-4.8c0.1-0.1,0.1-0.2,0.1-0.4c0-0.3-0.2-0.5-0.5-0.5H803c0-3.3,2.7-6,6-6s6,2.7,6,6s-2.7,6-6,6 c-1.1,0-2,0.9-2,2s0.9,2,2,2c5.5,0,10-4.5,10-10S814.5,8540,809,8540z"}));function rt(e,t){var a=e.title,r=e.titleId,c=et(e,["title","titleId"]);return n.createElement("svg",$e({id:"\\u30EC\\u30A4\\u30E4\\u30FC_1",x:"0px",y:"0px",viewBox:"0 0 50 50",style:{enableBackground:"new 0 0 50 50"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,tt,at)}var nt=n.forwardRef(rt);a.p;function ct(){return(ct=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function it(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var st=n.createElement("style",{type:"text/css"},"\n\t.st0{fill:none;}\n\t.st1{fill:#EA5548;}\n"),lt=n.createElement("g",{id:"\\u30B0\\u30EB\\u30FC\\u30D7_193",transform:"translate(-784 -8627)"},n.createElement("rect",{id:"\\u9577\\u65B9\\u5F62_22",x:784,y:8627,className:"st0",width:50,height:50}),n.createElement("g",{id:"\\u30B0\\u30EB\\u30FC\\u30D7_11",transform:"translate(134 8010)"},n.createElement("path",{className:"st1",d:"M675,632c-5.5,0-10,4.5-10,10h-2.8c-0.1,0-0.3,0.1-0.4,0.1c-0.2,0.2-0.2,0.5,0,0.7l4.8,4.8 c0.2,0.2,0.5,0.2,0.7,0l4.8-4.8c0.1-0.1,0.1-0.2,0.1-0.4c0-0.3-0.2-0.5-0.5-0.5H669c0-3.3,2.7-6,6-6s6,2.7,6,6s-2.7,6-6,6 c-1.1,0-2,0.9-2,2s0.9,2,2,2c5.5,0,10-4.5,10-10C685,636.5,680.5,632,675,632z"})));function ot(e,t){var a=e.title,r=e.titleId,c=it(e,["title","titleId"]);return n.createElement("svg",ct({id:"\\u30EC\\u30A4\\u30E4\\u30FC_1",x:"0px",y:"0px",viewBox:"0 0 50 50",style:{enableBackground:"new 0 0 50 50"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,st,lt)}var ut=n.forwardRef(ot),dt=(a.p,{TomatoColor:de,Arrow:me,AddWhite:pe,ListWhite:Ee,Complete:we,StartGray:Re,StartRed:Me,PauseGray:Ge,PauseRed:Qe,ResetGray:nt,ResetRed:ut});function mt(e){var t=e.className,a=e.handleClick,n=e.handleMouseOver;return Object(r.jsx)("span",{className:t,onClick:a,onMouseEnter:n,children:Object(r.jsx)(dt.TomatoColor,{})})}var ft=mt;mt.defaultProps={className:"",handleClick:function(){return null},handleMouseOver:function(){return null}};var bt=y.ROOT_CLASS;var jt=function(e){var t=e.handleClick,a=e.estimateRate,c=Object(n.useState)(1),i=Object(l.a)(c,2),s=i[0],o=i[1],u=function(e){o(e)},d=function(e){var t,r=e+1<=s||e+1<=a;return q()((t={},Object(Y.a)(t,"".concat(bt,"__form-rate-tomato"),!r),Object(Y.a)(t,"".concat(bt,"__form-rate-tomato__active"),r),t))};return Object(r.jsx)("div",{className:"".concat(bt,"__form-rate-group"),onMouseLeave:function(){return u(1)},children:new Array(10).fill().map((function(e,a){return Object(r.jsx)(ft,{className:d(a),handleClick:function(){return t(a+1)},handleMouseOver:function(){return u(a+1)}},a)}))})},Ot=a(27);function ht(e){var t=e.inputName,a=e.useFormRef,n=e.className,c=e.errors,i=Object(o.a)(e,["inputName","useFormRef","className","errors"]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",Object(d.a)({ref:a,name:t,type:"text",className:n},i)),Object(r.jsx)(Ot.a,{errors:c,name:t,render:function(e){var t=e.messages;return t?Object.entries(t).map((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(r.jsx)("p",{className:"error-message",children:n},a)})):null}})]})}var pt=c.a.memo(ht);ht.defaultProps={inputName:"",className:""};var _t=a(4),vt=y.ROOT_CLASS;function xt(e){var t=e.className,a=e.defaultValues,n=e.handleSubmit,c=e.handleArchiveLightBox,i=e.disableArchive,s=e.isCountDown,l=e.location,o=Object(ie.c)({mode:"all",criteriaMode:"all",defaultValues:a}),u=o.register,d=o.errors,m=o.reset,f=o.formState,b=o.control,j=o.handleSubmit,O="/add"===l.pathname?"add":"todo",h=f.isValid,p=function(){if("add"===O)return!h;var e=f.dirtyFields;return 0===Object.keys(e).length};return Object(r.jsxs)("form",{className:t,onSubmit:j((function(e,t){return n(e,t,m)})),children:[Object(r.jsxs)("div",{className:"".concat(vt,"__form-group"),"data-flex":"flex-column",children:[Object(r.jsx)("label",{htmlFor:"taskTitle",className:"".concat(vt,"__form-label"),children:"TASK TITLE"}),Object(r.jsx)(pt,{"data-size":"big",className:"".concat(vt,"__form-input"),inputName:"taskTitle",useFormRef:u({validate:{trimmedValue:function(e){return 0!==e.trim().length||"This field is required."}}}),errors:d})]}),Object(r.jsxs)("div",{className:"".concat(vt,"__form-group"),"data-flex":"flex-column",children:[Object(r.jsx)("label",{className:"".concat(vt,"__form-label"),children:"ESTIMATED TOMATO"}),Object(r.jsx)(ie.a,{control:b,name:"estimatedTomato",render:function(e){var t=e.onChange,a=e.value;return Object(r.jsx)(jt,{handleClick:t,estimateRate:a})}})]}),"add"===O?Object(r.jsx)(C,{"data-size":"big","data-color":"primary","data-radius":"general","data-layout":"full",type:"submit",disabled:p(),children:"ADD TASK"}):Object(r.jsxs)("div",{className:"".concat(vt,"__form-group"),"data-flex":"flex-row",children:[Object(r.jsx)(C,{"data-size":"medium","data-color":"gray","data-radius":"general",type:"button",disabled:i,className:"".concat(vt,"__form-button"),handleClick:function(){return c()},children:"ARCHIVE"}),Object(r.jsx)(C,{"data-size":"medium","data-color":"primary","data-radius":"general",type:"submit",disabled:p()||s||!h,className:"".concat(vt,"__form-button"),children:"SAVE"})]})]})}var yt=Object(_t.g)(xt);xt.defaultProps={className:"",handleUpdateTask:function(){return null},isCountDown:!1};var gt=y.ROOT_CLASS;var Et=ce((function(){var e=Object(n.useContext)(v).taskDispatch,t={taskTitle:"",estimatedTomato:1};return Object(r.jsxs)("div",{className:"".concat(gt,"__aside-panel__new-task"),children:[Object(r.jsx)(T,{headTag:"h1",children:"ADD NEW TASK"}),Object(r.jsx)(yt,{defaultValues:t,handleSubmit:function(a,r,n){var c=a.estimatedTomato,i=Object(d.a)({id:Object(m.a)(),isArchived:!1,isDone:!1,isBreak:!1,estimatedWorkTime:c*f,workTime:0,breakTime:0,finishTomato:0},a);e(g(i)),n(t)}})]})}));function Tt(e){var t=e.className,a=e.handelClick,n=e.children,c=e.isDone,i=e.isCurrent,s=Object(o.a)(e,["className","handelClick","children","isDone","isCurrent"]);return Object(r.jsxs)("div",Object(d.a)(Object(d.a)({className:t,onClick:a},s),{},{children:[n,Object(r.jsx)("div",{className:"task-info--prefix task-info--prefix-".concat(c?"done":i?"current":null),children:c?Object(r.jsx)(dt.Complete,{width:"15"}):i?Object(r.jsx)(dt.TomatoColor,{width:"10"}):null})]}))}var kt=Tt;Tt.defaultProps={className:"",handelClick:function(){return null}};var Ct=y.ROOT_CLASS,Nt=[{filter:"SHOW_UNDONE",label:"TO DO"},{filter:"SHOW_DONE",label:"DONE"},{filter:"SHOW_ARCHIVE",label:"ARCHIVE"}];var St=ce((function(){var e=Object(n.useContext)(v),t=e.taskState,a=t.taskLists,c=t.timer,i=c.currentId,s=c.isCountDown,o=e.taskDispatch,u=Object(n.useState)(null),m=Object(l.a)(u,2),f=m[0],b=m[1],j=V(!1),O=Object(l.a)(j,3),h=O[0],p=O[1],_=O[2],x=function(e){p(),b(e)},y=function(e,t,a){var r=Object(d.a)({id:i},e);o(E.updateTaskState(r)),a(e,{isDirty:!1})},g=function(e){o(E.updateTaskState(e))},k=Object(n.useState)(Nt[0].filter),N=Object(l.a)(k,2),S=N[0],w=N[1],A=function(e,t){switch(t){case"SHOW_UNDONE":return e.filter((function(e){return!e.isDone&&!e.isArchived}));case"SHOW_DONE":return e.filter((function(e){return e.isDone&&!e.isArchived}));case"SHOW_ARCHIVE":return e.filter((function(e){return e.isArchived}));default:return e}}(a,S),D=Object(n.useState)(!1),B=Object(l.a)(D,2),I=B[0],R=B[1],F=Object(n.useState)(null),P=Object(l.a)(F,2),z=P[0],W=P[1];Object(n.useEffect)((function(){W(null)}),[S,A.length]);var K=function(e){var t;return q()((t={},Object(Y.a)(t,"".concat(Ct,"__task-lists__task-item-detail"),!0),Object(Y.a)(t,"".concat(Ct,"__task-lists__task-item-detail__spread"),e===z&&I),t))},H=function(e,t){var a;!function(e){if(!s&&"SHOW_DONE"!==S&&"SHOW_ARCHIVE"!==S&&e!==i){var t={id:e};o(E.setCurrentTask(t))}}(e),(a=t)===z?R((function(e){return!e})):a!==z&&I?W(a):a===z||I||(R(!0),W(a))},U=function(e){g({id:e,isArchived:!0}),"SHOW_UNDONE"!==S||s||function(){var e=a.filter((function(e){return!e.isDone&&!e.isArchived})).filter((function(e){return e.id!==i}));if(e.length){var t={id:e[0].id};o(E.setCurrentTask(t))}else o(E.setCurrentTask({id:null}))}()},G=function(e){switch(S){case"SHOW_UNDONE":return Object(r.jsx)(yt,{className:"".concat(Ct,"__task-lists__form"),defaultValues:{taskTitle:e.taskTitle,estimatedTomato:e.estimatedTomato},handleSubmit:y,isCountDown:s,disableArchive:s&&e.id===i,handleArchiveLightBox:function(){return x(e.id)}});case"SHOW_DONE":return Object(r.jsxs)("div",{className:"".concat(Ct,"__form-group"),"data-flex":"flex-row",children:[Object(r.jsx)(C,{"data-size":"medium","data-color":"gray","data-radius":"general",type:"button",className:"".concat(Ct,"__form-button"),handleClick:function(){return x(e.id)},children:"ARCHIVE"}),Object(r.jsx)(C,{"data-size":"medium","data-color":"primary","data-radius":"general",type:"submit",className:"".concat(Ct,"__form-button"),handleClick:function(){return g({id:e.id,isDone:!1})},children:"REDO"})]});case"SHOW_ARCHIVE":return Object(r.jsx)("div",{className:"".concat(Ct,"__form-group"),"data-flex":"flex-row",children:Object(r.jsx)(C,{"data-size":"big","data-color":"gray","data-radius":"general",type:"button",className:"".concat(Ct,"__form-button"),handleClick:function(){return g({id:e.id,isArchived:!1})},children:"UNARCHIVE"})})}};return Object(r.jsxs)("div",{className:"".concat(Ct,"__aside-panel__task-lists-wrapper"),children:[Object(r.jsx)(T,{headTag:"h1",children:"TASK LISTS"}),Object(r.jsx)("div",{className:"".concat(Ct,"__task-lists__switch-nav"),children:Nt.map((function(e){return Object(r.jsx)(C,{type:"submit","data-size":"small","data-color":e.filter===S?"primary":"gray-nav","data-radius":"upper",className:"".concat(Ct,"__task-lists__switch-nav-item"),handleClick:function(){return function(e){w(e)}(e.filter)},children:e.label},e.label)}))}),Object(r.jsx)("div",{className:"".concat(Ct,"__task-lists__task-lists"),children:A.map((function(e,t){return Object(r.jsxs)("div",{className:"".concat(Ct,"__task-lists__task-item"),style:{marginBottom:"1px"},children:[Object(r.jsxs)(kt,{className:"".concat(Ct,"__task-lists__task-item-info"),handelClick:function(){return H(e.id,t)},isDone:e.isDone,isCurrent:e.id===i,children:[Object(r.jsx)(T,{headTag:"h4",children:e.taskTitle}),Object(r.jsx)(L,{"data-size":"small",estimatedTomato:e.estimatedTomato,finishTomato:e.finishTomato,task:e})]}),Object(r.jsx)("div",{className:K(t),children:Object(r.jsx)("div",{className:"".concat(Ct,"__task-lists__spread-content"),children:G(e)})})]},e.id)}))}),h?Object(r.jsx)(M,{className:"".concat(Ct,"__light-box"),handleArchive:function(){return U(f)},handleClose:function(){return _(),void b(null)}}):null]})})),wt=y.ROOT_CLASS,At=[{path:"/add",iconComponent:dt.AddWhite,component:Et},{path:"/todo",iconComponent:dt.ListWhite,component:St}];var Dt=function(){var e,t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],i=a[1],s=q()((e={},Object(Y.a)(e,"".concat(wt,"__aside-panel"),!0),Object(Y.a)(e,"".concat(wt,"__aside-panel__collapse"),c),e));return Object(r.jsxs)("aside",{className:s,children:[Object(r.jsxs)("button",{onClick:function(){return i((function(e){return!e}))},className:"".concat(wt,"__aside-panel__toggle-collapse"),children:[Object(r.jsx)(dt.TomatoColor,{}),Object(r.jsx)("img",{src:dt.Arrow,alt:"arrow",className:"".concat(wt,"__aside-panel__arrow"),width:"20px"})]}),Object(r.jsxs)(te.a,{children:[Object(r.jsx)(Q,{className:"".concat(wt,"__aside-panel__menu"),children:At.map((function(e){return Object(r.jsx)(ee,{className:"".concat(wt,"__aside-panel__menu-item"),handelClick:function(){return i((function(e){return e?!e:e}))},children:Object(r.jsx)(re,{to:e.path,activeClassName:"".concat(wt,"__aside-panel__menu-item__active"),children:Object(r.jsx)(e.iconComponent,{})})},e.path)}))}),Object(r.jsx)("div",{className:"".concat(wt,"__aside-panel__content"),children:Object(r.jsxs)(_t.d,{children:[At.map((function(e){return Object(r.jsx)(_t.b,{exact:!0,path:e.path,component:e.component},e.path)})),Object(r.jsx)(_t.a,{replace:!0,to:At[0].path})]})})]})]})},Bt=(a(41),y.ROOT_CLASS);var It=function(){return Object(r.jsx)("div",{className:"".concat(Bt),children:Object(r.jsxs)(x,{children:[Object(r.jsx)(J,{}),Object(r.jsx)(Dt,{})]})})},Rt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),c(e),i(e)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(It,{})}),document.getElementById("root")),Rt()}},[[42,1,2]]]);
//# sourceMappingURL=main.ba3c4c6f.chunk.js.map