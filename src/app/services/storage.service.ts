import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class StorageService {

  save(valueKey: string, valueToStore: string[]) {
    const val = JSON.stringify(valueToStore);
    localStorage.setItem(valueKey, val);
  }

  get(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
}
