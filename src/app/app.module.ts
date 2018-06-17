import './main.scss';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutes } from './app.routes';

import { SiteModule } from './modules/site/site.module';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, HttpClientModule, AppRoutes, SiteModule],
	providers: [],
	bootstrap: [AppComponent],
	entryComponents: [],
})
export class AppModule {}
