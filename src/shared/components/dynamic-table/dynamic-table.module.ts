import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DynamicAttributesDirective } from './directives/dynamic-attributes.directive';

@NgModule({
  declarations: [
    DynamicAttributesDirective
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class DynamicTableModule { }
