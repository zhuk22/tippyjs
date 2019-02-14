(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{168:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return i}),t.d(a,"_frontmatter",function(){return u});var n=t(86),s=t.n(n),c=t(7),o=t.n(c),r=t(0),l=t.n(r),m=t(174),p=t(179),i=function(e){function a(a){var t;return(t=e.call(this,a)||this).layout=p.a,t}return o()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,t=s()(e,["components"]);return l.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:t,components:a},l.a.createElement(m.MDXTag,{name:"p",components:a},"The Tippy instance is an individual tooltip object. It has a bunch of properties\nand methods that contain information and functionality to manipulate the tooltip\nprogrammatically."),l.a.createElement(m.MDXTag,{name:"h3",components:a},"Accessing an instance"),l.a.createElement(m.MDXTag,{name:"p",components:a},"If you pass an element or virtual element to ",l.a.createElement("code",{className:"language-text"},"tippy()"),", the instance is directly\nreturned:"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},l.a.createElement("span",{className:"token keyword"},"const")," button ",l.a.createElement("span",{className:"token operator"},"=")," ",l.a.createElement("span",{className:"token dom variable"},"document"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token func method"},"querySelector"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'button'"),l.a.createElement("span",{className:"token punctuation"},")"),"\n",l.a.createElement("span",{className:"token keyword"},"const")," instance ",l.a.createElement("span",{className:"token operator"},"=")," ",l.a.createElement("span",{className:"token function"},"tippy"),l.a.createElement("span",{className:"token punctuation"},"("),"button",l.a.createElement("span",{className:"token punctuation"},")"),"\n",l.a.createElement("span",{className:"token comment"},"// The instance also exists as the `_tippy` property on the element:"),"\n","button",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"_tippy")))),l.a.createElement(m.MDXTag,{name:"p",components:a},"If you're passing a CSS selector string, NodeList, or an array of elements, then\nan array of instances get returned (since potentially many instances can be\ncreated):"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},l.a.createElement("span",{className:"token keyword"},"const")," instances ",l.a.createElement("span",{className:"token operator"},"=")," ",l.a.createElement("span",{className:"token function"},"tippy"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'.btn'"),l.a.createElement("span",{className:"token punctuation"},")")," ",l.a.createElement("span",{className:"token comment"},"// Array")))),l.a.createElement(m.MDXTag,{name:"h3",components:a},"Auto-initialization"),l.a.createElement(m.MDXTag,{name:"p",components:a},"If you're using auto-initialization (",l.a.createElement("code",{className:"language-text"},"data-tippy")," attribute), and you need to\naccess the instance immediately at runtime, make sure you wrap access in\n",l.a.createElement("code",{className:"language-text"},"setTimeout()"),":"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},l.a.createElement("span",{className:"token function"},"setTimeout"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token punctuation"},")")," ",l.a.createElement("span",{className:"token arrow operator"},"=>")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",l.a.createElement("span",{className:"token keyword"},"const")," button ",l.a.createElement("span",{className:"token operator"},"=")," ",l.a.createElement("span",{className:"token dom variable"},"document"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token func method"},"querySelector"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'button'"),l.a.createElement("span",{className:"token punctuation"},")"),"\n","  ",l.a.createElement("span",{className:"token keyword"},"const")," instance ",l.a.createElement("span",{className:"token operator"},"=")," button",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token access property"},"_tippy"),"\n",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")")))),l.a.createElement(m.MDXTag,{name:"h2",components:a},"Shape and properties"),l.a.createElement(m.MDXTag,{name:"p",components:a},l.a.createElement("code",{className:"language-text"},"instance")," is a plain object with these properties:"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},l.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",l.a.createElement("span",{className:"token definition property"},"id"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token number"},"1"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token comment"},"// 1 to Infinity, used for `aria-describedby` attribute"),"\n","  ",l.a.createElement("span",{className:"token definition property"},"reference"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token class class-name"},"HTMLButtonElement"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token comment"},"// <button>"),"\n","  ",l.a.createElement("span",{className:"token definition property"},"popper"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token class class-name"},"HTMLDivElement"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token comment"},'// <div class="tippy-popper">...</div>'),"\n","  ",l.a.createElement("span",{className:"token definition property"},"popperChildren"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{")," ",l.a.createElement("span",{className:"token comment"},"// Child elements of the parent popper element"),"\n","    ",l.a.createElement("span",{className:"token definition property"},"tooltip"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token class class-name"},"HTMLDivElement"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token comment"},'// <div class="tippy-tooltip">...</div>'),"\n","    ",l.a.createElement("span",{className:"token definition property"},"content"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token class class-name"},"HTMLDivElement"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token comment"},'// <div class="tippy-content">...</div>'),"\n","    ",l.a.createElement("span",{className:"token definition property"},"arrow"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token nil keyword"},"null")," ",l.a.createElement("span",{className:"token operator"},"|")," ",l.a.createElement("span",{className:"token class class-name"},"HTMLDivElement"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token comment"},'// <div class="tippy-arrow"></div>'),"\n","    ",l.a.createElement("span",{className:"token definition property"},"backdrop"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token nil keyword"},"null")," ",l.a.createElement("span",{className:"token operator"},"|")," ",l.a.createElement("span",{className:"token class class-name"},"HTMLDivElement"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token comment"},'// <div class="tippy-backdrop"></div>'),"\n","  ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},","),"\n","  ",l.a.createElement("span",{className:"token definition property"},"popperInstance"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token nil keyword"},"null"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token comment"},"// Instance is lazily created"),"\n","  ",l.a.createElement("span",{className:"token definition property"},"props"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{")," ",l.a.createElement("span",{className:"token spread punctuation"},"...")," ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token comment"},"// Instance props + attribute options merged together"),"\n","  ",l.a.createElement("span",{className:"token definition property"},"state"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",l.a.createElement("span",{className:"token definition property"},"isDestroyed"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token boolean"},"false"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token comment"},"// Has the instance been destroyed?"),"\n","    ",l.a.createElement("span",{className:"token definition property"},"isEnabled"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token boolean"},"true"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token comment"},"// Is the tippy enabled (can show or hide)?"),"\n","    ",l.a.createElement("span",{className:"token definition property"},"isVisible"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token boolean"},"false"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token comment"},"// Is the tippy currently showing (and not transitioning out)?"),"\n","    ",l.a.createElement("span",{className:"token definition property"},"isMounted"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token boolean"},"false"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token comment"},"// Is the tippy currently mounted to the DOM?"),"\n","    ",l.a.createElement("span",{className:"token definition property"},"isShown"),l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token boolean"},"false"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token comment"},"// Is the tippy fully shown after finishing transitioning in?"),"\n","  ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},","),"\n","  ",l.a.createElement("span",{className:"token comment"},"// This object also contains methods. You'll learn in the next section."),"\n",l.a.createElement("span",{className:"token punctuation"},"}")))))},a}(l.a.Component),u={}},173:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.withMDXComponents=void 0;var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s=r(t(0)),c=r(t(57)),o=r(t(1));function r(e){return e&&e.__esModule?e:{default:e}}var l=(0,c.default)({}),m=l.Provider,p=l.Consumer;a.withMDXComponents=function(e){return function(a){var t=a.components,c=function(e,a){var t={};for(var n in e)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(a,["components"]);return s.default.createElement(p,null,function(a){return s.default.createElement(e,n({components:t||a},c))})}};var i=function(e){var a=e.components,t=e.children;return s.default.createElement(m,{value:a},t)};i.propTypes={components:o.default.object.isRequired,children:o.default.element.isRequired},a.default=i},174:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(177);Object.defineProperty(a,"MDXTag",{enumerable:!0,get:function(){return c(n).default}});var s=t(173);function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"MDXProvider",{enumerable:!0,get:function(){return c(s).default}})},177:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),c=t(0),o=m(c),r=m(t(178)),l=t(173);function m(e){return e&&e.__esModule?e:{default:e}}var p={inlineCode:"code",wrapper:"div"},i=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,c.Component),s(a,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.parentName,s=e.props,c=void 0===s?{}:s,l=e.children,m=e.components,i=void 0===m?{}:m,u=e.Layout,E=e.layoutProps,N=i[t+"."+a]||i[a]||p[a]||a;return u?((0,r.default)(this,u),o.default.createElement(u,n({components:i},E),o.default.createElement(N,c,l))):o.default.createElement(N,c,l)}}]),a}();a.default=(0,l.withMDXComponents)(i)},178:function(e,a,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c=Object.defineProperty,o=Object.getOwnPropertyNames,r=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,p=m&&m(Object);e.exports=function e(a,t,i){if("string"!=typeof t){if(p){var u=m(t);u&&u!==p&&e(a,u,i)}var E=o(t);r&&(E=E.concat(r(t)));for(var N=0;N<E.length;++N){var d=E[N];if(!(n[d]||s[d]||i&&i[d])){var k=l(t,d);try{c(a,d,k)}catch(f){}}}return a}return a}}}]);
//# sourceMappingURL=component---src-pages-tippy-instance-mdx-aa72354d42fb6438a816.js.map