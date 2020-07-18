import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cportal',
  templateUrl: './cportal.page.html',
  styleUrls: ['./cportal.page.scss'],
})
export class CportalPage implements OnInit {
cTest;
count1
count2
Solved;
score=[];
check=[];
math=Math;
name='Ctest';
public loading=false;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
    this.loading=true;
    this.authService.getCTest().subscribe(res=>{
      this.cTest=res;
      this.count1=this.cTest.length

    })

    this.authService.isSolvedCtest().subscribe(res=>{
      this.Solved=res;
      
      //console.log(this.score);
      this.count2=this.Solved.length;
      this.fun();
      this.loading=false;
    })
  }

  fun(){
    for(let i=0;i<this.count1;i++){
      for(let j=0;j<this.count2;j++){
        if(this.cTest[i]._id===this.Solved[j].testId){
          this.score[i]=this.Solved[j].score;
          this.check[i]=true;
          
        }
        
      }
    }
  }

  min(id){
    this.authService.giveduration(id,this.name);
    this.authService.atestId(id);
    this.router.navigate(['home/portal/cportal/instruction']);
  }

}
