import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LocalStorage } from 'src/app/enums';
import { Actions, Column } from 'src/shared/components/dynamic-table/interfaces/table-interface';
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
    private storage: StorageService
  ) { }
  
  ngOnInit(): void {
    this.getList();
  }
  
  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.unsubscribe();
  }

  private getList() {
    this.data = this.storageSavedData;
    console.log("[getList]", this.data);
    
  }

  get storageSavedData(): any {
    return this.storage.getItem(LocalStorage.ItensSaved);
  }
}
