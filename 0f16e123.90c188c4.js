(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{307:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(f,i(i({ref:t},u),{},{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},308:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},309:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},310:function(e,t,n){"use strict";var r=n(0),a=n(309);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},311:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(310),c=n(308),i=n(49),l=n.n(i);const u=37,s=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:p,groupId:b}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(o.a)(),[m,y]=Object(r.useState)(i),[v,O]=Object(r.useState)(!1);if(null!=b){const e=d[b];null!=e&&e!==m&&p.some((t=>t.value===e))&&y(e)}const g=e=>{y(e),null!=b&&f(b,e)},h=[],j=e=>{e.metaKey||e.altKey||e.ctrlKey||O(!0)},w=()=>{O(!1)};return Object(r.useEffect)((()=>{window.addEventListener("keydown",j),window.addEventListener("mousedown",w)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},p.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===e,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":m===e}),style:v?{}:{outline:"none"},key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e),j(e)},onFocus:()=>g(e),onClick:()=>{g(e),O(!1)},onPointerDown:()=>O(!1)},t)))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((e=>e.props.value===m))[0]))}},312:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(7),o=(n(0),n(307)),c=n(311),i=n(312),l={title:"\u56fe\u8282\u70b9\u5b9a\u4e49"},u={unversionedId:"graph/README",id:"graph/README",isDocsHomePage:!1,title:"\u56fe\u8282\u70b9\u5b9a\u4e49",description:"\u65e0\u5411\u56fe\u7684\u8282\u70b9\u5b9a\u4e49\u5982\u4e0b\uff1a",source:"@site/docs/graph/README.md",slug:"/graph/README",permalink:"/graph/README",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/graph/README.md",version:"current",sidebar:"someSidebar",previous:{title:"Range Sum Query 2D - Immutable",permalink:"/dp/range-sum-query-2d-immutable"},next:{title:"Clone Graph",permalink:"/graph/clone-graph"}},s=[],p={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u65e0\u5411\u56fe\u7684\u8282\u70b9\u5b9a\u4e49\u5982\u4e0b\uff1a"),Object(o.b)(c.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// \u65e0\u5411\u56fe\u7684\u8282\u70b9\nclass UndirectedGraphNode {\n    int label;\n    ArrayList<UndirectedGraphNode> neighbors;\n    UndirectedGraphNode(int x) { label = x;}\n};\n"))),Object(o.b)(i.a,{value:"cpp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// \u65e0\u5411\u56fe\u7684\u8282\u70b9\nstruct UndirectedGraphNode {\n    int label;\n    vector<UndirectedGraphNode *> neighbors;\n    UndirectedGraphNode(int x) : label(x) {};\n};\n")))))}b.isMDXComponent=!0}}]);