import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PotatoesPage } from './potatoes.page';

const routes: Routes = [
  {
    path: '',
    component: PotatoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PotatoesPageRoutingModule {}
