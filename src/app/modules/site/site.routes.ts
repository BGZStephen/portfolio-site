import { Routes, RouterModule } from '@angular/router';
import { SiteViewWrapperComponent, SiteHomeComponent } from './components/site-components-barrel';

const SITE_ROUTES: Routes = [
  {path: '', component: SiteViewWrapperComponent, children: [
    {path: '', component: SiteHomeComponent},
  ]},
]

export const SiteRoutes = RouterModule.forChild(SITE_ROUTES);
