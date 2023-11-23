import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-workpage',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './workpage.component.html',
  styles: ``
})
export default class WorkpageComponent {

}
