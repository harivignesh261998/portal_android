import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home/practicetest',
    loadChildren: () => import('./practicetest/practicetest.module').then( m => m.PracticetestPageModule),
    
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home/portal',
    loadChildren: () => import('./portal/portal.module').then( m => m.PortalPageModule),
    
  },
  {
    path: 'home/portal/aportal',
    loadChildren: () => import('./aportal/aportal.module').then( m => m.AportalPageModule)
  },
  {
    path: 'home/portal/cportal',
    loadChildren: () => import('./cportal/cportal.module').then( m => m.CportalPageModule)
  },
  {
    path: 'home/portal/aportal/instruction',
    loadChildren: () => import('./instruction/instruction.module').then( m => m.InstructionPageModule)
  },

  {
    path: 'home/portal/cportal/instruction',
    loadChildren: () => import('./instruction/instruction.module').then( m => m.InstructionPageModule)
  },
  {
    path: 'home/portal/aportal/asolve',
    loadChildren: () => import('./asolve/asolve.module').then( m => m.AsolvePageModule)
  },
  {
    path: 'home/portal/cportal/csolve',
    loadChildren: () => import('./csolve/csolve.module').then( m => m.CsolvePageModule)
  },
  
  
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
