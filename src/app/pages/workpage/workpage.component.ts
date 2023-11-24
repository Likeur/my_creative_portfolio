import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { gsap } from 'gsap';
@Component({
  selector: 'app-workpage',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './workpage.component.html',

})
export default class WorkpageComponent {
  AnimeTextHome(){
    const tl = gsap.timeline();

    tl.fromTo('.text-home',{
      opacity: 0,
      y: 50
    },{
      opacity: 1,
      duration: 1,
      y: 0
    })
  }

  ngOnInit(){
    this.AnimeTextHome();
  }
}
