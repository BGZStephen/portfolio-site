import { Routes, RouterModule } from '@angular/router';
import {
  WorkExamplesViewWrapperComponent,
  WorkExamplesViewComponent,
  WorkExampleViewComponent,
} from './components/work-examples-components-barrel';

const WORK_EXAMPLES_ROUTES: Routes = [
  {path: '', component: WorkExamplesViewComponent},
  {path: ':id', component: WorkExampleViewComponent},
]

export const WorkExamplesRoutes = RouterModule.forChild(WORK_EXAMPLES_ROUTES);
