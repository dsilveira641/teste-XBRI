import { Observable, Subject, takeUntil } from 'rxjs';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomainsService } from 'src/shared/services/domains.service';
import { StorageService } from 'src/shared/services/storage.service';
import { AffirmationMessages, LocalStorage } from 'src/app/enums';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Options } from 'src/shared/interfaces/options';
import { CreateEditFormComponent } from './components/create-edit-form/create-edit-form.component';

@Component({
  selector: 'app-create-itens',
  templateUrl: './create-itens.component.html',
  styleUrls: ['./create-itens.component.scss'],
  providers: [ MatSnackBar ]
})
export class CreateItensComponent implements OnInit, OnDestroy {

  @ViewChild('addEditForm') addEditForm!: CreateEditFormComponent;
  
  private destroy$ = new Subject();

  constructor(
    private storage: StorageService,
    private snackBar: MatSnackBar
  ) { 
  }  

  ngOnInit(): void {     
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.unsubscribe();
  }

  save() {
    if (this.addEditForm?.form.invalid) {
      this.addEditForm?.form.markAllAsTouched();
    }
    else {
      const savedItens = this.storageSavedData;
      const payload = this.addEditForm?.form.getRawValue();      
      payload.id = savedItens.at(-1).id + 1;
      savedItens.push(payload);
      this.storage.setItem(LocalStorage.ItensSaved, savedItens);
      this.snackBar.open(AffirmationMessages.SAVE_SUCCESS, '', {
        duration: 3000
      });
    }
  }

  get storageSavedData(): any {
    return this.storage.getItem(LocalStorage.ItensSaved);
  }
}
