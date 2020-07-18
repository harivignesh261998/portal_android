import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolvePage } from './solve.page';

const routes: Routes = [
  {
    path: '',
    component: SolvePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolvePageRoutingModule {}
