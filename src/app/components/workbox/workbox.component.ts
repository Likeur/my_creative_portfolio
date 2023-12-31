import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-workbox',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './workbox.component.html',

})
export class WorkboxComponent {

  projectLinks = [
    {
      id:1,
      title:"Rdc Tech Communities",
      description: "an open source project",
      route : "/work/rdctechcommunities",
      image : "../../../assets/img/rdctech.png"
    },
    {
      id:2,
      title:"free portfolio",
      description: "an open source project",
      route : "/work/freeportfolio",
      image : "../../../assets/img/freeportfolio.png"
    },
  ]
}
