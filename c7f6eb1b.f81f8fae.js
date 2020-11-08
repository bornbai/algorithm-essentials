(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{256:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(2),i=t(7),a=(t(0),t(308)),o=t(312),c=t(313),l={title:"ZigZag Conversion"},s={unversionedId:"simulation/zigzag-conversion",id:"simulation/zigzag-conversion",isDocsHomePage:!1,title:"ZigZag Conversion",description:"\u63cf\u8ff0",source:"@site/docs/simulation/zigzag-conversion.md",slug:"/simulation/zigzag-conversion",permalink:"/simulation/zigzag-conversion",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/simulation/zigzag-conversion.md",version:"current",sidebar:"someSidebar",previous:{title:"Spiral Matrix II",permalink:"/simulation/spiral-matrix-ii"},next:{title:"Divide Two Integers",permalink:"/simulation/divide-two-integers"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],b={rightToc:u};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"The string ",Object(a.b)("inlineCode",{parentName:"p"},'"PAYPALISHIRING"')," is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"P   A   H   N\nA P L S I I G\nY   I   R\n")),Object(a.b)("p",null,"And then read line by line: ",Object(a.b)("inlineCode",{parentName:"p"},'"PAHNAPLSIIGYIR"')),Object(a.b)("p",null,"Write the code that will take a string and make this conversion given a number of rows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"string convert(string text, int nRows);\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'convert("PAYPALISHIRING", 3)')," should return ",Object(a.b)("inlineCode",{parentName:"p"},'"PAHNAPLSIIGYIR"'),"."),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u8981\u627e\u5230\u6570\u5b66\u89c4\u5f8b\u3002\u771f\u6b63\u9762\u8bd5\u4e2d\uff0c\u4e0d\u5927\u53ef\u80fd\u51fa\u8fd9\u79cd\u95ee\u9898\u3002"),Object(a.b)("p",null,"n=4:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"P     I     N\nA   L S   I G\nY A   H R\nP     I\n")),Object(a.b)("p",null,"n=5:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"P       H\nA     S I\nY   I   R\nP L     I  G\nA       N\n")),Object(a.b)("p",null,"\u6240\u4ee5\uff0c\u5bf9\u4e8e\u6bcf\u4e00\u5c42\u5782\u76f4\u5143\u7d20\u7684\u5750\u6807 ",Object(a.b)("inlineCode",{parentName:"p"},"(i,j)= (j+1 )*n +i"),"\uff1b\u5bf9\u4e8e\u6bcf\u4e24\u5c42\u5782\u76f4\u5143\u7d20\u4e4b\u95f4\u7684\u63d2\u5165\u5143\u7d20\uff08\u659c\u5bf9\u89d2\u5143\u7d20\uff09\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"(i,j)= (j+1)*n -i")),Object(a.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(a.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// ZigZag Conversion\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public String convert(String s, int numRows) {\n        if (numRows <= 1 || s.length() <= 1) return s;\n        StringBuilder result = new StringBuilder();\n        for (int i = 0; i < numRows; i++) {\n            for (int j = 0, index = i; index < s.length();\n                 j++, index = (2 * numRows - 2) * j + i) {\n                result.append(s.charAt(index));  // \u5782\u76f4\u5143\u7d20\n                if (i == 0 || i == numRows - 1) continue;   // \u659c\u5bf9\u89d2\u5143\u7d20\n                if (index + (numRows - i - 1) * 2 < s.length())\n                    result.append(s.charAt(index + (numRows - i - 1) * 2));\n            }\n        }\n        return result.toString();\n    }\n}\n"))),Object(a.b)(c.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// LeetCode, ZigZag Conversion\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    string convert(string s, int nRows) {\n        if (nRows <= 1 || s.size() <= 1) return s;\n        string result;\n        for (int i = 0; i < nRows; i++) {\n            for (int j = 0, index = i; index < s.size();\n                    j++, index = (2 * nRows - 2) * j + i) {\n                result.append(1, s[index]);  // \u5782\u76f4\u5143\u7d20\n                if (i == 0 || i == nRows - 1) continue;   // \u659c\u5bf9\u89d2\u5143\u7d20\n                if (index + (nRows - i - 1) * 2 < s.size())\n                    result.append(1, s[index + (nRows - i - 1) * 2]);\n            }\n        }\n        return result;\n    }\n};\n")))))}p.isMDXComponent=!0},308:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),u=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=u(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(t),d=r,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||a;return t?i.a.createElement(m,c(c({ref:n},s),{},{components:t})):i.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},309:function(e,n,t){"use strict";function r(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(i&&(i+=" "),i+=n);return i}},310:function(e,n,t){"use strict";var r=t(0);const i=Object(r.createContext)(void 0);n.a=i},311:function(e,n,t){"use strict";var r=t(0),i=t(310);n.a=function(){const e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},312:function(e,n,t){"use strict";var r=t(0),i=t.n(r),a=t(311),o=t(309),c=t(49),l=t.n(c);const s=37,u=39;n.a=function(e){const{block:n,children:t,defaultValue:c,values:b,groupId:p}=e,{tabGroupChoices:d,setTabGroupChoices:m}=Object(a.a)(),[f,O]=Object(r.useState)(c),[g,j]=Object(r.useState)(!1);if(null!=p){const e=d[p];null!=e&&e!==f&&b.some((n=>n.value===e))&&O(e)}const v=e=>{O(e),null!=p&&m(p,e)},y=[],w=e=>{e.metaKey||e.altKey||e.ctrlKey||j(!0)},h=()=>{j(!1)};return Object(r.useEffect)((()=>{window.addEventListener("keydown",w),window.addEventListener("mousedown",h)}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n})},b.map((({value:e,label:n})=>i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===e}),style:g?{}:{outline:"none"},key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case u:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case s:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(y,e.target,e),w(e)},onFocus:()=>v(e),onClick:()=>{v(e),j(!1)},onPointerDown:()=>j(!1)},n)))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((e=>e.props.value===f))[0]))}},313:function(e,n,t){"use strict";var r=t(0),i=t.n(r);n.a=function(e){return i.a.createElement("div",null,e.children)}}}]);