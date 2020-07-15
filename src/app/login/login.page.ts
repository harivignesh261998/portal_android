import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
email:string;
password:string;
private authStatusSub:Subscription;
@Input() deviceXz:boolean;
  isLoading=false;
  hide=true;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authStatusSub= this.authService.getAuthStatusListner().subscribe(
      authStatus=>{
        this.isLoading=false;
      }
    );
  }

  login(){
    console.log(this.email,this.password);
    this.authService.login(this.email,this.password);
    this.email='';
    this.password='';


  }

}
