import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurkeyBurgerPage } from './turkey-burger.page';

const routes: Routes = [
  {
    path: '',
    component: TurkeyBurgerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurkeyBurgerPageRoutingModule {}
