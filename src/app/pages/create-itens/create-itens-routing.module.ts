import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItensComponent } from './create-itens.component';

const routes: Routes = [
  { path: '', component: CreateItensComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateItensRoutingModule { }
