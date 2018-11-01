import { Injectable } from '@angular/core';
import { MainBanner } from './models/main-banner.model';
import { MAINBANNER } from './mock-pageinfo';

@Injectable()
export class MainBannerService {

  constructor() { }

  getMainBannerInfo() {
    return MAINBANNER;
  }

  getMainBannerAbout() {
    return MAINBANNER[0];
  }

}
