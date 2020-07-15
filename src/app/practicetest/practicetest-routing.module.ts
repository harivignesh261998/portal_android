import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticetestPage } from './practicetest.page';
import {HttpClientModule} from '@angular/common/http' 

const routes: Routes = [
  {
    path: '',
    component: PracticetestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule],
})
export class PracticetestPageRoutingModule {}
