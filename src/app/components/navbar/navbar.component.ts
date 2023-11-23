import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  navLinks = [
    {
      id:1,
      title : 'Work',
      route: '/work'
    },
    {
      id:2,
      title : 'services',
      route: '/service'
    },
    {
      id:3,
      title : 'Contact',
      route: '/contact'
    }
  ]
}
