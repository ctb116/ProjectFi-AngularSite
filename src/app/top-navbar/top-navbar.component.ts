import { Component, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent {


@HostListener('window:scroll', ['$event'])
onWindowScroll($event) {
    console.log("scrolling...");
}
}
