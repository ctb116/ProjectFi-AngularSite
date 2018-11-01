import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainBannerService } from '../main-banner.service';
import { MainBanner } from '../models/main-banner.model';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css'],
  providers: [MainBannerService]
})
export class MainBannerComponent implements OnInit {
  mainBannerInfo: MainBanner;

  constructor(private router: Router, private mainBannerService: MainBannerService) {}

  ngOnInit() {
    this.mainBannerInfo = this.mainBannerService.getMainBannerAbout();
  }


}
