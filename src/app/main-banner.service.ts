import { Injectable } from '@angular/core';
import { MainBanner } from './models/main-banner.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MainBannerService {

  mainBanner: FirebaseListObservable<any[]>;

  //makes firebase database available to use
  constructor(private database: AngularFireDatabase) {
    //defines what we want from the database
    this.mainBanner = database.list('mainbanner');
    console.log(this.mainBanner)
  }

  getMainBannerPlan() {
    return this.mainBanner;
  }

  getMainBannerAbout() {
    return this.mainBanner;
  }

}
