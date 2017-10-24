import { Component, OnInit } from '@angular/core';
import { MenuBuilder } from 'app/services/menu-builder.service';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
})
export class DashboardNavbarComponent implements OnInit {

  navbarMenu: Array<object>;

  constructor(
    private menuBuilder: MenuBuilder
  ) { }

  ngOnInit() {
    this.navbarMenu = this.menuBuilder.buildNavbarMenu();
  }

}
