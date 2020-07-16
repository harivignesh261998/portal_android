import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultPageRoutingModule } from './result-routing.module';

import { ResultPage } from './result.page';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultPageRoutingModule,
    MatExpansionModule,
    NgCircleProgressModule.forRoot({
      
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      showSubtitle: false,
      animationDuration: 300,
      startFromZero: false
      
    }),
  ],
  declarations: [ResultPage]
})
export class ResultPageModule {}
