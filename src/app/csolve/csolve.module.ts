import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsolvePageRoutingModule } from './csolve-routing.module';

import { CsolvePage } from './csolve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsolvePageRoutingModule
  ],
  declarations: [CsolvePage]
})
export class CsolvePageModule {}
