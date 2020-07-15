import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    errorMessage

constructor(public toastController: ToastController) {}
    
    intercept(req:HttpRequest<any>,next:HttpHandler){
        
        return next.handle(req).pipe(
            catchError((error:HttpErrorResponse)=>{
                 this.errorMessage='Check Your Internet Connection'
                
                if(error.error.message){
                    this.errorMessage=error.error.message;

                }
               
               this.handleButtonClick();
                    
                    
                  
                
                return throwError(error);
            })
        );
    }
     async handleButtonClick() {
        const toast =  await this.toastController.create({
            color: 'dark',
            duration: 2000,
            message: this.errorMessage,
        });
  
         toast.present();
      }
}