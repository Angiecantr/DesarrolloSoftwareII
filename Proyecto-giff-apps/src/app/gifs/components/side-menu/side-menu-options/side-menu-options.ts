import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOption{
  label: string;
  sublabel: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'gif-side-menu-options',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-menu-options.html',
  styles: ``
})
export class SideMenuOptions {
  menuOptions: MenuOption [] =[
    {
      label: 'Trendind',
      sublabel: 'Gifs Populares',
      icon: 'fa-solid fa-chart-line',
      route: '/dashboard/trending'
    },
    {
      label: 'Search',
      sublabel: 'Buscador figs',
      icon: 'fa-solid fa-magnifying-glass',
      route: '/dashboard/search'
    }
  ]
}
