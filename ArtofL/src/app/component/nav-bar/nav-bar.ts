import { Component } from '@angular/core';
// add router comp

@Component({
  selector: 'app-nav-bar',
  imports: [],
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
