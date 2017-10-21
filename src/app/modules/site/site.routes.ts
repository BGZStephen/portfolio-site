import { Routes, RouterModule } from '@angular/router';
import {
  SiteViewWrapperComponent,
  SiteHomeComponent,
  SiteWorkExamplesComponent,
 } from './components/site-components-barrel';

const SITE_ROUTES: Routes = [
  {path: '', component: SiteViewWrapperComponent, children: [
    {path: '', component: SiteHomeComponent},
    {path: 'work/:type', component: SiteWorkExamplesComponent},
  ]},
]

export const SiteRoutes = RouterModule.forChild(SITE_ROUTES);
