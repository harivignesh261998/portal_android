import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsolvePageRoutingModule } from './asolve-routing.module';
import {MatRadioModule} from '@angular/material/radio';
import { AsolvePage } from './asolve.page';
import {MatButtonModule} from '@angular/material/button';
import { NgxLoadingModule } from 'ngx-loading';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsolvePageRoutingModule,
    MatRadioModule,
    MatButtonModule,
    NgxLoadingModule.forRoot({}),
  ],
  declarations: [AsolvePage]
})
export class AsolvePageModule {}
