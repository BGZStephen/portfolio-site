import { Routes, RouterModule } from '@angular/router';
import {
  DashboardViewWrapperComponent,
  DashboardHomeComponent,
  DashboardLoginComponent,
 } from './components/dashboard-components-barrel';

 import {
   WorkExamplesViewComponent,
   WorkExampleViewComponent,
 } from './components/work-examples-components-barrel';

const DASHBOARD_ROUTES: Routes = [
  {path: 'login', component: DashboardLoginComponent },
  {path: '', component: DashboardViewWrapperComponent, children: [
    {path: '', component: DashboardHomeComponent},
    {path: 'work-examples', component: WorkExamplesViewComponent},
    {path: 'work-examples/:id', component: WorkExampleViewComponent},
  ]},
]

export const DashboardRoutes = RouterModule.forChild(DASHBOARD_ROUTES);
