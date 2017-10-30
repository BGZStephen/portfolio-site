import { Routes, RouterModule } from '@angular/router';
import {
  DashboardViewWrapperComponent,
  DashboardHomeComponent,
  DashboardLoginComponent,
 } from './components/dashboard-components-barrel';

const DASHBOARD_ROUTES: Routes = [
  {path: 'login', component: DashboardLoginComponent },
  {path: '', component: DashboardViewWrapperComponent, children: [
    {path: '', component: DashboardHomeComponent},
    {path: 'work-examples', loadChildren: 'app/modules/dashboard/modules/work-examples/work-examlpes.module#WorkExamplesModule}'}
  ]},
]

export const DashboardRoutes = RouterModule.forChild(DASHBOARD_ROUTES);
