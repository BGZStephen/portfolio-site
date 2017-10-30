import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// modules
import { WorkExamplesModule } from 'app/modules/dashboard/modules/work-examples/work-examples.module';

// components
import {
  DashboardViewWrapperComponent,
  DashboardHomeComponent,
  DashboardLoginComponent,
} from './components/dashboard-components-barrel';

// routes
import { DashboardRoutes } from './dashboard.routes';
import { DashboardNavbarComponent } from './components/dashboard-navbar/dashboard-navbar.component';

@NgModule({
  declarations: [
    DashboardViewWrapperComponent,
    DashboardHomeComponent,
    DashboardLoginComponent,
    DashboardNavbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutes,
    FormsModule,
    WorkExamplesModule,
  ],
  providers: [],
})
export class DashboardModule { }
