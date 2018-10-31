import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PlanComponent } from './plan/plan.component';
import { PhonesComponent } from './phones/phones.component';
import { CoverageComponent } from './coverage/coverage.component';
import { FaqComponent } from './faq/faq.component';
import { QuizComponent } from './quiz/quiz.component';

const appRoutes: Routes = [
  {
  path: 'about',
  component: AboutComponent
  },
  {
  path: 'plan',
  component: PlanComponent
  },
  {
  path: 'phones',
  component: PhonesComponent
  },
  {
  path: 'coverage',
  component: CoverageComponent
  },
  {
  path: 'faq',
  component: FaqComponent
  },
  {
  path: 'quiz',
  component: QuizComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
