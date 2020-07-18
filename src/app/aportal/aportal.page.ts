import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aportal',
  templateUrl: './aportal.page.html',
  styleUrls: ['./aportal.page.scss'],
})
export class AportalPage implements OnInit {
 aTest;
 count1;
 Solved;
 count2;
 score=[];
 check=[];
 name='Atest';
 math=Math;
 public loading=false;

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
    this.loading=true;

    this.authService.getATest().subscribe(res=>{
      this.aTest=res;
      this.count1=this.aTest.length;

    })
    this.authService.isSolvedAtest().subscribe(res=>{
     
      this.Solved=res;
      console.log(this.Solved);
      this.count2=this.Solved.length;
      console.log(this.count2);
      
      this.fun();
      this.loading=false;
    })
    
  }

  fun(){
    
    for(let i=0;i<this.count1;i++){
      for(let j=0;j<this.count2;j++){
        if(this.aTest[i]._id===this.Solved[j].testId){
          this.score[i]=this.Solved[j].score;
          this.check[i]=true;
          
        }
        
      }
    }
    console.log(this.score,this.check)

  }
  min(id){
    this.authService.giveduration(id,this.name);
    this.authService.atestId(id);
    this.router.navigate(['home/portal/aportal/instruction']);
  }

}
