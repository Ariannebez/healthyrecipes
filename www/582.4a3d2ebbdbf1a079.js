"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[582],{582:(L,g,a)=>{a.r(g),a.d(g,{Tab3PageModule:()=>v});var n=a(6728),u=a(6814),r=a(95),h=a(3554),d=a(6958),e=a(6242),m=a(1373);function T(t,o){if(1&t){const s=e.EpF();e.TgZ(0,"ion-item"),e._uU(1),e.TgZ(2,"ion-button",11),e.NdJ("click",function(){const c=e.CHM(s).index,p=e.oxw();return e.KtG(p.removeItem(c))}),e._UZ(3,"ion-icon",12),e.qZA()()}if(2&t){const s=o.$implicit;e.xp6(1),e.hij(" ",s," ")}}const f=[{path:"",component:(()=>{var t;class o{constructor(i){this.shoppingListService=i,this.shoppingList=[],this.newItem=""}ngOnInit(){this.loadShoppingList(),console.log(this.shoppingList)}loadShoppingList(){this.shoppingList=this.shoppingListService.getShoppingList()}addNewItem(){this.newItem&&(this.shoppingListService.addToShoppingList(this.newItem),this.newItem="",this.loadShoppingList())}removeItem(i){this.shoppingListService.removeFromShoppingList(i),this.loadShoppingList()}clearList(){this.shoppingListService.clearShoppingList(),this.shoppingList=[]}}return(t=o).\u0275fac=function(i){return new(i||t)(e.Y36(m._))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tab3"]],decls:18,vars:4,consts:[[3,"translucent"],["fill","clear","slot","end",3,"click"],["name","trash","color","tertiary"],[3,"fullscreen"],["collapse","condense"],["size","large"],[4,"ngFor","ngForOf"],["placeholder","Add new item",3,"ngModel","ngModelChange"],["vertical","bottom","horizontal","center","slot","fixed"],["color","secondary",3,"click"],["name","add"],["slot","end",3,"click"],["name","remove-circle-outline"]],template:function(i,l){1&i&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3," Shopping List page "),e.qZA(),e.TgZ(4,"ion-button",1),e.NdJ("click",function(){return l.clearList()}),e._UZ(5,"ion-icon",2),e.qZA()()(),e.TgZ(6,"ion-content",3)(7,"ion-header",4)(8,"ion-toolbar")(9,"ion-title",5),e._uU(10,"Shopping List page"),e.qZA()()(),e.TgZ(11,"ion-list"),e.YNc(12,T,4,1,"ion-item",6),e.qZA(),e.TgZ(13,"ion-item")(14,"ion-input",7),e.NdJ("ngModelChange",function(p){return l.newItem=p}),e.qZA()(),e.TgZ(15,"ion-fab",8)(16,"ion-fab-button",9),e.NdJ("click",function(){return l.addNewItem()}),e._UZ(17,"ion-icon",10),e.qZA()()()),2&i&&(e.Q6J("translucent",!0),e.xp6(6),e.Q6J("fullscreen",!0),e.xp6(6),e.Q6J("ngForOf",l.shoppingList),e.xp6(2),e.Q6J("ngModel",l.newItem))},dependencies:[n.YG,n.W2,n.IJ,n.W4,n.Gu,n.gu,n.pK,n.Ie,n.q_,n.wd,n.sr,n.j9,u.sg,r.JJ,r.On],styles:["ion-item[_ngcontent-%COMP%]{color:#022539}"]}),o})()}];let b=(()=>{var t;class o{}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild(f),d.Bz]}),o})(),v=(()=>{var t;class o{}return(t=o).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[n.Pc,u.ez,r.u5,h.e,b]}),o})()}}]);