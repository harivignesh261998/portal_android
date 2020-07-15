import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { InstComponent } from '../inst/inst.component';
// import { PopoverComponent } from '../../component/popover/popover.component';
@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.page.html',
  styleUrls: ['./instruction.page.scss'],
})
export class InstructionPage implements OnInit {
  name;
  duration
  noofq
  topic
  counterr;
  counter=0;
  timeleft=10;
  IsDisabled=true;
  currentPopover =null;

  constructor(private authService:AuthService,private router:Router,public popoverController: PopoverController) { }

  ngOnInit() {
   // this.authService.getDashboardoff();
    this.authService.getUsername().subscribe(res=>{
      this.name=res['firstName']
      console.log(this.name);
    });


    
this.authService.getDuration().subscribe(res=>{
  this.duration=res['duration']

  this.noofq=res['questions']
  this.noofq=this.noofq.length;
  this.topic=res['testName']
  
})

    
    
    
   
    let intervalId = setInterval(() => {    
      this.counterr = this.convertSeconds(this.timeleft - this.counter);
      this.counter++;
      if(this.counter === this.timeleft){
        clearInterval(intervalId)
        this.IsDisabled=false ;
      } 
      
  }, 1000)

    

    
  }
  convertSeconds(s){
    let min=Math.floor(s/60);
    let sec=s%60;
    return min.toLocaleString('en-us',{minimumIntegerDigits:2}) +':'+sec.toLocaleString('en-us',{minimumIntegerDigits:2});


  }

 

  getQues(){
    let name=this.authService.getName()
  //  console.log('this is the name->',name)
   
if(name=='Atest'){
    this.router.navigate(['home/portal/aportal/asolve']);
  }
  else
  {
    this.router.navigate(['home/portal/cportal/csolve']);
  }
}
async presentPopover(ev: any) {
  const popover = await this.popoverController.create({
    component: InstComponent,
    cssClass: 'my-custom-class',
    event: ev,
    translucent: true
  });
 
  return await popover.present();
}


}


