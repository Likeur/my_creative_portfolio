import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-contactpage',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './contactpage.component.html',

})
export default class ContactpageComponent {

}
