(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{110:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),O=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=O(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=O(a),m=n,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||b;return a?r.a.createElement(d,c(c({ref:t},i),{},{components:a})):r.a.createElement(d,c({ref:t},i))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,o=new Array(b);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<b;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(7),b=(a(0),a(110)),o={id:"environment_variables",title:"Environment Variables",sidebar_label:"Step 2 - Environment configuration"},c={unversionedId:"installation/environment_variables",id:"installation/environment_variables",isDocsHomePage:!1,title:"Environment Variables",description:"Configuration file",source:"@site/docs/installation/environment_variables.md",slug:"/installation/environment_variables",permalink:"/instamate-doc/docs/installation/environment_variables",version:"current",sidebar_label:"Step 2 - Environment configuration",sidebar:"someSidebar",previous:{title:"Facebook configuration",permalink:"/instamate-doc/docs/installation/facebook"},next:{title:"Docker install",permalink:"/instamate-doc/docs/installation/docker"}},l=[{value:"Configuration file",id:"configuration-file",children:[]},{value:"Environment variables for runtime configuration",id:"environment-variables-for-runtime-configuration",children:[]}],i={toc:l};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"configuration-file"},"Configuration file"),Object(b.b)("p",null,"In order to configure InstaMate, a configuration file has to be created."),Object(b.b)("p",null,"For example you can create a file called ",Object(b.b)("inlineCode",{parentName:"p"},"env")," with the following content:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"INSTAMATE_HOST=0.0.0.0\nINSTAMATE_PORT=8080\nGRAFANA_PORT=3000\nSESSION_SECRET=Your Session Secret goes here\nPOSTGRES_URI=database\nPOSTGRES_USER=instamate\nPOSTGRES_PASSWORD=secret\nPOSTGRES_DB=instamate\nPOSTGRES_PORT=5432\nFACEBOOK_APPLICATIONID=1234567890\nFACEBOOK_APPLICATIONSECRET=abcdef1234567890\nFACEBOOK_API_URL=https://graph.facebook.com/v9.0\nFACEBOOK_CALLBACK_URL=https://aaaaaaaaa.ngrok.io/auth/facebook/callback\n")),Object(b.b)("p",null,"  Set all variables with the expected values related to your environment."),Object(b.b)("h2",{id:"environment-variables-for-runtime-configuration"},"Environment variables for runtime configuration"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Variable Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"INSTAMATE_HOST")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hosts allowed to connect to the web interface"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.0.0.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"INSTAMATE_PORT")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Port of the web interface"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8080")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"GRAFANA_PORT")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Port of the Grafana interface"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3000")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"SESSION_SECRET")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Secret phrase used to secure your web session"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Your Session Secret goes here")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"POSTGRES_URI")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URI of the postgresql database. In Docker, replace the IP/hostname with the container name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"database")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"POSTGRES_USER")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User to connect to the database"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"instamate")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"POSTGRES_PASSWORD")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Password of the user"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"secret")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"POSTGRES_DB")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Database name to store data"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"instamate")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"POSTGRES_PORT")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Database port exposed"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5432")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"FACEBOOK_APPLICATIONID")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application ID from the Facebook developper site"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"required"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"FACEBOOK_APPLICATIONSECRET")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application secret from the Facebook developper site"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"required"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"FACEBOOK_API_URL")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URI to connect to the Facebook API"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://graph.facebook.com/v9.0"}),"https://graph.facebook.com/v9.0"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"FACEBOOK_CALLBACK_URL")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback URL once the login is successful. The value is mandatory in order to get the authorization token. Once the token is stored, the value is not required anymore"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"required for the first login"))))))}O.isMDXComponent=!0}}]);