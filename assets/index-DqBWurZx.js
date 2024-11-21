function rw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var G0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Br(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Y0={exports:{}},ol={},K0={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sa=Symbol.for("react.element"),iw=Symbol.for("react.portal"),ow=Symbol.for("react.fragment"),aw=Symbol.for("react.strict_mode"),sw=Symbol.for("react.profiler"),lw=Symbol.for("react.provider"),cw=Symbol.for("react.context"),uw=Symbol.for("react.forward_ref"),dw=Symbol.for("react.suspense"),pw=Symbol.for("react.memo"),fw=Symbol.for("react.lazy"),vf=Symbol.iterator;function hw(e){return e===null||typeof e!="object"?null:(e=vf&&e[vf]||e["@@iterator"],typeof e=="function"?e:null)}var X0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q0=Object.assign,Z0={};function Fi(e,t,n){this.props=e,this.context=t,this.refs=Z0,this.updater=n||X0}Fi.prototype.isReactComponent={};Fi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function J0(){}J0.prototype=Fi.prototype;function wd(e,t,n){this.props=e,this.context=t,this.refs=Z0,this.updater=n||X0}var bd=wd.prototype=new J0;bd.constructor=wd;Q0(bd,Fi.prototype);bd.isPureReactComponent=!0;var xf=Array.isArray,eg=Object.prototype.hasOwnProperty,Sd={current:null},tg={key:!0,ref:!0,__self:!0,__source:!0};function ng(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)eg.call(t,r)&&!tg.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:sa,type:e,key:o,ref:a,props:i,_owner:Sd.current}}function mw(e,t){return{$$typeof:sa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _d(e){return typeof e=="object"&&e!==null&&e.$$typeof===sa}function gw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var yf=/\/+/g;function ql(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gw(""+e.key):t.toString(36)}function Ha(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case sa:case iw:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ql(a,0):r,xf(i)?(n="",e!=null&&(n=e.replace(yf,"$&/")+"/"),Ha(i,t,n,"",function(u){return u})):i!=null&&(_d(i)&&(i=mw(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(yf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",xf(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+ql(o,s);a+=Ha(o,t,n,l,i)}else if(l=hw(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+ql(o,s++),a+=Ha(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function va(e,t,n){if(e==null)return e;var r=[],i=0;return Ha(e,r,"","",function(o){return t.call(n,o,i++)}),r}function vw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var dt={current:null},Ua={transition:null},xw={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:Ua,ReactCurrentOwner:Sd};function rg(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:va,forEach:function(e,t,n){va(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return va(e,function(){t++}),t},toArray:function(e){return va(e,function(t){return t})||[]},only:function(e){if(!_d(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=Fi;re.Fragment=ow;re.Profiler=sw;re.PureComponent=wd;re.StrictMode=aw;re.Suspense=dw;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xw;re.act=rg;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Q0({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Sd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)eg.call(t,l)&&!tg.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:sa,type:e.type,key:i,ref:o,props:r,_owner:a}};re.createContext=function(e){return e={$$typeof:cw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lw,_context:e},e.Consumer=e};re.createElement=ng;re.createFactory=function(e){var t=ng.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:uw,render:e}};re.isValidElement=_d;re.lazy=function(e){return{$$typeof:fw,_payload:{_status:-1,_result:e},_init:vw}};re.memo=function(e,t){return{$$typeof:pw,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Ua.transition;Ua.transition={};try{e()}finally{Ua.transition=t}};re.unstable_act=rg;re.useCallback=function(e,t){return dt.current.useCallback(e,t)};re.useContext=function(e){return dt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return dt.current.useDeferredValue(e)};re.useEffect=function(e,t){return dt.current.useEffect(e,t)};re.useId=function(){return dt.current.useId()};re.useImperativeHandle=function(e,t,n){return dt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return dt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return dt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return dt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return dt.current.useReducer(e,t,n)};re.useRef=function(e){return dt.current.useRef(e)};re.useState=function(e){return dt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return dt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return dt.current.useTransition()};re.version="18.3.1";K0.exports=re;var _=K0.exports;const ee=Br(_),yw=rw({__proto__:null,default:ee},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ww=_,bw=Symbol.for("react.element"),Sw=Symbol.for("react.fragment"),_w=Object.prototype.hasOwnProperty,jw=ww.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tw={key:!0,ref:!0,__self:!0,__source:!0};function ig(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)_w.call(t,r)&&!Tw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:bw,type:e,key:o,ref:a,props:i,_owner:jw.current}}ol.Fragment=Sw;ol.jsx=ig;ol.jsxs=ig;Y0.exports=ol;var c=Y0.exports,og={exports:{}},Pt={},ag={exports:{}},sg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,N){var $=L.length;L.push(N);e:for(;0<$;){var K=$-1>>>1,J=L[K];if(0<i(J,N))L[K]=N,L[$]=J,$=K;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var N=L[0],$=L.pop();if($!==N){L[0]=$;e:for(var K=0,J=L.length,ye=J>>>1;K<ye;){var he=2*(K+1)-1,_e=L[he],de=he+1,le=L[de];if(0>i(_e,$))de<J&&0>i(le,_e)?(L[K]=le,L[de]=$,K=de):(L[K]=_e,L[he]=$,K=he);else if(de<J&&0>i(le,$))L[K]=le,L[de]=$,K=de;else break e}}return N}function i(L,N){var $=L.sortIndex-N.sortIndex;return $!==0?$:L.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],d=1,p=null,f=3,g=!1,x=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=L)r(u),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(u)}}function w(L){if(y=!1,m(L),!x)if(n(l)!==null)x=!0,Z(S);else{var N=n(u);N!==null&&Y(w,N.startTime-L)}}function S(L,N){x=!1,y&&(y=!1,v(T),T=-1),g=!0;var $=f;try{for(m(N),p=n(l);p!==null&&(!(p.expirationTime>N)||L&&!z());){var K=p.callback;if(typeof K=="function"){p.callback=null,f=p.priorityLevel;var J=K(p.expirationTime<=N);N=e.unstable_now(),typeof J=="function"?p.callback=J:p===n(l)&&r(l),m(N)}else r(l);p=n(l)}if(p!==null)var ye=!0;else{var he=n(u);he!==null&&Y(w,he.startTime-N),ye=!1}return ye}finally{p=null,f=$,g=!1}}var j=!1,C=null,T=-1,A=5,E=-1;function z(){return!(e.unstable_now()-E<A)}function M(){if(C!==null){var L=e.unstable_now();E=L;var N=!0;try{N=C(!0,L)}finally{N?R():(j=!1,C=null)}}else j=!1}var R;if(typeof h=="function")R=function(){h(M)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,U=V.port2;V.port1.onmessage=M,R=function(){U.postMessage(null)}}else R=function(){b(M,0)};function Z(L){C=L,j||(j=!0,R())}function Y(L,N){T=b(function(){L(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,Z(S))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(L){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var $=f;f=N;try{return L()}finally{f=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,N){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var $=f;f=L;try{return N()}finally{f=$}},e.unstable_scheduleCallback=function(L,N,$){var K=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?K+$:K):$=K,L){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=$+J,L={id:d++,callback:N,priorityLevel:L,startTime:$,expirationTime:J,sortIndex:-1},$>K?(L.sortIndex=$,t(u,L),n(l)===null&&L===n(u)&&(y?(v(T),T=-1):y=!0,Y(w,$-K))):(L.sortIndex=J,t(l,L),x||g||(x=!0,Z(S))),L},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(L){var N=f;return function(){var $=f;f=N;try{return L.apply(this,arguments)}finally{f=$}}}})(sg);ag.exports=sg;var Cw=ag.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kw=_,Et=Cw;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lg=new Set,Ro={};function $r(e,t){Ti(e,t),Ti(e+"Capture",t)}function Ti(e,t){for(Ro[e]=t,e=0;e<t.length;e++)lg.add(t[e])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uc=Object.prototype.hasOwnProperty,Ew=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wf={},bf={};function zw(e){return Uc.call(bf,e)?!0:Uc.call(wf,e)?!1:Ew.test(e)?bf[e]=!0:(wf[e]=!0,!1)}function Pw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Aw(e,t,n,r){if(t===null||typeof t>"u"||Pw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new pt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new pt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new pt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new pt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new pt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new pt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new pt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new pt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new pt(e,5,!1,e.toLowerCase(),null,!1,!1)});var jd=/[\-:]([a-z])/g;function Td(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(jd,Td);Je[t]=new pt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(jd,Td);Je[t]=new pt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(jd,Td);Je[t]=new pt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new pt(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new pt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Cd(e,t,n,r){var i=Je.hasOwnProperty(t)?Je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Aw(t,n,i,r)&&(n=null),r||i===null?zw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var In=kw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xa=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),kd=Symbol.for("react.strict_mode"),Wc=Symbol.for("react.profiler"),cg=Symbol.for("react.provider"),ug=Symbol.for("react.context"),Ed=Symbol.for("react.forward_ref"),Gc=Symbol.for("react.suspense"),Yc=Symbol.for("react.suspense_list"),zd=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),dg=Symbol.for("react.offscreen"),Sf=Symbol.iterator;function Zi(e){return e===null||typeof e!="object"?null:(e=Sf&&e[Sf]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Object.assign,Hl;function fo(e){if(Hl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Hl=t&&t[1]||""}return`
`+Hl+e}var Ul=!1;function Wl(e,t){if(!e||Ul)return"";Ul=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Ul=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?fo(e):""}function Mw(e){switch(e.tag){case 5:return fo(e.type);case 16:return fo("Lazy");case 13:return fo("Suspense");case 19:return fo("SuspenseList");case 0:case 2:case 15:return e=Wl(e.type,!1),e;case 11:return e=Wl(e.type.render,!1),e;case 1:return e=Wl(e.type,!0),e;default:return""}}function Kc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jr:return"Fragment";case Zr:return"Portal";case Wc:return"Profiler";case kd:return"StrictMode";case Gc:return"Suspense";case Yc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ug:return(e.displayName||"Context")+".Consumer";case cg:return(e._context.displayName||"Context")+".Provider";case Ed:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zd:return t=e.displayName||null,t!==null?t:Kc(e.type)||"Memo";case Hn:t=e._payload,e=e._init;try{return Kc(e(t))}catch{}}return null}function Lw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kc(t);case 8:return t===kd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function lr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ow(e){var t=pg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ya(e){e._valueTracker||(e._valueTracker=Ow(e))}function fg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function hs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xc(e,t){var n=t.checked;return Ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _f(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=lr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hg(e,t){t=t.checked,t!=null&&Cd(e,"checked",t,!1)}function Qc(e,t){hg(e,t);var n=lr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zc(e,t.type,lr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zc(e,t,n){(t!=="number"||hs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ho=Array.isArray;function gi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+lr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Jc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Tf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(ho(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:lr(n)}}function mg(e,t){var n=lr(t.value),r=lr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Cf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wa,vg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Iw=["Webkit","ms","Moz","O"];Object.keys(wo).forEach(function(e){Iw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wo[t]=wo[e]})});function xg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wo.hasOwnProperty(e)&&wo[e]?(""+t).trim():t+"px"}function yg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Rw=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tu(e,t){if(t){if(Rw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function nu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ru=null;function Pd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var iu=null,vi=null,xi=null;function kf(e){if(e=ua(e)){if(typeof iu!="function")throw Error(F(280));var t=e.stateNode;t&&(t=ul(t),iu(e.stateNode,e.type,t))}}function wg(e){vi?xi?xi.push(e):xi=[e]:vi=e}function bg(){if(vi){var e=vi,t=xi;if(xi=vi=null,kf(e),t)for(e=0;e<t.length;e++)kf(t[e])}}function Sg(e,t){return e(t)}function _g(){}var Gl=!1;function jg(e,t,n){if(Gl)return e(t,n);Gl=!0;try{return Sg(e,t,n)}finally{Gl=!1,(vi!==null||xi!==null)&&(_g(),bg())}}function Do(e,t){var n=e.stateNode;if(n===null)return null;var r=ul(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var ou=!1;if(An)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){ou=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{ou=!1}function Vw(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var bo=!1,ms=null,gs=!1,au=null,Dw={onError:function(e){bo=!0,ms=e}};function Nw(e,t,n,r,i,o,a,s,l){bo=!1,ms=null,Vw.apply(Dw,arguments)}function Fw(e,t,n,r,i,o,a,s,l){if(Nw.apply(this,arguments),bo){if(bo){var u=ms;bo=!1,ms=null}else throw Error(F(198));gs||(gs=!0,au=u)}}function qr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Tg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ef(e){if(qr(e)!==e)throw Error(F(188))}function Bw(e){var t=e.alternate;if(!t){if(t=qr(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ef(i),e;if(o===r)return Ef(i),t;o=o.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function Cg(e){return e=Bw(e),e!==null?kg(e):null}function kg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kg(e);if(t!==null)return t;e=e.sibling}return null}var Eg=Et.unstable_scheduleCallback,zf=Et.unstable_cancelCallback,$w=Et.unstable_shouldYield,qw=Et.unstable_requestPaint,Me=Et.unstable_now,Hw=Et.unstable_getCurrentPriorityLevel,Ad=Et.unstable_ImmediatePriority,zg=Et.unstable_UserBlockingPriority,vs=Et.unstable_NormalPriority,Uw=Et.unstable_LowPriority,Pg=Et.unstable_IdlePriority,al=null,un=null;function Ww(e){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(al,e,void 0,(e.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:Kw,Gw=Math.log,Yw=Math.LN2;function Kw(e){return e>>>=0,e===0?32:31-(Gw(e)/Yw|0)|0}var ba=64,Sa=4194304;function mo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function xs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=mo(s):(o&=a,o!==0&&(r=mo(o)))}else a=n&~i,a!==0?r=mo(a):o!==0&&(r=mo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Kt(t),i=1<<n,r|=e[n],t&=~i;return r}function Xw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Kt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=Xw(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function su(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ag(){var e=ba;return ba<<=1,!(ba&4194240)&&(ba=64),e}function Yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function la(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Kt(t),e[t]=n}function Zw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Kt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Md(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Kt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ue=0;function Mg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lg,Ld,Og,Ig,Rg,lu=!1,_a=[],Zn=null,Jn=null,er=null,No=new Map,Fo=new Map,Wn=[],Jw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pf(e,t){switch(e){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":No.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(t.pointerId)}}function eo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ua(t),t!==null&&Ld(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function e2(e,t,n,r,i){switch(t){case"focusin":return Zn=eo(Zn,e,t,n,r,i),!0;case"dragenter":return Jn=eo(Jn,e,t,n,r,i),!0;case"mouseover":return er=eo(er,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return No.set(o,eo(No.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Fo.set(o,eo(Fo.get(o)||null,e,t,n,r,i)),!0}return!1}function Vg(e){var t=_r(e.target);if(t!==null){var n=qr(t);if(n!==null){if(t=n.tag,t===13){if(t=Tg(n),t!==null){e.blockedOn=t,Rg(e.priority,function(){Og(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=cu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ru=r,n.target.dispatchEvent(r),ru=null}else return t=ua(n),t!==null&&Ld(t),e.blockedOn=n,!1;t.shift()}return!0}function Af(e,t,n){Wa(e)&&n.delete(t)}function t2(){lu=!1,Zn!==null&&Wa(Zn)&&(Zn=null),Jn!==null&&Wa(Jn)&&(Jn=null),er!==null&&Wa(er)&&(er=null),No.forEach(Af),Fo.forEach(Af)}function to(e,t){e.blockedOn===t&&(e.blockedOn=null,lu||(lu=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,t2)))}function Bo(e){function t(i){return to(i,e)}if(0<_a.length){to(_a[0],e);for(var n=1;n<_a.length;n++){var r=_a[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Zn!==null&&to(Zn,e),Jn!==null&&to(Jn,e),er!==null&&to(er,e),No.forEach(t),Fo.forEach(t),n=0;n<Wn.length;n++)r=Wn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wn.length&&(n=Wn[0],n.blockedOn===null);)Vg(n),n.blockedOn===null&&Wn.shift()}var yi=In.ReactCurrentBatchConfig,ys=!0;function n2(e,t,n,r){var i=ue,o=yi.transition;yi.transition=null;try{ue=1,Od(e,t,n,r)}finally{ue=i,yi.transition=o}}function r2(e,t,n,r){var i=ue,o=yi.transition;yi.transition=null;try{ue=4,Od(e,t,n,r)}finally{ue=i,yi.transition=o}}function Od(e,t,n,r){if(ys){var i=cu(e,t,n,r);if(i===null)ic(e,t,r,ws,n),Pf(e,r);else if(e2(i,e,t,n,r))r.stopPropagation();else if(Pf(e,r),t&4&&-1<Jw.indexOf(e)){for(;i!==null;){var o=ua(i);if(o!==null&&Lg(o),o=cu(e,t,n,r),o===null&&ic(e,t,r,ws,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ic(e,t,r,null,n)}}var ws=null;function cu(e,t,n,r){if(ws=null,e=Pd(r),e=_r(e),e!==null)if(t=qr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Tg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ws=e,null}function Dg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hw()){case Ad:return 1;case zg:return 4;case vs:case Uw:return 16;case Pg:return 536870912;default:return 16}default:return 16}}var Yn=null,Id=null,Ga=null;function Ng(){if(Ga)return Ga;var e,t=Id,n=t.length,r,i="value"in Yn?Yn.value:Yn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ga=i.slice(e,1<r?1-r:void 0)}function Ya(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ja(){return!0}function Mf(){return!1}function At(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ja:Mf,this.isPropagationStopped=Mf,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ja)},persist:function(){},isPersistent:ja}),t}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rd=At(Bi),ca=Ee({},Bi,{view:0,detail:0}),i2=At(ca),Kl,Xl,no,sl=Ee({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==no&&(no&&e.type==="mousemove"?(Kl=e.screenX-no.screenX,Xl=e.screenY-no.screenY):Xl=Kl=0,no=e),Kl)},movementY:function(e){return"movementY"in e?e.movementY:Xl}}),Lf=At(sl),o2=Ee({},sl,{dataTransfer:0}),a2=At(o2),s2=Ee({},ca,{relatedTarget:0}),Ql=At(s2),l2=Ee({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),c2=At(l2),u2=Ee({},Bi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),d2=At(u2),p2=Ee({},Bi,{data:0}),Of=At(p2),f2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=m2[e])?!!t[e]:!1}function Vd(){return g2}var v2=Ee({},ca,{key:function(e){if(e.key){var t=f2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ya(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?h2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vd,charCode:function(e){return e.type==="keypress"?Ya(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ya(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),x2=At(v2),y2=Ee({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),If=At(y2),w2=Ee({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vd}),b2=At(w2),S2=Ee({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),_2=At(S2),j2=Ee({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),T2=At(j2),C2=[9,13,27,32],Dd=An&&"CompositionEvent"in window,So=null;An&&"documentMode"in document&&(So=document.documentMode);var k2=An&&"TextEvent"in window&&!So,Fg=An&&(!Dd||So&&8<So&&11>=So),Rf=" ",Vf=!1;function Bg(e,t){switch(e){case"keyup":return C2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $g(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ei=!1;function E2(e,t){switch(e){case"compositionend":return $g(t);case"keypress":return t.which!==32?null:(Vf=!0,Rf);case"textInput":return e=t.data,e===Rf&&Vf?null:e;default:return null}}function z2(e,t){if(ei)return e==="compositionend"||!Dd&&Bg(e,t)?(e=Ng(),Ga=Id=Yn=null,ei=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fg&&t.locale!=="ko"?null:t.data;default:return null}}var P2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Df(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!P2[e.type]:t==="textarea"}function qg(e,t,n,r){wg(r),t=bs(t,"onChange"),0<t.length&&(n=new Rd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _o=null,$o=null;function A2(e){e1(e,0)}function ll(e){var t=ri(e);if(fg(t))return e}function M2(e,t){if(e==="change")return t}var Hg=!1;if(An){var Zl;if(An){var Jl="oninput"in document;if(!Jl){var Nf=document.createElement("div");Nf.setAttribute("oninput","return;"),Jl=typeof Nf.oninput=="function"}Zl=Jl}else Zl=!1;Hg=Zl&&(!document.documentMode||9<document.documentMode)}function Ff(){_o&&(_o.detachEvent("onpropertychange",Ug),$o=_o=null)}function Ug(e){if(e.propertyName==="value"&&ll($o)){var t=[];qg(t,$o,e,Pd(e)),jg(A2,t)}}function L2(e,t,n){e==="focusin"?(Ff(),_o=t,$o=n,_o.attachEvent("onpropertychange",Ug)):e==="focusout"&&Ff()}function O2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll($o)}function I2(e,t){if(e==="click")return ll(t)}function R2(e,t){if(e==="input"||e==="change")return ll(t)}function V2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Zt=typeof Object.is=="function"?Object.is:V2;function qo(e,t){if(Zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Uc.call(t,i)||!Zt(e[i],t[i]))return!1}return!0}function Bf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $f(e,t){var n=Bf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bf(n)}}function Wg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gg(){for(var e=window,t=hs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=hs(e.document)}return t}function Nd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function D2(e){var t=Gg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wg(n.ownerDocument.documentElement,n)){if(r!==null&&Nd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=$f(n,o);var a=$f(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var N2=An&&"documentMode"in document&&11>=document.documentMode,ti=null,uu=null,jo=null,du=!1;function qf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;du||ti==null||ti!==hs(r)||(r=ti,"selectionStart"in r&&Nd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jo&&qo(jo,r)||(jo=r,r=bs(uu,"onSelect"),0<r.length&&(t=new Rd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ti)))}function Ta(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ni={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},ec={},Yg={};An&&(Yg=document.createElement("div").style,"AnimationEvent"in window||(delete ni.animationend.animation,delete ni.animationiteration.animation,delete ni.animationstart.animation),"TransitionEvent"in window||delete ni.transitionend.transition);function cl(e){if(ec[e])return ec[e];if(!ni[e])return e;var t=ni[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yg)return ec[e]=t[n];return e}var Kg=cl("animationend"),Xg=cl("animationiteration"),Qg=cl("animationstart"),Zg=cl("transitionend"),Jg=new Map,Hf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(e,t){Jg.set(e,t),$r(t,[e])}for(var tc=0;tc<Hf.length;tc++){var nc=Hf[tc],F2=nc.toLowerCase(),B2=nc[0].toUpperCase()+nc.slice(1);pr(F2,"on"+B2)}pr(Kg,"onAnimationEnd");pr(Xg,"onAnimationIteration");pr(Qg,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(Zg,"onTransitionEnd");Ti("onMouseEnter",["mouseout","mouseover"]);Ti("onMouseLeave",["mouseout","mouseover"]);Ti("onPointerEnter",["pointerout","pointerover"]);Ti("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$2=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function Uf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Fw(r,t,void 0,e),e.currentTarget=null}function e1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Uf(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Uf(i,s,u),o=l}}}if(gs)throw e=au,gs=!1,au=null,e}function ge(e,t){var n=t[gu];n===void 0&&(n=t[gu]=new Set);var r=e+"__bubble";n.has(r)||(t1(t,e,2,!1),n.add(r))}function rc(e,t,n){var r=0;t&&(r|=4),t1(n,e,r,t)}var Ca="_reactListening"+Math.random().toString(36).slice(2);function Ho(e){if(!e[Ca]){e[Ca]=!0,lg.forEach(function(n){n!=="selectionchange"&&($2.has(n)||rc(n,!1,e),rc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ca]||(t[Ca]=!0,rc("selectionchange",!1,t))}}function t1(e,t,n,r){switch(Dg(t)){case 1:var i=n2;break;case 4:i=r2;break;default:i=Od}n=i.bind(null,t,n,e),i=void 0,!ou||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ic(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=_r(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}jg(function(){var u=o,d=Pd(n),p=[];e:{var f=Jg.get(e);if(f!==void 0){var g=Rd,x=e;switch(e){case"keypress":if(Ya(n)===0)break e;case"keydown":case"keyup":g=x2;break;case"focusin":x="focus",g=Ql;break;case"focusout":x="blur",g=Ql;break;case"beforeblur":case"afterblur":g=Ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=a2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=b2;break;case Kg:case Xg:case Qg:g=c2;break;case Zg:g=_2;break;case"scroll":g=i2;break;case"wheel":g=T2;break;case"copy":case"cut":case"paste":g=d2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=If}var y=(t&4)!==0,b=!y&&e==="scroll",v=y?f!==null?f+"Capture":null:f;y=[];for(var h=u,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,v!==null&&(w=Do(h,v),w!=null&&y.push(Uo(h,w,m)))),b)break;h=h.return}0<y.length&&(f=new g(f,x,null,n,d),p.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==ru&&(x=n.relatedTarget||n.fromElement)&&(_r(x)||x[Mn]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?_r(x):null,x!==null&&(b=qr(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(y=Lf,w="onMouseLeave",v="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=If,w="onPointerLeave",v="onPointerEnter",h="pointer"),b=g==null?f:ri(g),m=x==null?f:ri(x),f=new y(w,h+"leave",g,n,d),f.target=b,f.relatedTarget=m,w=null,_r(d)===u&&(y=new y(v,h+"enter",x,n,d),y.target=m,y.relatedTarget=b,w=y),b=w,g&&x)t:{for(y=g,v=x,h=0,m=y;m;m=Kr(m))h++;for(m=0,w=v;w;w=Kr(w))m++;for(;0<h-m;)y=Kr(y),h--;for(;0<m-h;)v=Kr(v),m--;for(;h--;){if(y===v||v!==null&&y===v.alternate)break t;y=Kr(y),v=Kr(v)}y=null}else y=null;g!==null&&Wf(p,f,g,y,!1),x!==null&&b!==null&&Wf(p,b,x,y,!0)}}e:{if(f=u?ri(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var S=M2;else if(Df(f))if(Hg)S=R2;else{S=O2;var j=L2}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=I2);if(S&&(S=S(e,u))){qg(p,S,n,d);break e}j&&j(e,f,u),e==="focusout"&&(j=f._wrapperState)&&j.controlled&&f.type==="number"&&Zc(f,"number",f.value)}switch(j=u?ri(u):window,e){case"focusin":(Df(j)||j.contentEditable==="true")&&(ti=j,uu=u,jo=null);break;case"focusout":jo=uu=ti=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,qf(p,n,d);break;case"selectionchange":if(N2)break;case"keydown":case"keyup":qf(p,n,d)}var C;if(Dd)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else ei?Bg(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Fg&&n.locale!=="ko"&&(ei||T!=="onCompositionStart"?T==="onCompositionEnd"&&ei&&(C=Ng()):(Yn=d,Id="value"in Yn?Yn.value:Yn.textContent,ei=!0)),j=bs(u,T),0<j.length&&(T=new Of(T,e,null,n,d),p.push({event:T,listeners:j}),C?T.data=C:(C=$g(n),C!==null&&(T.data=C)))),(C=k2?E2(e,n):z2(e,n))&&(u=bs(u,"onBeforeInput"),0<u.length&&(d=new Of("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=C))}e1(p,t)})}function Uo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Do(e,n),o!=null&&r.unshift(Uo(e,o,i)),o=Do(e,t),o!=null&&r.push(Uo(e,o,i))),e=e.return}return r}function Kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wf(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=Do(n,o),l!=null&&a.unshift(Uo(n,l,s))):i||(l=Do(n,o),l!=null&&a.push(Uo(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var q2=/\r\n?/g,H2=/\u0000|\uFFFD/g;function Gf(e){return(typeof e=="string"?e:""+e).replace(q2,`
`).replace(H2,"")}function ka(e,t,n){if(t=Gf(t),Gf(e)!==t&&n)throw Error(F(425))}function Ss(){}var pu=null,fu=null;function hu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,U2=typeof clearTimeout=="function"?clearTimeout:void 0,Yf=typeof Promise=="function"?Promise:void 0,W2=typeof queueMicrotask=="function"?queueMicrotask:typeof Yf<"u"?function(e){return Yf.resolve(null).then(e).catch(G2)}:mu;function G2(e){setTimeout(function(){throw e})}function oc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Bo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bo(t)}function tr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Kf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var $i=Math.random().toString(36).slice(2),sn="__reactFiber$"+$i,Wo="__reactProps$"+$i,Mn="__reactContainer$"+$i,gu="__reactEvents$"+$i,Y2="__reactListeners$"+$i,K2="__reactHandles$"+$i;function _r(e){var t=e[sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mn]||n[sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Kf(e);e!==null;){if(n=e[sn])return n;e=Kf(e)}return t}e=n,n=e.parentNode}return null}function ua(e){return e=e[sn]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ri(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function ul(e){return e[Wo]||null}var vu=[],ii=-1;function fr(e){return{current:e}}function xe(e){0>ii||(e.current=vu[ii],vu[ii]=null,ii--)}function me(e,t){ii++,vu[ii]=e.current,e.current=t}var cr={},st=fr(cr),xt=fr(!1),Lr=cr;function Ci(e,t){var n=e.type.contextTypes;if(!n)return cr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function yt(e){return e=e.childContextTypes,e!=null}function _s(){xe(xt),xe(st)}function Xf(e,t,n){if(st.current!==cr)throw Error(F(168));me(st,t),me(xt,n)}function n1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(F(108,Lw(e)||"Unknown",i));return Ee({},n,r)}function js(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cr,Lr=st.current,me(st,e),me(xt,xt.current),!0}function Qf(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=n1(e,t,Lr),r.__reactInternalMemoizedMergedChildContext=e,xe(xt),xe(st),me(st,e)):xe(xt),me(xt,n)}var wn=null,dl=!1,ac=!1;function r1(e){wn===null?wn=[e]:wn.push(e)}function X2(e){dl=!0,r1(e)}function hr(){if(!ac&&wn!==null){ac=!0;var e=0,t=ue;try{var n=wn;for(ue=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wn=null,dl=!1}catch(i){throw wn!==null&&(wn=wn.slice(e+1)),Eg(Ad,hr),i}finally{ue=t,ac=!1}}return null}var oi=[],ai=0,Ts=null,Cs=0,It=[],Rt=0,Or=null,bn=1,Sn="";function yr(e,t){oi[ai++]=Cs,oi[ai++]=Ts,Ts=e,Cs=t}function i1(e,t,n){It[Rt++]=bn,It[Rt++]=Sn,It[Rt++]=Or,Or=e;var r=bn;e=Sn;var i=32-Kt(r)-1;r&=~(1<<i),n+=1;var o=32-Kt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,bn=1<<32-Kt(t)+i|n<<i|r,Sn=o+e}else bn=1<<o|n<<i|r,Sn=e}function Fd(e){e.return!==null&&(yr(e,1),i1(e,1,0))}function Bd(e){for(;e===Ts;)Ts=oi[--ai],oi[ai]=null,Cs=oi[--ai],oi[ai]=null;for(;e===Or;)Or=It[--Rt],It[Rt]=null,Sn=It[--Rt],It[Rt]=null,bn=It[--Rt],It[Rt]=null}var kt=null,Ct=null,Se=!1,Gt=null;function o1(e,t){var n=Vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Zf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,kt=e,Ct=tr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,kt=e,Ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Or!==null?{id:bn,overflow:Sn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,kt=e,Ct=null,!0):!1;default:return!1}}function xu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yu(e){if(Se){var t=Ct;if(t){var n=t;if(!Zf(e,t)){if(xu(e))throw Error(F(418));t=tr(n.nextSibling);var r=kt;t&&Zf(e,t)?o1(r,n):(e.flags=e.flags&-4097|2,Se=!1,kt=e)}}else{if(xu(e))throw Error(F(418));e.flags=e.flags&-4097|2,Se=!1,kt=e}}}function Jf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kt=e}function Ea(e){if(e!==kt)return!1;if(!Se)return Jf(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hu(e.type,e.memoizedProps)),t&&(t=Ct)){if(xu(e))throw a1(),Error(F(418));for(;t;)o1(e,t),t=tr(t.nextSibling)}if(Jf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ct=tr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ct=null}}else Ct=kt?tr(e.stateNode.nextSibling):null;return!0}function a1(){for(var e=Ct;e;)e=tr(e.nextSibling)}function ki(){Ct=kt=null,Se=!1}function $d(e){Gt===null?Gt=[e]:Gt.push(e)}var Q2=In.ReactCurrentBatchConfig;function ro(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function za(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function eh(e){var t=e._init;return t(e._payload)}function s1(e){function t(v,h){if(e){var m=v.deletions;m===null?(v.deletions=[h],v.flags|=16):m.push(h)}}function n(v,h){if(!e)return null;for(;h!==null;)t(v,h),h=h.sibling;return null}function r(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function i(v,h){return v=or(v,h),v.index=0,v.sibling=null,v}function o(v,h,m){return v.index=m,e?(m=v.alternate,m!==null?(m=m.index,m<h?(v.flags|=2,h):m):(v.flags|=2,h)):(v.flags|=1048576,h)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function s(v,h,m,w){return h===null||h.tag!==6?(h=fc(m,v.mode,w),h.return=v,h):(h=i(h,m),h.return=v,h)}function l(v,h,m,w){var S=m.type;return S===Jr?d(v,h,m.props.children,w,m.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Hn&&eh(S)===h.type)?(w=i(h,m.props),w.ref=ro(v,h,m),w.return=v,w):(w=ts(m.type,m.key,m.props,null,v.mode,w),w.ref=ro(v,h,m),w.return=v,w)}function u(v,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=hc(m,v.mode,w),h.return=v,h):(h=i(h,m.children||[]),h.return=v,h)}function d(v,h,m,w,S){return h===null||h.tag!==7?(h=zr(m,v.mode,w,S),h.return=v,h):(h=i(h,m),h.return=v,h)}function p(v,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=fc(""+h,v.mode,m),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case xa:return m=ts(h.type,h.key,h.props,null,v.mode,m),m.ref=ro(v,null,h),m.return=v,m;case Zr:return h=hc(h,v.mode,m),h.return=v,h;case Hn:var w=h._init;return p(v,w(h._payload),m)}if(ho(h)||Zi(h))return h=zr(h,v.mode,m,null),h.return=v,h;za(v,h)}return null}function f(v,h,m,w){var S=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:s(v,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case xa:return m.key===S?l(v,h,m,w):null;case Zr:return m.key===S?u(v,h,m,w):null;case Hn:return S=m._init,f(v,h,S(m._payload),w)}if(ho(m)||Zi(m))return S!==null?null:d(v,h,m,w,null);za(v,m)}return null}function g(v,h,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return v=v.get(m)||null,s(h,v,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case xa:return v=v.get(w.key===null?m:w.key)||null,l(h,v,w,S);case Zr:return v=v.get(w.key===null?m:w.key)||null,u(h,v,w,S);case Hn:var j=w._init;return g(v,h,m,j(w._payload),S)}if(ho(w)||Zi(w))return v=v.get(m)||null,d(h,v,w,S,null);za(h,w)}return null}function x(v,h,m,w){for(var S=null,j=null,C=h,T=h=0,A=null;C!==null&&T<m.length;T++){C.index>T?(A=C,C=null):A=C.sibling;var E=f(v,C,m[T],w);if(E===null){C===null&&(C=A);break}e&&C&&E.alternate===null&&t(v,C),h=o(E,h,T),j===null?S=E:j.sibling=E,j=E,C=A}if(T===m.length)return n(v,C),Se&&yr(v,T),S;if(C===null){for(;T<m.length;T++)C=p(v,m[T],w),C!==null&&(h=o(C,h,T),j===null?S=C:j.sibling=C,j=C);return Se&&yr(v,T),S}for(C=r(v,C);T<m.length;T++)A=g(C,v,T,m[T],w),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?T:A.key),h=o(A,h,T),j===null?S=A:j.sibling=A,j=A);return e&&C.forEach(function(z){return t(v,z)}),Se&&yr(v,T),S}function y(v,h,m,w){var S=Zi(m);if(typeof S!="function")throw Error(F(150));if(m=S.call(m),m==null)throw Error(F(151));for(var j=S=null,C=h,T=h=0,A=null,E=m.next();C!==null&&!E.done;T++,E=m.next()){C.index>T?(A=C,C=null):A=C.sibling;var z=f(v,C,E.value,w);if(z===null){C===null&&(C=A);break}e&&C&&z.alternate===null&&t(v,C),h=o(z,h,T),j===null?S=z:j.sibling=z,j=z,C=A}if(E.done)return n(v,C),Se&&yr(v,T),S;if(C===null){for(;!E.done;T++,E=m.next())E=p(v,E.value,w),E!==null&&(h=o(E,h,T),j===null?S=E:j.sibling=E,j=E);return Se&&yr(v,T),S}for(C=r(v,C);!E.done;T++,E=m.next())E=g(C,v,T,E.value,w),E!==null&&(e&&E.alternate!==null&&C.delete(E.key===null?T:E.key),h=o(E,h,T),j===null?S=E:j.sibling=E,j=E);return e&&C.forEach(function(M){return t(v,M)}),Se&&yr(v,T),S}function b(v,h,m,w){if(typeof m=="object"&&m!==null&&m.type===Jr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case xa:e:{for(var S=m.key,j=h;j!==null;){if(j.key===S){if(S=m.type,S===Jr){if(j.tag===7){n(v,j.sibling),h=i(j,m.props.children),h.return=v,v=h;break e}}else if(j.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Hn&&eh(S)===j.type){n(v,j.sibling),h=i(j,m.props),h.ref=ro(v,j,m),h.return=v,v=h;break e}n(v,j);break}else t(v,j);j=j.sibling}m.type===Jr?(h=zr(m.props.children,v.mode,w,m.key),h.return=v,v=h):(w=ts(m.type,m.key,m.props,null,v.mode,w),w.ref=ro(v,h,m),w.return=v,v=w)}return a(v);case Zr:e:{for(j=m.key;h!==null;){if(h.key===j)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(v,h.sibling),h=i(h,m.children||[]),h.return=v,v=h;break e}else{n(v,h);break}else t(v,h);h=h.sibling}h=hc(m,v.mode,w),h.return=v,v=h}return a(v);case Hn:return j=m._init,b(v,h,j(m._payload),w)}if(ho(m))return x(v,h,m,w);if(Zi(m))return y(v,h,m,w);za(v,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(v,h.sibling),h=i(h,m),h.return=v,v=h):(n(v,h),h=fc(m,v.mode,w),h.return=v,v=h),a(v)):n(v,h)}return b}var Ei=s1(!0),l1=s1(!1),ks=fr(null),Es=null,si=null,qd=null;function Hd(){qd=si=Es=null}function Ud(e){var t=ks.current;xe(ks),e._currentValue=t}function wu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function wi(e,t){Es=e,qd=si=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(gt=!0),e.firstContext=null)}function Nt(e){var t=e._currentValue;if(qd!==e)if(e={context:e,memoizedValue:t,next:null},si===null){if(Es===null)throw Error(F(308));si=e,Es.dependencies={lanes:0,firstContext:e}}else si=si.next=e;return t}var jr=null;function Wd(e){jr===null?jr=[e]:jr.push(e)}function c1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Wd(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ln(e,r)}function Ln(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Un=!1;function Gd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function u1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ln(e,n)}return i=r.interleaved,i===null?(t.next=t,Wd(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ln(e,n)}function Ka(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Md(e,n)}}function th(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zs(e,t,n,r){var i=e.updateQueue;Un=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;a=0,d=u=l=null,s=o;do{var f=s.lane,g=s.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,y=s;switch(f=t,g=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){p=x.call(g,p,f);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,f=typeof x=="function"?x.call(g,p,f):x,f==null)break e;p=Ee({},p,f);break e;case 2:Un=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else g={eventTime:g,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=g,l=p):d=d.next=g,a|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Rr|=a,e.lanes=a,e.memoizedState=p}}function nh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var da={},dn=fr(da),Go=fr(da),Yo=fr(da);function Tr(e){if(e===da)throw Error(F(174));return e}function Yd(e,t){switch(me(Yo,t),me(Go,e),me(dn,da),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:eu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=eu(t,e)}xe(dn),me(dn,t)}function zi(){xe(dn),xe(Go),xe(Yo)}function d1(e){Tr(Yo.current);var t=Tr(dn.current),n=eu(t,e.type);t!==n&&(me(Go,e),me(dn,n))}function Kd(e){Go.current===e&&(xe(dn),xe(Go))}var je=fr(0);function Ps(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sc=[];function Xd(){for(var e=0;e<sc.length;e++)sc[e]._workInProgressVersionPrimary=null;sc.length=0}var Xa=In.ReactCurrentDispatcher,lc=In.ReactCurrentBatchConfig,Ir=0,ke=null,De=null,He=null,As=!1,To=!1,Ko=0,Z2=0;function tt(){throw Error(F(321))}function Qd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Zt(e[n],t[n]))return!1;return!0}function Zd(e,t,n,r,i,o){if(Ir=o,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xa.current=e===null||e.memoizedState===null?n3:r3,e=n(r,i),To){o=0;do{if(To=!1,Ko=0,25<=o)throw Error(F(301));o+=1,He=De=null,t.updateQueue=null,Xa.current=i3,e=n(r,i)}while(To)}if(Xa.current=Ms,t=De!==null&&De.next!==null,Ir=0,He=De=ke=null,As=!1,t)throw Error(F(300));return e}function Jd(){var e=Ko!==0;return Ko=0,e}function on(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?ke.memoizedState=He=e:He=He.next=e,He}function Ft(){if(De===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=He===null?ke.memoizedState:He.next;if(t!==null)He=t,De=e;else{if(e===null)throw Error(F(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},He===null?ke.memoizedState=He=e:He=He.next=e}return He}function Xo(e,t){return typeof t=="function"?t(e):t}function cc(e){var t=Ft(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=De,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var d=u.lane;if((Ir&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=p,a=r):l=l.next=p,ke.lanes|=d,Rr|=d}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Zt(r,t.memoizedState)||(gt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ke.lanes|=o,Rr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function uc(e){var t=Ft(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Zt(o,t.memoizedState)||(gt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function p1(){}function f1(e,t){var n=ke,r=Ft(),i=t(),o=!Zt(r.memoizedState,i);if(o&&(r.memoizedState=i,gt=!0),r=r.queue,ep(g1.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,Qo(9,m1.bind(null,n,r,i,t),void 0,null),Ge===null)throw Error(F(349));Ir&30||h1(n,t,i)}return i}function h1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function m1(e,t,n,r){t.value=n,t.getSnapshot=r,v1(t)&&x1(e)}function g1(e,t,n){return n(function(){v1(t)&&x1(e)})}function v1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Zt(e,n)}catch{return!0}}function x1(e){var t=Ln(e,1);t!==null&&Xt(t,e,1,-1)}function rh(e){var t=on();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:e},t.queue=e,e=e.dispatch=t3.bind(null,ke,e),[t.memoizedState,e]}function Qo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function y1(){return Ft().memoizedState}function Qa(e,t,n,r){var i=on();ke.flags|=e,i.memoizedState=Qo(1|t,n,void 0,r===void 0?null:r)}function pl(e,t,n,r){var i=Ft();r=r===void 0?null:r;var o=void 0;if(De!==null){var a=De.memoizedState;if(o=a.destroy,r!==null&&Qd(r,a.deps)){i.memoizedState=Qo(t,n,o,r);return}}ke.flags|=e,i.memoizedState=Qo(1|t,n,o,r)}function ih(e,t){return Qa(8390656,8,e,t)}function ep(e,t){return pl(2048,8,e,t)}function w1(e,t){return pl(4,2,e,t)}function b1(e,t){return pl(4,4,e,t)}function S1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _1(e,t,n){return n=n!=null?n.concat([e]):null,pl(4,4,S1.bind(null,t,e),n)}function tp(){}function j1(e,t){var n=Ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function T1(e,t){var n=Ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function C1(e,t,n){return Ir&21?(Zt(n,t)||(n=Ag(),ke.lanes|=n,Rr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,gt=!0),e.memoizedState=n)}function J2(e,t){var n=ue;ue=n!==0&&4>n?n:4,e(!0);var r=lc.transition;lc.transition={};try{e(!1),t()}finally{ue=n,lc.transition=r}}function k1(){return Ft().memoizedState}function e3(e,t,n){var r=ir(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},E1(e))z1(t,n);else if(n=c1(e,t,n,r),n!==null){var i=ut();Xt(n,e,r,i),P1(n,t,r)}}function t3(e,t,n){var r=ir(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(E1(e))z1(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Zt(s,a)){var l=t.interleaved;l===null?(i.next=i,Wd(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=c1(e,t,i,r),n!==null&&(i=ut(),Xt(n,e,r,i),P1(n,t,r))}}function E1(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function z1(e,t){To=As=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function P1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Md(e,n)}}var Ms={readContext:Nt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},n3={readContext:Nt,useCallback:function(e,t){return on().memoizedState=[e,t===void 0?null:t],e},useContext:Nt,useEffect:ih,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qa(4194308,4,S1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qa(4,2,e,t)},useMemo:function(e,t){var n=on();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=on();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=e3.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=on();return e={current:e},t.memoizedState=e},useState:rh,useDebugValue:tp,useDeferredValue:function(e){return on().memoizedState=e},useTransition:function(){var e=rh(!1),t=e[0];return e=J2.bind(null,e[1]),on().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,i=on();if(Se){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),Ge===null)throw Error(F(349));Ir&30||h1(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ih(g1.bind(null,r,o,e),[e]),r.flags|=2048,Qo(9,m1.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=on(),t=Ge.identifierPrefix;if(Se){var n=Sn,r=bn;n=(r&~(1<<32-Kt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ko++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Z2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},r3={readContext:Nt,useCallback:j1,useContext:Nt,useEffect:ep,useImperativeHandle:_1,useInsertionEffect:w1,useLayoutEffect:b1,useMemo:T1,useReducer:cc,useRef:y1,useState:function(){return cc(Xo)},useDebugValue:tp,useDeferredValue:function(e){var t=Ft();return C1(t,De.memoizedState,e)},useTransition:function(){var e=cc(Xo)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:p1,useSyncExternalStore:f1,useId:k1,unstable_isNewReconciler:!1},i3={readContext:Nt,useCallback:j1,useContext:Nt,useEffect:ep,useImperativeHandle:_1,useInsertionEffect:w1,useLayoutEffect:b1,useMemo:T1,useReducer:uc,useRef:y1,useState:function(){return uc(Xo)},useDebugValue:tp,useDeferredValue:function(e){var t=Ft();return De===null?t.memoizedState=e:C1(t,De.memoizedState,e)},useTransition:function(){var e=uc(Xo)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:p1,useSyncExternalStore:f1,useId:k1,unstable_isNewReconciler:!1};function Ut(e,t){if(e&&e.defaultProps){t=Ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fl={isMounted:function(e){return(e=e._reactInternals)?qr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ut(),i=ir(e),o=jn(r,i);o.payload=t,n!=null&&(o.callback=n),t=nr(e,o,i),t!==null&&(Xt(t,e,i,r),Ka(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ut(),i=ir(e),o=jn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=nr(e,o,i),t!==null&&(Xt(t,e,i,r),Ka(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ut(),r=ir(e),i=jn(n,r);i.tag=2,t!=null&&(i.callback=t),t=nr(e,i,r),t!==null&&(Xt(t,e,r,n),Ka(t,e,r))}};function oh(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!qo(n,r)||!qo(i,o):!0}function A1(e,t,n){var r=!1,i=cr,o=t.contextType;return typeof o=="object"&&o!==null?o=Nt(o):(i=yt(t)?Lr:st.current,r=t.contextTypes,o=(r=r!=null)?Ci(e,i):cr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ah(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fl.enqueueReplaceState(t,t.state,null)}function Su(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Gd(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Nt(o):(o=yt(t)?Lr:st.current,i.context=Ci(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(bu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&fl.enqueueReplaceState(i,i.state,null),zs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Pi(e,t){try{var n="",r=t;do n+=Mw(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function dc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _u(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var o3=typeof WeakMap=="function"?WeakMap:Map;function M1(e,t,n){n=jn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Os||(Os=!0,Lu=r),_u(e,t)},n}function L1(e,t,n){n=jn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){_u(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){_u(e,t),typeof r!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function sh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new o3;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=y3.bind(null,e,t,n),t.then(e,e))}function lh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ch(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jn(-1,1),t.tag=2,nr(n,t,1))),n.lanes|=1),e)}var a3=In.ReactCurrentOwner,gt=!1;function ct(e,t,n,r){t.child=e===null?l1(t,null,n,r):Ei(t,e.child,n,r)}function uh(e,t,n,r,i){n=n.render;var o=t.ref;return wi(t,i),r=Zd(e,t,n,r,o,i),n=Jd(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,On(e,t,i)):(Se&&n&&Fd(t),t.flags|=1,ct(e,t,r,i),t.child)}function dh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!cp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,O1(e,t,o,r,i)):(e=ts(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:qo,n(a,r)&&e.ref===t.ref)return On(e,t,i)}return t.flags|=1,e=or(o,r),e.ref=t.ref,e.return=t,t.child=e}function O1(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(qo(o,r)&&e.ref===t.ref)if(gt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(gt=!0);else return t.lanes=e.lanes,On(e,t,i)}return ju(e,t,n,r,i)}function I1(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(ci,_t),_t|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(ci,_t),_t|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,me(ci,_t),_t|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,me(ci,_t),_t|=r;return ct(e,t,i,n),t.child}function R1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ju(e,t,n,r,i){var o=yt(n)?Lr:st.current;return o=Ci(t,o),wi(t,i),n=Zd(e,t,n,r,o,i),r=Jd(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,On(e,t,i)):(Se&&r&&Fd(t),t.flags|=1,ct(e,t,n,i),t.child)}function ph(e,t,n,r,i){if(yt(n)){var o=!0;js(t)}else o=!1;if(wi(t,i),t.stateNode===null)Za(e,t),A1(t,n,r),Su(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Nt(u):(u=yt(n)?Lr:st.current,u=Ci(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&ah(t,a,r,u),Un=!1;var f=t.memoizedState;a.state=f,zs(t,r,a,i),l=t.memoizedState,s!==r||f!==l||xt.current||Un?(typeof d=="function"&&(bu(t,n,d,r),l=t.memoizedState),(s=Un||oh(t,n,s,r,f,l,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,u1(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ut(t.type,s),a.props=u,p=t.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nt(l):(l=yt(n)?Lr:st.current,l=Ci(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||f!==l)&&ah(t,a,r,l),Un=!1,f=t.memoizedState,a.state=f,zs(t,r,a,i);var x=t.memoizedState;s!==p||f!==x||xt.current||Un?(typeof g=="function"&&(bu(t,n,g,r),x=t.memoizedState),(u=Un||oh(t,n,u,r,f,x,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Tu(e,t,n,r,o,i)}function Tu(e,t,n,r,i,o){R1(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Qf(t,n,!1),On(e,t,o);r=t.stateNode,a3.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ei(t,e.child,null,o),t.child=Ei(t,null,s,o)):ct(e,t,s,o),t.memoizedState=r.state,i&&Qf(t,n,!0),t.child}function V1(e){var t=e.stateNode;t.pendingContext?Xf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xf(e,t.context,!1),Yd(e,t.containerInfo)}function fh(e,t,n,r,i){return ki(),$d(i),t.flags|=256,ct(e,t,n,r),t.child}var Cu={dehydrated:null,treeContext:null,retryLane:0};function ku(e){return{baseLanes:e,cachePool:null,transitions:null}}function D1(e,t,n){var r=t.pendingProps,i=je.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(je,i&1),e===null)return yu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=gl(a,r,0,null),e=zr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ku(n),t.memoizedState=Cu,e):np(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return s3(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=or(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=or(s,o):(o=zr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?ku(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Cu,r}return o=e.child,e=o.sibling,r=or(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function np(e,t){return t=gl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pa(e,t,n,r){return r!==null&&$d(r),Ei(t,e.child,null,n),e=np(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function s3(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=dc(Error(F(422))),Pa(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=gl({mode:"visible",children:r.children},i,0,null),o=zr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ei(t,e.child,null,a),t.child.memoizedState=ku(a),t.memoizedState=Cu,o);if(!(t.mode&1))return Pa(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(F(419)),r=dc(o,r,void 0),Pa(e,t,a,r)}if(s=(a&e.childLanes)!==0,gt||s){if(r=Ge,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ln(e,i),Xt(r,e,i,-1))}return lp(),r=dc(Error(F(421))),Pa(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=w3.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ct=tr(i.nextSibling),kt=t,Se=!0,Gt=null,e!==null&&(It[Rt++]=bn,It[Rt++]=Sn,It[Rt++]=Or,bn=e.id,Sn=e.overflow,Or=t),t=np(t,r.children),t.flags|=4096,t)}function hh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),wu(e.return,t,n)}function pc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function N1(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ct(e,t,r.children,n),r=je.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hh(e,n,t);else if(e.tag===19)hh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(je,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ps(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),pc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ps(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}pc(t,!0,n,null,o);break;case"together":pc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Za(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function On(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=or(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=or(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function l3(e,t,n){switch(t.tag){case 3:V1(t),ki();break;case 5:d1(t);break;case 1:yt(t.type)&&js(t);break;case 4:Yd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;me(ks,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(je,je.current&1),t.flags|=128,null):n&t.child.childLanes?D1(e,t,n):(me(je,je.current&1),e=On(e,t,n),e!==null?e.sibling:null);me(je,je.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return N1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(je,je.current),r)break;return null;case 22:case 23:return t.lanes=0,I1(e,t,n)}return On(e,t,n)}var F1,Eu,B1,$1;F1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Eu=function(){};B1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Tr(dn.current);var o=null;switch(n){case"input":i=Xc(e,i),r=Xc(e,r),o=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),o=[];break;case"textarea":i=Jc(e,i),r=Jc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ss)}tu(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ro.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ro.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ge("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};$1=function(e,t,n,r){n!==r&&(t.flags|=4)};function io(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function c3(e,t,n){var r=t.pendingProps;switch(Bd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return yt(t.type)&&_s(),nt(t),null;case 3:return r=t.stateNode,zi(),xe(xt),xe(st),Xd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ea(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gt!==null&&(Ru(Gt),Gt=null))),Eu(e,t),nt(t),null;case 5:Kd(t);var i=Tr(Yo.current);if(n=t.type,e!==null&&t.stateNode!=null)B1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return nt(t),null}if(e=Tr(dn.current),Ea(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[sn]=t,r[Wo]=o,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<go.length;i++)ge(go[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":_f(r,o),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ge("invalid",r);break;case"textarea":Tf(r,o),ge("invalid",r)}tu(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ka(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ka(r.textContent,s,e),i=["children",""+s]):Ro.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ge("scroll",r)}switch(n){case"input":ya(r),jf(r,o,!0);break;case"textarea":ya(r),Cf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ss)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[sn]=t,e[Wo]=r,F1(e,t,!1,!1),t.stateNode=e;e:{switch(a=nu(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<go.length;i++)ge(go[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":_f(e,r),i=Xc(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),ge("invalid",e);break;case"textarea":Tf(e,r),i=Jc(e,r),ge("invalid",e);break;default:i=r}tu(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?yg(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vg(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Vo(e,l):typeof l=="number"&&Vo(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ro.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ge("scroll",e):l!=null&&Cd(e,o,l,a))}switch(n){case"input":ya(e),jf(e,r,!1);break;case"textarea":ya(e),Cf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+lr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?gi(e,!!r.multiple,o,!1):r.defaultValue!=null&&gi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ss)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)$1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=Tr(Yo.current),Tr(dn.current),Ea(t)){if(r=t.stateNode,n=t.memoizedProps,r[sn]=t,(o=r.nodeValue!==n)&&(e=kt,e!==null))switch(e.tag){case 3:ka(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ka(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=t,t.stateNode=r}return nt(t),null;case 13:if(xe(je),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&Ct!==null&&t.mode&1&&!(t.flags&128))a1(),ki(),t.flags|=98560,o=!1;else if(o=Ea(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(F(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(F(317));o[sn]=t}else ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;nt(t),o=!1}else Gt!==null&&(Ru(Gt),Gt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||je.current&1?Fe===0&&(Fe=3):lp())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return zi(),Eu(e,t),e===null&&Ho(t.stateNode.containerInfo),nt(t),null;case 10:return Ud(t.type._context),nt(t),null;case 17:return yt(t.type)&&_s(),nt(t),null;case 19:if(xe(je),o=t.memoizedState,o===null)return nt(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)io(o,!1);else{if(Fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ps(e),a!==null){for(t.flags|=128,io(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(je,je.current&1|2),t.child}e=e.sibling}o.tail!==null&&Me()>Ai&&(t.flags|=128,r=!0,io(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ps(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),io(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Se)return nt(t),null}else 2*Me()-o.renderingStartTime>Ai&&n!==1073741824&&(t.flags|=128,r=!0,io(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Me(),t.sibling=null,n=je.current,me(je,r?n&1|2:n&1),t):(nt(t),null);case 22:case 23:return sp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_t&1073741824&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function u3(e,t){switch(Bd(t),t.tag){case 1:return yt(t.type)&&_s(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zi(),xe(xt),xe(st),Xd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Kd(t),null;case 13:if(xe(je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(je),null;case 4:return zi(),null;case 10:return Ud(t.type._context),null;case 22:case 23:return sp(),null;case 24:return null;default:return null}}var Aa=!1,it=!1,d3=typeof WeakSet=="function"?WeakSet:Set,H=null;function li(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function zu(e,t,n){try{n()}catch(r){ze(e,t,r)}}var mh=!1;function p3(e,t){if(pu=ys,e=Gg(),Nd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var g;p!==n||i!==0&&p.nodeType!==3||(s=a+i),p!==o||r!==0&&p.nodeType!==3||(l=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(g=p.firstChild)!==null;)f=p,p=g;for(;;){if(p===e)break t;if(f===n&&++u===i&&(s=a),f===o&&++d===r&&(l=a),(g=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fu={focusedElem:e,selectionRange:n},ys=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,b=x.memoizedState,v=t.stateNode,h=v.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ut(t.type,y),b);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(w){ze(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return x=mh,mh=!1,x}function Co(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&zu(t,n,o)}i=i.next}while(i!==r)}}function hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Pu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function q1(e){var t=e.alternate;t!==null&&(e.alternate=null,q1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[sn],delete t[Wo],delete t[gu],delete t[Y2],delete t[K2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function H1(e){return e.tag===5||e.tag===3||e.tag===4}function gh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||H1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Au(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ss));else if(r!==4&&(e=e.child,e!==null))for(Au(e,t,n),e=e.sibling;e!==null;)Au(e,t,n),e=e.sibling}function Mu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Mu(e,t,n),e=e.sibling;e!==null;)Mu(e,t,n),e=e.sibling}var Xe=null,Wt=!1;function Nn(e,t,n){for(n=n.child;n!==null;)U1(e,t,n),n=n.sibling}function U1(e,t,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(al,n)}catch{}switch(n.tag){case 5:it||li(n,t);case 6:var r=Xe,i=Wt;Xe=null,Nn(e,t,n),Xe=r,Wt=i,Xe!==null&&(Wt?(e=Xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(Wt?(e=Xe,n=n.stateNode,e.nodeType===8?oc(e.parentNode,n):e.nodeType===1&&oc(e,n),Bo(e)):oc(Xe,n.stateNode));break;case 4:r=Xe,i=Wt,Xe=n.stateNode.containerInfo,Wt=!0,Nn(e,t,n),Xe=r,Wt=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&zu(n,t,a),i=i.next}while(i!==r)}Nn(e,t,n);break;case 1:if(!it&&(li(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ze(n,t,s)}Nn(e,t,n);break;case 21:Nn(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,Nn(e,t,n),it=r):Nn(e,t,n);break;default:Nn(e,t,n)}}function vh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new d3),t.forEach(function(r){var i=b3.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Xe=s.stateNode,Wt=!1;break e;case 3:Xe=s.stateNode.containerInfo,Wt=!0;break e;case 4:Xe=s.stateNode.containerInfo,Wt=!0;break e}s=s.return}if(Xe===null)throw Error(F(160));U1(o,a,i),Xe=null,Wt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ze(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)W1(t,e),t=t.sibling}function W1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ht(t,e),nn(e),r&4){try{Co(3,e,e.return),hl(3,e)}catch(y){ze(e,e.return,y)}try{Co(5,e,e.return)}catch(y){ze(e,e.return,y)}}break;case 1:Ht(t,e),nn(e),r&512&&n!==null&&li(n,n.return);break;case 5:if(Ht(t,e),nn(e),r&512&&n!==null&&li(n,n.return),e.flags&32){var i=e.stateNode;try{Vo(i,"")}catch(y){ze(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&hg(i,o),nu(s,a);var u=nu(s,o);for(a=0;a<l.length;a+=2){var d=l[a],p=l[a+1];d==="style"?yg(i,p):d==="dangerouslySetInnerHTML"?vg(i,p):d==="children"?Vo(i,p):Cd(i,d,p,u)}switch(s){case"input":Qc(i,o);break;case"textarea":mg(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?gi(i,!!o.multiple,g,!1):f!==!!o.multiple&&(o.defaultValue!=null?gi(i,!!o.multiple,o.defaultValue,!0):gi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Wo]=o}catch(y){ze(e,e.return,y)}}break;case 6:if(Ht(t,e),nn(e),r&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){ze(e,e.return,y)}}break;case 3:if(Ht(t,e),nn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bo(t.containerInfo)}catch(y){ze(e,e.return,y)}break;case 4:Ht(t,e),nn(e);break;case 13:Ht(t,e),nn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(op=Me())),r&4&&vh(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(it=(u=it)||d,Ht(t,e),it=u):Ht(t,e),nn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(H=e,d=e.child;d!==null;){for(p=H=d;H!==null;){switch(f=H,g=f.child,f.tag){case 0:case 11:case 14:case 15:Co(4,f,f.return);break;case 1:li(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){ze(r,n,y)}}break;case 5:li(f,f.return);break;case 22:if(f.memoizedState!==null){yh(p);continue}}g!==null?(g.return=f,H=g):yh(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=xg("display",a))}catch(y){ze(e,e.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){ze(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ht(t,e),nn(e),r&4&&vh(e);break;case 21:break;default:Ht(t,e),nn(e)}}function nn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(H1(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vo(i,""),r.flags&=-33);var o=gh(e);Mu(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=gh(e);Au(e,s,a);break;default:throw Error(F(161))}}catch(l){ze(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function f3(e,t,n){H=e,G1(e)}function G1(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var i=H,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Aa;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||it;s=Aa;var u=it;if(Aa=a,(it=l)&&!u)for(H=i;H!==null;)a=H,l=a.child,a.tag===22&&a.memoizedState!==null?wh(i):l!==null?(l.return=a,H=l):wh(i);for(;o!==null;)H=o,G1(o),o=o.sibling;H=i,Aa=s,it=u}xh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,H=o):xh(e)}}function xh(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&nh(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}nh(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Bo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}it||t.flags&512&&Pu(t)}catch(f){ze(t,t.return,f)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function yh(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function wh(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hl(4,t)}catch(l){ze(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ze(t,i,l)}}var o=t.return;try{Pu(t)}catch(l){ze(t,o,l)}break;case 5:var a=t.return;try{Pu(t)}catch(l){ze(t,a,l)}}}catch(l){ze(t,t.return,l)}if(t===e){H=null;break}var s=t.sibling;if(s!==null){s.return=t.return,H=s;break}H=t.return}}var h3=Math.ceil,Ls=In.ReactCurrentDispatcher,rp=In.ReactCurrentOwner,Dt=In.ReactCurrentBatchConfig,ae=0,Ge=null,Re=null,Qe=0,_t=0,ci=fr(0),Fe=0,Zo=null,Rr=0,ml=0,ip=0,ko=null,mt=null,op=0,Ai=1/0,xn=null,Os=!1,Lu=null,rr=null,Ma=!1,Kn=null,Is=0,Eo=0,Ou=null,Ja=-1,es=0;function ut(){return ae&6?Me():Ja!==-1?Ja:Ja=Me()}function ir(e){return e.mode&1?ae&2&&Qe!==0?Qe&-Qe:Q2.transition!==null?(es===0&&(es=Ag()),es):(e=ue,e!==0||(e=window.event,e=e===void 0?16:Dg(e.type)),e):1}function Xt(e,t,n,r){if(50<Eo)throw Eo=0,Ou=null,Error(F(185));la(e,n,r),(!(ae&2)||e!==Ge)&&(e===Ge&&(!(ae&2)&&(ml|=n),Fe===4&&Gn(e,Qe)),wt(e,r),n===1&&ae===0&&!(t.mode&1)&&(Ai=Me()+500,dl&&hr()))}function wt(e,t){var n=e.callbackNode;Qw(e,t);var r=xs(e,e===Ge?Qe:0);if(r===0)n!==null&&zf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&zf(n),t===1)e.tag===0?X2(bh.bind(null,e)):r1(bh.bind(null,e)),W2(function(){!(ae&6)&&hr()}),n=null;else{switch(Mg(r)){case 1:n=Ad;break;case 4:n=zg;break;case 16:n=vs;break;case 536870912:n=Pg;break;default:n=vs}n=tv(n,Y1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Y1(e,t){if(Ja=-1,es=0,ae&6)throw Error(F(327));var n=e.callbackNode;if(bi()&&e.callbackNode!==n)return null;var r=xs(e,e===Ge?Qe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Rs(e,r);else{t=r;var i=ae;ae|=2;var o=X1();(Ge!==e||Qe!==t)&&(xn=null,Ai=Me()+500,Er(e,t));do try{v3();break}catch(s){K1(e,s)}while(!0);Hd(),Ls.current=o,ae=i,Re!==null?t=0:(Ge=null,Qe=0,t=Fe)}if(t!==0){if(t===2&&(i=su(e),i!==0&&(r=i,t=Iu(e,i))),t===1)throw n=Zo,Er(e,0),Gn(e,r),wt(e,Me()),n;if(t===6)Gn(e,r);else{if(i=e.current.alternate,!(r&30)&&!m3(i)&&(t=Rs(e,r),t===2&&(o=su(e),o!==0&&(r=o,t=Iu(e,o))),t===1))throw n=Zo,Er(e,0),Gn(e,r),wt(e,Me()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:wr(e,mt,xn);break;case 3:if(Gn(e,r),(r&130023424)===r&&(t=op+500-Me(),10<t)){if(xs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ut(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=mu(wr.bind(null,e,mt,xn),t);break}wr(e,mt,xn);break;case 4:if(Gn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Kt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*h3(r/1960))-r,10<r){e.timeoutHandle=mu(wr.bind(null,e,mt,xn),r);break}wr(e,mt,xn);break;case 5:wr(e,mt,xn);break;default:throw Error(F(329))}}}return wt(e,Me()),e.callbackNode===n?Y1.bind(null,e):null}function Iu(e,t){var n=ko;return e.current.memoizedState.isDehydrated&&(Er(e,t).flags|=256),e=Rs(e,t),e!==2&&(t=mt,mt=n,t!==null&&Ru(t)),e}function Ru(e){mt===null?mt=e:mt.push.apply(mt,e)}function m3(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Zt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gn(e,t){for(t&=~ip,t&=~ml,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Kt(t),r=1<<n;e[n]=-1,t&=~r}}function bh(e){if(ae&6)throw Error(F(327));bi();var t=xs(e,0);if(!(t&1))return wt(e,Me()),null;var n=Rs(e,t);if(e.tag!==0&&n===2){var r=su(e);r!==0&&(t=r,n=Iu(e,r))}if(n===1)throw n=Zo,Er(e,0),Gn(e,t),wt(e,Me()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wr(e,mt,xn),wt(e,Me()),null}function ap(e,t){var n=ae;ae|=1;try{return e(t)}finally{ae=n,ae===0&&(Ai=Me()+500,dl&&hr())}}function Vr(e){Kn!==null&&Kn.tag===0&&!(ae&6)&&bi();var t=ae;ae|=1;var n=Dt.transition,r=ue;try{if(Dt.transition=null,ue=1,e)return e()}finally{ue=r,Dt.transition=n,ae=t,!(ae&6)&&hr()}}function sp(){_t=ci.current,xe(ci)}function Er(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,U2(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Bd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_s();break;case 3:zi(),xe(xt),xe(st),Xd();break;case 5:Kd(r);break;case 4:zi();break;case 13:xe(je);break;case 19:xe(je);break;case 10:Ud(r.type._context);break;case 22:case 23:sp()}n=n.return}if(Ge=e,Re=e=or(e.current,null),Qe=_t=t,Fe=0,Zo=null,ip=ml=Rr=0,mt=ko=null,jr!==null){for(t=0;t<jr.length;t++)if(n=jr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}jr=null}return e}function K1(e,t){do{var n=Re;try{if(Hd(),Xa.current=Ms,As){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}As=!1}if(Ir=0,He=De=ke=null,To=!1,Ko=0,rp.current=null,n===null||n.return===null){Fe=1,Zo=t,Re=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Qe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=s,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=lh(a);if(g!==null){g.flags&=-257,ch(g,a,s,o,t),g.mode&1&&sh(o,u,t),t=g,l=u;var x=t.updateQueue;if(x===null){var y=new Set;y.add(l),t.updateQueue=y}else x.add(l);break e}else{if(!(t&1)){sh(o,u,t),lp();break e}l=Error(F(426))}}else if(Se&&s.mode&1){var b=lh(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),ch(b,a,s,o,t),$d(Pi(l,s));break e}}o=l=Pi(l,s),Fe!==4&&(Fe=2),ko===null?ko=[o]:ko.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=M1(o,l,t);th(o,v);break e;case 1:s=l;var h=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(rr===null||!rr.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=L1(o,s,t);th(o,w);break e}}o=o.return}while(o!==null)}Z1(n)}catch(S){t=S,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function X1(){var e=Ls.current;return Ls.current=Ms,e===null?Ms:e}function lp(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Ge===null||!(Rr&268435455)&&!(ml&268435455)||Gn(Ge,Qe)}function Rs(e,t){var n=ae;ae|=2;var r=X1();(Ge!==e||Qe!==t)&&(xn=null,Er(e,t));do try{g3();break}catch(i){K1(e,i)}while(!0);if(Hd(),ae=n,Ls.current=r,Re!==null)throw Error(F(261));return Ge=null,Qe=0,Fe}function g3(){for(;Re!==null;)Q1(Re)}function v3(){for(;Re!==null&&!$w();)Q1(Re)}function Q1(e){var t=ev(e.alternate,e,_t);e.memoizedProps=e.pendingProps,t===null?Z1(e):Re=t,rp.current=null}function Z1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=u3(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Re=null;return}}else if(n=c3(n,t,_t),n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Fe===0&&(Fe=5)}function wr(e,t,n){var r=ue,i=Dt.transition;try{Dt.transition=null,ue=1,x3(e,t,n,r)}finally{Dt.transition=i,ue=r}return null}function x3(e,t,n,r){do bi();while(Kn!==null);if(ae&6)throw Error(F(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Zw(e,o),e===Ge&&(Re=Ge=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ma||(Ma=!0,tv(vs,function(){return bi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Dt.transition,Dt.transition=null;var a=ue;ue=1;var s=ae;ae|=4,rp.current=null,p3(e,n),W1(n,e),D2(fu),ys=!!pu,fu=pu=null,e.current=n,f3(n),qw(),ae=s,ue=a,Dt.transition=o}else e.current=n;if(Ma&&(Ma=!1,Kn=e,Is=i),o=e.pendingLanes,o===0&&(rr=null),Ww(n.stateNode),wt(e,Me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Os)throw Os=!1,e=Lu,Lu=null,e;return Is&1&&e.tag!==0&&bi(),o=e.pendingLanes,o&1?e===Ou?Eo++:(Eo=0,Ou=e):Eo=0,hr(),null}function bi(){if(Kn!==null){var e=Mg(Is),t=Dt.transition,n=ue;try{if(Dt.transition=null,ue=16>e?16:e,Kn===null)var r=!1;else{if(e=Kn,Kn=null,Is=0,ae&6)throw Error(F(331));var i=ae;for(ae|=4,H=e.current;H!==null;){var o=H,a=o.child;if(H.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(H=u;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:Co(8,d,o)}var p=d.child;if(p!==null)p.return=d,H=p;else for(;H!==null;){d=H;var f=d.sibling,g=d.return;if(q1(d),d===u){H=null;break}if(f!==null){f.return=g,H=f;break}H=g}}}var x=o.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}H=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,H=a;else e:for(;H!==null;){if(o=H,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Co(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,H=v;break e}H=o.return}}var h=e.current;for(H=h;H!==null;){a=H;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,H=m;else e:for(a=h;H!==null;){if(s=H,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:hl(9,s)}}catch(S){ze(s,s.return,S)}if(s===a){H=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,H=w;break e}H=s.return}}if(ae=i,hr(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(al,e)}catch{}r=!0}return r}finally{ue=n,Dt.transition=t}}return!1}function Sh(e,t,n){t=Pi(n,t),t=M1(e,t,1),e=nr(e,t,1),t=ut(),e!==null&&(la(e,1,t),wt(e,t))}function ze(e,t,n){if(e.tag===3)Sh(e,e,n);else for(;t!==null;){if(t.tag===3){Sh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rr===null||!rr.has(r))){e=Pi(n,e),e=L1(t,e,1),t=nr(t,e,1),e=ut(),t!==null&&(la(t,1,e),wt(t,e));break}}t=t.return}}function y3(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ut(),e.pingedLanes|=e.suspendedLanes&n,Ge===e&&(Qe&n)===n&&(Fe===4||Fe===3&&(Qe&130023424)===Qe&&500>Me()-op?Er(e,0):ip|=n),wt(e,t)}function J1(e,t){t===0&&(e.mode&1?(t=Sa,Sa<<=1,!(Sa&130023424)&&(Sa=4194304)):t=1);var n=ut();e=Ln(e,t),e!==null&&(la(e,t,n),wt(e,n))}function w3(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),J1(e,n)}function b3(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),J1(e,n)}var ev;ev=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xt.current)gt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return gt=!1,l3(e,t,n);gt=!!(e.flags&131072)}else gt=!1,Se&&t.flags&1048576&&i1(t,Cs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Za(e,t),e=t.pendingProps;var i=Ci(t,st.current);wi(t,n),i=Zd(null,t,r,e,i,n);var o=Jd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,yt(r)?(o=!0,js(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gd(t),i.updater=fl,t.stateNode=i,i._reactInternals=t,Su(t,r,e,n),t=Tu(null,t,r,!0,o,n)):(t.tag=0,Se&&o&&Fd(t),ct(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Za(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=_3(r),e=Ut(r,e),i){case 0:t=ju(null,t,r,e,n);break e;case 1:t=ph(null,t,r,e,n);break e;case 11:t=uh(null,t,r,e,n);break e;case 14:t=dh(null,t,r,Ut(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ut(r,i),ju(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ut(r,i),ph(e,t,r,i,n);case 3:e:{if(V1(t),e===null)throw Error(F(387));r=t.pendingProps,o=t.memoizedState,i=o.element,u1(e,t),zs(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Pi(Error(F(423)),t),t=fh(e,t,r,n,i);break e}else if(r!==i){i=Pi(Error(F(424)),t),t=fh(e,t,r,n,i);break e}else for(Ct=tr(t.stateNode.containerInfo.firstChild),kt=t,Se=!0,Gt=null,n=l1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ki(),r===i){t=On(e,t,n);break e}ct(e,t,r,n)}t=t.child}return t;case 5:return d1(t),e===null&&yu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,hu(r,i)?a=null:o!==null&&hu(r,o)&&(t.flags|=32),R1(e,t),ct(e,t,a,n),t.child;case 6:return e===null&&yu(t),null;case 13:return D1(e,t,n);case 4:return Yd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ei(t,null,r,n):ct(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ut(r,i),uh(e,t,r,i,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,me(ks,r._currentValue),r._currentValue=a,o!==null)if(Zt(o.value,a)){if(o.children===i.children&&!xt.current){t=On(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=jn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),wu(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(F(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),wu(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ct(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,wi(t,n),i=Nt(i),r=r(i),t.flags|=1,ct(e,t,r,n),t.child;case 14:return r=t.type,i=Ut(r,t.pendingProps),i=Ut(r.type,i),dh(e,t,r,i,n);case 15:return O1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ut(r,i),Za(e,t),t.tag=1,yt(r)?(e=!0,js(t)):e=!1,wi(t,n),A1(t,r,i),Su(t,r,i,n),Tu(null,t,r,!0,e,n);case 19:return N1(e,t,n);case 22:return I1(e,t,n)}throw Error(F(156,t.tag))};function tv(e,t){return Eg(e,t)}function S3(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(e,t,n,r){return new S3(e,t,n,r)}function cp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _3(e){if(typeof e=="function")return cp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ed)return 11;if(e===zd)return 14}return 2}function or(e,t){var n=e.alternate;return n===null?(n=Vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ts(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")cp(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Jr:return zr(n.children,i,o,t);case kd:a=8,i|=8;break;case Wc:return e=Vt(12,n,t,i|2),e.elementType=Wc,e.lanes=o,e;case Gc:return e=Vt(13,n,t,i),e.elementType=Gc,e.lanes=o,e;case Yc:return e=Vt(19,n,t,i),e.elementType=Yc,e.lanes=o,e;case dg:return gl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cg:a=10;break e;case ug:a=9;break e;case Ed:a=11;break e;case zd:a=14;break e;case Hn:a=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=Vt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function zr(e,t,n,r){return e=Vt(7,e,r,t),e.lanes=n,e}function gl(e,t,n,r){return e=Vt(22,e,r,t),e.elementType=dg,e.lanes=n,e.stateNode={isHidden:!1},e}function fc(e,t,n){return e=Vt(6,e,null,t),e.lanes=n,e}function hc(e,t,n){return t=Vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function j3(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function up(e,t,n,r,i,o,a,s,l){return e=new j3(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Vt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gd(o),e}function T3(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nv(e){if(!e)return cr;e=e._reactInternals;e:{if(qr(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(yt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(yt(n))return n1(e,n,t)}return t}function rv(e,t,n,r,i,o,a,s,l){return e=up(n,r,!0,e,i,o,a,s,l),e.context=nv(null),n=e.current,r=ut(),i=ir(n),o=jn(r,i),o.callback=t??null,nr(n,o,i),e.current.lanes=i,la(e,i,r),wt(e,r),e}function vl(e,t,n,r){var i=t.current,o=ut(),a=ir(i);return n=nv(n),t.context===null?t.context=n:t.pendingContext=n,t=jn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=nr(i,t,a),e!==null&&(Xt(e,i,a,o),Ka(e,i,a)),a}function Vs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _h(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function dp(e,t){_h(e,t),(e=e.alternate)&&_h(e,t)}function C3(){return null}var iv=typeof reportError=="function"?reportError:function(e){console.error(e)};function pp(e){this._internalRoot=e}xl.prototype.render=pp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));vl(e,t,null,null)};xl.prototype.unmount=pp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vr(function(){vl(null,e,null,null)}),t[Mn]=null}};function xl(e){this._internalRoot=e}xl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ig();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wn.length&&t!==0&&t<Wn[n].priority;n++);Wn.splice(n,0,e),n===0&&Vg(e)}};function fp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jh(){}function k3(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Vs(a);o.call(u)}}var a=rv(t,r,e,0,null,!1,!1,"",jh);return e._reactRootContainer=a,e[Mn]=a.current,Ho(e.nodeType===8?e.parentNode:e),Vr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Vs(l);s.call(u)}}var l=up(e,0,!1,null,null,!1,!1,"",jh);return e._reactRootContainer=l,e[Mn]=l.current,Ho(e.nodeType===8?e.parentNode:e),Vr(function(){vl(t,l,n,r)}),l}function wl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Vs(a);s.call(l)}}vl(t,a,e,i)}else a=k3(n,t,e,i,r);return Vs(a)}Lg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=mo(t.pendingLanes);n!==0&&(Md(t,n|1),wt(t,Me()),!(ae&6)&&(Ai=Me()+500,hr()))}break;case 13:Vr(function(){var r=Ln(e,1);if(r!==null){var i=ut();Xt(r,e,1,i)}}),dp(e,1)}};Ld=function(e){if(e.tag===13){var t=Ln(e,134217728);if(t!==null){var n=ut();Xt(t,e,134217728,n)}dp(e,134217728)}};Og=function(e){if(e.tag===13){var t=ir(e),n=Ln(e,t);if(n!==null){var r=ut();Xt(n,e,t,r)}dp(e,t)}};Ig=function(){return ue};Rg=function(e,t){var n=ue;try{return ue=e,t()}finally{ue=n}};iu=function(e,t,n){switch(t){case"input":if(Qc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ul(r);if(!i)throw Error(F(90));fg(r),Qc(r,i)}}}break;case"textarea":mg(e,n);break;case"select":t=n.value,t!=null&&gi(e,!!n.multiple,t,!1)}};Sg=ap;_g=Vr;var E3={usingClientEntryPoint:!1,Events:[ua,ri,ul,wg,bg,ap]},oo={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},z3={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:In.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cg(e),e===null?null:e.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||C3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var La=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!La.isDisabled&&La.supportsFiber)try{al=La.inject(z3),un=La}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E3;Pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fp(t))throw Error(F(200));return T3(e,t,null,n)};Pt.createRoot=function(e,t){if(!fp(e))throw Error(F(299));var n=!1,r="",i=iv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=up(e,1,!1,null,null,n,!1,r,i),e[Mn]=t.current,Ho(e.nodeType===8?e.parentNode:e),new pp(t)};Pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=Cg(t),e=e===null?null:e.stateNode,e};Pt.flushSync=function(e){return Vr(e)};Pt.hydrate=function(e,t,n){if(!yl(t))throw Error(F(200));return wl(null,e,t,!0,n)};Pt.hydrateRoot=function(e,t,n){if(!fp(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=iv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=rv(t,null,e,1,n??null,i,!1,o,a),e[Mn]=t.current,Ho(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new xl(t)};Pt.render=function(e,t,n){if(!yl(t))throw Error(F(200));return wl(null,e,t,!1,n)};Pt.unmountComponentAtNode=function(e){if(!yl(e))throw Error(F(40));return e._reactRootContainer?(Vr(function(){wl(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1};Pt.unstable_batchedUpdates=ap;Pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yl(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return wl(e,t,n,!1,r)};Pt.version="18.3.1-next-f1338f8080-20240426";function ov(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ov)}catch(e){console.error(e)}}ov(),og.exports=Pt;var P3=og.exports,av,Th=P3;av=Th.createRoot,Th.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jo.apply(this,arguments)}var Xn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Xn||(Xn={}));const Ch="popstate";function A3(e){e===void 0&&(e={});function t(i,o){let{pathname:a="/",search:s="",hash:l=""}=Hr(i.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Vu("",{pathname:a,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let a=i.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof o=="string"?o:Ds(o))}function r(i,o){hp(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return L3(t,n,r,e)}function Ve(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function hp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function M3(){return Math.random().toString(36).substr(2,8)}function kh(e,t){return{usr:e.state,key:e.key,idx:t}}function Vu(e,t,n,r){return n===void 0&&(n=null),Jo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Hr(t):t,{state:n,key:t&&t.key||r||M3()})}function Ds(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Hr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function L3(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=Xn.Pop,l=null,u=d();u==null&&(u=0,a.replaceState(Jo({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){s=Xn.Pop;let b=d(),v=b==null?null:b-u;u=b,l&&l({action:s,location:y.location,delta:v})}function f(b,v){s=Xn.Push;let h=Vu(y.location,b,v);n&&n(h,b),u=d()+1;let m=kh(h,u),w=y.createHref(h);try{a.pushState(m,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(w)}o&&l&&l({action:s,location:y.location,delta:1})}function g(b,v){s=Xn.Replace;let h=Vu(y.location,b,v);n&&n(h,b),u=d();let m=kh(h,u),w=y.createHref(h);a.replaceState(m,"",w),o&&l&&l({action:s,location:y.location,delta:0})}function x(b){let v=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof b=="string"?b:Ds(b);return h=h.replace(/ $/,"%20"),Ve(v,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,v)}let y={get action(){return s},get location(){return e(i,a)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ch,p),l=b,()=>{i.removeEventListener(Ch,p),l=null}},createHref(b){return t(i,b)},createURL:x,encodeLocation(b){let v=x(b);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:g,go(b){return a.go(b)}};return y}var Eh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Eh||(Eh={}));function O3(e,t,n){return n===void 0&&(n="/"),I3(e,t,n,!1)}function I3(e,t,n,r){let i=typeof t=="string"?Hr(t):t,o=mp(i.pathname||"/",n);if(o==null)return null;let a=sv(e);R3(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let u=G3(o);s=U3(a[l],u,r)}return s}function sv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(Ve(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ar([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(Ve(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),sv(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:q3(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of lv(o.path))i(o,a,l)}),t}function lv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=lv(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function R3(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:H3(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const V3=/^:[\w-]+$/,D3=3,N3=2,F3=1,B3=10,$3=-2,zh=e=>e==="*";function q3(e,t){let n=e.split("/"),r=n.length;return n.some(zh)&&(r+=$3),t&&(r+=N3),n.filter(i=>!zh(i)).reduce((i,o)=>i+(V3.test(o)?D3:o===""?F3:B3),r)}function H3(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function U3(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=Ph({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),f=l.route;if(!p&&u&&n&&!r[r.length-1].route.index&&(p=Ph({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:ar([o,p.pathname]),pathnameBase:Q3(ar([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=ar([o,p.pathnameBase]))}return a}function Ph(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=W3(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:g}=d;if(f==="*"){let y=s[p]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const x=s[p];return g&&!x?u[f]=void 0:u[f]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function W3(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),hp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function G3(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return hp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function mp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Y3(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Hr(e):e;return{pathname:n?n.startsWith("/")?n:K3(n,t):t,search:Z3(r),hash:J3(i)}}function K3(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function mc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function X3(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function cv(e,t){let n=X3(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function uv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Hr(e):(i=Jo({},e),Ve(!i.pathname||!i.pathname.includes("?"),mc("?","pathname","search",i)),Ve(!i.pathname||!i.pathname.includes("#"),mc("#","pathname","hash",i)),Ve(!i.search||!i.search.includes("#"),mc("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}s=p>=0?t[p]:"/"}let l=Y3(i,s),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const ar=e=>e.join("/").replace(/\/\/+/g,"/"),Q3=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Z3=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,J3=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function eb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const dv=["post","put","patch","delete"];new Set(dv);const tb=["get",...dv];new Set(tb);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea(){return ea=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ea.apply(this,arguments)}const gp=_.createContext(null),nb=_.createContext(null),Ur=_.createContext(null),bl=_.createContext(null),Wr=_.createContext({outlet:null,matches:[],isDataRoute:!1}),pv=_.createContext(null);function rb(e,t){let{relative:n}=t===void 0?{}:t;pa()||Ve(!1);let{basename:r,navigator:i}=_.useContext(Ur),{hash:o,pathname:a,search:s}=hv(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:ar([r,a])),i.createHref({pathname:l,search:s,hash:o})}function pa(){return _.useContext(bl)!=null}function Rn(){return pa()||Ve(!1),_.useContext(bl).location}function fv(e){_.useContext(Ur).static||_.useLayoutEffect(e)}function Sl(){let{isDataRoute:e}=_.useContext(Wr);return e?gb():ib()}function ib(){pa()||Ve(!1);let e=_.useContext(gp),{basename:t,future:n,navigator:r}=_.useContext(Ur),{matches:i}=_.useContext(Wr),{pathname:o}=Rn(),a=JSON.stringify(cv(i,n.v7_relativeSplatPath)),s=_.useRef(!1);return fv(()=>{s.current=!0}),_.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let p=uv(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:ar([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,o,e])}function hv(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=_.useContext(Ur),{matches:i}=_.useContext(Wr),{pathname:o}=Rn(),a=JSON.stringify(cv(i,r.v7_relativeSplatPath));return _.useMemo(()=>uv(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function ob(e,t){return ab(e,t)}function ab(e,t,n,r){pa()||Ve(!1);let{navigator:i}=_.useContext(Ur),{matches:o}=_.useContext(Wr),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=Rn(),d;if(t){var p;let b=typeof t=="string"?Hr(t):t;l==="/"||(p=b.pathname)!=null&&p.startsWith(l)||Ve(!1),d=b}else d=u;let f=d.pathname||"/",g=f;if(l!=="/"){let b=l.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(b.length).join("/")}let x=O3(e,{pathname:g}),y=db(x&&x.map(b=>Object.assign({},b,{params:Object.assign({},s,b.params),pathname:ar([l,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:ar([l,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),o,n,r);return t&&y?_.createElement(bl.Provider,{value:{location:ea({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Xn.Pop}},y):y}function sb(){let e=mb(),t=eb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:i},n):null,null)}const lb=_.createElement(sb,null);class cb extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?_.createElement(Wr.Provider,{value:this.props.routeContext},_.createElement(pv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ub(e){let{routeContext:t,match:n,children:r}=e,i=_.useContext(gp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(Wr.Provider,{value:t},r)}function db(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let d=a.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);d>=0||Ve(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:g}=n,x=p.route.loader&&f[p.route.id]===void 0&&(!g||g[p.route.id]===void 0);if(p.route.lazy||x){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let g,x=!1,y=null,b=null;n&&(g=s&&p.route.id?s[p.route.id]:void 0,y=p.route.errorElement||lb,l&&(u<0&&f===0?(x=!0,b=null):u===f&&(x=!0,b=p.route.hydrateFallbackElement||null)));let v=t.concat(a.slice(0,f+1)),h=()=>{let m;return g?m=y:x?m=b:p.route.Component?m=_.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=d,_.createElement(ub,{match:p,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:m})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?_.createElement(cb,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:h(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):h()},null)}var mv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(mv||{}),Ns=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ns||{});function pb(e){let t=_.useContext(gp);return t||Ve(!1),t}function fb(e){let t=_.useContext(nb);return t||Ve(!1),t}function hb(e){let t=_.useContext(Wr);return t||Ve(!1),t}function gv(e){let t=hb(),n=t.matches[t.matches.length-1];return n.route.id||Ve(!1),n.route.id}function mb(){var e;let t=_.useContext(pv),n=fb(Ns.UseRouteError),r=gv(Ns.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function gb(){let{router:e}=pb(mv.UseNavigateStable),t=gv(Ns.UseNavigateStable),n=_.useRef(!1);return fv(()=>{n.current=!0}),_.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ea({fromRouteId:t},o)))},[e,t])}function Fn(e){Ve(!1)}function vb(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Xn.Pop,navigator:o,static:a=!1,future:s}=e;pa()&&Ve(!1);let l=t.replace(/^\/*/,"/"),u=_.useMemo(()=>({basename:l,navigator:o,static:a,future:ea({v7_relativeSplatPath:!1},s)}),[l,s,o,a]);typeof r=="string"&&(r=Hr(r));let{pathname:d="/",search:p="",hash:f="",state:g=null,key:x="default"}=r,y=_.useMemo(()=>{let b=mp(d,l);return b==null?null:{location:{pathname:b,search:p,hash:f,state:g,key:x},navigationType:i}},[l,d,p,f,g,x,i]);return y==null?null:_.createElement(Ur.Provider,{value:u},_.createElement(bl.Provider,{children:n,value:y}))}function xb(e){let{children:t,location:n}=e;return ob(Du(t),n)}new Promise(()=>{});function Du(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,i)=>{if(!_.isValidElement(r))return;let o=[...t,i];if(r.type===_.Fragment){n.push.apply(n,Du(r.props.children,o));return}r.type!==Fn&&Ve(!1),!r.props.index||!r.props.children||Ve(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Du(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nu(){return Nu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Nu.apply(this,arguments)}function yb(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function wb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function bb(e,t){return e.button===0&&(!t||t==="_self")&&!wb(e)}const Sb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],_b="6";try{window.__reactRouterVersion=_b}catch{}const jb="startTransition",Ah=yw[jb];function Tb(e){let{basename:t,children:n,future:r,window:i}=e,o=_.useRef();o.current==null&&(o.current=A3({window:i,v5Compat:!0}));let a=o.current,[s,l]=_.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=_.useCallback(p=>{u&&Ah?Ah(()=>l(p)):l(p)},[l,u]);return _.useLayoutEffect(()=>a.listen(d),[a,d]),_.createElement(vb,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const Cb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vv=_.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:d,viewTransition:p}=t,f=yb(t,Sb),{basename:g}=_.useContext(Ur),x,y=!1;if(typeof u=="string"&&kb.test(u)&&(x=u,Cb))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),S=mp(w.pathname,g);w.origin===m.origin&&S!=null?u=S+w.search+w.hash:y=!0}catch{}let b=rb(u,{relative:i}),v=Eb(u,{replace:a,state:s,target:l,preventScrollReset:d,relative:i,viewTransition:p});function h(m){r&&r(m),m.defaultPrevented||v(m)}return _.createElement("a",Nu({},f,{href:x||b,onClick:y||o?r:h,ref:n,target:l}))});var Mh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Mh||(Mh={}));var Lh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Lh||(Lh={}));function Eb(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:s}=t===void 0?{}:t,l=Sl(),u=Rn(),d=hv(e,{relative:a});return _.useCallback(p=>{if(bb(p,n)){p.preventDefault();let f=r!==void 0?r:Ds(u)===Ds(d);l(e,{replace:f,state:i,preventScrollReset:o,relative:a,viewTransition:s})}},[u,l,d,r,i,n,e,o,a,s])}function zb(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}function _l(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Fu=e=>Array.isArray(e);function xv(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function ta(e){return typeof e=="string"||Array.isArray(e)}function Oh(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function vp(e,t,n,r){if(typeof t=="function"){const[i,o]=Oh(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=Oh(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function jl(e,t,n){const r=e.getProps();return vp(r,t,n!==void 0?n:r.custom,e)}const xp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],yp=["initial",...xp],fa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Gr=new Set(fa),Tn=e=>e*1e3,Cn=e=>e/1e3,Pb={type:"spring",stiffness:500,damping:25,restSpeed:10},Ab=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Mb={type:"keyframes",duration:.8},Lb={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ob=(e,{keyframes:t})=>t.length>2?Mb:Gr.has(e)?e.startsWith("scale")?Ab(t[1]):Pb:Lb;function wp(e,t){return e?e[t]||e.default||e:void 0}const Ib={skipAnimations:!1,useManualTiming:!1},Rb=e=>e!==null;function Tl(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(Rb),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const Ze=e=>e;function Vb(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function s(u){o.has(u)&&(l.schedule(u),e()),u(a)}const l={schedule:(u,d=!1,p=!1)=>{const g=p&&r?t:n;return d&&o.add(u),g.has(u)||g.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(a=u,r){i=!0;return}r=!0,[t,n]=[n,t],n.clear(),t.forEach(s),r=!1,i&&(i=!1,l.process(u))}};return l}const Oa=["read","resolveKeyframes","update","preRender","render","postRender"],Db=40;function yv(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,a=Oa.reduce((v,h)=>(v[h]=Vb(o),v),{}),{read:s,resolveKeyframes:l,update:u,preRender:d,render:p,postRender:f}=a,g=()=>{const v=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(v-i.timestamp,Db),1),i.timestamp=v,i.isProcessing=!0,s.process(i),l.process(i),u.process(i),d.process(i),p.process(i),f.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(g))},x=()=>{n=!0,r=!0,i.isProcessing||e(g)};return{schedule:Oa.reduce((v,h)=>{const m=a[h];return v[h]=(w,S=!1,j=!1)=>(n||x(),m.schedule(w,S,j)),v},{}),cancel:v=>{for(let h=0;h<Oa.length;h++)a[Oa[h]].cancel(v)},state:i,steps:a}}const{schedule:oe,cancel:Jt,state:Be,steps:gc}=yv(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ze,!0),wv=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Nb=1e-7,Fb=12;function Bb(e,t,n,r,i){let o,a,s=0;do a=t+(n-t)/2,o=wv(a,r,i)-e,o>0?n=a:t=a;while(Math.abs(o)>Nb&&++s<Fb);return a}function ha(e,t,n,r){if(e===t&&n===r)return Ze;const i=o=>Bb(o,0,1,e,n);return o=>o===0||o===1?o:wv(i(o),t,r)}const bv=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Sv=e=>t=>1-e(1-t),_v=ha(.33,1.53,.69,.99),bp=Sv(_v),jv=bv(bp),Tv=e=>(e*=2)<1?.5*bp(e):.5*(2-Math.pow(2,-10*(e-1))),Sp=e=>1-Math.sin(Math.acos(e)),Cv=Sv(Sp),kv=bv(Sp),Ev=e=>/^0[^.\s]+$/u.test(e);function $b(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Ev(e):!0}let qb=Ze,Bu=Ze;const zv=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Pv=e=>t=>typeof t=="string"&&t.startsWith(e),Av=Pv("--"),Hb=Pv("var(--"),_p=e=>Hb(e)?Ub.test(e.split("/*")[0].trim()):!1,Ub=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Wb=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Gb(e){const t=Wb.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Mv(e,t,n=1){const[r,i]=Gb(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const a=o.trim();return zv(a)?parseFloat(a):a}return _p(i)?Mv(i,t,n+1):i}const ur=(e,t,n)=>n>t?t:n<e?e:n,qi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},na={...qi,transform:e=>ur(0,1,e)},Ia={...qi,default:1},ma=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Bn=ma("deg"),pn=ma("%"),W=ma("px"),Yb=ma("vh"),Kb=ma("vw"),Ih={...pn,parse:e=>pn.parse(e)/100,transform:e=>pn.transform(e*100)},Xb=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Rh=e=>e===qi||e===W,Vh=(e,t)=>parseFloat(e.split(", ")[t]),Dh=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Vh(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?Vh(o[1],e):0}},Qb=new Set(["x","y","z"]),Zb=fa.filter(e=>!Qb.has(e));function Jb(e){const t=[];return Zb.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Mi={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Dh(4,13),y:Dh(5,14)};Mi.translateX=Mi.x;Mi.translateY=Mi.y;const Lv=e=>t=>t.test(e),e5={test:e=>e==="auto",parse:e=>e},Ov=[qi,W,pn,Bn,Kb,Yb,e5],Nh=e=>Ov.find(Lv(e)),Pr=new Set;let $u=!1,qu=!1;function Iv(){if(qu){const e=Array.from(Pr).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=Jb(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,a])=>{var s;(s=r.getValue(o))===null||s===void 0||s.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}qu=!1,$u=!1,Pr.forEach(e=>e.complete()),Pr.clear()}function Rv(){Pr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(qu=!0)})}function t5(){Rv(),Iv()}class jp{constructor(t,n,r,i,o,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Pr.add(this),$u||($u=!0,oe.read(Rv),oe.resolveKeyframes(Iv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const a=i==null?void 0:i.get(),s=t[t.length-1];if(a!==void 0)t[0]=a;else if(r&&n){const l=r.readValue(n,s);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=s),i&&a===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Pr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Pr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const zo=e=>Math.round(e*1e5)/1e5,Tp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function n5(e){return e==null}const r5=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Cp=(e,t)=>n=>!!(typeof n=="string"&&r5.test(n)&&n.startsWith(e)||t&&!n5(n)&&Object.prototype.hasOwnProperty.call(n,t)),Vv=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,a,s]=r.match(Tp);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:s!==void 0?parseFloat(s):1}},i5=e=>ur(0,255,e),vc={...qi,transform:e=>Math.round(i5(e))},Cr={test:Cp("rgb","red"),parse:Vv("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+vc.transform(e)+", "+vc.transform(t)+", "+vc.transform(n)+", "+zo(na.transform(r))+")"};function o5(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Hu={test:Cp("#"),parse:o5,transform:Cr.transform},ui={test:Cp("hsl","hue"),parse:Vv("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+pn.transform(zo(t))+", "+pn.transform(zo(n))+", "+zo(na.transform(r))+")"},rt={test:e=>Cr.test(e)||Hu.test(e)||ui.test(e),parse:e=>Cr.test(e)?Cr.parse(e):ui.test(e)?ui.parse(e):Hu.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Cr.transform(e):ui.transform(e)},a5=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function s5(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Tp))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(a5))===null||n===void 0?void 0:n.length)||0)>0}const Dv="number",Nv="color",l5="var",c5="var(",Fh="${}",u5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ra(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const s=t.replace(u5,l=>(rt.test(l)?(r.color.push(o),i.push(Nv),n.push(rt.parse(l))):l.startsWith(c5)?(r.var.push(o),i.push(l5),n.push(l)):(r.number.push(o),i.push(Dv),n.push(parseFloat(l))),++o,Fh)).split(Fh);return{values:n,split:s,indexes:r,types:i}}function Fv(e){return ra(e).values}function Bv(e){const{split:t,types:n}=ra(e),r=t.length;return i=>{let o="";for(let a=0;a<r;a++)if(o+=t[a],i[a]!==void 0){const s=n[a];s===Dv?o+=zo(i[a]):s===Nv?o+=rt.transform(i[a]):o+=i[a]}return o}}const d5=e=>typeof e=="number"?0:e;function p5(e){const t=Fv(e);return Bv(e)(t.map(d5))}const dr={test:s5,parse:Fv,createTransformer:Bv,getAnimatableNone:p5},f5=new Set(["brightness","contrast","saturate","opacity"]);function h5(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Tp)||[];if(!r)return e;const i=n.replace(r,"");let o=f5.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const m5=/\b([a-z-]*)\(.*?\)/gu,Uu={...dr,getAnimatableNone:e=>{const t=e.match(m5);return t?t.map(h5).join(" "):e}},g5={borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,radius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,top:W,right:W,bottom:W,left:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,backgroundPositionX:W,backgroundPositionY:W},v5={rotate:Bn,rotateX:Bn,rotateY:Bn,rotateZ:Bn,scale:Ia,scaleX:Ia,scaleY:Ia,scaleZ:Ia,skew:Bn,skewX:Bn,skewY:Bn,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:na,originX:Ih,originY:Ih,originZ:W},Bh={...qi,transform:Math.round},kp={...g5,...v5,zIndex:Bh,size:W,fillOpacity:na,strokeOpacity:na,numOctaves:Bh},x5={...kp,color:rt,backgroundColor:rt,outlineColor:rt,fill:rt,stroke:rt,borderColor:rt,borderTopColor:rt,borderRightColor:rt,borderBottomColor:rt,borderLeftColor:rt,filter:Uu,WebkitFilter:Uu},Ep=e=>x5[e];function $v(e,t){let n=Ep(e);return n!==Uu&&(n=dr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const y5=new Set(["auto","none","0"]);function w5(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!y5.has(o)&&ra(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=$v(n,i)}class qv extends jp{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),_p(u))){const d=Mv(u,n.current);d!==void 0&&(t[l]=d),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!Xb.has(r)||t.length!==2)return;const[i,o]=t,a=Nh(i),s=Nh(o);if(a!==s)if(Rh(a)&&Rh(s))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)$b(t[i])&&r.push(i);r.length&&w5(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Mi[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const a=i.length-1,s=i[a];i[a]=Mi[r](n.measureViewportBox(),window.getComputedStyle(n.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function zp(e){return typeof e=="function"}let ns;function b5(){ns=void 0}const fn={now:()=>(ns===void 0&&fn.set(Be.isProcessing||Ib.useManualTiming?Be.timestamp:performance.now()),ns),set:e=>{ns=e,queueMicrotask(b5)}},$h=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(dr.test(e)||e==="0")&&!e.startsWith("url("));function S5(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function _5(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],a=$h(i,t),s=$h(o,t);return!a||!s?!1:S5(e)||(n==="spring"||zp(n))&&r}const j5=40;class Hv{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a="loop",...s}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=fn.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:a,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>j5?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&t5(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=fn.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:a,onComplete:s,onUpdate:l,isGenerator:u}=this.options;if(!u&&!_5(t,r,i,o))if(a)this.options.duration=0;else{l==null||l(Tl(t,this.options,n)),s==null||s(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function Pp(e,t){return t?e*(1e3/t):0}const T5=5;function Uv(e,t,n){const r=Math.max(t-T5,0);return Pp(n-e(r),t-r)}const xc=.001,C5=.01,k5=10,E5=.05,z5=1;function P5({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o,a=1-t;a=ur(E5,z5,a),e=ur(C5,k5,Cn(e)),a<1?(i=u=>{const d=u*a,p=d*e,f=d-n,g=Wu(u,a),x=Math.exp(-p);return xc-f/g*x},o=u=>{const p=u*a*e,f=p*n+n,g=Math.pow(a,2)*Math.pow(u,2)*e,x=Math.exp(-p),y=Wu(Math.pow(u,2),a);return(-i(u)+xc>0?-1:1)*((f-g)*x)/y}):(i=u=>{const d=Math.exp(-u*e),p=(u-n)*e+1;return-xc+d*p},o=u=>{const d=Math.exp(-u*e),p=(n-u)*(e*e);return d*p});const s=5/e,l=M5(i,o,s);if(e=Tn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const A5=12;function M5(e,t,n){let r=n;for(let i=1;i<A5;i++)r=r-e(r)/t(r);return r}function Wu(e,t){return e*Math.sqrt(1-t*t)}const L5=["duration","bounce"],O5=["stiffness","damping","mass"];function qh(e,t){return t.some(n=>e[n]!==void 0)}function I5(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!qh(e,O5)&&qh(e,L5)){const n=P5(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function Wv({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],a={done:!1,value:i},{stiffness:s,damping:l,mass:u,duration:d,velocity:p,isResolvedFromDuration:f}=I5({...r,velocity:-Cn(r.velocity||0)}),g=p||0,x=l/(2*Math.sqrt(s*u)),y=o-i,b=Cn(Math.sqrt(s/u)),v=Math.abs(y)<5;n||(n=v?.01:2),t||(t=v?.005:.5);let h;if(x<1){const m=Wu(b,x);h=w=>{const S=Math.exp(-x*b*w);return o-S*((g+x*b*y)/m*Math.sin(m*w)+y*Math.cos(m*w))}}else if(x===1)h=m=>o-Math.exp(-b*m)*(y+(g+b*y)*m);else{const m=b*Math.sqrt(x*x-1);h=w=>{const S=Math.exp(-x*b*w),j=Math.min(m*w,300);return o-S*((g+x*b*y)*Math.sinh(j)+m*y*Math.cosh(j))/m}}return{calculatedDuration:f&&d||null,next:m=>{const w=h(m);if(f)a.done=m>=d;else{let S=0;x<1&&(S=m===0?Tn(g):Uv(h,m,w));const j=Math.abs(S)<=n,C=Math.abs(o-w)<=t;a.done=j&&C}return a.value=a.done?o:w,a}}}function Hh({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:a,min:s,max:l,restDelta:u=.5,restSpeed:d}){const p=e[0],f={done:!1,value:p},g=T=>s!==void 0&&T<s||l!==void 0&&T>l,x=T=>s===void 0?l:l===void 0||Math.abs(s-T)<Math.abs(l-T)?s:l;let y=n*t;const b=p+y,v=a===void 0?b:a(b);v!==b&&(y=v-p);const h=T=>-y*Math.exp(-T/r),m=T=>v+h(T),w=T=>{const A=h(T),E=m(T);f.done=Math.abs(A)<=u,f.value=f.done?v:E};let S,j;const C=T=>{g(f.value)&&(S=T,j=Wv({keyframes:[f.value,x(f.value)],velocity:Uv(m,T,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return C(0),{calculatedDuration:null,next:T=>{let A=!1;return!j&&S===void 0&&(A=!0,w(T),C(T)),S!==void 0&&T>=S?j.next(T-S):(!A&&w(T),f)}}}const R5=ha(.42,0,1,1),V5=ha(0,0,.58,1),Gv=ha(.42,0,.58,1),D5=e=>Array.isArray(e)&&typeof e[0]!="number",Ap=e=>Array.isArray(e)&&typeof e[0]=="number",Uh={linear:Ze,easeIn:R5,easeInOut:Gv,easeOut:V5,circIn:Sp,circInOut:kv,circOut:Cv,backIn:bp,backInOut:jv,backOut:_v,anticipate:Tv},Wh=e=>{if(Ap(e)){Bu(e.length===4);const[t,n,r,i]=e;return ha(t,n,r,i)}else if(typeof e=="string")return Bu(Uh[e]!==void 0),Uh[e];return e},N5=(e,t)=>n=>t(e(n)),kn=(...e)=>e.reduce(N5),Dr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Te=(e,t,n)=>e+(t-e)*n;function yc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function F5({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,a=0;if(!t)i=o=a=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;i=yc(l,s,e+1/3),o=yc(l,s,e),a=yc(l,s,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(a*255),alpha:r}}function Fs(e,t){return n=>n>0?t:e}const wc=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},B5=[Hu,Cr,ui],$5=e=>B5.find(t=>t.test(e));function Gh(e){const t=$5(e);if(!t)return!1;let n=t.parse(e);return t===ui&&(n=F5(n)),n}const Yh=(e,t)=>{const n=Gh(e),r=Gh(t);if(!n||!r)return Fs(e,t);const i={...n};return o=>(i.red=wc(n.red,r.red,o),i.green=wc(n.green,r.green,o),i.blue=wc(n.blue,r.blue,o),i.alpha=Te(n.alpha,r.alpha,o),Cr.transform(i))},Gu=new Set(["none","hidden"]);function q5(e,t){return Gu.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function H5(e,t){return n=>Te(e,t,n)}function Mp(e){return typeof e=="number"?H5:typeof e=="string"?_p(e)?Fs:rt.test(e)?Yh:G5:Array.isArray(e)?Yv:typeof e=="object"?rt.test(e)?Yh:U5:Fs}function Yv(e,t){const n=[...e],r=n.length,i=e.map((o,a)=>Mp(o)(o,t[a]));return o=>{for(let a=0;a<r;a++)n[a]=i[a](o);return n}}function U5(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Mp(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function W5(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const a=t.types[o],s=e.indexes[a][i[a]],l=(n=e.values[s])!==null&&n!==void 0?n:0;r[o]=l,i[a]++}return r}const G5=(e,t)=>{const n=dr.createTransformer(t),r=ra(e),i=ra(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Gu.has(e)&&!i.values.length||Gu.has(t)&&!r.values.length?q5(e,t):kn(Yv(W5(r,i),i.values),n):Fs(e,t)};function Kv(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Te(e,t,n):Mp(e)(e,t)}function Y5(e,t,n){const r=[],i=n||Kv,o=e.length-1;for(let a=0;a<o;a++){let s=i(e[a],e[a+1]);if(t){const l=Array.isArray(t)?t[a]||Ze:t;s=kn(l,s)}r.push(s)}return r}function Lp(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Bu(o===t.length),o===1)return()=>t[0];if(o===2&&e[0]===e[1])return()=>t[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=Y5(t,r,i),s=a.length,l=u=>{let d=0;if(s>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const p=Dr(e[d],e[d+1],u);return a[d](p)};return n?u=>l(ur(e[0],e[o-1],u)):l}function K5(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Dr(0,t,r);e.push(Te(n,1,i))}}function Xv(e){const t=[0];return K5(t,e.length-1),t}function X5(e,t){return e.map(n=>n*t)}function Q5(e,t){return e.map(()=>t||Gv).splice(0,e.length-1)}function Bs({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=D5(r)?r.map(Wh):Wh(r),o={done:!1,value:t[0]},a=X5(n&&n.length===t.length?n:Xv(t),e),s=Lp(a,t,{ease:Array.isArray(i)?i:Q5(t,i)});return{calculatedDuration:e,next:l=>(o.value=s(l),o.done=l>=e,o)}}const Kh=2e4;function Z5(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Kh;)t+=n,r=e.next(t);return t>=Kh?1/0:t}const J5=e=>{const t=({timestamp:n})=>e(n);return{start:()=>oe.update(t,!0),stop:()=>Jt(t),now:()=>Be.isProcessing?Be.timestamp:fn.now()}},eS={decay:Hh,inertia:Hh,tween:Bs,keyframes:Bs,spring:Wv},tS=e=>e/100;class Op extends Hv{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,a=(i==null?void 0:i.KeyframeResolver)||jp,s=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new a(o,s,n,r,i),this.resolver.scheduleResolve()}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:a=0}=this.options,s=zp(n)?n:eS[n]||Bs;let l,u;s!==Bs&&typeof t[0]!="number"&&(l=kn(tS,Kv(t[0],t[1])),t=[0,100]);const d=s({...this.options,keyframes:t});o==="mirror"&&(u=s({...this.options,keyframes:[...t].reverse(),velocity:-a})),d.calculatedDuration===null&&(d.calculatedDuration=Z5(d));const{calculatedDuration:p}=d,f=p+i,g=f*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:p,resolvedDuration:f,totalDuration:g}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:T}=this.options;return{done:!0,value:T[T.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:a,mapPercentToKeyframes:s,keyframes:l,calculatedDuration:u,totalDuration:d,resolvedDuration:p}=r;if(this.startTime===null)return o.next(0);const{delay:f,repeat:g,repeatType:x,repeatDelay:y,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const v=this.currentTime-f*(this.speed>=0?1:-1),h=this.speed>=0?v<0:v>d;this.currentTime=Math.max(v,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let m=this.currentTime,w=o;if(g){const T=Math.min(this.currentTime,d)/p;let A=Math.floor(T),E=T%1;!E&&T>=1&&(E=1),E===1&&A--,A=Math.min(A,g+1),!!(A%2)&&(x==="reverse"?(E=1-E,y&&(E-=y/p)):x==="mirror"&&(w=a)),m=ur(0,1,E)*p}const S=h?{done:!1,value:l[0]}:w.next(m);s&&(S.value=s(S.value));let{done:j}=S;!h&&u!==null&&(j=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&j);return C&&i!==void 0&&(S.value=Tl(l,this.options,i)),b&&b(S.value),C&&this.finish(),S}get duration(){const{resolved:t}=this;return t?Cn(t.calculatedDuration):0}get time(){return Cn(this.currentTime)}set time(t){t=Tn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Cn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=J5,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const nS=new Set(["opacity","clipPath","filter","transform"]),rS=10,iS=(e,t)=>{let n="";const r=Math.max(Math.round(t/rS),2);for(let i=0;i<r;i++)n+=e(Dr(0,r-1,i))+", ";return`linear(${n.substring(0,n.length-2)})`};function Ip(e){let t;return()=>(t===void 0&&(t=e()),t)}const oS={linearEasing:void 0};function aS(e,t){const n=Ip(e);return()=>{var r;return(r=oS[t])!==null&&r!==void 0?r:n()}}const $s=aS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function Qv(e){return!!(typeof e=="function"&&$s()||!e||typeof e=="string"&&(e in Yu||$s())||Ap(e)||Array.isArray(e)&&e.every(Qv))}const vo=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Yu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:vo([0,.65,.55,1]),circOut:vo([.55,0,1,.45]),backIn:vo([.31,.01,.66,-.59]),backOut:vo([.33,1.53,.69,.99])};function Zv(e,t){if(e)return typeof e=="function"&&$s()?iS(e,t):Ap(e)?vo(e):Array.isArray(e)?e.map(n=>Zv(n,t)||Yu.easeOut):Yu[e]}function sS(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:a="loop",ease:s,times:l}={}){const u={[t]:n};l&&(u.offset=l);const d=Zv(s,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:a==="reverse"?"alternate":"normal"})}function Xh(e,t){e.timeline=t,e.onfinish=null}const lS=Ip(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),qs=10,cS=2e4;function uS(e){return zp(e.type)||e.type==="spring"||!Qv(e.ease)}function dS(e,t){const n=new Op({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<cS;)r=n.sample(o),i.push(r.value),o+=qs;return{times:void 0,keyframes:i,duration:o-qs,ease:"linear"}}const Jv={anticipate:Tv,backInOut:jv,circInOut:kv};function pS(e){return e in Jv}class Qh extends Hv{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new qv(o,(a,s)=>this.onKeyframesResolved(a,s),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){var r;let{duration:i=300,times:o,ease:a,type:s,motionValue:l,name:u,startTime:d}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(typeof a=="string"&&$s()&&pS(a)&&(a=Jv[a]),uS(this.options)){const{onComplete:f,onUpdate:g,motionValue:x,element:y,...b}=this.options,v=dS(t,b);t=v.keyframes,t.length===1&&(t[1]=t[0]),i=v.duration,o=v.times,a=v.ease,s="keyframes"}const p=sS(l.owner.current,u,t,{...this.options,duration:i,times:o,ease:a});return p.startTime=d??this.calcStartTime(),this.pendingTimeline?(Xh(p,this.pendingTimeline),this.pendingTimeline=void 0):p.onfinish=()=>{const{onComplete:f}=this.options;l.set(Tl(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:p,duration:i,times:o,type:s,ease:a,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Cn(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Cn(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Tn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Ze;const{animation:r}=n;Xh(r,t)}return Ze}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:a,times:s}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:p,element:f,...g}=this.options,x=new Op({...g,keyframes:r,duration:i,type:o,ease:a,times:s,isGenerator:!0}),y=Tn(this.time);u.setWithVelocity(x.sample(y-qs).value,x.sample(y).value,qs)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:a,type:s}=t;return lS()&&r&&nS.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&o!=="mirror"&&a!==0&&s!=="inertia"}}const ex=Ip(()=>window.ScrollTimeline!==void 0);class fS{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>ex()&&i.attachTimeline?i.attachTimeline(t):n(i));return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function hS({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:a,repeatDelay:s,from:l,elapsed:u,...d}){return!!Object.keys(d).length}const Rp=(e,t,n,r={},i,o)=>a=>{const s=wp(r,e)||{},l=s.delay||r.delay||0;let{elapsed:u=0}=r;u=u-Tn(l);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-u,onUpdate:f=>{t.set(f),s.onUpdate&&s.onUpdate(f)},onComplete:()=>{a(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:o?void 0:i};hS(s)||(d={...d,...Ob(e,d)}),d.duration&&(d.duration=Tn(d.duration)),d.repeatDelay&&(d.repeatDelay=Tn(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let p=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(p=!0)),p&&!o&&t.get()!==void 0){const f=Tl(d.keyframes,s);if(f!==void 0)return oe.update(()=>{d.onUpdate(f),d.onComplete()}),new fS([])}return!o&&Qh.supports(d)?new Qh(d):new Op(d)},mS=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),gS=e=>Fu(e)?e[e.length-1]||0:e;function Vp(e,t){e.indexOf(t)===-1&&e.push(t)}function Dp(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Np{constructor(){this.subscriptions=[]}add(t){return Vp(this.subscriptions,t),()=>Dp(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const a=this.subscriptions[o];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Zh=30,vS=e=>!isNaN(parseFloat(e)),Po={current:void 0};class xS{constructor(t,n={}){this.version="11.11.11",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=fn.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=fn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=vS(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Np);const r=this.events[t].add(n);return t==="change"?()=>{r(),oe.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Po.current&&Po.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=fn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Zh)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Zh);return Pp(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ln(e,t){return new xS(e,t)}function yS(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ln(n))}function wS(e,t){const n=jl(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const a in o){const s=gS(o[a]);yS(e,a,s)}}const Fp=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),bS="framerAppearId",tx="data-"+Fp(bS);function nx(e){return e.props[tx]}const ot=e=>!!(e&&e.getVelocity);function SS(e){return!!(ot(e)&&e.add)}function Ku(e,t){const n=e.getValue("willChange");if(SS(n))return n.add(t)}function _S({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function rx(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:a=e.getDefaultTransition(),transitionEnd:s,...l}=t;r&&(a=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const p in l){const f=e.getValue(p,(o=e.latestValues[p])!==null&&o!==void 0?o:null),g=l[p];if(g===void 0||d&&_S(d,p))continue;const x={delay:n,...wp(a||{},p)};let y=!1;if(window.MotionHandoffAnimation){const v=nx(e);if(v){const h=window.MotionHandoffAnimation(v,p,oe);h!==null&&(x.startTime=h,y=!0)}}Ku(e,p),f.start(Rp(p,f,g,e.shouldReduceMotion&&Gr.has(p)?{type:!1}:x,e,y));const b=f.animation;b&&u.push(b)}return s&&Promise.all(u).then(()=>{oe.update(()=>{s&&wS(e,s)})}),u}function Xu(e,t,n={}){var r;const i=jl(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const a=i?()=>Promise.all(rx(e,i,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:p,staggerDirection:f}=o;return jS(e,t,d+u,p,f,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[u,d]=l==="beforeChildren"?[a,s]:[s,a];return u().then(()=>d())}else return Promise.all([a(),s(n.delay)])}function jS(e,t,n=0,r=0,i=1,o){const a=[],s=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(TS).forEach((u,d)=>{u.notify("AnimationStart",t),a.push(Xu(u,t,{...o,delay:n+l(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function TS(e,t){return e.sortNodePosition(t)}function CS(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Xu(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Xu(e,t,n);else{const i=typeof t=="function"?jl(e,t,n.custom):t;r=Promise.all(rx(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const kS=yp.length;function ix(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?ix(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<kS;n++){const r=yp[n],i=e.props[r];(ta(i)||i===!1)&&(t[r]=i)}return t}const ES=[...xp].reverse(),zS=xp.length;function PS(e){return t=>Promise.all(t.map(({animation:n,options:r})=>CS(e,n,r)))}function AS(e){let t=PS(e),n=Jh(),r=!0;const i=l=>(u,d)=>{var p;const f=jl(e,d,l==="exit"?(p=e.presenceContext)===null||p===void 0?void 0:p.custom:void 0);if(f){const{transition:g,transitionEnd:x,...y}=f;u={...u,...y,...x}}return u};function o(l){t=l(e)}function a(l){const{props:u}=e,d=ix(e.parent)||{},p=[],f=new Set;let g={},x=1/0;for(let b=0;b<zS;b++){const v=ES[b],h=n[v],m=u[v]!==void 0?u[v]:d[v],w=ta(m),S=v===l?h.isActive:null;S===!1&&(x=b);let j=m===d[v]&&m!==u[v]&&w;if(j&&r&&e.manuallyAnimateOnMount&&(j=!1),h.protectedKeys={...g},!h.isActive&&S===null||!m&&!h.prevProp||_l(m)||typeof m=="boolean")continue;const C=MS(h.prevProp,m);let T=C||v===l&&h.isActive&&!j&&w||b>x&&w,A=!1;const E=Array.isArray(m)?m:[m];let z=E.reduce(i(v),{});S===!1&&(z={});const{prevResolvedValues:M={}}=h,R={...M,...z},V=Y=>{T=!0,f.has(Y)&&(A=!0,f.delete(Y)),h.needsAnimating[Y]=!0;const L=e.getValue(Y);L&&(L.liveStyle=!1)};for(const Y in R){const L=z[Y],N=M[Y];if(g.hasOwnProperty(Y))continue;let $=!1;Fu(L)&&Fu(N)?$=!xv(L,N):$=L!==N,$?L!=null?V(Y):f.add(Y):L!==void 0&&f.has(Y)?V(Y):h.protectedKeys[Y]=!0}h.prevProp=m,h.prevResolvedValues=z,h.isActive&&(g={...g,...z}),r&&e.blockInitialAnimation&&(T=!1),T&&(!(j&&C)||A)&&p.push(...E.map(Y=>({animation:Y,options:{type:v}})))}if(f.size){const b={};f.forEach(v=>{const h=e.getBaseTarget(v),m=e.getValue(v);m&&(m.liveStyle=!0),b[v]=h??null}),p.push({animation:b})}let y=!!p.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(y=!1),r=!1,y?t(p):Promise.resolve()}function s(l,u){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(f=>{var g;return(g=f.animationState)===null||g===void 0?void 0:g.setActive(l,u)}),n[l].isActive=u;const p=a(l);for(const f in n)n[f].protectedKeys={};return p}return{animateChanges:a,setActive:s,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Jh(),r=!0}}}function MS(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!xv(t,e):!1}function xr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Jh(){return{animate:xr(!0),whileInView:xr(),whileHover:xr(),whileTap:xr(),whileDrag:xr(),whileFocus:xr(),exit:xr()}}class mr{constructor(t){this.isMounted=!1,this.node=t}update(){}}class LS extends mr{constructor(t){super(t),t.animationState||(t.animationState=AS(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();_l(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let OS=0;class IS extends mr{constructor(){super(...arguments),this.id=OS++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const RS={animation:{Feature:LS},exit:{Feature:IS}},ox=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Cl(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const VS=e=>t=>ox(t)&&e(t,Cl(t));function _n(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function En(e,t,n,r){return _n(e,t,VS(n),r)}const em=(e,t)=>Math.abs(e-t);function DS(e,t){const n=em(e.x,t.x),r=em(e.y,t.y);return Math.sqrt(n**2+r**2)}class ax{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=Sc(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,g=DS(p.offset,{x:0,y:0})>=3;if(!f&&!g)return;const{point:x}=p,{timestamp:y}=Be;this.history.push({...x,timestamp:y});const{onStart:b,onMove:v}=this.handlers;f||(b&&b(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,p)},this.handlePointerMove=(p,f)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=bc(f,this.transformPagePoint),oe.update(this.updatePoint,!0)},this.handlePointerUp=(p,f)=>{this.end();const{onEnd:g,onSessionEnd:x,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Sc(p.type==="pointercancel"?this.lastMoveEventInfo:bc(f,this.transformPagePoint),this.history);this.startEvent&&g&&g(p,b),x&&x(p,b)},!ox(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const a=Cl(t),s=bc(a,this.transformPagePoint),{point:l}=s,{timestamp:u}=Be;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,Sc(s,this.history)),this.removeListeners=kn(En(this.contextWindow,"pointermove",this.handlePointerMove),En(this.contextWindow,"pointerup",this.handlePointerUp),En(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Jt(this.updatePoint)}}function bc(e,t){return t?{point:t(e.point)}:e}function tm(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Sc({point:e},t){return{point:e,delta:tm(e,sx(t)),offset:tm(e,NS(t)),velocity:FS(t,.1)}}function NS(e){return e[0]}function sx(e){return e[e.length-1]}function FS(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=sx(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Tn(t)));)n--;if(!r)return{x:0,y:0};const o=Cn(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function lx(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const nm=lx("dragHorizontal"),rm=lx("dragVertical");function cx(e){let t=!1;if(e==="y")t=rm();else if(e==="x")t=nm();else{const n=nm(),r=rm();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function ux(){const e=cx(!0);return e?(e(),!1):!0}function di(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const dx=1e-4,BS=1-dx,$S=1+dx,px=.01,qS=0-px,HS=0+px;function zt(e){return e.max-e.min}function US(e,t,n){return Math.abs(e-t)<=n}function im(e,t,n,r=.5){e.origin=r,e.originPoint=Te(t.min,t.max,e.origin),e.scale=zt(n)/zt(t),e.translate=Te(n.min,n.max,e.origin)-e.originPoint,(e.scale>=BS&&e.scale<=$S||isNaN(e.scale))&&(e.scale=1),(e.translate>=qS&&e.translate<=HS||isNaN(e.translate))&&(e.translate=0)}function Ao(e,t,n,r){im(e.x,t.x,n.x,r?r.originX:void 0),im(e.y,t.y,n.y,r?r.originY:void 0)}function om(e,t,n){e.min=n.min+t.min,e.max=e.min+zt(t)}function WS(e,t,n){om(e.x,t.x,n.x),om(e.y,t.y,n.y)}function am(e,t,n){e.min=t.min-n.min,e.max=e.min+zt(t)}function Mo(e,t,n){am(e.x,t.x,n.x),am(e.y,t.y,n.y)}function GS(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Te(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Te(n,e,r.max):Math.min(e,n)),e}function sm(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function YS(e,{top:t,left:n,bottom:r,right:i}){return{x:sm(e.x,n,i),y:sm(e.y,t,r)}}function lm(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function KS(e,t){return{x:lm(e.x,t.x),y:lm(e.y,t.y)}}function XS(e,t){let n=.5;const r=zt(e),i=zt(t);return i>r?n=Dr(t.min,t.max-r,e.min):r>i&&(n=Dr(e.min,e.max-i,t.min)),ur(0,1,n)}function QS(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Qu=.35;function ZS(e=Qu){return e===!1?e=0:e===!0&&(e=Qu),{x:cm(e,"left","right"),y:cm(e,"top","bottom")}}function cm(e,t,n){return{min:um(e,t),max:um(e,n)}}function um(e,t){return typeof e=="number"?e:e[t]||0}const dm=()=>({translate:0,scale:1,origin:0,originPoint:0}),pi=()=>({x:dm(),y:dm()}),pm=()=>({min:0,max:0}),Ae=()=>({x:pm(),y:pm()});function Ot(e){return[e("x"),e("y")]}function fx({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function JS({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function e4(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function _c(e){return e===void 0||e===1}function Zu({scale:e,scaleX:t,scaleY:n}){return!_c(e)||!_c(t)||!_c(n)}function br(e){return Zu(e)||hx(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function hx(e){return fm(e.x)||fm(e.y)}function fm(e){return e&&e!=="0%"}function Hs(e,t,n){const r=e-n,i=t*r;return n+i}function hm(e,t,n,r,i){return i!==void 0&&(e=Hs(e,i,r)),Hs(e,n,r)+t}function Ju(e,t=0,n=1,r,i){e.min=hm(e.min,t,n,r,i),e.max=hm(e.max,t,n,r,i)}function mx(e,{x:t,y:n}){Ju(e.x,t.translate,t.scale,t.originPoint),Ju(e.y,n.translate,n.scale,n.originPoint)}const mm=.999999999999,gm=1.0000000000001;function t4(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,a;for(let s=0;s<i;s++){o=n[s],a=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&hi(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,mx(e,a)),r&&br(o.latestValues)&&hi(e,o.latestValues))}t.x<gm&&t.x>mm&&(t.x=1),t.y<gm&&t.y>mm&&(t.y=1)}function fi(e,t){e.min=e.min+t,e.max=e.max+t}function vm(e,t,n,r,i=.5){const o=Te(e.min,e.max,i);Ju(e,t,n,o,r)}function hi(e,t){vm(e.x,t.x,t.scaleX,t.scale,t.originX),vm(e.y,t.y,t.scaleY,t.scale,t.originY)}function gx(e,t){return fx(e4(e.getBoundingClientRect(),t))}function n4(e,t,n){const r=gx(e,n),{scroll:i}=t;return i&&(fi(r.x,i.offset.x),fi(r.y,i.offset.y)),r}const vx=({current:e})=>e?e.ownerDocument.defaultView:null,r4=new WeakMap;class i4{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ae(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:p}=this.getProps();p?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Cl(d,"page").point)},o=(d,p)=>{const{drag:f,dragPropagation:g,onDragStart:x}=this.getProps();if(f&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=cx(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ot(b=>{let v=this.getAxisMotionValue(b).get()||0;if(pn.test(v)){const{projection:h}=this.visualElement;if(h&&h.layout){const m=h.layout.layoutBox[b];m&&(v=zt(m)*(parseFloat(v)/100))}}this.originPoint[b]=v}),x&&oe.postRender(()=>x(d,p)),Ku(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},a=(d,p)=>{const{dragPropagation:f,dragDirectionLock:g,onDirectionLock:x,onDrag:y}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:b}=p;if(g&&this.currentDirection===null){this.currentDirection=o4(b),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",p.point,b),this.updateAxis("y",p.point,b),this.visualElement.render(),y&&y(d,p)},s=(d,p)=>this.stop(d,p),l=()=>Ot(d=>{var p;return this.getAnimationState(d)==="paused"&&((p=this.getAxisMotionValue(d).animation)===null||p===void 0?void 0:p.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new ax(t,{onSessionStart:i,onStart:o,onMove:a,onSessionEnd:s,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:vx(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&oe.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Ra(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=GS(a,this.constraints[t],this.elastic[t])),o.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&di(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=YS(i.layoutBox,n):this.constraints=!1,this.elastic=ZS(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Ot(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=QS(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!di(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=n4(r,i.root,this.visualElement.getTransformPagePoint());let a=KS(i.layout.layoutBox,o);if(n){const s=n(JS(a));this.hasMutatedConstraints=!!s,s&&(a=fx(s))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:a,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},u=Ot(d=>{if(!Ra(d,n,this.currentDirection))return;let p=l&&l[d]||{};a&&(p={min:0,max:0});const f=i?200:1e6,g=i?40:1e7,x={type:"inertia",velocity:r?t[d]:0,bounceStiffness:f,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...o,...p};return this.startAxisValueAnimation(d,x)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Ku(this.visualElement,t),r.start(Rp(t,r,0,n,this.visualElement,!1))}stopAnimation(){Ot(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ot(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Ot(n=>{const{drag:r}=this.getProps();if(!Ra(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:s}=i.layout.layoutBox[n];o.set(t[n]-Te(a,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!di(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Ot(a=>{const s=this.getAxisMotionValue(a);if(s&&this.constraints!==!1){const l=s.get();i[a]=XS({min:l,max:l},this.constraints[a])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Ot(a=>{if(!Ra(a,t,null))return;const s=this.getAxisMotionValue(a),{min:l,max:u}=this.constraints[a];s.set(Te(l,u,i[a]))})}addListeners(){if(!this.visualElement.current)return;r4.set(this.visualElement,this);const t=this.visualElement.current,n=En(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();di(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),oe.read(r);const a=_n(window,"resize",()=>this.scalePositionWithinConstraints()),s=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Ot(d=>{const p=this.getAxisMotionValue(d);p&&(this.originPoint[d]+=l[d].translate,p.set(p.get()+l[d].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:a=Qu,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:a,dragMomentum:s}}}function Ra(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function o4(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class a4 extends mr{constructor(t){super(t),this.removeGroupControls=Ze,this.removeListeners=Ze,this.controls=new i4(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ze}unmount(){this.removeGroupControls(),this.removeListeners()}}const xm=e=>(t,n)=>{e&&oe.postRender(()=>e(t,n))};class s4 extends mr{constructor(){super(...arguments),this.removePointerDownListener=Ze}onPointerDown(t){this.session=new ax(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:vx(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:xm(t),onStart:xm(n),onMove:r,onEnd:(o,a)=>{delete this.session,i&&oe.postRender(()=>i(o,a))}}}mount(){this.removePointerDownListener=En(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const kl=_.createContext(null);function l4(){const e=_.useContext(kl);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=_.useId();_.useEffect(()=>r(i),[]);const o=_.useCallback(()=>n&&n(i),[i,n]);return!t&&n?[!1,o]:[!0]}const Bp=_.createContext({}),xx=_.createContext({}),rs={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function ym(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ao={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(W.test(e))e=parseFloat(e);else return e;const n=ym(e,t.target.x),r=ym(e,t.target.y);return`${n}% ${r}%`}},c4={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=dr.parse(e);if(i.length>5)return r;const o=dr.createTransformer(e),a=typeof i[0]!="number"?1:0,s=n.x.scale*t.x,l=n.y.scale*t.y;i[0+a]/=s,i[1+a]/=l;const u=Te(s,l,.5);return typeof i[2+a]=="number"&&(i[2+a]/=u),typeof i[3+a]=="number"&&(i[3+a]/=u),o(i)}},Us={};function u4(e){Object.assign(Us,e)}const{schedule:$p,cancel:Rz}=yv(queueMicrotask,!1);class d4 extends _.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;u4(p4),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),rs.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,a=r.projection;return a&&(a.isPresent=o,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?a.promote():a.relegate()||oe.postRender(()=>{const s=a.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),$p.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function yx(e){const[t,n]=l4(),r=_.useContext(Bp);return c.jsx(d4,{...e,layoutGroup:r,switchLayoutGroup:_.useContext(xx),isPresent:t,safeToRemove:n})}const p4={borderRadius:{...ao,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ao,borderTopRightRadius:ao,borderBottomLeftRadius:ao,borderBottomRightRadius:ao,boxShadow:c4},wx=["TopLeft","TopRight","BottomLeft","BottomRight"],f4=wx.length,wm=e=>typeof e=="string"?parseFloat(e):e,bm=e=>typeof e=="number"||W.test(e);function h4(e,t,n,r,i,o){i?(e.opacity=Te(0,n.opacity!==void 0?n.opacity:1,m4(r)),e.opacityExit=Te(t.opacity!==void 0?t.opacity:1,0,g4(r))):o&&(e.opacity=Te(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<f4;a++){const s=`border${wx[a]}Radius`;let l=Sm(t,s),u=Sm(n,s);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||bm(l)===bm(u)?(e[s]=Math.max(Te(wm(l),wm(u),r),0),(pn.test(u)||pn.test(l))&&(e[s]+="%")):e[s]=u}(t.rotate||n.rotate)&&(e.rotate=Te(t.rotate||0,n.rotate||0,r))}function Sm(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const m4=bx(0,.5,Cv),g4=bx(.5,.95,Ze);function bx(e,t,n){return r=>r<e?0:r>t?1:n(Dr(e,t,r))}function _m(e,t){e.min=t.min,e.max=t.max}function Lt(e,t){_m(e.x,t.x),_m(e.y,t.y)}function jm(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Tm(e,t,n,r,i){return e-=t,e=Hs(e,1/n,r),i!==void 0&&(e=Hs(e,1/i,r)),e}function v4(e,t=0,n=1,r=.5,i,o=e,a=e){if(pn.test(t)&&(t=parseFloat(t),t=Te(a.min,a.max,t/100)-a.min),typeof t!="number")return;let s=Te(o.min,o.max,r);e===o&&(s-=t),e.min=Tm(e.min,t,n,s,i),e.max=Tm(e.max,t,n,s,i)}function Cm(e,t,[n,r,i],o,a){v4(e,t[n],t[r],t[i],t.scale,o,a)}const x4=["x","scaleX","originX"],y4=["y","scaleY","originY"];function km(e,t,n,r){Cm(e.x,t,x4,n?n.x:void 0,r?r.x:void 0),Cm(e.y,t,y4,n?n.y:void 0,r?r.y:void 0)}function Em(e){return e.translate===0&&e.scale===1}function Sx(e){return Em(e.x)&&Em(e.y)}function zm(e,t){return e.min===t.min&&e.max===t.max}function w4(e,t){return zm(e.x,t.x)&&zm(e.y,t.y)}function Pm(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function _x(e,t){return Pm(e.x,t.x)&&Pm(e.y,t.y)}function Am(e){return zt(e.x)/zt(e.y)}function Mm(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class b4{constructor(){this.members=[]}add(t){Vp(this.members,t),t.scheduleRender()}remove(t){if(Dp(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function S4(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,a=(n==null?void 0:n.z)||0;if((i||o||a)&&(r=`translate3d(${i}px, ${o}px, ${a}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:p,rotateY:f,skewX:g,skewY:x}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),p&&(r+=`rotateX(${p}deg) `),f&&(r+=`rotateY(${f}deg) `),g&&(r+=`skewX(${g}deg) `),x&&(r+=`skewY(${x}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return(s!==1||l!==1)&&(r+=`scale(${s}, ${l})`),r||"none"}const _4=(e,t)=>e.depth-t.depth;class j4{constructor(){this.children=[],this.isDirty=!1}add(t){Vp(this.children,t),this.isDirty=!0}remove(t){Dp(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(_4),this.isDirty=!1,this.children.forEach(t)}}function is(e){const t=ot(e)?e.get():e;return mS(t)?t.toValue():t}function T4(e,t){const n=fn.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Jt(r),e(o-t))};return oe.read(r,!0),()=>Jt(r)}function C4(e){return e instanceof SVGElement&&e.tagName!=="svg"}function k4(e,t,n){const r=ot(e)?e:ln(e);return r.start(Rp("",r,t,n)),r.animation}const Sr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},xo=typeof window<"u"&&window.MotionDebug!==void 0,jc=["","X","Y","Z"],E4={visibility:"hidden"},Lm=1e3;let z4=0;function Tc(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function jx(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=nx(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",oe,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&jx(r)}function Tx({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},s=t==null?void 0:t()){this.id=z4++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,xo&&(Sr.totalNodes=Sr.resolvedTargetDeltas=Sr.recalculatedProjection=0),this.nodes.forEach(M4),this.nodes.forEach(V4),this.nodes.forEach(D4),this.nodes.forEach(L4),xo&&window.MotionDebug.record(Sr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new j4)}addEventListener(a,s){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new Np),this.eventHandlers.get(a).add(s)}notifyListeners(a,...s){const l=this.eventHandlers.get(a);l&&l.notify(...s)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=C4(a),this.instance=a;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(u||l)&&(this.isLayoutDirty=!0),e){let p;const f=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,p&&p(),p=T4(f,250),rs.hasAnimatedSinceResize&&(rs.hasAnimatedSinceResize=!1,this.nodes.forEach(Im))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:f,hasRelativeTargetChanged:g,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||d.getDefaultTransition()||q4,{onLayoutAnimationStart:b,onLayoutAnimationComplete:v}=d.getProps(),h=!this.targetLayout||!_x(this.targetLayout,x)||g,m=!f&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(p,m);const w={...wp(y,"layout"),onPlay:b,onComplete:v};(d.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else f||Im(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Jt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(N4),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&jx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const p=this.path[d];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:s,layout:l}=this.options;if(s===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Om);return}this.isUpdating||this.nodes.forEach(I4),this.isUpdating=!1,this.nodes.forEach(R4),this.nodes.forEach(P4),this.nodes.forEach(A4),this.clearAllSnapshots();const s=fn.now();Be.delta=ur(0,1e3/60,s-Be.timestamp),Be.timestamp=s,Be.isProcessing=!0,gc.update.process(Be),gc.preRender.process(Be),gc.render.process(Be),Be.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,$p.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(O4),this.sharedNodes.forEach(F4)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,oe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){oe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ae(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let s=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(s=!1),s){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,s=this.projectionDelta&&!Sx(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;a&&(s||br(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return a&&(l=this.removeTransform(l)),H4(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var a;const{visualElement:s}=this.options;if(!s)return Ae();const l=s.measureViewportBox();if(!(((a=this.scroll)===null||a===void 0?void 0:a.wasRoot)||this.path.some(U4))){const{scroll:d}=this.root;d&&(fi(l.x,d.offset.x),fi(l.y,d.offset.y))}return l}removeElementScroll(a){var s;const l=Ae();if(Lt(l,a),!((s=this.scroll)===null||s===void 0)&&s.wasRoot)return l;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:p,options:f}=d;d!==this.root&&p&&f.layoutScroll&&(p.wasRoot&&Lt(l,a),fi(l.x,p.offset.x),fi(l.y,p.offset.y))}return l}applyTransform(a,s=!1){const l=Ae();Lt(l,a);for(let u=0;u<this.path.length;u++){const d=this.path[u];!s&&d.options.layoutScroll&&d.scroll&&d!==d.root&&hi(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),br(d.latestValues)&&hi(l,d.latestValues)}return br(this.latestValues)&&hi(l,this.latestValues),l}removeTransform(a){const s=Ae();Lt(s,a);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!br(u.latestValues))continue;Zu(u.latestValues)&&u.updateSnapshot();const d=Ae(),p=u.measurePageBox();Lt(d,p),km(s,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return br(this.latestValues)&&km(s,this.latestValues),s}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Be.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var s;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:f}=this.options;if(!(!this.layout||!(p||f))){if(this.resolvedRelativeTargetAt=Be.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ae(),this.relativeTargetOrigin=Ae(),Mo(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),Lt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Ae(),this.targetWithTransforms=Ae()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),WS(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Lt(this.target,this.layout.layoutBox),mx(this.target,this.targetDelta)):Lt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ae(),this.relativeTargetOrigin=Ae(),Mo(this.relativeTargetOrigin,this.target,g.target),Lt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}xo&&Sr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Zu(this.parent.latestValues)||hx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const s=this.getLead(),l=!!this.resumingFrom||this!==s;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Be.timestamp&&(u=!1),u)return;const{layout:d,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||p))return;Lt(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,g=this.treeScale.y;t4(this.layoutCorrected,this.treeScale,this.path,l),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=Ae());const{target:x}=s;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(jm(this.prevProjectionDelta.x,this.projectionDelta.x),jm(this.prevProjectionDelta.y,this.projectionDelta.y)),Ao(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==g||!Mm(this.projectionDelta.x,this.prevProjectionDelta.x)||!Mm(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),xo&&Sr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var s;if((s=this.options.visualElement)===null||s===void 0||s.scheduleRender(),a){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=pi(),this.projectionDelta=pi(),this.projectionDeltaWithTransform=pi()}setAnimationOrigin(a,s=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},p=pi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const f=Ae(),g=l?l.source:void 0,x=this.layout?this.layout.source:void 0,y=g!==x,b=this.getStack(),v=!b||b.members.length<=1,h=!!(y&&!v&&this.options.crossfade===!0&&!this.path.some($4));this.animationProgress=0;let m;this.mixTargetDelta=w=>{const S=w/1e3;Rm(p.x,a.x,S),Rm(p.y,a.y,S),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Mo(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),B4(this.relativeTarget,this.relativeTargetOrigin,f,S),m&&w4(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=Ae()),Lt(m,this.relativeTarget)),y&&(this.animationValues=d,h4(d,u,this.latestValues,S,h,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Jt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=oe.update(()=>{rs.hasAnimatedSinceResize=!0,this.currentAnimation=k4(0,Lm,{...a,onUpdate:s=>{this.mixTargetDelta(s),a.onUpdate&&a.onUpdate(s)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Lm),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:s,target:l,layout:u,latestValues:d}=a;if(!(!s||!l||!u)){if(this!==a&&this.layout&&u&&Cx(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Ae();const p=zt(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+p;const f=zt(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+f}Lt(s,l),hi(s,d),Ao(this.projectionDeltaWithTransform,this.layoutCorrected,s,d)}}registerSharedNode(a,s){this.sharedNodes.has(a)||this.sharedNodes.set(a,new b4),this.sharedNodes.get(a).add(s);const u=s.options.initialPromotionConfig;s.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(s):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:s,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let s=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(s=!0),!s)return;const u={};l.z&&Tc("z",a,u,this.animationValues);for(let d=0;d<jc.length;d++)Tc(`rotate${jc[d]}`,a,u,this.animationValues),Tc(`skew${jc[d]}`,a,u,this.animationValues);a.render();for(const d in u)a.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);a.scheduleRender()}getProjectionStyles(a){var s,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return E4;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=is(a==null?void 0:a.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=is(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!br(this.latestValues)&&(y.transform=d?d({},""):"none",this.hasProjected=!1),y}const f=p.animationValues||p.latestValues;this.applyTransformsToTarget(),u.transform=S4(this.projectionDeltaWithTransform,this.treeScale,f),d&&(u.transform=d(f,u.transform));const{x:g,y:x}=this.projectionDelta;u.transformOrigin=`${g.origin*100}% ${x.origin*100}% 0`,p.animationValues?u.opacity=p===this?(l=(s=f.opacity)!==null&&s!==void 0?s:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=p===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const y in Us){if(f[y]===void 0)continue;const{correct:b,applyTo:v}=Us[y],h=u.transform==="none"?f[y]:b(f[y],p);if(v){const m=v.length;for(let w=0;w<m;w++)u[v[w]]=h}else u[y]=h}return this.options.layoutId&&(u.pointerEvents=p===this?is(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var s;return(s=a.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(Om),this.root.sharedNodes.clear()}}}function P4(e){e.updateLayout()}function A4(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,a=n.source!==e.layout.source;o==="size"?Ot(p=>{const f=a?n.measuredBox[p]:n.layoutBox[p],g=zt(f);f.min=r[p].min,f.max=f.min+g}):Cx(o,n.layoutBox,r)&&Ot(p=>{const f=a?n.measuredBox[p]:n.layoutBox[p],g=zt(r[p]);f.max=f.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[p].max=e.relativeTarget[p].min+g)});const s=pi();Ao(s,r,n.layoutBox);const l=pi();a?Ao(l,e.applyTransform(i,!0),n.measuredBox):Ao(l,r,n.layoutBox);const u=!Sx(s);let d=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:f,layout:g}=p;if(f&&g){const x=Ae();Mo(x,n.layoutBox,f.layoutBox);const y=Ae();Mo(y,r,g.layoutBox),_x(x,y)||(d=!0),p.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=x,e.relativeParent=p)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:s,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function M4(e){xo&&Sr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function L4(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function O4(e){e.clearSnapshot()}function Om(e){e.clearMeasurements()}function I4(e){e.isLayoutDirty=!1}function R4(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Im(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function V4(e){e.resolveTargetDelta()}function D4(e){e.calcProjection()}function N4(e){e.resetSkewAndRotation()}function F4(e){e.removeLeadSnapshot()}function Rm(e,t,n){e.translate=Te(t.translate,0,n),e.scale=Te(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Vm(e,t,n,r){e.min=Te(t.min,n.min,r),e.max=Te(t.max,n.max,r)}function B4(e,t,n,r){Vm(e.x,t.x,n.x,r),Vm(e.y,t.y,n.y,r)}function $4(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const q4={duration:.45,ease:[.4,0,.1,1]},Dm=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Nm=Dm("applewebkit/")&&!Dm("chrome/")?Math.round:Ze;function Fm(e){e.min=Nm(e.min),e.max=Nm(e.max)}function H4(e){Fm(e.x),Fm(e.y)}function Cx(e,t,n){return e==="position"||e==="preserve-aspect"&&!US(Am(t),Am(n),.2)}function U4(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const W4=Tx({attachResizeListener:(e,t)=>_n(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Cc={current:void 0},kx=Tx({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Cc.current){const e=new W4({});e.mount(window),e.setOptions({layoutScroll:!0}),Cc.current=e}return Cc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),G4={pan:{Feature:s4},drag:{Feature:a4,ProjectionNode:kx,MeasureLayout:yx}};function Bm(e,t){const n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd",i=(o,a)=>{if(o.pointerType==="touch"||ux())return;const s=e.getProps();e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",t);const l=s[r];l&&oe.postRender(()=>l(o,a))};return En(e.current,n,i,{passive:!e.getProps()[r]})}class Y4 extends mr{mount(){this.unmount=kn(Bm(this.node,!0),Bm(this.node,!1))}unmount(){}}class K4 extends mr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=kn(_n(this.node.current,"focus",()=>this.onFocus()),_n(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Ex=(e,t)=>t?e===t?!0:Ex(e,t.parentElement):!1;function kc(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Cl(n))}class X4 extends mr{constructor(){super(...arguments),this.removeStartListeners=Ze,this.removeEndListeners=Ze,this.removeAccessibleListeners=Ze,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=En(window,"pointerup",(s,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d,globalTapTarget:p}=this.node.getProps(),f=!p&&!Ex(this.node.current,s.target)?d:u;f&&oe.update(()=>f(s,l))},{passive:!(r.onTap||r.onPointerUp)}),a=En(window,"pointercancel",(s,l)=>this.cancelPress(s,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=kn(o,a),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const a=s=>{s.key!=="Enter"||!this.checkPressEnd()||kc("up",(l,u)=>{const{onTap:d}=this.node.getProps();d&&oe.postRender(()=>d(l,u))})};this.removeEndListeners(),this.removeEndListeners=_n(this.node.current,"keyup",a),kc("down",(s,l)=>{this.startPress(s,l)})},n=_n(this.node.current,"keydown",t),r=()=>{this.isPressing&&kc("cancel",(o,a)=>this.cancelPress(o,a))},i=_n(this.node.current,"blur",r);this.removeAccessibleListeners=kn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&oe.postRender(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!ux()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&oe.postRender(()=>r(t,n))}mount(){const t=this.node.getProps(),n=En(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=_n(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=kn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const ed=new WeakMap,Ec=new WeakMap,Q4=e=>{const t=ed.get(e.target);t&&t(e)},Z4=e=>{e.forEach(Q4)};function J4({root:e,...t}){const n=e||document;Ec.has(n)||Ec.set(n,{});const r=Ec.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Z4,{root:e,...t})),r[i]}function e7(e,t,n){const r=J4(t);return ed.set(e,n),r.observe(e),()=>{ed.delete(e),r.unobserve(e)}}const t7={some:0,all:1};class n7 extends mr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:t7[i]},s=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:p}=this.node.getProps(),f=u?d:p;f&&f(l)};return e7(this.node.current,a,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(r7(t,n))&&this.startObserver()}unmount(){}}function r7({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const i7={inView:{Feature:n7},tap:{Feature:X4},focus:{Feature:K4},hover:{Feature:Y4}},o7={layout:{ProjectionNode:kx,MeasureLayout:yx}},El=_.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),zl=_.createContext({}),qp=typeof window<"u",Pl=qp?_.useLayoutEffect:_.useEffect,zx=_.createContext({strict:!1});function a7(e,t,n,r,i){var o,a;const{visualElement:s}=_.useContext(zl),l=_.useContext(zx),u=_.useContext(kl),d=_.useContext(El).reducedMotion,p=_.useRef();r=r||l.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:s,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const f=p.current,g=_.useContext(xx);f&&!f.projection&&i&&(f.type==="html"||f.type==="svg")&&s7(p.current,n,i,g);const x=_.useRef(!1);_.useInsertionEffect(()=>{f&&x.current&&f.update(n,u)});const y=n[tx],b=_.useRef(!!y&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,y))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,y)));return Pl(()=>{f&&(x.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),$p.render(f.render),b.current&&f.animationState&&f.animationState.animateChanges())}),_.useEffect(()=>{f&&(!b.current&&f.animationState&&f.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var v;(v=window.MotionHandoffMarkAsComplete)===null||v===void 0||v.call(window,y)}),b.current=!1))}),f}function s7(e,t,n,r){const{layoutId:i,layout:o,drag:a,dragConstraints:s,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Px(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!a||s&&di(s),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function Px(e){if(e)return e.options.allowProjection!==!1?e.projection:Px(e.parent)}function l7(e,t,n){return _.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):di(n)&&(n.current=r))},[t])}function Al(e){return _l(e.animate)||yp.some(t=>ta(e[t]))}function Ax(e){return!!(Al(e)||e.variants)}function c7(e,t){if(Al(e)){const{initial:n,animate:r}=e;return{initial:n===!1||ta(n)?n:void 0,animate:ta(r)?r:void 0}}return e.inherit!==!1?t:{}}function u7(e){const{initial:t,animate:n}=c7(e,_.useContext(zl));return _.useMemo(()=>({initial:t,animate:n}),[$m(t),$m(n)])}function $m(e){return Array.isArray(e)?e.join(" "):e}const qm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Li={};for(const e in qm)Li[e]={isEnabled:t=>qm[e].some(n=>!!t[n])};function d7(e){for(const t in e)Li[t]={...Li[t],...e[t]}}const p7=Symbol.for("motionComponentSymbol");function f7({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&d7(e);function o(s,l){let u;const d={..._.useContext(El),...s,layoutId:h7(s)},{isStatic:p}=d,f=u7(s),g=r(s,p);if(!p&&qp){m7();const x=g7(d);u=x.MeasureLayout,f.visualElement=a7(i,g,d,t,x.ProjectionNode)}return c.jsxs(zl.Provider,{value:f,children:[u&&f.visualElement?c.jsx(u,{visualElement:f.visualElement,...d}):null,n(i,s,l7(g,f.visualElement,l),g,p,f.visualElement)]})}const a=_.forwardRef(o);return a[p7]=i,a}function h7({layoutId:e}){const t=_.useContext(Bp).id;return t&&e!==void 0?t+"-"+e:e}function m7(e,t){_.useContext(zx).strict}function g7(e){const{drag:t,layout:n}=Li;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const v7=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Hp(e){return typeof e!="string"||e.includes("-")?!1:!!(v7.indexOf(e)>-1||/[A-Z]/u.test(e))}function Mx(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const Lx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Ox(e,t,n,r){Mx(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Lx.has(i)?i:Fp(i),t.attrs[i])}function Ix(e,{layout:t,layoutId:n}){return Gr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Us[e]||e==="opacity")}function Up(e,t,n){var r;const{style:i}=e,o={};for(const a in i)(ot(i[a])||t.style&&ot(t.style[a])||Ix(a,e)||((r=n==null?void 0:n.getValue(a))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[a]=i[a]);return o}function Rx(e,t,n){const r=Up(e,t,n);for(const i in e)if(ot(e[i])||ot(t[i])){const o=fa.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function Hi(e){const t=_.useRef(null);return t.current===null&&(t.current=e()),t.current}function x7({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const a={latestValues:y7(r,i,o,e),renderState:t()};return n&&(a.mount=s=>n(r,s,a)),a}const Vx=e=>(t,n)=>{const r=_.useContext(zl),i=_.useContext(kl),o=()=>x7(e,t,r,i);return n?o():Hi(o)};function y7(e,t,n,r){const i={},o=r(e,{});for(const f in o)i[f]=is(o[f]);let{initial:a,animate:s}=e;const l=Al(e),u=Ax(e);t&&u&&!l&&e.inherit!==!1&&(a===void 0&&(a=t.initial),s===void 0&&(s=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const p=d?s:a;if(p&&typeof p!="boolean"&&!_l(p)){const f=Array.isArray(p)?p:[p];for(let g=0;g<f.length;g++){const x=vp(e,f[g]);if(x){const{transitionEnd:y,transition:b,...v}=x;for(const h in v){let m=v[h];if(Array.isArray(m)){const w=d?m.length-1:0;m=m[w]}m!==null&&(i[h]=m)}for(const h in y)i[h]=y[h]}}}return i}const Wp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Dx=()=>({...Wp(),attrs:{}}),Nx=(e,t)=>t&&typeof e=="number"?t.transform(e):e,w7={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},b7=fa.length;function S7(e,t,n){let r="",i=!0;for(let o=0;o<b7;o++){const a=fa[o],s=e[a];if(s===void 0)continue;let l=!0;if(typeof s=="number"?l=s===(a.startsWith("scale")?1:0):l=parseFloat(s)===0,!l||n){const u=Nx(s,kp[a]);if(!l){i=!1;const d=w7[a]||a;r+=`${d}(${u}) `}n&&(t[a]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Gp(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let a=!1,s=!1;for(const l in t){const u=t[l];if(Gr.has(l)){a=!0;continue}else if(Av(l)){i[l]=u;continue}else{const d=Nx(u,kp[l]);l.startsWith("origin")?(s=!0,o[l]=d):r[l]=d}}if(t.transform||(a||n?r.transform=S7(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:l="50%",originY:u="50%",originZ:d=0}=o;r.transformOrigin=`${l} ${u} ${d}`}}function Hm(e,t,n){return typeof e=="string"?e:W.transform(t+n*e)}function _7(e,t,n){const r=Hm(t,e.x,e.width),i=Hm(n,e.y,e.height);return`${r} ${i}`}const j7={offset:"stroke-dashoffset",array:"stroke-dasharray"},T7={offset:"strokeDashoffset",array:"strokeDasharray"};function C7(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?j7:T7;e[o.offset]=W.transform(-r);const a=W.transform(t),s=W.transform(n);e[o.array]=`${a} ${s}`}function Yp(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:a,pathSpacing:s=1,pathOffset:l=0,...u},d,p){if(Gp(e,u,p),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:g,dimensions:x}=e;f.transform&&(x&&(g.transform=f.transform),delete f.transform),x&&(i!==void 0||o!==void 0||g.transform)&&(g.transformOrigin=_7(x,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),a!==void 0&&C7(f,a,s,l,!1)}const Kp=e=>typeof e=="string"&&e.toLowerCase()==="svg",k7={useVisualState:Vx({scrapeMotionValuesFromProps:Rx,createRenderState:Dx,onMount:(e,t,{renderState:n,latestValues:r})=>{oe.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),oe.render(()=>{Yp(n,r,Kp(t.tagName),e.transformTemplate),Ox(t,n)})}})},E7={useVisualState:Vx({scrapeMotionValuesFromProps:Up,createRenderState:Wp})};function Fx(e,t,n){for(const r in t)!ot(t[r])&&!Ix(r,n)&&(e[r]=t[r])}function z7({transformTemplate:e},t){return _.useMemo(()=>{const n=Wp();return Gp(n,t,e),Object.assign({},n.vars,n.style)},[t])}function P7(e,t){const n=e.style||{},r={};return Fx(r,n,e),Object.assign(r,z7(e,t)),r}function A7(e,t){const n={},r=P7(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const M7=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ws(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||M7.has(e)}let Bx=e=>!Ws(e);function L7(e){e&&(Bx=t=>t.startsWith("on")?!Ws(t):e(t))}try{L7(require("@emotion/is-prop-valid").default)}catch{}function O7(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Bx(i)||n===!0&&Ws(i)||!t&&!Ws(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function I7(e,t,n,r){const i=_.useMemo(()=>{const o=Dx();return Yp(o,t,Kp(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};Fx(o,e.style,e),i.style={...o,...i.style}}return i}function R7(e=!1){return(n,r,i,{latestValues:o},a)=>{const l=(Hp(n)?I7:A7)(r,o,a,n),u=O7(r,typeof n=="string",e),d=n!==_.Fragment?{...u,...l,ref:i}:{},{children:p}=r,f=_.useMemo(()=>ot(p)?p.get():p,[p]);return _.createElement(n,{...d,children:f})}}function V7(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const a={...Hp(r)?k7:E7,preloadedFeatures:e,useRender:R7(i),createVisualElement:t,Component:r};return f7(a)}}const td={current:null},$x={current:!1};function D7(){if($x.current=!0,!!qp)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>td.current=e.matches;e.addListener(t),t()}else td.current=!1}function N7(e,t,n){for(const r in t){const i=t[r],o=n[r];if(ot(i))e.addValue(r,i);else if(ot(o))e.addValue(r,ln(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=e.getStaticValue(r);e.addValue(r,ln(a!==void 0?a:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Um=new WeakMap,F7=[...Ov,rt,dr],B7=e=>F7.find(Lv(e)),Wm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class $7{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:a},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=jp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=fn.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,oe.render(this.render,!1,!0))};const{latestValues:l,renderState:u}=a;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=!!o,this.isControllingVariants=Al(n),this.isVariantNode=Ax(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in p){const g=p[f];l[f]!==void 0&&ot(g)&&g.set(l[f],!1)}}mount(t){this.current=t,Um.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),$x.current||D7(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:td.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Um.delete(this.current),this.projection&&this.projection.unmount(),Jt(this.notifyUpdate),Jt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Gr.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&oe.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o(),a&&a(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Li){const n=Li[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ae()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Wm.length;r++){const i=Wm[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,a=t[o];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=N7(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=ln(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(zv(i)||Ev(i))?i=parseFloat(i):!B7(i)&&dr.test(n)&&(i=$v(t,n)),this.setBaseTarget(t,ot(i)?i.get():i)),ot(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const a=vp(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);a&&(i=a[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!ot(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Np),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class qx extends $7{constructor(){super(...arguments),this.KeyframeResolver=qv}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}}function q7(e){return window.getComputedStyle(e)}class H7 extends qx{constructor(){super(...arguments),this.type="html",this.renderInstance=Mx}readValueFromInstance(t,n){if(Gr.has(n)){const r=Ep(n);return r&&r.default||0}else{const r=q7(t),i=(Av(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return gx(t,n)}build(t,n,r){Gp(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Up(t,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;ot(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class U7 extends qx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ae}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Gr.has(n)){const r=Ep(n);return r&&r.default||0}return n=Lx.has(n)?n:Fp(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Rx(t,n,r)}build(t,n,r){Yp(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){Ox(t,n,r,i)}mount(t){this.isSVGTag=Kp(t.tagName),super.mount(t)}}const W7=(e,t)=>Hp(e)?new U7(t):new H7(t,{allowProjection:e!==_.Fragment}),G7=V7({...RS,...i7,...G4,...o7},W7),Oe=zb(G7);class Y7 extends _.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function K7({children:e,isPresent:t}){const n=_.useId(),r=_.useRef(null),i=_.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=_.useContext(El);return _.useInsertionEffect(()=>{const{width:a,height:s,top:l,left:u}=i.current;if(t||!r.current||!a||!s)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return o&&(d.nonce=o),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),c.jsx(Y7,{isPresent:t,childRef:r,sizeRef:i,children:_.cloneElement(e,{ref:r})})}const X7=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a})=>{const s=Hi(Q7),l=_.useId(),u=_.useCallback(p=>{s.set(p,!0);for(const f of s.values())if(!f)return;r&&r()},[s,r]),d=_.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:u,register:p=>(s.set(p,!1),()=>s.delete(p))}),o?[Math.random(),u]:[n,u]);return _.useMemo(()=>{s.forEach((p,f)=>s.set(f,!1))},[n]),_.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),a==="popLayout"&&(e=c.jsx(K7,{isPresent:n,children:e})),c.jsx(kl.Provider,{value:d,children:e})};function Q7(){return new Map}const Va=e=>e.key||"";function Gm(e){const t=[];return _.Children.forEach(e,n=>{_.isValidElement(n)&&t.push(n)}),t}const Z7=({children:e,exitBeforeEnter:t,custom:n,initial:r=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:a="sync"})=>{const s=_.useMemo(()=>Gm(e),[e]),l=s.map(Va),u=_.useRef(!0),d=_.useRef(s),p=Hi(()=>new Map),[f,g]=_.useState(s),[x,y]=_.useState(s);Pl(()=>{u.current=!1,d.current=s;for(let h=0;h<x.length;h++){const m=Va(x[h]);l.includes(m)?p.delete(m):p.get(m)!==!0&&p.set(m,!1)}},[x,l.length,l.join("-")]);const b=[];if(s!==f){let h=[...s];for(let m=0;m<x.length;m++){const w=x[m],S=Va(w);l.includes(S)||(h.splice(m,0,w),b.push(w))}a==="wait"&&b.length&&(h=b),y(Gm(h)),g(s);return}const{forceRender:v}=_.useContext(Bp);return c.jsx(c.Fragment,{children:x.map(h=>{const m=Va(h),w=s===x||l.includes(m),S=()=>{if(p.has(m))p.set(m,!0);else return;let j=!0;p.forEach(C=>{C||(j=!1)}),j&&(v==null||v(),y(d.current),i&&i())};return c.jsx(X7,{isPresent:w,initial:!u.current||r?void 0:!1,custom:w?void 0:n,presenceAffectsLayout:o,mode:a,onExitComplete:w?void 0:S,children:h},m)})})};function J7(e){const t=Hi(()=>ln(e)),{isStatic:n}=_.useContext(El);if(n){const[,r]=_.useState(e);_.useEffect(()=>t.on("change",r),[])}return t}function Hx(e,t){const n=J7(t()),r=()=>n.set(t());return r(),Pl(()=>{const i=()=>oe.preRender(r,!1,!0),o=e.map(a=>a.on("change",i));return()=>{o.forEach(a=>a()),Jt(r)}}),n}const e6=e=>e&&typeof e=="object"&&e.mix,t6=e=>e6(e)?e.mix:void 0;function n6(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],o=e[2+n],a=e[3+n],s=Lp(i,o,{mixer:t6(o[0]),...a});return t?s(r):s}function r6(e){Po.current=[],e();const t=Hx(Po.current,e);return Po.current=void 0,t}function Da(e,t,n,r){if(typeof e=="function")return r6(e);const i=typeof t=="function"?t:n6(t,n,r);return Array.isArray(e)?Ym(e,i):Ym([e],([o])=>i(o))}function Ym(e,t){const n=Hi(()=>[]);return Hx(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function Ux(e,t,n){return typeof e=="string"?e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const os=new WeakMap;let $n;function i6(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function o6({target:e,contentRect:t,borderBoxSize:n}){var r;(r=os.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return i6(e,n)}})})}function a6(e){e.forEach(o6)}function s6(){typeof ResizeObserver>"u"||($n=new ResizeObserver(a6))}function l6(e,t){$n||s6();const n=Ux(e);return n.forEach(r=>{let i=os.get(r);i||(i=new Set,os.set(r,i)),i.add(t),$n==null||$n.observe(r)}),()=>{n.forEach(r=>{const i=os.get(r);i==null||i.delete(t),i!=null&&i.size||$n==null||$n.unobserve(r)})}}const as=new Set;let Lo;function c6(){Lo=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};as.forEach(n=>n(t))},window.addEventListener("resize",Lo)}function u6(e){return as.add(e),Lo||c6(),()=>{as.delete(e),!as.size&&Lo&&(Lo=void 0)}}function d6(e,t){return typeof e=="function"?u6(e):l6(e,t)}const p6=50,Km=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),f6=()=>({time:0,x:Km(),y:Km()}),h6={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Xm(e,t,n,r){const i=n[t],{length:o,position:a}=h6[t],s=i.current,l=n.time;i.current=e[`scroll${a}`],i.scrollLength=e[`scroll${o}`]-e[`client${o}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=Dr(0,i.scrollLength,i.current);const u=r-l;i.velocity=u>p6?0:Pp(i.current-s,u)}function m6(e,t,n){Xm(e,"x",t,n),Xm(e,"y",t,n),t.time=n}function g6(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const o=r.getBoundingClientRect();n.x+=i.left-o.left,n.y+=i.top-o.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:o}=r.getBBox();n.x+=i,n.y+=o;let a=null,s=r.parentNode;for(;!a;)s.tagName==="svg"&&(a=s),s=r.parentNode;r=a}else break;return n}const v6={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},nd={start:0,center:.5,end:1};function Qm(e,t,n=0){let r=0;if(e in nd&&(e=nd[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const x6=[0,0];function y6(e,t,n,r){let i=Array.isArray(e)?e:x6,o=0,a=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,nd[e]?e:"0"]),o=Qm(i[0],n,r),a=Qm(i[1],t),o-a}const w6={x:0,y:0};function b6(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function S6(e,t,n){const{offset:r=v6.All}=n,{target:i=e,axis:o="y"}=n,a=o==="y"?"height":"width",s=i!==e?g6(i,e):w6,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:b6(i),u={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let d=!t[o].interpolate;const p=r.length;for(let f=0;f<p;f++){const g=y6(r[f],u[a],l[a],s[o]);!d&&g!==t[o].interpolatorOffsets[f]&&(d=!0),t[o].offset[f]=g}d&&(t[o].interpolate=Lp(t[o].offset,Xv(r)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}function _6(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function j6(e,t,n,r={}){return{measure:()=>_6(e,r.target,n),update:i=>{m6(e,n,i),(r.offset||r.target)&&S6(e,n,r)},notify:()=>t(n)}}const so=new WeakMap,Zm=new WeakMap,zc=new WeakMap,Jm=e=>e===document.documentElement?window:e;function Xp(e,{container:t=document.documentElement,...n}={}){let r=zc.get(t);r||(r=new Set,zc.set(t,r));const i=f6(),o=j6(t,e,i,n);if(r.add(o),!so.has(t)){const s=()=>{for(const f of r)f.measure()},l=()=>{for(const f of r)f.update(Be.timestamp)},u=()=>{for(const f of r)f.notify()},d=()=>{oe.read(s,!1,!0),oe.read(l,!1,!0),oe.update(u,!1,!0)};so.set(t,d);const p=Jm(t);window.addEventListener("resize",d,{passive:!0}),t!==document.documentElement&&Zm.set(t,d6(t,d)),p.addEventListener("scroll",d,{passive:!0})}const a=so.get(t);return oe.read(a,!1,!0),()=>{var s;Jt(a);const l=zc.get(t);if(!l||(l.delete(o),l.size))return;const u=so.get(t);so.delete(t),u&&(Jm(t).removeEventListener("scroll",u),(s=Zm.get(t))===null||s===void 0||s(),window.removeEventListener("resize",u))}}function Wx(e,t){let n;const r=()=>{const{currentTime:i}=t,a=(i===null?0:i.value)/100;n!==a&&e(a),n=a};return oe.update(r,!0),()=>Jt(r)}function T6({source:e,container:t,axis:n="y"}){e&&(t=e);const r={value:0},i=Xp(o=>{r.value=o[n].progress*100},{container:t,axis:n});return{currentTime:r,cancel:i}}const Pc=new Map;function Gx({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),Pc.has(t)||Pc.set(t,{});const r=Pc.get(t);return r[n]||(r[n]=ex()?new ScrollTimeline({source:t,axis:n}):T6({source:t,axis:n})),r[n]}function C6(e){return e.length===2}function Yx(e){return e&&(e.target||e.offset)}function k6(e,t){return C6(e)||Yx(t)?Xp(n=>{e(n[t.axis].progress,n)},t):Wx(e,Gx(t))}function E6(e,t){if(Yx(t))return e.pause(),Xp(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=Gx(t);return e.attachTimeline(n,r=>(r.pause(),Wx(i=>{r.time=r.duration*i},n)))}}function z6(e,{axis:t="y",...n}={}){const r={axis:t,...n};return typeof e=="function"?k6(e,r):E6(e,r)}function e0(e,t){qb(!!(!t||t.current))}const P6=()=>({scrollX:ln(0),scrollY:ln(0),scrollXProgress:ln(0),scrollYProgress:ln(0)});function A6({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=Hi(P6);return(n?Pl:_.useEffect)(()=>(e0("target",t),e0("container",e),z6((a,{x:s,y:l})=>{i.scrollX.set(s.current),i.scrollXProgress.set(s.progress),i.scrollY.set(l.current),i.scrollYProgress.set(l.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}const M6={some:0,all:1};function L6(e,t,{root:n,margin:r,amount:i="some"}={}){const o=Ux(e),a=new WeakMap,s=u=>{u.forEach(d=>{const p=a.get(d.target);if(d.isIntersecting!==!!p)if(d.isIntersecting){const f=t(d);typeof f=="function"?a.set(d.target,f):l.unobserve(d.target)}else p&&(p(d),a.delete(d.target))})},l=new IntersectionObserver(s,{root:n,rootMargin:r,threshold:typeof i=="number"?i:M6[i]});return o.forEach(u=>l.observe(u)),()=>l.disconnect()}function O6(e,{root:t,margin:n,amount:r,once:i=!1}={}){const[o,a]=_.useState(!1);return _.useEffect(()=>{if(!e.current||i&&o)return;const s=()=>(a(!0),i?void 0:()=>a(!1)),l={root:t&&t.current||void 0,margin:n,amount:r};return L6(e.current,s,l)},[t,e,n,i,r]),o}var Kx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},t0=ee.createContext&&ee.createContext(Kx),I6=["attr","size","title"];function R6(e,t){if(e==null)return{};var n=V6(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function V6(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Gs(){return Gs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gs.apply(this,arguments)}function n0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ys(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?n0(Object(n),!0).forEach(function(r){D6(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):n0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function D6(e,t,n){return t=N6(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N6(e){var t=F6(e,"string");return typeof t=="symbol"?t:t+""}function F6(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Xx(e){return e&&e.map((t,n)=>ee.createElement(t.tag,Ys({key:n},t.attr),Xx(t.child)))}function Q(e){return t=>ee.createElement(B6,Gs({attr:Ys({},e.attr)},t),Xx(e.child))}function B6(e){var t=n=>{var{attr:r,size:i,title:o}=e,a=R6(e,I6),s=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),ee.createElement("svg",Gs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:Ys(Ys({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&ee.createElement("title",null,o),e.children)};return t0!==void 0?ee.createElement(t0.Consumer,null,n=>t(n)):t(Kx)}function $6(e){return Q({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}function r0(e){return Q({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"},child:[]}]})(e)}function Qp(e){return Q({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function Pe(e){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"},child:[]}]})(e)}function Ne(e){return Q({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"},child:[]}]})(e)}function i0(e){return Q({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"},child:[]}]})(e)}function o0(e){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(e)}function ie(e){return Q({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M510.5 225.5c-6.9-37.2-39.3-65.5-78.5-65.5-12.3 0-23.9 3-34.3 8-17.4-24.1-45.6-40-77.7-40-53 0-96 43-96 96 0 .5.2 1.1.2 1.6C187.6 233 160 265.2 160 304c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80 0-39.2-28.2-71.7-65.5-78.5zm-386.4 34.4c-37.4-37.4-37.4-98.3 0-135.8 34.6-34.6 89.1-36.8 126.7-7.4 20-12.9 43.6-20.7 69.2-20.7.7 0 1.3.2 2 .2l8.9-26.7c3.4-10.2-6.3-19.8-16.5-16.4l-75.3 25.1-35.5-71c-4.8-9.6-18.5-9.6-23.3 0l-35.5 71-75.3-25.1c-10.2-3.4-19.8 6.3-16.4 16.5l25.1 75.3-71 35.5c-9.6 4.8-9.6 18.5 0 23.3l71 35.5-25.1 75.3c-3.4 10.2 6.3 19.8 16.5 16.5l59.2-19.7c-.2-2.4-.7-4.7-.7-7.2 0-12.5 2.3-24.5 6.2-35.9-3.6-2.7-7.1-5.2-10.2-8.3zm69.8-58c4.3-24.5 15.8-46.4 31.9-64-9.8-6.2-21.4-9.9-33.8-9.9-35.3 0-64 28.7-64 64 0 18.7 8.2 35.4 21.1 47.1 11.3-15.9 26.6-28.9 44.8-37.2zm330.6 216.2c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8z"},child:[]}]})(e)}function vt(e){return Q({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function a0(e){return Q({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function s0(e){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function q6(e){return Q({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function zn(e){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"},child:[]}]})(e)}function We(e){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"},child:[]}]})(e)}function Ce(e){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M160 288h-56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h56v-64h-56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h56V96h-56c-4.42 0-8-3.58-8-8V72c0-4.42 3.58-8 8-8h56V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v448c0 2.77.91 5.24 1.57 7.8L160 329.38V288zm320 64h-32v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-64v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-64v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-41.37L24.2 510.43c2.56.66 5.04 1.57 7.8 1.57h448c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function lo(e){return Q({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M440.3 345.2l-33.8-19.5 26-7c8.2-2.2 13.1-10.7 10.9-18.9l-4-14.9c-2.2-8.2-10.7-13.1-18.9-10.9l-70.8 19-63.9-37 63.8-36.9 70.8 19c8.2 2.2 16.7-2.7 18.9-10.9l4-14.9c2.2-8.2-2.7-16.7-10.9-18.9l-26-7 33.8-19.5c7.4-4.3 9.9-13.7 5.7-21.1L430.4 119c-4.3-7.4-13.7-9.9-21.1-5.7l-33.8 19.5 7-26c2.2-8.2-2.7-16.7-10.9-18.9l-14.9-4c-8.2-2.2-16.7 2.7-18.9 10.9l-19 70.8-62.8 36.2v-77.5l53.7-53.7c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0L256 56.4V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v40.4l-19.7-19.7c-6.2-6.2-16.4-6.2-22.6 0L138.3 48c-6.3 6.2-6.3 16.4 0 22.6l53.7 53.7v77.5l-62.8-36.2-19-70.8c-2.2-8.2-10.7-13.1-18.9-10.9l-14.9 4c-8.2 2.2-13.1 10.7-10.9 18.9l7 26-33.8-19.5c-7.4-4.3-16.8-1.7-21.1 5.7L2.1 145.7c-4.3 7.4-1.7 16.8 5.7 21.1l33.8 19.5-26 7c-8.3 2.2-13.2 10.7-11 19l4 14.9c2.2 8.2 10.7 13.1 18.9 10.9l70.8-19 63.8 36.9-63.8 36.9-70.8-19c-8.2-2.2-16.7 2.7-18.9 10.9l-4 14.9c-2.2 8.2 2.7 16.7 10.9 18.9l26 7-33.8 19.6c-7.4 4.3-9.9 13.7-5.7 21.1l15.5 26.8c4.3 7.4 13.7 9.9 21.1 5.7l33.8-19.5-7 26c-2.2 8.2 2.7 16.7 10.9 18.9l14.9 4c8.2 2.2 16.7-2.7 18.9-10.9l19-70.8 62.8-36.2v77.5l-53.7 53.7c-6.3 6.2-6.3 16.4 0 22.6l11.3 11.3c6.2 6.2 16.4 6.2 22.6 0l19.7-19.7V496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-40.4l19.7 19.7c6.2 6.2 16.4 6.2 22.6 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6L256 387.7v-77.5l62.8 36.2 19 70.8c2.2 8.2 10.7 13.1 18.9 10.9l14.9-4c8.2-2.2 13.1-10.7 10.9-18.9l-7-26 33.8 19.5c7.4 4.3 16.8 1.7 21.1-5.7l15.5-26.8c4.3-7.3 1.8-16.8-5.6-21z"},child:[]}]})(e)}function Le(e){return Q({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"},child:[]}]})(e)}function fe(e){return Q({tag:"svg",attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(e)}var Qx={exports:{}},H6="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",U6=H6,W6=U6;function Zx(){}function Jx(){}Jx.resetWarningCache=Zx;var G6=function(){function e(r,i,o,a,s,l){if(l!==W6){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Jx,resetWarningCache:Zx};return n.PropTypes=n,n};Qx.exports=G6();var Y6=Qx.exports;const we=Br(Y6);function K6(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var ey=_,X6=K6(ey);function l0(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q6(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var Z6=!!(typeof window<"u"&&window.document&&window.document.createElement);function J6(e,t,n){if(typeof e!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof t!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(i){return i.displayName||i.name||"Component"}return function(o){if(typeof o!="function")throw new Error("Expected WrappedComponent to be a React component.");var a=[],s;function l(){s=e(a.map(function(d){return d.props})),u.canUseDOM?t(s):n&&(s=n(s))}var u=function(d){Q6(p,d);function p(){return d.apply(this,arguments)||this}p.peek=function(){return s},p.rewind=function(){if(p.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var x=s;return s=void 0,a=[],x};var f=p.prototype;return f.UNSAFE_componentWillMount=function(){a.push(this),l()},f.componentDidUpdate=function(){l()},f.componentWillUnmount=function(){var x=a.indexOf(this);a.splice(x,1),l()},f.render=function(){return X6.createElement(o,this.props)},p}(ey.PureComponent);return l0(u,"displayName","SideEffect("+r(o)+")"),l0(u,"canUseDOM",Z6),u}}var e_=J6;const t_=Br(e_);var n_=typeof Element<"u",r_=typeof Map=="function",i_=typeof Set=="function",o_=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ss(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!ss(e[r],t[r]))return!1;return!0}var o;if(r_&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;for(o=e.entries();!(r=o.next()).done;)if(!ss(r.value[1],t.get(r.value[0])))return!1;return!0}if(i_&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(o_&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(n_&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!ss(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var a_=function(t,n){try{return ss(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const s_=Br(a_);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var c0=Object.getOwnPropertySymbols,l_=Object.prototype.hasOwnProperty,c_=Object.prototype.propertyIsEnumerable;function u_(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function d_(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var p_=d_()?Object.assign:function(e,t){for(var n,r=u_(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)l_.call(n,a)&&(r[a]=n[a]);if(c0){i=c0(n);for(var s=0;s<i.length;s++)c_.call(n,i[s])&&(r[i[s]]=n[i[s]])}}return r};const f_=Br(p_);var Ar={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},X={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(X).map(function(e){return X[e]});var be={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},Ks={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ia={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},h_=Object.keys(Ks).reduce(function(e,t){return e[Ks[t]]=t,e},{}),m_=[X.NOSCRIPT,X.SCRIPT,X.STYLE],Yt="data-react-helmet",g_=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v_=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},x_=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ht=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y_=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},u0=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},w_=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},rd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},b_=function(t){var n=Si(t,X.TITLE),r=Si(t,ia.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var i=Si(t,ia.DEFAULT_TITLE);return n||i||void 0},S_=function(t){return Si(t,ia.ON_CHANGE_CLIENT_STATE)||function(){}},Ac=function(t,n){return n.filter(function(r){return typeof r[t]<"u"}).map(function(r){return r[t]}).reduce(function(r,i){return ht({},r,i)},{})},__=function(t,n){return n.filter(function(r){return typeof r[X.BASE]<"u"}).map(function(r){return r[X.BASE]}).reverse().reduce(function(r,i){if(!r.length)for(var o=Object.keys(i),a=0;a<o.length;a++){var s=o[a],l=s.toLowerCase();if(t.indexOf(l)!==-1&&i[l])return r.concat(i)}return r},[])},co=function(t,n,r){var i={};return r.filter(function(o){return Array.isArray(o[t])?!0:(typeof o[t]<"u"&&k_("Helmet: "+t+' should be of type "Array". Instead found type "'+g_(o[t])+'"'),!1)}).map(function(o){return o[t]}).reverse().reduce(function(o,a){var s={};a.filter(function(f){for(var g=void 0,x=Object.keys(f),y=0;y<x.length;y++){var b=x[y],v=b.toLowerCase();n.indexOf(v)!==-1&&!(g===be.REL&&f[g].toLowerCase()==="canonical")&&!(v===be.REL&&f[v].toLowerCase()==="stylesheet")&&(g=v),n.indexOf(b)!==-1&&(b===be.INNER_HTML||b===be.CSS_TEXT||b===be.ITEM_PROP)&&(g=b)}if(!g||!f[g])return!1;var h=f[g].toLowerCase();return i[g]||(i[g]={}),s[g]||(s[g]={}),i[g][h]?!1:(s[g][h]=!0,!0)}).reverse().forEach(function(f){return o.push(f)});for(var l=Object.keys(s),u=0;u<l.length;u++){var d=l[u],p=f_({},i[d],s[d]);i[d]=p}return o},[]).reverse()},Si=function(t,n){for(var r=t.length-1;r>=0;r--){var i=t[r];if(i.hasOwnProperty(n))return i[n]}return null},j_=function(t){return{baseTag:__([be.HREF,be.TARGET],t),bodyAttributes:Ac(Ar.BODY,t),defer:Si(t,ia.DEFER),encode:Si(t,ia.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Ac(Ar.HTML,t),linkTags:co(X.LINK,[be.REL,be.HREF],t),metaTags:co(X.META,[be.NAME,be.CHARSET,be.HTTPEQUIV,be.PROPERTY,be.ITEM_PROP],t),noscriptTags:co(X.NOSCRIPT,[be.INNER_HTML],t),onChangeClientState:S_(t),scriptTags:co(X.SCRIPT,[be.SRC,be.INNER_HTML],t),styleTags:co(X.STYLE,[be.CSS_TEXT],t),title:b_(t),titleAttributes:Ac(Ar.TITLE,t)}},id=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){id(t)},0)}}(),d0=function(t){return clearTimeout(t)},T_=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||id:global.requestAnimationFrame||id,C_=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||d0:global.cancelAnimationFrame||d0,k_=function(t){return console&&typeof console.warn=="function"&&console.warn(t)},uo=null,E_=function(t){uo&&C_(uo),t.defer?uo=T_(function(){p0(t,function(){uo=null})}):(p0(t),uo=null)},p0=function(t,n){var r=t.baseTag,i=t.bodyAttributes,o=t.htmlAttributes,a=t.linkTags,s=t.metaTags,l=t.noscriptTags,u=t.onChangeClientState,d=t.scriptTags,p=t.styleTags,f=t.title,g=t.titleAttributes;od(X.BODY,i),od(X.HTML,o),z_(f,g);var x={baseTag:Xr(X.BASE,r),linkTags:Xr(X.LINK,a),metaTags:Xr(X.META,s),noscriptTags:Xr(X.NOSCRIPT,l),scriptTags:Xr(X.SCRIPT,d),styleTags:Xr(X.STYLE,p)},y={},b={};Object.keys(x).forEach(function(v){var h=x[v],m=h.newTags,w=h.oldTags;m.length&&(y[v]=m),w.length&&(b[v]=x[v].oldTags)}),n&&n(),u(t,y,b)},ty=function(t){return Array.isArray(t)?t.join(""):t},z_=function(t,n){typeof t<"u"&&document.title!==t&&(document.title=ty(t)),od(X.TITLE,n)},od=function(t,n){var r=document.getElementsByTagName(t)[0];if(r){for(var i=r.getAttribute(Yt),o=i?i.split(","):[],a=[].concat(o),s=Object.keys(n),l=0;l<s.length;l++){var u=s[l],d=n[u]||"";r.getAttribute(u)!==d&&r.setAttribute(u,d),o.indexOf(u)===-1&&o.push(u);var p=a.indexOf(u);p!==-1&&a.splice(p,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);o.length===a.length?r.removeAttribute(Yt):r.getAttribute(Yt)!==s.join(",")&&r.setAttribute(Yt,s.join(","))}},Xr=function(t,n){var r=document.head||document.querySelector(X.HEAD),i=r.querySelectorAll(t+"["+Yt+"]"),o=Array.prototype.slice.call(i),a=[],s=void 0;return n&&n.length&&n.forEach(function(l){var u=document.createElement(t);for(var d in l)if(l.hasOwnProperty(d))if(d===be.INNER_HTML)u.innerHTML=l.innerHTML;else if(d===be.CSS_TEXT)u.styleSheet?u.styleSheet.cssText=l.cssText:u.appendChild(document.createTextNode(l.cssText));else{var p=typeof l[d]>"u"?"":l[d];u.setAttribute(d,p)}u.setAttribute(Yt,"true"),o.some(function(f,g){return s=g,u.isEqualNode(f)})?o.splice(s,1):a.push(u)}),o.forEach(function(l){return l.parentNode.removeChild(l)}),a.forEach(function(l){return r.appendChild(l)}),{oldTags:o,newTags:a}},ny=function(t){return Object.keys(t).reduce(function(n,r){var i=typeof t[r]<"u"?r+'="'+t[r]+'"':""+r;return n?n+" "+i:i},"")},P_=function(t,n,r,i){var o=ny(r),a=ty(n);return o?"<"+t+" "+Yt+'="true" '+o+">"+rd(a,i)+"</"+t+">":"<"+t+" "+Yt+'="true">'+rd(a,i)+"</"+t+">"},A_=function(t,n,r){return n.reduce(function(i,o){var a=Object.keys(o).filter(function(u){return!(u===be.INNER_HTML||u===be.CSS_TEXT)}).reduce(function(u,d){var p=typeof o[d]>"u"?d:d+'="'+rd(o[d],r)+'"';return u?u+" "+p:p},""),s=o.innerHTML||o.cssText||"",l=m_.indexOf(t)===-1;return i+"<"+t+" "+Yt+'="true" '+a+(l?"/>":">"+s+"</"+t+">")},"")},ry=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[Ks[i]||i]=t[i],r},n)},M_=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[h_[i]||i]=t[i],r},n)},L_=function(t,n,r){var i,o=(i={key:n},i[Yt]=!0,i),a=ry(r,o);return[ee.createElement(X.TITLE,a,n)]},O_=function(t,n){return n.map(function(r,i){var o,a=(o={key:i},o[Yt]=!0,o);return Object.keys(r).forEach(function(s){var l=Ks[s]||s;if(l===be.INNER_HTML||l===be.CSS_TEXT){var u=r.innerHTML||r.cssText;a.dangerouslySetInnerHTML={__html:u}}else a[l]=r[s]}),ee.createElement(t,a)})},mn=function(t,n,r){switch(t){case X.TITLE:return{toComponent:function(){return L_(t,n.title,n.titleAttributes)},toString:function(){return P_(t,n.title,n.titleAttributes,r)}};case Ar.BODY:case Ar.HTML:return{toComponent:function(){return ry(n)},toString:function(){return ny(n)}};default:return{toComponent:function(){return O_(t,n)},toString:function(){return A_(t,n,r)}}}},iy=function(t){var n=t.baseTag,r=t.bodyAttributes,i=t.encode,o=t.htmlAttributes,a=t.linkTags,s=t.metaTags,l=t.noscriptTags,u=t.scriptTags,d=t.styleTags,p=t.title,f=p===void 0?"":p,g=t.titleAttributes;return{base:mn(X.BASE,n,i),bodyAttributes:mn(Ar.BODY,r,i),htmlAttributes:mn(Ar.HTML,o,i),link:mn(X.LINK,a,i),meta:mn(X.META,s,i),noscript:mn(X.NOSCRIPT,l,i),script:mn(X.SCRIPT,u,i),style:mn(X.STYLE,d,i),title:mn(X.TITLE,{title:f,titleAttributes:g},i)}},I_=function(t){var n,r;return r=n=function(i){y_(o,i);function o(){return v_(this,o),w_(this,i.apply(this,arguments))}return o.prototype.shouldComponentUpdate=function(s){return!s_(this.props,s)},o.prototype.mapNestedChildrenToProps=function(s,l){if(!l)return null;switch(s.type){case X.SCRIPT:case X.NOSCRIPT:return{innerHTML:l};case X.STYLE:return{cssText:l}}throw new Error("<"+s.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},o.prototype.flattenArrayTypeChildren=function(s){var l,u=s.child,d=s.arrayTypeChildren,p=s.newChildProps,f=s.nestedChildren;return ht({},d,(l={},l[u.type]=[].concat(d[u.type]||[],[ht({},p,this.mapNestedChildrenToProps(u,f))]),l))},o.prototype.mapObjectTypeChildren=function(s){var l,u,d=s.child,p=s.newProps,f=s.newChildProps,g=s.nestedChildren;switch(d.type){case X.TITLE:return ht({},p,(l={},l[d.type]=g,l.titleAttributes=ht({},f),l));case X.BODY:return ht({},p,{bodyAttributes:ht({},f)});case X.HTML:return ht({},p,{htmlAttributes:ht({},f)})}return ht({},p,(u={},u[d.type]=ht({},f),u))},o.prototype.mapArrayTypeChildrenToProps=function(s,l){var u=ht({},l);return Object.keys(s).forEach(function(d){var p;u=ht({},u,(p={},p[d]=s[d],p))}),u},o.prototype.warnOnInvalidChildren=function(s,l){return!0},o.prototype.mapChildrenToProps=function(s,l){var u=this,d={};return ee.Children.forEach(s,function(p){if(!(!p||!p.props)){var f=p.props,g=f.children,x=u0(f,["children"]),y=M_(x);switch(u.warnOnInvalidChildren(p,g),p.type){case X.LINK:case X.META:case X.NOSCRIPT:case X.SCRIPT:case X.STYLE:d=u.flattenArrayTypeChildren({child:p,arrayTypeChildren:d,newChildProps:y,nestedChildren:g});break;default:l=u.mapObjectTypeChildren({child:p,newProps:l,newChildProps:y,nestedChildren:g});break}}}),l=this.mapArrayTypeChildrenToProps(d,l),l},o.prototype.render=function(){var s=this.props,l=s.children,u=u0(s,["children"]),d=ht({},u);return l&&(d=this.mapChildrenToProps(l,d)),ee.createElement(t,d)},x_(o,null,[{key:"canUseDOM",set:function(s){t.canUseDOM=s}}]),o}(ee.Component),n.propTypes={base:we.object,bodyAttributes:we.object,children:we.oneOfType([we.arrayOf(we.node),we.node]),defaultTitle:we.string,defer:we.bool,encodeSpecialCharacters:we.bool,htmlAttributes:we.object,link:we.arrayOf(we.object),meta:we.arrayOf(we.object),noscript:we.arrayOf(we.object),onChangeClientState:we.func,script:we.arrayOf(we.object),style:we.arrayOf(we.object),title:we.string,titleAttributes:we.object,titleTemplate:we.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=t.peek,n.rewind=function(){var i=t.rewind();return i||(i=iy({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),i},r},R_=function(){return null},V_=t_(j_,E_,iy)(R_),Nr=I_(V_);Nr.renderStatic=Nr.rewind;var at=function(){return at=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},at.apply(this,arguments)};function Oi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var ve="-ms-",Oo="-moz-",ce="-webkit-",oy="comm",Ml="rule",Zp="decl",D_="@import",ay="@keyframes",N_="@layer",sy=Math.abs,Jp=String.fromCharCode,ad=Object.assign;function F_(e,t){return Ue(e,0)^45?(((t<<2^Ue(e,0))<<2^Ue(e,1))<<2^Ue(e,2))<<2^Ue(e,3):0}function ly(e){return e.trim()}function yn(e,t){return(e=t.exec(e))?e[0]:e}function ne(e,t,n){return e.replace(t,n)}function ls(e,t,n){return e.indexOf(t,n)}function Ue(e,t){return e.charCodeAt(t)|0}function Ii(e,t,n){return e.slice(t,n)}function an(e){return e.length}function cy(e){return e.length}function yo(e,t){return t.push(e),e}function B_(e,t){return e.map(t).join("")}function f0(e,t){return e.filter(function(n){return!yn(n,t)})}var Ll=1,Ri=1,uy=0,Bt=0,Ie=0,Ui="";function Ol(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ll,column:Ri,length:a,return:"",siblings:s}}function qn(e,t){return ad(Ol("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Qr(e){for(;e.root;)e=qn(e.root,{children:[e]});yo(e,e.siblings)}function $_(){return Ie}function q_(){return Ie=Bt>0?Ue(Ui,--Bt):0,Ri--,Ie===10&&(Ri=1,Ll--),Ie}function Qt(){return Ie=Bt<uy?Ue(Ui,Bt++):0,Ri++,Ie===10&&(Ri=1,Ll++),Ie}function Mr(){return Ue(Ui,Bt)}function cs(){return Bt}function Il(e,t){return Ii(Ui,e,t)}function sd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function H_(e){return Ll=Ri=1,uy=an(Ui=e),Bt=0,[]}function U_(e){return Ui="",e}function Mc(e){return ly(Il(Bt-1,ld(e===91?e+2:e===40?e+1:e)))}function W_(e){for(;(Ie=Mr())&&Ie<33;)Qt();return sd(e)>2||sd(Ie)>3?"":" "}function G_(e,t){for(;--t&&Qt()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return Il(e,cs()+(t<6&&Mr()==32&&Qt()==32))}function ld(e){for(;Qt();)switch(Ie){case e:return Bt;case 34:case 39:e!==34&&e!==39&&ld(Ie);break;case 40:e===41&&ld(e);break;case 92:Qt();break}return Bt}function Y_(e,t){for(;Qt()&&e+Ie!==57;)if(e+Ie===84&&Mr()===47)break;return"/*"+Il(t,Bt-1)+"*"+Jp(e===47?e:Qt())}function K_(e){for(;!sd(Mr());)Qt();return Il(e,Bt)}function X_(e){return U_(us("",null,null,null,[""],e=H_(e),0,[0],e))}function us(e,t,n,r,i,o,a,s,l){for(var u=0,d=0,p=a,f=0,g=0,x=0,y=1,b=1,v=1,h=0,m="",w=i,S=o,j=r,C=m;b;)switch(x=h,h=Qt()){case 40:if(x!=108&&Ue(C,p-1)==58){ls(C+=ne(Mc(h),"&","&\f"),"&\f",sy(u?s[u-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:C+=Mc(h);break;case 9:case 10:case 13:case 32:C+=W_(x);break;case 92:C+=G_(cs()-1,7);continue;case 47:switch(Mr()){case 42:case 47:yo(Q_(Y_(Qt(),cs()),t,n,l),l);break;default:C+="/"}break;case 123*y:s[u++]=an(C)*v;case 125*y:case 59:case 0:switch(h){case 0:case 125:b=0;case 59+d:v==-1&&(C=ne(C,/\f/g,"")),g>0&&an(C)-p&&yo(g>32?m0(C+";",r,n,p-1,l):m0(ne(C," ","")+";",r,n,p-2,l),l);break;case 59:C+=";";default:if(yo(j=h0(C,t,n,u,d,i,s,m,w=[],S=[],p,o),o),h===123)if(d===0)us(C,t,j,j,w,o,p,s,S);else switch(f===99&&Ue(C,3)===110?100:f){case 100:case 108:case 109:case 115:us(e,j,j,r&&yo(h0(e,j,j,0,0,i,s,m,i,w=[],p,S),S),i,S,p,s,r?w:S);break;default:us(C,j,j,j,[""],S,0,s,S)}}u=d=g=0,y=v=1,m=C="",p=a;break;case 58:p=1+an(C),g=x;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&q_()==125)continue}switch(C+=Jp(h),h*y){case 38:v=d>0?1:(C+="\f",-1);break;case 44:s[u++]=(an(C)-1)*v,v=1;break;case 64:Mr()===45&&(C+=Mc(Qt())),f=Mr(),d=p=an(m=C+=K_(cs())),h++;break;case 45:x===45&&an(C)==2&&(y=0)}}return o}function h0(e,t,n,r,i,o,a,s,l,u,d,p){for(var f=i-1,g=i===0?o:[""],x=cy(g),y=0,b=0,v=0;y<r;++y)for(var h=0,m=Ii(e,f+1,f=sy(b=a[y])),w=e;h<x;++h)(w=ly(b>0?g[h]+" "+m:ne(m,/&\f/g,g[h])))&&(l[v++]=w);return Ol(e,t,n,i===0?Ml:s,l,u,d,p)}function Q_(e,t,n,r){return Ol(e,t,n,oy,Jp($_()),Ii(e,2,-2),0,r)}function m0(e,t,n,r,i){return Ol(e,t,n,Zp,Ii(e,0,r),Ii(e,r+1,-1),r,i)}function dy(e,t,n){switch(F_(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+e+e;case 4789:return Oo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+Oo+e+ve+e+e;case 5936:switch(Ue(e,t+11)){case 114:return ce+e+ve+ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+ve+ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+ve+ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ce+e+ve+e+e;case 6165:return ce+e+ve+"flex-"+e+e;case 5187:return ce+e+ne(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+ve+"flex-$1$2")+e;case 5443:return ce+e+ve+"flex-item-"+ne(e,/flex-|-self/g,"")+(yn(e,/flex-|baseline/)?"":ve+"grid-row-"+ne(e,/flex-|-self/g,""))+e;case 4675:return ce+e+ve+"flex-line-pack"+ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return ce+e+ve+ne(e,"shrink","negative")+e;case 5292:return ce+e+ve+ne(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+ne(e,"-grow","")+ce+e+ve+ne(e,"grow","positive")+e;case 4554:return ce+ne(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return ne(ne(ne(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return ne(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return ne(ne(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+e+e;case 4200:if(!yn(e,/flex-|baseline/))return ve+"grid-column-align"+Ii(e,t)+e;break;case 2592:case 3360:return ve+ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,yn(r.props,/grid-\w+-end/)})?~ls(e+(n=n[t].value),"span",0)?e:ve+ne(e,"-start","")+e+ve+"grid-row-span:"+(~ls(n,"span",0)?yn(n,/\d+/):+yn(n,/\d+/)-+yn(e,/\d+/))+";":ve+ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return yn(r.props,/grid-\w+-start/)})?e:ve+ne(ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ne(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(an(e)-1-t>6)switch(Ue(e,t+1)){case 109:if(Ue(e,t+4)!==45)break;case 102:return ne(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+Oo+(Ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ls(e,"stretch",0)?dy(ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,s,l,u){return ve+i+":"+o+u+(a?ve+i+"-span:"+(s?l:+l-+o)+u:"")+e});case 4949:if(Ue(e,t+6)===121)return ne(e,":",":"+ce)+e;break;case 6444:switch(Ue(e,Ue(e,14)===45?18:11)){case 120:return ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ce+(Ue(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+ve+"$2box$3")+e;case 100:return ne(e,":",":"+ve)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(e,"scroll-","scroll-snap-")+e}return e}function Xs(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Z_(e,t,n,r){switch(e.type){case N_:if(e.children.length)break;case D_:case Zp:return e.return=e.return||e.value;case oy:return"";case ay:return e.return=e.value+"{"+Xs(e.children,r)+"}";case Ml:if(!an(e.value=e.props.join(",")))return""}return an(n=Xs(e.children,r))?e.return=e.value+"{"+n+"}":""}function J_(e){var t=cy(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function e8(e){return function(t){t.root||(t=t.return)&&e(t)}}function t8(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Zp:e.return=dy(e.value,e.length,n);return;case ay:return Xs([qn(e,{value:ne(e.value,"@","@"+ce)})],r);case Ml:if(e.length)return B_(n=e.props,function(i){switch(yn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Qr(qn(e,{props:[ne(i,/:(read-\w+)/,":"+Oo+"$1")]})),Qr(qn(e,{props:[i]})),ad(e,{props:f0(n,r)});break;case"::placeholder":Qr(qn(e,{props:[ne(i,/:(plac\w+)/,":"+ce+"input-$1")]})),Qr(qn(e,{props:[ne(i,/:(plac\w+)/,":"+Oo+"$1")]})),Qr(qn(e,{props:[ne(i,/:(plac\w+)/,ve+"input-$1")]})),Qr(qn(e,{props:[i]})),ad(e,{props:f0(n,r)});break}return""})}}var n8={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},St={},Vi=typeof process<"u"&&St!==void 0&&(St.REACT_APP_SC_ATTR||St.SC_ATTR)||"data-styled",py="active",fy="data-styled-version",Rl="6.1.13",ef=`/*!sc*/
`,Qs=typeof window<"u"&&"HTMLElement"in window,r8=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&St!==void 0&&St.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&St.REACT_APP_SC_DISABLE_SPEEDY!==""?St.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&St.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&St!==void 0&&St.SC_DISABLE_SPEEDY!==void 0&&St.SC_DISABLE_SPEEDY!==""&&St.SC_DISABLE_SPEEDY!=="false"&&St.SC_DISABLE_SPEEDY),i8={},Vl=Object.freeze([]),Di=Object.freeze({});function hy(e,t,n){return n===void 0&&(n=Di),e.theme!==n.theme&&e.theme||t||n.theme}var my=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),o8=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,a8=/(^-|-$)/g;function g0(e){return e.replace(o8,"-").replace(a8,"")}var s8=/(a)(d)/gi,Na=52,v0=function(e){return String.fromCharCode(e+(e>25?39:97))};function cd(e){var t,n="";for(t=Math.abs(e);t>Na;t=t/Na|0)n=v0(t%Na)+n;return(v0(t%Na)+n).replace(s8,"$1-$2")}var Lc,gy=5381,mi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},vy=function(e){return mi(gy,e)};function tf(e){return cd(vy(e)>>>0)}function l8(e){return e.displayName||e.name||"Component"}function Oc(e){return typeof e=="string"&&!0}var xy=typeof Symbol=="function"&&Symbol.for,yy=xy?Symbol.for("react.memo"):60115,c8=xy?Symbol.for("react.forward_ref"):60112,u8={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},d8={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},wy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},p8=((Lc={})[c8]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Lc[yy]=wy,Lc);function x0(e){return("type"in(t=e)&&t.type.$$typeof)===yy?wy:"$$typeof"in e?p8[e.$$typeof]:u8;var t}var f8=Object.defineProperty,h8=Object.getOwnPropertyNames,y0=Object.getOwnPropertySymbols,m8=Object.getOwnPropertyDescriptor,g8=Object.getPrototypeOf,w0=Object.prototype;function by(e,t,n){if(typeof t!="string"){if(w0){var r=g8(t);r&&r!==w0&&by(e,r,n)}var i=h8(t);y0&&(i=i.concat(y0(t)));for(var o=x0(e),a=x0(t),s=0;s<i.length;++s){var l=i[s];if(!(l in d8||n&&n[l]||a&&l in a||o&&l in o)){var u=m8(t,l);try{f8(e,l,u)}catch{}}}}return e}function Ni(e){return typeof e=="function"}function nf(e){return typeof e=="object"&&"styledComponentId"in e}function kr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Zs(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function oa(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ud(e,t,n){if(n===void 0&&(n=!1),!n&&!oa(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ud(e[r],t[r]);else if(oa(t))for(var r in t)e[r]=ud(e[r],t[r]);return e}function rf(e,t){Object.defineProperty(e,"toString",{value:t})}function ga(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var v8=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw ga(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(ef);return n},e}(),ds=new Map,Js=new Map,ps=1,Fa=function(e){if(ds.has(e))return ds.get(e);for(;Js.has(ps);)ps++;var t=ps++;return ds.set(e,t),Js.set(t,e),t},x8=function(e,t){ps=t+1,ds.set(e,t),Js.set(t,e)},y8="style[".concat(Vi,"][").concat(fy,'="').concat(Rl,'"]'),w8=new RegExp("^".concat(Vi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),b8=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},S8=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(ef),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(w8);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(x8(d,u),b8(e,d,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}},b0=function(e){for(var t=document.querySelectorAll(y8),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Vi)!==py&&(S8(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function _8(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Sy=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(Vi,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Vi,py),r.setAttribute(fy,Rl);var a=_8();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},j8=function(){function e(t){this.element=Sy(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw ga(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),T8=function(){function e(t){this.element=Sy(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),C8=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),S0=Qs,k8={isServer:!Qs,useCSSOMInjection:!r8},el=function(){function e(t,n,r){t===void 0&&(t=Di),n===void 0&&(n={});var i=this;this.options=at(at({},k8),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Qs&&S0&&(S0=!1,b0(this)),rf(this,function(){return function(o){for(var a=o.getTag(),s=a.length,l="",u=function(p){var f=function(v){return Js.get(v)}(p);if(f===void 0)return"continue";var g=o.names.get(f),x=a.getGroup(p);if(g===void 0||!g.size||x.length===0)return"continue";var y="".concat(Vi,".g").concat(p,'[id="').concat(f,'"]'),b="";g!==void 0&&g.forEach(function(v){v.length>0&&(b+="".concat(v,","))}),l+="".concat(x).concat(y,'{content:"').concat(b,'"}').concat(ef)},d=0;d<s;d++)u(d);return l}(i)})}return e.registerId=function(t){return Fa(t)},e.prototype.rehydrate=function(){!this.server&&Qs&&b0(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(at(at({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new C8(i):r?new j8(i):new T8(i)}(this.options),new v8(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Fa(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Fa(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Fa(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),E8=/&/g,z8=/^\s*\/\/.*$/gm;function _y(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=_y(n.children,t)),n})}function P8(e){var t,n,r,i=Di,o=i.options,a=o===void 0?Di:o,s=i.plugins,l=s===void 0?Vl:s,u=function(f,g,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):f},d=l.slice();d.push(function(f){f.type===Ml&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(E8,n).replace(r,u))}),a.prefix&&d.push(t8),d.push(Z_);var p=function(f,g,x,y){g===void 0&&(g=""),x===void 0&&(x=""),y===void 0&&(y="&"),t=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var b=f.replace(z8,""),v=X_(x||g?"".concat(x," ").concat(g," { ").concat(b," }"):b);a.namespace&&(v=_y(v,a.namespace));var h=[];return Xs(v,J_(d.concat(e8(function(m){return h.push(m)})))),h};return p.hash=l.length?l.reduce(function(f,g){return g.name||ga(15),mi(f,g.name)},gy).toString():"",p}var A8=new el,dd=P8(),jy=ee.createContext({shouldForwardProp:void 0,styleSheet:A8,stylis:dd});jy.Consumer;ee.createContext(void 0);function pd(){return _.useContext(jy)}var Ty=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=dd);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,rf(this,function(){throw ga(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=dd),this.name+t.hash},e}(),M8=function(e){return e>="A"&&e<="Z"};function _0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;M8(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Cy=function(e){return e==null||e===!1||e===""},ky=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Cy(o)&&(Array.isArray(o)&&o.isCss||Ni(o)?r.push("".concat(_0(i),":"),o,";"):oa(o)?r.push.apply(r,Oi(Oi(["".concat(i," {")],ky(o),!1),["}"],!1)):r.push("".concat(_0(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in n8||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function sr(e,t,n,r){if(Cy(e))return[];if(nf(e))return[".".concat(e.styledComponentId)];if(Ni(e)){if(!Ni(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return sr(i,t,n,r)}var o;return e instanceof Ty?n?(e.inject(n,r),[e.getName(r)]):[e]:oa(e)?ky(e):Array.isArray(e)?Array.prototype.concat.apply(Vl,e.map(function(a){return sr(a,t,n,r)})):[e.toString()]}function Ey(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ni(n)&&!nf(n))return!1}return!0}var L8=vy(Rl),O8=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ey(t),this.componentId=n,this.baseHash=mi(L8,n),this.baseStyle=r,el.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=kr(i,this.staticRulesId);else{var o=Zs(sr(this.rules,t,n,r)),a=cd(mi(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}i=kr(i,a),this.staticRulesId=a}else{for(var l=mi(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")u+=p;else if(p){var f=Zs(sr(p,t,n,r));l=mi(l,f+d),u+=f}}if(u){var g=cd(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=kr(i,g)}}return i},e}(),of=ee.createContext(void 0);of.Consumer;var Ic={};function I8(e,t,n){var r=nf(e),i=e,o=!Oc(e),a=t.attrs,s=a===void 0?Vl:a,l=t.componentId,u=l===void 0?function(w,S){var j=typeof w!="string"?"sc":g0(w);Ic[j]=(Ic[j]||0)+1;var C="".concat(j,"-").concat(tf(Rl+j+Ic[j]));return S?"".concat(S,"-").concat(C):C}(t.displayName,t.parentComponentId):l,d=t.displayName,p=d===void 0?function(w){return Oc(w)?"styled.".concat(w):"Styled(".concat(l8(w),")")}(e):d,f=t.displayName&&t.componentId?"".concat(g0(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;x=function(w,S){return y(w,S)&&b(w,S)}}else x=y}var v=new O8(n,f,r?i.componentStyle:void 0);function h(w,S){return function(j,C,T){var A=j.attrs,E=j.componentStyle,z=j.defaultProps,M=j.foldedComponentIds,R=j.styledComponentId,V=j.target,U=ee.useContext(of),Z=pd(),Y=j.shouldForwardProp||Z.shouldForwardProp,L=hy(C,U,z)||Di,N=function(_e,de,le){for(var P,O=at(at({},de),{className:void 0,theme:le}),D=0;D<_e.length;D+=1){var I=Ni(P=_e[D])?P(O):P;for(var G in I)O[G]=G==="className"?kr(O[G],I[G]):G==="style"?at(at({},O[G]),I[G]):I[G]}return de.className&&(O.className=kr(O.className,de.className)),O}(A,C,L),$=N.as||V,K={};for(var J in N)N[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&N.theme===L||(J==="forwardedAs"?K.as=N.forwardedAs:Y&&!Y(J,$)||(K[J]=N[J]));var ye=function(_e,de){var le=pd(),P=_e.generateAndInjectStyles(de,le.styleSheet,le.stylis);return P}(E,N),he=kr(M,R);return ye&&(he+=" "+ye),N.className&&(he+=" "+N.className),K[Oc($)&&!my.has($)?"class":"className"]=he,K.ref=T,_.createElement($,K)}(m,w,S)}h.displayName=p;var m=ee.forwardRef(h);return m.attrs=g,m.componentStyle=v,m.displayName=p,m.shouldForwardProp=x,m.foldedComponentIds=r?kr(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=f,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(S){for(var j=[],C=1;C<arguments.length;C++)j[C-1]=arguments[C];for(var T=0,A=j;T<A.length;T++)ud(S,A[T],!0);return S}({},i.defaultProps,w):w}}),rf(m,function(){return".".concat(m.styledComponentId)}),o&&by(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function j0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var T0=function(e){return Object.assign(e,{isCss:!0})};function af(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ni(e)||oa(e))return T0(sr(j0(Vl,Oi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?sr(r):T0(sr(j0(r,t)))}function fd(e,t,n){if(n===void 0&&(n=Di),!t)throw ga(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,af.apply(void 0,Oi([i],o,!1)))};return r.attrs=function(i){return fd(e,t,at(at({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return fd(e,t,at(at({},n),i))},r}var zy=function(e){return fd(I8,e)},k=zy;my.forEach(function(e){k[e]=zy(e)});var R8=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ey(t),el.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Zs(sr(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&el.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Wi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=af.apply(void 0,Oi([e],t,!1)),i="sc-global-".concat(tf(JSON.stringify(r))),o=new R8(r,i),a=function(l){var u=pd(),d=ee.useContext(of),p=ee.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(p,l,u.styleSheet,d,u.stylis),ee.useLayoutEffect(function(){if(!u.styleSheet.server)return s(p,l,u.styleSheet,d,u.stylis),function(){return o.removeStyles(p,u.styleSheet)}},[p,l,u.styleSheet,d,u.stylis]),null};function s(l,u,d,p,f){if(o.isStatic)o.renderStyles(l,i8,d,f);else{var g=at(at({},u),{theme:hy(u,p,a.defaultProps)});o.renderStyles(l,g,d,f)}}return ee.memo(a)}function Vn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Zs(af.apply(void 0,Oi([e],t,!1))),i=tf(r);return new Ty(i,r)}const V8=k(Oe.video)`
  width: 100%;
  object-fit: cover;
  height: 95vh;
  position: relative;
  z-index: -1;
  top: 0;
  left: 0;
  border-radius: 0 0 1000px 1000px / 100px 100px;
  clip-path: circle(0% at 50% 50%);

  @media (max-width: 768px) {
    height: 95dvh;
    border-radius: 0 0 500px 500px / 50px 50px;
  }
`,D8=()=>{const e=_.useRef(null);return _.useEffect(()=>{const t=e.current;t==null||t.play().catch(n=>console.error("Falha ao iniciar o vídeo:",n))},[]),c.jsxs(V8,{ref:e,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,initial:{clipPath:"circle(0% at 50% 50%)"},animate:{clipPath:"circle(100% at 50% 50%)"},transition:{duration:1,ease:"easeInOut"},children:[c.jsx("source",{src:"https://res.cloudinary.com/dupg7clzc/video/upload/v1730836205/V%C3%8DDEO_SITE_xvpltm.mp4",type:"video/mp4"}),"Seu navegador não suporta o elemento de vídeo."]})};function C0(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function sf(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:C0(t[n])&&C0(e[n])&&Object.keys(t[n]).length>0&&sf(e[n],t[n])})}const Py={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Pn(){const e=typeof document<"u"?document:{};return sf(e,Py),e}const N8={document:Py,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Mt(){const e=typeof window<"u"?window:{};return sf(e,N8),e}function F8(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function B8(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function hd(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function tl(){return Date.now()}function $8(e){const t=Mt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function q8(e,t){t===void 0&&(t="x");const n=Mt();let r,i,o;const a=$8(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(s=>s.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Ba(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function H8(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function jt(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!H8(r)){const i=Object.keys(Object(r)).filter(o=>t.indexOf(o)<0);for(let o=0,a=i.length;o<a;o+=1){const s=i[o],l=Object.getOwnPropertyDescriptor(r,s);l!==void 0&&l.enumerable&&(Ba(e[s])&&Ba(r[s])?r[s].__swiper__?e[s]=r[s]:jt(e[s],r[s]):!Ba(e[s])&&Ba(r[s])?(e[s]={},r[s].__swiper__?e[s]=r[s]:jt(e[s],r[s])):e[s]=r[s])}}}return e}function $a(e,t,n){e.style.setProperty(t,n)}function Ay(e){let{swiper:t,targetPosition:n,side:r}=e;const i=Mt(),o=-t.translate;let a=null,s;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const u=n>o?"next":"prev",d=(f,g)=>u==="next"&&f>=g||u==="prev"&&f<=g,p=()=>{s=new Date().getTime(),a===null&&(a=s);const f=Math.max(Math.min((s-a)/l,1),0),g=.5-Math.cos(f*Math.PI)/2;let x=o+g*(n-o);if(d(x,n)&&(x=n),t.wrapperEl.scrollTo({[r]:x}),d(x,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:x})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(p)};p()}function lf(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function cn(e,t){t===void 0&&(t="");const n=[...e.children];return e instanceof HTMLSlotElement&&n.push(...e.assignedElements()),t?n.filter(r=>r.matches(t)):n}function U8(e,t){const n=t.contains(e);return!n&&t instanceof HTMLSlotElement?[...t.assignedElements()].includes(e):n}function nl(e){try{console.warn(e);return}catch{}}function aa(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:F8(t)),n}function W8(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function G8(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Qn(e,t){return Mt().getComputedStyle(e,null).getPropertyValue(t)}function rl(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function My(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function md(e,t,n){const r=Mt();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function qe(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Y8(e){return t=>Math.abs(t)>0&&e.browser&&e.browser.need3dFix&&Math.abs(t)%90===0?t+.001:t}let Rc;function K8(){const e=Mt(),t=Pn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Ly(){return Rc||(Rc=K8()),Rc}let Vc;function X8(e){let{userAgent:t}=e===void 0?{}:e;const n=Ly(),r=Mt(),i=r.navigator.platform,o=t||r.navigator.userAgent,a={ios:!1,android:!1},s=r.screen.width,l=r.screen.height,u=o.match(/(Android);?[\s\/]+([\d.]+)?/);let d=o.match(/(iPad).*OS\s([\d_]+)/);const p=o.match(/(iPod)(.*OS\s([\d_]+))?/),f=!d&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),g=i==="Win32";let x=i==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&x&&n.touch&&y.indexOf(`${s}x${l}`)>=0&&(d=o.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),x=!1),u&&!g&&(a.os="android",a.android=!0),(d||f||p)&&(a.os="ios",a.ios=!0),a}function Oy(e){return e===void 0&&(e={}),Vc||(Vc=X8(e)),Vc}let Dc;function Q8(){const e=Mt(),t=Oy();let n=!1;function r(){const s=e.navigator.userAgent.toLowerCase();return s.indexOf("safari")>=0&&s.indexOf("chrome")<0&&s.indexOf("android")<0}if(r()){const s=String(e.navigator.userAgent);if(s.includes("Version/")){const[l,u]=s.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=l<16||l===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function Z8(){return Dc||(Dc=Q8()),Dc}function J8(e){let{swiper:t,on:n,emit:r}=e;const i=Mt();let o=null,a=null;const s=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(o=new ResizeObserver(p=>{a=i.requestAnimationFrame(()=>{const{width:f,height:g}=t;let x=f,y=g;p.forEach(b=>{let{contentBoxSize:v,contentRect:h,target:m}=b;m&&m!==t.el||(x=h?h.width:(v[0]||v).inlineSize,y=h?h.height:(v[0]||v).blockSize)}),(x!==f||y!==g)&&s()})}),o.observe(t.el))},u=()=>{a&&i.cancelAnimationFrame(a),o&&o.unobserve&&t.el&&(o.unobserve(t.el),o=null)},d=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",s),i.addEventListener("orientationchange",d)}),n("destroy",()=>{u(),i.removeEventListener("resize",s),i.removeEventListener("orientationchange",d)})}function ej(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o=[],a=Mt(),s=function(d,p){p===void 0&&(p={});const f=a.MutationObserver||a.WebkitMutationObserver,g=new f(x=>{if(t.__preventObserver__)return;if(x.length===1){i("observerUpdate",x[0]);return}const y=function(){i("observerUpdate",x[0])};a.requestAnimationFrame?a.requestAnimationFrame(y):a.setTimeout(y,0)});g.observe(d,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:t.isElement||(typeof p.childList>"u"?!0:p).childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),o.push(g)},l=()=>{if(t.params.observer){if(t.params.observeParents){const d=My(t.hostEl);for(let p=0;p<d.length;p+=1)s(d[p])}s(t.hostEl,{childList:t.params.observeSlideChildren}),s(t.wrapperEl,{attributes:!1})}},u=()=>{o.forEach(d=>{d.disconnect()}),o.splice(0,o.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",u)}var tj={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];t.apply(r,a)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return typeof o[0]=="string"||Array.isArray(o[0])?(t=o[0],n=o.slice(1,o.length),r=e):(t=o[0].events,n=o[0].data,r=o[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(u=>{u.apply(r,[l,...n])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(u=>{u.apply(r,n)})}),e}};function nj(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Qn(r,"padding-left")||0,10)-parseInt(Qn(r,"padding-right")||0,10),n=n-parseInt(Qn(r,"padding-top")||0,10)-parseInt(Qn(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function rj(){const e=this;function t(E,z){return parseFloat(E.getPropertyValue(e.getDirectionLabel(z))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:o,rtlTranslate:a,wrongRTL:s}=e,l=e.virtual&&n.virtual.enabled,u=l?e.virtual.slides.length:e.slides.length,d=cn(i,`.${e.params.slideClass}, swiper-slide`),p=l?e.virtual.slides.length:d.length;let f=[];const g=[],x=[];let y=n.slidesOffsetBefore;typeof y=="function"&&(y=n.slidesOffsetBefore.call(e));let b=n.slidesOffsetAfter;typeof b=="function"&&(b=n.slidesOffsetAfter.call(e));const v=e.snapGrid.length,h=e.slidesGrid.length;let m=n.spaceBetween,w=-y,S=0,j=0;if(typeof o>"u")return;typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*o:typeof m=="string"&&(m=parseFloat(m)),e.virtualSize=-m,d.forEach(E=>{a?E.style.marginLeft="":E.style.marginRight="",E.style.marginBottom="",E.style.marginTop=""}),n.centeredSlides&&n.cssMode&&($a(r,"--swiper-centered-offset-before",""),$a(r,"--swiper-centered-offset-after",""));const C=n.grid&&n.grid.rows>1&&e.grid;C?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();let T;const A=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(E=>typeof n.breakpoints[E].slidesPerView<"u").length>0;for(let E=0;E<p;E+=1){T=0;let z;if(d[E]&&(z=d[E]),C&&e.grid.updateSlide(E,z,d),!(d[E]&&Qn(z,"display")==="none")){if(n.slidesPerView==="auto"){A&&(d[E].style[e.getDirectionLabel("width")]="");const M=getComputedStyle(z),R=z.style.transform,V=z.style.webkitTransform;if(R&&(z.style.transform="none"),V&&(z.style.webkitTransform="none"),n.roundLengths)T=e.isHorizontal()?md(z,"width"):md(z,"height");else{const U=t(M,"width"),Z=t(M,"padding-left"),Y=t(M,"padding-right"),L=t(M,"margin-left"),N=t(M,"margin-right"),$=M.getPropertyValue("box-sizing");if($&&$==="border-box")T=U+L+N;else{const{clientWidth:K,offsetWidth:J}=z;T=U+Z+Y+L+N+(J-K)}}R&&(z.style.transform=R),V&&(z.style.webkitTransform=V),n.roundLengths&&(T=Math.floor(T))}else T=(o-(n.slidesPerView-1)*m)/n.slidesPerView,n.roundLengths&&(T=Math.floor(T)),d[E]&&(d[E].style[e.getDirectionLabel("width")]=`${T}px`);d[E]&&(d[E].swiperSlideSize=T),x.push(T),n.centeredSlides?(w=w+T/2+S/2+m,S===0&&E!==0&&(w=w-o/2-m),E===0&&(w=w-o/2-m),Math.abs(w)<1/1e3&&(w=0),n.roundLengths&&(w=Math.floor(w)),j%n.slidesPerGroup===0&&f.push(w),g.push(w)):(n.roundLengths&&(w=Math.floor(w)),(j-Math.min(e.params.slidesPerGroupSkip,j))%e.params.slidesPerGroup===0&&f.push(w),g.push(w),w=w+T+m),e.virtualSize+=T+m,S=T,j+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+b,a&&s&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+m}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+m}px`),C&&e.grid.updateWrapperSize(T,f),!n.centeredSlides){const E=[];for(let z=0;z<f.length;z+=1){let M=f[z];n.roundLengths&&(M=Math.floor(M)),f[z]<=e.virtualSize-o&&E.push(M)}f=E,Math.floor(e.virtualSize-o)-Math.floor(f[f.length-1])>1&&f.push(e.virtualSize-o)}if(l&&n.loop){const E=x[0]+m;if(n.slidesPerGroup>1){const z=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),M=E*n.slidesPerGroup;for(let R=0;R<z;R+=1)f.push(f[f.length-1]+M)}for(let z=0;z<e.virtual.slidesBefore+e.virtual.slidesAfter;z+=1)n.slidesPerGroup===1&&f.push(f[f.length-1]+E),g.push(g[g.length-1]+E),e.virtualSize+=E}if(f.length===0&&(f=[0]),m!==0){const E=e.isHorizontal()&&a?"marginLeft":e.getDirectionLabel("marginRight");d.filter((z,M)=>!n.cssMode||n.loop?!0:M!==d.length-1).forEach(z=>{z.style[E]=`${m}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let E=0;x.forEach(M=>{E+=M+(m||0)}),E-=m;const z=E>o?E-o:0;f=f.map(M=>M<=0?-y:M>z?z+b:M)}if(n.centerInsufficientSlides){let E=0;x.forEach(M=>{E+=M+(m||0)}),E-=m;const z=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(E+z<o){const M=(o-E-z)/2;f.forEach((R,V)=>{f[V]=R-M}),g.forEach((R,V)=>{g[V]=R+M})}}if(Object.assign(e,{slides:d,snapGrid:f,slidesGrid:g,slidesSizesGrid:x}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){$a(r,"--swiper-centered-offset-before",`${-f[0]}px`),$a(r,"--swiper-centered-offset-after",`${e.size/2-x[x.length-1]/2}px`);const E=-e.snapGrid[0],z=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(M=>M+E),e.slidesGrid=e.slidesGrid.map(M=>M+z)}if(p!==u&&e.emit("slidesLengthChange"),f.length!==v&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==h&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const E=`${n.containerModifierClass}backface-hidden`,z=e.el.classList.contains(E);p<=n.maxBackfaceHiddenSlides?z||e.el.classList.add(E):z&&e.el.classList.remove(E)}}function ij(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=s=>r?t.slides[t.getSlideIndexByData(s)]:t.slides[s];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(s=>{n.push(s)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const s=t.activeIndex+o;if(s>t.slides.length&&!r)break;n.push(a(s))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const s=n[o].offsetHeight;i=s>i?s:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function oj(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const k0=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function aj(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=n.spaceBetween;typeof s=="string"&&s.indexOf("%")>=0?s=parseFloat(s.replace("%",""))/100*t.size:typeof s=="string"&&(s=parseFloat(s));for(let l=0;l<r.length;l+=1){const u=r[l];let d=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const p=(a+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+s),f=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+s),g=-(a-d),x=g+t.slidesSizesGrid[l],y=g>=0&&g<=t.size-t.slidesSizesGrid[l],b=g>=0&&g<t.size-1||x>1&&x<=t.size||g<=0&&x>=t.size;b&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(l)),k0(u,b,n.slideVisibleClass),k0(u,y,n.slideFullyVisibleClass),u.progress=i?-p:p,u.originalProgress=i?-f:f}}function sj(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:s}=t;const l=o,u=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,p=Math.abs(e-t.maxTranslate())<1;o=d||i<=0,a=p||i>=1,d&&(i=0),p&&(i=1)}if(n.loop){const d=t.getSlideIndexByData(0),p=t.getSlideIndexByData(t.slides.length-1),f=t.slidesGrid[d],g=t.slidesGrid[p],x=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=f?s=(y-f)/x:s=(y+x-g)/x,s>1&&(s-=1)}Object.assign(t,{progress:i,progressLoop:s,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!l&&t.emit("reachBeginning toEdge"),a&&!u&&t.emit("reachEnd toEdge"),(l&&!o||u&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const Nc=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function lj(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,s=p=>cn(r,`.${n.slideClass}${p}, swiper-slide${p}`)[0];let l,u,d;if(o)if(n.loop){let p=i-e.virtual.slidesBefore;p<0&&(p=e.virtual.slides.length+p),p>=e.virtual.slides.length&&(p-=e.virtual.slides.length),l=s(`[data-swiper-slide-index="${p}"]`)}else l=s(`[data-swiper-slide-index="${i}"]`);else a?(l=t.filter(p=>p.column===i)[0],d=t.filter(p=>p.column===i+1)[0],u=t.filter(p=>p.column===i-1)[0]):l=t[i];l&&(a||(d=G8(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),u=W8(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(p=>{Nc(p,p===l,n.slideActiveClass),Nc(p,p===d,n.slideNextClass),Nc(p,p===u,n.slidePrevClass)}),e.emitSlidesClasses()}const fs=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},Fc=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},gd=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,s=[a-t];s.push(...Array.from({length:t}).map((l,u)=>a+r+u)),e.slides.forEach((l,u)=>{s.includes(l.column)&&Fc(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const s=(a%n+n)%n;(s<i||s>o)&&Fc(e,s)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&Fc(e,a)};function cj(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function uj(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:s}=t;let l=e,u;const d=g=>{let x=g-t.virtual.slidesBefore;return x<0&&(x=t.virtual.slides.length+x),x>=t.virtual.slides.length&&(x-=t.virtual.slides.length),x};if(typeof l>"u"&&(l=cj(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const g=Math.min(i.slidesPerGroupSkip,l);u=g+Math.floor((l-g)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),l===o&&!t.params.loop){u!==s&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(l===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(l);return}const p=t.grid&&i.grid&&i.grid.rows>1;let f;if(t.virtual&&i.virtual.enabled&&i.loop)f=d(l);else if(p){const g=t.slides.filter(y=>y.column===l)[0];let x=parseInt(g.getAttribute("data-swiper-slide-index"),10);Number.isNaN(x)&&(x=Math.max(t.slides.indexOf(g),0)),f=Math.floor(x/i.grid.rows)}else if(t.slides[l]){const g=t.slides[l].getAttribute("data-swiper-slide-index");g?f=parseInt(g,10):f=l}else f=l;Object.assign(t,{previousSnapIndex:s,snapIndex:u,previousRealIndex:a,realIndex:f,previousIndex:o,activeIndex:l}),t.initialized&&gd(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==f&&t.emit("realIndexChange"),t.emit("slideChange"))}function dj(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(s=>{!i&&s.matches&&s.matches(`.${r.slideClass}, swiper-slide`)&&(i=s)});let o=!1,a;if(i){for(let s=0;s<n.slides.length;s+=1)if(n.slides[s]===i){o=!0,a=s;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var pj={updateSize:nj,updateSlides:rj,updateAutoHeight:ij,updateSlidesOffset:oj,updateSlidesProgress:aj,updateProgress:sj,updateSlidesClasses:lj,updateActiveIndex:uj,updateClickedSlide:dj};function fj(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=q8(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function hj(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let s=0,l=0;const u=0;n.isHorizontal()?s=r?-e:e:l=e,i.roundLengths&&(s=Math.floor(s),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?s:l,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-s:-l:i.virtualTranslate||(n.isHorizontal()?s-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${s}px, ${l}px, ${u}px)`);let d;const p=n.maxTranslate()-n.minTranslate();p===0?d=0:d=(e-n.minTranslate())/p,d!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function mj(){return-this.snapGrid[0]}function gj(){return-this.snapGrid[this.snapGrid.length-1]}function vj(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const o=this,{params:a,wrapperEl:s}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const l=o.minTranslate(),u=o.maxTranslate();let d;if(r&&e>l?d=l:r&&e<u?d=u:d=e,o.updateProgress(d),a.cssMode){const p=o.isHorizontal();if(t===0)s[p?"scrollLeft":"scrollTop"]=-d;else{if(!o.support.smoothScroll)return Ay({swiper:o,targetPosition:-d,side:p?"left":"top"}),!0;s.scrollTo({[p?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(f){!o||o.destroyed||f.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var xj={getTranslate:fj,setTranslate:hj,minTranslate:mj,maxTranslate:gj,translateTo:vj};function yj(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Iy(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:o,previousIndex:a}=t;let s=r;if(s||(o>a?s="next":o<a?s="prev":s="reset"),t.emit(`transition${i}`),n&&o!==a){if(s==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),s==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function wj(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Iy({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function bj(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Iy({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var Sj={setTransition:yj,transitionStart:wj,transitionEnd:bj};function _j(e,t,n,r,i){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:s,snapGrid:l,slidesGrid:u,previousIndex:d,activeIndex:p,rtlTranslate:f,wrapperEl:g,enabled:x}=o;if(!x&&!r&&!i||o.destroyed||o.animating&&s.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const y=Math.min(o.params.slidesPerGroupSkip,a);let b=y+Math.floor((a-y)/o.params.slidesPerGroup);b>=l.length&&(b=l.length-1);const v=-l[b];if(s.normalizeSlideIndex)for(let S=0;S<u.length;S+=1){const j=-Math.floor(v*100),C=Math.floor(u[S]*100),T=Math.floor(u[S+1]*100);typeof u[S+1]<"u"?j>=C&&j<T-(T-C)/2?a=S:j>=C&&j<T&&(a=S+1):j>=C&&(a=S)}if(o.initialized&&a!==p&&(!o.allowSlideNext&&(f?v>o.translate&&v>o.minTranslate():v<o.translate&&v<o.minTranslate())||!o.allowSlidePrev&&v>o.translate&&v>o.maxTranslate()&&(p||0)!==a))return!1;a!==(d||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(v);let h;a>p?h="next":a<p?h="prev":h="reset";const m=o.virtual&&o.params.virtual.enabled;if(!(m&&i)&&(f&&-v===o.translate||!f&&v===o.translate))return o.updateActiveIndex(a),s.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),s.effect!=="slide"&&o.setTranslate(v),h!=="reset"&&(o.transitionStart(n,h),o.transitionEnd(n,h)),!1;if(s.cssMode){const S=o.isHorizontal(),j=f?v:-v;if(t===0)m&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),m&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{g[S?"scrollLeft":"scrollTop"]=j})):g[S?"scrollLeft":"scrollTop"]=j,m&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return Ay({swiper:o,targetPosition:j,side:S?"left":"top"}),!0;g.scrollTo({[S?"left":"top"]:j,behavior:"smooth"})}return!0}return o.setTransition(t),o.setTranslate(v),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,h),t===0?o.transitionEnd(n,h):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(j){!o||o.destroyed||j.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,h))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function jj(e,t,n,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let s;if(o){const f=a*i.params.grid.rows;s=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===f)[0].column}else s=i.getSlideIndexByData(a);const l=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u}=i.params;let d=i.params.slidesPerView;d==="auto"?d=i.slidesPerViewDynamic():(d=Math.ceil(parseFloat(i.params.slidesPerView,10)),u&&d%2===0&&(d=d+1));let p=l-s<d;if(u&&(p=p||s<Math.ceil(d/2)),r&&u&&i.params.slidesPerView!=="auto"&&!o&&(p=!1),p){const f=u?s<i.activeIndex?"prev":"next":s-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:f,slideTo:!0,activeSlideIndex:f==="next"?s+1:s-l+1,slideRealIndex:f==="next"?i.realIndex:void 0})}if(o){const f=a*i.params.grid.rows;a=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===f)[0].column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function Tj(e,t,n){t===void 0&&(t=!0);const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let s=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(s=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<o.slidesPerGroupSkip?1:s,u=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function Cj(e,t,n){t===void 0&&(t=!0);const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:s,enabled:l,animating:u}=r;if(!l||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const p=s?r.translate:-r.translate;function f(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const g=f(p),x=o.map(v=>f(v));let y=o[x.indexOf(g)-1];if(typeof y>"u"&&i.cssMode){let v;o.forEach((h,m)=>{g>=h&&(v=m)}),typeof v<"u"&&(y=o[v>0?v-1:v])}let b=0;if(typeof y<"u"&&(b=a.indexOf(y),b<0&&(b=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(b=b-r.slidesPerViewDynamic("previous",!0)+1,b=Math.max(b,0))),i.rewind&&r.isBeginning){const v=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(v,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(b,e,t,n)}),!0;return r.slideTo(b,e,t,n)}function kj(e,t,n){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function Ej(e,t,n,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),s=a+Math.floor((o-a)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[s]){const u=i.snapGrid[s],d=i.snapGrid[s+1];l-u>(d-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[s-1],d=i.snapGrid[s];l-u<=(d-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function zj(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(cn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),hd(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(cn(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),hd(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var Pj={slideTo:_j,slideToLoop:jj,slideNext:Tj,slidePrev:Cj,slideReset:kj,slideToClosest:Ej,slideToClickedSlide:zj};function Aj(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{cn(r,`.${n.slideClass}, swiper-slide`).forEach((p,f)=>{p.setAttribute("data-swiper-slide-index",f)})},o=t.grid&&n.grid&&n.grid.rows>1,a=n.slidesPerGroup*(o?n.grid.rows:1),s=t.slides.length%a!==0,l=o&&t.slides.length%n.grid.rows!==0,u=d=>{for(let p=0;p<d;p+=1){const f=t.isElement?aa("swiper-slide",[n.slideBlankClass]):aa("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(f)}};if(s){if(n.loopAddBlankSlides){const d=a-t.slides.length%a;u(d),t.recalcSlides(),t.updateSlides()}else nl("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){const d=n.grid.rows-t.slides.length%n.grid.rows;u(d),t.recalcSlides(),t.updateSlides()}else nl("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function Mj(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:o,byController:a,byMousewheel:s}=e===void 0?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:u,allowSlidePrev:d,allowSlideNext:p,slidesEl:f,params:g}=l,{centeredSlides:x}=g;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&g.virtual.enabled){n&&(!g.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):g.centeredSlides&&l.snapIndex<g.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=d,l.allowSlideNext=p,l.emit("loopFix");return}let y=g.slidesPerView;y==="auto"?y=l.slidesPerViewDynamic():(y=Math.ceil(parseFloat(g.slidesPerView,10)),x&&y%2===0&&(y=y+1));const b=g.slidesPerGroupAuto?y:g.slidesPerGroup;let v=b;v%b!==0&&(v+=b-v%b),v+=g.loopAdditionalSlides,l.loopedSlides=v;const h=l.grid&&g.grid&&g.grid.rows>1;u.length<y+v?nl("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):h&&g.grid.fill==="row"&&nl("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const m=[],w=[];let S=l.activeIndex;typeof o>"u"?o=l.getSlideIndex(u.filter(R=>R.classList.contains(g.slideActiveClass))[0]):S=o;const j=r==="next"||!r,C=r==="prev"||!r;let T=0,A=0;const E=h?Math.ceil(u.length/g.grid.rows):u.length,M=(h?u[o].column:o)+(x&&typeof i>"u"?-y/2+.5:0);if(M<v){T=Math.max(v-M,b);for(let R=0;R<v-M;R+=1){const V=R-Math.floor(R/E)*E;if(h){const U=E-V-1;for(let Z=u.length-1;Z>=0;Z-=1)u[Z].column===U&&m.push(Z)}else m.push(E-V-1)}}else if(M+y>E-v){A=Math.max(M-(E-v*2),b);for(let R=0;R<A;R+=1){const V=R-Math.floor(R/E)*E;h?u.forEach((U,Z)=>{U.column===V&&w.push(Z)}):w.push(V)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),C&&m.forEach(R=>{u[R].swiperLoopMoveDOM=!0,f.prepend(u[R]),u[R].swiperLoopMoveDOM=!1}),j&&w.forEach(R=>{u[R].swiperLoopMoveDOM=!0,f.append(u[R]),u[R].swiperLoopMoveDOM=!1}),l.recalcSlides(),g.slidesPerView==="auto"?l.updateSlides():h&&(m.length>0&&C||w.length>0&&j)&&l.slides.forEach((R,V)=>{l.grid.updateSlide(V,R,l.slides)}),g.watchSlidesProgress&&l.updateSlidesOffset(),n){if(m.length>0&&C){if(typeof t>"u"){const R=l.slidesGrid[S],U=l.slidesGrid[S+T]-R;s?l.setTranslate(l.translate-U):(l.slideTo(S+Math.ceil(T),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-U,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-U))}else if(i){const R=h?m.length/g.grid.rows:m.length;l.slideTo(l.activeIndex+R,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(w.length>0&&j)if(typeof t>"u"){const R=l.slidesGrid[S],U=l.slidesGrid[S-A]-R;s?l.setTranslate(l.translate-U):(l.slideTo(S-A,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-U,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-U))}else{const R=h?w.length/g.grid.rows:w.length;l.slideTo(l.activeIndex-R,0,!1,!0)}}if(l.allowSlidePrev=d,l.allowSlideNext=p,l.controller&&l.controller.control&&!a){const R={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:o,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(V=>{!V.destroyed&&V.params.loop&&V.loopFix({...R,slideTo:V.params.slidesPerView===g.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...R,slideTo:l.controller.control.params.slidesPerView===g.slidesPerView?n:!1})}l.emit("loopFix")}function Lj(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var Oj={loopCreate:Aj,loopFix:Mj,loopDestroy:Lj};function Ij(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function Rj(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var Vj={setGrabCursor:Ij,unsetGrabCursor:Rj};function Dj(e,t){t===void 0&&(t=this);function n(r){if(!r||r===Pn()||r===Mt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function E0(e,t,n){const r=Mt(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function Nj(e){const t=this,n=Pn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){E0(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:s}=t;if(!s||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let l=r.target;if(o.touchEventsTarget==="wrapper"&&!U8(l,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&d&&(l=d[0]);const p=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,f=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(f?Dj(p,l):l.closest(p))){t.allowClick=!0;return}if(o.swipeHandler&&!l.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const g=a.currentX,x=a.currentY;if(!E0(t,r,g))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=g,a.startY=x,i.touchStartTime=tl(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let y=!0;l.matches(i.focusableElements)&&(y=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!l.matches(i.focusableElements))&&n.activeElement.blur();const b=y&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||b)&&!l.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function Fj(e){const t=Pn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:s}=n;if(!s||!i.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let u;if(l.type==="touchmove"){if(u=[...l.changedTouches].filter(j=>j.identifier===r.touchId)[0],!u||u.identifier!==r.touchId)return}else u=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const d=u.pageX,p=u.pageY;if(l.preventedByNestedSwiper){o.startX=d,o.startY=p;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:d,startY:p,currentX:d,currentY:p}),r.touchStartTime=tl());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(p<o.startY&&n.translate<=n.maxTranslate()||p>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(d<o.startX&&n.translate<=n.maxTranslate()||d>o.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==l.target&&l.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&l.target===t.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=d,o.currentY=p;const f=o.currentX-o.startX,g=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(f**2+g**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let j;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:f*f+g*g>=25&&(j=Math.atan2(Math.abs(g),Math.abs(f))*180/Math.PI,r.isScrolling=n.isHorizontal()?j>i.touchAngle:90-j>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||l.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let x=n.isHorizontal()?f:g,y=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(x=Math.abs(x)*(a?1:-1),y=Math.abs(y)*(a?1:-1)),o.diff=x,x*=i.touchRatio,a&&(x=-x,y=-y);const b=n.touchesDirection;n.swipeDirection=x>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const v=n.params.loop&&!i.cssMode,h=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(v&&h&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const j=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(j)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let m;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&b!==n.touchesDirection&&v&&h&&Math.abs(x)>=1){Object.assign(o,{startX:d,startY:p,currentX:d,currentY:p,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=x+r.startTranslate;let w=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),x>0?(v&&h&&!m&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+x)**S))):x<0&&(v&&h&&!m&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-x)**S))),w&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(x)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function Bj(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(S=>S.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:s,rtlTranslate:l,slidesGrid:u,enabled:d}=t;if(!d||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const p=tl(),f=p-n.touchStartTime;if(t.allowClick){const S=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(S&&S[0]||r.target,S),t.emit("tap click",r),f<300&&p-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=tl(),hd(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||s.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let g;if(a.followFinger?g=l?t.translate:-t.translate:g=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:g});return}const x=g>=-t.maxTranslate()&&!t.params.loop;let y=0,b=t.slidesSizesGrid[0];for(let S=0;S<u.length;S+=S<a.slidesPerGroupSkip?1:a.slidesPerGroup){const j=S<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[S+j]<"u"?(x||g>=u[S]&&g<u[S+j])&&(y=S,b=u[S+j]-u[S]):(x||g>=u[S])&&(y=S,b=u[u.length-1]-u[u.length-2])}let v=null,h=null;a.rewind&&(t.isBeginning?h=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(v=0));const m=(g-u[y])/b,w=y<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(f>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(m>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?v:y+w):t.slideTo(y)),t.swipeDirection==="prev"&&(m>1-a.longSwipesRatio?t.slideTo(y+w):h!==null&&m<0&&Math.abs(m)>a.longSwipesRatio?t.slideTo(h):t.slideTo(y))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+w):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(v!==null?v:y+w),t.swipeDirection==="prev"&&t.slideTo(h!==null?h:y))}}function z0(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const s=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!s?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function $j(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function qj(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function Hj(e){const t=this;fs(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function Uj(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Ry=(e,t)=>{const n=Pn(),{params:r,el:i,wrapperEl:o,device:a}=e,s=!!r.nested,l=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:s}),i[l]("touchstart",e.onTouchStart,{passive:!1}),i[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("touchmove",e.onTouchMove,{passive:!1,capture:s}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:s}),n[l]("touchend",e.onTouchEnd,{passive:!0}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("touchcancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),n[l]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",e.onClick,!0),r.cssMode&&o[l]("scroll",e.onScroll),r.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",z0,!0):e[u]("observerUpdate",z0,!0),i[l]("load",e.onLoad,{capture:!0}))};function Wj(){const e=this,{params:t}=e;e.onTouchStart=Nj.bind(e),e.onTouchMove=Fj.bind(e),e.onTouchEnd=Bj.bind(e),e.onDocumentTouchStart=Uj.bind(e),t.cssMode&&(e.onScroll=qj.bind(e)),e.onClick=$j.bind(e),e.onLoad=Hj.bind(e),Ry(e,"on")}function Gj(){Ry(this,"off")}var Yj={attachEvents:Wj,detachEvents:Gj};const P0=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function Kj(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!a||e.currentBreakpoint===a)return;const l=(a in o?o[a]:void 0)||e.originalParams,u=P0(e,r),d=P0(e,l),p=e.params.grabCursor,f=l.grabCursor,g=r.enabled;u&&!d?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!u&&d&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!f?e.unsetGrabCursor():!p&&f&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(m=>{if(typeof l[m]>"u")return;const w=r[m]&&r[m].enabled,S=l[m]&&l[m].enabled;w&&!S&&e[m].disable(),!w&&S&&e[m].enable()});const x=l.direction&&l.direction!==r.direction,y=r.loop&&(l.slidesPerView!==r.slidesPerView||x),b=r.loop;x&&n&&e.changeDirection(),jt(e.params,l);const v=e.params.enabled,h=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),g&&!v?e.disable():!g&&v&&e.enable(),e.currentBreakpoint=a,e.emit("_beforeBreakpoint",l),n&&(y?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&h?(e.loopCreate(t),e.updateSlides()):b&&!h&&e.loopDestroy()),e.emit("breakpoint",l)}function Xj(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=Mt(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(s=>{if(typeof s=="string"&&s.indexOf("@")===0){const l=parseFloat(s.substr(1));return{value:o*l,point:s}}return{value:s,point:s}});a.sort((s,l)=>parseInt(s.value,10)-parseInt(l.value,10));for(let s=0;s<a.length;s+=1){const{point:l,value:u}=a[s];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=l):u<=n.clientWidth&&(r=l)}return r||"max"}var Qj={setBreakpoint:Kj,getBreakpoint:Xj};function Zj(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function Jj(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=Zj(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function eT(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var tT={addClasses:Jj,removeClasses:eT};function nT(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var rT={checkOverflow:nT},vd={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function iT(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){jt(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){jt(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),jt(t,r)}}const Bc={eventsEmitter:tj,update:pj,translate:xj,transition:Sj,slide:Pj,loop:Oj,grabCursor:Vj,events:Yj,breakpoints:Qj,checkOverflow:rT,classes:tT},$c={};let cf=class gn{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=jt({},n),t&&!n.el&&(n.el=t);const a=Pn();if(n.el&&typeof n.el=="string"&&a.querySelectorAll(n.el).length>1){const d=[];return a.querySelectorAll(n.el).forEach(p=>{const f=jt({},n,{el:p});d.push(new gn(f))}),d}const s=this;s.__swiper__=!0,s.support=Ly(),s.device=Oy({userAgent:n.userAgent}),s.browser=Z8(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],n.modules&&Array.isArray(n.modules)&&s.modules.push(...n.modules);const l={};s.modules.forEach(d=>{d({params:n,swiper:s,extendParams:iT(n,l),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const u=jt({},vd,l);return s.params=jt({},u,$c,n),s.originalParams=jt({},s.params),s.passedParams=jt({},n),s.params&&s.params.on&&Object.keys(s.params.on).forEach(d=>{s.on(d,s.params.on[d])}),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=cn(n,`.${r.slideClass}, swiper-slide`),o=rl(i[0]);return rl(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=cn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:s,size:l,activeIndex:u}=r;let d=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let p=o[u]?Math.ceil(o[u].swiperSlideSize):0,f;for(let g=u+1;g<o.length;g+=1)o[g]&&!f&&(p+=Math.ceil(o[g].swiperSlideSize),d+=1,p>l&&(f=!0));for(let g=u-1;g>=0;g-=1)o[g]&&!f&&(p+=o[g].swiperSlideSize,d+=1,p>l&&(f=!0))}else if(t==="current")for(let p=u+1;p<o.length;p+=1)(n?a[p]+s[p]-a[u]<l:a[p]-a[u]<l)&&(d+=1);else for(let p=u-1;p>=0;p-=1)a[u]-a[p]<l&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&fs(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,s=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(s),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):cn(r,i())[0];return!a&&n.params.createElements&&(a=aa("div",n.params.wrapperClass),r.append(a),cn(r,`.${n.params.slideClass}`).forEach(s=>{a.append(s)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Qn(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Qn(r,"direction")==="rtl"),wrongRTL:Qn(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?fs(n,o):o.addEventListener("load",a=>{fs(n,a.target)})}),gd(n),n.initialized=!0,gd(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:o,wrapperEl:a,slides:s}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),s&&s.length&&s.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),B8(r)),r.destroyed=!0),null}static extendDefaults(t){jt($c,t)}static get extendedDefaults(){return $c}static get defaults(){return vd}static installModule(t){gn.prototype.__modules__||(gn.prototype.__modules__=[]);const n=gn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>gn.installModule(n)),gn):(gn.installModule(t),gn)}};Object.keys(Bc).forEach(e=>{Object.keys(Bc[e]).forEach(t=>{cf.prototype[t]=Bc[e][t]})});cf.use([J8,ej]);const Vy=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Fr(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function _i(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Fr(t[r])&&Fr(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:_i(e[r],t[r]):e[r]=t[r]})}function Dy(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Ny(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Fy(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function By(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function oT(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function aT(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:o,prevEl:a,scrollbarEl:s,paginationEl:l}=e;const u=i.filter(A=>A!=="children"&&A!=="direction"&&A!=="wrapperClass"),{params:d,pagination:p,navigation:f,scrollbar:g,virtual:x,thumbs:y}=t;let b,v,h,m,w,S,j,C;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&d.thumbs&&!d.thumbs.swiper&&(b=!0),i.includes("controller")&&r.controller&&r.controller.control&&d.controller&&!d.controller.control&&(v=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(d.pagination||d.pagination===!1)&&p&&!p.el&&(h=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||s)&&(d.scrollbar||d.scrollbar===!1)&&g&&!g.el&&(m=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||a)&&(r.navigation.nextEl||o)&&(d.navigation||d.navigation===!1)&&f&&!f.prevEl&&!f.nextEl&&(w=!0);const T=A=>{t[A]&&(t[A].destroy(),A==="navigation"?(t.isElement&&(t[A].prevEl.remove(),t[A].nextEl.remove()),d[A].prevEl=void 0,d[A].nextEl=void 0,t[A].prevEl=void 0,t[A].nextEl=void 0):(t.isElement&&t[A].el.remove(),d[A].el=void 0,t[A].el=void 0))};i.includes("loop")&&t.isElement&&(d.loop&&!r.loop?S=!0:!d.loop&&r.loop?j=!0:C=!0),u.forEach(A=>{if(Fr(d[A])&&Fr(r[A]))Object.assign(d[A],r[A]),(A==="navigation"||A==="pagination"||A==="scrollbar")&&"enabled"in r[A]&&!r[A].enabled&&T(A);else{const E=r[A];(E===!0||E===!1)&&(A==="navigation"||A==="pagination"||A==="scrollbar")?E===!1&&T(A):d[A]=r[A]}}),u.includes("controller")&&!v&&t.controller&&t.controller.control&&d.controller&&d.controller.control&&(t.controller.control=d.controller.control),i.includes("children")&&n&&x&&d.virtual.enabled?(x.slides=n,x.update(!0)):i.includes("virtual")&&x&&d.virtual.enabled&&(n&&(x.slides=n),x.update(!0)),i.includes("children")&&n&&d.loop&&(C=!0),b&&y.init()&&y.update(!0),v&&(t.controller.control=d.controller.control),h&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),t.el.appendChild(l)),l&&(d.pagination.el=l),p.init(),p.render(),p.update()),m&&(t.isElement&&(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-scrollbar"),s.part.add("scrollbar"),t.el.appendChild(s)),s&&(d.scrollbar.el=s),g.init(),g.updateSize(),g.setTranslate()),w&&(t.isElement&&((!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-next"),o.innerHTML=t.hostEl.constructor.nextButtonSvg,o.part.add("button-next"),t.el.appendChild(o)),(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-prev"),a.innerHTML=t.hostEl.constructor.prevButtonSvg,a.part.add("button-prev"),t.el.appendChild(a))),o&&(d.navigation.nextEl=o),a&&(d.navigation.prevEl=a),f.init(),f.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(S||C)&&t.loopDestroy(),(j||C)&&t.loopCreate(),t.update()}function sT(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};_i(n,vd),n._emitClasses=!0,n.init=!1;const o={},a=Vy.map(l=>l.replace(/_/,"")),s=Object.assign({},e);return Object.keys(s).forEach(l=>{typeof e[l]>"u"||(a.indexOf(l)>=0?Fr(e[l])?(n[l]={},i[l]={},_i(n[l],e[l]),_i(i[l],e[l])):(n[l]=e[l],i[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?r[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:o[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:o,events:r}}function lT(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:o,scrollbarEl:a,swiper:s}=e;Dy(t)&&r&&i&&(s.params.navigation.nextEl=r,s.originalParams.navigation.nextEl=r,s.params.navigation.prevEl=i,s.originalParams.navigation.prevEl=i),Ny(t)&&o&&(s.params.pagination.el=o,s.originalParams.pagination.el=o),Fy(t)&&a&&(s.params.scrollbar.el=a,s.originalParams.scrollbar.el=a),s.init(n)}function cT(e,t,n,r,i){const o=[];if(!t)return o;const a=l=>{o.indexOf(l)<0&&o.push(l)};if(n&&r){const l=r.map(i),u=n.map(i);l.join("")!==u.join("")&&a("children"),r.length!==n.length&&a("children")}return Vy.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if(Fr(e[l])&&Fr(t[l])){const u=Object.keys(e[l]),d=Object.keys(t[l]);u.length!==d.length?a(l):(u.forEach(p=>{e[l][p]!==t[l][p]&&a(l)}),d.forEach(p=>{e[l][p]!==t[l][p]&&a(l)}))}else e[l]!==t[l]&&a(l)}),o}const uT=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function il(){return il=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},il.apply(this,arguments)}function $y(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function qy(e){const t=[];return ee.Children.toArray(e).forEach(n=>{$y(n)?t.push(n):n.props&&n.props.children&&qy(n.props.children).forEach(r=>t.push(r))}),t}function dT(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return ee.Children.toArray(e).forEach(r=>{if($y(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=qy(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function pT(e,t,n){if(!n)return null;const r=d=>{let p=d;return d<0?p=t.length+d:p>=t.length&&(p=p-t.length),p},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,s=e.params.loop?-t.length:0,l=e.params.loop?t.length*2:t.length,u=[];for(let d=s;d<l;d+=1)d>=o&&d<=a&&u.push(t[r(d)]);return u.map((d,p)=>ee.cloneElement(d,{swiper:e,style:i,key:d.props.virtualIndex||d.key||`slide-${p}`}))}function Io(e,t){return typeof window>"u"?_.useEffect(e,t):_.useLayoutEffect(e,t)}const A0=_.createContext(null),fT=_.createContext(null),en=_.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:o,onSwiper:a,...s}=e===void 0?{}:e,l=!1;const[u,d]=_.useState("swiper"),[p,f]=_.useState(null),[g,x]=_.useState(!1),y=_.useRef(!1),b=_.useRef(null),v=_.useRef(null),h=_.useRef(null),m=_.useRef(null),w=_.useRef(null),S=_.useRef(null),j=_.useRef(null),C=_.useRef(null),{params:T,passedParams:A,rest:E,events:z}=sT(s),{slides:M,slots:R}=dT(o),V=()=>{x(!g)};Object.assign(T.on,{_containerClasses(N,$){d($)}});const U=()=>{Object.assign(T.on,z),l=!0;const N={...T};if(delete N.wrapperClass,v.current=new cf(N),v.current.virtual&&v.current.params.virtual.enabled){v.current.virtual.slides=M;const $={cache:!1,slides:M,renderExternal:f,renderExternalUpdate:!1};_i(v.current.params.virtual,$),_i(v.current.originalParams.virtual,$)}};b.current||U(),v.current&&v.current.on("_beforeBreakpoint",V);const Z=()=>{l||!z||!v.current||Object.keys(z).forEach(N=>{v.current.on(N,z[N])})},Y=()=>{!z||!v.current||Object.keys(z).forEach(N=>{v.current.off(N,z[N])})};_.useEffect(()=>()=>{v.current&&v.current.off("_beforeBreakpoint",V)}),_.useEffect(()=>{!y.current&&v.current&&(v.current.emitSlidesClasses(),y.current=!0)}),Io(()=>{if(t&&(t.current=b.current),!!b.current)return v.current.destroyed&&U(),lT({el:b.current,nextEl:w.current,prevEl:S.current,paginationEl:j.current,scrollbarEl:C.current,swiper:v.current},T),a&&!v.current.destroyed&&a(v.current),()=>{v.current&&!v.current.destroyed&&v.current.destroy(!0,!1)}},[]),Io(()=>{Z();const N=cT(A,h.current,M,m.current,$=>$.key);return h.current=A,m.current=M,N.length&&v.current&&!v.current.destroyed&&aT({swiper:v.current,slides:M,passedParams:A,changedParams:N,nextEl:w.current,prevEl:S.current,scrollbarEl:C.current,paginationEl:j.current}),()=>{Y()}}),Io(()=>{uT(v.current)},[p]);function L(){return T.virtual?pT(v.current,M,p):M.map((N,$)=>ee.cloneElement(N,{swiper:v.current,swiperSlideIndex:$}))}return ee.createElement(r,il({ref:b,className:By(`${u}${n?` ${n}`:""}`)},E),ee.createElement(fT.Provider,{value:v.current},R["container-start"],ee.createElement(i,{className:oT(T.wrapperClass)},R["wrapper-start"],L(),R["wrapper-end"]),Dy(T)&&ee.createElement(ee.Fragment,null,ee.createElement("div",{ref:S,className:"swiper-button-prev"}),ee.createElement("div",{ref:w,className:"swiper-button-next"})),Fy(T)&&ee.createElement("div",{ref:C,className:"swiper-scrollbar"}),Ny(T)&&ee.createElement("div",{ref:j,className:"swiper-pagination"}),R["container-end"]))});en.displayName="Swiper";const tn=_.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:o,zoom:a,lazy:s,virtualIndex:l,swiperSlideIndex:u,...d}=e===void 0?{}:e;const p=_.useRef(null),[f,g]=_.useState("swiper-slide"),[x,y]=_.useState(!1);function b(w,S,j){S===p.current&&g(j)}Io(()=>{if(typeof u<"u"&&(p.current.swiperSlideIndex=u),t&&(t.current=p.current),!(!p.current||!o)){if(o.destroyed){f!=="swiper-slide"&&g("swiper-slide");return}return o.on("_slideClass",b),()=>{o&&o.off("_slideClass",b)}}}),Io(()=>{o&&p.current&&!o.destroyed&&g(o.getSlideClasses(p.current))},[o]);const v={isActive:f.indexOf("swiper-slide-active")>=0,isVisible:f.indexOf("swiper-slide-visible")>=0,isPrev:f.indexOf("swiper-slide-prev")>=0,isNext:f.indexOf("swiper-slide-next")>=0},h=()=>typeof r=="function"?r(v):r,m=()=>{y(!0)};return ee.createElement(n,il({ref:p,className:By(`${f}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:m},d),a&&ee.createElement(A0.Provider,{value:v},ee.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof a=="number"?a:void 0},h(),s&&!x&&ee.createElement("div",{className:"swiper-lazy-preloader"}))),!a&&ee.createElement(A0.Provider,{value:v},h(),s&&!x&&ee.createElement("div",{className:"swiper-lazy-preloader"})))});tn.displayName="SwiperSlide";function Hy(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=cn(e.el,`.${r[i]}`)[0];o||(o=aa("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}function gr(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function o(x){let y;return x&&typeof x=="string"&&t.isElement&&(y=t.el.querySelector(x)||t.hostEl.querySelector(x),y)?y:(x&&(typeof x=="string"&&(y=[...document.querySelectorAll(x)]),t.params.uniqueNavElements&&typeof x=="string"&&y&&y.length>1&&t.el.querySelectorAll(x).length===1?y=t.el.querySelector(x):y&&y.length===1&&(y=y[0])),x&&!y?x:y)}function a(x,y){const b=t.params.navigation;x=qe(x),x.forEach(v=>{v&&(v.classList[y?"add":"remove"](...b.disabledClass.split(" ")),v.tagName==="BUTTON"&&(v.disabled=y),t.params.watchOverflow&&t.enabled&&v.classList[t.isLocked?"add":"remove"](b.lockClass))})}function s(){const{nextEl:x,prevEl:y}=t.navigation;if(t.params.loop){a(y,!1),a(x,!1);return}a(y,t.isBeginning&&!t.params.rewind),a(x,t.isEnd&&!t.params.rewind)}function l(x){x.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function u(x){x.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function d(){const x=t.params.navigation;if(t.params.navigation=Hy(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(x.nextEl||x.prevEl))return;let y=o(x.nextEl),b=o(x.prevEl);Object.assign(t.navigation,{nextEl:y,prevEl:b}),y=qe(y),b=qe(b);const v=(h,m)=>{h&&h.addEventListener("click",m==="next"?u:l),!t.enabled&&h&&h.classList.add(...x.lockClass.split(" "))};y.forEach(h=>v(h,"next")),b.forEach(h=>v(h,"prev"))}function p(){let{nextEl:x,prevEl:y}=t.navigation;x=qe(x),y=qe(y);const b=(v,h)=>{v.removeEventListener("click",h==="next"?u:l),v.classList.remove(...t.params.navigation.disabledClass.split(" "))};x.forEach(v=>b(v,"next")),y.forEach(v=>b(v,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?g():(d(),s())}),r("toEdge fromEdge lock unlock",()=>{s()}),r("destroy",()=>{p()}),r("enable disable",()=>{let{nextEl:x,prevEl:y}=t.navigation;if(x=qe(x),y=qe(y),t.enabled){s();return}[...x,...y].filter(b=>!!b).forEach(b=>b.classList.add(t.params.navigation.lockClass))}),r("click",(x,y)=>{let{nextEl:b,prevEl:v}=t.navigation;b=qe(b),v=qe(v);const h=y.target;let m=v.includes(h)||b.includes(h);if(t.isElement&&!m){const w=y.path||y.composedPath&&y.composedPath();w&&(m=w.find(S=>b.includes(S)||v.includes(S)))}if(t.params.navigation.hideOnClick&&!m){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===h||t.pagination.el.contains(h)))return;let w;b.length?w=b[0].classList.contains(t.params.navigation.hiddenClass):v.length&&(w=v[0].classList.contains(t.params.navigation.hiddenClass)),i(w===!0?"navigationShow":"navigationHide"),[...b,...v].filter(S=>!!S).forEach(S=>S.classList.toggle(t.params.navigation.hiddenClass))}});const f=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),d(),s()},g=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(t.navigation,{enable:f,disable:g,update:s,init:d,destroy:p})}function po(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function vr(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),t.pagination={el:null,bullets:[]};let a,s=0;function l(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function u(h,m){const{bulletActiveClass:w}=t.params.pagination;h&&(h=h[`${m==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${w}-${m}`),h=h[`${m==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${w}-${m}-${m}`)))}function d(h,m,w){if(h=h%w,m=m%w,m===h+1)return"next";if(m===h-1)return"previous"}function p(h){const m=h.target.closest(po(t.params.pagination.bulletClass));if(!m)return;h.preventDefault();const w=rl(m)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===w)return;const S=d(t.realIndex,w,t.slides.length);S==="next"?t.slideNext():S==="previous"?t.slidePrev():t.slideToLoop(w)}else t.slideTo(w)}function f(){const h=t.rtl,m=t.params.pagination;if(l())return;let w=t.pagination.el;w=qe(w);let S,j;const C=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,T=t.params.loop?Math.ceil(C/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(j=t.previousRealIndex||0,S=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(S=t.snapIndex,j=t.previousSnapIndex):(j=t.previousIndex||0,S=t.activeIndex||0),m.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const A=t.pagination.bullets;let E,z,M;if(m.dynamicBullets&&(a=md(A[0],t.isHorizontal()?"width":"height"),w.forEach(R=>{R.style[t.isHorizontal()?"width":"height"]=`${a*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&j!==void 0&&(s+=S-(j||0),s>m.dynamicMainBullets-1?s=m.dynamicMainBullets-1:s<0&&(s=0)),E=Math.max(S-s,0),z=E+(Math.min(A.length,m.dynamicMainBullets)-1),M=(z+E)/2),A.forEach(R=>{const V=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(U=>`${m.bulletActiveClass}${U}`)].map(U=>typeof U=="string"&&U.includes(" ")?U.split(" "):U).flat();R.classList.remove(...V)}),w.length>1)A.forEach(R=>{const V=rl(R);V===S?R.classList.add(...m.bulletActiveClass.split(" ")):t.isElement&&R.setAttribute("part","bullet"),m.dynamicBullets&&(V>=E&&V<=z&&R.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),V===E&&u(R,"prev"),V===z&&u(R,"next"))});else{const R=A[S];if(R&&R.classList.add(...m.bulletActiveClass.split(" ")),t.isElement&&A.forEach((V,U)=>{V.setAttribute("part",U===S?"bullet-active":"bullet")}),m.dynamicBullets){const V=A[E],U=A[z];for(let Z=E;Z<=z;Z+=1)A[Z]&&A[Z].classList.add(...`${m.bulletActiveClass}-main`.split(" "));u(V,"prev"),u(U,"next")}}if(m.dynamicBullets){const R=Math.min(A.length,m.dynamicMainBullets+4),V=(a*R-a)/2-M*a,U=h?"right":"left";A.forEach(Z=>{Z.style[t.isHorizontal()?U:"top"]=`${V}px`})}}w.forEach((A,E)=>{if(m.type==="fraction"&&(A.querySelectorAll(po(m.currentClass)).forEach(z=>{z.textContent=m.formatFractionCurrent(S+1)}),A.querySelectorAll(po(m.totalClass)).forEach(z=>{z.textContent=m.formatFractionTotal(T)})),m.type==="progressbar"){let z;m.progressbarOpposite?z=t.isHorizontal()?"vertical":"horizontal":z=t.isHorizontal()?"horizontal":"vertical";const M=(S+1)/T;let R=1,V=1;z==="horizontal"?R=M:V=M,A.querySelectorAll(po(m.progressbarFillClass)).forEach(U=>{U.style.transform=`translate3d(0,0,0) scaleX(${R}) scaleY(${V})`,U.style.transitionDuration=`${t.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(A.innerHTML=m.renderCustom(t,S+1,T),E===0&&i("paginationRender",A)):(E===0&&i("paginationRender",A),i("paginationUpdate",A)),t.params.watchOverflow&&t.enabled&&A.classList[t.isLocked?"add":"remove"](m.lockClass)})}function g(){const h=t.params.pagination;if(l())return;const m=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let w=t.pagination.el;w=qe(w);let S="";if(h.type==="bullets"){let j=t.params.loop?Math.ceil(m/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&j>m&&(j=m);for(let C=0;C<j;C+=1)h.renderBullet?S+=h.renderBullet.call(t,C,h.bulletClass):S+=`<${h.bulletElement} ${t.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?S=h.renderFraction.call(t,h.currentClass,h.totalClass):S=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?S=h.renderProgressbar.call(t,h.progressbarFillClass):S=`<span class="${h.progressbarFillClass}"></span>`),t.pagination.bullets=[],w.forEach(j=>{h.type!=="custom"&&(j.innerHTML=S||""),h.type==="bullets"&&t.pagination.bullets.push(...j.querySelectorAll(po(h.bulletClass)))}),h.type!=="custom"&&i("paginationRender",w[0])}function x(){t.params.pagination=Hy(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const h=t.params.pagination;if(!h.el)return;let m;typeof h.el=="string"&&t.isElement&&(m=t.el.querySelector(h.el)),!m&&typeof h.el=="string"&&(m=[...document.querySelectorAll(h.el)]),m||(m=h.el),!(!m||m.length===0)&&(t.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...t.el.querySelectorAll(h.el)],m.length>1&&(m=m.filter(w=>My(w,".swiper")[0]===t.el)[0])),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(t.pagination,{el:m}),m=qe(m),m.forEach(w=>{h.type==="bullets"&&h.clickable&&w.classList.add(...(h.clickableClass||"").split(" ")),w.classList.add(h.modifierClass+h.type),w.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(w.classList.add(`${h.modifierClass}${h.type}-dynamic`),s=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&w.classList.add(h.progressbarOppositeClass),h.clickable&&w.addEventListener("click",p),t.enabled||w.classList.add(h.lockClass)}))}function y(){const h=t.params.pagination;if(l())return;let m=t.pagination.el;m&&(m=qe(m),m.forEach(w=>{w.classList.remove(h.hiddenClass),w.classList.remove(h.modifierClass+h.type),w.classList.remove(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(w.classList.remove(...(h.clickableClass||"").split(" ")),w.removeEventListener("click",p))})),t.pagination.bullets&&t.pagination.bullets.forEach(w=>w.classList.remove(...h.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const h=t.params.pagination;let{el:m}=t.pagination;m=qe(m),m.forEach(w=>{w.classList.remove(h.horizontalClass,h.verticalClass),w.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?v():(x(),g(),f())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&f()}),r("snapIndexChange",()=>{f()}),r("snapGridLengthChange",()=>{g(),f()}),r("destroy",()=>{y()}),r("enable disable",()=>{let{el:h}=t.pagination;h&&(h=qe(h),h.forEach(m=>m.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{f()}),r("click",(h,m)=>{const w=m.target,S=qe(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&S&&S.length>0&&!w.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&w===t.navigation.nextEl||t.navigation.prevEl&&w===t.navigation.prevEl))return;const j=S[0].classList.contains(t.params.pagination.hiddenClass);i(j===!0?"paginationShow":"paginationHide"),S.forEach(C=>C.classList.toggle(t.params.pagination.hiddenClass))}});const b=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=qe(h),h.forEach(m=>m.classList.remove(t.params.pagination.paginationDisabledClass))),x(),g(),f()},v=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=qe(h),h.forEach(m=>m.classList.add(t.params.pagination.paginationDisabledClass))),y()};Object.assign(t.pagination,{enable:b,disable:v,render:g,update:f,init:x,destroy:y})}function Dn(e){let{swiper:t,extendParams:n,on:r,emit:i,params:o}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let a,s,l=o&&o.autoplay?o.autoplay.delay:3e3,u=o&&o.autoplay?o.autoplay.delay:3e3,d,p=new Date().getTime(),f,g,x,y,b,v,h;function m(L){!t||t.destroyed||!t.wrapperEl||L.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",m),!(h||L.detail&&L.detail.bySwiperTouchMove)&&E())}const w=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?f=!0:f&&(u=d,f=!1);const L=t.autoplay.paused?d:p+u-new Date().getTime();t.autoplay.timeLeft=L,i("autoplayTimeLeft",L,L/l),s=requestAnimationFrame(()=>{w()})},S=()=>{let L;return t.virtual&&t.params.virtual.enabled?L=t.slides.filter($=>$.classList.contains("swiper-slide-active"))[0]:L=t.slides[t.activeIndex],L?parseInt(L.getAttribute("data-swiper-autoplay"),10):void 0},j=L=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(s),w();let N=typeof L>"u"?t.params.autoplay.delay:L;l=t.params.autoplay.delay,u=t.params.autoplay.delay;const $=S();!Number.isNaN($)&&$>0&&typeof L>"u"&&(N=$,l=$,u=$),d=N;const K=t.params.speed,J=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(K,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,K,!0,!0),i("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(K,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,K,!0,!0),i("autoplay")),t.params.cssMode&&(p=new Date().getTime(),requestAnimationFrame(()=>{j()})))};return N>0?(clearTimeout(a),a=setTimeout(()=>{J()},N)):requestAnimationFrame(()=>{J()}),N},C=()=>{p=new Date().getTime(),t.autoplay.running=!0,j(),i("autoplayStart")},T=()=>{t.autoplay.running=!1,clearTimeout(a),cancelAnimationFrame(s),i("autoplayStop")},A=(L,N)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(a),L||(v=!0);const $=()=>{i("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",m):E()};if(t.autoplay.paused=!0,N){b&&(d=t.params.autoplay.delay),b=!1,$();return}d=(d||t.params.autoplay.delay)-(new Date().getTime()-p),!(t.isEnd&&d<0&&!t.params.loop)&&(d<0&&(d=0),$())},E=()=>{t.isEnd&&d<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(p=new Date().getTime(),v?(v=!1,j(d)):j(),t.autoplay.paused=!1,i("autoplayResume"))},z=()=>{if(t.destroyed||!t.autoplay.running)return;const L=Pn();L.visibilityState==="hidden"&&(v=!0,A(!0)),L.visibilityState==="visible"&&E()},M=L=>{L.pointerType==="mouse"&&(v=!0,h=!0,!(t.animating||t.autoplay.paused)&&A(!0))},R=L=>{L.pointerType==="mouse"&&(h=!1,t.autoplay.paused&&E())},V=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",M),t.el.addEventListener("pointerleave",R))},U=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",M),t.el.removeEventListener("pointerleave",R))},Z=()=>{Pn().addEventListener("visibilitychange",z)},Y=()=>{Pn().removeEventListener("visibilitychange",z)};r("init",()=>{t.params.autoplay.enabled&&(V(),Z(),C())}),r("destroy",()=>{U(),Y(),t.autoplay.running&&T()}),r("_freeModeStaticRelease",()=>{(x||v)&&E()}),r("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?T():A(!0,!0)}),r("beforeTransitionStart",(L,N,$)=>{t.destroyed||!t.autoplay.running||($||!t.params.autoplay.disableOnInteraction?A(!0,!0):T())}),r("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){T();return}g=!0,x=!1,v=!1,y=setTimeout(()=>{v=!0,x=!0,A(!0)},200)}}),r("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!g)){if(clearTimeout(y),clearTimeout(a),t.params.autoplay.disableOnInteraction){x=!1,g=!1;return}x&&t.params.cssMode&&E(),x=!1,g=!1}}),r("slideChange",()=>{t.destroyed||!t.autoplay.running||(b=!0)}),Object.assign(t.autoplay,{start:C,stop:T,pause:A,resume:E})}function hT(e){const{effect:t,swiper:n,on:r,setTranslate:i,setTransition:o,overwriteParams:a,perspective:s,recreateShadows:l,getEffectParams:u}=e;r("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),s&&s()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const p=a?a():{};Object.assign(n.params,p),Object.assign(n.originalParams,p)}),r("setTranslate",()=>{n.params.effect===t&&i()}),r("setTransition",(p,f)=>{n.params.effect===t&&o(f)}),r("transitionEnd",()=>{if(n.params.effect===t&&l){if(!u||!u().slideShadows)return;n.slides.forEach(p=>{p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>f.remove())}),l()}});let d;r("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(d=!0),requestAnimationFrame(()=>{d&&n.slides&&n.slides.length&&(i(),d=!1)}))})}function mT(e,t){const n=lf(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function M0(e,t,n){const r=`swiper-slide-shadow${n?`-${n}`:""}${` swiper-slide-shadow-${e}`}`,i=lf(t);let o=i.querySelector(`.${r.split(" ").join(".")}`);return o||(o=aa("div",r.split(" ")),i.append(o)),o}function gT(e){let{swiper:t,extendParams:n,on:r}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),hT({effect:"coverflow",swiper:t,on:r,setTranslate:()=>{const{width:a,height:s,slides:l,slidesSizesGrid:u}=t,d=t.params.coverflowEffect,p=t.isHorizontal(),f=t.translate,g=p?-f+a/2:-f+s/2,x=p?d.rotate:-d.rotate,y=d.depth,b=Y8(t);for(let v=0,h=l.length;v<h;v+=1){const m=l[v],w=u[v],S=m.swiperSlideOffset,j=(g-S-w/2)/w,C=typeof d.modifier=="function"?d.modifier(j):j*d.modifier;let T=p?x*C:0,A=p?0:x*C,E=-y*Math.abs(C),z=d.stretch;typeof z=="string"&&z.indexOf("%")!==-1&&(z=parseFloat(d.stretch)/100*w);let M=p?0:z*C,R=p?z*C:0,V=1-(1-d.scale)*Math.abs(C);Math.abs(R)<.001&&(R=0),Math.abs(M)<.001&&(M=0),Math.abs(E)<.001&&(E=0),Math.abs(T)<.001&&(T=0),Math.abs(A)<.001&&(A=0),Math.abs(V)<.001&&(V=0);const U=`translate3d(${R}px,${M}px,${E}px)  rotateX(${b(A)}deg) rotateY(${b(T)}deg) scale(${V})`,Z=mT(d,m);if(Z.style.transform=U,m.style.zIndex=-Math.abs(Math.round(C))+1,d.slideShadows){let Y=p?m.querySelector(".swiper-slide-shadow-left"):m.querySelector(".swiper-slide-shadow-top"),L=p?m.querySelector(".swiper-slide-shadow-right"):m.querySelector(".swiper-slide-shadow-bottom");Y||(Y=M0("coverflow",m,p?"left":"top")),L||(L=M0("coverflow",m,p?"right":"bottom")),Y&&(Y.style.opacity=C>0?C:0),L&&(L.style.opacity=-C>0?-C:0)}}},setTransition:a=>{t.slides.map(l=>lf(l)).forEach(l=>{l.style.transitionDuration=`${a}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u=>{u.style.transitionDuration=`${a}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const vT=k.button`
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px; 
  padding: 0px 20px;
  font-size: 12px;
  background-color: ${({backDefine:e})=>e||"var(--color--white)"};
  border-radius: 10px;
  color: ${({colorDefine:e})=>e||"var(--color--black)"};
  border: none;
  position: relative;
  cursor: pointer;
  transition-duration: 0.2s;
  font-family: var(--font--comfortaa);
  font-weight: 600;
  left: 0;
  bottom: 0;

  .icon {
    font-size: 18px;
    color: var(--color--black);
    margin-left: 8px;
  }

  &:hover {
    background-color: var(--color--black);
    color: var(--color--white);
  }

  &:hover .icon {
    transform: translateX(5px); 
    transition: transform 0.3s ease;
    color: var(--color--white);
  }

  &:active {
    transform: translate(1px, 1px);
    transition-duration: 0.2s;
  }
`,uf=({text:e,onClick:t,backDefine:n,colorDefine:r})=>c.jsxs(vT,{backDefine:n,colorDefine:r,onClick:t,children:[e,c.jsx(Qp,{className:"icon"})]}),xT=Wi`
.swiper-button-next, .swiper-button-prev {
        color: var(--color--white); 
        background-color: var(--color--black);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        transition: all .2s;

        @media (max-width: 768px){
            z-index: 1000;
        }

        &:hover {
            background-color: var(--color--white);
            color: var(--color--black);
            transform: scale(1.05);
        }

        &:after {
            font-size: 20px;
        }
    }
    .swiper-pagination-bullet {
        background: var(--color--black);
        opacity: 0.7;
        width: 12px;
        height: 12px;
        margin: 0 5px;
        &.swiper-pagination-bullet-active {
            background: #A5C933;
            opacity: 1;
        }
    }
`,yT=Vn`
  0% {
    border-radius: 0 60px 20px 0;
  }
  25% {
    border-radius: 20px 0 60px 20px;
  }
  50% {
    border-radius: 60px 20px 0 60px;
  }
  75% {
    border-radius: 60px 60px 20px 0;
  }
  100% {
    border-radius: 0 20px 60px 0;
  }
`,wT=k.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 0 20px 0;

    @media (max-width: 768px){
        border-radius: 0 15px 0 20px;
    }
`,bT=k.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  animation: ${yT} 5s ease-in-out infinite;
  background-image: ${({backgroundImage:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,ST=k.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 4px;
    border-radius: inherit;
    background: linear-gradient(45deg, #00000080, #0001);
    -webkit-mask-image: linear-gradient(#fff, #fff);
    mask-image: linear-gradient(#fff, #fff);
    pointer-events: none;
`,_T=k.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--color--white);
    font-family: Arial, sans-serif;
`,jT=k.h2`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
`,TT=k.p`
    font-size: 16px;
    margin: 5px 0;
    font-family: var(--font--avenir);
`,CT=k.div`
    display: flex;
    gap: 8px;
    margin-top: 10px;
    flex-wrap: wrap;

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        background: rgba(0, 0, 0, 0.5);
        padding: 5px 10px;
        border-radius: 12px;
        font-size: 12px;
        transition: all .2s ease;
        
        &:hover {
            color: var(--color--black);
            background-color: var(--color--white);
            cursor: default;
        }
    }

    svg {
        font-size: 16px;
    }
`,kT=k.div`
    width: 100%;
    max-width: 60%;
    margin: 0 auto;

    @media (max-width: 640px) {
        max-width: 100%;
    }
`,L0=({content:e=[],contentType:t="image",spaceBetween:n=10,slidesPerView:r=1,height:i="300px",autoplayDelay:o=3e3,showPagination:a=!0,showNavigation:s=!0})=>c.jsxs(kT,{children:[c.jsx(xT,{}),c.jsx(en,{modules:[gr,vr,Dn],navigation:s,pagination:a?{clickable:!0}:!1,spaceBetween:n,loop:!0,slidesPerView:r,autoplay:{delay:o,disableOnInteraction:!1,pauseOnMouseEnter:!0},style:{height:i},breakpoints:{640:{slidesPerView:1,spaceBetween:10,height:"200px"},768:{slidesPerView:1,spaceBetween:20,height:"250px"},1024:{slidesPerView:1,spaceBetween:30,height:"300px"}},children:e.map((l,u)=>c.jsx(tn,{children:t==="image"?c.jsx(wT,{src:l.src,loading:"lazy",alt:l.alt||`Slide ${u+1}`}):c.jsxs(bT,{backgroundImage:l.backgroundImage,children:[c.jsx(ST,{}),c.jsxs(_T,{children:[c.jsx(jT,{children:l.title}),c.jsx(TT,{children:l.subtitle}),c.jsx(CT,{children:l.features.map((d,p)=>c.jsxs("span",{children:[d.icon," ",d.text]},p))}),c.jsx(uf,{text:"Conhecer todas as acomodações"})]})]})},u))})]}),ji=k.button`
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 36px;
    font-size: 12px;
    font-weight: 600;
    color: ${({color:e})=>e||"var(--color--black)"};
    background-color: ${({background:e})=>e||"inherit"};
    border: 2px solid ${({borderColor:e})=>e||"transparent"};
    border-radius: 100px;
    box-shadow: 0 0 0 2px var(--color--black);
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    font-family: var(--font--comfortaa);

    @media(max-width: 768px){
        font-size: 10px;    
    }

    &:hover {
        box-shadow: 0 0 0 12px transparent;
        color: ${({hoverColor:e})=>e||"var(--color--black)"};
        border-radius: 40px;
    }

    &:active {
        scale: 0.95;
        box-shadow: 0 0 0 4px var(--color--black);
    }
`,O0=k.svg`
    position: absolute;
    width: 24px;
    fill: var(--color--black);
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    &.arr-1 {
        right: 16px;
    }

    &.arr-2 {
        left: -25%;
    }

    ${ji}:hover &.arr-1 {
        right: -25%;
    }

    ${ji}:hover &.arr-2 {
        left: 16px;
    }

    ${ji}:hover & {
        fill: var(--color--white);
    }
`,ET=k.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: var(--color--black);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    ${ji}:hover & {
        width: 220px;
        height: 220px;
        opacity: 1;
        color: var(--color--white);
    }
`,zT=k.span`
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    ${ji}:hover & {
        transform: translateX(12px);
        color: var(--color--white);
    }
`,Tt=({text:e,onClick:t,color:n,backgroundColor:r,borderColor:i,hoverColor:o})=>c.jsxs(ji,{onClick:t,color:n,background:r,borderColor:i,hoverColor:o,children:[c.jsx(O0,{className:"arr-2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})}),c.jsx(zT,{children:e}),c.jsx(ET,{}),c.jsx(O0,{className:"arr-1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})})]}),PT=Vn`
  0% {
    border-radius: 80px 20px 50px 80px;
  }
  25% {
    border-radius: 50px 80px 30px 60px;
  }
  50% {
    border-radius: 100px 50px 80px 30px;
  }
  75% {
    border-radius: 60px 30px 100px 50px;
  }
  100% {
    border-radius: 80px 20px 50px 80px;
  }
`,AT=k.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  width: 40%;
  height: 60vh;
  padding: 50px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    top: 25%;
    height: auto;
    padding: 5% 5%;
    gap: 30px;
    position: relative;
    z-index: 10;
    top: -80px;
    margin-bottom: -80px;
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.1;
    left: 0;
    top: 0;
    background-image: url('../../public/background/background_black.webp');
    background-position: center;
    background-size: contain;
    animation: ${PT} 8s ease-in-out infinite;
    pointer-events: none;

    @media (max-width: 768px) {
      animation: none;
      border-top: none;
      border-radius: 0 0 35px 0;
      border: 1px solid var(--color--black);
    }
  }
`,MT=k.h1`
  width: 100%;
  text-align: left;
  font-family: var(--font--comfortaa);
  font-weight: 100;
  font-size: 1.3rem;
  line-height: 100%;

  @media (max-width: 768px) {
    text-align: center;
    color: var(--color--black);
    width: auto;
    padding: 7px 15px;
    border-radius: 0px 10px 0px 10px;
    font-size: .9rem;
    font-weight: 800;
    background-color: rgba(255, 255, 255, 1);
    backdrop-filter: blur(40px);
    box-shadow: 0 0 5px rgba(255, 255, 255, 1);
  }
`,LT=k.p`
  width: 100%;
  font-size: .90rem;
  color: var(--color--black);
  font-family: var(--font--comfortaa);

  @media (max-width: 768px) {
    text-align: justify;
    color: var(--color--black);
    width: 100%;
    margin-top: 5px;
    font-weight: 200;
    font-size: .8rem;
    line-height: 130%;
  }
`,OT=k.div`
  display: flex;
  width: 100%;
  gap: 25px;

  @media (max-width:768px){
    gap: 15px;
  }
`,I0=({text:e,title:t,borderColor:n,buttonColor:r,buttonHover:i,buttonBorder:o,targetPage:a})=>{const s=Sl(),l=()=>{s(a)},u=()=>{window.open("https://wa.link/dojlwi","_blank")};return c.jsxs(AT,{borderColor:n,children:[c.jsx(MT,{children:t}),c.jsx(LT,{children:e}),c.jsxs(OT,{children:[c.jsx(Tt,{onClick:l,text:"Saber mais",backgroundColor:r,borderColor:o,hoverColor:i,border:"1px solid",color:"var(--color--black)"}),c.jsx(Tt,{onClick:u,text:"Fazer reserva!",backgroundColor:"transparent",borderColor:o,hoverColor:i,border:"1px solid",color:"var(--color--black)"})]})]})};function IT(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"},child:[]}]})(e)}function df(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7 11v2h10v-2c0-1.86 1.28-3.41 3-3.86V6c0-1.65-1.35-3-3-3H7C5.35 3 4 4.35 4 6v1.14c1.72.45 3 2 3 3.86z"},child:[]},{tag:"path",attr:{d:"M21 9c-1.1 0-2 .9-2 2v4H5v-4c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.65 1.35 3 3 3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.65 0 3-1.35 3-3v-5c0-1.1-.9-2-2-2z"},child:[]}]})(e)}function Ye(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M22 9 12 2 2 9h9v13h2V9z"},child:[]},{tag:"path",attr:{d:"m4.14 12-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zM19.1 16H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z"},child:[]}]})(e)}function RT(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"circle",attr:{cx:"4.5",cy:"9.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"19.5",cy:"9.5",r:"2.5"},child:[]},{tag:"path",attr:{d:"M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"},child:[]}]})(e)}function bt(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"m10 17 5-5-5-5v10z"},child:[]}]})(e)}function VT(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"},child:[]},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"},child:[]},{tag:"line",attr:{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"},child:[]}]})(e)}function DT(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9 9 5 12 1.774-5.226L21 14 9 9z"},child:[]},{tag:"path",attr:{d:"m16.071 16.071 4.243 4.243"},child:[]},{tag:"path",attr:{d:"m7.188 2.239.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656-2.12 2.122"},child:[]}]})(e)}const NT=k.button`
  position: relative;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  border-radius: 50px;
  background-color: transparent;
  border: solid 2px ${({borderColor:e})=>e||"var(--color--black)"};
  color: ${({textColor:e})=>e||"var(--color--black)"};
  font-family: inherit;

  &:hover .default-btn {
    transform: translate(0%, -100%);
  }

  &:hover .hover-btn {
    transform: translate(0%, 0%);
  }
`,Uy=k.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-family: var(--font--comfortaa);
  gap: 10px;
  padding: 10px 30px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 500;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    padding: 7px 30px;
    font-size: 12px;
  }
`,FT=k(Uy)`
  position: absolute;
  inset: 0;
  background-color: ${({hoverColor:e})=>e||"var(--color--blue)"};
  transform: translate(0%, 100%);
`,BT=k.span`
  color: ${({textColor:e})=>e||"var(--color--black)"};
`,$T=k.span`
  color: ${({hoverTextColor:e})=>e||"var(--color--white)"};
`,Gi=({text:e="Quick View",text2:t="Clique e reserve",borderColor:n,textColor:r,hoverColor:i,hoverTextColor:o})=>{const a=()=>{window.open("https://wa.link/dojlwi","_blank")};return c.jsxs(NT,{borderColor:n,textColor:r,onClick:a,children:[c.jsxs(Uy,{className:"default-btn",children:[c.jsx(IT,{size:15,color:r||"var(--color--black)"}),c.jsx(BT,{textColor:r,children:e})]}),c.jsxs(FT,{className:"hover-btn",hoverColor:i,children:[c.jsx(DT,{size:15,color:o||"var(--color--white)"}),c.jsx($T,{hoverTextColor:o,children:t})]})]})};var Wy={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(G0,function(){return function(n){function r(o){if(i[o])return i[o].exports;var a=i[o]={exports:{},id:o,loaded:!1};return n[o].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}var i={};return r.m=n,r.c=i,r.p="dist/",r(0)}([function(n,r,i){function o(V){return V&&V.__esModule?V:{default:V}}var a=Object.assign||function(V){for(var U=1;U<arguments.length;U++){var Z=arguments[U];for(var Y in Z)Object.prototype.hasOwnProperty.call(Z,Y)&&(V[Y]=Z[Y])}return V},s=i(1),l=(o(s),i(6)),u=o(l),d=i(7),p=o(d),f=i(8),g=o(f),x=i(9),y=o(x),b=i(10),v=o(b),h=i(11),m=o(h),w=i(14),S=o(w),j=[],C=!1,T={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},A=function(){var V=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(V&&(C=!0),C)return j=(0,m.default)(j,T),(0,v.default)(j,T.once),j},E=function(){j=(0,S.default)(),A()},z=function(){j.forEach(function(V,U){V.node.removeAttribute("data-aos"),V.node.removeAttribute("data-aos-easing"),V.node.removeAttribute("data-aos-duration"),V.node.removeAttribute("data-aos-delay")})},M=function(V){return V===!0||V==="mobile"&&y.default.mobile()||V==="phone"&&y.default.phone()||V==="tablet"&&y.default.tablet()||typeof V=="function"&&V()===!0},R=function(V){T=a(T,V),j=(0,S.default)();var U=document.all&&!window.atob;return M(T.disable)||U?z():(T.disableMutationObserver||g.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),T.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",T.easing),document.querySelector("body").setAttribute("data-aos-duration",T.duration),document.querySelector("body").setAttribute("data-aos-delay",T.delay),T.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?A(!0):T.startEvent==="load"?window.addEventListener(T.startEvent,function(){A(!0)}):document.addEventListener(T.startEvent,function(){A(!0)}),window.addEventListener("resize",(0,p.default)(A,T.debounceDelay,!0)),window.addEventListener("orientationchange",(0,p.default)(A,T.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,v.default)(j,T.once)},T.throttleDelay)),T.disableMutationObserver||g.default.ready("[data-aos]",E),j)};n.exports={init:R,refresh:A,refreshHard:E}},function(n,r){},,,,,function(n,r){(function(i){function o(M,R,V){function U(q){var te=he,se=_e;return he=_e=void 0,D=q,le=M.apply(se,te)}function Z(q){return D=q,P=setTimeout(N,R),I?U(q):le}function Y(q){var te=q-O,se=q-D,pe=R-te;return G?E(pe,de-se):pe}function L(q){var te=q-O,se=q-D;return O===void 0||te>=R||te<0||G&&se>=de}function N(){var q=z();return L(q)?$(q):void(P=setTimeout(N,Y(q)))}function $(q){return P=void 0,B&&he?U(q):(he=_e=void 0,le)}function K(){P!==void 0&&clearTimeout(P),D=0,he=O=_e=P=void 0}function J(){return P===void 0?le:$(z())}function ye(){var q=z(),te=L(q);if(he=arguments,_e=this,O=q,te){if(P===void 0)return Z(O);if(G)return P=setTimeout(N,R),U(O)}return P===void 0&&(P=setTimeout(N,R)),le}var he,_e,de,le,P,O,D=0,I=!1,G=!1,B=!0;if(typeof M!="function")throw new TypeError(f);return R=d(R)||0,s(V)&&(I=!!V.leading,G="maxWait"in V,de=G?A(d(V.maxWait)||0,R):de,B="trailing"in V?!!V.trailing:B),ye.cancel=K,ye.flush=J,ye}function a(M,R,V){var U=!0,Z=!0;if(typeof M!="function")throw new TypeError(f);return s(V)&&(U="leading"in V?!!V.leading:U,Z="trailing"in V?!!V.trailing:Z),o(M,R,{leading:U,maxWait:R,trailing:Z})}function s(M){var R=typeof M>"u"?"undefined":p(M);return!!M&&(R=="object"||R=="function")}function l(M){return!!M&&(typeof M>"u"?"undefined":p(M))=="object"}function u(M){return(typeof M>"u"?"undefined":p(M))=="symbol"||l(M)&&T.call(M)==x}function d(M){if(typeof M=="number")return M;if(u(M))return g;if(s(M)){var R=typeof M.valueOf=="function"?M.valueOf():M;M=s(R)?R+"":R}if(typeof M!="string")return M===0?M:+M;M=M.replace(y,"");var V=v.test(M);return V||h.test(M)?m(M.slice(2),V?2:8):b.test(M)?g:+M}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(M){return typeof M}:function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},f="Expected a function",g=NaN,x="[object Symbol]",y=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,h=/^0o[0-7]+$/i,m=parseInt,w=(typeof i>"u"?"undefined":p(i))=="object"&&i&&i.Object===Object&&i,S=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,j=w||S||Function("return this")(),C=Object.prototype,T=C.toString,A=Math.max,E=Math.min,z=function(){return j.Date.now()};n.exports=a}).call(r,function(){return this}())},function(n,r){(function(i){function o(z,M,R){function V(B){var q=ye,te=he;return ye=he=void 0,O=B,de=z.apply(te,q)}function U(B){return O=B,le=setTimeout(L,M),D?V(B):de}function Z(B){var q=B-P,te=B-O,se=M-q;return I?A(se,_e-te):se}function Y(B){var q=B-P,te=B-O;return P===void 0||q>=M||q<0||I&&te>=_e}function L(){var B=E();return Y(B)?N(B):void(le=setTimeout(L,Z(B)))}function N(B){return le=void 0,G&&ye?V(B):(ye=he=void 0,de)}function $(){le!==void 0&&clearTimeout(le),O=0,ye=P=he=le=void 0}function K(){return le===void 0?de:N(E())}function J(){var B=E(),q=Y(B);if(ye=arguments,he=this,P=B,q){if(le===void 0)return U(P);if(I)return le=setTimeout(L,M),V(P)}return le===void 0&&(le=setTimeout(L,M)),de}var ye,he,_e,de,le,P,O=0,D=!1,I=!1,G=!0;if(typeof z!="function")throw new TypeError(p);return M=u(M)||0,a(R)&&(D=!!R.leading,I="maxWait"in R,_e=I?T(u(R.maxWait)||0,M):_e,G="trailing"in R?!!R.trailing:G),J.cancel=$,J.flush=K,J}function a(z){var M=typeof z>"u"?"undefined":d(z);return!!z&&(M=="object"||M=="function")}function s(z){return!!z&&(typeof z>"u"?"undefined":d(z))=="object"}function l(z){return(typeof z>"u"?"undefined":d(z))=="symbol"||s(z)&&C.call(z)==g}function u(z){if(typeof z=="number")return z;if(l(z))return f;if(a(z)){var M=typeof z.valueOf=="function"?z.valueOf():z;z=a(M)?M+"":M}if(typeof z!="string")return z===0?z:+z;z=z.replace(x,"");var R=b.test(z);return R||v.test(z)?h(z.slice(2),R?2:8):y.test(z)?f:+z}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},p="Expected a function",f=NaN,g="[object Symbol]",x=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,v=/^0o[0-7]+$/i,h=parseInt,m=(typeof i>"u"?"undefined":d(i))=="object"&&i&&i.Object===Object&&i,w=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,S=m||w||Function("return this")(),j=Object.prototype,C=j.toString,T=Math.max,A=Math.min,E=function(){return S.Date.now()};n.exports=o}).call(r,function(){return this}())},function(n,r){function i(d){var p=void 0,f=void 0;for(p=0;p<d.length;p+=1)if(f=d[p],f.dataset&&f.dataset.aos||f.children&&i(f.children))return!0;return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function a(){return!!o()}function s(d,p){var f=window.document,g=o(),x=new g(l);u=p,x.observe(f.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(d){d&&d.forEach(function(p){var f=Array.prototype.slice.call(p.addedNodes),g=Array.prototype.slice.call(p.removedNodes),x=f.concat(g);if(i(x))return u()})}Object.defineProperty(r,"__esModule",{value:!0});var u=function(){};r.default={isSupported:a,ready:s}},function(n,r){function i(f,g){if(!(f instanceof g))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function f(g,x){for(var y=0;y<x.length;y++){var b=x[y];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(g,b.key,b)}}return function(g,x,y){return x&&f(g.prototype,x),y&&f(g,y),g}}(),s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,d=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,p=function(){function f(){i(this,f)}return a(f,[{key:"phone",value:function(){var g=o();return!(!s.test(g)&&!l.test(g.substr(0,4)))}},{key:"mobile",value:function(){var g=o();return!(!u.test(g)&&!d.test(g.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),f}();r.default=new p},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(a,s,l){var u=a.node.getAttribute("data-aos-once");s>a.position?a.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!l&&u!=="true")&&a.node.classList.remove("aos-animate")},o=function(a,s){var l=window.pageYOffset,u=window.innerHeight;a.forEach(function(d,p){i(d,u+l,s)})};r.default=o},function(n,r,i){function o(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(r,"__esModule",{value:!0});var a=i(12),s=o(a),l=function(u,d){return u.forEach(function(p,f){p.node.classList.add("aos-init"),p.position=(0,s.default)(p.node,d.offset)}),u};r.default=l},function(n,r,i){function o(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(r,"__esModule",{value:!0});var a=i(13),s=o(a),l=function(u,d){var p=0,f=0,g=window.innerHeight,x={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(x.offset&&!isNaN(x.offset)&&(f=parseInt(x.offset)),x.anchor&&document.querySelectorAll(x.anchor)&&(u=document.querySelectorAll(x.anchor)[0]),p=(0,s.default)(u).top,x.anchorPlacement){case"top-bottom":break;case"center-bottom":p+=u.offsetHeight/2;break;case"bottom-bottom":p+=u.offsetHeight;break;case"top-center":p+=g/2;break;case"bottom-center":p+=g/2+u.offsetHeight;break;case"center-center":p+=g/2+u.offsetHeight/2;break;case"top-top":p+=g;break;case"bottom-top":p+=u.offsetHeight+g;break;case"center-top":p+=u.offsetHeight/2+g}return x.anchorPlacement||x.offset||isNaN(d)||(f=d),p+f};r.default=l},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(o){for(var a=0,s=0;o&&!isNaN(o.offsetLeft)&&!isNaN(o.offsetTop);)a+=o.offsetLeft-(o.tagName!="BODY"?o.scrollLeft:0),s+=o.offsetTop-(o.tagName!="BODY"?o.scrollTop:0),o=o.offsetParent;return{top:s,left:a}};r.default=i},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(o){return o=o||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(o,function(a){return{node:a}})};r.default=i}])})})(Wy);var qT=Wy.exports;const et=Br(qT),HT=Wi`
    .swiper-button-next, .swiper-button-prev {
        color: var(--color--white); 
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        &:after {
            font-size: 20px;
        }
    }
    .swiper-pagination-bullet {
        background: rgba(0, 0, 0, 0.3);
        opacity: 0.7;
        width: 10px;
        height: 10px;
        margin: 0 5px;
        &.swiper-pagination-bullet-active {
            background: #A5C933;
            opacity: 1;
        }
    }
`,UT=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 25px 0 25px 0;
    overflow: hidden;
    background-image: ${({backgroundImage:e})=>`url(${e})`};
    background-size: cover;
    background-position: center;
    transform-style: preserve-3d;

    @media (max-width: 768px) {
        width: 90%;
        margin-left: 5%;
        border-radius: 20px 0 20px 0;
    }
`,WT=k.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    border-radius: 25px 0 25px 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    pointer-events: none;
    z-index: 1;

    @media (max-width: 768px) {
        border-radius: 20px 0 20px 0;
    }
`,GT=k.div`
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: white;
    padding: 10px;
    border-radius: 8px;
    z-index: 2;

    @media (max-width: 768px) {
        left: 10px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
`,YT=k.div`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 12px;
    font-weight: bold;
    padding: 5px 15px;
    color: var(--color--black);
    z-index: 3;
    font-family: var(--font--comfortaa);
    font-weight: 800;
    background-color: var(--color--white);
    border-radius: 10px 0 10px 0;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 5px rgba(255, 255, 255, 1);

    @media (max-width: 768px) {
        left: 0;
        top: 10px;
        padding: 7px 10px;
        width: 50%;
        transform: translateX(50%);
        font-weight: 200;
        font-size: 0.7rem;
        text-align: center;
    }
`,KT=k.h2`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;
    margin-bottom: 15px;

    @media (max-width: 768px) {
        font-size: 26px;
        margin-bottom: 0;
    }
`,XT=k.p`
    font-size: 13px;
    width: 80%;
    margin-bottom: 15px;
    font-family: var(--font--comfortaa)!important;
    font-weight: 300;
    text-align: left!important;

    @media (max-width: 768px) {
        width: 100%;
        font-size: 13px!important;
        margin-bottom: 0;
    }
`,QT=({content:e=[],height:t="300px",width:n="100%",autoplayDelay:r=1500,showPagination:i=!0,showNavigation:o=!0})=>{const a=_.useRef([]);return _.useEffect(()=>{a.current&&a.current.forEach(s=>{s&&window.VanillaTilt.init(s,{max:2,speed:400,glare:!1})})},[]),c.jsxs(c.Fragment,{children:[c.jsx(HT,{}),c.jsx(en,{modules:[gr,vr,Dn,gT],effect:"coverflow",grabCursor:!0,centeredSlides:!0,loop:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:50,depth:300,modifier:1,slideShadows:!0},navigation:o,pagination:i?{clickable:!0}:!1,autoplay:{delay:r,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{1024:{slidesPerView:2},768:{slidesPerView:2},0:{slidesPerView:1}},style:{width:n,height:t},children:e.map((s,l)=>c.jsx(tn,{style:{width:"60%"},children:c.jsxs(UT,{ref:u=>a.current[l]=u,backgroundImage:s.backgroundImage,children:[c.jsx(YT,{children:s.topLeftText}),c.jsx(WT,{}),c.jsxs(GT,{"data-aos":"fade-up","data-aos-delay":"100",children:[c.jsx(KT,{children:s.title}),c.jsx(XT,{children:s.description}),c.jsx(Gi,{text:"Reservar agora",text2:"Clique e reserve agora",borderColor:"var(--color--white)",textColor:"var(--color--white)",hoverColor:"var(--color--green)",hoverTextColor:"var(--color--black)"})]})]})},l))})]})},ZT=k(Oe.div)`
    width: 100%;
    height: 40vh;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        height: 25vh;
    }
`,JT=k(Oe.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.2) rotate(3deg); // Zoom e rotação ao passar o mouse
    }
`,eC=k(Oe.div)`
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: var(--color--black);
    padding: 3px 10px;
    font-family: var(--font--comfortaa);
    background-color: var(--color--white);
    cursor: default;
    font-size: 8px;
    font-weight: bold;
    border-radius: 4px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5); // Sombra para destacar o texto
`,xd=({images:e=[],reverse:t=!1})=>c.jsx(en,{modules:[Dn],spaceBetween:0,loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:t,stopOnLastSlide:!1,pauseOnMouseEnter:!0},speed:2e3,freeMode:!0,freeModeMomentum:!1,breakpoints:{320:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:5}},children:e.map((n,r)=>c.jsx(tn,{children:c.jsxs(ZT,{initial:{scale:.8,rotate:-5,opacity:0},animate:{scale:1,rotate:0,opacity:1},transition:{duration:.6,ease:"easeOut"},children:[c.jsx(JT,{src:n.src,alt:n.alt||`Imagem ${r+1}`,initial:{scale:1},whileHover:{scale:1.2,rotate:3},transition:{duration:.3}}),c.jsx(eC,{initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7,delay:.4,ease:"backOut"},children:n.label})]})},r))}),tC=Vn`
  0% {
    border-radius: 0 20px 20px 0;
  }
  25% {
    border-radius: 20px 0 20px 20px;
  }
  50% {
    border-radius: 20px 20px 0 20px;
  }
  75% {
    border-radius: 20px 20px 20px 0;
  }
  100% {
    border-radius: 0 20px 20px 0;
  }
`,nC=k.div`
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 10px;
    background: var(--color--white);
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    animation: ${tC} 5s ease-in-out infinite;
    background-color: rgba(0, 0, 0, 0.1);

    @media (max-width: 768px){
        border: none;
        padding: 5px;
        background-color: rgba(0, 0, 0, 0.1);
        animation: none;
        border-radius: 15px 15px 5px 5px;
    }
`,rC=k.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 10px;

    @media (max-width: 768px){
        border: 2px solid var(--color--black);
        height: 320px;
    }
`,iC=k.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #333;
`,oC=k.h3`
    font-size: 22px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;
`,aC=k.p`
    font-size: 14px;
    color: #777;
    font-family: var(--font--avenir);
    margin: 0;
`,sC=k.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    font-size: 12px;
    color: var(--color--black);

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        background: var(--color--white);
        font-family: var(--font--comfortaa);
        padding: 5px 8px;
        border-radius: 8px;
        font-size: 10px;

        @media (max-width: 768px){
            background-color: var(--color--white);
        }
    }
`,lC=k.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    font-size: 16px;
`,cC=k.p`
    font-size: 18px;
    font-family: var(--font--comfortaa);
    font-weight: bold;
    margin: 0;
    color: #333;

    & > span{
        font-size: 10px;
    }
`,pf=({events:e=[]})=>c.jsx(en,{modules:[gr,vr,Dn],autoplay:{delay:7e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},spaceBetween:20,navigation:!0,pagination:!1,loop:!0,breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},0:{slidesPerView:1}},children:e.map((t,n)=>c.jsx(tn,{children:c.jsxs(nC,{"data-aos":"fade-up","data-aos-delay":"0",children:[c.jsx(rC,{src:t.image,alt:t.title,"data-aos":"fade-up","data-aos-delay":"100"}),c.jsxs(iC,{children:[c.jsx(oC,{"data-aos":"fade-up","data-aos-delay":"200",children:t.title}),c.jsx(aC,{"data-aos":"fade-down","data-aos-delay":"250",children:t.dateRange}),c.jsx(sC,{"data-aos":"fade-up","data-aos-delay":"300",children:t.features.map((r,i)=>c.jsxs("span",{"data-aos":"fade-up","data-aos-delay":"400",children:[r.icon," ",r.text]},i))}),c.jsx(lC,{children:c.jsxs(cC,{"data-aos":"fade-in","data-aos-delay":"500",children:["A partir de: ",c.jsx("span",{children:"10x"}),"R$",t.price]})}),c.jsx(Gi,{text:"Quero fazer minha reserva agora",text2:"Clique e reserve!",borderColor:"var(--color--black)",textColor:"var(--color--black)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]})},n))});function uC(e){return Q({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M448 0C200.807 0 0 200.807 0 448s200.807 448 448 448 448-200.807 448-448S695.193 0 448 0m0 38.957c226.14 0 409.043 182.904 409.043 409.043 0 226.14-182.904 409.043-409.043 409.043-41.365 0-81.269-6.19-118.886-17.576 16.756-28.014 38.39-68.058 46.984-101.12 5.106-19.601 26.098-99.559 26.098-99.559 13.642 26.045 53.503 48.087 95.945 48.087 126.295 0 217.343-116.149 217.343-260.484 0-138.375-112.916-241.88-258.201-241.88-180.753 0-276.69 121.314-276.69 253.407 0 61.433 32.673 137.902 84.989 162.256 7.924 3.688 12.18 2.09 14-5.592 1.4-5.831 8.468-34.255 11.64-47.479 1.016-4.22.524-7.866-2.89-12.021-17.316-21.004-31.196-59.583-31.196-95.566 0-92.374 69.932-181.771 189.076-181.771 102.875 0 174.924 70.13 174.924 170.396 0 113.281-57.2 191.777-131.63 191.777-41.106 0-71.885-34.005-62.011-75.706 11.838-49.77 34.695-103.478 34.695-139.43 0-32.149-17.253-58.967-52.994-58.967-42.024 0-75.783 43.447-75.783 101.69 0 37.063 12.554 62.163 12.554 62.163s-41.511 175.51-49.114 208.174c-7.619 32.642-5.578 76.605-2.435 109.337C144.551 766.518 38.957 619.785 38.957 448 38.957 221.86 221.86 38.957 448 38.957",transform:"translate(64 64)"},child:[]}]})(e)}function dC(e){return Q({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M365.014.667C408.68 0 452.011.333 495.342 0c2.667 51 21 102.999 58.33 138.998 37.332 37 89.997 54 141.328 59.666v134.332c-47.998-1.667-96.33-11.667-139.994-32.333-19-8.667-36.665-19.667-53.998-31-.333 97.332.334 194.665-.666 291.663-2.667 46.666-18 93-44.998 131.332-43.665 64-119.328 105.665-196.992 106.999-47.664 2.666-95.329-10.334-135.994-34.333C55.028 725.658 7.696 652.992.697 574.993c-.667-16.667-1-33.333-.334-49.666 6-63.333 37.332-123.999 85.997-165.332 55.33-47.999 132.66-70.999 204.99-57.332.667 49.333-1.332 98.665-1.332 147.998-33-10.667-71.664-7.667-100.663 12.333-20.999 13.667-36.998 34.666-45.331 58.333-7 17-5 35.666-4.667 53.666 8 54.666 60.664 100.665 116.662 95.665 37.332-.333 72.997-22 92.33-53.666 6.332-11 13.332-22.333 13.665-35.333 3.334-59.666 2-118.998 2.334-178.664.333-134.332-.334-268.33.666-402.328",transform:"translate(165 112)"},child:[]}]})(e)}function pC(e){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"},child:[]}]})(e)}function fC(e){return Q({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M560 160A80 80 0 1 0 560 0a80 80 0 1 0 0 160zM55.9 512H381.1h75H578.9c33.8 0 61.1-27.4 61.1-61.1c0-11.2-3.1-22.2-8.9-31.8l-132-216.3C495 196.1 487.8 192 480 192s-15 4.1-19.1 10.7l-48.2 79L286.8 81c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 426.4C3 435.3 0 445.6 0 456.1C0 487 25 512 55.9 512z"},child:[]}]})(e)}function hC(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M16.2877 9.42773C15.413 7.97351 13.8195 7 12 7 9.23999 7 7 9.23999 7 12 7 14.76 9.23999 17 12 17 13.8195 17 15.413 16.0265 16.2877 14.5723L14.5729 13.5442C14.0483 14.4166 13.0927 15 12 15 10.3425 15 9 13.6575 9 12 9 10.3425 10.3425 9 12 9 13.093 9 14.0491 9.58386 14.5735 10.4568L16.2877 9.42773ZM22 12C22 6.47998 17.52 2 12 2 6.47998 2 2 6.47998 2 12 2 17.52 6.47998 22 12 22 17.52 22 22 17.52 22 12ZM4 12C4 7.57996 7.57996 4 12 4 16.42 4 20 7.57996 20 12 20 16.42 16.42 20 12 20 7.57996 20 4 16.42 4 12Z"},child:[]}]})(e)}const mC=k(Oe.button)`
    font-family: inherit;
    width: 80%;
    border-radius: 20px 0 20px 0;
    font-size: 20px;
    background: #212121;
    color: white;
    padding: 0.5em 1em;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    font-weight: 1000;

    @media (max-width: 768px){
        width: 100%;
        font-size: 10px;
        padding: 1em;
    }

    & > span {
        margin-left: 20px;
        transition: opacity 0.3s ease-in-out;
        font-family: var(--font--comfortaa);
        font-size: 15px;
    }

    & > svg {
        transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
        max-width: 100%;
    }

    &:hover {
        background: var(--color--blue);
    }

    &:hover > svg {
        transform: translateX(5px) scale(1.2);
        color: #fff;
    }

    &:active {
        transform: scale(0.95);
    }
`,gC=k(Oe.footer)`
    height: auto;
    margin-top: 5vh;
    padding: 5% 5%;
    width: 96%;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color--black);
    border-radius: 70px 70px 0 0;
    gap: 60px;

    @media (max-width: 768px){
        margin-top: 5vh;
        border-radius: 25px 25px 0 0;
        padding: 10% 5%;
    }
`,vC=k.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
    }

    & > h1{
        font-family: var(--font--comfortaa);
        width: 70%;
        font-size: 28px;
        line-height: 100%;
        color: var(--color--white);
        font-weight: 400;

        @media (max-width: 768px){
            width: 80%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 20px;
        }
    }

    & > p {
        width: 80%;
        line-height: 110%;
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        font-size: .9rem;

        @media (max-width: 768px){
            width: 90%;
            text-align: center;
            font-size: 12px;
        }
    }

    & > p > a{
        margin-left: 1ch;
        color: var(--color--blue);
    }

    & > hr{
        width: 85%;

        @media (max-width: 768px){
            display: none;
        }
    }

    & > div{
        width: 85%;
        display: flex;
        justify-content: space-between;
        margin-top: -25px;
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        font-weight: 200;

        @media (max-width: 768px){
            display: none;
        }
    }

    & > div > div{
        display: flex;
        gap: 10px;
    }

    & > div > div > a {
        color: var(--color--white);
    }
`,xC=k.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    @media (max-width: 768px){
        width: 100%;
    }

    & > form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        gap: 10px;
    }

    & > form > input{
        width: 80%;
        height: 30px;
        border-radius: 0 20px 0 20px;
        border: none;
        padding: 20px;
        background-color: var(--color--white);
        font-family: var(--font--comfortaa);

        @media (max-width: 768px){
            width: 100%;
        }
    }
`,yC=k.section`
    display: flex;
    width: 100%;
    height: 35vh;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 25px;
    }
`,wC=k.section`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 30vh;

    @media (max-width: 768px){
        width: 100%;
        height: auto;
        flex-direction: column;
        gap: 50px;
    }

    & > div {
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 2px;

        @media (max-width: 768px){
         width: 100%;
        }
    }

    & > div p{
        color: var(--color--white);
        width: 80%;
        line-height: 100%;
        font-family: var(--font--comfortaa);
        margin-top: 10px;
        font-size: .9rem;

        @media (max-width: 768px){
            font-size: 16px;
        }
    }

    & > div h2{
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        font-size: 18px;
        font-weight: 100;
        margin-bottom: 10px;

        @media (max-width: 768px){
            font-size: 20px;
        }
    }

    & > div a{
        color: var(--color--white);
        text-decoration: none;
        font-family: var(--font--comfortaa);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: .9rem;
        font-weight: 200;
        gap: 2px;
        transition: all .2s ease!important;
        border-radius: 5px;
        width: 80%;
    }

    & > div a:hover{
        background-color: var(--color--white);
        transform: translateX(20px)!important;
        color: var(--color--black);
        width: 80%;
    }

    & > div > img {
        width: 40%;
        object-fit: contain;
    }
`,bC=k.section`
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
    }

    & > h1{
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        font-weight: 200;
        width: 30%;
        line-height: 100%;

        @media (max-width: 768px){
            width: 100%;
            font-size: 20px;
            text-align: center;
        }
    }
`,SC=k.hr`
    width: 100%;
    margin-bottom: -50px;
`,_C=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2vh;
    font-family: var(--font--comfortaa);

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 15px;
    }

    & > p{
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        font-size: 12px;
    }

    & > a{
        color: var(--color--blue);
        font-size: 12px;
    }

    & > p > b > a{
        color: var(--color--blue);
    }
`,Yi=()=>{const e=_.useRef(null);O6(e,{once:!0});const[t,n]=_.useState(""),[r,i]=_.useState(""),[o,a]=_.useState(""),s=()=>`user_${Math.random().toString(36).substr(2,9)}_${Date.now()}`,l=()=>{const d=new URLSearchParams(window.location.search);return{utm_source:d.get("utm_source")||"organico",utm_medium:d.get("utm_medium")||"",utm_campaign:d.get("utm_campaign")||"",utm_term:d.get("utm_term")||"",utm_content:d.get("utm_content")||""}},u=async d=>{if(d.preventDefault(),!t||!r||!o){alert("Por favor, preencha todos os campos.");return}const f={id:s(),name:String(t).trim(),email:String(r).trim(),tel:String(o).trim(),conversion_url:window.location.href,...l()};try{const g=await fetch("https://hook.us1.make.com/e79ttwjdwv9soeppgqnu5rbnpk9l828e",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)}),x=await g.text();g.ok?(alert("Dados enviados com sucesso!"),n(""),i(""),a("")):(console.error("Erro de resposta:",x),alert("Erro ao enviar os dados: "+x))}catch(g){console.error("Erro:",g),alert("Erro ao enviar os dados. Tente novamente.")}};return c.jsx(c.Fragment,{children:c.jsxs(gC,{ref:e,children:[c.jsxs(yC,{children:[c.jsxs(vC,{children:[c.jsx("h1",{"data-aos":"fade-up",children:"Fale agora com a nossa Central de Reservas"}),c.jsxs("p",{"data-aos":"fade-up","data-aos-delay":"100",children:["Todas as informações são usadas apenas para entrar em contato. Entenda melhor sobre o uso das suas informações pela nossa",c.jsx("a",{href:"https://drive.google.com/file/d/1hcfO5CfNmczgpg2h943ytwg9j0SR9Fas/view",target:"_blank",children:"política de privacidade"}),"."]}),c.jsx("hr",{"data-aos":"fade-right","data-aos-delay":"200"}),c.jsxs("div",{children:[c.jsx("h4",{"data-aos":"fade-up","data-aos-delay":"300",children:"Siga-nos"}),c.jsxs("div",{children:[c.jsx("a",{href:"https://instagram.com/pousadaleange",target:"_blank",rel:"noopener noreferrer","data-aos":"fade-up","data-aos-delay":"400",children:c.jsx(VT,{})}),c.jsx("a",{href:"https://tiktok.com/@pousadaleange",target:"_blank",rel:"noopener noreferrer","data-aos":"fade-up","data-aos-delay":"450",children:c.jsx(dC,{})}),c.jsx("a",{href:"https://pinterest.com/pousadaleange",target:"_blank",rel:"noopener noreferrer","data-aos":"fade-up","data-aos-delay":"500",children:c.jsx(uC,{})})]})]})]}),c.jsx(xC,{"data-aos":"fade-down","data-aos-delay":"500",children:c.jsxs("form",{id:"contactForm",onSubmit:u,children:[c.jsx("input",{type:"text",id:"name",placeholder:"Digite o seu nome",value:t,onChange:d=>n(d.target.value),"data-aos":"fade-up","data-aos-delay":"600"}),c.jsx("input",{type:"email",id:"email",placeholder:"Preciso saber seu e-mail também!",value:r,onChange:d=>i(d.target.value),"data-aos":"fade-up","data-aos-delay":"700"}),c.jsx("input",{type:"tel",id:"tel",placeholder:"Por fim, seu número de WhatsApp",value:o,onChange:d=>a(d.target.value),"data-aos":"fade-up","data-aos-delay":"800"}),c.jsxs(mC,{type:"submit","data-aos":"fade-up","data-aos-delay":"1000",children:[c.jsx(pC,{size:20}),c.jsx("span",{children:"Enviar meus dados para contato"})]})]})})]}),c.jsxs(wC,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1729513421/white_sevdgn.png",alt:"Descrição da imagem",loading:"lazy","data-aos":"fade-up","data-aos-delay":"200"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"400",children:"A pousada mais Pet Friendly, venha conhecer!"})]}),c.jsxs("div",{children:[c.jsx("h2",{"data-aos":"fade-up","data-aos-delay":"50",children:"Mapa do site"}),c.jsxs("a",{href:"#","data-aos":"fade-down","data-aos-delay":"100",children:[" ",c.jsx(bt,{})," Início "]}),c.jsxs("a",{href:"#/sobre","data-aos":"fade-up","data-aos-delay":"150",children:[" ",c.jsx(bt,{})," Sobre nós "]}),c.jsxs("a",{href:"#/serra","data-aos":"fade-down","data-aos-delay":"200",children:[" ",c.jsx(bt,{})," Le Ange Serra "]}),c.jsxs("a",{href:"#/mar","data-aos":"fade-up","data-aos-delay":"250",children:[" ",c.jsx(bt,{})," Le Ange Mar "]}),c.jsxs("a",{href:"#/event","data-aos":"fade-down","data-aos-delay":"300",children:[" ",c.jsx(bt,{})," Eventos "]}),c.jsxs("a",{href:"#/acomodaSerra","data-aos":"fade-up","data-aos-delay":"350",children:[" ",c.jsx(bt,{})," Acomodação Serra "]}),c.jsxs("a",{href:"#/acomodaMar","data-aos":"fade-up","data-aos-delay":"400",children:[" ",c.jsx(bt,{})," Acomodação Mar "]})]}),c.jsxs("div",{children:[c.jsx("h2",{"data-aos":"fade-up","data-aos-delay":"400",children:"Ajuda"}),c.jsxs("a",{href:"https://wa.link/dojlwi",target:"_blank","data-aos":"fade-up","data-aos-delay":"100",children:[" ",c.jsx(bt,{})," WhatsApp "]}),c.jsxs("a",{href:"https://wa.link/dojlwi",target:"_blank","data-aos":"fade-down","data-aos-delay":"150",children:[" ",c.jsx(bt,{})," +55 (21) 99423-0871 "]}),c.jsxs("a",{href:"mailto:pousadaleange@gmail.com",target:"_blank","data-aos":"fade-up","data-aos-delay":"200",children:[" ",c.jsx(bt,{})," pousadaleange@gmail.com "]})]}),c.jsxs("div",{children:[c.jsx("h2",{"data-aos":"fade-up","data-aos-delay":"600",children:"Fique por dentro de tudo"}),c.jsxs("a",{href:"https://www.instagram.com/pousadaleange/",target:"_blank","data-aos":"fade-down","data-aos-delay":"100",children:[" ",c.jsx(bt,{})," Instagram "]}),c.jsxs("a",{href:"https://www.tiktok.com/@pousadaleange",target:"_blank","data-aos":"fade-up","data-aos-delay":"150",children:[" ",c.jsx(bt,{})," TikTok "]}),c.jsxs("a",{href:"https://br.pinterest.com/pousadaleange/",target:"_blank","data-aos":"fade-down","data-aos-delay":"200",children:[" ",c.jsx(bt,{})," Pinterest "]})]})]}),c.jsxs(bC,{children:[c.jsx("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:"Saiba onde estamos localizados"}),c.jsx("div",{children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235239.22077211382!2d-43.355636!3d-22.461517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99106a0d4d634d%3A0x5a069366075bf207!2sPousada%20Le%20Ange!5e0!3m2!1spt-BR!2sbr!4v1697101366468!5m2!1spt-BR!2sbr",width:"300",height:"150",style:{border:0,borderRadius:"15px 0px 15px 0px"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Mapa da Unidade Serra","data-aos":"fade-left","data-aos-delay":"300"})}),c.jsx("div",{children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14718.952062952678!2d-41.958707!3d-22.737977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97ab01cac79615%3A0x6b404b4741597da1!2sLeAnge%20Mar!5e0!3m2!1spt-BR!2sus!4v1728577984633!5m2!1spt-BR!2sus",width:"300",height:"150",style:{border:0,borderRadius:"0px 15px 0px 15px"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Mapa da Unidade Mar","data-aos":"fade-right","data-aos-delay":"400"})})]}),c.jsx(SC,{}),c.jsxs(_C,{children:[c.jsxs("p",{children:["Todos os direitos reservados | ",c.jsx(hC,{})," 2024"]}),c.jsx("a",{href:"https://drive.google.com/file/d/1hcfO5CfNmczgpg2h943ytwg9j0SR9Fas/view",target:"_blank",children:"Termos de condições"}),c.jsxs("p",{children:["Desenvolvido por ",c.jsx("b",{children:c.jsx("a",{href:"https://www.linkedin.com/in/aleph-ramos",target:"_blank",children:"Aleph"})})]})]})]})})};function yd(e){return Q({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.5 14.625c0 .995-.524 1.482-1.5 1.5H6c-.976-.018-1.5-.505-1.5-1.5s.524-1.482 1.5-1.5h12c.976.018 1.5.505 1.5 1.5m-1.5 2.25H6c-.976.018-1.5.505-1.5 1.5s.524 1.482 1.5 1.5h12c.976-.018 1.5-.505 1.5-1.5s-.524-1.482-1.5-1.5m3.75-8.248v-.001c-.976.017-1.5.504-1.5 1.499v8.25c0 .995.524 1.482 1.5 1.5v-.002c1.464-.052 2.25-1.514 2.25-4.498v-3.75c0-1.99-.786-2.964-2.25-2.998m-19.5-.001C.786 8.662 0 9.637 0 11.626v3.75c0 2.984.786 4.446 2.25 4.498v.001c.976-.017 1.5-.504 1.5-1.499v-8.25c0-.995-.524-1.482-1.5-1.5m19.5-.75c0-2.486-1.31-3.705-3.75-3.748v-.002H6v.002c-2.44.043-3.75 1.262-3.75 3.748v.001c1.464.026 2.25.757 2.25 2.249s.786 2.223 2.25 2.249v.001h10.5v-.001c1.464-.026 2.25-.757 2.25-2.249s.786-2.223 2.25-2.249z"},child:[]}]})(e)}function Gy(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.8 20l-12 -1.5c-1 -.1 -1.8 -.9 -1.8 -1.9v-9.2c0 -1 .8 -1.8 1.8 -1.9l12 -1.5c1.2 -.1 2.2 .8 2.2 1.9v12.1c0 1.2 -1.1 2.1 -2.2 1.9z"},child:[]},{tag:"path",attr:{d:"M12 5l0 14"},child:[]},{tag:"path",attr:{d:"M4 12l16 0"},child:[]}]})(e)}const jC=Wi`
  .swiper-button-next, .swiper-button-prev {
      color: white; 
      background-color: black;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      
      &:hover {
          background-color: white;
          color: black;
          transform: scale(1.05);
      }
  }
  .swiper-pagination-bullet {
      background: black;
      opacity: 0.7;
      &.swiper-pagination-bullet-active {
          background: #A5C933;
      }
  }
`,Yy=Vn`
  0% { border-radius: 0 30px 20px 0; }
  25% { border-radius: 20px 0 30px 20px; }
  50% { border-radius: 30px 20px 0 30px; }
  75% { border-radius: 30px 30px 20px 0; }
  100% { border-radius: 0 20px 30px 0; }
`,TC=k.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    border-radius: 25px 0 25px 0;
    background: linear-gradient(0deg, rgba(255, 255, 255, 1 ), rgba(0, 0, 0, 0)); 
    pointer-events: none;
    animation: ${Yy} 5s ease-in-out infinite;
    z-index: 1;

    @media (max-width: 768px){
        border-radius: 20px 0 20px 0;
        animation: none;
    }
`,CC=k.div`
  position: relative;
  width: 100%;
  height: 95vh;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  animation: ${Yy} 5s ease-in-out infinite;

  @media (max-width: 768px){
    animation: none!important;
    border-radius: 20px 0 20px 0;
    height: 80vh;
  }
`,kC=k.div`
  position: absolute;
  bottom: 30px;
  left: 20px;
  color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 90%;

  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 90%;
  }
`,EC=k.h2`
  font-size: 20px;
  font-weight: bold;
  font-family: var(--font--comfortaa);

  @media (max-width: 768px){
    font-family: var(--font--comfortaa);
    font-size: 1.4rem;
    font-weight: 800;
  }
`,zC=k.p`
  font-size: 13px;
  margin: 0px 0;
  font-family: var(--font--comfortaa);

  @media (max-width: 768px){
    font-size: 12px;
    font-weight: 200;
    width: 80%;
    line-height: 100%;
    font-family: var(--font--comfortaa);
    margin: 0;
  }
`,PC=k.div`
  display: flex;
  gap: 5px;
  margin-top: 5px;
  flex-wrap: wrap;
  margin-bottom: 10px;

  @media (max-width: 768px){
    gap: 6px;
  }

  span {
      display: flex;
      align-items: center;
      gap: 5px;
      background: rgba(0, 0, 0, 0.5);
      padding: 4px 8px;
      border-radius: 5px 0 5px 0;
      font-size: 10px;
      font-family: var(--font--comfortaa);

      @media (max-width: 768px){
        font-size: 10px;
        padding: 5px 8px;
        border-radius: 6px;
      }

      &:hover {
          color: black;
          background-color: white;
      }
  }

  svg {
      font-size: 12px;

      @media (max-width: 768px){
        font-size: 12px;
      }
  }
`,AC=k.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`,MC=({content:e=[],spaceBetween:t=10,autoplayDelay:n=3e3,showPagination:r=!0,showNavigation:i=!0})=>(Sl(),c.jsxs(AC,{children:[c.jsx(jC,{}),c.jsx(en,{modules:[gr,vr,Dn],navigation:i,pagination:!1,spaceBetween:t,loop:!0,slidesPerView:1,autoplay:{delay:n,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{640:{slidesPerView:1},1024:{slidesPerView:3}},children:e.map((o,a)=>c.jsxs(tn,{children:[c.jsx(TC,{}),c.jsx(CC,{style:{backgroundImage:`url(${o.backgroundImage})`},children:c.jsxs(kC,{"data-aos":"fade-down","data-aos-delay":"100",children:[c.jsx(EC,{children:o.title}),c.jsx(zC,{children:o.subtitle}),c.jsx(PC,{children:o.features.map((s,l)=>c.jsxs("span",{children:[s.icon," ",s.text]},l))}),c.jsx(uf,{onClick:()=>{const s=`/#/acomoda${o.id}`;window.location.href=s},text:"Conhecer essa acomodação",suiteId:o.id})]})})]},a))})]})),LC=Vn`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,Ky=k.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: fixed;
  bottom: 15px;
  left: 15px;
  overflow: hidden;
  transition: width 0.3s ease-in-out, border-radius 0.3s ease-in-out;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background-color: #00d757;
  z-index: 1000;
  animation: ${LC} .5s infinite;

  &:hover {
    width: 325px;
    border-radius: 40px;
  }

  &:active {
    transform: translate(2px, 2px);
  }
`,OC=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;  
  transition: width 0.3s ease-in-out;
`,IC=k.div`
  position: absolute;
  left: 0;  
  width: 0;
  opacity: 0;
  color: white;
  font-size: 1rem;
  font-weight: 300;
  transition: opacity 0.3s ease-in-out, width 0.3s ease-in-out;
  padding-left: 125px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font--comfortaa)!important;
  white-space: nowrap;

  ${Ky}:hover & {
    width: 70%;
    opacity: 1;
  }
`,Yr=()=>{const e="https://wa.link/dojlwi";return c.jsxs(Ky,{onClick:()=>window.open(e,"_blank"),children:[c.jsx(OC,{children:c.jsx($6,{color:"white",size:"30px"})}),c.jsx(IC,{children:"Fale com a central de reservas"})]})},RC=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/mulher-na-rede_bj91d1.webp",alt:"Mulher na rede",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/pousada-de-cima_hum4rw.webp",alt:"Foto da pousada le ange vista de cima",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/cachorro-na-piscina_mnkqrv.webp",alt:"2 cachorros na piscina",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331474/foto_da_pousada_da_serra_lefdif.webp",alt:"Foto da pousada vista de baixo",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/sala-de-estar_xuxiou.webp",alt:"Foto da sala de estar da pousada le ange serra",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731326209/cachorro-na-cama-no-mato_pa3yt6.webp",alt:"2 cachorros na cama no meio do quintal",loading:"lazy"}],VC=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327001/foto_da_pousada_e3djry.webp",alt:"Foto da pousada le ange mar",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327000/casal_na_rede_watzjg.webp",alt:"2 pessoas na rede na pousada le ange mar",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327001/churrasqueira_w7akaf.webp",alt:"Foto de churrasco",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327000/cachorro-olhando-para-camera_wpovwv.webp",alt:"Cachorro olhando para a câmera",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327001/pousada_de_cima_vpzpdb.webp",alt:"Pousada le ange mar vista de cima",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327001/sala-de-estar_blaa0x.webp",alt:"Sala de estar na le ange mar",loading:"lazy"}],DC=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731326209/mulher-na-rede_bj91d1.webp",alt:"Pessoa na rede",label:"Le Ange Serra",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731326209/cachorro-na-piscina_mnkqrv.webp",alt:"2 cachorros na piscina",label:"Le Ange Serra",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731326209/sala-de-estar_xuxiou.webp",alt:"Sala de estar na le ange serra",label:"Le Ange Serra",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731327605/sossego_1_jsshhu.webp",alt:"Hot Tube na le ange serra",label:"Le Ange Serra",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731327605/casal_comendo_no_mar_nkkwkl.webp",alt:"2 pessoas bebendo na le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731327605/sossego_d2asun.webp",alt:"2 pessoas na le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731327001/sala-de-estar_blaa0x.webp",alt:"Sala de estar da le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731327606/por_do_sol_wmwzur.webp",alt:"Por do sol na le ange",label:"Le Ange Serra",loading:"lazy"}],NC=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731328215/suite_ajrwh0.webp",alt:"Foto do quarto na le ange",label:"Le Ange Mar",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731328215/churrasqueira_feg3jy.webp",alt:"Foto de churrasqueira na le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731328214/cachorro_na_m%C3%A3o_kil7xk.webp",alt:"Cachorro com a cabeça recostada na mão do tutor",label:"Le Ange Serra",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731328214/mulher_e_cachorro_na_piscina_wwgxkq.webp",alt:"Uma pessoa e um cachorro na piscina",label:"Le Ange Serra",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731328214/2_ta%C3%A7as_ocgwdi.webp",alt:"2 taças com um fundo de por do sol",label:"Le Ange Mar",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731326209/cachorro-na-cama-no-mato_pa3yt6.webp",alt:"2 cachorros em uma cama no meio do jardim",label:"Le Ange Serra",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731328214/quadro_de_cachorro_s1mnbq.webp",alt:"Foto do quadro de cachorro na le ange mar",label:"Le Ange Serra",loading:"lazy"}],R0=k.section`
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 5%;

    &:nth-child(2){
        @media (max-width: 768px){
            flex-direction: column;
            position: relative!important;
            z-index: -100!important;
        
        }
    }

    @media (max-width: 768px){
        flex-direction: column-reverse;
        position: relative;
        z-index: -100!important;
    
        height: auto;

        .slider{
            width: 100%;    
        }
    }


`,FC=k.div`
    width: 100%;
    height: 160vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding: 0;

    @media (max-width: 768px){
        height: auto;
        padding: 10% 0;
        position: relative!important;
        z-index: 10!important; /* Isso aqui resolve o erro do botão e o carrossel não funcionar */
    
    }
`,BC=k.aside`
    & > h1 {
        font-family: var(--font--comfortaa);
        width: 100%;
        text-align: center;
        color: var(--color--black);
        font-weight: 200;

        & > b{
            font-weight: 300;
        }

        @media (max-width: 768px){
            font-size: 22px;
            width: 100%;
            margin-top: 0vh;
            height: auto;

        }
    }

    & > p {
        font-family: var(--font--comfortaa);
        width: 100%;
        text-align: center;
        color: var(--color--black);
        font-weight: 200;
        
        @media (max-width: 768px){
            font-size: 12px;
            margin-top: 10px;

        }
    }
`,$C=[{id:"Serra#suite1",title:"Suíte Superior 1",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328712/suiteSerra1_wm28o4.webp",features:[{icon:c.jsx(Ce,{}),text:"52m²"},{icon:c.jsx(lo,{}),text:"Ar condicionado"},{icon:c.jsx(Ne,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira"},{icon:c.jsx(Le,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(vt,{}),text:"Lareira"}]},{id:"Serra#suite6",title:"Suíte Master 6",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328713/suiteSerra2_aksiu9.webp",features:[{icon:c.jsx(Ce,{}),text:"77m²"},{icon:c.jsx(lo,{}),text:"Ar condicionado"},{icon:c.jsx(Ne,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira"},{icon:c.jsx(yd,{}),text:"Couch lounge"},{icon:c.jsx(Gy,{}),text:"Bay window"}]},{id:"Mar#suite6",title:"Suíte Standard 6",subtitle:"Pousada Le Ange Mar | Búzios - RJ",backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328711/suiteMar2_qlgel2.webp",features:[{icon:c.jsx(Ce,{}),text:"32m²"},{icon:c.jsx(lo,{}),text:"Ar condicionado"},{icon:c.jsx(Ne,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira"},{icon:c.jsx(Le,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(vt,{}),text:"Lareira"}]},{id:"Mar#suite2",title:"Suíte Standard 2",subtitle:"Pousada Le Ange Mar | Búzios - RJ",backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328711/suiteMar1_zu3lmc.webp",features:[{icon:c.jsx(Ce,{}),text:"30m²"},{icon:c.jsx(lo,{}),text:"Ar condicionado"},{icon:c.jsx(Ne,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira"},{icon:c.jsx(Le,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(vt,{}),text:"Lareira"}]},{id:"Serra#suite10",title:"Suíte Master 10",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731328711/1_e6cnxy.webp",features:[{icon:c.jsx(Ce,{}),text:"77m²"},{icon:c.jsx(lo,{}),text:"Ar condicionado"},{icon:c.jsx(Ne,{}),text:"Cama king size"},{icon:c.jsx(df,{}),text:"Recamier e poltrona de leitura"},{icon:c.jsx(yd,{}),text:"Couch lounge"},{icon:c.jsx(vt,{}),text:"Lareira"}]}],qC=k.section`
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 2.5% 5%;
    position: relative;
    
    &::before{
        content: '';
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.1);
        clip-path: polygon(1% 1%, 99% 1%, 99% 85%, 1% 85%);
    }

    @media (max-width: 768px){
        height: auto;
        padding: 10% 5%;
        gap: 25px;
        clip-path: polygon(2% 2%, 98% 2%, 98% 98%, 2% 98%);
    }
`,HC=[{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/cachorro_na_piscina_sjs7ft.webp",title:"100% Pet Friendly",description:"Não temos restrições quanto ao porte ou à raça do seu pet, nem cobramos taxas adicionais para a vinda deles. Na Le Ange, o seu pet tem total liberdade para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra e Mar"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329813/cachorro_na_praia_pmqyi4.webp",title:"Praia",description:"Para os amantes da praia, estamos localizados a apenas 150 metros da Praia Rasa, onde você e o seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327605/sossego_1_jsshhu.webp",title:"Sossego",description:"A área da sauna fica situada ao lado da mata, envolvida pelo som relaxante do rio que passa. Aqui, você pode desfrutar de um HotTub abastecido por água natural e aquecido à lenha, o combo perfeito para você relaxar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327001/pousada_de_cima_vpzpdb.webp",title:"Piscinas",description:"Nossa piscina aquecida possui um tratamento especial por ozônio com níveis baixíssimos de cloro - aqui, tudo é pensando para o bem-estar da sua pele a do seu pet também!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar e Serra"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/caf%C3%A9_da_manh%C3%A3_vaxwlf.webp",title:"Cozinha",description:"Na sua hospedagem, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Também, aceitamos todas as restrições alimentares para garantir que todos desfrutem da nossa gastronomia.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra e Mar"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329813/ofuros_kyjddp.webp",title:"Ofurôs",description:"São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/parc%C3%A3o_mdvo8p.webp",title:"Diversão",description:"Espaço de sobra para o seu pet se divertir! Espaço agility à beira do lago, com muita grama, para o seu pet, correr, pular, brincar e, claro, nadar!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329811/bar_xl6dvc.webp",title:"Bar",description:"Para completar ainda mais a sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329808/adega_uje7gn.webp",title:"Adega",description:"Para tornar a sua experiência ainda mais especial, contamos com uma adega subterrânea para a climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731329811/suites_pzghlo.webp",title:"Suítes",description:"Nossas suítes são, elegantemente, decoradas. Todas com vistas maravilhosas, banheira de imersão, cama king-size, varanda, ar-condicionado e frigobar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar e Serra"}],UC=k.div`
    height: 110vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    position: relative;

    @media (max-width: 768px){
        height: auto;
        padding: 10% 0;
    }

    &::before {
        background-image: url('../../../public/background/background_white.webp');
        background-position: center;
        background-size: contain;
        opacity: 0.1;
        width: 100%;
        margin-top: 10vh;
        border-radius: 0 0 100px 100px / 100px 100px;
        height: 90%;
        content: '';
        top: 0;
        left: 0;
        position: absolute;
    }

`,WC=k.h1`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: var(--font--comfortaa);
    color: var(--color--black);
    font-weight: 200;

    & > b{
        font-weight: 400;
    }

    @media (max-width: 768px){
        display: inline-block;
        font-size: 1.3rem;
        line-height: 110%;
        width: 95%;
        margin-left: 2.5%;
    }
`,qc=k.h1`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: var(--font--comfortaa);
    color: var(--color--black);
    font-size: 1.5rem;
    font-weight: 200;

    & > b{
        font-weight: 400;
    }

    @media (max-width: 768px){
        display: inline-block;
        font-size: 1.3rem;
        line-height: 110%;
        width: 100%;
        margin-left: 0%;
    }

`,qa=k.p`
    width: 100%;
    text-align: center;
    font-family: var(--font--comfortaa);
    color: var(--color--black);
    opacity: 0.7;
    font-family: 200;
    font-size: .9rem;

    @media (max-width: 768px){
        font-size: 0.9rem;
        margin-top: 5px;
    }
`,GC=[{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330263/frutos_do_mar1_ly3hq1.webp",title:"Frutos do mar",dateRange:"22/11/2024 até 24/11/2024 (2 diárias)",features:[{icon:c.jsx(fe,{}),text:"23/11 - Frutos do Mar"},{icon:c.jsx(zn,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(We,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"354,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330264/risotos_oj42yf.webp",title:"Noite de Risotos",dateRange:"29/11/2024 até 01/12/2024 (2 diárias)",features:[{icon:c.jsx(fe,{}),text:"30/11 - Noite de Risostos"},{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(We,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330265/pizzas_lgsqcd.webp",title:"Noite das pizzas",dateRange:"06/12/2024 até 08/12/2024 (3 diárias)",features:[{icon:c.jsx(fe,{}),text:"07/12 - Noite das pizzas"},{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(We,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330262/frutos_do_mar2_xyxatd.webp",title:"Frutos do Mar",dateRange:"13/12/2024 até 15/12/2024 (2 diárias)",features:[{icon:c.jsx(fe,{}),text:"14/12 - Frutos do Mar"},{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(We,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330263/fique3pague4_fiupcm.webp",title:"Fique 3 pague 4",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(zn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(We,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"538,90",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330266/natal_wrunee.webp",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(zn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(We,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"918,40",discount:25}],YC=k.section`
    height: 80vh;
    margin-bottom: 10vh;
    margin-top: 2.5vh;

    @media (max-width: 768px){
        height: auto;
        margin-bottom: 5vh;
        margin-top: 5vh;
    }
    
`,KC=k.section`
    width: 100%;
    height: 80vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5%;

    @media (max-width: 768px){
        height: auto;
        padding: 5% 2.5%;
    }
`,V0=k.b`
    color: var(--color--green);
`,Hc=k.b`
    color: var(--color--blue);
`,XC=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-top: -10vh;
    margin-bottom: 5vh;

    @media (max-width: 768px){
        margin-bottom: 5vh;
        margin-top: -5vh;
        height: 10vh;
    }
`,QC=()=>(_.useEffect(()=>{et.init({duration:1e3,once:!0})},[]),c.jsxs(c.Fragment,{children:[c.jsxs(Nr,{children:[c.jsx("title",{children:"Início - Pousada Le Ange"}),c.jsx("link",{rel:"icon",href:"https://res.cloudinary.com/dupg7clzc/image/upload/v1731429553/1_zzajkn.svg"})]}),c.jsx(D8,{}),c.jsx(Yr,{}),c.jsxs(FC,{containerAnimation:{opacity:0,scale:.8},titleAnimation:{opacity:0,y:-50},textAnimation:{opacity:0,x:50},buttonAnimation:{opacity:0,scale:.5},animationDuration:.7,children:[c.jsxs(BC,{children:[c.jsxs("h1",{"data-aos":"fade-up",children:["Pousada",c.jsx(Hc,{children:" 100% Pet Friendly"})," que aceita humanos de estimação"]}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"200",children:"Duas unidades, dois refúgios únicos"})]}),c.jsxs(R0,{"data-aos":"fade-up",children:[c.jsx(L0,{content:RC,spaceBetween:20,slidesPerView:1,height:"60vh",contentType:"image",showPagination:!1}),c.jsx(I0,{title:"Le Ange Serra - Miguel Pereira RJ",text:"Na Le Ange Serra, costumamos dizer que a hospedagem é muito mais do que um final de semana para relaxar. É uma experiência única ao lado do seu pet entre as belezas naturais da Mata Atlântica, para que você colecione os melhores momentos ao lado dele!",borderColor:"var(--color--green)",borderRadius:"30px",buttonColor:"var(--color--green)",buttonBorder:"1px solid var(--color--black)",targetPage:"/serra"})]}),c.jsxs(R0,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(I0,{title:"Le Ange Mar - Búzios RJ",text:"Situada no coração do Arpoador da Praia Rasa, na Le Ange Mar, oferecemos uma experiência memorável, onde a praia está a poucos passos da pousada e o seu pet é, calorosamente, recebido para momentos especiais à beira-mar.",borderColor:"var(--color--blue)",borderRadius:"30px",buttonColor:"var(--color--blue)",buttonBorder:"1px solid var(--color--black)",targetPage:"/mar"}),c.jsx(L0,{content:VC,spaceBetween:20,slidesPerView:1,width:"60%",height:"60vh",contentType:"image",showPagination:!1})]})]}),c.jsxs(qC,{children:[c.jsxs("div",{children:[c.jsxs(WC,{"data-aos":"fade-up",children:["Nossas suítes ",c.jsx(V0,{children:"mais procuradas"})," "]}),c.jsx(qa,{"data-aos":"fade-up","data-aos-delay":"200",children:"Já consegue se imaginar dormindo aqui ao lado do seu pet?"})]}),c.jsx(MC,{content:$C})]}),c.jsxs(UC,{children:[c.jsxs("div",{children:[c.jsxs(qc,{"data-aos":"fade-up",children:["Mais que Pet Friendly, ",c.jsx(Hc,{children:"Pet Lovers"})]}),c.jsx(qa,{"data-aos":"fade-up","data-aos-delay":"200",children:"Venha viver essa experiência"})]}),c.jsx(QT,{content:HC,spaceBetween:20,width:"100%",height:"70vh",showPagination:!1,showNavigation:!0})]}),c.jsxs("div",{children:[c.jsxs(qc,{"data-aos":"fade-up",children:[" ",c.jsx(V0,{children:"Viva"})," essa experiência "]}),c.jsx(qa,{"data-aos":"fade-up","data-aos-delay":"200",children:"Alguns dos nossos momentos"})]}),c.jsxs(YC,{"data-aos":"fade-in",children:[c.jsx(xd,{images:DC}),c.jsx(xd,{images:NC,reverse:!0})]}),c.jsx(XC,{children:c.jsx(Tt,{text:"Fazer minha reserva!"})}),c.jsxs("div",{children:[c.jsxs(qc,{"data-aos":"fade-up",children:["Conheça nossos pacotes e ",c.jsx(Hc,{children:"noites especiais"})," "]}),c.jsx(qa,{"data-aos":"fade-up","data-aos-delay":"200",children:"Estamos te esperando!"})]}),c.jsx(KC,{"data-aos":"fade-in","data-aos-delay":"250",children:c.jsx(pf,{events:GC})}),c.jsx(Yi,{})]}));function D0(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 9h-1.42l-3.712-6.496-1.736.992L17.277 9H6.723l3.146-5.504-1.737-.992L4.42 9H3a1.001 1.001 0 0 0-.965 1.263l2.799 10.264A2.005 2.005 0 0 0 6.764 22h10.473c.898 0 1.692-.605 1.93-1.475l2.799-10.263A.998.998 0 0 0 21 9zm-3.764 11v1-1H6.764L4.31 11h15.38l-2.454 9z"},child:[]},{tag:"path",attr:{d:"M9 13h2v5H9zm4 0h2v5h-2z"},child:[]}]})(e)}function ZC(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m16.895 6.519 2.813-2.812-1.414-1.414-2.846 2.846a6.575 6.575 0 0 0-.723-.454 5.778 5.778 0 0 0-5.45 0c-.25.132-.488.287-.722.453L5.707 2.293 4.293 3.707l2.813 2.812A8.473 8.473 0 0 0 5.756 9H2v2h2.307c-.065.495-.107.997-.107 1.5 0 .507.042 1.013.107 1.511H2v2h2.753c.013.039.021.08.034.118.188.555.421 1.093.695 1.6.044.081.095.155.141.234l-2.33 2.33 1.414 1.414 2.11-2.111a7.477 7.477 0 0 0 2.068 1.619c.479.253.982.449 1.496.58a6.515 6.515 0 0 0 3.237.001 6.812 6.812 0 0 0 1.496-.58c.465-.246.914-.55 1.333-.904.258-.218.5-.462.734-.716l2.111 2.111 1.414-1.414-2.33-2.33c.047-.08.098-.155.142-.236.273-.505.507-1.043.694-1.599.013-.039.021-.079.034-.118H22v-2h-2.308c.065-.499.107-1.004.107-1.511 0-.503-.042-1.005-.106-1.5H22V9h-3.756a8.494 8.494 0 0 0-1.349-2.481zM8.681 7.748c.445-.558.96-.993 1.528-1.294a3.773 3.773 0 0 1 3.581 0 4.894 4.894 0 0 1 1.53 1.295c.299.373.54.8.753 1.251H7.927c.214-.451.454-.879.754-1.252zM17.8 12.5c0 .522-.042 1.044-.126 1.553-.079.49-.199.973-.355 1.436a8.28 8.28 0 0 1-.559 1.288 7.59 7.59 0 0 1-.733 1.11c-.267.333-.56.636-.869.898-.31.261-.639.484-.979.664s-.695.317-1.057.41c-.04.01-.082.014-.122.023V14h-2v5.881c-.04-.009-.082-.013-.122-.023-.361-.093-.717-.23-1.057-.41s-.669-.403-.978-.664a6.462 6.462 0 0 1-.871-.899 7.402 7.402 0 0 1-.731-1.108 8.337 8.337 0 0 1-.56-1.289 9.075 9.075 0 0 1-.356-1.438A9.61 9.61 0 0 1 6.319 11H17.68c.079.491.12.995.12 1.5z"},child:[]}]})(e)}function N0(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.004 7.975V6c0-2.206-1.794-4-4-4h-10c-2.206 0-4 1.794-4 4v1.998l-.076.004A1 1 0 0 0 2 9v2a1 1 0 0 0 1 1h.004v6c0 .735.403 1.372.996 1.72V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h10v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.276A1.994 1.994 0 0 0 21.004 18v-6a1 1 0 0 0 1-1V9.062a1.006 1.006 0 0 0-.072-.455c-.203-.487-.635-.604-.928-.632zM19.006 18H5.004v-5h14.001l.001 5zM11.004 7v4h-6V7h6zm8 0v4h-6V7h6zm-12-3h10c.736 0 1.375.405 1.722 1H5.282c.347-.595.986-1 1.722-1z"},child:[]},{tag:"circle",attr:{cx:"7.5",cy:"15.5",r:"1.5"},child:[]},{tag:"circle",attr:{cx:"16.5",cy:"15.5",r:"1.5"},child:[]}]})(e)}function JC(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 8c-2.168 0-4 1.832-4 4s1.832 4 4 4 4-1.832 4-4-1.832-4-4-4zm0 6c-1.065 0-2-.935-2-2s.935-2 2-2 2 .935 2 2-.935 2-2 2z"},child:[]},{tag:"path",attr:{d:"M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 18V7h3c.266 0 .52-.105.707-.293L10.414 4h3.172l2.707 2.707A.996.996 0 0 0 17 7h3l.002 11H4z"},child:[]}]})(e)}function ek(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"},child:[]}]})(e)}function tk(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.787 9.023c-.125.027-1.803.418-3.953 1.774-.323-1.567-1.279-4.501-4.108-7.485L12 2.546l-.726.767C8.435 6.308 7.483 9.25 7.163 10.827 5.005 9.448 3.34 9.052 3.218 9.024L2 8.752V10c0 7.29 3.925 12 10 12 5.981 0 10-4.822 10-12V8.758l-1.213.265zM8.999 12.038c.002-.033.152-3.1 3.001-6.532C14.814 8.906 14.999 12 15 12v.125a18.933 18.933 0 0 0-3.01 3.154 19.877 19.877 0 0 0-2.991-3.113v-.128zM12 20c-5.316 0-7.549-4.196-7.937-8.564 1.655.718 4.616 2.426 7.107 6.123l.841 1.249.825-1.26c2.426-3.708 5.425-5.411 7.096-6.122C19.534 15.654 17.304 20 12 20z"},child:[]}]})(e)}function F0(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.832 4.555A1 1 0 0 0 20 3H4a1 1 0 0 0-.832 1.554L11 16.303V20H8v2h8v-2h-3v-3.697l7.832-11.748zm-2.7.445-2 3H7.868l-2-3h12.264z"},child:[]}]})(e)}function Ke(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18 2H6c-1.103 0-2 .897-2 2v5h4V6h2v3h10V4c0-1.103-.897-2-2-2zm-8 13H8v-5H4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V10H10v5z"},child:[]}]})(e)}function B0(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"},child:[]}]})(e)}const nk=Wi`
.swiper-button-next, .swiper-button-prev {
        color: var(--color--white); 
        background-color: var(--color--black);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        transition: all .2s;

        @media (max-width: 768px){
            z-index: 1000;
        }

        &:hover {
            background-color: var(--color--white);
            color: var(--color--black);
            transform: scale(1.05);
        }

        &:after {
            font-size: 20px;
        }
    }
    .swiper-pagination-bullet {
        background: var(--color--black);
        opacity: 0.7;
        width: 12px;
        height: 12px;
        margin: 0 5px;
        &.swiper-pagination-bullet-active {
            background: #A5C933;
            opacity: 1;
        }
    }
`,rk=Vn`
  0% {
    border-radius: 0 60px 20px 0;
  }
  25% {
    border-radius: 20px 0 60px 20px;
  }
  50% {
    border-radius: 60px 20px 0 60px;
  }
  75% {
    border-radius: 60px 60px 20px 0;
  }
  100% {
    border-radius: 0 20px 60px 0;
  }
`,ik=k(Oe.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px 0 30px 0;

    @media (max-width: 768px){
        border-radius: 0 15px 0 20px;
    }
`,ok=k(Oe.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  animation: ${rk} 5s ease-in-out infinite;
  background-image: ${({backgroundImage:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,ak=k(Oe.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 4px;
    border-radius: inherit;
    background: linear-gradient(45deg, #00000080, #0001);
    -webkit-mask-image: linear-gradient(#fff, #fff);
    mask-image: linear-gradient(#fff, #fff);
    pointer-events: none;
`,sk=k(Oe.div)`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--color--white);
    font-family: Arial, sans-serif;
`,lk=k(Oe.h2)`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
`,ck=k(Oe.p)`
    font-size: 16px;
    margin: 5px 0;
    font-family: var(--font--avenir);
`,uk=k(Oe.div)`
    display: flex;
    gap: 8px;
    margin-top: 10px;
    flex-wrap: wrap;

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        background: rgba(0, 0, 0, 0.5);
        padding: 5px 10px;
        border-radius: 12px;
        font-size: 12px;
        transition: all .2s ease;
        
        &:hover {
            color: var(--color--black);
            background-color: var(--color--white);
            cursor: default;
        }
    }

    svg {
        font-size: 16px;
    }
`,dk=k.div`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;

    @media (max-width: 640px) {
        max-width: 100%;
    }
`,$0=({content:e=[],contentType:t="image",spaceBetween:n=10,slidesPerView:r=1,height:i="300px",autoplayDelay:o=3e3,showPagination:a=!0,showNavigation:s=!0})=>{const{scrollY:l}=A6(),u=Da(l,[0,300],[0,-30]),d=Da(l,[0,300],[0,-20]),p=Da(l,[0,300],[0,-10]),f=Da(l,[0,300],[0,-5]);return c.jsxs(dk,{children:[c.jsx(nk,{}),c.jsx(en,{modules:[gr,vr,Dn],navigation:s,pagination:a?{clickable:!0}:!1,spaceBetween:n,loop:!0,slidesPerView:r,autoplay:{delay:o,disableOnInteraction:!1,pauseOnMouseEnter:!0},style:{height:i},breakpoints:{640:{slidesPerView:1,spaceBetween:10,height:"200px"},768:{slidesPerView:1,spaceBetween:20,height:"250px"},1024:{slidesPerView:1,spaceBetween:30,height:"300px"}},children:e.map((g,x)=>c.jsx(tn,{children:t==="image"?c.jsx(ik,{src:g.src,alt:g.alt||`Slide ${x+1}`,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.7,ease:"easeOut"}}):c.jsxs(ok,{backgroundImage:g.backgroundImage,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:[c.jsx(ak,{}),c.jsxs(sk,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.3,ease:"easeOut"},children:[c.jsx(lk,{style:{y:u},children:g.title}),c.jsx(ck,{style:{y:d},children:g.subtitle}),c.jsx(uk,{style:{y:p},children:g.features.map((y,b)=>c.jsxs("span",{children:[y.icon," ",y.text]},b))}),c.jsx(uf,{text:"Conhecer todas as acomodações",style:{y:f}})]})]})},x))})]})},pk=k.div`
    height: 15vh;

    @media (max-width: 768px){
        height: 0;
    }
`,fk=k.section`
    width: 100%;
    height: 85vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px){
        flex-direction: column-reverse;
        height: auto;
    }

    & > div:nth-child(1){
        width: 45%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 50px;
        align-items: flex-start;

        @media (max-width: 768px){
            width: 100%;
            gap: 30px;
            align-items: center;
            height: auto;
            position: relative;
        }

        & > h1{
            font-size: 3.5rem;
            width: 100%;
            line-height: 100%;
            font-family: var(--font--comfortaa);
            color: var(--color--black);
            font-weight: 100;

            @media (max-width: 768px){
                font-size: 1.8rem;
                text-align: center;
                margin-top: 55vh;
            }

            & > b{
                font-weight: 100;
            }

            & > b > a{
                text-decoration: none;
                transition: all .2 ease-in-out;
            }

            & > b > a:hover{
                opacity: 0.8;
                border: 1px solid;
                padding: 0 5px;
            }

            & > b:nth-child(1) > a{
                color: var(--color--green);
            }

            & > b:nth-child(n + 2) > a{
                color: var(--color--blue);
            }
        }

        & > p{
            font-family: var(--font--comfortaa);
            font-size: 1rem;
            color: var(--color--black);
            width: 80%;
            line-height: 120%;
            font-weight: 100;

            @media (max-width: 768px){
                font-size: 1rem;
                text-align: center;
                width: 90%;
            }
        }
    }

    & > div:nth-child(2){
        width: 55%;
        height: 90%;

        @media (max-width: 768px){
            width: 100%;
            position: absolute;
            top: 0;
            height: 50vh;
            z-index: -1;
        }

        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 100px 20px 50px 20px;

            @media (max-width: 768px){
                border-radius: 0 0 50px 50px;
                border-image: fill 0 linear-gradient(#0001, #ffffff);
            }
        }
    }
`,q0=k.section`
    width: 90%;
    margin-left: 5%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;


    @media (max-width: 768px){
        height: auto;
        padding: 7% 2.5%;
        margin-left: 0;
        width: 100%;
    }
`,hk=k.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 5%;
    align-items: center;
    justify-content: center;
    display: none;

    @media (max-width: 768px){
        height: auto;
        padding: 5% 5%;
    }

    & > div:nth-child(1){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px){

        }

        & > h1 {
            font-family: var(--font--comfortaa);
            font-size: 2rem;
            color: var(--color--black);
            font-weight: 400;

            @media (max-width: 768px){
                font-size: 1.6rem;
            }
        }
        
    }

    & > div:nth-child(2){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80vh;
        gap: 50px;

        @media (max-width: 768px){

            flex-direction: column;
            height: auto;   
        }

        & > div{
            width: 50%;
            height: 100%;
            padding: 50px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: column;

            @media (max-width: 768px){
                width: 100%;
                align-items: center;
                padding: 40px;
                gap: 20px;
                border-radius: 25px 0 25px 0!important;
                border-image: fill 0 linear-gradient(#0001, #ffffff80);
            }

            & > span{
                width: 100%;
                font-family: var(--font--comfortaa);
                font-size: 1.5em;
                font-weight: 600;
                color: var(--color--white);

                @media (max-width: 768px){
                    font-size: 1.3rem;
                    text-align: center;
                    width: 100%;
    
                }
            }

            & > div{
                display: flex;
                align-items: flex-start;
                justify-items: center;
                flex-direction: column;
                gap: 30px;

                @media (max-width: 768px){
                    align-items: center;
    
                }

                & > p{
                    color: var(--color--white);
                    font-family: var(--font--comfortaa);
                    line-height: 100%;

                    @media (max-width: 768px){
                        text-align: justify;
                        font-size: .9rem;
                    }
                }
            }

        }

        & > div:nth-child(1){
            border-radius: 0px 50px 0px 40px;
            background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730121191/mar1_lhebdi.webp');
            background-size: cover;
            background-position: center;
            
        }

        & > div:nth-child(2){
            border-radius: 40px 0px 50px 0px;
            background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1729513693/9_hyv1zq.jpg');
            background-size: cover;
            background-position: center;
        }
    }
`,mk=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343406/espaco10_zbobfs_kgmqz5.jpg",alt:"Cadeira customizada para casamento na le ange",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343109/espaco6_dfprnt-compressed_zrduvr.jpg",alt:"Foto do bolo de casamento na pousada le ange",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343120/espaco1_e9bneq-compressed_ch0xzx.jpg",alt:"Foto de uma fogueira na pousada le ange",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343114/espaco4_wmcp95-compressed_yv3qly.jpg",alt:"Espaço de comer na pousada le ange em casamentos",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343116/espaco3_awfzgo-compressed_evyhwv.jpg",alt:"Champagne na pousada le ange",loading:"lazy"}],gk=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343404/espaco9_ldc1oy_uqmmwu.jpg",alt:"Cadeiras para casamento na pousada le ange",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343403/espaco8_pzjgiz_gittbv.jpg",alt:"Noivos se casando na pousada le ange",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343118/espaco2_twf5e1-compressed_itpmkk.jpg",alt:"Comida do casamento na pousada le ange",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343112/espaco5_gzy5ng-compressed_gjqaig.jpg",alt:"Imagem do bar no casamento da pousada le ange",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731343107/espaco7_nlscx5-compressed_horerr.jpg",alt:"Casamento fotos pousada le ange",loading:"lazy"}],vk=k.section`
    width: 100%;
    height: 100vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    background-color: rgba(0, 0, 0, 0.1);

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        padding: 5% 2.5%;
    }

    & > div{
        width: 45%;
        height: 90%;
    

        @media (max-width: 768px){
            width: 100%;
            height: 40vh;
        }

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 70px 20px 40px 10px;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);

            @media (max-width: 768px){
                border-radius: 25px 0 25px 0; 
                position: absolute;
                height: 50vh;
                width: 95%;
                z-index: 1;
            }
        }

        & > div {
            width: 100%;
            height: 35%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        

            & > img {
                width: 32%;
                height: 100%;
                object-fit: cover;
                border-radius: 20px 0 20px 0;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

                @media (max-width: 768px){
                    height: 15vh;
                    margin-top: 15px;
                    border-radius: 10px 0 10px 0;
                }
            }
        }
    }

    & > div:nth-child(2){
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 55%;
        align-items: flex-start;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 20px 30px 20px 0px;
        background-color: var(--color--white);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.3);
    

        @media (max-width: 768px){
            align-items: center;
            width: 100%;
            margin-top: -20px;
            height: auto;
            gap: 15px;
        }

        & > h1{
            font-size: 2.2rem;
            font-family: var(--font--comfortaa);
            font-weight: 100;
            color: var(--color--black);

            @media (max-width: 768px){
                background-color: var(--color--white);
                margin-top: 12px;
                padding: 5px 15px;
                color: var(--color--black);
                border-radius: 5px 15px 0 0;
                font-size: 1.6rem;
                position: relative;
                z-index: 2;
            }
        }

        & > p{
            font-size: 1rem;
            font-family: var(--font--comfortaa);
            width: 70%;
            line-height: 120%;
            font-weight: 100;

            @media (max-width: 768px){
                font-family: var(--font--comfortaa);
                width: 100%;
                font-size: 1rem;
                margin-top: 5px;
                margin-bottom: 10px;
                color: var(--color--black);
                text-align: center;
                font-weight: 800;
            }
        }

        & > ol{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            gap: 5px;
            
            @media(max-width: 768px){
                margin-bottom: 10px;
            }
        
        }
        
    }
`,ft=k.div`
    border: 1px solid rgba(0, 0, 0, 0.2);
    display: inline-flex;
    padding: 4px 8px;
    align-items: center;
    justify-content: flex-start;
    width: auto;
    gap: 10px;
    border-radius: 0 10px 0 10px;
    font-size: .75rem;
    transition: all .2s ease;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(20px);
    font-family: var(--font--comfortaa);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);

    @media (max-width: 768px){
        font-size: .8rem;
        padding: 7px 10px;
        gap: 10px;
    }

    &:hover{
        padding: 5px 9px;
        background-color: var(--color--black);
        color: var(--color--white);
        cursor: default;
    }
`,xk=k.section`
    width: 100%;
    height: 100vh;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    background-color: var(--color--white);


    @media (max-width: 768px){
        height: auto;
        flex-direction: column-reverse;
        padding: 5% 2.5%;
    }

    & > div{
        width: 45%;
        height: 90%;
    

        @media (max-width: 768px){
            width: 100%;
            height: 40vh;
        }

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px 80px 40px 60px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

            @media (max-width: 768px){
                border-radius: 25px 0 25px 0; 
                position: absolute;
                height: 50vh;
                width: 95%;
                z-index: 1;
            }
        }

        & > div {
            width: 100%;
            height: 35%;
            display: flex;
            align-items: center;
            justify-content: space-between;


            & > img {
                width: 32%;
                height: 100%;
                object-fit: cover;
                border-radius: 30px 0 30px 0;
            
                box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);

                @media (max-width: 768px){
                    height: 15vh;
                    margin-top: 15px;
                    border-radius: 10px 0 10px 0;
                }
            }
        }
    }

    & > div:nth-child(1){
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 30px 10px 40px 0px;
        width: 55%;
    

        @media (max-width: 768px){
            align-items: center;
            width: 100%;
            margin-top: -25px;
            height: auto;
            gap: 15px;
        }

        & > h1{
            font-size: 2.2rem;
            font-family: var(--font--comfortaa);
            font-weight: 100;
            color: var(--color--black);

            @media (max-width: 768px){
    
                background-color: var(--color--white);
                margin-top: 20px;
                padding: 5px 15px;
                color: var(--color--black);
                border-radius: 5px 15px 0 0;
                font-size: 1.6rem;
                position: relative;
                z-index: 2;
            }
        }

        & > p{
            font-size: 1.1rem;
            font-family: var(--font--comfortaa);
            width: 70%;
            line-height: 100%;
        
            font-weight: 100;

            @media (max-width: 768px){
                font-family: var(--font--comfortaa);
                width: 100%;
                font-size: 1rem;
                margin-top: 5px;
                margin-bottom: 10px;
                color: var(--color--black);
                text-align: center;
                font-weight: 800;
            }
        }

        & > ol{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            gap: 5px;

            @media(max-width: 768px){
                margin-bottom: 10px;
            }
        
        }

        
    }
`,yk=()=>(_.useEffect(()=>{et.init({duration:1e3,once:!1}),et.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsxs(Nr,{children:[c.jsx("title",{children:"Eventos - Pousada Le Ange"}),c.jsx("link",{rel:"icon",href:"https://res.cloudinary.com/dupg7clzc/image/upload/v1731429565/5_qchldm.svg"})]}),c.jsx(pk,{}),c.jsx(Yr,{}),c.jsxs(fk,{children:[c.jsxs("div",{children:[c.jsxs("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:["Do alto da ",c.jsx("b",{children:c.jsx("a",{href:"#/serra",children:"Serra"})}),",",c.jsx("br",{})," às ondas do ",c.jsx("b",{children:c.jsx("a",{href:"#/mar",children:"Mar"})})]}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"200",children:"Venha celebrar na LeAnge, onde o amor pelos pets encontra o cenário perfeito para os seus eventos."}),c.jsx(Tt,{"data-aos":"fade-up","data-aos-delay":"300",onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer meu evento"})]}),c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342456/home_df8ub0_rqju2u.webp",alt:"foto da home da página de eventos","data-aos":"fade-left","data-aos-delay":"150"})})]}),c.jsx(q0,{"data-aos":"fade-up","data-aos-delay":"100",children:c.jsx($0,{content:mk,spaceBetween:20,slidesPerView:1,width:"100%",height:"90vh",contentType:"image",showPagination:!0})}),c.jsxs(hk,{children:[c.jsx("div",{children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Sobre nós"})}),c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("span",{children:"Le Ange Serra - Miguel Pereira/RJ"}),c.jsxs("div",{children:[c.jsx("p",{children:"Fundada em 2018, a Pousada LeAnge nasceu da paixão dos seus fundadores pelo amor aos pets, bem-estar e hospitalidade. Localizada em Miguel Pereira, a LeAnge Serra proporciona uma experiência única na região serrana do Rio de Janeiro, sendo um verdadeiro refúgio entre as belezas naturais da Mata Atlântica."}),c.jsx(Tt,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva"})]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Le Ange Serra - Miguel Pereira/RJ"}),c.jsxs("div",{children:[c.jsx("p",{children:"Fundada em 2018, a Pousada LeAnge nasceu da paixão dos seus fundadores pelo amor aos pets, bem-estar e hospitalidade. Localizada em Miguel Pereira, a LeAnge Serra proporciona uma experiência única na região serrana do Rio de Janeiro, sendo um verdadeiro refúgio entre as belezas naturais da Mata Atlântica."}),c.jsx(Tt,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva"})]})]})]})]}),c.jsxs(vk,{children:[c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342454/11_gzr6ei_ikd2hm.webp",alt:"foto do casamento","data-aos":"zoom-in","data-aos-delay":"100"})}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"200",children:"Pré-Wedding"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"200",children:"Coração palpitando, emoções à flor da pele e a certeza de dias inesquecíveis."}),c.jsxs("ol",{children:[c.jsxs(ft,{"data-aos":"fade-up","data-aos-delay":"50",children:[c.jsx(F0,{}),"Coquetel na Chegada (Sexta-feira)"]}),c.jsxs(ft,{"data-aos":"fade-up","data-aos-delay":"100",children:[c.jsx(B0,{}),"Noite Especial no Sábado"]}),c.jsxs(ft,{"data-aos":"fade-up","data-aos-delay":"150",children:[c.jsx(JC,{}),"Ensaio Fotográfico dos Noivos"]}),c.jsxs(ft,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(ek,{}),"Decoração Romântica na Suíte"]}),c.jsxs(ft,{"data-aos":"fade-up","data-aos-delay":"250",children:[c.jsx(N0,{}),"Massagem Relaxante"]}),c.jsxs(ft,{"data-aos":"fade-up","data-aos-delay":"300",children:[c.jsx(ZC,{}),"Passeio de Bugre"]}),c.jsxs(ft,{"data-aos":"fade-up","data-aos-delay":"350",children:[c.jsx(D0,{}),"Piquenique para os Noivos"]}),c.jsxs(ft,{"data-aos":"fade-up","data-aos-delay":"400",children:[c.jsx(o0,{}),"Late Checkout no Domingo"]})]}),c.jsx(Tt,{text:"Fazer reserva"}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342448/7_sgewp5_rx9vfw.webp",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342452/10_deybdj_khogtb.webp",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"200"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342450/9_eavaty_zcw9bc.webp",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"300"})]})]})]}),c.jsxs(xk,{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Aniversário"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"200",children:"Comemore os momentos doces da vida."}),c.jsxs("ol",{children:[c.jsxs(ft,{"data-aos":"fade-up","data-aos-delay":"50",children:[c.jsx(F0,{}),"Coquetel na Chegada (Sexta-feira)"]}),c.jsxs(ft,{"data-aos":"fade-up","data-aos-delay":"100",children:[c.jsx(B0,{}),"Noite Especial no Sábado"]}),c.jsxs(ft,{"data-aos":"fade-up","data-aos-delay":"150",children:[c.jsx(tk,{}),"Massagem Relaxante"]}),c.jsxs(ft,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(N0,{}),"Passeio de Bugre"]}),c.jsxs(ft,{"data-aos":"fade-up","data-aos-delay":"250",children:[c.jsx(D0,{}),"Piquenique"]}),c.jsxs(ft,{"data-aos":"fade-up","data-aos-delay":"300",children:[c.jsx(o0,{}),"Late Checkout no Domingo"]})]}),c.jsx(Tt,{text:"Fazer reserva"}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342464/niver5_vqhh94_pitqka.webp",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342462/niver3_katslf_fapku3.webp",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"200"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342460/niver2_rb3hvs_nofpdf.webp",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"300"})]})]}),c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731342458/niver1_zyq8zi_gandzx.webp",alt:"foto de aniversário","data-aos":"zoom-in","data-aos-delay":"200"})})]}),c.jsx(q0,{"data-aos":"fade-up","data-aos-delay":"100",children:c.jsx($0,{content:gk,spaceBetween:20,slidesPerView:1,width:"100%",height:"90vh",contentType:"image",showPagination:!0})}),c.jsx(Yi,{})]})),Xy=k.button`
  background: ${e=>e.backgroundColor||"transparent"};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-family: var(--font--comfortaa);
  padding: 2px 15px;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border-radius: 25px;
  outline: none;
  overflow: hidden;
  color: ${e=>e.textColor||"#000"};
  border: 1px solid ${e=>e.borderColor||"#000"};
  transition: color 0.3s 0.1s ease-out;
  text-align: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    content: "";
    border-radius: 50%;
    display: block;
    width: 20em;
    height: 20em;
    left: -5em;
    transition: box-shadow 0.5s ease-out;
    z-index: -1;
  }

  &:hover {
    color: ${({hoverColor:e})=>e||""};
    border: 1px solid ${e=>e.hoverBorderColor||e.borderColor||"#000"};
  }

  &:hover::before {
    box-shadow: inset 0 0 0 10em ${e=>e.hoverBackgroundColor||e.borderColor||"#000"};
  }
`,wk=k(RT)`
  color: ${e=>e.iconColor||"currentColor"};
  height: 20px;
  width: 20px;
  transition: color 0.3s ease;

  ${Xy}:hover & {
    color: ${e=>e.hoverIconColor||e.iconColor||"currentColor"};
  }
`,bk=k.span`
  margin: 10px;
`,Ki=({text:e="Fazer reserva agora!",textColor:t,backgroundColor:n,borderColor:r,iconColor:i,hoverIconColor:o,hoverBackgroundColor:a,hoverBorderColor:s,hoverColor:l,onClick:u})=>c.jsxs(Xy,{onClick:u,textColor:t,backgroundColor:n,borderColor:r,hoverBackgroundColor:a,hoverBorderColor:s,hoverColor:l,children:[c.jsx(wk,{iconColor:i,hoverIconColor:o}),c.jsx(bk,{children:e})]}),Sk=k.section`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
    }

    & > div:nth-child(1){
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 20px;
        padding: 0 0 0 5%;


        @media (max-width: 768px){
            width: 100%;
            gap: 50px;
            padding: 0 5%;

        }

        & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);
    
            font-weight: 100;

            @media (max-width: 768px){
                font-size: 30px;
                text-align: center;
                width: 100%;
                font-size: 1.6rem;
                margin-top: 12vh;
            }
        }

        & > h4 {
            font-family: var(--font--comfortaa);
            color: var(--color--black);
            font-weight: 100;
            margin-top: -20px;
            font-size: 1.2rem;
    

            @media (max-width: 768px){
                margin-top: -50px;
                font-size: 12px;
                text-align: center;
                width: 100%;
            }
        }

        & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
            font-size: .9rem;
            font-weight: 100;
            line-height: 120%;

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
                margin-top: -25px;
                font-size: 14px;
            }
        }
    }

    & > div:nth-child(2){
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;


        @media (max-width: 768px){
            width: 100%;
            height: auto;

            display: none;
        }

        &::before {
            width: 100%;
            height: 40%;
            content: '';
            bottom: 0;
            right: 0;
            position: absolute;
            background-color: var(--color--blue);
            border-radius: 100px 0 0 50px;
            z-index: -1;
    

            @media (max-width: 768px){
                border-radius: 70px 0 0 25px;
                width: 95%;
            }
        }

        & > img {
            width: 100%;
            height: 100%;
            filter: drop-shadow(5px 0px 2px rgba(0, 0, 0, 0.2));
            object-fit: contain;
    

            @media (max-width: 768px){
                filter: drop-shadow(5px 0px 2px rgba(0, 0, 0, 0.2));
            }
        }
    }
`,_k=k.div`
    height: 15vh;

    @media (max-width: 768px){
        height: 0;
    }
`,jk=k.section`
    width: 100%;
    height: 80vh;
    margin-top: 10vh;
    padding: 0% 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;

    @media (max-width: 768px){
        flex-direction: column;
        height: auto;
        gap: 30px;
        padding: 0 5%;
        margin-top: 5vh;
    }

    & > div:nth-child(1){
        max-width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;


        @media (max-width: 768px){
            max-width: 100%;
            height: 30vh;
            gap: 10px;
        }

        & > img:nth-child(1){
            width: 60%;
            height: 100%;
            border-radius: 20px 0 20px 0;
            object-fit: cover;
    

            @media (max-width: 768px){
                width: 48%;
                height: 100%;
                border-radius: 10px 0 10px 0;
            }
        }

        & > img:nth-child(2){
            width: 40%;
            height: 100%;
            border-radius: 0px 20px 0px 20px;
            object-fit: cover;

            @media (max-width: 768px){
                width: 48%;
                height: 100%!important;
                object-fit: cover;
                border-radius: 0px 10px 0 10px;
    
            }
        }
    }

    & > div:nth-child(2){
        width: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 20px;


        @media (max-width: 768px){
            width: 100%;
            height: 50%;
            gap: 40px;
        }

        & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--green);
    
            font-weight: 100;

            @media (max-width: 768px){
                width: 100%;
                font-size: 28px;
                text-align: center;
            }

        }

        & > h4 {
            font-family: var(--font--comfortaa);
            font-weight: 100;
            margin-top: -20px;
            font-size: 1.2rem;
    

            @media (max-width: 768px){
                width: 100%;
                margin-top: -40px;
                font-size: 14px;
                text-align: center;
            }
        }

        & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
    
            font-weight: 100;
            line-height: 130%;
            font-size: .9rem;

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
            }
        }
    }
`,Tk=k.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5%;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column-reverse;
        gap: 25px;
        margin-top: 35px;
        padding: 0% 5%;
    }

    & > div:nth-child(1){
        width: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;


        @media (max-width: 768px){
            width: 100%;
        }

        & > h1{
            font-size: 3rem;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);
            font-weight: 100;
            margin-bottom: 15px;

            @media (max-width: 768px){
                font-size: 28px;
                width: 100%;
                text-align: center;
                margin-bottom: 10px;
            }
        }

        & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
            font-size: .9rem;
            font-weight: 100;
            line-height: 130%;

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
            }
        }
    }

    & > div:nth-child(2){
        width: 50%;
        height: 80%;
        flex-wrap: wrap;
        gap: 5px;
        display: flex;
        align-items: center;
        justify-content: center;


        @media (max-width: 768px){
            width: 100%;
            justify-content: space-between;
        }

       & > img{
        width: 45%;
        border-radius: 20px 0 20px 0; 
        height: 50%;
        object-fit: cover;

        &:nth-child(2){
            border-radius: 0 20px 0 20px;
        }

        &:nth-child(4){
            border-radius: 20px 0px 20px 0px!important;
        }

        @media (max-width: 768px){
            width: 49%;
            height: 20vh;

        }

       }

       & > img:nth-child(n +3){
        border-radius: 0 20px 0 20px;
       }

    }
`,Ck=k.section`
    width: 100%;
    height: 150vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0 5%;


    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 25px;
        margin-top: 50px;
        padding: 5% 5%;
    }

    & > div:nth-child(1){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 45%;
    

        
        @media (max-width: 768px){
            width: 100%;
            flex-direction: column-reverse;
            height: auto;
        }

        & > div:nth-child(1){
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
    

            @media (max-width: 768px){
                width: 100%;
    
            }

            & > h1{
            font-size: 2.5rem;
            font-family: var(--font--comfortaa);
            color: var(--color--green);
            font-weight: 100;
            margin-bottom: 15px;
                
                @media (max-width: 768px){
                    font-size: 28px;
                    margin-bottom: 10px;
                    width: 100%;
                    text-align: center;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
            font-weight: 100;
            line-height: 130%;
            font-size: .9rem;

                @media (max-width: 768px){
        
                    width: 100%;
                    text-align: justify;
                }
            }
            
        }

        & > div:nth-child(2){
            width: 50%;
            height: 100%;
    

            @media (max-width: 768px){
                width: 100%;
                height: 35vh;
                margin-top: -20px;
                margin-bottom: 50px;
            }

            & > img {
                width: 50%;
                height: 80%;
                object-fit: cover;

                @media (max-width: 768px){
                    height: 100%;
                    width: 50%;
                }
            }

            & > img:nth-child(1){
                position: relative;
                left: 10px;
                border-radius: 20px 0 20px 0;
            }

            & > img:nth-child(2){
                position: relative;
                top: 40px;
                right: 20px;
                border-radius: 0 20px 0 20px;
            }
        }
    }

    & > div:nth-child(2){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 45%;
    


        @media (max-width: 768px){
            flex-direction: column-reverse;
            height: auto;
        }

        & > div:nth-child(1){
            width: 50%;
            height: 100%;
    

            @media (max-width: 768px){
                width: 100%;
                margin-top: 15px;
                height: 35vh;
            }

            & > img {
                width: 50%;
                height: 80%;
                object-fit: cover;
        


                @media (max-width: 768px){
                    height: 100%;
                    width: 50%;
                }
            }

            & > img:nth-child(1){
                position: relative;
                left: 10px;
                border-radius: 20px 0 20px 0;
            }

            & > img:nth-child(2){
                position: relative;
                top: 20px;
                right: 10px;
                border-radius: 0 20px 0 20px;
            }
        }

        & > div:nth-child(2){
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            flex-direction: column;
    

            @media (max-width: 768px){
                width: 100%;
            }

            & > h1{
            font-size: 2.5rem;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);
            line-height: 100%;
            text-align: right;
            font-weight: 100;
            margin-bottom: 15px;
                
                @media (max-width: 768px){
        
                    margin-top: 0px;
                    font-size: 28px;
                    margin-bottom: 10px;
                    width: 100%;
                    text-align: center;
                }
            }

            & > p {
            width: 90%;
            font-family: var(--font--comfortaa);
            text-align: right;
            font-weight: 100;
            font-size: .9rem;
            line-height: 130%;

                @media (max-width: 768px){

                    width: 100%;
                    text-align: justify;
                }
            }
        }

    }
`,kk=k.section`

    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5%;

        @media (max-width: 768px){
            height: auto;
            flex-direction: column;
        }

    & > div:nth-child(1){
        width: 50%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;


        @media (max-width: 768px){
            width: 100%;
            height: auto;
            gap: 10px;
        }

        & > div:nth-child(1){

            & > h1{
            font-size: 2.5em;
            font-family: var(--font--comfortaa);
            color: var(--color--green);
            font-weight: 100;
            margin-bottom: 15px;

                @media (max-width: 768px){
        
                    margin-top: 20px;
                    margin-bottom: 15px;
                    width: 100%;
                    text-align: center;
                    font-size: 24px;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
            font-size: 0.9rem;
            font-weight: 100;
            line-height: 130%;
            margin-bottom: 20px;

            @media (max-width: 768px){
                width: 100%;
                text-align: justify;
            }

            }
        }

        & > div:nth-child(2){

            & > h1{
            font-size: 2.5em;
            font-family: var(--font--comfortaa);
            color: var(--color--blue);
            font-weight: 100;
            margin-bottom: 15px;

                @media (max-width: 768px){
        
                    margin-top: 5px;
                    margin-bottom: 15px;
                    width: 100%;
                    text-align: center;
                    font-size: 24px;
                }
            }

            & > p {
            width: 80%;
            font-family: var(--font--comfortaa);
            font-size: 0.9rem;
            font-weight: 100;
            line-height: 130%;

            @media (max-width: 768px){
    
                width: 100%;
                text-align: justify;
            }

            }
        }
    }
    
    & > div:nth-child(2){
        width: 50%;
        height: 80%;

        @media (max-width: 768px){

            width: 100%;
            height: auto;
            margin-top: 25px;
            margin-bottom: 25px;
        }

        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 30px 0 30px 0;
        }
    }
`,Ek=k.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/v1730130105/fotoSerra3_zqwbav.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    gap: 25px;

    & h1 {
        font-family: var(--font--comfortaa);
        color: var(--color--white);
        width: 35%;
        text-align: center;
        line-height: 100%;
        font-weight: 100;

        @media (max-width: 768px){
            width: 90%;
            margin-left: 5%;
            text-align: center;
            font-size: 24px;
        }
    }
`,zk=()=>(_.useEffect(()=>{et.init({duration:1e3,once:!1}),et.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsxs(Nr,{children:[c.jsx("title",{children:"Sobre Nós - Pousada Le Ange"}),c.jsx("link",{rel:"icon",href:"https://res.cloudinary.com/dupg7clzc/image/upload/v1731429555/2_mvzbuj.svg"})]}),c.jsx(_k,{}),c.jsx(Yr,{}),c.jsxs(Sk,{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Pousada Le Ange"}),c.jsx("h4",{"data-aos":"fade-down","data-aos-delay":"200",children:"A pousada mais Pet Friendly do Brasil"}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"300",children:"Um empreendimento familiar fundado em 2018, a Pousada LeAnge Serra surgiu da paixão dos fundadores pelo amor por quatro patas, bem-estar e hospitalidade, situando-se em Miguel Pereira, Rio de Janeiro. Com o sucesso da primeira unidade, expandimos para Búzios em 2023, criando a Pousada LeAnge Mar. A filosofia por trás das nossas pousadas é oferecer um refúgio acolhedor e luxuoso, em que cada detalhe é cuidadosamente pensado para proporcionar conforto e satisfação."})]}),c.jsx("div",{"data-aos":"fade-left","data-aos-delay":"400",children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331472/cachorro_kcfx8n.webp",alt:"foto da gaia, cachorra da pousada le ange",loading:"lazy","data-aos":"fade-right","data-aos-delay":"500"})})]}),c.jsxs(jk,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331474/foto_da_pousada_do_mar_d9fx7r.webp",alt:"foto da le ande da mar",loading:"lazy","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331474/foto_da_pousada_da_serra_lefdif.webp",alt:"foto da le ande da serra",loading:"lazy","data-aos":"fade-down","data-aos-delay":"100"})]}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Duas unidades,"}),c.jsx("h4",{"data-aos":"fade-down","data-aos-delay":"200",children:"dois cenários incomparáveis"}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"300",children:"A Pousada LeAnge Serra oferece 10 suítes deslumbrantes em meio à natureza exuberante de Miguel Pereira. Já a Pousada LeAnge Mar, com suas 8 suítes exclusivas, proporciona uma experiência costeira em Búzios, com vista direta para o mar."})]})]}),c.jsxs(Tk,{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Diferenciais"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"200",children:"Somos Pet Lovers, aqui não temos limite de porte, quantidade ou raça. Nosso conceito permite que os pets frequentem o restaurente, a piscina e qualquer outro espaço. Nos tornando assim ÚNICOS com este tipo de experiência."})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331473/rede_no_mar_ajtwwv.webp",loading:"lazy",alt:"rede na le ange mar","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731327605/sossego_1_jsshhu.webp",loading:"lazy",alt:"hot tube na le ange serra","data-aos":"fade-down","data-aos-delay":"200"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331476/divers%C3%A3o_na_serra_fzhl7y.webp",loading:"lazy",alt:"casal se divertindo na le ange serra","data-aos":"fade-up","data-aos-delay":"300"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331479/natal_jwdzzh.webp",loading:"lazy",alt:"foto da le ange com tema de natal","data-aos":"fade-down","data-aos-delay":"400"})]})]}),c.jsxs(Ck,{children:[c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-down","data-aos-delay":"100",children:"Gastronomias"}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"200",children:"Oferecemos um serviço all inclusive que abrange todas as refeições, atendendo todas as restrições alimentares de nossos hóspedes. Nosso compromisso é proporcionar uma experiência gastronômica diversificada e de alta qualidade, utilizando produtos frescos e locais."})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330265/pizzas_lgsqcd.webp",loading:"lazy",alt:"foto da noite de pizzas na pousada le ange","data-aos":"fade-up","data-aos-delay":"300"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330264/risotos_oj42yf.webp",loading:"lazy",alt:"foto da noite de risotos na pousada le ange","data-aos":"fade-down","data-aos-delay":"400"})]})]}),c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331477/cachorro_olhando_pra_camera_ndannw.webp",loading:"lazy",alt:"foto do cachorro sorrindo para camera","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731331476/foto_de_mulher_com_dois_cachorros_bwwkmi.webp",loading:"lazy",alt:"uma mulher e dois cachorros na pousada le ange","data-aos":"fade-down","data-aos-delay":"200"})]}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"300",children:"Espaços compartilhados"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"400",children:"Nossos espaços compartilhados incluem bibliotecas aconchegantes, sala de jogos e áreas de lazer diversificadas. Na Serra, temos piscinas, ofurô, hot tub, spa e acesso às cachoeiras, enquanto em Búzios, nossos hóspedes desfrutam de piscinas e ofurôs com vistas incríveis do mar aberto, além disso, estamos localizados próximo ao Mirante do Pai Vitório."})]})]})]}),c.jsxs(kk,{children:[c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"150",children:"Suítes"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"300",children:"Ambas as unidades dispõem de suítes luxuosas, equipadas com banheiras de imersão, camas king-size e roupas de cama de 400 fios; na Serra, cada suíte conta com uma lareira aconchegante, enquanto em Búzios, a vista para o mar é um espetáculo à parte, garantindo uma experiência de tranquilidade incomparável."})]}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"400",children:"Público de alto padrão"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"500",children:"Nosso público é de classe A, buscando experiências de alto padrão e exclusividade. Para manter a tranquilidade e a exclusividade, a idade mínima para hospedagem é de 13 anos."})]})]}),c.jsx("div",{children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_50,w_1500/v1732037857/IMG_0254_wdrn4v.webp",alt:"foto do quadro de cachorro na pousada le ange mar","data-aos":"flip-left","data-aos-delay":"600"})})]}),c.jsxs(Ek,{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"200",children:"Venha viver essa experiência com a gente!"}),c.jsx(Ki,{text:"Reservar agora!",textColor:"var(--color--white)",backgroundColor:"transparent",borderColor:"var(--color--white)",iconColor:"var(--color--white)",hoverBackgroundColor:"var(--color--white)",hoverBorderColor:"var(--color--white)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank"),"data-aos":"fade-in","data-aos-delay":"500"})]})]})),Pk=Wi`
    .swiper-button-next, .swiper-button-prev {
        color: var(--color--white); 
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        &:after {
            font-size: 20px;
        }
    }
    .swiper-pagination-bullet {
        background: rgba(0, 0, 0, 0.3);
        opacity: 0.7;
        width: 10px;
        height: 10px;
        margin: 0 5px;
        &.swiper-pagination-bullet-active {
            background: #A5C933;
            opacity: 1;
        }
    }
`,Ak=k.div`
  display: flex;
  padding: 20px;
  align-items: center;
  height: 90vh;
  gap: 20px;
  padding: 5vh 5%;
  flex-direction: ${({imagePosition:e})=>e==="right"?"row-reverse":"row"};

  @media (max-width: 768px){
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 15px 0 15px 0;
    height: 75vh;
    flex-direction: column;
    width: 95%;
    margin-left: 2.5%;
    padding: 15px;
    background: none;
  
  }
`,Mk=k.div`
  flex: 1;
  height: 100%;
  padding: 20px;
  border-radius: 0px 40px 0px 40px;
  background-color: var(--color--white);
  border: 1px solid rgba(0, 0, 0, 0.2);

  @media (max-width: 768px){
    width: 100%;
    border: none;
    padding: 0;
    background: none;
    height: 40vh;
  
  }
`,Lk=k.h2`
  font-size: 2.5em;
  line-height: 100%;
  margin-bottom: 0.5em;
  font-family: var(--font--comfortaa);
  color: ${({$colorDefined:e})=>e||"var(--color--green)"}; 
  font-weight: 100;

  @media (max-width: 768px){
    display: inline-block;
    font-size: 1.7rem;
    height: auto;
  }
`,Ok=k.p`
  margin-bottom: 1.2em;
  font-size: 1rem;
  width: 80%;
  color: var(--color--black);
  font-family: var(--font--comfortaa);
  font-weight: 100;

  @media (max-width: 768px){
    width: 100%;
    font-size: .9rem;
    height: auto;
  }
`,Ik=k.div`
  flex: 2;
  height: 100%;

  @media (max-width: 768px){
    height: 30vh;
  }
`,Rk=k.img`
  width: 100%;
  border-radius: 25px 0 25px 0;
  height: 100%;
  object-fit: cover;
  filter: contrast(120%);
`,Vk=k(en)`
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
    background-color: ${({$bgColor:e})=>e||"var(--color--green)"};
    box-shadow: none;
    border-radius: 50%;
    padding: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    position: absolute;
    bottom: 20px!important;
    top: 95% !important;

    @media (max-width: 768px){
      left: 50%!important;
    }
  }

  .swiper-button-prev {
    left: 100px;
    margin-top: -80px!important;
    margin-right: 5px; 

    @media (max-width: 768px){
      left: 40px!important;
      margin-top: -50px!important;
    }
  }

  .swiper-button-next {
    left: 150px;
    margin-top: -80px!important;

    @media (max-width: 768px){
      left: 90px!important;
      margin-top: -50px!important;
    }
  }
`,Qy=({slides:e,titleColor:t,buttonBgColor:n,imagePosition:r="left"})=>c.jsxs(c.Fragment,{children:[c.jsx(Pk,{}),c.jsx(Vk,{navigation:!0,autoplay:{delay:2e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!0,modules:[gr,vr,Dn],className:"mySwiper",$bgColor:n,onMouseEnter:()=>{},onMouseLeave:()=>{},children:e.map((i,o)=>c.jsx(tn,{children:c.jsxs(Ak,{imagePosition:r,children:[c.jsxs(Mk,{children:[c.jsx(Lk,{$colorDefined:t,"data-aos":"fade-up","data-aos-delay":"100",children:i.title}),c.jsx(Ok,{"data-aos":"fade-down","data-aos-delay":"250",children:i.description}),c.jsx(Gi,{"data-aos":"fade-up","data-aos-delay":"200",text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--black)",textColor:"var(--color--black)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})]}),c.jsx(Ik,{"data-aos":"fade-left","data-aos-delay":"400",children:c.jsx(Rk,{src:i.imageUrl,alt:i.title})})]})},o))})]}),Dk=Vn`
  0% {
    border-radius: 0 10px 20px 0;
  }
  25% {
    border-radius: 20px 0 10px 20px;
  }
  50% {
    border-radius: 10px 20px 0 10px;
  }
  75% {
    border-radius: 10px 10px 20px 0;
  }
  100% {
    border-radius: 0 20px 10px 0;
  }
`,Nk=k.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0% 5% 2.5% 5%;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731334823/serraFoto_k1rwb0.webp');
    background-size: cover;
    background-position: center;
    position: relative;

    @media (max-width: 768px){
        height: auto;
        padding: 5% 2.5%;
        margin-bottom: 0;
    }

    &::before{
        background-image: url('../../public/background/background_black.webp');
        position: absolute;
        width: 100%;
        height: 100%;
        content: '';
        background-size: contain;
        opacity: 0.1;
    }

    & > main {
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;

        @media (max-width: 768px){

            height: auto;
        }
    }

    & > main div {
        position: relative;
        width: 18%;
        height: 45%;
        margin: 10px 0;

        @media (max-width: 768px){

            width: 48%;
            height: 20vh;
            margin: 5px 0;
        }
    }

    & > main img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all .1s ease-in-out;
        animation: ${Dk} 5s ease-in-out infinite;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    & > main img:nth-child(-n + 5) {
        border-radius: 0 30px 0 30px;
    }

    & > main img:nth-child(-n + 5):hover {
        border-radius: 30px 0 30px 0;
    }

    & > main img:nth-child(n + 6) {
        border-radius: 30px 0 30px 0;
    }

    & > main img:nth-child(n + 6):hover {
        border-radius: 0px 30px 0px 30px;
    }

    & > main span {
        position: absolute;
        top: 15px;
        right: 20px;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
        color: var(--color--white);
        padding: 3px 7px;
        font-size: 0.6rem;
        border-radius: 5px 0 5px 0;
        transition: all 0.3s ease-in-out;
        font-family: var(--font--comfortaa);
        cursor: pointer;

        @media (max-width: 768px){

            font-size: .8rem;
            top: 5px;
            right: 10px;
        }
    }

    & > main div:hover span {
        top: 50%;
        left: 50%;
        width: 80%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        transform: translate(-50%, -50%);
        padding: 5px 10px;
        background-color: var(--color--white);
        color: var(--color--black);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        font-size: 0.7em;
        border-radius: 8px;
        
        @media (max-width: 768px){
            font-size: .6rem;
            padding: 5px 7px;
        }
    }
`,Fk=k.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25%;

    @media (max-width: 768px){
        flex-direction: column;
    }

    & > div:nth-child(1) {
        width: 60%;

        @media (max-width: 768px){
            width: 100%;
        }
    }

    & > div:nth-child(2) {
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        @media (max-width: 768px){
            width: 100%;
            justify-content: center;
            margin-bottom: 15px;
        }
    }

    & > div h1 {
        font-size: 2rem;
        color: var(--color--white);
        font-weight: 100;
        font-family: var(--font--comfortaa);

        @media (max-width: 768px){
            font-size: 1.3rem;
            text-align: center;
            margin-bottom: 30px;
            margin-top: 15px;
        }
    }
`,Bk=({images:e})=>{const[t,n]=_.useState(null);return c.jsxs(Nk,{children:[c.jsxs(Fk,{children:[c.jsx("div",{children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Conheça as nossas suítes"})}),c.jsx("div",{"data-aos":"fade-down","data-aos-delay":"200",children:c.jsx(Gi,{text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--white)",textColor:"var(--color--white)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})})]}),c.jsx("main",{"data-aos":"zoom-in","data-aos-delay":"200",children:e.map((r,i)=>c.jsxs("div",{onMouseEnter:()=>n(i),onMouseLeave:()=>n(null),children:[c.jsx("img",{src:r.src,alt:`Imagem ${i+1}`}),c.jsxs("span",{onClick:()=>window.location.href=`/leange/#/acomodaSerra#suite${i+1}`,children:[t===i?"Conhecer Suítes":r.text,t===i&&c.jsx(Qp,{})]})]},i))})]})},$k=k.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.5% 5%;
    gap: 50px;
    background-color: var(--color--white);

    @media (max-width: 768px){
        flex-direction: column-reverse;
        height: auto;
        padding: 10% 2.5%;
        margin-bottom: 50px;
    }
`,qk=k.div`
    width: 50%;
    height: 90%;
    display: flex;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 768px){
        width: 100%;
        height: 50vh;
    }
`,Hk=k.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 15px;

    @media (max-width: 768px){
    }

    & > div {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 15px;

        @media (max-width: 768px){
            width: 100%!important;

            text-align: center;
        }

        & > img:nth-child(1) {
            width: 100%;
            height: 60%;
            object-fit: cover;
            border-radius: 20px 0 20px 0;
        }

        & > img:nth-child(2) {
            width: 100%;
            height: 40%;
            object-fit: cover;
            border-radius: 0px 20px 0 20px;
        }
    }

    & > div:nth-child(2) > img:nth-child(1) {
        width: 100%;
        height: 40%;
        object-fit: cover;
        border-radius: 20px 0 20px 0;
    }

    & > div:nth-child(2) > img:nth-child(2) {
        width: 100%;
        height: 60%;
        object-fit: cover;
        border-radius: 20px 0 0 20px;
    }
`,Uk=k.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 25px;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
        margin-top: -10px;
    }
`,Wk=k.h1`
    font-size: 2.5rem;
    color: var(--color--black);
    font-family: var(--font--comfortaa);
    font-weight: 100;

    @media (max-width: 768px){
        font-size: 1.6rem;
    }

    & > b {
        font-weight: 100;
        color: ${({colorDefinedBold:e})=>e||"var(--color--green)"};
    }
`,Gk=k.p`
    color: var(--color--black);
    font-size: 1rem;
    line-height: 100%;
    width: 80%;
    font-family: var(--font--comfortaa);
    font-weight: 100;

    @media (max-width: 768px){
        width: 100%;
        font-size: 1rem;
        text-align: justify;
        padding: 0 2.5%;
    }
`;k(Ki)`
    margin-top: auto; 
`;const Zy=({colorDefinedBold:e})=>c.jsxs($k,{children:[c.jsx(qk,{children:c.jsxs(Hk,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1731335113/churrasco_l0chmi.jpg",alt:"Homem fazendo churrasco na le ange",loading:"lazy","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1731335110/risoto-compressed_xqyhqx.jpg",alt:"Risoto no prato na le ange",loading:"lazy","data-aos":"fade-up","data-aos-delay":"200"})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1731335111/hamburguer-compressed_dhh0dx.jpg",alt:"Foto do hamburguer da le ange com batata frita e saladas",loading:"lazy","data-aos":"fade-down","data-aos-delay":"100"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1731335108/risoto1-compressed_m583dd.jpg",alt:"Risoto no prato na le ange",loading:"lazy","data-aos":"fade-down","data-aos-delay":"200"})]})]})}),c.jsxs(Uk,{children:[c.jsxs(Wk,{colorDefinedBold:e,"data-aos":"fade-up","data-aos-delay":"400",children:["Alimentação ",c.jsx("b",{children:"Inclusa"})]}),c.jsxs(Gk,{"data-aos":"fade-down","data-aos-delay":"500",children:["Sabe aquela comida com sabor, tempero e afeto que te abraça? ",c.jsx("br",{})," ",c.jsx("br",{}),"Essa é a gastronomia registrada da LeAnge! ",c.jsx("br",{}),c.jsx("br",{}),"Nossa estadia dispõe de um restaurante, onde são oferecidas todas as refeições do dia – café da manhã, almoço, chá da tarde e jantar, incluindo nossas deliciosas sobremesas."]}),c.jsx(Gi,{"data-aos":"fade-up","data-aos-delay":"200",text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--black)",textColor:"var(--color--black)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})]})]}),H0=k.section`
    width: 100%;
    margin-top: 5vh;
    display: flex;
    padding: 0 5%;
    justify-content: center;
    align-items: center;
    height: 12vh;
    
    @media (max-width: 768px){
        height: 10vh;
        align-items: center;
        margin-top: 2.5vh;
    }

    & > h1 {
        font-size: 2rem;
        font-family: var(--font--comfortaa);
        font-weight: 100;
        text-align: center;
        width: 100%;
        
        @media (max-width: 768px){
            font-size: 1.6rem;
        }
    }
`,Yk=k.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 80vh;
    padding: 0 5%;

    @media (max-width: 768px){
        height: auto;
    }
`,Kk=k.div`
    width: 95%; 
    height: 70vh; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    border-radius: 15px 0 15px 0; 
    position: relative; 
    overflow: hidden; 

    @media (max-width: 768px){
        width: 100%;
        margin: 0;
        height: 65vh;
        border: 1px solid transparent;
    }
`,Xk=k.p`
    font-size: .6rem;
    border-radius: 0 10px 0 10px;
    position: absolute;
    bottom: 72%;
    left: -60px;
    transform: rotate(270deg);
    padding: 5px 25px;
    margin: 10px 0; 
    color: var(--color--white);
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    z-index: 1; 
    font-family: var(--font--comfortaa);
    font-weight: 100;

    @media (max-width: 768px){
        font-size: .7rem;
        text-align: center;
        width: 60%;
        display: inline-block;
        left: -75px;
        bottom: 72.5%;
        width: 55%;
    }
`,Qk=[{id:1,text:"Pousada Le Ange Mar",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341041/3_nxmzvb_uqceix.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341041/4_zkfafk_oftuer.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341043/5_tb7gyj_m9gzdd.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341046/6_y0fjmz_u19wod.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341046/2_kck8ru_pps4we.webp"]},{id:2,text:"Pousada Le Ange Serra",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341240/1_ph73ii.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341241/2_v8reyz_vm3ce1.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341241/3_ji6uzq_daetsl.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341242/5_ty6zqr_q1l2mc.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341242/6_dovfum_tswv2e.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341242/4_u1pvbr_zcx4gk.webp"]},{id:3,text:"Pousada Le Ange Mar",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341441/1_fddk63_gm2m6g.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341442/2_eomyvd_nnnec7.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341444/3_islkto_wkjaco.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341446/4_tds2ap_sarfwc.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341448/5_cvbsbp_vbx4jm.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341450/6_cs2odp_vpnkmq.webp"]},{id:4,text:"Pousada Le Ange Serra",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341580/1_vw8gku_jdpu1m.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341581/2_u9soep_axzzap.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341582/3_aryhje_lmyuui.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341584/4_g2prnk_ejavci.webp"]},{id:5,text:"Pousada Le Ange Mar",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341717/1_urlgor_pasdht.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341718/2_ij3lu8.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341720/3_scnvzz_z55ake.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341722/4_j7wxsn_d4icoi.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341724/5_jn3xrs_bx73kp.webp"]},{id:6,text:"Pousada Le Ange Serra",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341840/1_zt1frt_tozga2.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341841/2_m6a7pn_dljjpo.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341842/3_f1nazk_rjbcys.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341845/4_al1kde_fctxov.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731341847/5_fz3g46_f4bfjz.webp"]},{id:7,text:"Pousada Le Ange Mar",bgImages:["https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731342013/1_adshm2_k64nfp.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731342015/2_gvo2bk_z3cakr.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731342017/3_eqkktf_gldizg.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731342019/4_pw8xsl_suk6of.webp","https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731342021/5_abwhg7_odyfrq.webp"]}],Jy=()=>c.jsxs(c.Fragment,{children:[c.jsx(H0,{children:c.jsx("h1",{children:"Palavra do Hóspede"})}),c.jsx(Yk,{children:c.jsx(en,{slidesPerView:1,spaceBetween:10,modules:[gr,vr,Dn],pagination:!1,navigation:!0,loop:!0,grabCursor:!0,autoplay:{delay:7e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},480:{slidesPerView:1}},children:Qk.map(e=>c.jsx(tn,{children:c.jsxs(Kk,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(en,{slidesPerView:1,spaceBetween:10,loop:!0,style:{width:"100%",height:"100%"},autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},onTouchStart:t=>{t.stopPropagation()},onMouseEnter:t=>{t.stopPropagation()},children:e.bgImages.map((t,n)=>c.jsx(tn,{children:c.jsx("div",{style:{backgroundImage:`url(${t})`,backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:"25px 0 25px 0"},loading:"lazy"})},n))}),c.jsx(Xk,{children:e.text})]})},e.id))})}),c.jsx(H0,{children:c.jsx(Ki,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})})]});k.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center; 

    @media (max-width: 768px){
        height: auto;
    }
`;const Zk=k.section`
    width: 100%;
    display: flex;
    padding: 0 5%;
    justify-content: space-between;
    height: 15vh;
    align-items: center;
    margin-top: 5vh;

    @media (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        margin-top: -5vh;
        margin-bottom: 20px;
        height: 15vh;
    }

    & > h1 {
        font-size: 2rem;
        font-family: var(--font--comfortaa);
        font-weight: 100;

        @media (max-width: 768px){
            font-size: 1.6rem;
            color: var(--color--black);
            background-color: rgba(255, 255, 255, 0.4);
            padding: 10px 20px;
            border-radius: 10px;
            backdrop-filter: blur(10px);
        }
    }
`,ew=({carousels:e})=>c.jsxs(c.Fragment,{children:[c.jsxs(Zk,{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"200",children:"Pet Friendly"}),c.jsx(Ki,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]}),e.map((t,n)=>c.jsx(xd,{images:t.images,reverse:t.reverse||!1},n))]}),Jk=k.div`
    height: 5vh;

    @media (max-width: 768px){
        height: 0vh;
    }
`,eE=k.section`
    width: 100%;
    display: flex;
    padding: 5% 5% 2.5% 10%;
    align-items: center;
    justify-content: space-between;
    height: 95vh;
    background: #fff;
    position: relative;
    z-index: -1;

    &::before{
        content: '';
        width: 100%;
        height: 100vh;
        left: 0;
        top: -5vh;
        position: absolute;
        z-index: -1;
        opacity: .05;
        background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731331476/foto_de_mulher_com_dois_cachorros_bwwkmi.webp');
        background-position: center;
        background-size: cover;

        @media (max-width:1080px){
            display: none!important;
        }
    }

    @media (max-width: 768px){
        padding: 10% 2.5%;
        flex-direction: column-reverse;
    }
`,tE=k.div`
    width: 45%;
    height: 100%;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1731331476/foto_de_mulher_com_dois_cachorros_bwwkmi.webp');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 40px 10px 30px 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    filter: contrast(110%);

    @media (max-width: 768px){
        width: 100%;
        border-radius: 0px;
        border-image: fill 0 linear-gradient(#0001, #ffffff);
        position: absolute;
        box-shadow: none!important;
        height: 100%;
        top: 0;

    }
`,nE=k.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    flex-direction: column;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
        height: 35%;
    }

    & > h4 {
        font-family: var(--font--comfortaa);
        font-size: 18px;
        font-weight: 200;
        color: var(--color--black);
        font-weight: 100;

        @media (max-width: 768px){
            color: var(--color--black);
            font-size: 14px;
            text-align: center;
            font-weight: 800;
        }
    }

    & > h1 {
        font-family: var(--font--comfortaa);
        font-size: 65px;
        margin-left: -5px;
        width: 100%;
        line-height: 100%;
        color: var(--color--black);
        margin-top: -15px;
        font-weight: 100;

        @media (max-width: 768px){
            display: inline-block;
            width: 100%;
            font-size: 35px;
            text-align: center;
            margin-left: 0;
            margin-top: -5px;
            font-weight: 100;
        }
    }

    & > h1 b {
        color: var(--color--green);
        font-weight: 100;
        
        @media(max-width: 768px){
            font-weight: 100;
        }
    }

    & > p {
        font-family: var(--font--comfortaa);
        color: var(--color--black);
        font-size: 18px;
        line-height: 120%;
        width: 80%;
        font-weight: 100;

        @media (max-width: 768px){
            width: 80%;
            font-size: 1rem;
            text-align: center;
            padding-bottom: 0px;
        }
    }
`,rE=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731329808/cachorro_na_piscina_sjs7ft.webp"},{title:"Aventura",description:"Na propriedade, temos trilhas dentro da natureza, beirando o rio! Em diversos pontos você pode escolher dar uma paradinha para tomar um banho e renovar as energias!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731332405/aventura_odmky4.webp"},{title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar e tratamento especial por ozônio, com níveis baixíssimos de cloro, além de contar com o ofurô aquecido, perfeito para aproveitar no final de tarde.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731332405/cachorro_pulando_na_piscina_lrhxpp.webp"},{title:"Sossego",description:"A área da sauna fica localizada ao lado da mata, com barulho do rio que passa e conta com um HotTub abastecido por água natural e aquecido à lenha, o combo completo para você relaxar.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731327605/sossego_1_jsshhu.webp"},{title:"Aconchego",description:"Nossas áreas internas contam com três salas superequipadas e aconchegantes, sendo elas: sala de TV, sala de estar, sala de jogos com mesa de bilhar, carteado, jogos de tabuleiro e biblioteca.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731326209/sala-de-estar_xuxiou.webp"},{title:"Cozinha",description:"Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731329808/caf%C3%A9_da_manh%C3%A3_vaxwlf.webp"},{title:"Diversão",description:"Espaço de sobra para seu PET se divertir! Espaço agility na beira do lago, com muita grama, para seu pet correr, pular e nadar!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731329808/parc%C3%A3o_mdvo8p.webp"},{title:"Adega",description:"Para completar ainda mais sua experiência, contamos com uma adega subterrânea para climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731329808/adega_uje7gn.webp"},{title:"Suítes",description:"Nossas suítes são incríveis e cada uma possui o seu charme. Todas contam com banheira com vista para a natureza, lareira para aquecer no friozinho, camas king size, ar condicionado, frigobar e varanda.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731345889/1_ytelar_a4gkq4.webp"},{title:"Relaxar",description:"Relaxe em nosso SPA com uma vista de frente para a mata! Você pode escolher contratar nossos serviços de massoterapia, manicure, pedicure.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1730833077/slide04_li94ks.webp"}],iE=[{images:[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016972/serra1_dlmpih.webp",alt:"Cachorro surfando na piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016973/serra2_h64lp3.webp",alt:"Cachorro andando na borda da piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016973/serra3_hqphcd.webp",alt:"Cachorro sentado tomando sol e sorrindo para a foto",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731331476/foto_de_mulher_com_dois_cachorros_bwwkmi.webp",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016973/serra5_liz2la.webp",alt:"Cachorro mordendo uma bolinha",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016973/serra4_anm8q9.webp",alt:"Casal com um casal de cachorro sentado na beira da piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335890/16_mwucoo_qw5inq.webp",alt:"Mulher na cachoeira com cachorros brincando",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335889/15_epymcf_vqg5qs.webp",alt:"Mulher e cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732018336/serra5_vgmvai.webp",alt:"3 cachorros tirando uma selfie",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732018336/serra3_abkfr4.webp",alt:"Cachorro dormindo na rede em cima da cachoeira",loading:"lazy",label:"Le Ange Serra"}]},{images:[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732018336/serra2_qzxvpu.webp",alt:"Cachorro dormindo no sofá",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732018336/serra4_wdvsmr.webp",alt:"Cachorro papai noel",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335883/11_wlyxbh_wxtele.webp",alt:"Um cachorro no cola de um humano sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731329808/parc%C3%A3o_mdvo8p.webp",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335884/12_epl2gw_oc9uc0.webp",alt:"Cachorro brincando na grama",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335885/13_hhitda_hfolhl.webp",alt:"2 cachorros sorrindo na rede",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335887/14_ybyv7y_wt3zn2.webp",alt:"Uma mulher e um cachorro do lado dela",loading:"lazy",label:"Le Ange Serra"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335892/17_awkinq_ommg1k.webp",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732018336/serra1_tohjvc.webp",alt:"Cachorro andando na cachoeira",loading:"lazy",label:"Le Ange Serra"}],reverse:!0}],oE=k.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: auto;
        padding: 0% 0 5% 0 ;
    }
`,aE=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 7vh;
    background-color: var(--color--green);
    font-family: var(--font--comfortaa);

    @media (max-width: 768px){
        height: 8vh;
        margin-bottom: 25px;
    }

    & > h1{
        font-weight: 200;
        width: 80%;
        text-align: center;
        font-size: 1.1rem;
        color: var(--color--white);

        @media (max-width: 768px){
            font-size: 1rem;
            font-weight: 400;
        }
    }
`,sE=k.section`
    width: 100%;
    height: 80vh;
    padding: 10% 5%;
    margin-top: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: auto;
        padding: 10% 2.5% 0 2.5%;
        margin-top: 0;
    }
`,lE=[{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330263/frutos_do_mar1_ly3hq1.webp",title:"Frutos do mar",dateRange:"22/11/2024 até 24/11/2024 (2 diárias)",features:[{icon:c.jsx(fe,{}),text:"23/11 - Frutos do Mar"},{icon:c.jsx(zn,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(We,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"354,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330264/risotos_oj42yf.webp",title:"Noite de Risotos",dateRange:"29/11/2024 até 01/12/2024 (2 diárias)",features:[{icon:c.jsx(fe,{}),text:"30/11 - Noite de Risostos"},{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(We,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330265/pizzas_lgsqcd.webp",title:"Noite das pizzas",dateRange:"06/12/2024 até 08/12/2024 (3 diárias)",features:[{icon:c.jsx(fe,{}),text:"07/12 - Noite das pizzas"},{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(We,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330262/frutos_do_mar2_xyxatd.webp",title:"Frutos do Mar",dateRange:"13/12/2024 até 15/12/2024 (2 diárias)",features:[{icon:c.jsx(fe,{}),text:"14/12 - Frutos do Mar"},{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(We,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330263/fique3pague4_fiupcm.webp",title:"Fique 3 pague 4",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(zn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(We,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"538,90",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330266/natal_wrunee.webp",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(zn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(We,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"918,40",discount:25}],cE=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px){
        display: none;
    }
`,uE=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1730133147/suiteSuperior1_gpjls0.jpg",text:"Suíte Superior 1",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1730133146/suiteSuperior2_cqduas.jpg",text:"Suíte Superior 2",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1730133142/suiteSuperior3_pgr53r.jpg",text:"Suíte Superior 3",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1730133142/suiteStandard4_mrtwhq.jpg",text:"Suíte Standard 4",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1730133138/suiteStandard5_j9oyln.jpg",text:"Suíte Standard 5",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1730133137/suiteMaster6_id3iqs.jpg",text:"Suíte Master 6",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1730133133/suiteMaster7_bqdek7.jpg",text:"Suíte Master 7",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1730133111/suiteStandard8_lpyi22.jpg",text:"Suíte Standard 8",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1730133110/suiteSuperior9_v1mxwb.jpg",text:"Suíte Superior 9",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1730133110/suiteMaster10_gqoxfm.jpg",text:"Suíte Superior 10",loading:"lazy"}],dE=()=>(_.useEffect(()=>{et.init({duration:1e3,once:!1}),et.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsxs(Nr,{children:[c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"}),c.jsx("link",{rel:"icon",href:"https://res.cloudinary.com/dupg7clzc/image/upload/v1731429558/3_gkl82v.svg"})]}),c.jsx(Jk,{}),c.jsx(Yr,{}),c.jsxs(eE,{children:[c.jsx(tE,{"data-aos":"zoom-in","data-aos-delay":"100"}),c.jsxs(nE,{children:[c.jsx("h4",{"data-aos":"fade-up","data-aos-delay":"100",children:"LeAnge Serra, a pousada mais"}),c.jsxs("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"400",children:"Aqui você e seu pet, são mais do que bem-vindos!"}),c.jsx(Ki,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]}),c.jsx(aE,{"data-aos":"fade-up","data-aos-delay":"200",children:c.jsx("h1",{"data-aos":"fade-in","data-aos-delay":"400",children:"LeAnge Serra | Miguel Pereira RJ"})}),c.jsx(oE,{children:c.jsx(Qy,{slides:rE})}),c.jsx(Bk,{images:uE,"data-aos":"fade-up","data-aos-delay":"200"}),c.jsx(Zy,{}),c.jsx(ew,{carousels:iE}),c.jsx(cE,{children:c.jsx(Tt,{text:"Fazer minha reserva!"})}),c.jsx(sE,{children:c.jsx(pf,{events:lE})}),c.jsx(Jy,{}),c.jsx(Yi,{})]})),pE=Vn`
  0% {
    border-radius: 0 10px 20px 0;
  }
  25% {
    border-radius: 20px 0 10px 20px;
  }
  50% {
    border-radius: 10px 20px 0 10px;
  }
  75% {
    border-radius: 10px 10px 20px 0;
  }
  100% {
    border-radius: 0 20px 10px 0;
  }
`,fE=k.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0% 5% 2.5% 5%;
    position: relative;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731334824/marFoto_oxc2py.webp');
    background-size: cover;
    background-position: center;

    @media (max-width: 768px){
        height: auto;
        padding: 5% 2.5%;
    }

    &::before{
        background-image: url('../../public/background/background_black.webp');
        position: absolute;
        width: 100%;
        height: 100%;
        content: '';
        background-size: contain;
        opacity: 0.1;
    }

    & > main {
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;

        @media (max-width: 768px){

            height: auto;
        }
    }

    & > main div {
        position: relative;
        width: 23%;
        height: 45%;
        margin: 10px 0;

        @media (max-width: 768px){

            width: 48%;
            height: 20vh;
            margin: 5px 0;
        }
    }

    & > main img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all .1s ease-in-out;
        animation: ${pE} 5s ease-in-out infinite;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    & > main img:nth-child(-n + 5) {
        border-radius: 0 30px 0 30px;
    }

    & > main img:nth-child(-n + 5):hover {
        border-radius: 30px 0 30px 0;
    }

    & > main img:nth-child(n + 6) {
        border-radius: 30px 0 30px 0;
    }

    & > main img:nth-child(n + 6):hover {
        border-radius: 0px 30px 0px 30px;
    }

    & > main span {
        position: absolute;
        top: 15px;
        right: 20px;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
        color: var(--color--white);
        padding: 3px 7px;
        font-size: 0.6rem;
        border-radius: 5px 0 5px 0;
        transition: all 0.3s ease-in-out;
        font-family: var(--font--comfortaa);
        cursor: pointer;

        @media (max-width: 768px){

            font-size: .8rem;
            top: 5px;
            right: 10px;
        }
    }

    & > main div:hover span {
        top: 50%;
        left: 50%;
        width: 80%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        transform: translate(-50%, -50%);
        padding: 5px 10px;
        background-color: var(--color--white);
        color: var(--color--black);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        font-size: 0.7em;
        border-radius: 8px;

        @media (max-width: 768px){
            font-size: .6rem;
            padding: 5px 7px;
        }
    }
`,hE=k.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25%;

    @media (max-width: 768px){
        flex-direction: column;
    }

    & > div:nth-child(1) {
        width: 60%;

        @media (max-width: 768px){
            width: 100%;
        }
    }

    & > div:nth-child(2) {
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        @media (max-width: 768px){
            width: 100%;
            justify-content: center;
            margin-bottom: 35px;
        }
    }

    & > div h1 {
        font-size: 2rem;
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        font-weight: 100;

        @media (max-width: 768px){
            font-size: 1.3rem;
            text-align: center;
            margin-bottom: 30px;
            margin-top: 15px;
        }
    }
`,mE=({images:e})=>{const[t,n]=_.useState(null);return _.useEffect(()=>{et.init({duration:1e3,once:!1}),et.refresh()},[]),c.jsxs(fE,{children:[c.jsxs(hE,{children:[c.jsx("div",{children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Conheça as nossas suítes"})}),c.jsx("div",{"data-aos":"fade-down","data-aos-delay":"250",children:c.jsx(Gi,{text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--white)",textColor:"var(--color--white)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})})]}),c.jsx("main",{"data-aos":"zoom-in-up","data-aos-delay":"400",children:e.map((r,i)=>c.jsxs("div",{onMouseEnter:()=>n(i),onMouseLeave:()=>n(null),children:[c.jsx("img",{src:r.src,alt:`Imagem ${i+1}`}),c.jsxs("span",{onClick:()=>window.location.href=`/#/acomodaMar#suite${i+1}`,children:[t===i?"Conhecer Suítes":r.text,t===i&&c.jsx(Qp,{})]})]},i))})]})},gE=k.div`
    height: 5vh;

    @media (max-width: 768px) {
        height: 0vh;
    }
`,vE=k.section`
    width: 100%;
    display: flex;
    padding: 5% 10% 2.5% 5%;
    align-items: center;
    justify-content: space-between;
    height: 95vh;
    position: relative;
    z-index: -1;
    background: #fff;

    &::before {
        content: '';
        width: 100%;
        height: 100vh;
        left: 0;
        top: -5vh;
        position: absolute;
        z-index: -1;
        opacity: 0.05;
        background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732195397/FOTO-MAR_qssync.webp');
        background-position: center;
        background-size: cover;

        @media (max-width:1080px){
            display: none!important;
        }
    }

    @media (max-width: 768px) {
        padding: 10% 2.5%;
        flex-direction: column-reverse;
    }
`,xE=k.div`
    width: 45%;
    height: 100%;
    background-image: url('https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1000/v1732195397/FOTO-MAR_qssync.webp');
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px 10px 30px 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    filter: contrast(110%);

    @media (max-width: 768px) {
        width: 100%;
        border-radius: 0px;
        border-image: fill 0 linear-gradient(#0001, #ffffff);
        box-shadow: none!important;
        position: absolute;
        height: 100%;
        top: 0;
        z-index: -1;
    }
`,yE=k.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        height: 35%;
    }

    & > h4 {
        font-family: var(--font--comfortaa);
        font-size: 18px;
        font-weight: 200;
        color: var(--color--black);

        @media (max-width: 768px) {
            color: var(--color--black);
            font-size: 14px;
            text-align: center;
            font-weight: 800;
        }
    }

    & > h1 {
        font-family: var(--font--comfortaa);
        text-align: right;
        font-size: 65px;
        width: 100%;
        line-height: 100%;
        font-weight: 100;
        color: var(--color--black);
        margin-top: -15px;

        @media (max-width: 768px) {
            display: inline-block;
            width: 100%;
            font-size: 35px;
            text-align: center;
            margin-top: -5px;
            font-weight: 100;
        }
    }

    & > h1 b {
        color: var(--color--blue);
        font-weight: 100;

        @media (max-width: 768px) {
            font-weight: 100;
        }
    }

    & > p {
        font-family: var(--font--comfortaa);
        color: var(--color--black);
        text-align: right;
        font-size: 18px;
        line-height: 100%;
        width: 50%;
        font-weight: 100;

        @media (max-width: 768px) {
            width: 80%;
            font-size: 1rem;
            text-align: center;
            padding-bottom: 10px;
        }
    }
`,wE=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1730832504/petfriendly-scaled_vsev2s.webp"},{title:"Praia",description:"Para os amantes da praia, estamos a apenas 150 metros da areia da Praia Rasa, onde você e seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731329813/cachorro_na_praia_pmqyi4.webp"},{title:"Piscinas",description:"Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele a do seu pet também!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731327001/pousada_de_cima_vpzpdb.webp"},{title:"Ofurôs",description:"São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731329813/ofuros_kyjddp.webp"},{title:"Sala de estar",description:"A sala de estar é aquela que abraça e aconchega. Cheia de sofás, você pode se acomodar e assistir uma televisão, ou até mesmo ler um livro, sempre na companhia do seu pet.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1730832504/saladeestar_yakcqy.webp"},{title:"Cozinha",description:"Na nossa diária, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731329808/caf%C3%A9_da_manh%C3%A3_vaxwlf.webp"},{title:"Bar",description:"Para completar ainda mais sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1730832503/bar_qgdbog.webp"},{title:"Suítes",description:"São 8 suítes elegantemente decoradas, todas com vista para o mar, banheira de imersão, varanda, cama king size, ar condicionado e frigobar.",buttonText:"Viver minha experiência agora",imageUrl:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_1500/v1731329811/suites_pzghlo.webp"}],bE=k.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -5vh;

    @media (max-width: 768px) {
        height: auto;
        padding: 0% 0 5% 0;
        margin-top: 0;
    }
`,SE=[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_5,w_1500/v1731594862/IMG_0140-compressed_q2fn5t.webp",text:"Suíte Superior 1",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_5,w_1500/v1731594863/IMG_0142-compressed_lfijwu.webp",text:"Suíte Standard 2",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_5,w_1500/v1731594863/IMG_0141-compressed_pl7ep8.webp",text:"Suíte Superior 3",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_5,w_1500/v1731594863/IMG_0139-compressed_nqmqdj.webp",text:"Suíte Superior 4",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_5,w_1500/v1731594862/IMG_0144-compressed_kqrioa.webp",text:"Suíte Superior 5",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_5,w_1500/v1731594870/mar_master_8_m1x38m.jpg",text:"Suíte Standard 6",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_5,w_1500/v1731594863/IMG_0143-compressed_fk4kgv.webp",text:"Suíte Master 7",loading:"lazy"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_5,w_1500/v1731594870/mar_master_8_m1x38m.jpg",text:"Suíte Master 8",loading:"lazy"}],_E=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 8vh;
    background-color: var(--color--blue);
    font-family: var(--font--comfortaa);

    @media (max-width: 768px) {
        height: 8vh;
        margin-bottom: 25px;
    }

    & > h1 {
        font-weight: 200;
        width: 80%;
        text-align: center;
        font-size: 1.1rem;
        color: var(--color--white);

        @media (max-width: 768px) {
            font-size: 1rem;
            font-weight: 400;
        }
    }
`,jE=k.section`
    width: 100%;
    height: 80vh;
    padding: 10% 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10vh;

    @media (max-width: 768px) {
        height: auto;
        margin-top: 0;
        padding: 10% 2.5% 0 2.5%;
    }
`,TE=[{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330263/frutos_do_mar1_ly3hq1.webp",title:"Frutos do mar",dateRange:"22/11/2024 até 24/11/2024 (2 diárias)",features:[{icon:c.jsx(fe,{}),text:"23/11 - Frutos do Mar"},{icon:c.jsx(zn,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(We,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"354,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330264/risotos_oj42yf.webp",title:"Noite de Risotos",dateRange:"29/11/2024 até 01/12/2024 (2 diárias)",features:[{icon:c.jsx(fe,{}),text:"30/11 - Noite de Risostos"},{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(We,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330265/pizzas_lgsqcd.webp",title:"Noite das pizzas",dateRange:"06/12/2024 até 08/12/2024 (3 diárias)",features:[{icon:c.jsx(fe,{}),text:"07/12 - Noite das pizzas"},{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(We,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330262/frutos_do_mar2_xyxatd.webp",title:"Frutos do Mar",dateRange:"13/12/2024 até 15/12/2024 (2 diárias)",features:[{icon:c.jsx(fe,{}),text:"14/12 - Frutos do Mar"},{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(We,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"359,20",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330263/fique3pague4_fiupcm.webp",title:"Fique 3 pague 4",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(zn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(We,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"538,90",discount:25},{image:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto/v1731330266/natal_wrunee.webp",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(zn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(We,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"918,40",discount:25}],CE=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px) {
        display: none;
    }
`,kE=[{images:[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335871/1_sxf4fc_a9uljb.webp",alt:"Foto de cachorro com uma bola na boca",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335872/2_cldel9_wnqquw.webp",alt:"Foto do cachorro sentado tomando sol",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335873/3_i0ctxp_megfsi.webp",alt:"Cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016972/mar5_wwsqtk.webp",alt:"Cachorro tirando uma selfie com outros 3 cachorros",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731327000/cachorro-olhando-para-camera_wpovwv.webp",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335875/5_flrzdf_wyxn6v.webp",alt:"Cachorro com a lingua para fora",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016973/mar4_ilxhpl.webp",alt:"Cachorro na borda da piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016973/mar6_wcjggv.webp",alt:"Cachorro em uma prancha de surf na onda",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335877/6_b6jtbs_dfnbyu.webp",alt:"Cachorro com óculos escuros",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335880/8_zr7p3o_czbag1.webp",alt:"Cachorro e um cachorro pequeno",loading:"lazy",label:"Le Ange Mar"}]},{images:[{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335878/7_gutmna_mncfkn.webp",alt:"Foto de um cachorro com uma taça do lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335881/10_olepft_mfx8nm.webp",alt:"3 cachorros e um homem na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016973/mar2_xvqf5o.webp",alt:"Cachorro marrom",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016973/mar1_tsyxm8.webp",alt:"Cachorro marrom na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016973/mar3_jmdiw8.webp",alt:"Cachorro branco olhando para a camera",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016973/mar7_vyslpi.webp",alt:"Cachorro dormindo no sofá",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1732016974/mar8_ywe1hn.webp",alt:"Cachorro em cima do morro olhando para o lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731335892/17_awkinq_ommg1k.webp",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://res.cloudinary.com/dupg7clzc/image/upload/f_auto,q_auto,w_600/v1731328214/cachorro_na_m%C3%A3o_kil7xk.webp",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"}],reverse:!0}],EE=()=>(_.useEffect(()=>{et.init({duration:1e3,once:!1}),et.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsxs(Nr,{children:[c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"}),c.jsx("link",{rel:"icon",href:"https://res.cloudinary.com/dupg7clzc/image/upload/v1731429562/4_bbtihr.svg"})]}),c.jsx(gE,{}),c.jsx(Yr,{}),c.jsxs(vE,{children:[c.jsxs(yE,{children:[c.jsx("h4",{"data-aos":"fade-up","data-aos-delay":"100",children:"Le Ange Mar, a pousada mais"}),c.jsxs("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"400",children:"Aqui você e seu pet, são mais do que bem-vindos!"}),c.jsx("div",{"data-aos":"fade-in","data-aos-delay":"500",children:c.jsx(Ki,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})})]}),c.jsx(xE,{"data-aos":"fade-left","data-aos-delay":"200"})]}),c.jsx(_E,{"data-aos":"fade-in","data-aos-delay":"100",children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"300",children:"LeAnge Mar | Armação dos Búzios RJ"})}),c.jsx(bE,{"data-aos":"fade-up","data-aos-delay":"50",children:c.jsx(Qy,{slides:wE,titleColor:"var(--color--blue)",buttonBgColor:"var(--color--blue)",imagePosition:"left"})}),c.jsx(mE,{images:SE}),c.jsx(Zy,{colorDefinedBold:"var(--color--blue)","data-aos":"fade-up","data-aos-delay":"400"}),c.jsx(ew,{carousels:kE,"data-aos":"fade-in","data-aos-delay":"400"}),c.jsx(CE,{children:c.jsx(Tt,{text:"Fazer minha reserva!"})}),c.jsx(jE,{"data-aos":"fade-up","data-aos-delay":"400",children:c.jsx(pf,{events:TE})}),c.jsx(Jy,{}),c.jsx(Yi,{})]}));function zE(e){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"},child:[]}]})(e)}var tw={exports:{}};(function(e,t){(function(n,r){e.exports=r(_)})(typeof self<"u"?self:G0,function(n){return function(r){var i={};function o(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return r[a].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=r,o.c=i,o.d=function(a,s,l){o.o(a,s)||Object.defineProperty(a,s,{enumerable:!0,get:l})},o.r=function(a){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},o.t=function(a,s){if(1&s&&(a=o(a)),8&s||4&s&&typeof a=="object"&&a&&a.__esModule)return a;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:a}),2&s&&typeof a!="string")for(var u in a)o.d(l,u,(function(d){return a[d]}).bind(null,u));return l},o.n=function(a){var s=a&&a.__esModule?function(){return a.default}:function(){return a};return o.d(s,"a",s),s},o.o=function(a,s){return Object.prototype.hasOwnProperty.call(a,s)},o.p="",o(o.s=2)}([function(r,i){r.exports=n},function(r,i,o){var a={linear:function(s,l,u,d){return(u-l)*s/d+l},easeInQuad:function(s,l,u,d){return(u-l)*(s/=d)*s+l},easeOutQuad:function(s,l,u,d){return-(u-l)*(s/=d)*(s-2)+l},easeInOutQuad:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?p/2*s*s+l:-p/2*(--s*(s-2)-1)+l},easeInCubic:function(s,l,u,d){return(u-l)*(s/=d)*s*s+l},easeOutCubic:function(s,l,u,d){return(u-l)*((s=s/d-1)*s*s+1)+l},easeInOutCubic:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?p/2*s*s*s+l:p/2*((s-=2)*s*s+2)+l},easeInQuart:function(s,l,u,d){return(u-l)*(s/=d)*s*s*s+l},easeOutQuart:function(s,l,u,d){return-(u-l)*((s=s/d-1)*s*s*s-1)+l},easeInOutQuart:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?p/2*s*s*s*s+l:-p/2*((s-=2)*s*s*s-2)+l},easeInQuint:function(s,l,u,d){return(u-l)*(s/=d)*s*s*s*s+l},easeOutQuint:function(s,l,u,d){return(u-l)*((s=s/d-1)*s*s*s*s+1)+l},easeInOutQuint:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?p/2*s*s*s*s*s+l:p/2*((s-=2)*s*s*s*s+2)+l},easeInSine:function(s,l,u,d){var p=u-l;return-p*Math.cos(s/d*(Math.PI/2))+p+l},easeOutSine:function(s,l,u,d){return(u-l)*Math.sin(s/d*(Math.PI/2))+l},easeInOutSine:function(s,l,u,d){return-(u-l)/2*(Math.cos(Math.PI*s/d)-1)+l},easeInExpo:function(s,l,u,d){return s==0?l:(u-l)*Math.pow(2,10*(s/d-1))+l},easeOutExpo:function(s,l,u,d){var p=u-l;return s==d?l+p:p*(1-Math.pow(2,-10*s/d))+l},easeInOutExpo:function(s,l,u,d){var p=u-l;return s===0?l:s===d?l+p:(s/=d/2)<1?p/2*Math.pow(2,10*(s-1))+l:p/2*(2-Math.pow(2,-10*--s))+l},easeInCirc:function(s,l,u,d){return-(u-l)*(Math.sqrt(1-(s/=d)*s)-1)+l},easeOutCirc:function(s,l,u,d){return(u-l)*Math.sqrt(1-(s=s/d-1)*s)+l},easeInOutCirc:function(s,l,u,d){var p=u-l;return(s/=d/2)<1?-p/2*(Math.sqrt(1-s*s)-1)+l:p/2*(Math.sqrt(1-(s-=2)*s)+1)+l},easeInElastic:function(s,l,u,d){var p,f,g,x=u-l;return g=1.70158,s===0?l:(s/=d)==1?l+x:((f=0)||(f=.3*d),(p=x)<Math.abs(x)?(p=x,g=f/4):g=f/(2*Math.PI)*Math.asin(x/p),-p*Math.pow(2,10*(s-=1))*Math.sin((s*d-g)*(2*Math.PI)/f)+l)},easeOutElastic:function(s,l,u,d){var p,f,g,x=u-l;return g=1.70158,s===0?l:(s/=d)==1?l+x:((f=0)||(f=.3*d),(p=x)<Math.abs(x)?(p=x,g=f/4):g=f/(2*Math.PI)*Math.asin(x/p),p*Math.pow(2,-10*s)*Math.sin((s*d-g)*(2*Math.PI)/f)+x+l)},easeInOutElastic:function(s,l,u,d){var p,f,g,x=u-l;return g=1.70158,s===0?l:(s/=d/2)==2?l+x:((f=0)||(f=d*.44999999999999996),(p=x)<Math.abs(x)?(p=x,g=f/4):g=f/(2*Math.PI)*Math.asin(x/p),s<1?p*Math.pow(2,10*(s-=1))*Math.sin((s*d-g)*(2*Math.PI)/f)*-.5+l:p*Math.pow(2,-10*(s-=1))*Math.sin((s*d-g)*(2*Math.PI)/f)*.5+x+l)},easeInBack:function(s,l,u,d,p){return p===void 0&&(p=1.70158),(u-l)*(s/=d)*s*((p+1)*s-p)+l},easeOutBack:function(s,l,u,d,p){return p===void 0&&(p=1.70158),(u-l)*((s=s/d-1)*s*((p+1)*s+p)+1)+l},easeInOutBack:function(s,l,u,d,p){var f=u-l;return p===void 0&&(p=1.70158),(s/=d/2)<1?f/2*(s*s*((1+(p*=1.525))*s-p))+l:f/2*((s-=2)*s*((1+(p*=1.525))*s+p)+2)+l},easeInBounce:function(s,l,u,d){var p=u-l;return p-a.easeOutBounce(d-s,0,p,d)+l},easeOutBounce:function(s,l,u,d){var p=u-l;return(s/=d)<.36363636363636365?p*(7.5625*s*s)+l:s<.7272727272727273?p*(7.5625*(s-=.5454545454545454)*s+.75)+l:s<.9090909090909091?p*(7.5625*(s-=.8181818181818182)*s+.9375)+l:p*(7.5625*(s-=.9545454545454546)*s+.984375)+l},easeInOutBounce:function(s,l,u,d){var p=u-l;return s<d/2?.5*a.easeInBounce(2*s,0,p,d)+l:.5*a.easeOutBounce(2*s-d,0,p,d)+.5*p+l}};r.exports=a},function(r,i,o){r.exports=o(3)},function(r,i,o){o.r(i),o.d(i,"ReactConfetti",function(){return le});var a,s,l=o(0),u=o.n(l),d=o(1),p=o.n(d);function f(P,O){return P+Math.random()*(O-P)}function g(P,O){for(var D=0;D<O.length;D++){var I=O[D];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(P,I.key,I)}}function x(P,O,D){return O in P?Object.defineProperty(P,O,{value:D,enumerable:!0,configurable:!0,writable:!0}):P[O]=D,P}(function(P){P[P.Circle=0]="Circle",P[P.Square=1]="Square",P[P.Strip=2]="Strip"})(a||(a={})),function(P){P[P.Positive=1]="Positive",P[P.Negative=-1]="Negative"}(s||(s={}));var y=function(){function P(I,G,B,q){(function(Dl,Nl){if(!(Dl instanceof Nl))throw new TypeError("Cannot call a class as a function")})(this,P),x(this,"context",void 0),x(this,"radius",void 0),x(this,"x",void 0),x(this,"y",void 0),x(this,"w",void 0),x(this,"h",void 0),x(this,"vx",void 0),x(this,"vy",void 0),x(this,"shape",void 0),x(this,"angle",void 0),x(this,"angularSpin",void 0),x(this,"color",void 0),x(this,"rotateY",void 0),x(this,"rotationDirection",void 0),x(this,"getOptions",void 0),this.getOptions=G;var te,se,pe=this.getOptions(),hn=pe.colors,$t=pe.initialVelocityX,qt=pe.initialVelocityY;this.context=I,this.x=B,this.y=q,this.w=f(5,20),this.h=f(5,20),this.radius=f(5,10),this.vx=typeof $t=="number"?f(-$t,$t):f($t.min,$t.max),this.vy=typeof qt=="number"?f(-qt,0):f(qt.min,qt.max),this.shape=(te=0,se=2,Math.floor(te+Math.random()*(se-te+1))),this.angle=f(0,360)*Math.PI/180,this.angularSpin=f(-.2,.2),this.color=hn[Math.floor(Math.random()*hn.length)],this.rotateY=f(0,1),this.rotationDirection=f(0,1)?s.Positive:s.Negative}var O,D;return O=P,(D=[{key:"update",value:function(){var I=this.getOptions(),G=I.gravity,B=I.wind,q=I.friction,te=I.opacity,se=I.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=G,this.vx+=B,this.vx*=q,this.vy*=q,this.rotateY>=1&&this.rotationDirection===s.Positive?this.rotationDirection=s.Negative:this.rotateY<=-1&&this.rotationDirection===s.Negative&&(this.rotationDirection=s.Positive);var pe=.1*this.rotationDirection;if(this.rotateY+=pe,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=te,this.context.lineCap="round",this.context.lineWidth=2,se&&typeof se=="function")se.call(this,this.context);else switch(this.shape){case a.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case a.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case a.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}])&&g(O.prototype,D),P}();function b(P,O,D){return O in P?Object.defineProperty(P,O,{value:D,enumerable:!0,configurable:!0,writable:!0}):P[O]=D,P}var v=function P(O,D){var I=this;(function(B,q){if(!(B instanceof q))throw new TypeError("Cannot call a class as a function")})(this,P),b(this,"canvas",void 0),b(this,"context",void 0),b(this,"getOptions",void 0),b(this,"x",0),b(this,"y",0),b(this,"w",0),b(this,"h",0),b(this,"lastNumberOfPieces",0),b(this,"tweenInitTime",Date.now()),b(this,"particles",[]),b(this,"particlesGenerated",0),b(this,"removeParticleAt",function(B){I.particles.splice(B,1)}),b(this,"getParticle",function(){var B=f(I.x,I.w+I.x),q=f(I.y,I.h+I.y);return new y(I.context,I.getOptions,B,q)}),b(this,"animate",function(){var B=I.canvas,q=I.context,te=I.particlesGenerated,se=I.lastNumberOfPieces,pe=I.getOptions(),hn=pe.run,$t=pe.recycle,qt=pe.numberOfPieces,Dl=pe.debug,Nl=pe.tweenFunction,Fl=pe.tweenDuration;if(!hn)return!1;var Bl=I.particles.length,Xi=$t?Bl:te,$l=Date.now();if(Xi<qt){se!==qt&&(I.tweenInitTime=$l,I.lastNumberOfPieces=qt);for(var ff=I.tweenInitTime,nw=Nl($l-ff>Fl?Fl:Math.max(0,$l-ff),Xi,qt,Fl),hf=Math.round(nw-Xi),mf=0;mf<hf;mf++)I.particles.push(I.getParticle());I.particlesGenerated+=hf}return Dl&&(q.font="12px sans-serif",q.fillStyle="#333",q.textAlign="right",q.fillText("Particles: ".concat(Bl),B.width-10,B.height-20)),I.particles.forEach(function(Qi,gf){Qi.update(),(Qi.y>B.height||Qi.y<-100||Qi.x>B.width+100||Qi.x<-100)&&($t&&Xi<=qt?I.particles[gf]=I.getParticle():I.removeParticleAt(gf))}),Bl>0||Xi<qt}),this.canvas=O;var G=this.canvas.getContext("2d");if(!G)throw new Error("Could not get canvas context");this.context=G,this.getOptions=D};function h(P,O){var D=Object.keys(P);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(P);O&&(I=I.filter(function(G){return Object.getOwnPropertyDescriptor(P,G).enumerable})),D.push.apply(D,I)}return D}function m(P){for(var O=1;O<arguments.length;O++){var D=arguments[O]!=null?arguments[O]:{};O%2?h(Object(D),!0).forEach(function(I){S(P,I,D[I])}):Object.getOwnPropertyDescriptors?Object.defineProperties(P,Object.getOwnPropertyDescriptors(D)):h(Object(D)).forEach(function(I){Object.defineProperty(P,I,Object.getOwnPropertyDescriptor(D,I))})}return P}function w(P,O){for(var D=0;D<O.length;D++){var I=O[D];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(P,I.key,I)}}function S(P,O,D){return O in P?Object.defineProperty(P,O,{value:D,enumerable:!0,configurable:!0,writable:!0}):P[O]=D,P}var j={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:p.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},C=function(){function P(I,G){var B=this;(function(te,se){if(!(te instanceof se))throw new TypeError("Cannot call a class as a function")})(this,P),S(this,"canvas",void 0),S(this,"context",void 0),S(this,"_options",void 0),S(this,"generator",void 0),S(this,"rafId",void 0),S(this,"setOptionsWithDefaults",function(te){var se={confettiSource:{x:0,y:0,w:B.canvas.width,h:0}};B._options=m(m(m({},se),j),te),Object.assign(B,te.confettiSource)}),S(this,"update",function(){var te=B.options,se=te.run,pe=te.onConfettiComplete,hn=B.canvas,$t=B.context;se&&($t.fillStyle="white",$t.clearRect(0,0,hn.width,hn.height)),B.generator.animate()?B.rafId=requestAnimationFrame(B.update):(pe&&typeof pe=="function"&&B.generator.particlesGenerated>0&&pe.call(B,B),B._options.run=!1)}),S(this,"reset",function(){B.generator&&B.generator.particlesGenerated>0&&(B.generator.particlesGenerated=0,B.generator.particles=[],B.generator.lastNumberOfPieces=0)}),S(this,"stop",function(){B.options={run:!1},B.rafId&&(cancelAnimationFrame(B.rafId),B.rafId=void 0)}),this.canvas=I;var q=this.canvas.getContext("2d");if(!q)throw new Error("Could not get canvas context");this.context=q,this.generator=new v(this.canvas,function(){return B.options}),this.options=G,this.update()}var O,D;return O=P,(D=[{key:"options",get:function(){return this._options},set:function(I){var G=this._options&&this._options.run,B=this._options&&this._options.recycle;this.setOptionsWithDefaults(I),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof I.recycle=="boolean"&&I.recycle&&B===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof I.run=="boolean"&&I.run&&G===!1&&this.update()}}])&&w(O.prototype,D),P}();function T(P){return function(O){if(Array.isArray(O))return U(O)}(P)||function(O){if(typeof Symbol<"u"&&Symbol.iterator in Object(O))return Array.from(O)}(P)||V(P)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function A(P){return(A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O})(P)}function E(){return(E=Object.assign||function(P){for(var O=1;O<arguments.length;O++){var D=arguments[O];for(var I in D)Object.prototype.hasOwnProperty.call(D,I)&&(P[I]=D[I])}return P}).apply(this,arguments)}function z(P,O){var D=Object.keys(P);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(P);O&&(I=I.filter(function(G){return Object.getOwnPropertyDescriptor(P,G).enumerable})),D.push.apply(D,I)}return D}function M(P){for(var O=1;O<arguments.length;O++){var D=arguments[O]!=null?arguments[O]:{};O%2?z(Object(D),!0).forEach(function(I){ye(P,I,D[I])}):Object.getOwnPropertyDescriptors?Object.defineProperties(P,Object.getOwnPropertyDescriptors(D)):z(Object(D)).forEach(function(I){Object.defineProperty(P,I,Object.getOwnPropertyDescriptor(D,I))})}return P}function R(P,O){return function(D){if(Array.isArray(D))return D}(P)||function(D,I){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(D)))){var G=[],B=!0,q=!1,te=void 0;try{for(var se,pe=D[Symbol.iterator]();!(B=(se=pe.next()).done)&&(G.push(se.value),!I||G.length!==I);B=!0);}catch(hn){q=!0,te=hn}finally{try{B||pe.return==null||pe.return()}finally{if(q)throw te}}return G}}(P,O)||V(P,O)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function V(P,O){if(P){if(typeof P=="string")return U(P,O);var D=Object.prototype.toString.call(P).slice(8,-1);return D==="Object"&&P.constructor&&(D=P.constructor.name),D==="Map"||D==="Set"?Array.from(P):D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D)?U(P,O):void 0}}function U(P,O){(O==null||O>P.length)&&(O=P.length);for(var D=0,I=new Array(O);D<O;D++)I[D]=P[D];return I}function Z(P,O){if(!(P instanceof O))throw new TypeError("Cannot call a class as a function")}function Y(P,O){for(var D=0;D<O.length;D++){var I=O[D];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(P,I.key,I)}}function L(P,O){return(L=Object.setPrototypeOf||function(D,I){return D.__proto__=I,D})(P,O)}function N(P){var O=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var D,I=J(P);if(O){var G=J(this).constructor;D=Reflect.construct(I,arguments,G)}else D=I.apply(this,arguments);return $(this,D)}}function $(P,O){return!O||A(O)!=="object"&&typeof O!="function"?K(P):O}function K(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}function J(P){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(O){return O.__proto__||Object.getPrototypeOf(O)})(P)}function ye(P,O,D){return O in P?Object.defineProperty(P,O,{value:D,enumerable:!0,configurable:!0,writable:!0}):P[O]=D,P}var he=u.a.createRef(),_e=function(P){(function(B,q){if(typeof q!="function"&&q!==null)throw new TypeError("Super expression must either be null or a function");B.prototype=Object.create(q&&q.prototype,{constructor:{value:B,writable:!0,configurable:!0}}),q&&L(B,q)})(G,P);var O,D,I=N(G);function G(B){var q;Z(this,G);for(var te=arguments.length,se=new Array(te>1?te-1:0),pe=1;pe<te;pe++)se[pe-1]=arguments[pe];return ye(K(q=I.call.apply(I,[this,B].concat(se))),"canvas",u.a.createRef()),ye(K(q),"confetti",void 0),q.canvas=B.canvasRef||he,q}return O=G,(D=[{key:"componentDidMount",value:function(){if(this.canvas.current){var B=de(this.props)[0];this.confetti=new C(this.canvas.current,B)}}},{key:"componentDidUpdate",value:function(){var B=de(this.props)[0];this.confetti&&(this.confetti.options=B)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var B=R(de(this.props),2),q=B[0],te=B[1],se=M({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},te.style);return u.a.createElement("canvas",E({width:q.width,height:q.height,ref:this.canvas},te,{style:se}))}}])&&Y(O.prototype,D),G}(l.Component);function de(P){var O={},D={},I=[].concat(T(Object.keys(j)),["confettiSource","drawShape","onConfettiComplete"]),G=["canvasRef"];for(var B in P){var q=P[B];I.includes(B)?O[B]=q:G.includes(B)?G[B]=q:D[B]=q}return[O,D,{}]}ye(_e,"defaultProps",M({},j)),ye(_e,"displayName","ReactConfetti");var le=u.a.forwardRef(function(P,O){return u.a.createElement(_e,E({canvasRef:O},P))});i.default=le}]).default})})(tw);var PE=tw.exports;const AE=Br(PE);Vn`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;const U0=k.select`
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 10px 10px 0 10px;
  background: linear-gradient(135deg, var(--color--light-gray), var(--color--white));
  color: var(--color--black);
  appearance: none;
  cursor: pointer;
  font-family: var(--font--comfortaa);
  font-size: 0.8rem;
  transition: all .2s ease, border .2s ease;

  &:hover {
    background-color: transparent;
    color: var(--color--black);
    border: 1px solid rgba(0, 0, 0, 0.4);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 0.8rem;
    margin-top: -6px;
  }

  option {
    padding: 8px;
    margin: 4px 0;
    background: linear-gradient(135deg, var(--color--blue), var(--color--green));
    color: var(--color--black);
  }

  option:hover {
    background-color: var(--color--green);
    color: var(--color--hover-text);
    font-style: italic;
  }

  option:nth-child(even) {
    background: transparent!important;
    border: none;
  }

  option:nth-child(odd) {
    background-color: var(--color--white);
  }

  option:checked {
    background-color: var(--color--black);
    color: var(--color--white);
    font-weight: bold;
  }

  option:nth-child(1) {
    @media (max-width: 768px) {
      font-size: 0.6rem !important;
      padding: 10px !important;
      color: transparent !important;
      background-color: transparent !important;
    }
  }

  option:nth-child(2) {
    color: var(--color--green);
    font-weight: 800;

    @media (max-width: 768px) {
      font-size: 0.6rem !important;
      padding: 10px !important;
      text-align: left;
    }
  }

  option:nth-child(3) {
    color: var(--color--blue);
    font-weight: 800;

    @media (max-width: 768px) {
      font-size: 0.6rem !important;
      padding: 10px !important;
      text-align: left;
    }
  }
`,ME=k.div`
  display: ${({isLoading:e})=>e?"flex":"none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  align-items: center;
  justify-content: center;
  z-index: 9999; /* Garantir que fique acima de outros elementos */

  & img {
    width: 350px; /* Ajuste o tamanho do GIF aqui */
    height: auto;
  }
`,LE=k.div`
    display: none;

    @media (min-width: 1080px) {
        display: flex;
        background-color: ${({isScrolled:e})=>e?"rgba(251, 251, 251, 0.5)":"#fbfbfb"};
        backdrop-filter: ${({isScrolled:e})=>e?"blur(10px)":"none"}; 
        position: fixed;
        align-items: center;
        justify-content: space-between;
        width: 85%;
        max-width: 1440px;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 10px;
        padding: 0 2.5%;
        height: 10vh;
        box-shadow: 0 0 5px #4d4d4d50;
        border-radius: 16px 8px 16px 8px;
        z-index: 999;
        transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
    }
`,OE=k.header`
    display: flex;
    gap: 5px;
`,vn=k(({isActive:e,...t})=>c.jsx(vv,{...t}))`
    position: relative;
    color: var(--color--black);
    text-decoration: none;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font--comfortaa);
    font-weight: 400;
    padding: 5px 15px;
    transition: all 0.3s ease;
    border-radius: 10px 10px 0 10px;
    background-color: ${({isActive:e,variant:t})=>e?t==="serra"?"var(--color--green)":t==="mar"?"var(--color--blue)":"var(--color--black)":"transparent"};
    color: ${({isActive:e})=>e?"var(--color--white)":"var(--color--black)"};

    &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 100%;
        left: 0;
        background: rgb(20, 20, 20);
        opacity: 0;
        z-index: -1;
        transition: all 0.5s;
        border-radius: 10px 10px 0 10px;
    }

    &:hover {
        color: var(--color--white);
        background-color: ${({variant:e})=>e==="serra"?"var(--color--green)":e==="mar"?"var(--color--blue)":"var(--color--black)"};
    }

    &:hover::before {
        left: 0;
        right: 0;
        opacity: 1;
    }
`,rn=k.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 0;
    height: 0;
    opacity: 0;
    transform: scale(0);
    transition: opacity 0.3s ease, transform 0.3s ease, width 0.3s ease, height 0.3s ease;
    overflow: hidden;

    ${({isVisible:e})=>e&&` 
        width: 13px;
        height: 13px;
        opacity: 1;
        transform: scale(1);
        margin-right: 7.5px;
    `}
`,IE=k.div`
    opacity: ${({isVisible:e})=>e?1:0};
    transition: opacity 1s ease-out;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
`,W0=k(vn)`
    background: ${({isActive:e})=>e?"linear-gradient(45deg, #ff6b6b, #f06595, #eeafaf)":"transparent"};
    color: ${({isActive:e})=>e?"white":"var(--color--black)"};

    &:hover {
        background: linear-gradient(45deg, #f06595, #ff6b6b, #eeafaf);
        color: white;
    }
`,RE=k.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        background-color: ${({isScrolled:e})=>e?"rgba(251, 251, 251, 0.4)":"#fbfbfb"};
        backdrop-filter: ${({isScrolled:e})=>e?"blur(10px)":"none"}; 
        position: fixed;
        z-index: 999;
        align-items: center;
        justify-content: space-between;
        width: 85%;
        margin-left: 7.5%;
        margin-top: 10px;
        padding: 0 5%;
        height: 8vh;
        box-shadow: 0 0 5px #4d4d4d80;
        border-radius: 10px 0 10px 0;

        & > img {
            width: 25%;
            height: 100%;
            object-fit: contain;
        }

        & > button {
            display: flex;
            width: 30%;
            border-radius: 5px 0 5px 0;
            font-family: var(--font--comfortaa);
            border: none;
            font-size: 12px;
            padding: 7.5px;
            gap: 2.5px;
            background-color: transparent;
            color: var(--color--black);
            align-items: center;
            justify-content: space-evenly;
            transition: all 0.2s ease;
            border: 1px solid var(--color--black);
            background-color: ${({isClicked:e})=>e?"var(--color--black)":"transparent"};
            color: ${({isClicked:e})=>e?"var(--color--white)":"var(--color--black)"};

            &:hover {
                background-color: var(--color--black);
                color: var(--color--white);
                border: 1px solid var(--color--black);
                transform: scale(0.95);
            }
        }
    }
`,VE=k.div`
    display: flex;
    position: fixed;
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 0 20px 20px 0;
    padding: 20px;
    width: 250px;
    height: 95dvh;
    margin-top: 2.5vh;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    transform: translateX(-100%);
    transition: transform 0.3s ease;

    ${({isOpen:e})=>e&&` 
        transform: translateX(0);
    `}

    & > button:nth-child(1) {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 12px;
        border: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: var(--color--black);
        color: var(--color--white);
        font-family: var(--font--comfortaa);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all .2s ease-in-out;

        &:hover{
            transform: rotate(180deg) scale(0.95);
            border: 2px solid var(--color--black);
            background-color: red;
        }
    }

    & > img {
        width: 65%;
        margin-top: 50px;
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
`,DE=()=>{const e=Rn(),[t,n]=_.useState(!1),[r,i]=_.useState(!1),[o,a]=_.useState(!1),[s,l]=_.useState(!1),[u,d]=_.useState(!1),[p,f]=_.useState(!1);let g;const x=()=>{l(S=>!S),d(S=>!S)},y=()=>{l(!1),d(!1)},b=()=>{a(!0),clearTimeout(g),g=setTimeout(()=>{a(!1)},3e3)},v=Sl(),[h,m]=_.useState(""),w=S=>{const j=S.target.value;j&&(m(j),v(j))};return _.useEffect(()=>(window.addEventListener("scroll",b),()=>{window.removeEventListener("scroll",b),clearTimeout(g)}),[]),_.useEffect(()=>{if(e.pathname!=="/"){f(!0);const S=setTimeout(()=>{f(!1)},1e3);return()=>clearTimeout(S)}else f(!1)},[e.pathname]),_.useEffect(()=>{if(e.pathname==="/event"){n(!0),i(!0);const S=setTimeout(()=>{i(!1),setTimeout(()=>n(!1),1e3)},8e3);return()=>clearTimeout(S)}else i(!1),setTimeout(()=>n(!1),1e3)},[e.pathname]),_.useEffect(()=>{s&&y()},[e.pathname]),c.jsxs(c.Fragment,{children:[c.jsx(ME,{isLoading:p,children:c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1731007469/V1_kdjdkc.gif",alt:"Loading..."})}),c.jsxs(LE,{isScrolled:o,children:[t&&c.jsx(IE,{isVisible:r,children:c.jsx(AE,{})}),c.jsx(vv,{to:"/","aria-label":"Home",children:c.jsxs("picture",{children:[c.jsx("source",{media:"(max-width: 480px)",srcSet:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729513421/black_kteyv6.png"}),c.jsx("source",{media:"(max-width: 768px)",srcSet:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729513421/black_kteyv6.png"}),c.jsx("source",{media:"(min-width: 769px)",srcSet:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729513421/black_kteyv6.png"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729513421/black_kteyv6.png",alt:"Logo da Empresa",style:{maxHeight:"40px"}})]})}),c.jsxs(OE,{children:[c.jsxs(vn,{to:"/",isActive:e.pathname==="/",children:[c.jsx(rn,{isVisible:e.pathname==="/",children:c.jsx(a0,{})}),"Início"]}),c.jsxs(vn,{to:"/sobre",isActive:e.pathname==="/sobre",children:[c.jsx(rn,{isVisible:e.pathname==="/sobre",children:c.jsx(s0,{})}),"Sobre nós"]}),c.jsxs(vn,{to:"/mar",variant:"mar",isActive:e.pathname==="/mar",children:[c.jsx(rn,{isVisible:e.pathname==="/mar",children:c.jsx(r0,{})}),"Le Ange Mar"]}),c.jsxs(vn,{to:"/serra",variant:"serra",isActive:e.pathname==="/serra",children:[c.jsx(rn,{isVisible:e.pathname==="/serra",children:c.jsx(fC,{})}),"Le Ange Serra"]}),c.jsxs(W0,{to:"/event",isActive:e.pathname==="/event",children:[c.jsx(rn,{isVisible:e.pathname==="/event",children:c.jsx(i0,{})}),"Eventos"]}),c.jsxs(U0,{onChange:w,value:h,children:[c.jsx("option",{disabled:!0,value:"",children:"Acomodações"}),c.jsx("option",{value:"/acomodaSerra",children:"Suítes Serra"}),c.jsx("option",{value:"/acomodaMar",children:"Suítes Mar"})]})]}),c.jsx(Tt,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer minha reserva"})]}),c.jsxs(RE,{isScrolled:o,children:[c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729513421/black_kteyv6.png",alt:"logo da le ange"}),c.jsxs("button",{onClick:x,isClicked:u,children:["Menu",c.jsx(zE,{})]})]}),c.jsxs(VE,{isOpen:s,children:[c.jsx("button",{onClick:y,children:"X"}),c.jsx("img",{src:"https://res.cloudinary.com/dupg7clzc/image/upload/v1729513421/black_kteyv6.png",alt:"logo da le ange"}),c.jsxs("div",{children:[c.jsxs(vn,{to:"/",isActive:e.pathname==="/",onClick:y,children:[c.jsx(rn,{isVisible:e.pathname==="/",children:c.jsx(a0,{})}),"Início"]}),c.jsxs(vn,{to:"/sobre",isActive:e.pathname==="/sobre",onClick:y,children:[c.jsx(rn,{isVisible:e.pathname==="/sobre",children:c.jsx(s0,{})}),"Sobre nós"]}),c.jsxs(vn,{to:"/mar",variant:"mar",isActive:e.pathname==="/mar",onClick:y,children:[c.jsx(rn,{isVisible:e.pathname==="/mar",children:c.jsx(r0,{})}),"Le Ange Mar"]}),c.jsxs(vn,{to:"/serra",variant:"serra",isActive:e.pathname==="/serra",onClick:y,children:[c.jsx(rn,{isVisible:e.pathname==="/serra",children:c.jsx(q6,{})}),"Le Ange Serra"]}),c.jsxs(W0,{to:"/event",isActive:e.pathname==="/event",onClick:y,children:[c.jsx(rn,{isVisible:e.pathname==="/event",children:c.jsx(i0,{})}),"Eventos"]}),c.jsxs(U0,{onChange:w,value:h,children:[c.jsx("option",{disabled:!0,value:"",children:"Acomodações"}),c.jsx("option",{value:"/acomodaSerra",children:"Suítes Serra"}),c.jsx("option",{value:"/acomodaMar",children:"Suítes Mar"})]})]}),c.jsx(Tt,{text:"Fazer minha reserva",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]})},NE=Wi`
  .swiper-button-next, .swiper-button-prev {
      color: white; 
      border-radius: 50%;
      width: 45px;
      height: 45px;
      background-color: rgba(0, 0, 0, 0.6);
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5)!important;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all .2s ease;

      &:hover {
          background-color: rgba(255, 255, 255, .7);
          color: black;
          transform: scale(1.05);
      }

      &::after {
          font-size: 25px; /* Ajuste aqui o tamanho do ícone */
      }
  }

  .swiper-pagination-bullet {
      background: black;
      opacity: 0.7;
      &.swiper-pagination-bullet-active {
          background: #A5C933;
      }
  }
`,FE=k.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    padding: 0 5%;
    gap: 15px;
    flex-direction: ${({reverse:e})=>e?"row-reverse":"row"};

    @media (max-width: 768px){
        flex-direction: column;
        height: auto;
        padding: 5% 2.5%;
    }
`,BE=k.div`
    width: 50%;
    height: 95%;
    border-radius: 15px 10px 25px 5px;

    @media (max-width: 768px){
        width: 100%;
        height: 50vh;
    }
`,$E=k.div`
    width: 50%;
    height: 95%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 25px;
    background-color: ${({background:e})=>e||"rgba(0, 0, 0, 0.1)"};
    border-radius: 0px 30px 0px 10px;

    @media (max-width: 768px){
        width: 100%;
        height: 55vh;
        padding: 15px;
        gap: 50px;
    }

    & > div{
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        & > section{
            width: 100%;
            display: flex;

            & > div{
                width: 100%;
                display: flex;
                justify-content: space-between;

                & > p{
                    font-size: 1.5rem;
                    font-weight: 300;
                    font-family: var(--font--comfortaa);
                    color: var(--color--black);

                    @media (max-width: 768px){
                        font-size: 1.2rem;
                    }
                }
            }
        }
    }
`,qE=k.h2`
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color--black);
    font-family: var(--font--comfortaa);
    font-weight: 400;
    padding: 3px 12px;
    border-radius: 0 10px 0 10px;
    background-color: transparent;
    cursor: default;


    @media (max-width: 768px){
        font-size: .7rem;
        padding: 5px 15px;
        display: inline;
        white-space: nowrap;
    }
`,HE=k.p`
    font-size: .9rem;
    line-height: 120%;
    color: var(--color--black); 
    font-family: var(--font--comfortaa)!important;
    
    @media (max-width: 768px){
        font-size: 0.75rem;
    }
`,UE=k.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;

    span {
        display: flex;
        align-items: center;
        gap: 5px;
        background: var(--color--white);
        backdrop-filter: blur(10px);
        justify-content: center;
        gap: 10px;
        padding: 5px 10px;
        border-radius: 12px 0 12px 0;
        font-size: 10px;
        transition: all .2s ease;
        font-family: var(--font--comfortaa);

        @media (max-width: 768px){
            font-size: 10px;
            font-weight: 300;
            padding: 5px 10px;
        }
        
        &:hover {
            color: var(--color--white);
            background-color: var(--color--black);
            cursor: default;
        }
    }

    svg {
        font-size: 14px;

        @media (max-width: 768px){
            font-size: 12px;
        }
    }
`,WE=k.img`
    width: 100%;
    height: 75.8vh;
    object-fit: cover;
    border-radius: 15px 10px 25px 5px;

    @media (max-width: 768px){
        height: 50vh;
    }
`,$e=ee.forwardRef(({images:e=[],suites:t=[],reverse:n=!1,background:r="rgba(0, 0, 0, 0.1)"},i)=>(_.useEffect(()=>{et.init({duration:1e3,once:!1}),et.refresh()},[]),c.jsxs(FE,{reverse:n,ref:i,children:[c.jsxs(BE,{"data-aos":"zoom-in","data-aos-delay":"50",children:[c.jsx(NE,{}),c.jsx(en,{modules:[Dn,vr,gr],autoplay:{delay:2e5,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:!0,pagination:!0,loop:!0,spaceBetween:10,slidesPerView:1,children:e.map((o,a)=>c.jsx(tn,{children:c.jsx(WE,{src:o,alt:`Slide ${a+1}`})},a))})]}),c.jsx($E,{background:r,"data-aos":"fade-up","data-aos-delay":"100",children:t.map((o,a)=>{var s;return c.jsxs("div",{children:[c.jsx("section",{children:c.jsxs("div",{children:[c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"150",children:o.NomedaSuite}),c.jsx(qE,{"data-aos":"fade-up","data-aos-delay":"200",children:o.NomedaPousada})]})}),c.jsx(UE,{"data-aos":"fade-up","data-aos-delay":"250",children:(s=o.features)==null?void 0:s.map((l,u)=>c.jsxs("span",{children:[l.icon," ",l.text]},u))}),c.jsx(HE,{"data-aos":"fade-in","data-aos-delay":"400",children:o.Description}),c.jsx(Tt,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva agora!"})]},a)})})]})));function lt(e){return Q({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5"},child:[]},{tag:"path",attr:{d:"m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8"},child:[]}]})(e)}const GE=k.div`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 100%;
    padding: 22vh 0 10vh 0;
    font-size: 1.7rem;
    font-family: var(--font--comfortaa);
    gap: 5px;
    font-weight: 200;

    @media (max-width: 768px){
        height: 15vh;
        padding: 20vh 0 6vh 0 ;
    }

    & > b{
        color: var(--color--green);
        font-weight: 400;
    }

`,YE=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731344205/suiteSuperior1_gpjls0_l6yhv9.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731344197/1_o5yez9_vrlet1.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731344198/3_aiyrqa_btekxc.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731344200/4_ywuuuc_b8t7x3.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731344203/5_onjzk1_ysyao3.webp"],KE=[{NomedaSuite:"Suíte Superior 1",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(Ce,{}),text:"52m²"},{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(Ke,{}),text:"Frigobar"},{icon:c.jsx(vt,{}),text:"Lareira"},{icon:c.jsx(lt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Ne,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ye,{}),text:"Varanda privativa"}],Description:"Uma suíte de 52m², com cama King Size, ar-condicionado e lareira para momentos acolhedores. A varanda privativa oferece vista para a natureza, e o banheiro conta com banheira relaxante e aquecedor de toalhas, garantindo total conforto e sofisticação."}],XE=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731344820/1_x3uulk_dj8iz3.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731344821/2_o7w1df_rfa8ao.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731344824/3_u2ikyj_bbap70.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731344826/4_wte9h1_nbgckn.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731344829/5_olm5xn_up47by.webp"],QE=[{NomedaSuite:"Suíte Superior 2",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(Ce,{}),text:"52m²"},{icon:c.jsx(Ne,{}),text:"Cama king size"},{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(vt,{}),text:"Lareira"},{icon:c.jsx(Ke,{}),text:"Frigobar"},{icon:c.jsx(lt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ye,{}),text:"Varanda privativa"}],Description:"Desfrute de 52m² de exclusividade: cama King Size, ar-condicionado e lareira para momentos de descanso. A varanda privativa oferece vista para a mata, e o banheiro com banheira e aquecedor de toalhas garante total conforto. A suíte ainda conta com frigobar, chaleira elétrica e Smart TV com canais a cabo."}],ZE=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731345105/1_ylximp_j7rlx6.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345099/3_drrdp6_jeadzb.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345108/2_naq3yx_r415zb.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345101/4_lpovtm_pybn3y.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345103/5_tsqexf_xy8tbc.webp"],JE=[{NomedaSuite:"Suíte Superior 3",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(Ce,{}),text:"52m²"},{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(vt,{}),text:"Lareira"},{icon:c.jsx(Ke,{}),text:"Frigobar"},{icon:c.jsx(lt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ye,{}),text:"Varanda privativa"}],Description:"Viva 52m² de conforto, com cama King Size e a calorosa presença de uma lareira. A varanda privativa oferece vista para a mata, e o banheiro conta com banheira relaxante e aquecedor de toalhas. A suíte ainda tem frigobar, chaleira elétrica e Smart TV com canais a cabo, criando o ambiente perfeito para o descanso."}],ez=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731345365/1_s9b5nq_bkdxnp.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345367/2_hyhg8t_a7ameu.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345369/3_s0ig5c_vrsvhv.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345371/4_oppeg3_o41fdi.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345374/5_kb5ean_xhm0vu.webp"],tz=[{NomedaSuite:"Suíte Standard 4",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(Ce,{}),text:"52m²"},{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(vt,{}),text:"Lareira"},{icon:c.jsx(Ke,{}),text:"Frigobar"},{icon:c.jsx(lt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ye,{}),text:"Varanda privativa"}],Description:"Desfrute de 52m² de conforto com cama King Size, ar-condicionado e lareira para momentos de descanso. Relaxe na banheira com vista para a mata, enquanto o banheiro oferece chuveiro e aquecedor de toalhas. Com frigobar, Smart TV a cabo e varanda com vista compartilhada."}],nz=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731345603/1_rnbhj2_kghiue.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345605/2_msj4wh_rrl3zt.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345608/3_b8v99f_aiaxqa.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345617/4_rdcxvu_sjgtje.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345621/5_cwrlxp_pjsznc.webp"],rz=[{NomedaSuite:"Suíte Standard 5",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(Ce,{}),text:"52m²"},{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(vt,{}),text:"Lareira"},{icon:c.jsx(Ke,{}),text:"Frigobar"},{icon:c.jsx(lt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ye,{}),text:"Varanda privativa"}],Description:"Viva a experiência de 52m² de puro conforto com cama King Size, ar-condicionado e lareira para momentos acolhedores. A banheira, com vista para a mata, e o banheiro com chuveiro e aquecedor de toalhas garantem seu relaxamento."}],iz=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731345889/1_ytelar_a4gkq4.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345890/2_y07hp1_gxkw0f.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345893/3_ennrfl_tsrdpf.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345900/4_nmnmdm_pb6suc.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731345903/5_zjbujo_ojixkc.webp"],oz=[{NomedaSuite:"Suíte Master 6",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(Ce,{}),text:"77m²"},{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(vt,{}),text:"Lareira"},{icon:c.jsx(df,{}),text:"Chaise lounge"},{icon:c.jsx(Gy,{}),text:"Bay window"},{icon:c.jsx(Ke,{}),text:"Frigobar"},{icon:c.jsx(lt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ye,{}),text:"Ampla varanda privativa"}],Description:"Desfrute de 77m² de luxo com cama King Size, ar-condicionado e lareira. Relaxe na chaise lounge ao lado da Bay Window, aproveite o frigobar e a Smart TV com canais a cabo, ou relaxe na banheira com vista para a mata."}],az=["https://res.cloudinary.com/dupg7clzc/image/upload/v1730146635/1_r9brij.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146632/2_lp3nwj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146632/3_hahgqj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146193/4_rdcxvu.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1730146631/4_hstjdq.jpg"],sz=[{NomedaSuite:"Suíte Standard 7",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(Ce,{}),text:"52m²"},{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(Ne,{}),text:"Cama king size"},{icon:c.jsx(vt,{}),text:"Lareira"},{icon:c.jsx(Ke,{}),text:"Frigobar"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ye,{}),text:"Varanda NÃO privativa"}],Description:"Relaxe em uma suíte de 52m², com cama King Size, ar-condicionado e lareira para total conforto. Aproveite a banheira com vista para a mata e desfrute do frigobar e Smart TV com canais a cabo. O banheiro conta com chuveiro e aquecedor de toalhas."}],lz=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731346391/1_deflqw_o0h5op.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731346395/3_apyt83_m5wg8y.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731346393/2_vtsru4_j58fi3.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731346398/4_a4uhie_akrdkl.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731346401/5_s3imtf_jey5us.webp"],cz=[{NomedaSuite:"Suíte Standard 8",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(Ce,{}),text:"52m²"},{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(Ne,{}),text:"Cama king size"},{icon:c.jsx(vt,{}),text:"Lareira"},{icon:c.jsx(Ke,{}),text:"Frigobar"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ye,{}),text:"Varanda NÃO privativa"}],Description:"Relaxe em uma suíte de 52m² projetada para o seu conforto: cama King Size, ar-condicionado e lareira que criam o ambiente perfeito. Desfrute de momentos únicos na banheira com vista para a mata e aproveite o frigobar e a Smart TV com canais a cabo."}],uz=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731346629/1_ougeas_aj0kkp.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731346631/2_qiphp1_zbes5m.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731346636/4_ams1oh_mxicwx.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731346633/3_x7jhml_auko3f.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731346640/5_texuuu_e0gps2.webp"],dz=[{NomedaSuite:"Suíte Superior 9",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(Ce,{}),text:"52m²"},{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(Ne,{}),text:"Cama king size"},{icon:c.jsx(vt,{}),text:"Lareira"},{icon:c.jsx(Ke,{}),text:"Frigobar"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(lt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ye,{}),text:"Varanda privativa"}],Description:"Desfrute de uma suíte de 52m² com cama King Size, ar-condicionado e lareira, criando o ambiente ideal para relaxar. A banheira com vista para a mata proporciona momentos únicos, enquanto o frigobar e a Smart TV com canais a cabo garantem seu entretenimento."}],pz=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731347011/1_lj4tav_i26aev.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731347012/2_rwd1oh_clvvnj.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731347015/3_hybfzc_rsrbwj.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731347018/4_p052an_rslqub.webp","https://res.cloudinary.com/dupg7clzc/image/upload/v1731347020/5_aqbze0_ae2782.webp"],fz=[{NomedaSuite:"Suíte Master 10",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(Ce,{}),text:"77m²"},{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(Ne,{}),text:"Cama king size"},{icon:c.jsx(yd,{}),text:"Recamier e poltrona de leitura"},{icon:c.jsx(vt,{}),text:"Lareira"},{icon:c.jsx(df,{}),text:"Couch lounge"},{icon:c.jsx(Ke,{}),text:"Frigobar"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(lt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ye,{}),text:"Ampla varanda privativa"}],Description:"Viva o conforto em uma suíte de 77m² equipada com cama King Size, ar-condicionado e lareira para momentos de puro relaxamento. Desfrute de um recamier, poltrona de leitura e um confortável couch lounge, ideais para descanso e lazer."}],hz=()=>{const e=Rn(),t={suite1:_.useRef(null),suite2:_.useRef(null),suite3:_.useRef(null),suite4:_.useRef(null),suite5:_.useRef(null),suite6:_.useRef(null),suite7:_.useRef(null),suite8:_.useRef(null),suite9:_.useRef(null),suite10:_.useRef(null)};return _.useEffect(()=>{et.init({duration:1e3,once:!1}),et.refresh()},[]),_.useEffect(()=>{const n=()=>{var o;const i=e.hash.replace("#","");if(console.log("Hash atual:",i),i&&((o=t[i])!=null&&o.current)){const a=t[i].current;if(a){const s=a.offsetTop-100;console.log(`Elemento encontrado: ${i}, rolando para: ${s}px`),window.scrollTo({top:s,behavior:"smooth"})}else console.log(`Elemento com ID ${i} não encontrado no DOM.`)}else console.log(`Hash ${i} não está associado a um ref válido.`)},r=()=>{console.log("Página carregada, verificando hash..."),n()};return window.addEventListener("load",r),window.addEventListener("hashchange",n),n(),()=>{window.removeEventListener("load",r),window.removeEventListener("hashchange",n)}},[e,t]),c.jsxs(c.Fragment,{children:[c.jsx(Yr,{}),c.jsxs(GE,{children:["Acomodações da",c.jsx("b",{children:"Pousada Le Ange Serra"})]}),c.jsx($e,{id:"suite1",ref:t.suite1,images:YE,suites:KE,reverse:!0,background:"#CAD76680"}),c.jsx($e,{id:"suite2",ref:t.suite2,images:XE,suites:QE,reverse:!1,background:"#CAD76680"}),c.jsx($e,{id:"suite3",ref:t.suite3,images:ZE,suites:JE,reverse:!0,background:"#CAD76680"}),c.jsx($e,{id:"suite4",ref:t.suite4,images:ez,suites:tz,reverse:!1,background:"#CAD76680"}),c.jsx($e,{id:"suite5",ref:t.suite5,images:nz,suites:rz,reverse:!0,background:"#CAD76680"}),c.jsx($e,{id:"suite6",ref:t.suite6,images:iz,suites:oz,reverse:!1,background:"#CAD76680"}),c.jsx($e,{id:"suite7",ref:t.suite7,images:az,suites:sz,reverse:!0,background:"#CAD76680"}),c.jsx($e,{id:"suite8",ref:t.suite8,images:lz,suites:cz,reverse:!1,background:"#CAD76680"}),c.jsx($e,{id:"suite9",ref:t.suite9,images:uz,suites:dz,reverse:!0,background:"#CAD76680"}),c.jsx($e,{id:"suite10",ref:t.suite10,images:pz,suites:fz,reverse:!1,background:"#CAD76680"}),c.jsx(Yi,{})]})},mz=k.div`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 100%;
    padding: 22vh 0 10vh 0;
    font-size: 1.7rem;
    font-family: var(--font--comfortaa);
    gap: 5px;
    font-weight: 200;

    @media (max-width: 768px){
        height: 15vh;
        padding: 20vh 0 6vh 0 ;
    }

    & > b{
        color: var(--color--blue);
        font-weight: 400;
    }

`,gz=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731347671/1_jbfcfw-compressed_fowhdw.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731347679/2_avh1mm-compressed_jmpbxs.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731347674/5_bw0qou-compressed_au8uhx.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731347677/4_j3c1yo-compressed_fmuvak.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731347669/3_kplwmw-compressed_ctw3wb.jpg"],vz=[{NomedaSuite:"Suíte Superior 1",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(Ce,{}),text:"28m²"},{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(Ke,{}),text:"Frigobar"},{icon:c.jsx(lt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Ne,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ye,{}),text:"Varanda privativa"}],Description:"A Suíte Superior 1 no Le Ange Mar oferece 28m² de conforto e sofisticação para até 3 adultos. Com uma cama King Size, a suíte garante uma estadia relaxante com ar-condicionado, lareira e frigobar. Desfrute de momentos de bem-estar na banheira relaxante ou no chuveiro."}],xz=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731348252/2_uonrhf-compressed_vtj5ay.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731348249/3_ysfzuk-compressed_drqyfp.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731348244/5_dub0pj-compressed_nycmvi.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731348255/1_ofu5mj-compressed_ele8hy.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731348246/4_ulr721-compressed_njwzhs.jpg"],yz=[{NomedaSuite:"Suíte Standard 2",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(Ce,{}),text:"30m²"},{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(Ke,{}),text:"Frigobar"},{icon:c.jsx(lt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Ne,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ye,{}),text:"Varanda privativa"}],Description:"A Suíte Standard 2 no Le Ange Mar oferece 30m² de conforto e tranquilidade, ideal para até 4 adultos. Com cama King Size, ar-condicionado e lareira, é o ambiente perfeito para relaxar. A suíte conta com frigobar, chaleira elétrica e Smart TV para seu entretenimento."}],wz=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731348602/1_mkvfcp-compressed_gr43kj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731348599/2_ciuk0m-compressed_cehbai.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731348597/3_njizit-compressed_na7v2c.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731348592/5_mjfm3k-compressed_tfneqy.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731348594/4_d5kp62-compressed_lcocv8.jpg"],bz=[{NomedaSuite:"Suíte Superior 3",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(Ce,{}),text:"32m²"},{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(Ke,{}),text:"Frigobar"},{icon:c.jsx(lt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Ne,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ye,{}),text:"Varanda privativa"}],Description:"A Suíte Superior 3 no Le Ange Mar oferece 32m² de sofisticação e conforto, ideal para até 2 adultos. A cama King Size, ar-condicionado e lareira criam um ambiente acolhedor, enquanto o frigobar, chaleira elétrica e Smart TV."}],Sz=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731349318/1_znboil-compressed_yri6qq.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731349281/3_srrc1g-compressed_sxde4s.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731349273/5_lxdgp4-compressed_qaobnt.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731349314/2_edqaq4-compressed_hggyrj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731349275/4_k1afap-compressed_do1fjk.jpg"],_z=[{NomedaSuite:"Suíte Superior 4",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(Ce,{}),text:"32m²"},{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(Ke,{}),text:"Frigobar"},{icon:c.jsx(lt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Ne,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ye,{}),text:"Varanda privativa"}],Description:"A Suíte Superior 4 no Le Ange Mar oferece 32m² de conforto e elegância, ideal para até 2 adultos. Com cama King Size, ar-condicionado e lareira, o ambiente é perfeito para relaxar. A suíte conta com frigobar, chaleira elétrica e Smart TV."}],jz=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731349664/1_ztjmyc-compressed_qvus4l.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731349653/5_dkyssi-compressed_prm4wc.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731349655/4_rg0jvi-compressed_pknmhg.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731349661/2_djdgbx-compressed_zscwrg.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731349658/3_hkxuyr-compressed_fpwsiy.jpg"],Tz=[{NomedaSuite:"Suíte Superior 5",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(Ce,{}),text:"32m²"},{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(Ke,{}),text:"Frigobar"},{icon:c.jsx(lt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Ne,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ye,{}),text:"Varanda privativa"}],Description:"A Suíte Superior 5 no Le Ange Mar oferece 32m² de conforto e elegância, ideal para até 2 adultos. Com cama King Size, ar-condicionado e lareira, o ambiente é perfeito para relaxar. A suíte conta com frigobar, chaleira elétrica e Smart TV."}],Cz=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731350736/1_usupcb-compressed_z7nnww.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350716/5_v3dnrs-compressed_svhspj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350716/4_n9wkv0-compressed_qqq4nw.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350720/2_egxqmp-compressed_hnybrg.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350716/3_pjp0sr-compressed_hnudyo.jpg"],kz=[{NomedaSuite:"Suíte Superior 6",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(Ce,{}),text:"32m²"},{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(Ke,{}),text:"Frigobar"},{icon:c.jsx(lt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Ne,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ye,{}),text:"Varanda privativa"}],Description:"A Suíte Superior 6 no Le Ange Mar oferece 32m² de conforto e elegância, ideal para até 2 adultos. Com cama King Size, ar-condicionado e lareira, o ambiente é perfeito para relaxar. A suíte conta com frigobar, chaleira elétrica e Smart TV."}],Ez=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731350736/1_usupcb-compressed_z7nnww.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350716/5_v3dnrs-compressed_svhspj.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350716/4_n9wkv0-compressed_qqq4nw.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350720/2_egxqmp-compressed_hnybrg.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350716/3_pjp0sr-compressed_hnudyo.jpg"],zz=[{NomedaSuite:"Suíte Master 7",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(Ce,{}),text:"32m²"},{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(Ke,{}),text:"Frigobar"},{icon:c.jsx(lt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Ne,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ye,{}),text:"Varanda privativa"}],Description:"A Suíte Master 7 no Le Ange Mar oferece 32m² de conforto e elegância, ideal para até 2 adultos. Com cama King Size, ar-condicionado e lareira, o ambiente é perfeito para relaxar. A suíte conta com frigobar, chaleira elétrica e Smart TV."}],Pz=["https://res.cloudinary.com/dupg7clzc/image/upload/v1731350404/1_pcudqj-compressed_sbpmpu.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350402/2-compressed_rudncg.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350399/3-compressed_tjw0xv.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350396/4-compressed_x5k7tn.jpg","https://res.cloudinary.com/dupg7clzc/image/upload/v1731350394/5-compressed_rxetai.jpg"],Az=[{NomedaSuite:"Suíte Master 8",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(Ce,{}),text:"32m²"},{icon:c.jsx(ie,{}),text:"Ar condicionado"},{icon:c.jsx(Ke,{}),text:"Frigobar"},{icon:c.jsx(lt,{}),text:"Chaleira elétrica"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Ne,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(ie,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Ye,{}),text:"Varanda privativa"}],Description:"A Suíte Master 8 no Le Ange Mar oferece 32m² de conforto e elegância, ideal para até 2 adultos. Com cama King Size, ar-condicionado e lareira, o ambiente é perfeito para relaxar. A suíte conta com frigobar, chaleira elétrica e Smart TV."}],Mz=()=>{const e=Rn(),t={suite1:_.useRef(null),suite2:_.useRef(null),suite3:_.useRef(null),suite4:_.useRef(null),suite5:_.useRef(null),suite6:_.useRef(null),suite7:_.useRef(null),suite8:_.useRef(null),suite9:_.useRef(null),suite10:_.useRef(null)};return _.useEffect(()=>{const n=()=>{var o;const i=e.hash.replace("#","");if(console.log("Hash atual:",i),i&&((o=t[i])!=null&&o.current)){const a=t[i].current;if(a){const s=a.offsetTop-100;console.log(`Elemento encontrado: ${i}, rolando para: ${s}px`),window.scrollTo({top:s,behavior:"smooth"})}else console.log(`Elemento com ID ${i} não encontrado no DOM.`)}else console.log(`Hash ${i} não está associado a um ref válido.`)},r=()=>{console.log("Página carregada, verificando hash..."),n()};return window.addEventListener("load",r),window.addEventListener("hashchange",n),n(),()=>{window.removeEventListener("load",r),window.removeEventListener("hashchange",n)}},[e,t]),_.useEffect(()=>{et.init({duration:1e3,once:!1}),et.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Yr,{}),c.jsxs(mz,{children:["Acomodações da",c.jsx("b",{children:"Pousada Le Ange Mar"})]}),c.jsx($e,{id:"suite1",ref:t.suite1,images:gz,suites:vz,reverse:!0,background:"#7AC4F350"}),c.jsx($e,{id:"suite2",ref:t.suite2,images:xz,suites:yz,reverse:!1,background:"#7AC4F350"}),c.jsx($e,{id:"suite3",ref:t.suite3,images:wz,suites:bz,reverse:!0,background:"#7AC4F350"}),c.jsx($e,{id:"suite4",ref:t.suite4,images:Sz,suites:_z,reverse:!1,background:"#7AC4F350"}),c.jsx($e,{id:"suite5",ref:t.suite5,images:jz,suites:Tz,reverse:!0,background:"#7AC4F350"}),c.jsx($e,{id:"suite6",ref:t.suite6,images:Cz,suites:kz,reverse:!1,background:"#7AC4F350"}),c.jsx($e,{id:"suite7",ref:t.suite7,images:Ez,suites:zz,reverse:!0,background:"#7AC4F350"}),c.jsx($e,{id:"suite8",ref:t.suite8,images:Pz,suites:Az,reverse:!1,background:"#7AC4F350"}),c.jsx(Yi,{})]})};function Lz(){const{pathname:e}=Rn();return _.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function Oz(){const e=Rn();return c.jsxs(c.Fragment,{children:[c.jsx(Lz,{}),c.jsx(Z7,{children:c.jsxs(xb,{location:e,children:[c.jsx(Fn,{path:"/",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(QC,{})})}),c.jsx(Fn,{path:"/sobre",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(zk,{})})}),c.jsx(Fn,{path:"/mar",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(EE,{})})}),c.jsx(Fn,{path:"/serra",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(dE,{})})}),c.jsx(Fn,{path:"/event",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(yk,{})})}),c.jsx(Fn,{path:"/acomodaMar",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(Mz,{})})}),c.jsx(Fn,{path:"/acomodaSerra",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(hz,{})})})]},e.pathname)})]})}function Iz(){return c.jsxs(Tb,{children:[c.jsx(DE,{}),c.jsx(Oz,{})]})}av(document.getElementById("root")).render(c.jsx(_.StrictMode,{children:c.jsx(Iz,{})}));
