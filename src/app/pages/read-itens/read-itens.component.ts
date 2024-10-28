import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ActionClickName, AffirmationMessages, LocalStorage } from 'src/app/enums';
import { Actions, Column } from 'src/shared/components/dynamic-table/interfaces/table-interface';
import { CommonService } from 'src/shared/services/common.service';
import { StorageService } from 'src/shared/services/storage.service';

@Component({
  selector: 'app-read-itens',
  templateUrl: './read-itens.component.html',
  styleUrls: ['./read-itens.component.scss']
})
export class ReadItensComponent implements OnInit, OnDestroy {

  data: any[] = [];

  actions: Actions[] = [
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
    private common: CommonService
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
  }

  private getList() {
    this.data = this.storageSavedData.map((item: any) => {
      return {
        ...item,
        ativo: (item.ativo) ? "Ativo" : "Inativo"
      }
    });        
  }

  delete(index: number) {    
    const savedItens = this.storageSavedData.filter((item: any) => item.id !== index);
    this.storage.setItem(LocalStorage.ItensSaved, savedItens);
    this.getList();
    this.common.showSnack(AffirmationMessages.SAVE_SUCCESS);        
  }

  get storageSavedData(): any {
    return this.storage.getItem(LocalStorage.ItensSaved);
  }
}
