(function(e){function t(t){for(var r,s,i=t[0],c=t[1],l=t[2],d=0,m=[];d<i.length;d++)s=i[d],n[s]&&m.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},o=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("c21b"),n=a.n(r);n.a},"08f2":function(e,t,a){},"0c28":function(e,t,a){},2175:function(e,t,a){"use strict";var r=a("f587"),n=a.n(r);n.a},"2a43":function(e,t,a){},"2dd6":function(e,t,a){"use strict";var r=a("bd70"),n=a.n(r);n.a},3599:function(e,t,a){},"366f":function(e,t,a){},"3e69":function(e,t,a){},"45c1":function(e,t,a){"use strict";var r=a("69cd"),n=a.n(r);n.a},"4b57":function(e,t,a){"use strict";var r=a("82f9"),n=a.n(r);n.a},"52d3":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d"),a("7f10");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{"hide-menu":!e.isMenuVisible||!e.user},attrs:{id:"app"}},[a("Header",{attrs:{title:"VSS Artigos",hideToggle:!e.user,hideUserDropdown:!e.user}}),e.user?a("Menu"):e._e(),e.validatingToken?a("Loading"):a("Content"),a("Footer")],1)},o=[],s=(a("96cf"),a("3040")),i=a("bc3a"),c=a.n(i),l="__knowledge_user",u="https://vss-artigos-backend.onrender.com";function d(e){e&&e.response&&e.response.data?r["a"].toasted.global.defaultError({msg:e.response.data}):"string"===typeof e?r["a"].toasted.global.defaultError({msg:e}):r["a"].toasted.global.defaultError()}var m=a("2f62"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header"},[e.hideToggle?e._e():a("a",{staticClass:"toggle",on:{click:e.toggleMenu}},[a("i",{staticClass:"fa fa-lg",class:e.icon})]),a("h1",{staticClass:"title"},[a("router-link",{attrs:{to:"/"}},[e._v(e._s(e.title))])],1),e.hideUserDropdown?e._e():a("UserDropdown")],1)},p=[],v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-dropdown"},[a("div",{staticClass:"user-button"},[a("span",{staticClass:"d-none d-sm-block"},[e._v(e._s(e.user.name))]),a("div",{staticClass:"user-dropdown-img"},[a("Gravatar",{attrs:{email:e.user.email,alt:"User"}})],1),a("i",{staticClass:"fa fa-angle-down"})]),a("div",{staticClass:"user-dropdown-content"},[e.user.admin?a("router-link",{attrs:{to:"/admin"}},[a("i",{staticClass:"fa fa-cogs"}),e._v(" Administração\n        ")]):e._e(),a("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[a("i",{staticClass:"fa fa-sign-out"}),e._v(" Sair")])],1)])},g=[],h=a("e06a"),b=a.n(h),_={name:"UserDropdown",components:{Gravatar:b.a},computed:Object(m["b"])(["user"]),methods:{logout:function(){localStorage.removeItem(l),this.$store.commit("setUser",null),this.$router.push({name:"auth"})}}},y=_,C=(a("a09f"),a("2877")),w=Object(C["a"])(y,v,g,!1,null,null,null);w.options.__file="UserDropdown.vue";var x=w.exports,k={name:"Header",components:{UserDropdown:x},props:{title:String,hideToggle:Boolean,hideUserDropdown:Boolean},computed:{icon:function(){return this.$store.state.isMenuVisible?"fa-angle-left":"fa-angle-down"}},methods:{toggleMenu:function(){this.$store.commit("toggleMenu")}}},$=k,A=(a("9f34"),Object(C["a"])($,f,p,!1,null,null,null));A.options.__file="Header.vue";var S=A.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{directives:[{name:"show",rawName:"v-show",value:e.isMenuVisible,expression:"isMenuVisible"}],staticClass:"menu"},[a("div",{staticClass:"menu-filter"},[a("i",{staticClass:"fa fa-search fa-lg"}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.treeFilter,expression:"treeFilter"}],staticClass:"filter-field",attrs:{type:"text",placeholder:"Digite para filtrar..."},domProps:{value:e.treeFilter},on:{input:function(t){t.target.composing||(e.treeFilter=t.target.value)}}})]),a("Tree",{ref:"tree",attrs:{data:e.treeData,options:e.treeOptions,filter:e.treeFilter}})],1)},U=[],I=a("25ea"),P={name:"Menu",components:{Tree:I["a"]},computed:Object(m["b"])(["isMenuVisible"]),data:function(){return{treeFilter:"",treeData:this.getTreeData(),treeOptions:{propertyNames:{text:"name"},filter:{emptyText:"Categoria não encontrada"}}}},methods:{getTreeData:function(){var e="".concat(u,"/categories/tree");return c.a.get(e).then(function(e){return e.data})},onNodeSelect:function(e){this.$router.push({name:"articlesByCategory",params:{id:e.id}}),"xs"!==this.$mq&&"sm"!==this.$mq||this.$store.commit("toggleMenu",!1)}},mounted:function(){this.$refs.tree.$on("node:selected",this.onNodeSelect)}},E=P,j=(a("4b57"),Object(C["a"])(E,O,U,!1,null,null,null));j.options.__file="Menu.vue";var M=j.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("router-view")],1)},T=[],V={name:"Content"},q=V,D=(a("9551"),Object(C["a"])(q,N,T,!1,null,null,null));D.options.__file="Content.vue";var B=D.exports,F=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},L=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer"},[a("span",[e._v("Copyright "),a("strong",[e._v("Victor Spichenkoff")]),e._v(" ©2023")])])}],H={name:"Footer"},J=H,R=(a("2175"),Object(C["a"])(J,F,L,!1,null,null,null));R.options.__file="Footer.vue";var z=R.exports,G=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},K=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loading"},[r("img",{attrs:{src:a("cf1c"),alt:"Loading"}})])}],Q={name:"Loading"},W=Q,X=(a("2dd6"),Object(C["a"])(W,G,K,!1,null,null,null));X.options.__file="Loading.vue";var Y=X.exports,Z={name:"App",components:{Header:S,Menu:M,Content:B,Footer:z,Loading:Y},computed:Object(m["b"])(["isMenuVisible","user"]),data:function(){return{validatingToken:!0}},methods:{validateToken:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.validatingToken=!0,t=localStorage.getItem(l),a=JSON.parse(t),this.$store.commit("setUser",null),a){e.next=8;break}return this.validatingToken=!1,this.$router.push({name:"auth"}),e.abrupt("return");case 8:return e.next=10,c.a.post("".concat(u,"/validateToken"),a);case 10:r=e.sent,r.data?(this.$store.commit("setUser",a),"xs"!==this.$mq&&"sm"!==this.$mq||this.$store.commit("toggleMenu",!1)):(localStorage.removeItem(l),this.$router.push({name:"auth"})),this.validatingToken=!1;case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},created:function(){this.validateToken()}},ee=Z,te=(a("034f"),Object(C["a"])(ee,n,o,!1,null,null,null));te.options.__file="App.vue";var ae=te.exports,re=(a("f9e3"),a("2dd8"),a("9f7b"));r["a"].use(re["a"]);var ne=a("a65d"),oe=a.n(ne);r["a"].use(oe.a,{iconPack:"fontawesome",duration:3e3}),r["a"].toasted.register("defaultSuccess",function(e){return e.msg?e.msg:"Operação realizada com sucesso!"},{type:"success",icon:"check"}),r["a"].toasted.register("defaultError",function(e){return e.msg?e.msg:"Oops.. Erro inesperado."},{type:"error",icon:"times"});var se=function(e){return e},ie=function(e){if(401!==e.response.status)return Promise.reject(e);window.location="/"};c.a.interceptors.response.use(se,ie);var ce=a("660e");r["a"].use(ce["a"],{breakpoints:{xs:576,sm:768,md:960,lg:1140,xl:1/0}}),r["a"].use(m["a"]);var le=new m["a"].Store({state:{isMenuVisible:!1,user:null},mutations:{toggleMenu:function(e,t){e.user?e.isMenuVisible=void 0===t?!e.isMenuVisible:t:e.isMenuVisible=!1},setUser:function(e,t){e.user=t,t?(c.a.defaults.headers.common["Authorization"]="bearer ".concat(t.token),e.isMenuVisible=!0):(delete c.a.defaults.headers.common["Authorization"],e.isMenuVisible=!1)}}}),ue=a("8c4f"),de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("PageTitle",{attrs:{icon:"fa fa-home",main:"Dashboard",sub:"Projeto com Vue"}}),a("div",{staticClass:"stats"},[a("Stat",{attrs:{title:"Categorias",value:e.stat.categories,icon:"fa fa-folder",color:"#d54d50"}}),a("Stat",{attrs:{title:"Artigos",value:e.stat.articles,icon:"fa fa-file",color:"#3bc480"}}),a("Stat",{attrs:{title:"Usuários",value:e.stat.users,icon:"fa fa-user",color:"#3282cd"}})],1)],1)},me=[],fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-title"},[a("h1",[e.icon?a("i",{class:e.icon}):e._e(),e._v(" "+e._s(e.main))]),a("h2",[e._v(e._s(e.sub))]),a("hr")])},pe=[],ve={name:"PageTitle",props:["icon","main","sub"]},ge=ve,he=(a("a405"),Object(C["a"])(ge,fe,pe,!1,null,null,null));he.options.__file="PageTitle.vue";var be=he.exports,_e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"stat"},[a("div",{staticClass:"stat-icon"},[a("i",{class:e.icon,style:e.style})]),a("div",{staticClass:"stat-info"},[a("span",{staticClass:"stat-title"},[e._v(e._s(e.title))]),a("span",{staticClass:"stat-value"},[e._v(e._s(e.value))])])])},ye=[],Ce={name:"Stat",props:["title","value","icon","color"],computed:{style:function(){return"color: "+(this.color||"#000")}}},we=Ce,xe=(a("5b5c"),Object(C["a"])(we,_e,ye,!1,null,null,null));xe.options.__file="Stat.vue";var ke=xe.exports,$e={name:"Home",components:{PageTitle:be,Stat:ke},data:function(){return{stat:{}}},methods:{getStats:function(){var e=this;c.a.get("".concat(u,"/stats")).then(function(t){return e.stat=t.data})}},mounted:function(){this.getStats()}},Ae=$e,Se=(a("b497"),Object(C["a"])(Ae,de,me,!1,null,null,null));Se.options.__file="Home.vue";var Oe=Se.exports,Ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"admin-pages"},[a("PageTitle",{attrs:{icon:"fa fa-cogs",main:"Administração do Sistema",sub:"Cadastro, edição e exclusão"}}),a("div",{staticClass:"admin-pages-tabs"},[a("b-card",{attrs:{"no-body":""}},[a("b-tabs",{attrs:{card:""}},[a("b-tab",{attrs:{title:"Artigos",active:""}},[a("ArticleAdmin")],1),a("b-tab",{attrs:{title:"Categorias"}},[a("CategoryAdmin")],1),a("b-tab",{attrs:{title:"Usuários"}},[a("UserAdmin")],1)],1)],1)],1)],1)},Ie=[],Pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"article-admin"},[a("b-form",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.article.id,expression:"article.id"}],attrs:{id:"article-id",type:"hidden"},domProps:{value:e.article.id},on:{input:function(t){t.target.composing||e.$set(e.article,"id",t.target.value)}}}),a("b-form-group",{attrs:{label:"Nome:","label-for":"article-name"}},[a("b-form-input",{attrs:{id:"article-name",type:"text",required:"",readonly:"remove"===e.mode,placeholder:"Informe o Nome do Artigo..."},model:{value:e.article.name,callback:function(t){e.$set(e.article,"name",t)},expression:"article.name"}})],1),a("b-form-group",{attrs:{label:"Descrição","label-for":"article-description"}},[a("b-form-input",{attrs:{id:"article-description",type:"text",required:"",readonly:"remove"===e.mode,placeholder:"Informe o Nome do Artigo..."},model:{value:e.article.description,callback:function(t){e.$set(e.article,"description",t)},expression:"article.description"}})],1),"save"===e.mode?a("b-form-group",{attrs:{label:"Imagem (URL):","label-for":"article-imageUrl"}},[a("b-form-input",{attrs:{id:"article-imageUrl",type:"text",required:"",readonly:"remove"===e.mode,placeholder:"Informe a URL da Imagem..."},model:{value:e.article.imageUrl,callback:function(t){e.$set(e.article,"imageUrl",t)},expression:"article.imageUrl"}})],1):e._e(),"save"===e.mode?a("b-form-group",{attrs:{label:"Categoria:","label-for":"article-categoryId"}},[a("b-form-select",{attrs:{id:"article-categoryId",options:e.categories},model:{value:e.article.categoryId,callback:function(t){e.$set(e.article,"categoryId",t)},expression:"article.categoryId"}})],1):e._e(),"save"===e.mode?a("b-form-group",{attrs:{label:"Autor:","label-for":"article-userId"}},[a("b-form-select",{attrs:{id:"article-userId",options:e.users},model:{value:e.article.userId,callback:function(t){e.$set(e.article,"userId",t)},expression:"article.userId"}})],1):e._e(),"save"===e.mode?a("b-form-group",{attrs:{label:"Conteúdo","label-for":"article-content"}},[a("VueEditor",{attrs:{placeholder:"Informe o Conteúdo do Artigo..."},model:{value:e.article.content,callback:function(t){e.$set(e.article,"content",t)},expression:"article.content"}})],1):e._e(),"save"===e.mode?a("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Salvar")]):e._e(),"remove"===e.mode?a("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v("Excluir")]):e._e(),a("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1),a("hr"),a("b-table",{attrs:{hover:"",striped:"",items:e.articles,fields:e.fields},scopedSlots:e._u([{key:"actions",fn:function(t){return[a("b-button",{staticClass:"mr-2",attrs:{variant:"warning"},on:{click:function(a){e.loadArticle(t.item)}}},[a("i",{staticClass:"fa fa-pencil"})]),a("b-button",{attrs:{variant:"danger"},on:{click:function(a){e.loadArticle(t.item,"remove")}}},[a("i",{staticClass:"fa fa-trash"})])]}}])}),a("b-pagination",{attrs:{size:"md","total-rows":e.count,"per-page":e.limit},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)},Ee=[],je=(a("7f7f"),a("b3e9")),Me={name:"ArticleAdmin",components:{VueEditor:je["VueEditor"]},data:function(){return{mode:"save",article:{},articles:[],categories:[],users:[],page:1,limit:0,count:0,fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"description",label:"Descrição",sortable:!0},{key:"actions",label:"Ações"}]}},methods:{loadArticles:function(){var e=this,t="".concat(u,"/articles?page=").concat(this.page);c.a.get(t).then(function(t){e.articles=t.data.data,e.count=t.data.count,e.limit=t.data.limit})},reset:function(){this.mode="save",this.article={},this.loadArticles()},save:function(){var e=this,t=this.article.id?"put":"post",a=this.article.id?"/".concat(this.article.id):"";c.a[t]("".concat(u,"/articles").concat(a),this.article).then(function(){e.$toasted.global.defaultSuccess(),e.reset()}).catch(d)},remove:function(){var e=this,t=this.article.id;c.a.delete("".concat(u,"/articles/").concat(t)).then(function(){e.$toasted.global.defaultSuccess(),e.reset()}).catch(d)},loadArticle:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=a,c.a.get("".concat(u,"/articles/").concat(e.id)).then(function(e){return t.article=e.data})},loadCategories:function(){var e=this,t="".concat(u,"/categories");c.a.get(t).then(function(t){e.categories=t.data.map(function(e){return{value:e.id,text:e.path}})})},loadUsers:function(){var e=this,t="".concat(u,"/users");c.a.get(t).then(function(t){e.users=t.data.map(function(e){return{value:e.id,text:"".concat(e.name," - ").concat(e.email)}})})}},watch:{page:function(){this.loadArticles()}},mounted:function(){this.loadUsers(),this.loadCategories(),this.loadArticles()}},Ne=Me,Te=(a("851a"),Object(C["a"])(Ne,Pe,Ee,!1,null,null,null));Te.options.__file="ArticleAdmin.vue";var Ve=Te.exports,qe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"category-admin"},[a("b-form",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.category.id,expression:"category.id"}],attrs:{id:"category-id",type:"hidden"},domProps:{value:e.category.id},on:{input:function(t){t.target.composing||e.$set(e.category,"id",t.target.value)}}}),a("b-form-group",{attrs:{label:"Nome:","label-for":"category-name"}},[a("b-form-input",{attrs:{id:"category-name",type:"text",required:"",readonly:"remove"===e.mode,placeholder:"Informe o Nome da Categoria..."},model:{value:e.category.name,callback:function(t){e.$set(e.category,"name",t)},expression:"category.name"}})],1),a("b-form-group",{attrs:{label:"Categoria Pai:","label-for":"category-parentId"}},["save"===e.mode?a("b-form-select",{attrs:{id:"category-parentId",options:e.categories},model:{value:e.category.parentId,callback:function(t){e.$set(e.category,"parentId",t)},expression:"category.parentId"}}):a("b-form-input",{attrs:{id:"category-parentId",type:"text",readonly:""},model:{value:e.category.path,callback:function(t){e.$set(e.category,"path",t)},expression:"category.path"}})],1),"save"===e.mode?a("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Salvar")]):e._e(),"remove"===e.mode?a("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v("Excluir")]):e._e(),a("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1),a("hr"),a("b-table",{attrs:{hover:"",striped:"",items:e.categories,fields:e.fields},scopedSlots:e._u([{key:"actions",fn:function(t){return[a("b-button",{staticClass:"mr-2",attrs:{variant:"warning"},on:{click:function(a){e.loadCategory(t.item)}}},[a("i",{staticClass:"fa fa-pencil"})]),a("b-button",{attrs:{variant:"danger"},on:{click:function(a){e.loadCategory(t.item,"remove")}}},[a("i",{staticClass:"fa fa-trash"})])]}}])})],1)},De=[],Be=a("c93e"),Fe={name:"CategoryAdmin",data:function(){return{mode:"save",category:{},categories:[],fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"path",label:"Caminho",sortable:!0},{key:"actions",label:"Ações"}]}},methods:{loadCategories:function(){var e=this,t="".concat(u,"/categories");c.a.get(t).then(function(t){e.categories=t.data.map(function(e){return Object(Be["a"])({},e,{value:e.id,text:e.path})})})},reset:function(){this.mode="save",this.category={},this.loadCategories()},save:function(){var e=this,t=this.category.id?"put":"post",a=this.category.id?"/".concat(this.category.id):"";c.a[t]("".concat(u,"/categories").concat(a),this.category).then(function(){e.$toasted.global.defaultSuccess(),e.reset()}).catch(d)},remove:function(){var e=this,t=this.category.id;c.a.delete("".concat(u,"/categories/").concat(t)).then(function(){e.$toasted.global.defaultSuccess(),e.reset()}).catch(d)},loadCategory:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=t,this.category=Object(Be["a"])({},e)}},mounted:function(){this.loadCategories()}},Le=Fe,He=(a("70f7"),Object(C["a"])(Le,qe,De,!1,null,null,null));He.options.__file="CategoryAdmin.vue";var Je=He.exports,Re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-admin"},[a("b-form",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.id,expression:"user.id"}],attrs:{id:"user-id",type:"hidden"},domProps:{value:e.user.id},on:{input:function(t){t.target.composing||e.$set(e.user,"id",t.target.value)}}}),a("b-row",[a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Nome:","label-for":"user-name"}},[a("b-form-input",{attrs:{id:"user-name",type:"text",required:"",readonly:"remove"===e.mode,placeholder:"Informe o Nome do Usuário..."},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1)],1),a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"E-mail:","label-for":"user-email"}},[a("b-form-input",{attrs:{id:"user-email",type:"text",required:"",readonly:"remove"===e.mode,placeholder:"Informe o E-mail do Usuário..."},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1)],1)],1),a("b-form-checkbox",{directives:[{name:"show",rawName:"v-show",value:"save"===e.mode,expression:"mode === 'save'"}],staticClass:"mt-3 mb-3",attrs:{id:"user-admin"},model:{value:e.user.admin,callback:function(t){e.$set(e.user,"admin",t)},expression:"user.admin"}},[e._v("\n            Administrador?\n        ")]),a("b-row",{directives:[{name:"show",rawName:"v-show",value:"save"===e.mode,expression:"mode === 'save'"}]},[a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Senha:","label-for":"user-password"}},[a("b-form-input",{attrs:{id:"user-password",type:"password",required:"",placeholder:"Informe a Senha do Usuário..."},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1)],1),a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Confirmação de Senha:","label-for":"user-confirm-password"}},[a("b-form-input",{attrs:{id:"user-confirm-password",type:"password",required:"",placeholder:"Confirme a Senha do Usuário..."},model:{value:e.user.confirmPassword,callback:function(t){e.$set(e.user,"confirmPassword",t)},expression:"user.confirmPassword"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{xs:"12"}},["save"===e.mode?a("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Salvar")]):e._e(),"remove"===e.mode?a("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v("Excluir")]):e._e(),a("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1)],1)],1),a("hr"),a("b-table",{attrs:{hover:"",striped:"",items:e.users,fields:e.fields},scopedSlots:e._u([{key:"actions",fn:function(t){return[a("b-button",{staticClass:"mr-2",attrs:{variant:"warning"},on:{click:function(a){e.loadUser(t.item)}}},[a("i",{staticClass:"fa fa-pencil"})]),a("b-button",{attrs:{variant:"danger"},on:{click:function(a){e.loadUser(t.item,"remove")}}},[a("i",{staticClass:"fa fa-trash"})])]}}])})],1)},ze=[],Ge={name:"UserAdmin",data:function(){return{mode:"save",user:{},users:[],fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"email",label:"E-mail",sortable:!0},{key:"admin",label:"Administrador",sortable:!0,formatter:function(e){return e?"Sim":"Não"}},{key:"actions",label:"Ações"}]}},methods:{loadUsers:function(){var e=this,t="".concat(u,"/users");c.a.get(t).then(function(t){e.users=t.data})},reset:function(){this.mode="save",this.user={},this.loadUsers()},save:function(){var e=this,t=this.user.id?"put":"post",a=this.user.id?"/".concat(this.user.id):"";c.a[t]("".concat(u,"/users").concat(a),this.user).then(function(){e.$toasted.global.defaultSuccess(),e.reset()}).catch(d)},remove:function(){var e=this,t=this.user.id;c.a.delete("".concat(u,"/users/").concat(t)).then(function(){e.$toasted.global.defaultSuccess(),e.reset()}).catch(d)},loadUser:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=t,this.user=Object(Be["a"])({},e)}},mounted:function(){this.loadUsers()}},Ke=Ge,Qe=(a("77fa"),Object(C["a"])(Ke,Re,ze,!1,null,null,null));Qe.options.__file="UserAdmin.vue";var We=Qe.exports,Xe={name:"AdminPages",components:{PageTitle:be,ArticleAdmin:Ve,CategoryAdmin:Je,UserAdmin:We}},Ye=Xe,Ze=(a("9519"),Object(C["a"])(Ye,Ue,Ie,!1,null,null,null));Ze.options.__file="AdminPages.vue";var et=Ze.exports,tt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"articles-by-category"},[a("PageTitle",{attrs:{icon:"fa fa-folder-o",main:e.category.name,sub:"Categoria"}}),a("ul",e._l(e.articles,function(e){return a("li",{key:e.id},[a("ArticleItem",{attrs:{article:e}})],1)})),a("div",{staticClass:"load-more"},[e.loadMore?a("button",{staticClass:"btn btn-lg btn-outline-primary",on:{click:e.getArticles}},[e._v("Carregar Mais Artigos")]):e._e()])],1)},at=[],rt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"article-item"},[r("router-link",{attrs:{to:{name:"articleById",params:{id:e.article.id}}}},[r("div",{staticClass:"article-item-image d-none d-sm-block"},[e.article.imageUrl?r("img",{attrs:{src:e.article.imageUrl,height:"150",width:"150",alt:"Article"}}):r("img",{attrs:{src:a("c54c"),height:"150",width:"150",alt:"Article"}})]),r("div",{staticClass:"article-item-info"},[r("h2",[e._v(e._s(e.article.name))]),r("p",[e._v(e._s(e.article.description))]),r("span",{staticClass:"article-item-author"},[r("strong",[e._v("Autor: ")]),e._v(e._s(e.article.author)+"\n            ")])])])],1)},nt=[],ot={name:"ArticleItem",props:["article"]},st=ot,it=(a("fb2c"),Object(C["a"])(st,rt,nt,!1,null,null,null));it.options.__file="ArticleItem.vue";var ct=it.exports,lt={name:"ArticlesByCategory",components:{PageTitle:be,ArticleItem:ct},data:function(){return{category:{},articles:[],page:1,loadMore:!0}},methods:{getCategory:function(){var e=this,t="".concat(u,"/categories/").concat(this.category.id);c()(t).then(function(t){return e.category=t.data})},getArticles:function(){var e=this,t="".concat(u,"/categories/").concat(this.category.id,"/articles?page=").concat(this.page);c()(t).then(function(t){e.articles=e.articles.concat(t.data),e.page++,0===t.data.length&&(e.loadMore=!1)})}},watch:{$route:function(e){this.category.id=e.params.id,this.articles=[],this.page=1,this.loadMore=!0,this.getCategory(),this.getArticles()}},mounted:function(){this.category.id=this.$route.params.id,this.getCategory(),this.getArticles()}},ut=lt,dt=(a("cb32"),Object(C["a"])(ut,tt,at,!1,null,null,null));dt.options.__file="ArticlesByCategory.vue";var mt=dt.exports,ft=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"article-by-id"},[a("PageTitle",{attrs:{icon:"fa fa-file-o",main:e.article.name,sub:e.article.description}}),a("div",{staticClass:"article-content",domProps:{innerHTML:e._s(e.article.content)}})],1)},pt=[],vt=(a("ac6a"),a("8726"),a("bd12")),gt=a.n(vt),ht={name:"ArticleById",components:{PageTitle:be},data:function(){return{article:{}}},mounted:function(){var e=this,t="".concat(u,"/articles/").concat(this.$route.params.id);c.a.get(t).then(function(t){return e.article=t.data})},updated:function(){document.querySelectorAll(".article-content pre.ql-syntax").forEach(function(e){gt.a.highlightBlock(e)})}},bt=ht,_t=(a("45c1"),Object(C["a"])(bt,ft,pt,!1,null,null,null));_t.options.__file="ArticleById.vue";var yt=_t.exports,Ct=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-content"},[r("div",{staticClass:"auth-modal"},[r("img",{attrs:{src:a("cf05"),width:"200",alt:"Logo"}}),r("hr"),r("div",{staticClass:"auth-title"},[e._v(e._s(e.showSignup?"Cadastro":"Login"))]),e.showSignup?r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],attrs:{type:"text",placeholder:"Nome"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}}):e._e(),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],attrs:{name:"email",type:"text",placeholder:"E-mail"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{name:"password",type:"password",placeholder:"Senha"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.showSignup?r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirmPassword,expression:"user.confirmPassword"}],attrs:{type:"password",placeholder:"Confirme a Senha"},domProps:{value:e.user.confirmPassword},on:{input:function(t){t.target.composing||e.$set(e.user,"confirmPassword",t.target.value)}}}):e._e(),e.showSignup?r("button",{on:{click:e.signup}},[e._v("Registrar")]):r("button",{on:{click:e.signin}},[e._v("Entrar")]),r("a",{attrs:{href:""},on:{click:function(t){t.preventDefault(),e.showSignup=!e.showSignup}}},[e.showSignup?r("span",[e._v("Já tem conta? Faça o Login!")]):r("span",[e._v("Não tem uma conta? Registre-se aqui!")])])])])},wt=[],xt={name:"Auth",data:function(){return{showSignup:!1,user:{}}},methods:{signin:function(){var e=this;c.a.post("".concat(u,"/signin"),this.user).then(function(t){e.$store.commit("setUser",t.data),localStorage.setItem(l,JSON.stringify(t.data)),e.$router.push({path:"/"})}).catch(d)},signup:function(){var e=this;c.a.post("".concat(u,"/signup"),this.user).then(function(){e.$toasted.global.defaultSuccess(),e.user={},e.showSignup=!1}).catch(d)}}},kt=xt,$t=(a("ee68"),Object(C["a"])(kt,Ct,wt,!1,null,null,null));$t.options.__file="Auth.vue";var At=$t.exports;r["a"].use(ue["a"]);var St=[{name:"home",path:"/",component:Oe},{name:"adminPages",path:"/admin",component:et,meta:{requiresAdmin:!0}},{name:"articlesByCategory",path:"/categories/:id/articles",component:mt},{name:"articleById",path:"/articles/:id",component:yt},{name:"auth",path:"/auth",component:At}],Ot=new ue["a"]({mode:"hash",routes:St});Ot.beforeEach(function(e,t,a){var r=localStorage.getItem(l);if(e.matched.some(function(e){return e.meta.requiresAdmin})){var n=JSON.parse(r);n&&n.admin?a():a({path:"/"})}else a()});var Ut=Ot;r["a"].config.productionTip=!1,new r["a"]({store:le,router:Ut,render:function(e){return e(ae)}}).$mount("#app")},"5b5c":function(e,t,a){"use strict";var r=a("3e69"),n=a.n(r);n.a},6258:function(e,t,a){},"69cd":function(e,t,a){},"6eda":function(e,t,a){},"70f7":function(e,t,a){"use strict";var r=a("0c28"),n=a.n(r);n.a},"77fa":function(e,t,a){"use strict";var r=a("2a43"),n=a.n(r);n.a},"82f9":function(e,t,a){},"851a":function(e,t,a){"use strict";var r=a("6258"),n=a.n(r);n.a},9519:function(e,t,a){"use strict";var r=a("366f"),n=a.n(r);n.a},9551:function(e,t,a){"use strict";var r=a("6eda"),n=a.n(r);n.a},"9f20":function(e,t,a){},"9f34":function(e,t,a){"use strict";var r=a("08f2"),n=a.n(r);n.a},a09f:function(e,t,a){"use strict";var r=a("52d3"),n=a.n(r);n.a},a405:function(e,t,a){"use strict";var r=a("dda0"),n=a.n(r);n.a},ae90:function(e,t,a){},b497:function(e,t,a){"use strict";var r=a("3599"),n=a.n(r);n.a},bd70:function(e,t,a){},c21b:function(e,t,a){},c54c:function(e,t,a){e.exports=a.p+"img/article.ceb5521b.png"},cb32:function(e,t,a){"use strict";var r=a("e455"),n=a.n(r);n.a},cf05:function(e,t,a){e.exports=a.p+"https://victor-spichenkoff.github.io/vss-artigos-frontend/img/logo.2b935f94.png"},cf1c:function(e,t,a){e.exports=a.p+"./img/loading.8a7630ca.gif"},dda0:function(e,t,a){},e455:function(e,t,a){},ee68:function(e,t,a){"use strict";var r=a("9f20"),n=a.n(r);n.a},f587:function(e,t,a){},fb2c:function(e,t,a){"use strict";var r=a("ae90"),n=a.n(r);n.a}});
//# sourceMappingURL=app.c15d7d6b.js.map