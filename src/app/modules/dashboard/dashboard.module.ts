import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// components
import { DashboardViewWrapperComponent, DashboardHomeComponent } from './components/dashboard-components-barrel';

// routes
import { DashboardRoutes } from './dashboard.routes';

@NgModule({
  declarations: [
    DashboardViewWrapperComponent,
    DashboardHomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutes,
  ],
  providers: [],
  bootstrap: []
})
export class DashboardModule { }
