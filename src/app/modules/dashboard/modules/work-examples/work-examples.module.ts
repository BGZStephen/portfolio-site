import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {
  WorkExamplesViewComponent
} from './components/work-examples-components-barrel';

// modules

// components

// routes
import { WorkExamplesRoutes } from './work-examples.routes';

// services

@NgModule({
  declarations: [
  WorkExamplesViewComponent
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
