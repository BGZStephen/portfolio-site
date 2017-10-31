import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {
  WorkExamplesViewComponent,
  WorkExampleViewComponent
} from './components/work-examples-components-barrel';

// modules

// components

// routes

// services

@NgModule({
  declarations: [
  WorkExamplesViewComponent,
  WorkExampleViewComponent
],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
  ],
  providers: [],
})

export class WorkExamplesModule { }
