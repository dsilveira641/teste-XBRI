import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadItensComponent } from './read-itens.component';
import { SharedModule } from 'src/shared/shared.module';
import { ReadItensRoutingModule } from './read-itens-routing.module';
import { EditItemComponent } from './componentes/edit-item/edit-item.component';
import { EditItemModule } from './componentes/edit-item/edit-item.module';


@NgModule({
  declarations: [
    ReadItensComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReadItensRoutingModule,
    EditItemModule
  ]
})
export class ReadItensModule { }
