import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomainsService {
  private category = [
    { value: "automovel", viewValue: "Automóvel"},
    { value: "caminhao", viewValue: "Caminhão"},
    { value: "aviao", viewValue: "Avião"},
  ]

  constructor() { }

  getCategory(): Observable<any> {
    return of(this.category)
  }
}
