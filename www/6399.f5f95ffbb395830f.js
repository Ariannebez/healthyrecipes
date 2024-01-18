"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6399],{6399:(M,d,a)=>{a.r(d),a.d(d,{SignupPageModule:()=>h});var m=a(6814),g=a(95),i=a(6728),p=a(6958),c=a(5861),n=a(6242);const f=[{path:"",component:(()=>{var o;class u{constructor(e,t){this.router=e,this.alertController=t}signup(){var e=this;return(0,c.Z)(function*(){e.name&&e.surname&&e.username&&e.password&&e.confirmPassword?e.password===e.confirmPassword?(console.log("Signup successful!"),yield e.presentAlert("Success","Signup successful!"),e.router.navigate(["/tabs"])):yield e.presentAlert("Error","Password and confirm password do not match."):yield e.presentAlert("Error","All fields are required.")})()}presentAlert(e,t){var s=this;return(0,c.Z)(function*(){yield(yield s.alertController.create({header:e,message:t,buttons:["OK"]})).present()})()}}return(o=u).\u0275fac=function(e){return new(e||o)(n.Y36(p.F0),n.Y36(i.Br))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-signup"]],decls:31,vars:7,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["position","floating"],["type","text",3,"ngModel","ngModelChange"],["type","password",3,"ngModel","ngModelChange"],["expand","block",3,"click"]],template:function(e,t){1&e&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),n._uU(3,"signup"),n.qZA()()(),n.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),n._uU(8,"signup"),n.qZA()()(),n.TgZ(9,"ion-item")(10,"ion-label",4),n._uU(11,"Name"),n.qZA(),n.TgZ(12,"ion-input",5),n.NdJ("ngModelChange",function(r){return t.name=r}),n.qZA()(),n.TgZ(13,"ion-item")(14,"ion-label",4),n._uU(15,"Surname"),n.qZA(),n.TgZ(16,"ion-input",5),n.NdJ("ngModelChange",function(r){return t.surname=r}),n.qZA()(),n.TgZ(17,"ion-item")(18,"ion-label",4),n._uU(19,"Username"),n.qZA(),n.TgZ(20,"ion-input",5),n.NdJ("ngModelChange",function(r){return t.username=r}),n.qZA()(),n.TgZ(21,"ion-item")(22,"ion-label",4),n._uU(23,"Password"),n.qZA(),n.TgZ(24,"ion-input",6),n.NdJ("ngModelChange",function(r){return t.password=r}),n.qZA()(),n.TgZ(25,"ion-item")(26,"ion-label",4),n._uU(27,"Confirm Password"),n.qZA(),n.TgZ(28,"ion-input",6),n.NdJ("ngModelChange",function(r){return t.confirmPassword=r}),n.qZA()(),n.TgZ(29,"ion-button",7),n.NdJ("click",function(){return t.signup()}),n._uU(30,"Sign Up"),n.qZA()()),2&e&&(n.Q6J("translucent",!0),n.xp6(4),n.Q6J("fullscreen",!0),n.xp6(8),n.Q6J("ngModel",t.name),n.xp6(4),n.Q6J("ngModel",t.surname),n.xp6(4),n.Q6J("ngModel",t.username),n.xp6(4),n.Q6J("ngModel",t.password),n.xp6(4),n.Q6J("ngModel",t.confirmPassword))},dependencies:[g.JJ,g.On,i.YG,i.W2,i.Gu,i.pK,i.Ie,i.Q$,i.wd,i.sr,i.j9]}),u})()}];let Z=(()=>{var o;class u{}return(o=u).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[p.Bz.forChild(f),p.Bz]}),u})(),h=(()=>{var o;class u{}return(o=u).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[m.ez,g.u5,i.Pc,Z]}),u})()}}]);