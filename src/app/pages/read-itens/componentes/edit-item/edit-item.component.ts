import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AffirmationMessages, LocalStorage } from 'src/app/enums';
import { CreateEditFormComponent } from 'src/app/pages/create-itens/components/create-edit-form/create-edit-form.component';
import { CommonService } from 'src/shared/services/common.service';
import { StorageService } from 'src/shared/services/storage.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  @ViewChild('addEditForm') addEditForm!: CreateEditFormComponent;
  entity: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<EditItemComponent>,
    private storage: StorageService,
    private common: CommonService
  ) { 
    this.entity = data;
    console.log("[constructor]", this.entity);    
  }

  ngOnInit(): void {
  }

  onSave(event: any) {
    if (this.addEditForm?.form.invalid) {
      this.addEditForm?.form.markAllAsTouched();
    }
    else {
      const savedItens = [...this.storageSavedData]; // Cria uma cópia da lista de itens armazenados
      const payload = this.addEditForm?.form.getRawValue();
      
      const index = savedItens.findIndex((item: any) => item.id === this.entity.element.id);

      if (index !== -1) {      
        savedItens[index] = { ...savedItens[index], ...payload };
      } 
      
      this.storage.setItem(LocalStorage.ItensSaved, savedItens);
      this.common.showSnack(AffirmationMessages.SAVE_SUCCESS);
    }
  }

  get storageSavedData(): any {
    return this.storage.getItem(LocalStorage.ItensSaved);
  }
}
