import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { gsap } from 'gsap';
@Component({
  selector: 'app-contactpage',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './contactpage.component.html',

})
export default class ContactpageComponent {
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
