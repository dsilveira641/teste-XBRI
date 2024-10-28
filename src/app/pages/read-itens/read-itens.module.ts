import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadItensComponent } from './read-itens.component';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    ReadItensComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ReadItensModule { }
