import { Component } from '@angular/core';
import { ConstantsService } from './services/constants.service';
import { APP_NAME, APP_VERSION } from './constants';

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

  constructor(
    public constantsService: ConstantsService,
  ) {}

  ngOnInit() {
    const appInfo = this.constantsService.getAppInfo();
    const { title, version } = appInfo;
    this.title = title;
    this.version = version;
  }
}
