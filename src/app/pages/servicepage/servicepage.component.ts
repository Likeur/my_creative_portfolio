import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-servicepage',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './servicepage.component.html',
})
export default class ServicepageComponent {

}
