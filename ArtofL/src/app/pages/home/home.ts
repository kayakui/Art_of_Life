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

  showArtBlock (index: number){
    const blocks = document.querySelectorAll<HTMLElement>('.art_block') || "NONE FOUND";
    blocks.forEach((block, i) => {
      if (index === i) {
        block.style.display = 'block';
      } else {
        block.style.display = 'none';
      }
    })


  }
}
