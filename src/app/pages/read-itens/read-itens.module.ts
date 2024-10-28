import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadItensComponent } from './read-itens.component';
import { SharedModule } from 'src/shared/shared.module';
import { ReadItensRoutingModule } from './read-itens-routing.module';


@NgModule({
  declarations: [
    ReadItensComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReadItensRoutingModule
  ]
})
export class ReadItensModule { }
