(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09403ba8"],{"4edd":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("BoardWrite")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card",{staticClass:"mx-auto",attrs:{elevation:"10",outlined:"",width:"100%"}},[n("v-card-title",[n("span",{staticClass:"mr-2"},[t._v("Write")])]),n("v-card-text",[n("v-text-field",{attrs:{label:"Title",rules:t.rules,counter:100},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("Editor",{ref:"editor"})],1),n("v-card-actions",[n("v-spacer"),n("Button",{attrs:{color:"success",rounded:"",small:"",iconName:"mdi-content-save-all",btnName:"Save"},on:{click:t.save}}),n("Button",{attrs:{color:"grey darken-1",rounded:"",small:"",iconName:"mdi-arrow-left",btnName:"Back"},on:{click:function(e){return t.movePage("/list")}}})],1)],1)],1)},i=[],c=(n("96cf"),n("1da1")),s=n("76b1"),l=n("365c"),u={components:{Editor:s["a"]},data:function(){return{rules:[function(t){return!!t||"Required."},function(t){return t&&t.length>=3||"Min 3 characters"}],title:""}},methods:{save:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$refs.editor.getContent(),r=t.title,e.next=4,t.confirmDialog("Confirm Write","Do you want to save it?");case 4:a=e.sent,a&&Object(l["f"])({params:{title:r,content:n}}).then((function(e){e.data>0&&(t.$store.commit("SET_SNACKBAR",{show:!0,msg:"Insert Complete",color:"success"}),t.movePage("/detail?docNo="+e.data))})).catch((function(t){console.log(t)}));case 6:case"end":return e.stop()}}),e)})))()}}},d=u,f=n("2877"),v=n("6544"),m=n.n(v),p=n("b0af"),h=n("99d9"),w=n("a523"),b=n("2fa4"),g=n("8654"),k=Object(f["a"])(d,o,i,!1,null,null,null),C=k.exports;m()(k,{VCard:p["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VContainer:w["a"],VSpacer:b["a"],VTextField:g["a"]});var E={components:{BoardWrite:C}},x=E,_=Object(f["a"])(x,r,a,!1,null,null,null);e["default"]=_.exports},"76b1":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Editor",{ref:"toastEditor",attrs:{initialEditType:"wysiwyg",height:"500px",previewStyle:"vertical"}})],1)},a=[],o=n("4ede"),i=(n("a7be"),n("f513"),{components:{Editor:o["Editor"]},methods:{getContent:function(){return this.$refs.toastEditor.invoke("getMarkdown")},setContent:function(t){this.$refs.toastEditor.invoke("setMarkdown",t)}}}),c=i,s=n("2877"),l=Object(s["a"])(c,r,a,!1,null,null,null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-09403ba8.05e1fa5a.js.map