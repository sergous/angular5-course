import { Injectable, forwardRef, Inject } from '@angular/core';
import { ConfigOptions } from '../models/config-options.model';
import { CONFIG_STORE_NAME } from '../constants';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class ConfigOptionsService {

  constructor(
    @Inject(forwardRef(() => LocalStorageService)) public localStorageService: LocalStorageService
  ) { }

  setConfig(config: ConfigOptions) {
    try {
      const configStr = JSON.stringify(config);
      this.localStorageService.setItem(CONFIG_STORE_NAME, configStr);
    } catch (reason) {
      throw reason;
    }
  }

  getConfig() {
    try {
      const configStr = this.localStorageService.getItem(CONFIG_STORE_NAME);
      return JSON.parse(configStr);
    } catch (reason) {
      throw reason;
    }
  }

}
