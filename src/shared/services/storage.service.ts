import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getItem(key: string) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }

  setItem(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  clearAll() {
    localStorage.clear();
    sessionStorage.clear();
  }
}
