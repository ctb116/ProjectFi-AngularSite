import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainBannerService } from '../main-banner.service';
import { MainBanner } from '../models/main-banner.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css'],
  providers: [MainBannerService]
})
export class MainBannerComponent implements OnInit {

  mainBannerInfo: FirebaseListObservable<any[]>;

  constructor(private router: Router,
              private mainBannerService: MainBannerService
             ) {}

  ngOnInit() {
  if(this.router.url === '/') {
  this.mainBannerInfo = this.mainBannerService.getMainBannerAbout();
  console.log(this.router.url);
  }
  if(this.router.url === '/plan') {
    this.mainBannerInfo = this.mainBannerService.getMainBannerPlan();
    console.log(this.router.url);
  }
  //phones, coverage, faq, quiz
}


}
