import { Component, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent {



@HostListener('window:scroll') onWindowScroll() {
    console.log("scrolling...");
    console.log(window.scrollY);
    if(window.scrollY == 0){
      // alert("test");
      return "toolbar_offset";
    } else {
      // alert("test2");
      return "toolbar_fixed";
    }
}
}
