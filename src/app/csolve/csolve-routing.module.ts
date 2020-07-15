import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsolvePage } from './csolve.page';

const routes: Routes = [
  {
    path: '',
    component: CsolvePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsolvePageRoutingModule {}
