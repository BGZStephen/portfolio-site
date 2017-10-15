import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  {path: '', loadChildren: 'app/modules/site/site.module#SiteModule'},
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
