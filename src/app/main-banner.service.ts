import { Injectable } from '@angular/core';
import { MainBanner } from './models/main-banner.model';
// import { MAINBANNER } from './mock-pageinfo';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class MainBannerService {

  mainBanner: FirebaseListObservable<any[]>;

  //makes firebase database available to use
  constructor(private database: AngularFireDatabase) {
    //defines what we want from the database
    this.mainBanner = database.list('/mainbanner/');
    console.log(this.mainBanner);
    console.log(this.mainBanner[1]);
  }

  getMainBannerAll() {
    return this.mainBanner;
  }

//   var ref = new firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
// ref.orderByChild("dimensions/height").on("child_added", function(snapshot) {
//   console.log(snapshot.key() + " was " + snapshot.val().height + " meters tall");
// });

  // getMainBannerPlan() {
  //   (this.mainBanner).orderByChild("0").on("child_added", function(snapshot) {
  //     console.log(snapshot)
  //   });
  // }
  //
  // getMainBannerAbout() {
  //   return this.mainBanner;
  // }

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
