import { CanActivate, Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {Observable} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authService:AuthService,private router:Router){}
    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ): boolean | Observable<boolean> |  Promise<boolean>{
       const isAuth=this.authService.getIsAuth();
       console.log('checking ' + isAuth);
       if(!isAuth){
           this.router.navigate(['/']);
       }
        return isAuth;

    }

    

}