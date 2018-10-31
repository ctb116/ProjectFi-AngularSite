import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { AboutComponent } from './about/about.component';
import { PlanComponent } from './plan/plan.component';
import { PhonesComponent } from './phones/phones.component';
import { CoverageComponent } from './coverage/coverage.component';
import { FaqComponent } from './faq/faq.component';
import { QuizComponent } from './quiz/quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    MainBannerComponent,
    AboutComponent,
    PlanComponent,
    PhonesComponent,
    CoverageComponent,
    FaqComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
