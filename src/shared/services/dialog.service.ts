import { ComponentType } from '@angular/cdk/portal';
import { Injectable, Optional } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(@Optional() private dialog: MatDialog) { }

  openGenericDialog<T>(
    cmp: ComponentType<T>,
    cfg?: MatDialogConfig
  ): MatDialogRef<any> {
    const baseOptions = {
      autofocus: false,
      disableClod: true,
      minWidth: '40vw',
      minHeight: '80vh',
      panelClass: 'position-relative',
    }

    console.log("chamou o service");
    

    return this.dialog?.open(cmp, {
      ...baseOptions
    });
  }
}
