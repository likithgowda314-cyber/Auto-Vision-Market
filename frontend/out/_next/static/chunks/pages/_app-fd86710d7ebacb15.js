(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3600)}])},6279:function(e,t,r){"use strict";r.d(t,{H:function(){return s},V:function(){return i}});var n=r(5893),a=r(7294),o=r(1163);let i=(0,a.createContext)({}),s=e=>{let{children:t}=e,[r,s]=(0,a.useState)(null),[l,c]=(0,a.useState)(null),u=(0,o.useRouter)();return(0,a.useEffect)(()=>{let e=localStorage.getItem("token"),t=localStorage.getItem("user");e&&t&&(c(e),s(JSON.parse(t)))},[]),(0,n.jsx)(i.Provider,{value:{user:r,token:l,login:(e,t)=>{c(e),s(t),localStorage.setItem("token",e),localStorage.setItem("user",JSON.stringify(t)),u.push("/")},logout:()=>{c(null),s(null),localStorage.removeItem("token"),localStorage.removeItem("user"),u.push("/login")}},children:t})}},4796:function(e,t,r){"use strict";r.d(t,{A:function(){return o},Z:function(){return i}});var n=r(5893),a=r(7294);let o=(0,a.createContext)({}),i=e=>{let{children:t}=e,[r,i]=(0,a.useState)([]),s=r.reduce((e,t)=>e+t.quantity,0),l=r.reduce((e,t)=>e+t.price*t.quantity,0);return(0,n.jsx)(o.Provider,{value:{cart:r,addToCart:e=>{i(t=>t.find(t=>t.part_id===e.part_id)?t.map(t=>t.part_id===e.part_id?{...t,quantity:t.quantity+e.quantity}:t):[...t,e])},removeFromCart:e=>{i(t=>t.filter(t=>t.part_id!==e))},clearCart:()=>i([]),totalItems:s,totalCost:l},children:t})}},3412:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return a},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return i},ACTION_SERVER_PATCH:function(){return s},ACTION_PREFETCH:function(){return l},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return u},isThenable:function(){return d}});let a="refresh",o="navigate",i="restore",s="server-patch",l="prefetch",c="fast-refresh",u="server-action";function d(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6504:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(282),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3480:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});let n=r(8754),a=r(5893),o=n._(r(7294)),i=r(7950),s=r(7387),l=r(6982),c=r(6921),u=r(7727),d=r(1973),f=r(6216),p=r(1722),m=r(6504),h=r(634),g=r(3412),b=new Set;function v(e,t,r,n,a,o){if(o||(0,s.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let a=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(b.has(a))return;b.add(a)}Promise.resolve(o?e.prefetch(t,a):e.prefetch(t,r,n)).catch(e=>{})}}function y(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let x=o.default.forwardRef(function(e,t){let r,n;let{href:l,as:b,children:x,prefetch:j=null,passHref:w,replace:O,shallow:C,scroll:N,locale:E,onClick:_,onMouseEnter:P,onTouchStart:k,legacyBehavior:M=!1,...z}=e;r=x,M&&("string"==typeof r||"number"==typeof r)&&(r=(0,a.jsx)("a",{children:r}));let S=o.default.useContext(d.RouterContext),A=o.default.useContext(f.AppRouterContext),I=null!=S?S:A,T=!S,L=!1!==j,H=null===j?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:R,as:D}=o.default.useMemo(()=>{if(!S){let e=y(l);return{href:e,as:b?y(b):e}}let[e,t]=(0,i.resolveHref)(S,l,!0);return{href:e,as:b?(0,i.resolveHref)(S,b):t||e}},[S,l,b]),$=o.default.useRef(R),B=o.default.useRef(D);M&&(n=o.default.Children.only(r));let F=M?n&&"object"==typeof n&&n.ref:t,[U,V,q]=(0,p.useIntersection)({rootMargin:"200px"}),K=o.default.useCallback(e=>{(B.current!==D||$.current!==R)&&(q(),B.current=D,$.current=R),U(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[D,F,R,q,U]);o.default.useEffect(()=>{I&&V&&L&&v(I,R,D,{locale:E},{kind:H},T)},[D,R,V,E,L,null==S?void 0:S.locale,I,T,H]);let Y={ref:K,onClick(e){M||"function"!=typeof _||_(e),M&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,r,n,a,i,l,c,u){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,s.isLocalURL)(r)))return;e.preventDefault();let f=()=>{let e=null==l||l;"beforePopState"in t?t[a?"replace":"push"](r,n,{shallow:i,locale:c,scroll:e}):t[a?"replace":"push"](n||r,{scroll:e})};u?o.default.startTransition(f):f()}(e,I,R,D,O,C,N,E,T)},onMouseEnter(e){M||"function"!=typeof P||P(e),M&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),I&&(L||!T)&&v(I,R,D,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:H},T)},onTouchStart(e){M||"function"!=typeof k||k(e),M&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),I&&(L||!T)&&v(I,R,D,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:H},T)}};if((0,c.isAbsoluteUrl)(D))Y.href=D;else if(!M||w||"a"===n.type&&!("href"in n.props)){let e=void 0!==E?E:null==S?void 0:S.locale,t=(null==S?void 0:S.isLocaleDomain)&&(0,m.getDomainLocale)(D,e,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);Y.href=t||(0,h.addBasePath)((0,u.addLocale)(D,e,null==S?void 0:S.defaultLocale))}return M?o.default.cloneElement(n,Y):(0,a.jsx)("a",{...z,...Y,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1722:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let n=r(7294),a=r(9126),o="function"==typeof IntersectionObserver,i=new Map,s=[];function l(e){let{rootRef:t,rootMargin:r,disabled:l}=e,c=l||!o,[u,d]=(0,n.useState)(!1),f=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{f.current=e},[]);return(0,n.useEffect)(()=>{if(o){if(c||u)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:a,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=s.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let a=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:a},s.push(r),i.set(r,t),t}(r);return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),i.delete(n);let e=s.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!u){let e=(0,a.requestIdleCallback)(()=>d(!0));return()=>(0,a.cancelIdleCallback)(e)}},[c,r,t,u,f.current]),[p,u,(0,n.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3600:function(e,t,r){"use strict";let n,a;r.r(t),r.d(t,{default:function(){return ew}});var o,i=r(5893);r(7133);var s=r(7294);let l={data:""},c=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||l},u=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,f=/\n+/g,p=(e,t)=>{let r="",n="",a="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+i+";":n+="f"==o[1]?p(i,o):o+"{"+p(i,"k"==o[1]?"":t)+"}":"object"==typeof i?n+=p(i,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o="-"==o[1]?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=p.p?p.p(o,i):o+":"+i+";")}return r+(t&&a?t+"{"+a+"}":a)+n},m={},h=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+h(e[r]);return t}return e},g=(e,t,r,n,a)=>{var o;let i=h(e),s=m[i]||(m[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!m[s]){let t=i!==e?e:(e=>{let t,r,n=[{}];for(;t=u.exec(e.replace(d,""));)t[4]?n.shift():t[3]?(r=t[3].replace(f," ").trim(),n.unshift(n[0][r]=n[0][r]||{})):n[0][t[1]]=t[2].replace(f," ").trim();return n[0]})(e);m[s]=p(a?{["@keyframes "+s]:t}:t,r?"":"."+s)}let l=r&&m.g;return r&&(m.g=m[s]),o=m[s],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=n?o+t.data:t.data+o),s},b=(e,t,r)=>e.reduce((e,n,a)=>{let o=t[a];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+n+(null==o?"":o)},"");function v(e){let t=this||{},r=e.call?e(t.p):e;return g(r.unshift?r.raw?b(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,c(t.target),t.g,t.o,t.k)}v.bind({g:1});let y,x,j,w=v.bind({k:1});function O(e,t){let r=this||{};return function(){let n=arguments;function a(o,i){let s=Object.assign({},o),l=s.className||a.className;r.p=Object.assign({theme:x&&x()},s),r.o=/go\d/.test(l),s.className=v.apply(r,n)+(l?" "+l:""),t&&(s.ref=i);let c=e;return e[0]&&(c=s.as||e,delete s.as),j&&c[0]&&j(s),y(c,s)}return t?t(a):a}}var C=e=>"function"==typeof e,N=(e,t)=>C(e)?e(t):e,E=(n=0,()=>(++n).toString()),_=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},P="default",k=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:n}=t;return k(e,{type:e.toasts.find(e=>e.id===n.id)?1:0,toast:n});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},M=[],z={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},S={},A=(e,t=P)=>{S[t]=k(S[t]||z,e),M.forEach(([e,r])=>{e===t&&r(S[t])})},I=e=>Object.keys(S).forEach(t=>A(e,t)),T=e=>Object.keys(S).find(t=>S[t].toasts.some(t=>t.id===e)),L=(e=P)=>t=>{A(t,e)},H={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},R=(e={},t=P)=>{let[r,n]=(0,s.useState)(S[t]||z),a=(0,s.useRef)(S[t]);(0,s.useEffect)(()=>(a.current!==S[t]&&n(S[t]),M.push([t,n]),()=>{let e=M.findIndex(([e])=>e===t);e>-1&&M.splice(e,1)}),[t]);let o=r.toasts.map(t=>{var r,n,a;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==e?void 0:e.duration)||H[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...r,toasts:o}},D=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||E()}),$=e=>(t,r)=>{let n=D(t,e,r);return L(n.toasterId||T(n.id))({type:2,toast:n}),n.id},B=(e,t)=>$("blank")(e,t);B.error=$("error"),B.success=$("success"),B.loading=$("loading"),B.custom=$("custom"),B.dismiss=(e,t)=>{let r={type:3,toastId:e};t?L(t)(r):I(r)},B.dismissAll=e=>B.dismiss(void 0,e),B.remove=(e,t)=>{let r={type:4,toastId:e};t?L(t)(r):I(r)},B.removeAll=e=>B.remove(void 0,e),B.promise=(e,t,r)=>{let n=B.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?N(t.success,e):void 0;return a?B.success(a,{id:n,...r,...null==r?void 0:r.success}):B.dismiss(n),e}).catch(e=>{let a=t.error?N(t.error,e):void 0;a?B.error(a,{id:n,...r,...null==r?void 0:r.error}):B.dismiss(n)}),e};var F=1e3,U=(e,t="default")=>{let{toasts:r,pausedAt:n}=R(e,t),a=(0,s.useRef)(new Map).current,o=(0,s.useCallback)((e,t=F)=>{if(a.has(e))return;let r=setTimeout(()=>{a.delete(e),i({type:4,toastId:e})},t);a.set(e,r)},[]);(0,s.useEffect)(()=>{if(n)return;let e=Date.now(),a=r.map(r=>{if(r.duration===1/0)return;let n=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(n<0){r.visible&&B.dismiss(r.id);return}return setTimeout(()=>B.dismiss(r.id,t),n)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[r,n,t]);let i=(0,s.useCallback)(L(t),[t]),l=(0,s.useCallback)(()=>{i({type:5,time:Date.now()})},[i]),c=(0,s.useCallback)((e,t)=>{i({type:1,toast:{id:e,height:t}})},[i]),u=(0,s.useCallback)(()=>{n&&i({type:6,time:Date.now()})},[n,i]),d=(0,s.useCallback)((e,t)=>{let{reverseOrder:n=!1,gutter:a=8,defaultPosition:o}=t||{},i=r.filter(t=>(t.position||o)===(e.position||o)&&t.height),s=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<s&&e.visible).length;return i.filter(e=>e.visible).slice(...n?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+a,0)},[r]);return(0,s.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)o(e.id,e.removeDelay);else{let t=a.get(e.id);t&&(clearTimeout(t),a.delete(e.id))}})},[r,o]),{toasts:r,handlers:{updateHeight:c,startPause:l,endPause:u,calculateOffset:d}}},V=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,q=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,K=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Y=O("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${V} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${q} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${K} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,J=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,W=O("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${J} 1s linear infinite;
`,X=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Z=w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,G=O("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${X} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Z} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Q=O("div")`
  position: absolute;
`,ee=O("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,et=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,er=O("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${et} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,en=({toast:e})=>{let{icon:t,type:r,iconTheme:n}=e;return void 0!==t?"string"==typeof t?s.createElement(er,null,t):t:"blank"===r?null:s.createElement(ee,null,s.createElement(W,{...n}),"loading"!==r&&s.createElement(Q,null,"error"===r?s.createElement(Y,{...n}):s.createElement(G,{...n})))},ea=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,eo=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ei=O("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,es=O("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,el=(e,t)=>{let r=e.includes("top")?1:-1,[n,a]=_()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ea(r),eo(r)];return{animation:t?`${w(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ec=s.memo(({toast:e,position:t,style:r,children:n})=>{let a=e.height?el(e.position||t||"top-center",e.visible):{opacity:0},o=s.createElement(en,{toast:e}),i=s.createElement(es,{...e.ariaProps},N(e.message,e));return s.createElement(ei,{className:e.className,style:{...a,...r,...e.style}},"function"==typeof n?n({icon:o,message:i}):s.createElement(s.Fragment,null,o,i))});o=s.createElement,p.p=void 0,y=o,x=void 0,j=void 0;var eu=({id:e,className:t,style:r,onHeightUpdate:n,children:a})=>{let o=s.useCallback(t=>{if(t){let r=()=>{n(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return s.createElement("div",{ref:o,className:t,style:r},a)},ed=(e,t)=>{let r=e.includes("top"),n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:_()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...n}},ef=v`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ep=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:n,children:a,toasterId:o,containerStyle:i,containerClassName:l})=>{let{toasts:c,handlers:u}=U(r,o);return s.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:l,onMouseEnter:u.startPause,onMouseLeave:u.endPause},c.map(r=>{let o=r.position||t,i=ed(o,u.calculateOffset(r,{reverseOrder:e,gutter:n,defaultPosition:t}));return s.createElement(eu,{id:r.id,key:r.id,onHeightUpdate:u.updateHeight,className:r.visible?ef:"",style:i},"custom"===r.type?N(r.message,r):a?a(r):s.createElement(ec,{toast:r,position:o}))}))},em=r(6279),eh=r(4796),eg=r(1664),eb=r.n(eg),ev=r(4066);function ey(){let{user:e,logout:t}=(0,s.useContext)(em.V),{totalItems:r}=(0,s.useContext)(eh.A);return(0,i.jsx)("nav",{className:"sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm",children:(0,i.jsxs)("div",{className:"container mx-auto px-4 py-4 flex justify-between items-center",children:[(0,i.jsxs)(eb(),{href:"/",className:"flex items-center space-x-2",children:[(0,i.jsx)(ev.BYR,{className:"text-blue-600 text-2xl"}),(0,i.jsx)("span",{className:"text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600",children:"AutoPrice"})]}),(0,i.jsxs)("div",{className:"flex items-center space-x-6 text-sm font-medium",children:[(0,i.jsx)(eb(),{href:"/price-comparison",className:"text-gray-600 hover:text-blue-600 transition",children:"OEM Parts"}),(0,i.jsx)(eb(),{href:"/refurbished-market",className:"text-gray-600 hover:text-blue-600 transition",children:"Refurbished Market"}),(0,i.jsx)(eb(),{href:"/sell-part",className:"text-gray-600 hover:text-blue-600 transition",children:"Sell Part"}),(0,i.jsx)(eb(),{href:"/ai-damage-detection",className:"text-gray-600 hover:text-blue-600 transition",children:"AI Damage"}),(0,i.jsxs)(eb(),{href:"/cart",className:"relative text-gray-600 hover:text-blue-600 transition flex items-center gap-1",children:[(0,i.jsx)(ev.FeP,{className:"text-xl"}),(0,i.jsx)("span",{children:"Cart"}),r>0&&(0,i.jsx)("span",{className:"absolute -top-2 -left-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full",children:r})]}),e?(0,i.jsxs)("div",{className:"flex items-center space-x-4 border-l pl-4 border-gray-200",children:[(0,i.jsx)(eb(),{href:"/orders",className:"text-gray-600 hover:text-blue-600 transition",children:"Orders"}),(0,i.jsxs)("div",{className:"flex items-center space-x-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100",children:[(0,i.jsx)(ev.m3W,{className:"text-blue-500 text-lg"}),(0,i.jsx)("span",{className:"text-gray-700",children:e.name})]}),(0,i.jsx)("button",{onClick:t,className:"text-gray-500 hover:text-red-500 transition text-xs font-bold uppercase tracking-wider",children:"Logout"})]}):(0,i.jsxs)("div",{className:"flex items-center space-x-4 border-l pl-4 border-gray-200",children:[(0,i.jsx)(eb(),{href:"/login",className:"text-gray-600 hover:text-blue-600 transition",children:"Login"}),(0,i.jsx)(eb(),{href:"/register",className:"bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition shadow-md hover:shadow-lg font-bold",children:"Sign Up"})]})]})]})})}function ex(){return(0,i.jsx)("footer",{className:"bg-white border-t border-gray-100 py-8 mt-auto",children:(0,i.jsxs)("div",{className:"container mx-auto px-4 text-center",children:[(0,i.jsxs)("p",{className:"text-gray-500 text-sm flex items-center justify-center",children:["Built with ",(0,i.jsx)(ev.$0H,{className:"text-red-500 mx-2"})," by AutoPrice Team"]}),(0,i.jsxs)("div",{className:"mt-4 flex justify-center space-x-6 text-sm text-gray-400",children:[(0,i.jsx)("a",{href:"#",className:"hover:text-blue-600 transition",children:"Privacy Policy"}),(0,i.jsx)("a",{href:"#",className:"hover:text-blue-600 transition",children:"Terms of Service"}),(0,i.jsx)("a",{href:"#",className:"hover:text-blue-600 transition",children:"Contact Us"})]})]})})}function ej(e){let{children:t}=e;return(0,i.jsxs)("div",{className:"flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans",children:[(0,i.jsx)(ey,{}),(0,i.jsx)("main",{className:"flex-grow",children:t}),(0,i.jsx)(ex,{})]})}function ew(e){let{Component:t,pageProps:r}=e;return(0,i.jsx)(em.H,{children:(0,i.jsx)(eh.Z,{children:(0,i.jsxs)(ej,{children:[(0,i.jsx)(t,{...r}),(0,i.jsx)(ep,{position:"bottom-right"})]})})})}},7133:function(){},1664:function(e,t,r){e.exports=r(3480)},1163:function(e,t,r){e.exports=r(3035)},4066:function(e,t,r){"use strict";r.d(t,{Dmm:function(){return w},BYR:function(){return j},FJM:function(){return x},$0H:function(){return y},U41:function(){return v},bri:function(){return b},FeP:function(){return g},fCD:function(){return h},Xm5:function(){return m},DUB:function(){return p},m3W:function(){return f}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var n,a;n=t,a=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,s({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:a,size:o,title:l}=e,u=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],-1===t.indexOf(r)&&({}).propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,i),d=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==o?n.createElement(o.Consumer,null,e=>t(e)):t(a)}function f(e){return u({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"},child:[]}]})(e)}function p(e){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(e)}function m(e){return u({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(e)}function h(e){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"},child:[]}]})(e)}function g(e){return u({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(e)}function b(e){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(e)}function v(e){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function y(e){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function x(e){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function j(e){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"},child:[]}]})(e)}function w(e){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"},child:[]}]})(e)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(3035)}),_N_E=e.O()}]);