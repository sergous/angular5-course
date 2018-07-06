import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  constructor() {}

  setItem(name: string, value: any) {
    try {
      localStorage.setItem(name, JSON.stringify(value));
    } catch (reason) {
      throw reason;
    }
  }

  getItem(name: string): any {
    try {
      return JSON.parse(localStorage.getItem(name));
    } catch (reason) {
      throw reason;
    }
  }

  removeItem(name: string) {
    try {
      localStorage.removeItem(name);
    } catch (reason) {
      throw reason;
    }
  }
}
