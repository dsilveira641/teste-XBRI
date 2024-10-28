import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateItensModule } from 'src/app/pages/create-itens/create-itens.module';
import { EditItemComponent } from './edit-item.component';
import { SharedModule } from 'src/shared/shared.module';



@NgModule({
  declarations: [
    EditItemComponent
  ],
  imports: [
    CommonModule,
    CreateItensModule,
    SharedModule
  ]
})
export class EditItemModule { }
