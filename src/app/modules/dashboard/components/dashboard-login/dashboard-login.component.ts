import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dashboard-login',
  templateUrl: './dashboard-login.component.html',
})
export class DashboardLoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  onLogin(user) {
    this.authService.authenticate(user)
    console.log(user);
  }

}
