import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules
import { SiteModule } from 'app/modules/site/site.module';

// components
import { AppComponent } from './app.component';

// routes
import { AppRoutes } from 'app/app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    SiteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
