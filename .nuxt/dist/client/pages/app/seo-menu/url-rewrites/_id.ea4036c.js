(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1535:function(t,e,r){"use strict";r.r(e);r(98),r(71),r(45),r(110),r(48);var n=r(52),l=r(107),o=r(60),c=r(54),d=r(42),m=r(51),f=r(49),v=r(103);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var l=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,l)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var y=function(t,e,r,desc){var n,l=arguments.length,o=l<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(l<3?n(o):l>3?n(e,r,o):n(e,r))||o);return l>3&&o&&Object.defineProperty(e,r,o),o},_=function(t){Object(o.a)(r,t);var e=h(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).metaUrl="",t.metaTitle="",t.metaDesc="",t.metaKeywords=[],t.metaKey="",t}return Object(l.a)(r,[{key:"onChanGeSo",value:function(){console.log(this.seo),this.metaUrl=this.seo.urlKey,this.metaTitle=this.seo.metatitle,this.metaDesc=this.seo.metadesc,this.metaKeywords=this.seo.metakeywords.map((function(t){return{text:t}}))}},{key:"onUpdateSeo",value:function(){var t=this;this.$apollo.mutate({mutation:v.Nc,variables:{id:this.$route.params.id,metatitle:this.metaTitle,metakeywords:this.metaKeywords.map((function(t){return t.text})),metadesc:this.metaDesc}}).then((function(e){t.$Message.success("Seo Updated")})).catch((function(e){t.$Message.error(e.message)}))}}]),r}(f.c);y([Object(f.d)("seo")],_.prototype,"onChanGeSo",null);var x=_=y([Object(f.a)({layout:"console",apollo:{seo:{query:v.Kb,variables:function(){return{id:this.$route.params.id}},fetchPolicy:"network-only"}}})],_),w=r(33),component=Object(w.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"d-flex flex-column-fluid"},[r("div",{staticClass:" container-fluid "},[r("div",{staticClass:"subheader py-2 py-lg-4  subheader-transparent ",attrs:{id:"kt_subheader"}},[r("div",{staticClass:"d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap w-100"},[r("div",{staticClass:"d-flex align-items-center flex-wrap mr-2"},[r("h5",{staticClass:"text-dark font-weight-bold mt-2 mb-2 mr-5"},[t._v("SEO: "+t._s(t.metaTitle))]),t._v(" "),r("div",{staticClass:"subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"}),t._v(" "),r("div",{staticClass:"d-flex align-items-center",attrs:{id:"kt_subheader_search"}})]),t._v(" "),t._m(0)])]),t._v(" "),r("div",{staticClass:"card"},[t.$apollo.queries.seo.loading?r("div",{staticClass:"d-flex justify-content-center align-items-center m-20 w-100"},[r("div",{staticClass:"spinner spinner-primary spinner-lg mr-15"})]):t._e(),t._v(" "),t.$apollo.queries.seo.loading?t._e():r("div",{staticClass:"card-body"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Enter Meta URL")]),t._v(" "),r("a-input",{attrs:{size:"large",disabled:!0},model:{value:t.metaUrl,callback:function(e){t.metaUrl=e},expression:"metaUrl"}}),t._v(" "),r("small",{staticClass:"form-text text-muted"},[t._v(t._s(t.$t("store.storenameinfo")))])],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Enter Meta Title")]),t._v(" "),r("a-input",{attrs:{size:"large"},model:{value:t.metaTitle,callback:function(e){t.metaTitle=e},expression:"metaTitle"}}),t._v(" "),r("small",{staticClass:"form-text text-muted"},[t._v(t._s(t.$t("store.storenameinfo")))])],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Enter Meta Keywords")]),t._v(" "),r("vue-tags-input",{attrs:{tags:t.metaKeywords,placeholder:"Enter keywords"},on:{"tags-changed":function(e){return t.metaKeywords=e}},model:{value:t.metaKey,callback:function(e){t.metaKey=e},expression:"metaKey"}}),t._v(" "),r("small",{staticClass:"form-text text-muted"},[t._v(t._s(t.$t("store.storenameinfo")))])],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Enter Meta Description")]),t._v(" "),r("a-input",{attrs:{size:"large",type:"textarea"},model:{value:t.metaDesc,callback:function(e){t.metaDesc=e},expression:"metaDesc"}}),t._v(" "),r("small",{staticClass:"form-text text-muted"},[t._v(t._s(t.$t("store.storenameinfo")))])],1),t._v(" "),r("div",[r("button",{staticClass:"btn btn-light-primary",attrs:{type:"button"},on:{click:t.onUpdateSeo}},[t._v("Update")])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex align-items-center"},[e("a",{attrs:{href:"#"}})])}],!1,null,null,null);e.default=component.exports}}]);