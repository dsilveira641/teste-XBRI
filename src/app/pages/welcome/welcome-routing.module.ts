import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { ReadItensModule } from 'src/app/pages/read-itens/read-itens.module';
import { ReadItensComponent } from '../read-itens/read-itens.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
