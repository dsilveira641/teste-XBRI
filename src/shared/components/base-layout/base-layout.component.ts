import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  @Input() headerTitle!: string;
  @Output() buttonClick = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
