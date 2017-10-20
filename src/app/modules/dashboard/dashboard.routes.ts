import { Routes, RouterModule } from '@angular/router';
import { DashboardViewWrapperComponent, DashboardHomeComponent } from './components/dashboard-components-barrel';

const DASHBOARD_ROUTES: Routes = [
  {path: '', component: DashboardViewWrapperComponent, children: [
    {path: '', component: DashboardHomeComponent},
  ]},
]

export const DashboardRoutes = RouterModule.forChild(DASHBOARD_ROUTES);
