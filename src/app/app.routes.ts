import { Routes, RouterModule } from '@angular/router';

import * as siteComponents from './modules/site/components';

const APP_ROUTES: Routes = [{ path: '', component: siteComponents.HomeView }];

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
