import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-asolve',
  templateUrl: './asolve.page.html',
  styleUrls: ['./asolve.page.scss'],
})
export class AsolvePage implements OnInit {
title;
testId;
timeleft;
question;
no;
qno=[];
questions;
index=0;
counterr;
counter=0;
answers=[];
options=[];
fivemin;
hours;
minutes;
seconds;
favoriteSeason;
IsDisabled=true;
IsSubmit=false;
name;
  constructor(private authService:AuthService,public toastController: ToastController,private router:Router) { }

  ngOnInit() {
    let sdate=new Date();
     this.hours = sdate.getHours();
    this.minutes = sdate.getMinutes();
    this.seconds = sdate.getSeconds();

    this.authService.getDuration().subscribe(res=>{
      console.log(res);

      this.title=res['testName'];
      this.testId=res['_id']

      this.timeleft=res['duration']*60;
     
    })
    this.summa();
    this.neram();
  }

  summa(){
    this.authService.getAtestbyID().subscribe(res=>{
      this.question=this.shuffle(res['questions']);
      this.no=this.question.length;
      for(let i=0;i<this.question.length;i++){
        this.qno[i]=i+1;
      }
      this.questions=this.question[this.index];
      console.log(this.questions);
    })

  }

  shuffle(arr){
    let ctr=arr.length,temp,index;
    while(ctr> 0){
      index=Math.floor(Math.random()*ctr)
      ctr--;
      temp = arr[ctr];
        arr[ctr] = arr[index];
        arr[index] = temp;
    }
    return arr;

  }

  neram(){
    let intervalId = setInterval(() => {
      this.counterr= this.convertSeconds(this.timeleft - this.counter);
      this.counter++;
      if(this.counter==this.timeleft){
  
      
        clearInterval(intervalId);
      
        if (confirm('Time Up ! Click ok to submit')) {
          this.checkanswer();
        } 
        
            
       
  
      } 
      if(this.counter==this.fivemin){
        
        this.presentToast();
      }
      
  }, 1000);
  }

  convertSeconds(s){
    let min=Math.floor(s/60);
    let sec=s%60;
    return min.toLocaleString('en-us',{minimumIntegerDigits:2}) +':'+sec.toLocaleString('en-us',{minimumIntegerDigits:2});
  }


  checkanswer(){
  
    let count=0,attempt=true;
    for(let a of this.answers){
      if (a==1){
  
        count++;
      }
  
    }
    console.log('count->',count);
  
    
  let endate=new Date();
  let hours = endate.getHours();
  
  
  let minutes = endate.getMinutes();
  
  
  let seconds = endate.getSeconds();
  
  
     
   //this.authService.updateStudent(this.testId,count,this.hours + ":" + this.minutes+":"+this.seconds,hours + ":" + minutes+":"+seconds);
   this.router.navigate(['/testresult']);
  
  
  }
  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Hurry up only 5 min left',
      duration: 3000,
     

    });
    toast.present();
  }

  next(){
    this.index++;
    
   this.favoriteSeason='';
  
    this.favoriteSeason=this.options[this.index];
      if(this.index >= 1){
        this.IsDisabled=false;
      }
  
      if(this.index==this.no-1){
        this.IsSubmit=true;
      }
      
  this.questions=this.question[this.index];
  }

  previous(){
    this.index--;
    this.favoriteSeason='';
    this.favoriteSeason=this.options[this.index];
    if(this.index==0){
      this.IsDisabled=true;
    }
    if(this.index!=this.no-1){
      this.IsSubmit=false;
    }
    
  this.questions=this.question[this.index];
  }

  answer(){
    
    
  
    if(this.favoriteSeason===this.question[this.index].answer){
      this.options[this.index]=this.favoriteSeason;
      this.answers[this.index]=1
    }
    else{
      this.options[this.index]=this.favoriteSeason;
      this.answers[this.index]=0;
  
    }
  }

}
