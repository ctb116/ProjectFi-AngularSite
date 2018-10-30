import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PlanComponent } from './plan/plan.component';

const appRoutes: Routes = [
  {
  path: 'about',
  component: AboutComponent
  },
  {
  path: 'plan',
  component: PlanComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
