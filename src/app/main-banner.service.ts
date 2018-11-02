import { Injectable } from '@angular/core';
import { MainBanner } from './models/main-banner.model';
import { MAINBANNER } from './mock-pageinfo';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class MainBannerService {
  mainBanner: FirebaseObjectObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.mainBanner = database.object('/mainbanner/');
    console.log(<any[]>{})
  }

  getMainBannerPlan() {
    return this.mainBanner;
  }

  getMainBannerAbout() {
    return this.mainBanner;
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
