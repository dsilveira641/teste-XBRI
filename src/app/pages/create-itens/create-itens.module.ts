import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateItensComponent } from './create-itens.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule }  from '@angular/material/radio'; 
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    CreateItensComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,   
    MatInputModule,
    SharedModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class CreateItensModule { }
