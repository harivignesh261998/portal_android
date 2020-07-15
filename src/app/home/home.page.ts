import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';    
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
firstName;
  ngOnInit(){
    this.auhtService.getUsername().subscribe(res=>{
      this.firstName=res['firstName'];
      
    })
    
  }

  constructor(private auhtService:AuthService,private menu: MenuController) { }
  
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }


   async openMenu() {
    await this.menu.open();
  }


  
}


