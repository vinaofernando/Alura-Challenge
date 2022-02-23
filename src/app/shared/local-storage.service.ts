import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }
  set(key: string, value: any): void {
    this.storage.setItem(key, value);
  }
  get(key: string): any {
    return this.storage.getItem(key);
  }
}
