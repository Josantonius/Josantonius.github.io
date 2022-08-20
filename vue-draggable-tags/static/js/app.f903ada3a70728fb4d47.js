webpackJsonp([1,0],[function(t,e,l){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=l(29),s=a(i),c=l(21),n=a(c);l(8),l(12),new s.default({el:"#app",template:"<App/>",components:{App:n.default}})},,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"arrow-left-icon",data:function(){var t=this.title?this.title:"Arrow left icon";return{iconTitle:t}},props:{title:{type:String}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"arrow-right-icon",data:function(){var t=this.title?this.title:"Arrow right icon";return{iconTitle:t}},props:{title:{type:String}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"lock-icon",data:function(){var t=this.title?this.title:"Lock icon";return{iconTitle:t}},props:{title:{type:String}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"sort-alphabetical-icon",data:function(){var t=this.title?this.title:"Sort alphabetical icon";return{iconTitle:t}},props:{title:{type:String}}}},function(t,e,l){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=l(22),s=a(i);e.default={name:"app",components:{VueDraggableTags:s.default}}},function(t,e,l){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),l(11);var i=l(30),s=a(i),c=l(19),n=a(c),o=l(17),r=a(o),d=l(18),u=a(d),p=l(20),m=a(p);e.default={name:"vue-draggable-tags",components:{draggable:s.default,LockIcon:n.default,ArrowLeftIcon:r.default,ArrowRightIcon:u.default,SortAlphabeticalIcon:m.default},data:function(){return{selected:{tags:[],editable:!0,cloneable:!1,droppable:!0},available:{tags:[{tag:"Go",slug:"go",fixed:!0},{tag:"PHP",slug:"php",fixed:!0},{tag:"R",slug:"r",fixed:!0},{tag:"Kotlin",slug:"kotlin",fixed:!1},{tag:"Java",slug:"java",fixed:!1},{tag:"C++",slug:"c--",fixed:!1},{tag:"JavaScript",slug:"javascript",fixed:!1},{tag:"C#",slug:"c-",fixed:!1},{tag:"C",slug:"c",fixed:!1},{tag:"Python",slug:"phyton",fixed:!1}],editable:!0,cloneable:!1,droppable:!0},isDragging:!1,delayedDragging:!1}},methods:{orderList:function(t){t.sort(function(t,e){return t.tag.localeCompare(e.tag)})},onClick:function(t,e,l){var a=e.tags[t];!a.fixed&&e.editable&&l.editable&&l.droppable&&((e.cloneable||0===l.tags.filter(function(t){return t.tag==a.tag}).length)&&l.tags.push(a),e.cloneable||e.tags.splice(t,1))},onMove:function(t){var e=t.relatedContext,l=t.draggedContext,a=e.element,i=l.element;return!(a&&a.fixed||i.fixed)},getOptions:function(t){return{sort:!0,animation:0,group:{name:"tags",pull:!t.cloneable||"clone",put:t.droppable},disabled:!t.editable,ghostClass:"ghost"}}},watch:{isDragging:function(t){var e=this;return t?void(this.delayedDragging=!0):void this.$nextTick(function(){e.delayedDragging=!1})}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,function(t,e,l){var a=l(1)(l(2),l(28),null,null);t.exports=a.exports},function(t,e,l){var a=l(1)(l(3),l(27),null,null);t.exports=a.exports},function(t,e,l){var a=l(1)(l(4),l(24),null,null);t.exports=a.exports},function(t,e,l){var a=l(1)(l(5),l(26),null,null);t.exports=a.exports},function(t,e,l){l(10);var a=l(1)(l(6),l(25),null,null);t.exports=a.exports},function(t,e,l){l(9);var a=l(1)(l(7),l(23),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mdl-grid mdl-grid center-items"},[t._m(0,!1,!1),t._v(" "),t._m(1,!1,!1),t._v(" "),l("div",{staticClass:"mdl-cell mdl-cell--3-col mdl-cell--6-col-tablet",attrs:{id:"sdt-selected-tags"}},[l("div",{staticClass:"panel-body sdt-teal-switch"},[l("label",{staticClass:"mdl-switch mdl-js-switch mdl-js-ripple-effect",attrs:{for:"switch-1"}},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.selected.editable,expression:"selected.editable"}],staticClass:"mdl-switch__input",attrs:{type:"checkbox",id:"switch-1"},domProps:{checked:Array.isArray(t.selected.editable)?t._i(t.selected.editable,null)>-1:t.selected.editable},on:{change:function(e){var l=t.selected.editable,a=e.target,i=!!a.checked;if(Array.isArray(l)){var s=null,c=t._i(l,s);a.checked?c<0&&(t.selected.editable=l.concat([s])):c>-1&&(t.selected.editable=l.slice(0,c).concat(l.slice(c+1)))}else t.$set(t.selected,"editable",i)}}}),t._v(" "),l("span",{staticClass:"mdl-switch__label"},[t._v("Enable drag and drop")])]),t._v(" "),l("label",{staticClass:"mdl-switch mdl-js-switch mdl-js-ripple-effect",attrs:{for:"switch-2"}},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.selected.droppable,expression:"selected.droppable"}],staticClass:"mdl-switch__input",attrs:{type:"checkbox",id:"switch-2"},domProps:{checked:Array.isArray(t.selected.droppable)?t._i(t.selected.droppable,null)>-1:t.selected.droppable},on:{change:function(e){var l=t.selected.droppable,a=e.target,i=!!a.checked;if(Array.isArray(l)){var s=null,c=t._i(l,s);a.checked?c<0&&(t.selected.droppable=l.concat([s])):c>-1&&(t.selected.droppable=l.slice(0,c).concat(l.slice(c+1)))}else t.$set(t.selected,"droppable",i)}}}),t._v(" "),l("span",{staticClass:"mdl-switch__label"},[t._v("Enable dropping")])]),t._v(" "),l("label",{staticClass:"mdl-switch mdl-js-switch mdl-js-ripple-effect",attrs:{for:"switch-3"}},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.selected.cloneable,expression:"selected.cloneable"}],staticClass:"mdl-switch__input",attrs:{type:"checkbox",id:"switch-3"},domProps:{checked:Array.isArray(t.selected.cloneable)?t._i(t.selected.cloneable,null)>-1:t.selected.cloneable},on:{change:function(e){var l=t.selected.cloneable,a=e.target,i=!!a.checked;if(Array.isArray(l)){var s=null,c=t._i(l,s);a.checked?c<0&&(t.selected.cloneable=l.concat([s])):c>-1&&(t.selected.cloneable=l.slice(0,c).concat(l.slice(c+1)))}else t.$set(t.selected,"cloneable",i)}}}),t._v(" "),l("span",{staticClass:"mdl-switch__label"},[t._v("\n            Enable cloning")])])]),t._v(" "),l("button",{staticClass:"sdt-sortable-btn sdt-sort-button mdl-button mdl-button--fab mdl-button--mini-fab mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--teal-100",on:{click:function(e){t.orderList(t.selected.tags)}}},[l("i",{staticClass:"material-icons  sdt-color-teal"},[l("sort-alphabetical-icon")],1)]),t._v(" "),l("div",{staticClass:"mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp mdl-color--teal-500"},[l("draggable",{attrs:{element:"span",options:t.getOptions(t.selected),move:t.onMove},on:{start:function(e){t.isDragging=!0},end:function(e){t.isDragging=!1}},model:{value:t.selected.tags,callback:function(e){t.$set(t.selected,"tags",e)},expression:"selected.tags"}},[l("transition-group",{staticClass:"mdl-list dragArea",attrs:{type:"transition",name:"flip-list",tag:"ul"}},t._l(t.selected.tags,function(e,a){return l("li",{key:e.tag,staticClass:"sdt-tag mdl-cell mdl-cell--12-col sdt-tag-item mdl-list__item mdl-card mdl-shadow--2dp"},[l("span",{staticClass:"mdl-list__item-primary-content"},[l("i",{staticClass:"material-icons sdt-tag-icon sdt-tag-icon-left",class:[e.fixed?"sdt-color-red":"sdt-color-gray"],on:{click:function(t){e.fixed=!e.fixed}}},[l("lock-icon")],1),t._v("\n                     "+t._s(e.tag)+"\n                  ")]),t._v(" "),l("i",{staticClass:"material-icons sdt-tag-icon sdt-tag-icon-right sdt-color-teal",on:{click:function(e){t.onClick(a,t.selected,t.available)}}},[l("arrow-right-icon")],1)])}))],1)],1)]),t._v(" "),l("div",{staticClass:"mdl-cell mdl-cell--3-col mdl-cell--6-col-tablet",attrs:{id:"sdt-available-tags"}},[l("div",{staticClass:"panel-body sdt-indigo-switch"},[l("label",{staticClass:"mdl-switch mdl-js-switch mdl-js-ripple-effect",attrs:{for:"switch-4"}},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.available.editable,expression:"available.editable"}],staticClass:"mdl-switch__input",attrs:{type:"checkbox",id:"switch-4"},domProps:{checked:Array.isArray(t.available.editable)?t._i(t.available.editable,null)>-1:t.available.editable},on:{change:function(e){var l=t.available.editable,a=e.target,i=!!a.checked;if(Array.isArray(l)){var s=null,c=t._i(l,s);a.checked?c<0&&(t.available.editable=l.concat([s])):c>-1&&(t.available.editable=l.slice(0,c).concat(l.slice(c+1)))}else t.$set(t.available,"editable",i)}}}),t._v(" "),l("span",{staticClass:"mdl-switch__label"},[t._v("Enable drag and drop")])]),t._v(" "),l("label",{staticClass:"mdl-switch mdl-js-switch mdl-js-ripple-effect",attrs:{for:"switch-5"}},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.available.droppable,expression:"available.droppable"}],staticClass:"mdl-switch__input",attrs:{type:"checkbox",id:"switch-5"},domProps:{checked:Array.isArray(t.available.droppable)?t._i(t.available.droppable,null)>-1:t.available.droppable},on:{change:function(e){var l=t.available.droppable,a=e.target,i=!!a.checked;if(Array.isArray(l)){var s=null,c=t._i(l,s);a.checked?c<0&&(t.available.droppable=l.concat([s])):c>-1&&(t.available.droppable=l.slice(0,c).concat(l.slice(c+1)))}else t.$set(t.available,"droppable",i)}}}),t._v(" "),l("span",{staticClass:"mdl-switch__label"},[t._v("Enable dropping")])]),t._v(" "),l("label",{staticClass:"mdl-switch mdl-js-switch mdl-js-ripple-effect",attrs:{for:"switch-6"}},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.available.cloneable,expression:"available.cloneable"}],staticClass:"mdl-switch__input",attrs:{type:"checkbox",id:"switch-6"},domProps:{checked:Array.isArray(t.available.cloneable)?t._i(t.available.cloneable,null)>-1:t.available.cloneable},on:{change:function(e){var l=t.available.cloneable,a=e.target,i=!!a.checked;if(Array.isArray(l)){var s=null,c=t._i(l,s);a.checked?c<0&&(t.available.cloneable=l.concat([s])):c>-1&&(t.available.cloneable=l.slice(0,c).concat(l.slice(c+1)))}else t.$set(t.available,"cloneable",i)}}}),t._v(" "),l("span",{staticClass:"mdl-switch__label"},[t._v("Enable cloning")])])]),t._v(" "),l("button",{staticClass:"sdt-sortable-btn sdt-sort-button mdl-button mdl-button--fab mdl-button--mini-fab mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--indigo-100",on:{click:function(e){t.orderList(t.available.tags)}}},[l("i",{staticClass:"material-icons sdt-color-indigo"},[l("sort-alphabetical-icon")],1)]),t._v(" "),l("div",{staticClass:"mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp mdl-color--indigo-500"},[l("draggable",{attrs:{element:"span",options:t.getOptions(t.available),move:t.onMove},on:{start:function(e){t.isDragging=!0},end:function(e){t.isDragging=!1}},model:{value:t.available.tags,callback:function(e){t.$set(t.available,"tags",e)},expression:"available.tags"}},[l("transition-group",{staticClass:"mdl-list dragArea",attrs:{type:"transition",name:"flip-list",tag:"ul"}},t._l(t.available.tags,function(e,a){return l("li",{key:e.tag,staticClass:"sdt-tag mdl-cell mdl-cell--12-col sdt-tag-item mdl-list__item mdl-card mdl-shadow--2dp"},[l("span",{staticClass:"mdl-list__item-primary-content"},[l("i",{staticClass:"sdt-tag-icon sdt-tag-icon-left material-icons sdt-color-indigo sdt-tag-icon",on:{click:function(e){t.onClick(a,t.available,t.selected)}}},[l("arrow-left-icon")],1),t._v("\n                     "+t._s(e.tag)+"\n                  ")]),t._v(" "),l("i",{staticClass:"material-icons sdt-tag-icon sdt-tag-icon-right",class:[e.fixed?"sdt-color-red":"sdt-color-gray"],on:{click:function(t){e.fixed=!e.fixed}}},[l("lock-icon")],1)])}))],1)],1)]),t._v(" "),l("div",{staticClass:"sdt-json-section mdl-cell mdl-cell--3-col mdl-cell--6-col-tablet mdl-card sdt-color-teal mdl-color--teal-50"},[l("pre",{staticClass:"sdt-json-pre"},[t._v(t._s(t.selected.tags))])]),t._v(" "),l("div",{staticClass:"sdt-json-section mdl-cell mdl-cell--3-col mdl-cell--6-col-tablet mdl-card mdl-card sdt-color-indigo mdl-color--indigo-50"},[l("pre",{staticClass:"sdt-json-pre"},[t._v(t._s(t.available.tags))])]),t._v(" "),t._m(2,!1,!1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("a",{attrs:{href:"https://github.com/Josantonius/vue-draggable-tags.git"}},[l("img",{staticClass:"forkme",attrs:{src:"https://raw.githubusercontent.com/Josantonius/josantonius.github.io/main/.static/images/fork-me-on-github.png",alt:"Fork me on GitHub"}})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mdl-cell mdl-cell--12-col"},[l("div",{staticClass:"sdt-header panel-heading"},[l("h2",{staticClass:"panel-title mdl-cell mdl-cell--12-col"},[t._v("\n            DRAG, DROP & SORT TAGS\n         ")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mdl-cell mdl-cell--12-col"},[l("footer",{staticClass:"sdt-footer"},[l("p",{staticClass:"panel-title mdl-cell mdl-cell--12-col"},[t._v("Created with "),l("a",{staticClass:"mdl-color-text--teal-700",attrs:{href:"https://getmdl.io/"}},[t._v("MDL")]),t._v(", "),l("a",{staticClass:"mdl-color-text--teal-700",attrs:{href:"https://vuejs.org/"}},[t._v("Vue.js")]),t._v(" and "),l("a",{staticClass:"mdl-color-text--teal-700",attrs:{href:"https://github.com/SortableJS/Vue.Draggable"}},[t._v("Vue.Draggable")]),t._v("."),l("br"),t._v("© 2017 "),l("a",{staticClass:"mdl-color-text--teal-700",attrs:{href:"https://github.com/Josantonius"}},[t._v("Josantonius")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"material-design-icon",attrs:{id:"lock-icon",role:"img","aria-labelledby":"lock-icon-title"}},[l("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24"}},[l("title",{attrs:{id:"lock-icon-title"}},[t._v(t._s(t.iconTitle))]),t._v(" "),l("path",{attrs:{d:"M12,17C13.1,17 14,16.1 14,15C14,13.89 13.1,13 12,13C10.9,13 10,13.9 10,15C10,16.1 10.9,17 12,17M18,8C19.1,8 20,8.9 20,10V20C20,21.1 19.1,22 18,22H6C4.9,22 4,21.1 4,20V10C4,8.89 4.9,8 6,8H7V6C7,3.24 9.24,1 12,1C14.76,1 17,3.24 17,6V8H18M12,3C10.34,3 9,4.34 9,6V8H15V6C15,4.34 13.66,3 12,3Z"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"app"}},[l("vue-draggable-tags")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"material-design-icon",attrs:{id:"sort-alphabetical-icon",role:"img","aria-labelledby":"sort-alphabetical-icon-title"}},[l("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24"}},[l("title",{attrs:{id:"sort-alphabetical-icon-title"}},[t._v(t._s(t.iconTitle))]),t._v(" "),l("path",{attrs:{d:"M9.25,5L12.5,1.75L15.75,5H9.25M15.75,19L12.5,22.25L9.25,19H15.75M8.89,14.3H6L5.28,17H2.91L6,7H9L12.13,17H9.67L8.89,14.3M6.33,12.68H8.56L7.93,10.56L7.67,9.59L7.42,8.63H7.39L7.17,9.6L6.93,10.58L6.33,12.68M13.05,17V15.74L17.8,8.97V8.91H13.5V7H20.73V8.34L16.09,15V15.08H20.8V17H13.05Z"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"material-design-icon",attrs:{id:"arrow-right-icon",role:"img","aria-labelledby":"arrow-right-icon-title"}},[l("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24"}},[l("title",{attrs:{id:"arrow-right-icon-title"}},[t._v(t._s(t.iconTitle))]),t._v(" "),l("path",{attrs:{d:"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"material-design-icon",attrs:{id:"arrow-left-icon",role:"img","aria-labelledby":"arrow-left-icon-title"}},[l("svg",{staticClass:"material-design-icon__svg",attrs:{width:"24",height:"24",viewBox:"0 0 24 24"}},[l("title",{attrs:{id:"arrow-left-icon-title"}},[t._v(t._s(t.iconTitle))]),t._v(" "),l("path",{attrs:{d:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}})])])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.f903ada3a70728fb4d47.js.map