import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CportalPageRoutingModule } from './cportal-routing.module';

import { CportalPage } from './cportal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CportalPageRoutingModule
  ],
  declarations: [CportalPage]
})
export class CportalPageModule {}
