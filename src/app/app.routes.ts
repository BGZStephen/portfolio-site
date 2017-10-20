import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  {path: 'dashboard', loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule'},
  {path: '', loadChildren: 'app/modules/site/site.module#SiteModule'},
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
