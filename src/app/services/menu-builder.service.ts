export class MenuBuilder {
    buildNavbarMenu() {
      return [
        {
          slug: 'home',
          url: '/dashboard/home',
          icon: 'fa-home',
          title: 'Home',
        },
        {
          slug: 'work-examples',
          url: null,
          icon: 'fa-industry',
          title: 'Work',
          submenu: [
            {
              slug: 'add',
              url: '/dashboard/work-examples',
              icon: 'fa-plus',
              title: 'Add',
            },
            {
              slug: 'manage',
              url: '/dashboard/work-examples',
              icon: 'fa-cogs',
              title: 'Manage',
            },
          ],
        },
      ]
    }
}
