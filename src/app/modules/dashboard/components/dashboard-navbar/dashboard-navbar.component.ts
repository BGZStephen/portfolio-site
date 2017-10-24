import { Component, OnInit } from '@angular/core';
import { MenuBuilder } from 'app/services/menu-builder.service';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
})
export class DashboardNavbarComponent implements OnInit {

  navbarMenu: Array<object>;
  menuVisible = false;

  constructor(
    private menuBuilder: MenuBuilder
  ) { }

  ngOnInit() {
    this.navbarMenu = this.menuBuilder.buildNavbarMenu();
  }

  toggleMenuVisibility() {
    this.menuVisible = !this.menuVisible;
  }

  primaryMenuStyle() {
    if (!this.menuVisible && screen.width > 1024) {
      this.menuVisible = true;
    }

    if (!this.menuVisible) {
      return {height: 0};
    }

    if (this.menuVisible && screen.width > 1024) {
      return {height: 'auto'};
    }

    if (this.menuVisible && screen.width < 1024) {
      const menuLength = document.getElementsByClassName('menu-primary')[0].children.length
      const menuSize = `${menuLength * 45}px`
      return {height: `${menuSize}`};
    }
  }

  secondaryMenuStyle() {
    return;
  }

}
