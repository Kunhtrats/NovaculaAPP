import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DosisPageRoutingModule } from './dosis-routing.module';

import { DosisPage } from './dosis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DosisPageRoutingModule
  ],
  declarations: [DosisPage]
})
export class DosisPageModule {}
