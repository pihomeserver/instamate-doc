(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=o,f=b["".concat(c,".").concat(d)]||b[d]||u[d]||r;return n?a.a.createElement(f,i(i({ref:t},p),{},{components:n})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<r;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(3),a=n(7),r=(n(0),n(108)),c={id:"facebook",title:"Facebook configuration",sidebar_label:"Step 1 - Facebook configuration"},i={unversionedId:"installation/facebook",id:"installation/facebook",isDocsHomePage:!1,title:"Facebook configuration",description:"In order to get access to the instagram insights, users have to log in using the Facebook login. That means that the deployed instance of the application must be declared to Facebook first",source:"@site/docs/installation/facebook.md",slug:"/installation/facebook",permalink:"/instamate-doc/docs/installation/facebook",version:"current",sidebar_label:"Step 1 - Facebook configuration",sidebar:"someSidebar",previous:{title:"Requirements",permalink:"/instamate-doc/docs/instamate/requirements"},next:{title:"Docker install",permalink:"/instamate-doc/docs/installation/docker"}},l=[],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In order to get access to the instagram insights, users have to log in using the Facebook login. That means that the deployed instance of the application must be declared to Facebook first"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go on ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developers.facebook.com/"}),"https://developers.facebook.com/")," and create a new app. The name does not matter"),Object(r.b)("li",{parentName:"ol"},"Add two products : Facebook login and API Graph for Instagram"),Object(r.b)("li",{parentName:"ol"},"About Facebook login, you need to have an HTTPS callback URL defined. If you don't plan to host the app with your own domain, then have a look at ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://ngrok.com/"}),"ngrok"),". It will allow you to have a https temporary public domain. Then you paste your url and append /auth/facebook/callback to it. For example :")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"https://927f5e43ada5.ngrok.io/auth/facebook/callback\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"About API Graph, there is nothing to do"),Object(r.b)("li",{parentName:"ol"},"Go back to the parameters of the app, in the standard parameter you should find the ",Object(r.b)("strong",{parentName:"li"},"app ID")," and the ",Object(r.b)("strong",{parentName:"li"},"secret key"),". You will need them later")))}s.isMDXComponent=!0}}]);