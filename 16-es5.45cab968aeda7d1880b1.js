(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{ayhW:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),i=function(){return function(){}}(),e=u("pMnS"),a=u("oBZk"),o=u("ZZ/e"),r=u("gIcY"),b=u("uc84"),s=function(){function l(l,n,u,t,i){this.materialService=l,this.route=n,this.navCtrl=u,this.toastCtrl=t,this.router=i}return l.prototype.ngOnInit=function(){var l=this;this.route.paramMap.subscribe((function(n){n.has("materialId")?l.materialService.getMaterial(n.get("materialId")).subscribe((function(n){l.loadedMaterial=n,l.form=new r.e({title:new r.c(l.loadedMaterial.name,{updateOn:"change",validators:[r.n.required]}),description:new r.c(l.loadedMaterial.description,{updateOn:"change",validators:[r.n.required,r.n.maxLength(50)]}),quantity:new r.c(l.loadedMaterial.quantity,{updateOn:"change",validators:[r.n.required,r.n.min(1)]}),price:new r.c(l.loadedMaterial.price,{updateOn:"change",validators:[r.n.required,r.n.min(1)]})})})):l.navCtrl.navigateBack("/materials")}))},l.prototype.editMaterial=function(){var l=this;this.materialService.updateMaterial(this.loadedMaterial.id,this.form.value.title,this.form.value.description,this.form.value.quantity,this.form.value.price).subscribe((function(){l.toastCtrl.create({animated:!0,duration:4e3,position:"top",showCloseButton:!0,message:"El elemento se edit\xf3 correctamente"}).then((function(n){n.present(),l.router.navigate(["/materials"])}))}))},l}(),d=u("ZYCi"),g=t.rb({encapsulation:0,styles:[[""]],data:{}});function c(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,17,"ion-header",[],null,null,null,a.L,a.l)),t.sb(1,49152,null,0,o.z,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,15,"ion-toolbar",[],null,null,null,a.Z,a.z)),t.sb(3,49152,null,0,o.Ab,[t.h,t.k,t.z],null,null),(l()(),t.tb(4,0,null,0,4,"ion-button",[["slot","start"]],null,null,null,a.C,a.c)),t.sb(5,49152,null,0,o.i,[t.h,t.k,t.z],null,null),(l()(),t.tb(6,0,null,0,2,"ion-back-button",[["defaultHref","/materials"],["text","Volver"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Fb(l,8).onClick(u)&&i),i}),a.B,a.b)),t.sb(7,49152,null,0,o.e,[t.h,t.k,t.z],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),t.sb(8,16384,null,0,o.f,[[2,o.gb],o.Fb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.tb(9,0,null,0,2,"ion-title",[],null,null,null,a.Y,a.y)),t.sb(10,49152,null,0,o.yb,[t.h,t.k,t.z],null,null),(l()(),t.Kb(11,0,["Editar ",""])),(l()(),t.tb(12,0,null,0,5,"ion-button",[["slot","end"]],null,null,null,a.C,a.c)),t.sb(13,49152,null,0,o.i,[t.h,t.k,t.z],null,null),(l()(),t.tb(14,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.editMaterial()&&t),t}),a.C,a.c)),t.sb(15,49152,null,0,o.i,[t.h,t.k,t.z],{disabled:[0,"disabled"]},null),(l()(),t.tb(16,0,null,0,1,"ion-icon",[["name","checkmark"],["slot","icon-only"]],null,null,null,a.M,a.m)),t.sb(17,49152,null,0,o.A,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.tb(18,0,null,null,72,"ion-content",[["class","ion-padding"]],null,null,null,a.J,a.j)),t.sb(19,49152,null,0,o.s,[t.h,t.k,t.z],null,null),(l()(),t.tb(20,0,null,0,70,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0;return"submit"===n&&(i=!1!==t.Fb(l,22).onSubmit(u)&&i),"reset"===n&&(i=!1!==t.Fb(l,22).onReset()&&i),i}),null,null)),t.sb(21,16384,null,0,r.r,[],null,null),t.sb(22,540672,null,0,r.f,[[8,null],[8,null]],{form:[0,"form"]},null),t.Hb(2048,null,r.a,null,[r.f]),t.sb(24,16384,null,0,r.k,[[4,r.a]],null,null),(l()(),t.tb(25,0,null,null,65,"ion-grid",[],null,null,null,a.K,a.k)),t.sb(26,49152,null,0,o.y,[t.h,t.k,t.z],null,null),(l()(),t.tb(27,0,null,0,15,"ion-row",[],null,null,null,a.V,a.v)),t.sb(28,49152,null,0,o.hb,[t.h,t.k,t.z],null,null),(l()(),t.tb(29,0,null,0,13,"ion-col",[],null,null,null,a.I,a.i)),t.sb(30,49152,null,0,o.r,[t.h,t.k,t.z],null,null),(l()(),t.tb(31,0,null,0,11,"ion-item",[],null,null,null,a.S,a.p)),t.sb(32,49152,null,0,o.F,[t.h,t.k,t.z],null,null),(l()(),t.tb(33,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.T,a.t)),t.sb(34,49152,null,0,o.L,[t.h,t.k,t.z],{position:[0,"position"]},null),(l()(),t.Kb(-1,0,["Editar titulo"])),(l()(),t.tb(36,0,null,0,6,"ion-input",[["formControlName","title"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==t.Fb(l,37)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==t.Fb(l,37)._handleInputEvent(u.target)&&i),i}),a.O,a.o)),t.sb(37,16384,null,0,o.Kb,[t.k],null,null),t.Hb(1024,null,r.h,(function(l){return[l]}),[o.Kb]),t.sb(39,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.h],[2,r.q]],{name:[0,"name"]},null),t.Hb(2048,null,r.i,null,[r.d]),t.sb(41,16384,null,0,r.j,[[4,r.i]],null,null),t.sb(42,49152,null,0,o.E,[t.h,t.k,t.z],{type:[0,"type"]},null),(l()(),t.tb(43,0,null,0,15,"ion-row",[],null,null,null,a.V,a.v)),t.sb(44,49152,null,0,o.hb,[t.h,t.k,t.z],null,null),(l()(),t.tb(45,0,null,0,13,"ion-col",[],null,null,null,a.I,a.i)),t.sb(46,49152,null,0,o.r,[t.h,t.k,t.z],null,null),(l()(),t.tb(47,0,null,0,11,"ion-item",[],null,null,null,a.S,a.p)),t.sb(48,49152,null,0,o.F,[t.h,t.k,t.z],null,null),(l()(),t.tb(49,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.T,a.t)),t.sb(50,49152,null,0,o.L,[t.h,t.k,t.z],{position:[0,"position"]},null),(l()(),t.Kb(-1,0,["Editar descripcion"])),(l()(),t.tb(52,0,null,0,6,"ion-textarea",[["formControlName","description"],["rows","2"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==t.Fb(l,53)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==t.Fb(l,53)._handleInputEvent(u.target)&&i),i}),a.W,a.w)),t.sb(53,16384,null,0,o.Kb,[t.k],null,null),t.Hb(1024,null,r.h,(function(l){return[l]}),[o.Kb]),t.sb(55,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.h],[2,r.q]],{name:[0,"name"]},null),t.Hb(2048,null,r.i,null,[r.d]),t.sb(57,16384,null,0,r.j,[[4,r.i]],null,null),t.sb(58,49152,null,0,o.wb,[t.h,t.k,t.z],{rows:[0,"rows"]},null),(l()(),t.tb(59,0,null,0,15,"ion-row",[],null,null,null,a.V,a.v)),t.sb(60,49152,null,0,o.hb,[t.h,t.k,t.z],null,null),(l()(),t.tb(61,0,null,0,13,"ion-col",[],null,null,null,a.I,a.i)),t.sb(62,49152,null,0,o.r,[t.h,t.k,t.z],null,null),(l()(),t.tb(63,0,null,0,11,"ion-item",[],null,null,null,a.S,a.p)),t.sb(64,49152,null,0,o.F,[t.h,t.k,t.z],null,null),(l()(),t.tb(65,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.T,a.t)),t.sb(66,49152,null,0,o.L,[t.h,t.k,t.z],{position:[0,"position"]},null),(l()(),t.Kb(-1,0,["Editar cantidad"])),(l()(),t.tb(68,0,null,0,6,"ion-input",[["formControlName","quantity"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==t.Fb(l,69)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==t.Fb(l,69)._handleIonChange(u.target)&&i),i}),a.O,a.o)),t.sb(69,16384,null,0,o.Gb,[t.k],null,null),t.Hb(1024,null,r.h,(function(l){return[l]}),[o.Gb]),t.sb(71,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.h],[2,r.q]],{name:[0,"name"]},null),t.Hb(2048,null,r.i,null,[r.d]),t.sb(73,16384,null,0,r.j,[[4,r.i]],null,null),t.sb(74,49152,null,0,o.E,[t.h,t.k,t.z],{type:[0,"type"]},null),(l()(),t.tb(75,0,null,0,15,"ion-row",[],null,null,null,a.V,a.v)),t.sb(76,49152,null,0,o.hb,[t.h,t.k,t.z],null,null),(l()(),t.tb(77,0,null,0,13,"ion-col",[],null,null,null,a.I,a.i)),t.sb(78,49152,null,0,o.r,[t.h,t.k,t.z],null,null),(l()(),t.tb(79,0,null,0,11,"ion-item",[],null,null,null,a.S,a.p)),t.sb(80,49152,null,0,o.F,[t.h,t.k,t.z],null,null),(l()(),t.tb(81,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.T,a.t)),t.sb(82,49152,null,0,o.L,[t.h,t.k,t.z],{position:[0,"position"]},null),(l()(),t.Kb(-1,0,["Editar precio"])),(l()(),t.tb(84,0,null,0,6,"ion-input",[["formControlName","price"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==t.Fb(l,85)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==t.Fb(l,85)._handleIonChange(u.target)&&i),i}),a.O,a.o)),t.sb(85,16384,null,0,o.Gb,[t.k],null,null),t.Hb(1024,null,r.h,(function(l){return[l]}),[o.Gb]),t.sb(87,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.h],[2,r.q]],{name:[0,"name"]},null),t.Hb(2048,null,r.i,null,[r.d]),t.sb(89,16384,null,0,r.j,[[4,r.i]],null,null),t.sb(90,49152,null,0,o.E,[t.h,t.k,t.z],{type:[0,"type"]},null)],(function(l,n){var u=n.component;l(n,7,0,"/materials","Volver"),l(n,8,0,"/materials"),l(n,15,0,!u.form.valid),l(n,17,0,"checkmark"),l(n,22,0,u.form),l(n,34,0,"floating"),l(n,39,0,"title"),l(n,42,0,"text"),l(n,50,0,"floating"),l(n,55,0,"description"),l(n,58,0,"2"),l(n,66,0,"floating"),l(n,71,0,"quantity"),l(n,74,0,"number"),l(n,82,0,"floating"),l(n,87,0,"price"),l(n,90,0,"number")}),(function(l,n){l(n,11,0,n.component.loadedMaterial.name),l(n,20,0,t.Fb(n,24).ngClassUntouched,t.Fb(n,24).ngClassTouched,t.Fb(n,24).ngClassPristine,t.Fb(n,24).ngClassDirty,t.Fb(n,24).ngClassValid,t.Fb(n,24).ngClassInvalid,t.Fb(n,24).ngClassPending),l(n,36,0,t.Fb(n,41).ngClassUntouched,t.Fb(n,41).ngClassTouched,t.Fb(n,41).ngClassPristine,t.Fb(n,41).ngClassDirty,t.Fb(n,41).ngClassValid,t.Fb(n,41).ngClassInvalid,t.Fb(n,41).ngClassPending),l(n,52,0,t.Fb(n,57).ngClassUntouched,t.Fb(n,57).ngClassTouched,t.Fb(n,57).ngClassPristine,t.Fb(n,57).ngClassDirty,t.Fb(n,57).ngClassValid,t.Fb(n,57).ngClassInvalid,t.Fb(n,57).ngClassPending),l(n,68,0,t.Fb(n,73).ngClassUntouched,t.Fb(n,73).ngClassTouched,t.Fb(n,73).ngClassPristine,t.Fb(n,73).ngClassDirty,t.Fb(n,73).ngClassValid,t.Fb(n,73).ngClassInvalid,t.Fb(n,73).ngClassPending),l(n,84,0,t.Fb(n,89).ngClassUntouched,t.Fb(n,89).ngClassTouched,t.Fb(n,89).ngClassPristine,t.Fb(n,89).ngClassDirty,t.Fb(n,89).ngClassValid,t.Fb(n,89).ngClassInvalid,t.Fb(n,89).ngClassPending)}))}function h(l){return t.Lb(0,[(l()(),t.tb(0,0,null,null,1,"app-material-edit",[],null,null,null,c,g)),t.sb(1,114688,null,0,s,[b.a,d.a,o.Fb,o.Lb,d.m],null,null)],(function(l,n){l(n,1,0)}),null)}var p=t.pb("app-material-edit",s,h,{},{},[]),m=u("Ip0R"),f=function(){return function(){}}();u.d(n,"MaterialEditPageModuleNgFactory",(function(){return C}));var C=t.qb(i,[],(function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[e.a,p]],[3,t.j],t.x]),t.Db(4608,m.j,m.i,[t.u,[2,m.p]]),t.Db(4608,r.b,r.b,[]),t.Db(4608,r.p,r.p,[]),t.Db(4608,o.a,o.a,[t.z,t.g]),t.Db(4608,o.Eb,o.Eb,[o.a,t.j,t.q]),t.Db(4608,o.Ib,o.Ib,[o.a,t.j,t.q]),t.Db(1073742336,m.b,m.b,[]),t.Db(1073742336,r.o,r.o,[]),t.Db(1073742336,r.m,r.m,[]),t.Db(1073742336,o.Cb,o.Cb,[]),t.Db(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),t.Db(1073742336,f,f,[]),t.Db(1073742336,i,i,[]),t.Db(1024,d.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);