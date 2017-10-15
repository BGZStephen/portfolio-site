import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// components
import { SiteViewWrapperComponent, SiteHomeComponent } from './components/site-components-barrel';

// routes
import { SiteRoutes } from './site.routes';

@NgModule({
  declarations: [
    SiteViewWrapperComponent,
    SiteHomeComponent
  ],
  imports: [
    CommonModule,
    SiteRoutes,
  ],
  providers: [],
  bootstrap: []
})
export class SiteModule { }
