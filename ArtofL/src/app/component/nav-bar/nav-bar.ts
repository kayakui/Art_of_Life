import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
// add router comp

@Component({
  selector: 'app-nav-bar',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {

  constructor() {}

  showNavBar (){
    const nav = document.getElementById("nav_bar") || console.log("NO ELEMENT FOUND");
    if (nav) {
      if (nav.style.display == "none") {
        nav.style.display = "block";
      } else {
        nav.style.display = "none";
      }

    }
  }

  closeNavBar (){
    const nav = document.getElementById("nav_bar") || console.log("NO ELEMENT FOUND");
    if (nav) {
      nav.style.display = "none";
    }
  }

}


