(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return _});n(77),n(8),n(45),n(35),n(23);var a=n(6),o=n.n(a),r=n(0),i=n.n(r),s=n(187),c=n(11),l=n.n(c),u=n(195),d=n.n(u),m=n(225),p=n(188),f=n(205),h=n(189),g=n(199),b=n.n(g),y=(n(177),n(194)),v=n(190),E=n.n(v),w=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.querySelectorAll(".blog-post-content a"),t=Array.isArray(e),n=0;for(e=t?e:e[Symbol.iterator]();;){var a;if(t){if(n>=e.length)break;a=e[n++]}else{if((n=e.next()).done)break;a=n.value}a.target="_blank"}},n.render=function(){var e=this.props,t=e.data,n=e.location,a=e.pageContext,o=t.markdownRemark,r=o.id,c=o.frontmatter,l=o.html,u=o.excerpt,g=t.site.siteMetadata.title,v=c.title,w=c.tags,_=a.previous,N=a.next,S=[].concat(c.tags,c.keywords).toString(),C=E.a.disqusShortname,I={identifier:r,title:g},k=w.map(function(e,t){return i.a.createElement(s.a,{to:"/tags/"+b.a.kebabCase(e),key:"tag-"+t},"#",e)});return i.a.createElement(y.a,{location:n},i.a.createElement(d.a,{title:""+v,meta:[{name:"keywords",content:S},{name:"og:title",content:v},{name:"og:description",content:u}]}),i.a.createElement("div",{className:"blog-post-container"},i.a.createElement("div",{className:"blog-post"},i.a.createElement("div",{className:"post-header"},i.a.createElement("h1",{className:"title"},""+v),i.a.createElement("div",{className:"date"},i.a.createElement(p.a,{icon:f.a,fixedWidth:!0}),c.date),i.a.createElement("div",{className:"tags"},k)),i.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:l}})),i.a.createElement("div",{className:"blog-post-nav"},_&&i.a.createElement("div",{className:"prev"},i.a.createElement("div",{className:"nav-wrap"},i.a.createElement("div",{className:"angle"},i.a.createElement(p.a,{icon:h.a,fixedWidth:!0})),i.a.createElement(s.a,{to:_.fields.slug,rel:"prev"},i.a.createElement("div",null,i.a.createElement("p",null,"Previous Post"),i.a.createElement("span",null,_.frontmatter.title))))),N&&i.a.createElement("div",{className:"next"},i.a.createElement("div",{className:"nav-wrap"},i.a.createElement(s.a,{to:N.fields.slug,rel:"next"},i.a.createElement("div",null,i.a.createElement("p",null,"Next Post"),i.a.createElement("span",null,N.frontmatter.title))),i.a.createElement("div",{className:"angle"},i.a.createElement(p.a,{icon:h.b,fixedWidth:!0})))))),E.a.disqusShortname?i.a.createElement("div",{className:"comments"},i.a.createElement(m.DiscussionEmbed,{shortname:C,config:I})):null)},t}(i.a.Component);w.propTypes={data:l.a.object.isRequired,location:l.a.object.isRequired,pageContext:l.a.object.isRequired},t.default=w;var _="1815311691"},186:function(e,t,n){var a;e.exports=(a=n(191))&&a.default||a},187:function(e,t,n){"use strict";n.d(t,"b",function(){return d});var a=n(0),o=n.n(a),r=n(11),i=n.n(r),s=n(54),c=n.n(s);n.d(t,"a",function(){return c.a});n(186);var l=o.a.createContext({});function u(e){var t=e.staticQueryData,n=e.data,a=e.query,r=e.render,i=n?n.data:t[a]&&t[a].data;return o.a.createElement(o.a.Fragment,null,i&&r(i),!i&&o.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,n=e.query,a=e.render,r=e.children;return o.a.createElement(l.Consumer,null,function(e){return o.a.createElement(u,{data:t,query:n,render:a||r,staticQueryData:e})})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},190:function(e,t,n){var a={title:"HUNDRED",author:"Junho Baik",description:"Junho Baik's blog",siteUrl:"https://junhobaik.github.io",titleLogo:function(){return n(193)},titleLogoShow:!0,bio:"Jr. FRONT END DEVELOPER",bioShow:!0,googleAnalyticsTrackingId:"UA-103592668-4",disqusShortname:"dev-hundred-blog"};e.exports=a},191:function(e,t,n){"use strict";n.r(t);n(16);var a=n(0),o=n.n(a),r=n(11),i=n.n(r),s=n(79),c=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},192:function(e){e.exports={data:{site:{siteMetadata:{title:"HUNDRED"}}}}},193:function(e,t,n){e.exports=n.p+"static/profile-84a4704395a2596be588c30aae784e41.png"},194:function(e,t,n){"use strict";n(16);var a=n(192),o=n(0),r=n.n(o),i=n(11),s=n.n(i),c=n(195),l=n.n(c),u=n(187),d=n(188),m=n(189),p=(n(173),n(6)),f=n.n(p),h=function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){return r.a.createElement("footer",{id:"footer"},r.a.createElement("div",{className:"copyright"},r.a.createElement("span",null,"© ",r.a.createElement("a",{href:"mailto:junhobaik@gmail.com"},"Junho Baik")," 2018, All rights reserved. Powered by "," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby"))),r.a.createElement("div",{className:"submenu"}))},t}(o.Component),g=n(190),b=n.n(g),y=(n(33),n(12),n(197),n(77),n(8),n(198)),v=new(n.n(y).a)({baseFontSize:"16px",baseLineHeight:"1.5",bodyWeight:"300",headerWeight:"700",boldWeight:"500 !important",headerFontFamily:["Nanum Gothic"],bodyFontFamily:["Noto Sans KR"]}),E=[{name:"Nanum Gothic",bold:[400,700]},{name:"Noto Sans KR",bold:[300,500]}].map(function(e){return e.bold?e.name.replace(/ /gi,"+")+":"+e.bold.toString():""+e.name.replace(/ /gi,"+")}).join("|").toString(),w=(v.rhythm,v.scale,function(e){var t=e.children,n=(e.data,e.location);return r.a.createElement(u.b,{query:"755544856",render:function(e){var a;a=n?n.href:b.a.siteUrl;var o=function(e,t){var n={};return n=e?{display:"inline-block"}:{display:"none"},t||(n=Object.assign({},n,{width:"1.5rem",height:"1.5rem",marginRight:"0.1rem"})),n}(b.a.titleLogoShow,b.a.bioShow),i=b.a.bioShow?{}:{display:"none"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:b.a.description},{name:"og:type",content:"website"},{name:"og:title",content:b.a.title},{name:"og:description",content:b.a.description},{name:"og:image",content:b.a.titleLogo()},{name:"og:url",content:a}]},r.a.createElement("html",{lang:"ko"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family="+E,rel:"stylesheet"}),r.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id="+b.a.googleAnalyticsTrackingId}),r.a.createElement("script",null,"\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', '"+b.a.googleAnalyticsTrackingId+"');\n              "),r.a.createElement("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}),r.a.createElement("script",null,'\n              (adsbygoogle = window.adsbygoogle || []).push({\n                google_ad_client: "ca-pub-5001380215831339",\n                enable_page_level_ads: true\n              });\n              ')),r.a.createElement("div",{id:"wrap"},r.a.createElement("header",{id:"header"},r.a.createElement("div",{className:"title"},r.a.createElement("div",{className:"title-wrap"},r.a.createElement(u.a,{to:"/"},r.a.createElement("div",{className:"logo-img",style:o},r.a.createElement("img",{src:b.a.titleLogo(),alt:"logo"})),r.a.createElement("div",null,r.a.createElement("h1",null,b.a.title),r.a.createElement("p",{className:"bio",style:i},b.a.bio))))),r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"home"},r.a.createElement(u.a,{to:"/"},r.a.createElement(d.a,{icon:m.c,fixedWidth:!0,transform:"down-1"}),r.a.createElement("span",null,"Home"))),r.a.createElement("div",{className:"tags"},r.a.createElement(u.a,{to:"/tags"},r.a.createElement(d.a,{icon:m.f,fixedWidth:!0,transform:"down-1"}),r.a.createElement("span",null,"Tags"))),r.a.createElement("div",{className:"search"},r.a.createElement(u.a,{to:"/search"},r.a.createElement(d.a,{icon:m.d,fixedWidth:!0,transform:"down-1"}),r.a.createElement("span",null,"Search"))))),r.a.createElement("article",{id:"article"},t)),r.a.createElement(h,null))},data:a})});w.propTypes={children:s.a.node.isRequired,location:s.a.object.isRequired};t.a=w},212:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var a=window.document.createElement("script");return a.async=!0,a.src=e,a.id=t,n.appendChild(a),a},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var a=void 0;return function(){var o=this,r=arguments,i=function(){a=null,n||e.apply(o,r)},s=n&&!a;window.clearTimeout(a),a=setTimeout(i,t),s&&e.apply(o,r)}}},225:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var a=n(226),o=n(227),r=n(230);t.CommentCount=a.CommentCount,t.CommentEmbed=o.CommentEmbed,t.DiscussionEmbed=r.DiscussionEmbed;var i={CommentCount:a.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:r.DiscussionEmbed};t.default=i},226:function(e,t,n){"use strict";n(118),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=(a=r)&&a.__esModule?a:{default:a},s=n(212);var c=(0,s.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url||t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?c():(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,s.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return i.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},227:function(e,t,n){"use strict";n(228),n(77),n(8),n(118),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=(a=r)&&a.__esModule?a:{default:a};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},228:function(e,t,n){"use strict";var a=n(3),o=n(19),r=n(26),i=n(120),s=n(57),c=n(9),l=n(81).f,u=n(88).f,d=n(14).f,m=n(203).trim,p=a.Number,f=p,h=p.prototype,g="Number"==r(n(60)(h)),b="trim"in String.prototype,y=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var n,a,o,r=(t=b?t.trim():m(t,3)).charCodeAt(0);if(43===r||45===r){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===r){switch(t.charCodeAt(1)){case 66:case 98:a=2,o=49;break;case 79:case 111:a=8,o=55;break;default:return+t}for(var i,c=t.slice(2),l=0,u=c.length;l<u;l++)if((i=c.charCodeAt(l))<48||i>o)return NaN;return parseInt(c,a)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(g?c(function(){h.valueOf.call(n)}):"Number"!=r(n))?i(new f(y(t)),n,p):y(t)};for(var v,E=n(13)?l(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;E.length>w;w++)o(f,v=E[w])&&!o(p,v)&&d(p,v,u(f,v));p.prototype=h,h.constructor=p,n(15)(a,"Number",p)}},230:function(e,t,n){"use strict";n(118),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=(a=r)&&a.__esModule?a:{default:a},s=n(212);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url||t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return i.default.createElement("div",{id:"disqus_thread"})}}]),t}()}}]);