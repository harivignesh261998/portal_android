import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolvePageRoutingModule } from './solve-routing.module';

import { SolvePage } from './solve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolvePageRoutingModule
  ],
  declarations: [SolvePage]
})
export class SolvePageModule {}
