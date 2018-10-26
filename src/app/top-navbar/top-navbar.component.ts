import { Component, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent {



@HostListener('window:scroll') onWindowScroll(event) {
    console.log("scrolling...");
    console.log(window.scrollY);
    if(window.scrollY < 2){
      // alert("test");
      return "test";
    } else {
      // alert("test2");
      return "test2";
    }
}
}
