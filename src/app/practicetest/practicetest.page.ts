import { Component, OnInit } from '@angular/core';
import { GlobalPracticeTest } from '../global.data';
import { AuthService } from '../auth.service';
import { ModalController } from '@ionic/angular';
import * as _ from 'lodash';
import { FilterComponent } from '../filter/filter.component';


@Component({
  selector: 'app-practicetest',
  templateUrl: './practicetest.page.html',
  styleUrls: ['./practicetest.page.scss'],
})
export class PracticetestPage implements OnInit {
practicetest:GlobalPracticeTest[];
practice
vra:string;

status:any;
topic:any;
difficulty:any;
filterdata:any;

solvedData
count2
check=[];
  constructor(private authService:AuthService,public modalController: ModalController) { }
  filters={}
  ngOnInit() {


    this.authService.getPractice().subscribe(res=>{
      this.practicetest=res;
      this.practice=this.practicetest['practiceQuestions'];
      console.log(this.practice);
      
    })

    this.authService.getIsSolved().subscribe(res=>{
      this.solvedData=res['practicedQuestions'];
      this.count2=this.solvedData.length;
      this.fun();
      
    })

   
 
  }
  

async presentModal() {
  const modal = await this.modalController.create({
    component: FilterComponent,
    componentProps:this.practice,
    cssClass: 'my-custom-class'
  });
  modal.onDidDismiss().then(data=>{
    
   
    this.practice=data['data']['re'];
    console.log(this.practice);
  })
  return await modal.present();
}


fun(){
  //  this.check=[]
    for(let i=0;i<this.practice.length;i++){
      for(let j=0;j<this.solvedData.length;j++){
        if(this.practice[i]._id===this.solvedData[j]){
          this.check[i]=true;
          this.practice[i].status='Solved';
        }
        else{
          this.check[i]=false;
        }

      }
      
    }
  }


}
