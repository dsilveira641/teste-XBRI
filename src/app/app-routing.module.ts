import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadItensComponent } from './pages/read-itens/read-itens.component';
import { CreateItensComponent } from './pages/create-itens/create-itens.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { 
    path: 'read', 
    loadChildren: () => import('src/app/pages/read-itens/read-itens.module').then(m => m.ReadItensModule),
    component: ReadItensComponent
  },
  { 
    path: 'create', 
    loadChildren: () => import('src/app/pages/create-itens/create-itens.module').then(m => m.CreateItensModule),
    component: CreateItensComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
