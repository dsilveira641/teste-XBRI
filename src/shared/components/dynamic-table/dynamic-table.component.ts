import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { ActionClickEvent, Actions, Column } from './interfaces/table-interface';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit, OnChanges, OnDestroy {

  @Input() displayedColumns: Column[] = [];
  @Input() data: any[] = [];
  @Input() actions: Actions[] = [];
  @Input() header: boolean = true;

  @Output() actionClick = new EventEmitter<ActionClickEvent>();

  headers!: string[];
  dataSource: any[] = [];
  columns: string[] = [];
  rightActions: Actions[] = [];
  public actionColumnName = 'actions';
  private destroy$ = new Subject();
  
  pageIndex = 1;
  pageSize = 10;
  total = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {      
    if (changes) {
      this.createTable();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.createTable();
  } 

  onActionClick(action: Actions, element: any) {
    this.actionClick.emit({
      element: element,
      name: action.name 
    });
  }

  private createTable() {
    this.dataSource = this.data;
    this.columns = this.displayedColumns.map(c => c.name);
    this.columns.push(this.actionColumnName);
    this.total = this.data.length; 
  }

}
