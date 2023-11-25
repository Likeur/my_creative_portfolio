import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';
@Component({
  selector: 'app-servicepage',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterModule],
  templateUrl: './servicepage.component.html',
})
export default class ServicepageComponent implements OnInit {
  AnimeTextHome(){
    const tl = gsap.timeline();

    tl.fromTo('.text-home-3',{
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
