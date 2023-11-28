import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { gsap } from 'gsap';
import { FooterComponent } from '../../components/footer/footer.component';
@Component({
  selector: 'app-contactpage',
  standalone: true,
  imports: [CommonModule, NavbarComponent,FooterComponent],
  templateUrl: './contactpage.component.html',

})
export default class ContactpageComponent implements OnInit {
  AnimeTextHome(){
    const tl = gsap.timeline();

    tl.fromTo('.text-home-2',{
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
