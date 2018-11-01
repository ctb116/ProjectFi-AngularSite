import { Component } from '@angular/core';
import { MainBanner } from './models/main-banner.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //instances of components (like hard coding)

  // masterMainBanner: MainBanner[] = [
  //   new MainBanner("hero-furry-desktop.jpg", "Project Fi, a phone plan from Google", "Meet the phone plan you'll want to snuggle up with.", "button"),
  // ]
}
