import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { DynamicTableModule } from './components/dynamic-table/dynamic-table.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { DynamicSelectComponent } from './components/dynamic-select/dynamic-select.component';
import { DynamicSelectModule } from './components/dynamic-select/dynamic-select.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CURRENCY_MASK_CONFIG, CurrencyMaskConfig, CurrencyMaskModule } from 'ng2-currency-mask';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

@NgModule({
  declarations: [
    DynamicTableComponent,
    DynamicSelectComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatIconModule,
    ReactiveFormsModule,
    DynamicTableModule,
    DynamicSelectModule,
    CurrencyMaskModule
  ],
  exports: [
    DynamicTableComponent,
    DynamicSelectComponent,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CurrencyMaskModule        
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
