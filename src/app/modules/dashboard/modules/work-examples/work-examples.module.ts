import { BrowserModule } from '@angular/platform-browser';
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
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [],
})

export class WorkExamplesModule { }
