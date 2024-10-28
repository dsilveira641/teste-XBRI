import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[DynamicAttributes]'
})
export class DynamicAttributesDirective implements OnInit {
  @Input('dynamicAttribute') attrs?: { [key: string]: any } | null;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    if (!this.attrs) return;

    for (const attr in this.attrs) {
      let value = this.attrs[attr];   
      this.element.nativeElement.setAttribute(attr, value);
    }
  }
}
