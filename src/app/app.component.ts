import { Component, Inject, Optional, SkipSelf } from '@angular/core';
import { ConstantsService } from './services/constants.service';
import { APP_NAME, APP_VERSION } from './constants';
import { BUILD_ID } from './factories';
import { AppConfig, IAppConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    @Inject(AppConfig) public config: IAppConfig,
    @Inject(BUILD_ID) public buildId: string
  ) {}
}
