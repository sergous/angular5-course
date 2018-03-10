import { Component, Inject } from '@angular/core';
import { ConstantsService } from './services/constants.service';
import { APP_NAME, APP_VERSION } from './constants';
import { BUILD_ID } from './generator.factory';

const constantsService = new ConstantsService(APP_NAME, APP_VERSION);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: ConstantsService, useValue: constantsService }
  ]
})
export class AppComponent {
  title: string;
  version: string;
  build: string;

  constructor(
    public constantsService: ConstantsService,
    @Inject(BUILD_ID) private buildId: string,
  ) {}

  ngOnInit() {
    const appInfo = this.constantsService.getAppInfo();
    const { title, version } = appInfo;
    this.title = title;
    this.version = version;
    this.build = this.buildId;
  }
}
