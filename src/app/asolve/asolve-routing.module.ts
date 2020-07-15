import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsolvePage } from './asolve.page';

const routes: Routes = [
  {
    path: '',
    component: AsolvePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsolvePageRoutingModule {}
