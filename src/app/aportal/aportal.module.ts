import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AportalPageRoutingModule } from './aportal-routing.module';

import { AportalPage } from './aportal.page';
import { NgxLoadingModule } from 'ngx-loading';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AportalPageRoutingModule,
    NgxLoadingModule.forRoot({})
  ],
  declarations: [AportalPage]
})
export class AportalPageModule {}
