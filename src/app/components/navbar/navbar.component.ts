import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  navLinks = [
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
  AnimateHeight() {
    gsap.fromTo('#navbar',{
      scaleY: '0',
      opacity: 0,
      transformOrigin: 'top'
    },{
      scaleY: 1,
      duration: 1,
      opacity: 1
    })
  }
  ngOnInit() {
    this.AnimateHeight();
  }

  toggleMenu(){
    const Nav = document.querySelector('#navigation')!
    const barUn = document.querySelector('#barUn')!
    const barDeux = document.querySelector('#barDeux')!

    Nav.classList.toggle('h-screen')
    barUn.classList.toggle('rotate-45')
    barDeux.classList.toggle('-rotate-45')
    barDeux.classList.toggle('mt-2')
  }
}
