"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6849],{6849:(f,u,c)=>{c.r(u),c.d(u,{Tab1PageModule:()=>m});var o=c(6728),p=c(6814),g=c(95),h=c(3554),l=c(6958),e=c(6242),T=c(4900);function _(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"ion-col",5)(1,"ion-card",6),e.NdJ("click",function(){const s=e.CHM(n).$implicit,d=e.oxw();return e.KtG(d.openRecipeDetails(s))}),e._UZ(2,"img",13),e.TgZ(3,"ion-card-header")(4,"ion-card-title"),e._uU(5),e.qZA(),e.TgZ(6,"ion-card-subtitle"),e._uU(7),e.qZA()(),e.TgZ(8,"div",14)(9,"ion-button",15),e.NdJ("click",function(){const s=e.CHM(n).index,d=e.oxw();return e.KtG(d.deleteRecipe(s))}),e._uU(10,"Delete"),e.qZA()()()()}if(2&t){const n=a.$implicit;e.xp6(2),e.Q6J("src",n.image,e.LSH),e.xp6(3),e.Oqu(n.name),e.xp6(2),e.hij("",n.calories," CAL")}}const Z=[{path:"",component:(()=>{var t;class a{constructor(i,r){this.router=i,this.sharedDataService=r,this.recipes=[]}ngOnInit(){this.recipes=this.sharedDataService.getRecipes(),this.dataSubscription=this.sharedDataService.onDataAdded.subscribe(()=>{this.recipes=this.sharedDataService.getRecipes()})}ngOnDestroy(){this.dataSubscription&&this.dataSubscription.unsubscribe()}deleteRecipe(i){this.sharedDataService.deleteRecipe(i)}openWarpPage(){this.router.navigate(["/warp"])}openBurgerPage(){this.router.navigate(["/turkey-burger"])}openPototoes(){this.router.navigate(["/potatoes"])}openPork(){this.router.navigate(["/pork"])}openChicken(){this.router.navigate(["/chicken"])}openRecipeDetails(i){this.sharedDataService.setCurrentRecipe(i),this.router.navigate(["/recipe-details"])}}return(t=a).\u0275fac=function(i){return new(i||t)(e.Y36(l.F0),e.Y36(T.g))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tab1"]],decls:63,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[1,"ion-padding"],["sizeMd","6","size","12"],[3,"click"],["alt","","src","https://sailorbailey.com/wp-content/uploads/2023/04/Cajun-Chicken-Wrap.jpg"],["alt","Silhouette of mountains","src","https://thebigmansworld.com/wp-content/uploads/2022/12/air-fryer-turkey-burgers-recipe.jpg"],["src","https://hungryhealthyhappy.com/wp-content/uploads/2020/05/Stuffed-Baked-Potato-featuredb.jpg"],["alt","","src","https://paleoleap.com/wp-content/uploads/2023/03/Pork-Stuffed-Bell-Peppers.jpg"],["alt","","src","https://peaceloveandlowcarb.com/wp-content/uploads/2022/08/Keto-Chicken-Stroganoff-Peace-Love-and-Low-Carb.jpg"],["sizeMd","6","size","12",4,"ngFor","ngForOf"],[3,"src"],[1,"btn-center"],["color","secondary",3,"click"]],template:function(i,r){1&i&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3," Recipes "),e.qZA()()(),e.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),e._uU(8,"Recipes"),e.qZA()()(),e.TgZ(9,"div",4),e._uU(10,"Top Rated Recipes"),e.qZA(),e.TgZ(11,"ion-grid")(12,"ion-row")(13,"ion-col",5)(14,"ion-card",6),e.NdJ("click",function(){return r.openWarpPage()}),e._UZ(15,"img",7),e.TgZ(16,"ion-card-header")(17,"ion-card-title"),e._uU(18,"Bufala Chicken warp"),e.qZA(),e.TgZ(19,"ion-card-subtitle"),e._uU(20,"298 CAL"),e.qZA()()()(),e.TgZ(21,"ion-col",5)(22,"ion-card",6),e.NdJ("click",function(){return r.openBurgerPage()}),e._UZ(23,"img",8),e.TgZ(24,"ion-card-header")(25,"ion-card-title"),e._uU(26,"Turkey Burgers"),e.qZA(),e.TgZ(27,"ion-card-subtitle"),e._uU(28,"341 CAL"),e.qZA()()()()(),e.TgZ(29,"div",4),e._uU(30,"Low Calories Recipes"),e.qZA(),e.TgZ(31,"ion-row")(32,"ion-col",5)(33,"ion-card",6),e.NdJ("click",function(){return r.openPototoes()}),e._UZ(34,"img",9),e.TgZ(35,"ion-card-header")(36,"ion-card-title"),e._uU(37,"Soy-baked potatoes"),e.qZA(),e.TgZ(38,"ion-card-subtitle"),e._uU(39,"200 CAL"),e.qZA()()()(),e.TgZ(40,"ion-col",5)(41,"ion-card",6),e.NdJ("click",function(){return r.openPork()}),e._UZ(42,"img",10),e.TgZ(43,"ion-card-header")(44,"ion-card-title"),e._uU(45,"Pork & bulgur-stuffed peppers"),e.qZA(),e.TgZ(46,"ion-card-subtitle"),e._uU(47,"Card Subtitle"),e.qZA()()()()(),e.TgZ(48,"div",4),e._uU(49,"Rcih In Protein Recipes"),e.qZA(),e.TgZ(50,"ion-row")(51,"ion-col",5)(52,"ion-card",6),e.NdJ("click",function(){return r.openChicken()}),e._UZ(53,"img",11),e.TgZ(54,"ion-card-header")(55,"ion-card-title"),e._uU(56,"Chicken stroganof"),e.qZA(),e.TgZ(57,"ion-card-subtitle"),e._uU(58,"425 CAL, 43G PROTEIN"),e.qZA()()()()()(),e.TgZ(59,"div",4),e._uU(60,"Your Recipes"),e.qZA(),e.TgZ(61,"ion-row"),e.YNc(62,_,11,3,"ion-col",12),e.qZA()()),2&i&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(58),e.Q6J("ngForOf",r.recipes))},dependencies:[o.YG,o.PM,o.Zi,o.tO,o.Dq,o.wI,o.W2,o.jY,o.Gu,o.Nd,o.wd,o.sr,p.sg],styles:[".btn-center[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;justify-content:center;align-items:center;display:flex}"]}),a})()}];let b=(()=>{var t;class a{}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(Z),l.Bz]}),a})(),m=(()=>{var t;class a{}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.Pc,p.ez,g.u5,h.e,b]}),a})()}}]);