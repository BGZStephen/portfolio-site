import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
	selector: 'app-dashboard-login',
	template: require('./dashboard-login.component.html'),
})
export class DashboardLoginComponent implements OnInit {
	constructor(private authService: AuthService) {}

	ngOnInit() {}

	onLogin(user) {
		this.authService.authenticate(user);
		console.log(user);
	}
}
