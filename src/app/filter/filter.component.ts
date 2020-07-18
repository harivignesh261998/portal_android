import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular'; 
import * as _ from 'lodash';



@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})

export class FilterComponent implements OnInit {
  status:any;
topic:any;
difficulty:any;
filterdata
fil
filters:any={}
count=0;
fill_1=[];
  constructor(public modalController: ModalController,private navParams:NavParams) { 
  //  console.log(this.navParams.data)
    this.fil=this.navParams.data;  
  //  console.log(this.fil)
   this.applyFilters();
  }

  filterExact(property:string,rule:any){
    console.log(property,rule.detail.value);
    this.filters[property]=val=>val==rule.detail.value
    this.applyFilters();
  }
  private applyFilters(){
    this.filterdata=_.filter(this.fil,_.conforms(this.filters));
    console.log(this.filterdata)
  }

  removeFilter(property:string){
    delete this.filters[property]
    this[property]=null;
    this.applyFilters();
  
  }
  dismiss() {
   
    this.modalController.dismiss({
      're':this.filterdata,
      
    });
  }
  
 
  ngOnInit() {}

 
}
