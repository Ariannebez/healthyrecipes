"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2361],{2361:(C,d,i)=>{i.r(d),i.d(d,{LogInPageModule:()=>M});var f=i(6814),u=i(95),t=i(6728),l=i(6958),p=i(5861),n=i(6242);const m=[{path:"",component:(()=>{var o;class g{constructor(e,a){this.router=e,this.alertController=a}login(){var e=this;return(0,p.Z)(function*(){"arianne"===e.username&&"password"===e.password?(console.log("Login successful!"),e.router.navigate(["/tabs"])):(console.log("Login failed. Please check your credentials."),yield e.presentAlert("Login Failed","Incorrect username or password."))})()}presentAlert(e,a){var s=this;return(0,p.Z)(function*(){yield(yield s.alertController.create({header:e,message:a,buttons:["OK"]})).present()})()}}return(o=g).\u0275fac=function(e){return new(e||o)(n.Y36(l.F0),n.Y36(t.Br))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-log-in"]],decls:19,vars:2,consts:[[1,"ion-padding"],[1,"imgCon"],["src","assets/logo.png","alt","logo",1,"logo"],[1,"titleCon"],[1,"title"],["position","floating"],["type","text",3,"ngModel","ngModelChange"],["type","password",3,"ngModel","ngModelChange"],["expand","block",3,"click"],[1,"singUp"],["routerLink","/signup"]],template:function(e,a){1&e&&(n.TgZ(0,"ion-content",0)(1,"div",1),n._UZ(2,"ion-img",2),n.qZA(),n.TgZ(3,"div",3)(4,"ion-label",4),n._uU(5,"Log In"),n.qZA()(),n.TgZ(6,"ion-item")(7,"ion-label",5),n._uU(8,"Username"),n.qZA(),n.TgZ(9,"ion-input",6),n.NdJ("ngModelChange",function(c){return a.username=c}),n.qZA()(),n.TgZ(10,"ion-item")(11,"ion-label",5),n._uU(12,"Password"),n.qZA(),n.TgZ(13,"ion-input",7),n.NdJ("ngModelChange",function(c){return a.password=c}),n.qZA()(),n.TgZ(14,"ion-button",8),n.NdJ("click",function(){return a.login()}),n._uU(15,"Login"),n.qZA(),n.TgZ(16,"div",9)(17,"a",10),n._uU(18,"Don't have an account? Sign up here."),n.qZA()()()),2&e&&(n.xp6(9),n.Q6J("ngModel",a.username),n.xp6(4),n.Q6J("ngModel",a.password))},dependencies:[u.JJ,u.On,t.YG,t.W2,t.Xz,t.pK,t.Ie,t.Q$,t.j9,t.Fo,l.rH],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color: #fbf3f2}ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{border-radius:15px;margin-top:10px;margin-bottom:20px;color:#fbf3f2;--ion-background-color: #9d9fa6}ion-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .titleCon[_ngcontent-%COMP%]{text-align:center;color:#032539;font-size:40px}ion-content[_ngcontent-%COMP%]   .singUp[_ngcontent-%COMP%]{text-align:center;font-size:20px;margin-top:20px}"]}),g})()}];let P=(()=>{var o;class g{}return(o=g).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[l.Bz.forChild(m),l.Bz]}),g})(),M=(()=>{var o;class g{}return(o=g).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[f.ez,u.u5,t.Pc,P]}),g})()}}]);