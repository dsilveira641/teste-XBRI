import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { 
    path: 'read', 
    loadChildren: () => import('src/app/pages/read-itens/read-itens.module').then(m => m.ReadItensModule),    
  },
  { 
    path: 'create', 
    loadChildren: () => import('src/app/pages/create-itens/create-itens.module').then(m => m.CreateItensModule),    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
