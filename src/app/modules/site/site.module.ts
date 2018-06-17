import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// components
import * as components from './components';

@NgModule({
	declarations: [components.HomeView],
	imports: [CommonModule],
	providers: [],
})
export class SiteModule {}
