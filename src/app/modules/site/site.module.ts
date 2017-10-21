import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// components
import {
  SiteViewWrapperComponent,
  SiteHomeComponent,
  SiteWorkExamplesComponent
} from './components/site-components-barrel';

// routes
import { SiteRoutes } from './site.routes';
import {  } from './components/site-work-examples/site-work-examples.component';

@NgModule({
  declarations: [
    SiteViewWrapperComponent,
    SiteHomeComponent,
    SiteWorkExamplesComponent
  ],
  imports: [
    CommonModule,
    SiteRoutes,
  ],
  providers: [],
  bootstrap: []
})
export class SiteModule { }
