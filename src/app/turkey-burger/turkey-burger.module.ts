import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurkeyBurgerPageRoutingModule } from './turkey-burger-routing.module';

import { TurkeyBurgerPage } from './turkey-burger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurkeyBurgerPageRoutingModule
  ],
  declarations: [TurkeyBurgerPage]
})
export class TurkeyBurgerPageModule {}
