import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',  
})
export class CommonService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  showSnack(message: string) {
    this.snackBar.open(message, '', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 3000
    });
  }
}
