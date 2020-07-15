import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular';
import { PracticetestPageRoutingModule } from './practicetest-routing.module';
import { PracticetestPage } from './practicetest.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracticetestPageRoutingModule
  ],
  declarations: [PracticetestPage]
})
export class PracticetestPageModule {}
