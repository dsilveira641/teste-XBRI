import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogData } from 'src/shared/interfaces/confirmation';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

  public dialogData!: ConfirmationDialogData;
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogInput,
  ) {
    if (typeof data === 'string') {
      this.dialogData = { message: data };
    } else {
      this.dialogData = data;
    }
  }
  onButtonClick(value: boolean): void {
    this.dialogRef.close(value);
  }

}

export type ConfirmationDialogInput = string | ConfirmationDialogData;
