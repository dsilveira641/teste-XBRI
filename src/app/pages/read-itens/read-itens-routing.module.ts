import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadItensComponent } from './read-itens.component';

const routes: Routes = [
  { path: '', component: ReadItensComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadItensRoutingModule { }
