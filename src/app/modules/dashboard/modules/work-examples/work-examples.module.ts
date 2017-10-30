import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {
  WorkExamplesViewComponent,
  WorkExamplesViewWrapperComponent
} from './components/work-examples-components-barrel';

// modules

// components

// routes
import { WorkExamplesRoutes } from './work-examples.routes';
import { WorkExampleViewComponent } from './components/work-example-view/work-example-view.component';

// services

@NgModule({
  declarations: [
  WorkExamplesViewComponent,
  WorkExamplesViewWrapperComponent,
  WorkExampleViewComponent
],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    WorkExamplesRoutes,
  ],
  providers: [],
})

export class WorkExamplesModule { }
