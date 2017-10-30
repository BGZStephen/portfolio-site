import { Routes, RouterModule } from '@angular/router';
import {
  DashboardViewWrapperComponent,
  DashboardHomeComponent,
  DashboardLoginComponent,
 } from './components/dashboard-components-barrel';

const DASHBOARD_ROUTES: Routes = [
  {path: 'login', component: DashboardLoginComponent },
  {path: '', component: DashboardViewWrapperComponent, children: [
    {path: 'home', component: DashboardHomeComponent},
    {path: 'work-examples', loadChildren: './modules/work-examples/work-examples.module#WorkExamplesModule'},
  ]},
]

export const DashboardRoutes = RouterModule.forChild(DASHBOARD_ROUTES);
