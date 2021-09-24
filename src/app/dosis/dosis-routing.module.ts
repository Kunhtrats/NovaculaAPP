import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DosisPage } from './dosis.page';

const routes: Routes = [
  {
    path: '',
    component: DosisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DosisPageRoutingModule {}
