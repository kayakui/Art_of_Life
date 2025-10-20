import { Component } from '@angular/core';
import {PostCreate} from '../../component/post-create/post-create';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {VisualArtsPage} from '../../component/visual-arts-page/visual-arts-page';
import {LiteraryArtsPage} from '../../component/literary-arts-page/literary-arts-page';
import {PerformingArtsPage} from '../../component/performing-arts-page/performing-arts-page';
import {AllArtsPage} from '../../component/all-arts-page/all-arts-page';

@Component({
  selector: 'app-home',
  imports: [VisualArtsPage, LiteraryArtsPage, PerformingArtsPage, AllArtsPage],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor() {
  }

  showVisArt (){
    const block = document.getElementById("visual_art__block") || console.log("NO ELEMENT FOUND");
    if (block) {
      if (block.style.display == "none") {
        block.style.display = "block";
      } else {
        block.style.display = "none";
      }
    }
  }
}
