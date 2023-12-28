import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarpPageRoutingModule } from './warp-routing.module';

import { WarpPage } from './warp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WarpPageRoutingModule
  ],
  declarations: [WarpPage]
})
export class WarpPageModule {}
