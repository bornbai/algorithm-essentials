(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{157:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return b}));var n=t(2),a=t(7),o=(t(0),t(333)),i=t(337),l=t(338),c={title:"Binary Tree Preorder Traversal"},u={unversionedId:"binary-tree/traversal/binary-tree-preorder-traversal",id:"binary-tree/traversal/binary-tree-preorder-traversal",isDocsHomePage:!1,title:"Binary Tree Preorder Traversal",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/traversal/binary-tree-preorder-traversal.md",slug:"/binary-tree/traversal/binary-tree-preorder-traversal",permalink:"/binary-tree/traversal/binary-tree-preorder-traversal",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/traversal/binary-tree-preorder-traversal.md",version:"current",sidebar:"someSidebar",previous:{title:"\u8282\u70b9\u5b9a\u4e49",permalink:"/binary-tree/README"},next:{title:"Binary Tree Inorder Traversal",permalink:"/binary-tree/traversal/binary-tree-inorder-traversal"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u6808",id:"\u6808",children:[]},{value:"Morris \u5148\u5e8f\u904d\u5386",id:"morris-\u5148\u5e8f\u904d\u5386",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],p={rightToc:s};function b(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(o.b)("p",null,"Given a binary tree, return the ",Object(o.b)("strong",{parentName:"p"},"preorder")," traversal of its nodes' values."),Object(o.b)("p",null,"For example:\nGiven binary tree ",Object(o.b)("inlineCode",{parentName:"p"},"{1,#,2,3}"),","),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{})," 1\n  \\\n   2\n  /\n 3\n")),Object(o.b)("p",null,"return ",Object(o.b)("inlineCode",{parentName:"p"},"[1,2,3]"),"."),Object(o.b)("p",null,"Note: Recursive solution is trivial, could you do it iteratively?"),Object(o.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(o.b)("p",null,"\u7528\u6808\u6216\u8005 Morris \u904d\u5386\u3002"),Object(o.b)("h3",{id:"\u6808"},"\u6808"),Object(o.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Binary Tree Preorder Traversal\n// \u4f7f\u7528\u6808\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\n    public List<Integer> preorderTraversal(TreeNode root) {\n        ArrayList<Integer> result = new ArrayList<>();\n        Stack<TreeNode> s = new Stack<>();\n        if (root != null) s.push(root);\n\n        while (!s.isEmpty()) {\n            final TreeNode p = s.pop();\n            result.add(p.val);\n\n            if (p.right != null) s.push(p.right);\n            if (p.left != null) s.push(p.left);\n        }\n        return result;\n    }\n}\n"))),Object(o.b)(l.a,{value:"cpp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// Binary Tree Preorder Traversal\n// \u4f7f\u7528\u6808\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<int> preorderTraversal(TreeNode *root) {\n        vector<int> result;\n        stack<const TreeNode *> s;\n        if (root != nullptr) s.push(root);\n\n        while (!s.empty()) {\n            const TreeNode *p = s.top();\n            s.pop();\n            result.push_back(p->val);\n\n            if (p->right != nullptr) s.push(p->right);\n            if (p->left != nullptr) s.push(p->left);\n        }\n        return result;\n    }\n};\n")))),Object(o.b)("h3",{id:"morris-\u5148\u5e8f\u904d\u5386"},"Morris \u5148\u5e8f\u904d\u5386"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// Binary Tree Preorder Traversal\n// Morris\u5148\u5e8f\u904d\u5386\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    vector<int> preorderTraversal(TreeNode *root) {\n        vector<int> result;\n        TreeNode *cur = root, *prev = nullptr;\n\n        while (cur != nullptr) {\n            if (cur->left == nullptr) {\n                result.push_back(cur->val);\n                prev = cur; /* cur\u521a\u521a\u88ab\u8bbf\u95ee\u8fc7 */\n                cur = cur->right;\n            } else {\n                /* \u67e5\u627e\u524d\u9a71 */\n                TreeNode *node = cur->left;\n                while (node->right != nullptr && node->right != cur)\n                    node = node->right;\n\n                if (node->right == nullptr) { /* \u8fd8\u6ca1\u7ebf\u7d22\u5316\uff0c\u5219\u5efa\u7acb\u7ebf\u7d22 */\n                    result.push_back(cur->val); /* \u4ec5\u8fd9\u4e00\u884c\u7684\u4f4d\u7f6e\u4e0e\u4e2d\u5e8f\u4e0d\u540c */\n                    node->right = cur;\n                    prev = cur; /* cur\u521a\u521a\u88ab\u8bbf\u95ee\u8fc7 */\n                    cur = cur->left;\n                } else {    /* \u5df2\u7ecf\u7ebf\u7d22\u5316\uff0c\u5219\u5220\u9664\u7ebf\u7d22  */\n                    node->right = nullptr;\n                    /* prev = cur; \u4e0d\u80fd\u6709\u8fd9\u53e5\uff0ccur\u5df2\u7ecf\u88ab\u8bbf\u95ee */\n                    cur = cur->right;\n                }\n            }\n        }\n        return result;\n    }\n};\n")),Object(o.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/binary-tree/traversal/binary-tree-inorder-traversal"}),"Binary Tree Inorder Traversal")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/binary-tree/traversal/binary-tree-postorder-traversal"}),"Binary Tree Postorder Traversal")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/binary-tree/traversal/recover-binary-search-tree"}),"Recover Binary Search Tree"))))}b.isMDXComponent=!0},333:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=s(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=n,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return t?a.a.createElement(f,l(l({ref:r},u),{},{components:t})):a.a.createElement(f,l({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},334:function(e,r,t){"use strict";function n(e){var r,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(a&&(a+=" "),a+=t);else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}r.a=function(){for(var e,r,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(a&&(a+=" "),a+=r);return a}},335:function(e,r,t){"use strict";var n=t(0),a=t(336);r.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},336:function(e,r,t){"use strict";var n=t(0),a=Object(n.createContext)(void 0);r.a=a},337:function(e,r,t){"use strict";var n=t(0),a=t.n(n),o=t(335),i=t(334),l=t(49),c=t.n(l),u=37,s=39;r.a=function(e){var r=e.block,t=e.children,l=e.defaultValue,p=e.values,b=e.groupId,d=e.className,f=Object(o.a)(),v=f.tabGroupChoices,y=f.setTabGroupChoices,m=Object(n.useState)(l),O=m[0],h=m[1],j=Object(n.useState)(!1),g=j[0],T=j[1];if(null!=b){var w=v[b];null!=w&&w!==O&&p.some((function(e){return e.value===w}))&&h(w)}var N=function(e){h(e),null!=b&&y(b,e)},E=[],P=function(e){e.metaKey||e.altKey||e.ctrlKey||T(!0)},k=function(){T(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",P),window.addEventListener("mousedown",k),function(){window.removeEventListener("keydown",P),window.removeEventListener("mousedown",k)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":r},d)},p.map((function(e){var r=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===r,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===r}),style:g?{}:{outline:"none"},key:r,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,r,t){switch(t.keyCode){case s:!function(e,r){var t=e.indexOf(r)+1;e[t]?e[t].focus():e[0].focus()}(e,r);break;case u:!function(e,r){var t=e.indexOf(r)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,r)}}(E,e.target,e),P(e)},onFocus:function(){return N(r)},onClick:function(){N(r),T(!1)},onPointerDown:function(){return T(!1)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter((function(e){return e.props.value===O}))[0]))}},338:function(e,r,t){"use strict";var n=t(0),a=t.n(n);r.a=function(e){return a.a.createElement("div",null,e.children)}}}]);