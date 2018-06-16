import './main.scss';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SiteModule } from './modules/site/site.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';

export function tokenGetter() {
	return localStorage.getItem('token');
}

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutes,
		SiteModule,
		DashboardModule,
	],
	providers: [],
	bootstrap: [AppComponent],
	entryComponents: [],
})
export class AppModule {}
