import { Injectable } from '@angular/core';
import { MainBanner } from './models/main-banner.model';
import { MAINBANNER } from './mock-pageinfo';
import { AboutComponent } from './about/about.component';

@Injectable()
export class MainBannerService {

  constructor() { }

  getMainBannerPlan() {
    return MAINBANNER[1];
  }

  getMainBannerAbout() {
    return MAINBANNER[0];
  }

  //I want one function in here to
  //recieve the correct mainbanner information
  //to send to the main-banner.component
  //which then has the same app route in other components

  // getMainBannerAbout() {
  //   for(var i = 0; i <= MAINBANNER.length; i++) {
  //     if (MAINBANNER[i].pageName === this.pageName ) {
  //       return MAINBANNER[i];
  //     }
  //   }
  // }
}
