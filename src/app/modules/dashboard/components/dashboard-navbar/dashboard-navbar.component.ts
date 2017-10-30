import { Component, OnInit } from '@angular/core';
import { MenuBuilder } from 'app/services/menu-builder.service';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
})
export class DashboardNavbarComponent implements OnInit {

  navbarMenu: Array<object>;
  menuVisible = false;
  activeSubmenu = -1;

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
      return {height: 'calc(100vh - 45px)'};
    }

    if (this.menuVisible && screen.width < 1024) {
      const menuLength = document.getElementsByClassName('menu-primary')[0].children.length
      const menuSize = `${menuLength * 45}px`
      return {height: `${menuSize}`};
    }
  }

  setActiveSubmenu(index) {
    if (index === this.activeSubmenu) {
      return this.activeSubmenu = -1;
    }
    this.activeSubmenu = index;
    console.log(this.activeSubmenu)
  }

  secondaryMenuStyle(index) {
    if (index === this.activeSubmenu) {
      let primaryMenu = document.getElementsByClassName('menu-item-primary')[index]
      let submenu = primaryMenu.getElementsByClassName('menu-secondary')[0]
      let submenuHeight = `${submenu.children.length * 45}px`;
      return {height: submenuHeight};
    } else {
      return {height: 0};
    }
  }

}
