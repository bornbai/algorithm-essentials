(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{338:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||i;return n?r.a.createElement(d,s(s({ref:t},o),{},{components:n})):r.a.createElement(d,s({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var o=2;o<i;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},339:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},340:function(e,t,n){"use strict";var a=n(0),r=n(341);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},341:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},342:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(340),c=n(339),s=n(49),l=n.n(s),o=37,p=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,b=e.values,u=e.groupId,m=e.className,d=Object(i.a)(),O=d.tabGroupChoices,j=d.setTabGroupChoices,N=Object(a.useState)(s),h=N[0],f=N[1],v=Object(a.useState)(!1),y=v[0],g=v[1];if(null!=u){var w=O[u];null!=w&&w!==h&&b.some((function(e){return e.value===w}))&&f(w)}var k=function(e){f(e),null!=u&&j(u,e)},C=[],L=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},x=function(){g(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",L),window.addEventListener("mousedown",x),function(){window.removeEventListener("keydown",L),window.removeEventListener("mousedown",x)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},m)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e),L(e)},onFocus:function(){return k(t)},onClick:function(){k(t),g(!1)},onPointerDown:function(){return g(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},343:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(7),i=(n(0),n(338)),c=n(342),s=n(343),l={title:"LFU Cache"},o={unversionedId:"linear-list/linked-list/lfu-cache",id:"linear-list/linked-list/lfu-cache",isDocsHomePage:!1,title:"LFU Cache",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/linked-list/lfu-cache.md",slug:"/linear-list/linked-list/lfu-cache",permalink:"/linear-list/linked-list/lfu-cache",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/linked-list/lfu-cache.md",version:"current",sidebar:"someSidebar",previous:{title:"LRU Cache",permalink:"/linear-list/linked-list/lru-cache"},next:{title:"All O(1) Data Structure",permalink:"/linear-list/linked-list/all-o1-data-structure"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],b={rightToc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Design and implement a data structure for ",Object(i.b)("inlineCode",{parentName:"p"},"Least Frequently Used (LFU)")," cache."),Object(i.b)("p",null,"Implement the ",Object(i.b)("inlineCode",{parentName:"p"},"LFUCache")," class:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"LFUCache(int capacity)")," Initializes the object with the ",Object(i.b)("inlineCode",{parentName:"li"},"capacity")," of the data structure."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"int get(int key)")," Gets the value of the ",Object(i.b)("inlineCode",{parentName:"li"},"key")," if the ",Object(i.b)("inlineCode",{parentName:"li"},"key")," exists in the cache. Otherwise, returns ",Object(i.b)("inlineCode",{parentName:"li"},"-1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"void put(int key, int value)")," Sets or inserts the value if the ",Object(i.b)("inlineCode",{parentName:"li"},"key")," is not already present. When the cache reaches its ",Object(i.b)("inlineCode",{parentName:"li"},"capacity"),", it should invalidate the least frequently used item before inserting a new item. For this problem, when there is a tie (i.e., two or more keys with the same frequency), the ",Object(i.b)("strong",{parentName:"li"},"least recently")," used ",Object(i.b)("inlineCode",{parentName:"li"},"key")," would be evicted.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Notice that")," the number of times an item is used is the number of calls to the ",Object(i.b)("inlineCode",{parentName:"p"},"get")," and ",Object(i.b)("inlineCode",{parentName:"p"},"put")," functions for that item since it was inserted. This number is set to zero when the item is removed."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example 1"),":"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Input"),":",Object(i.b)("br",{parentName:"p"}),"\n",'["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]',"[2]",", ","[1, 1]",", ","[2, 2]",", ","[1]",", ","[3, 3]",", ","[2]",", ","[3]",", ","[4, 4]",", ","[1]",", ","[3]",", ","[4]","]",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Output"),":",Object(i.b)("br",{parentName:"p"}),"\n","[null, null, null, 1, null, -1, 3, null, -1, 3, 4]"),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Explanation"),":",Object(i.b)("br",{parentName:"p"}),"\n","LFUCache lfu = new LFUCache(2);",Object(i.b)("br",{parentName:"p"}),"\n","lfu.put(1, 1);",Object(i.b)("br",{parentName:"p"}),"\n","lfu.put(2, 2);",Object(i.b)("br",{parentName:"p"}),"\n","lfu.get(1); // return 1",Object(i.b)("br",{parentName:"p"}),"\n","lfu.put(3, 3); // evicts key 2",Object(i.b)("br",{parentName:"p"}),"\n","lfu.get(2); // return -1 (not found)",Object(i.b)("br",{parentName:"p"}),"\n","lfu.get(3); // return 3",Object(i.b)("br",{parentName:"p"}),"\n","lfu.put(4, 4); // evicts key 1.",Object(i.b)("br",{parentName:"p"}),"\n","lfu.get(1); // return -1 (not found)",Object(i.b)("br",{parentName:"p"}),"\n","lfu.get(3); // return 3",Object(i.b)("br",{parentName:"p"}),"\n","lfu.get(4); // return 4")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Constraints"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"0 <= capacity, key, value <= ",Object(i.b)("span",Object(a.a)({parentName:"li"},{className:"math math-inline"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"katex"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"katex-mathml"}),Object(i.b)("math",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(i.b)("semantics",{parentName:"math"},Object(i.b)("mrow",{parentName:"semantics"},Object(i.b)("mn",{parentName:"mrow"},"1"),Object(i.b)("msup",{parentName:"mrow"},Object(i.b)("mn",{parentName:"msup"},"0"),Object(i.b)("mn",{parentName:"msup"},"4"))),Object(i.b)("annotation",Object(a.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"10^4")))),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"base"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}})),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"mord"}),"1"),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"mord"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"mord"}),"0"),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"msupsub"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"vlist-t"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"vlist-r"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"vlist",style:{height:"0.8141079999999999em"}}),Object(i.b)("span",Object(a.a)({parentName:"span"},{style:{top:"-3.063em",marginRight:"0.05em"}}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"mord mtight"}),"4"))))))))))))),Object(i.b)("li",{parentName:"ul"},"At most ",Object(i.b)("span",Object(a.a)({parentName:"li"},{className:"math math-inline"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"katex"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"katex-mathml"}),Object(i.b)("math",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(i.b)("semantics",{parentName:"math"},Object(i.b)("mrow",{parentName:"semantics"},Object(i.b)("mn",{parentName:"mrow"},"1"),Object(i.b)("msup",{parentName:"mrow"},Object(i.b)("mn",{parentName:"msup"},"0"),Object(i.b)("mn",{parentName:"msup"},"5"))),Object(i.b)("annotation",Object(a.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"10^5")))),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"base"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}})),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"mord"}),"1"),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"mord"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"mord"}),"0"),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"msupsub"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"vlist-t"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"vlist-r"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"vlist",style:{height:"0.8141079999999999em"}}),Object(i.b)("span",Object(a.a)({parentName:"span"},{style:{top:"-3.063em",marginRight:"0.05em"}}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"mord mtight"}),"5"))))))))))))," calls will be made to get and put.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Follow up"),": Could you do both operations in ",Object(i.b)("inlineCode",{parentName:"p"},"O(1)")," time complexity?"),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"int get(int key)")," \u9700\u8981 O(1)\uff0c\u610f\u5473\u7740\u6211\u4eec\u9700\u8981\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"p"},"HashMap<Integer, Node> nodeMap"),"\uff0c\u7531 key \u6307\u5411",Object(i.b)("inlineCode",{parentName:"p"},"Node"),"\u8282\u70b9\uff0c\u8fd9\u4e2a\u8282\u70b9\u91cc\u5305\u542b\u5b83\u7684\u503c",Object(i.b)("inlineCode",{parentName:"p"},"value"),"\u548c\u9891\u7387",Object(i.b)("inlineCode",{parentName:"p"},"count"),"\u7b49\u4fe1\u606f\u3002"),Object(i.b)("p",null,"\u5f53\u7f13\u5b58\u5230\u8fbe\u6700\u5927\u5bb9\u91cf\u65f6\uff0c\u9700\u8981\u628a\u8bbf\u95ee\u9891\u7387\u6700\u4f4e\u7684\u5143\u7d20\u5f39\u51fa\u53bb\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u6574\u6570\u53d8\u91cf",Object(i.b)("inlineCode",{parentName:"p"},"min"),"\uff0c\u6765\u8bb0\u5f55\u6700\u5c0f\u7684\u9891\u7387\u3002\u8fd8\u9700\u8981\u4e00\u79cd O(1)\u7684\u65b9\u6cd5\uff0c\u80fd\u591f\u6839\u636e",Object(i.b)("inlineCode",{parentName:"p"},"min"),"\u7684\u503c\uff0c\u627e\u5230\u5bf9\u5e94\u7684\u5143\u7d20\u5217\u8868\uff0c\u8fd9\u4e9b\u5143\u7d20\u7684\u8bbf\u95ee\u9891\u7387\u90fd\u7b49\u4e8e",Object(i.b)("inlineCode",{parentName:"p"},"min"),"\uff0c\u56e0\u6b64\u6700\u4f73\u65b9\u6cd5\u662f\u7528\u4e00\u4e2a",Object(i.b)("inlineCode",{parentName:"p"},"HashMap<Integer, DList> countMap"),"\uff0c\u628a\u9891\u7387\u6620\u5c04\u5230\u53cc\u5411\u94fe\u8868\u3002\u4e3a\u5565\u7528\u53cc\u5411\u94fe\u8868\uff1f\u56e0\u4e3a\u6bcf\u6b21\u8bbf\u95ee\u4e00\u4e2a",Object(i.b)("inlineCode",{parentName:"p"},"key"),"\uff0c\u8fd9\u4e2a",Object(i.b)("inlineCode",{parentName:"p"},"key"),"\u7684\u9891\u7387\u5c31\u4f1a\u589e 1\uff0c\u90a3\u4e48\u8fd9\u4e2a\u8282\u70b9\u9700\u8981\u4ece\u65e7\u7684\u5217\u8868\u6458\u9664\uff0c\u63d2\u5165\u5230\u65b0\u7684\u5217\u8868\uff0c\u8fd9\u79cd\u9700\u8981\u9891\u7e41\u63d2\u5165\uff0c\u5220\u9664\u7684\u573a\u666f\uff0c\u663e\u7136\u9002\u5408\u7528\u53cc\u5411\u94fe\u8868\u3002"),Object(i.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)("p",null,"\u672c\u9898\u6bd4 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/linear-list/linked-list/lru-cache"}),"LRU Cache")," \u66f4\u590d\u6742\uff0c\u4f46\u5927\u4f53\u4e0a\u662f\u7c7b\u4f3c\u7684\u3002"),Object(i.b)(c.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// LFU Cache\n// Two HashMap + Doubly Linked List\npublic class LFUCache {\n    int capacity, size;\n    int min; // keep track of the minimum frequency\n    Map<Integer, Node> nodeMap; // key -> Node\n    Map<Integer, DList> countMap; // count -> DList\n\n    public LFUCache(int capacity) {\n        this.capacity = capacity;\n        nodeMap = new HashMap<>();\n        countMap = new HashMap<>();\n    }\n\n    // Time Complexity: O(1)\n    public int get(int key) {\n        Node node = nodeMap.get(key);\n        if (node == null) return -1;\n        update(node);\n        return node.value;\n    }\n\n    // Time Complexity: O(1)\n    public void put(int key, int value) {\n        if (capacity == 0) return;\n        Node node;\n        if (nodeMap.containsKey(key)) {\n            node = nodeMap.get(key);\n            node.value = value;\n            update(node);\n        } else {\n            node = new Node(key, value);\n            nodeMap.put(key, node);\n            if (size == capacity) {\n                DList lastList = countMap.get(min);\n                nodeMap.remove(lastList.pollLast().key);\n                size--;\n            }\n            size++;\n            min = 1; // reset min to 1\n            DList newList = countMap.getOrDefault(node.count, new DList());\n            newList.offerFirst(node);\n            countMap.put(node.count, newList);\n        }\n    }\n\n    // Increase count in countMap\n    private void update(Node node) {\n        DList oldList = countMap.get(node.count);\n        oldList.remove(node);\n        // Make min point to another list\n        if (node.count == min && oldList.size == 0) min++;\n\n        node.count++;\n        DList newList = countMap.getOrDefault(node.count, new DList());\n        newList.offerFirst(node);\n        countMap.put(node.count, newList);\n    }\n\n    // Node of doubly linked list\n    static class Node {\n        int key, value, count;\n        Node prev, next;\n        Node(int key, int value) {\n            this.key = key;\n            this.value = value;\n            count = 1;\n        }\n    }\n\n    // Doubly linked list\n    static class DList {\n        Node head, tail;\n        int size;\n\n        DList() {\n            // head and tail are two dummy nodes\n            head = new Node(0, 0);\n            tail = new Node(0, 0);\n            head.next = tail;\n            tail.prev = head;\n        }\n\n        void offerFirst(Node node) {\n            head.next.prev = node;\n            node.next = head.next;\n            node.prev = head;\n            head.next = node;\n            size++;\n        }\n\n        // Remove a node in the middle\n        void remove(Node node) {\n            if (node == null) return;\n            node.prev.next = node.next;\n            node.next.prev = node.prev;\n            size--;\n        }\n\n        // Remove the tail node\n        Node pollLast() {\n            Node last = tail.prev;\n            remove(last);\n            return last;\n        }\n    }\n}\n"))),Object(i.b)(s.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"// TODO\n")))),Object(i.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/linear-list/linked-list/lru-cache"}),"LRU Cache"))))}u.isMDXComponent=!0}}]);