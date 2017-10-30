import { Routes, RouterModule } from '@angular/router';
import {
  WorkExamplesViewComponent
} from './components/work-examples-components-barrel';

const WORK_EXAMPLES_ROUTES: Routes = [
  {path: '', component: WorkExamplesViewComponent},
]

export const WorkExamplesRoutes = RouterModule.forChild(WORK_EXAMPLES_ROUTES);
