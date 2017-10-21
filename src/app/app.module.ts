import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// modules
import { SiteModule } from 'app/modules/site/site.module';

// components
import { AppComponent } from './app.component';

// routes
import { AppRoutes } from 'app/app.routes';

// services
import { ApiService } from 'app/services/api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutes,
    SiteModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
