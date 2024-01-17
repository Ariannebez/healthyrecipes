import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChickenPage } from './chicken.page';

const routes: Routes = [
  {
    path: '',
    component: ChickenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChickenPageRoutingModule {}
