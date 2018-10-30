import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { AboutComponent } from './about/about.component';
import { PlanComponent } from './plan/plan.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    MainBannerComponent,
    AboutComponent,
    PlanComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
