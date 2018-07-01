import { InjectionToken } from '@angular/core';

export const APP_TITLE = 'Shop';
export const APP_VERSION = '0.0.1';

export interface IAppConfig {
  title: string;
  version: string;
}
export const AppConfig = new InjectionToken<IAppConfig>('AppConfig');

export const AppConfigProvider = {
  provide: AppConfig,
  useValue: <IAppConfig>{
    title: APP_TITLE,
    version: APP_VERSION,
  },
};
