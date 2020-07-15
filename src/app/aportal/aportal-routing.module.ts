import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AportalPage } from './aportal.page';

const routes: Routes = [
  {
    path: '',
    component: AportalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AportalPageRoutingModule {}
