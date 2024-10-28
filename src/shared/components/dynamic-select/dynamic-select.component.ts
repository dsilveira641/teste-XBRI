import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Options } from './interfaces/select-interface';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-dynamic-select',
  templateUrl: './dynamic-select.component.html',
  styleUrls: ['./dynamic-select.component.scss']
})
export class DynamicSelectComponent implements OnInit, OnChanges {
  @Input() label: string = '';                   
  @Input() options: Options[] = [];         
  @Input() control!: string;          
  @Input() appearance: 'fill' | 'outline' | 'standard' = 'outline';  
  @Input() customForm!: FormGroup;
  @Output() selectionChange = new EventEmitter<MatSelectChange>();

  constructor() { }  

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("[ngOnChnages]", this.control);
    
  }

  onSelectionChange(event: any): void {
    this.selectionChange.emit(event.value);
  }

}
