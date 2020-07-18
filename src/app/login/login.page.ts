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
private authListnerSubs:Subscription;
@Input() deviceXz:boolean;
  isLoading=false;
  hide=true;
  public UserIsAuthenticated=false;
public loading=false;
  constructor(private authService:AuthService) { }

  ngOnInit() {

    this.UserIsAuthenticated=this.authService.getIsAuth();
    this.authListnerSubs=this.authService.getAuthStatusListner().subscribe(isAuthenticated=>{
      this.UserIsAuthenticated=isAuthenticated;
    });
  }

  login(){
    this.loading=true;
    console.log(this.email,this.password);
    this.authService.login(this.email,this.password);
    this.email='';
    this.password='';
   

  }


}
