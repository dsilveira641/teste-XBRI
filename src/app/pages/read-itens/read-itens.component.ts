import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ActionClickName, AffirmationMessages, ConfirmationMessages, LocalStorage } from 'src/app/enums';
import { Actions, Column } from 'src/shared/components/dynamic-table/interfaces/table-interface';
import { CommonService } from 'src/shared/services/common.service';
import { DialogService } from 'src/shared/services/dialog.service';
import { StorageService } from 'src/shared/services/storage.service';
import { CreateItensComponent } from '../create-itens/create-itens.component';
import { EditItemComponent } from './componentes/edit-item/edit-item.component';

@Component({
  selector: 'app-read-itens',
  templateUrl: './read-itens.component.html',
  styleUrls: ['./read-itens.component.scss']
})
export class ReadItensComponent implements OnInit, OnDestroy {

  data: any[] = [];

  actions: Actions[] = [
    {
      name: "edit",
      tooltip: "Editar",
      icon: "edit",
      class: "edit"
    },
    {
      name: "delete",
      tooltip: "Excluir",
      icon: "delete_forever",
      class: "delete"
    }
  ]

  columns: Column[] = [
    {
      name: "nomeItem",
      title: "Nome do item"
    },
    {
      name: "categoria",
      title: "Categoria"
    },
    {
      name: "ativo",
      title: "Ativo"
    },
    {
      name: "preco",
      title: "Preço"
    },
    {
      name: "quantidade",
      title: "Quantidade"
    }
  ];

  private destroy$ = new Subject();
  
  constructor(
    private storage: StorageService,
    private common: CommonService,
    private dialogService: DialogService
  ) { }
  
  ngOnInit(): void {
    this.getList();
  }
  
  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.unsubscribe();
  }

  onActionClick(event: any) {      
    if (event.name === ActionClickName.EXCLUDE) {
      this.delete(event.element.id);
    }  
    else if (event.name === ActionClickName.EDIT) {
      this.openDialog()
    }
  }

  private getList() {
    this.data = this.storageSavedData.map((item: any) => {
      return {
        ...item,
        ativo: (item.ativo) ? "Ativo" : "Inativo"
      }
    });        
  }

  private openDialog() {
    this.dialogService.openGenericDialog(EditItemComponent, {
      
    });
  }

  private delete(index: number) {    
    const confirmation = this.dialogService.confirmation(ConfirmationMessages.EXCLUDE);
    confirmation.afterClosed().subscribe((response: boolean) => {      
      if (response) {
        const savedItens = this.storageSavedData.filter((item: any) => item.id !== index);
        this.storage.setItem(LocalStorage.ItensSaved, savedItens);
        this.getList();
        this.common.showSnack(AffirmationMessages.SAVE_SUCCESS);        
      }
    })
  }

  get storageSavedData(): any {
    return this.storage.getItem(LocalStorage.ItensSaved);
  }
}
