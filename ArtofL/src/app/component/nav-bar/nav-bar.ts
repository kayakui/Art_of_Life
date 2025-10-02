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
      nav.style.display = "block";
    }
  }

  closeNavBar (){
    const nav = document.getElementById("nav_bar") || console.log("NO ELEMENT FOUND");
    if (nav) {
      nav.style.display = "none";
    }
  }

}
