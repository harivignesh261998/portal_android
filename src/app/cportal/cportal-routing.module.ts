import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CportalPage } from './cportal.page';

const routes: Routes = [
  {
    path: '',
    component: CportalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CportalPageRoutingModule {}
