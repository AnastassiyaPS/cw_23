"use strict";(self.webpackChunkcw_23=self.webpackChunkcw_23||[]).push([[905],{905:(E,h,p)=>{p.r(h),p.d(h,{OrderModule:()=>U});var v=p(6814),g=p(594),o=p(95),u=p(9468),Z=p(7942);function _(e,c){1&e&&(u.TgZ(0,"div",27),u._uU(1," \u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043c\u044f, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b. "),u.qZA())}function A(e,c){1&e&&(u.TgZ(0,"div",27),u._uU(1," \u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b. "),u.qZA())}function q(e,c){1&e&&(u.TgZ(0,"div",27),u._uU(1," \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430. "),u.qZA())}function C(e,c){1&e&&(u.TgZ(0,"div",27),u._uU(1," \u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 11 \u0446\u0438\u0444\u0440. "),u.qZA())}function y(e,c){1&e&&(u.TgZ(0,"div",27),u._uU(1," \u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0443. "),u.qZA())}function b(e,c){1&e&&(u.TgZ(0,"div",27),u._uU(1," \u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043d\u0434\u0435\u043a\u0441. "),u.qZA())}function T(e,c){1&e&&(u.TgZ(0,"div",27),u._uU(1," \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 (\u0431\u0443\u043a\u0432\u044b, \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0434\u0435\u0444\u0438\u0441\u044b \u0438 \u0441\u043b\u0435\u0448\u0438). "),u.qZA())}const B=[{path:"",component:(()=>{class e{constructor(l,d,r){this.activatedRoute=l,this.productService=d,this.fb=r,this.subscription=null,this.subscriptionOrder=null,this.orderForm=this.fb.group({name:["",[o.kI.required,o.kI.pattern("[a-z\u0430-\u044fA-Z\u0410-\u042f]*")]],last_name:["",[o.kI.required,o.kI.pattern("[a-zA-Z]*")]],phone:["",[o.kI.required,o.kI.pattern(/^[0-9+]*$/),o.kI.maxLength(12)]],country:["",[o.kI.required]],zip:["",[o.kI.required]],product:["",[o.kI.required]],address:["",[o.kI.required,o.kI.pattern(/^[a-zA-Z0-9\s\/\-]*$/)]],comment:[""]})}ngOnInit(){this.subscription=this.activatedRoute.queryParams.subscribe(l=>{l.product&&(this.orderForm.patchValue({product:l.product}),console.log("Product value:",this.orderForm.get("product")?.value))})}ngOnDestroy(){this.subscription?.unsubscribe(),this.subscriptionOrder?.unsubscribe()}createOrder(){this.orderForm.valid?this.subscriptionOrder=this.productService.createOrder({name:this.orderForm.get("name")?.value,last_name:this.orderForm.get("last_name")?.value,phone:this.orderForm.get("phone")?.value,country:this.orderForm.get("country")?.value,zip:this.orderForm.get("zip")?.value,product:this.orderForm.get("product")?.value,address:this.orderForm.get("address")?.value,comment:this.orderForm.get("comment")?.value}).subscribe(l=>{l.success&&!l.message?($("#form-container").hide(),$("#thanks-message").show(),this.orderForm.reset(),this.orderForm.get("product")?.setValue("")):$("#error-message").show()}):console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")}static#u=this.\u0275fac=function(d){return new(d||e)(u.Y36(g.gz),u.Y36(Z.M),u.Y36(o.qu))};static#r=this.\u0275cmp=u.Xpm({type:e,selectors:[["app-order"]],decls:58,vars:9,consts:[["id","form-container",1,"order-form"],[1,"row","my-5"],[1,"col"],[1,"text-center"],[3,"formGroup","ngSubmit"],[1,"form"],[1,"row","g-3"],[1,"col-sm-4"],["for","name",1,"form-label"],["type","text","id","name","formControlName","name","placeholder","","value","","required","",1,"form-control"],["class","invalid-feedback",4,"ngIf"],["for","last_name",1,"form-label"],["type","text","id","last_name","formControlName","last_name","placeholder","","value","","required","",1,"form-control"],[1,"form-label"],["type","text","formControlName","phone","id","phone-input","placeholder","","required","",1,"form-control"],[1,"w-100"],[1,"col-md-6"],["type","text","formControlName","country","required","",1,"form-control"],["type","text","formControlName","zip","id","index","required","",1,"form-control"],[1,"col-md-12"],["type","text","formControlName","address","required","",1,"form-control"],["type","text","formControlName","product","readonly","","required","",1,"form-control"],["type","text","formControlName","comment",1,"form-control"],[1,"btn-group","col-3"],["type","submit",1,"btn","btn-primary","hvr-grow-shadow",3,"disabled"],["id","error-message",1,"row","my-5"],["id","thanks-message",1,"row","my-5"],[1,"invalid-feedback"]],template:function(d,r){if(1&d&&(u.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),u._uU(4,"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437"),u.qZA()()(),u.TgZ(5,"form",4),u.NdJ("ngSubmit",function(){return r.createOrder()}),u.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"label",8),u._uU(10,"\u0418\u043c\u044f"),u.qZA(),u._UZ(11,"input",9),u.YNc(12,_,2,0,"div",10),u.qZA(),u.TgZ(13,"div",7)(14,"label",11),u._uU(15,"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"),u.qZA(),u._UZ(16,"input",12),u.YNc(17,A,2,0,"div",10),u.qZA(),u.TgZ(18,"div",7)(19,"label",13),u._uU(20,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),u.qZA(),u._UZ(21,"input",14),u.TgZ(22,"div",15),u.YNc(23,q,2,0,"div",10),u.YNc(24,C,2,0,"div",10),u.qZA()(),u.TgZ(25,"div",16)(26,"label",13),u._uU(27,"\u0421\u0442\u0440\u0430\u043d\u0430"),u.qZA(),u._UZ(28,"input",17),u.YNc(29,y,2,0,"div",10),u.qZA(),u.TgZ(30,"div",16)(31,"label",13),u._uU(32,"\u0418\u043d\u0434\u0435\u043a\u0441"),u.qZA(),u._UZ(33,"input",18),u.YNc(34,b,2,0,"div",10),u.qZA(),u.TgZ(35,"div",19)(36,"label",13),u._uU(37,"\u0410\u0434\u0440\u0435\u0441"),u.qZA(),u._UZ(38,"input",20),u.YNc(39,T,2,0,"div",10),u.qZA(),u.TgZ(40,"div",19)(41,"label",13),u._uU(42,"\u0422\u043e\u0432\u0430\u0440"),u.qZA(),u._UZ(43,"input",21),u.qZA(),u.TgZ(44,"div",19)(45,"label",13),u._uU(46,"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043a \u0437\u0430\u043a\u0430\u0437\u0443"),u.qZA(),u._UZ(47,"input",22),u.qZA(),u.TgZ(48,"div",23)(49,"button",24),u._uU(50,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c "),u.qZA()(),u.TgZ(51,"div",25)(52,"h2",3),u._uU(53,"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."),u.qZA()()()()()(),u.TgZ(54,"div",26)(55,"div",2)(56,"h2",3),u._uU(57,"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0437\u0430\u043a\u0430\u0437!"),u.qZA()()()),2&d){let i,s,t,f,m,a,n;u.xp6(5),u.Q6J("formGroup",r.orderForm),u.xp6(7),u.Q6J("ngIf",(null==(i=r.orderForm.get("name"))?null:i.invalid)&&(null==(i=r.orderForm.get("name"))?null:i.touched)||(null==(i=r.orderForm.get("name"))?null:i.dirty)&&(null==(i=r.orderForm.get("name"))||null==i.errors?null:i.errors.required)),u.xp6(5),u.Q6J("ngIf",(null==(s=r.orderForm.get("last_name"))?null:s.invalid)&&(null==(s=r.orderForm.get("last_name"))?null:s.touched)||(null==(s=r.orderForm.get("last_name"))?null:s.dirty)&&(null==(s=r.orderForm.get("last_name"))||null==s.errors?null:s.errors.required)),u.xp6(6),u.Q6J("ngIf",(null==(t=r.orderForm.get("phone"))?null:t.invalid)&&(null==(t=r.orderForm.get("phone"))?null:t.touched)||(null==(t=r.orderForm.get("phone"))?null:t.dirty)&&(null==(t=r.orderForm.get("phone"))||null==t.errors?null:t.errors.required)&&(null==(t=r.orderForm.get("phone"))||null==t.errors?null:t.errors.pattern)),u.xp6(1),u.Q6J("ngIf",null==(f=r.orderForm.get("phone"))||null==f.errors?null:f.errors.maxlength),u.xp6(5),u.Q6J("ngIf",(null==(m=r.orderForm.get("country"))?null:m.invalid)&&(null==(m=r.orderForm.get("country"))?null:m.touched)||(null==(m=r.orderForm.get("country"))?null:m.dirty)&&(null==(m=r.orderForm.get("country"))||null==m.errors?null:m.errors.required)),u.xp6(5),u.Q6J("ngIf",(null==(a=r.orderForm.get("zip"))?null:a.invalid)&&(null==(a=r.orderForm.get("zip"))?null:a.touched)||(null==(a=r.orderForm.get("zip"))?null:a.dirty)&&(null==(a=r.orderForm.get("zip"))||null==a.errors?null:a.errors.required)),u.xp6(5),u.Q6J("ngIf",(null==(n=r.orderForm.get("address"))?null:n.invalid)&&(null==(n=r.orderForm.get("address"))?null:n.touched)||(null==(n=r.orderForm.get("address"))?null:n.dirty)&&(null==(n=r.orderForm.get("address"))||null==n.errors?null:n.errors.required)&&(null==(n=r.orderForm.get("address"))||null==n.errors?null:n.errors.pattern)),u.xp6(10),u.Q6J("disabled",r.orderForm.invalid)}},dependencies:[v.O5,o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.sg,o.u],styles:[".form[_ngcontent-%COMP%]{max-width:636px;margin:0 auto}#thanks-message[_ngcontent-%COMP%]{display:none}#error-message[_ngcontent-%COMP%]{display:none;color:#9b181880}.footer[_ngcontent-%COMP%]{margin-top:67px}.navbar-brand[_ngcontent-%COMP%]{font-size:16px;color:#0009}"]})}return e})()}];let F=(()=>{class e{static#u=this.\u0275fac=function(d){return new(d||e)};static#r=this.\u0275mod=u.oAB({type:e});static#e=this.\u0275inj=u.cJS({imports:[g.Bz.forChild(B),g.Bz]})}return e})();var O=p(6208);let U=(()=>{class e{static#u=this.\u0275fac=function(d){return new(d||e)};static#r=this.\u0275mod=u.oAB({type:e});static#e=this.\u0275inj=u.cJS({imports:[v.ez,O.m,F,o.UX,F]})}return e})()}}]);