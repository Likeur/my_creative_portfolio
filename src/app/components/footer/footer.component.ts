import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,  
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',

})
export class FooterComponent {
  footerLinks = [
    {
      id:1,
      title : 'Work',
      route: '/work'
    },
    {
      id:2,
      title : 'Services',
      route: '/service'
    },
    {
      id:3,
      title : 'Contact',
      route: '/contact'
    }
  ]
}
