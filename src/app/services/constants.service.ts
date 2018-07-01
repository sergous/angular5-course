import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
  constructor(
    public title: string,
    public version: string,
  ) { }

  getAppInfo() {
    return { title: this.title, version: this.version };
  }

}
