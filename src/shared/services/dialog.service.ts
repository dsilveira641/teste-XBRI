import { ComponentType } from '@angular/cdk/portal';
import { Injectable, Optional } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { ConfirmationDialogComponent, ConfirmationDialogInput } from '../components/confirmation-dialog/confirmation-dialog.component';

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
      minWidth: '90vw',
      minHeight: '80vh',
      panelClass: 'position-relative',
    }

    Object.assign(baseOptions, cfg);
    return this.dialog?.open(cmp, {
      ...baseOptions
    });
  }

  confirmation(data: ConfirmationDialogInput): MatDialogRef<any> {
    return this.dialog?.open(ConfirmationDialogComponent, {
      width: '60vw',
      autoFocus: false,
      data: data,
      closeOnNavigation: false,
      disableClose: true,
    });
  }
}
