import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsolvePageRoutingModule } from './asolve-routing.module';

import { AsolvePage } from './asolve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsolvePageRoutingModule
  ],
  declarations: [AsolvePage]
})
export class AsolvePageModule {}
