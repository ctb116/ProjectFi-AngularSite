import { Injectable } from '@angular/core';
import { MainBanner } from './models/main-banner.model';
import { MAINBANNER } from './mock-pageinfo';
import { AboutComponent } from './about/about.component';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MainBannerService {

  mainBanner: FirebaseListObservable<any[]>;

  //makes firebase database available to use
  constructor(private database: AngularFireDatabase) {
    //defines what we want from the database
    this.mainBanner = database.list('mainbanner');
  }

  getMainBannerPlan() {
    console.log(this.mainBanner);
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
