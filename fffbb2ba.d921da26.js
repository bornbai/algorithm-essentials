(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{334:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(2),i=t(7),a=(t(0),t(338)),o=t(342),l=t(343),c={title:"Reverse Linked List II"},s={unversionedId:"linear-list/linked-list/reverse-linked-list-ii",id:"linear-list/linked-list/reverse-linked-list-ii",isDocsHomePage:!1,title:"Reverse Linked List II",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/linked-list/reverse-linked-list-ii.md",slug:"/linear-list/linked-list/reverse-linked-list-ii",permalink:"/linear-list/linked-list/reverse-linked-list-ii",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/linked-list/reverse-linked-list-ii.md",version:"current",sidebar:"someSidebar",previous:{title:"Add Two Numbers II",permalink:"/linear-list/linked-list/add-two-numbers-ii"},next:{title:"Partition List",permalink:"/linear-list/linked-list/partition-list"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],d={rightToc:u};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"Reverse a linked list from position ",Object(a.b)("inlineCode",{parentName:"p"},"m")," to ",Object(a.b)("inlineCode",{parentName:"p"},"n"),". Do it in-place and in one-pass."),Object(a.b)("p",null,"For example:\nGiven ",Object(a.b)("inlineCode",{parentName:"p"},"1->2->3->4->5->nullptr"),", ",Object(a.b)("inlineCode",{parentName:"p"},"m")," = 2 and ",Object(a.b)("inlineCode",{parentName:"p"},"n")," = 4,"),Object(a.b)("p",null,"return ",Object(a.b)("inlineCode",{parentName:"p"},"1->4->3->2->5->nullptr"),"."),Object(a.b)("p",null,"Note:\nGiven ",Object(a.b)("inlineCode",{parentName:"p"},"m"),", ",Object(a.b)("inlineCode",{parentName:"p"},"n")," satisfy the following condition:\n$",Object(a.b)("span",Object(r.a)({parentName:"p"},{className:"math math-inline"}),Object(a.b)("span",Object(r.a)({parentName:"span"},{className:"katex-error",title:"ParseError: KaTeX parse error: Can't use function '$' in math mode at position 22: \u2026 m \\leq n \\leq $\u0332",style:{color:"#cc0000"}}),"1 \\leq m \\leq n \\leq $"))," length of list."),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u8fd9\u9898\u975e\u5e38\u7e41\u7410\uff0c\u6709\u5f88\u591a\u8fb9\u754c\u68c0\u67e5\uff0c15 \u5206\u949f\u5185\u505a\u5230 bug free \u5f88\u6709\u96be\u5ea6\uff01"),Object(a.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(a.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Reverse Linked List II\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public ListNode reverseBetween(ListNode head, int m, int n) {\n        ListNode dummy = new ListNode(-1);\n        dummy.next = head;\n\n        ListNode prev = dummy;\n        for (int i = 0; i < m-1; ++i)\n            prev = prev.next;\n        ListNode head2 = prev;\n\n        prev = head2.next;\n        ListNode cur = prev.next;\n        for (int i = m; i < n; ++i) {\n            prev.next = cur.next;\n            cur.next = head2.next;\n            head2.next = cur;  // \u5934\u63d2\u6cd5\n            cur = prev.next;\n        }\n\n        return dummy.next;\n    }\n};\n"))),Object(a.b)(l.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Reverse Linked List II\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *reverseBetween(ListNode *head, int m, int n) {\n        ListNode dummy(-1);\n        dummy.next = head;\n\n        ListNode *prev = &dummy;\n        for (int i = 0; i < m-1; ++i)\n            prev = prev->next;\n        ListNode* const head2 = prev;\n\n        prev = head2->next;\n        ListNode *cur = prev->next;\n        for (int i = m; i < n; ++i) {\n            prev->next = cur->next;\n            cur->next = head2->next;\n            head2->next = cur;  // \u5934\u63d2\u6cd5\n            cur = prev->next;\n        }\n\n        return dummy.next;\n    }\n};\n")))))}p.isMDXComponent=!0},338:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),u=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||a;return t?i.a.createElement(m,l(l({ref:n},s),{},{components:t})):i.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},339:function(e,n,t){"use strict";function r(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(i&&(i+=" "),i+=n);return i}},340:function(e,n,t){"use strict";var r=t(0),i=t(341);n.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},341:function(e,n,t){"use strict";var r=t(0),i=Object(r.createContext)(void 0);n.a=i},342:function(e,n,t){"use strict";var r=t(0),i=t.n(r),a=t(340),o=t(339),l=t(49),c=t.n(l),s=37,u=39;n.a=function(e){var n=e.block,t=e.children,l=e.defaultValue,d=e.values,p=e.groupId,b=e.className,m=Object(a.a)(),f=m.tabGroupChoices,v=m.setTabGroupChoices,O=Object(r.useState)(l),y=O[0],j=O[1],h=Object(r.useState)(!1),w=h[0],x=h[1];if(null!=p){var g=f[p];null!=g&&g!==y&&d.some((function(e){return e.value===g}))&&j(g)}var N=function(e){j(e),null!=p&&v(p,e)},k=[],L=function(e){e.metaKey||e.altKey||e.ctrlKey||x(!0)},C=function(){x(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",L),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",L),window.removeEventListener("mousedown",C)}}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},b)},d.map((function(e){var n=e.value,t=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===n,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===n}),style:w?{}:{outline:"none"},key:n,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(k,e.target,e),L(e)},onFocus:function(){return N(n)},onClick:function(){N(n),x(!1)},onPointerDown:function(){return x(!1)}},t)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===y}))[0]))}},343:function(e,n,t){"use strict";var r=t(0),i=t.n(r);n.a=function(e){return i.a.createElement("div",null,e.children)}}}]);