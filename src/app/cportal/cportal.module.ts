import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CportalPageRoutingModule } from './cportal-routing.module';

import { CportalPage } from './cportal.page';
import { NgxLoadingModule } from 'ngx-loading';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CportalPageRoutingModule,
    NgxLoadingModule.forRoot({})
  ],
  declarations: [CportalPage]
})
export class CportalPageModule {}
