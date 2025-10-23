import { Component } from '@angular/core';

@Component({
  selector: 'app-visual-arts-page',
  imports: [],
  templateUrl: './visual-arts-page.html',
  styleUrl: './visual-arts-page.css'
})
export class VisualArtsPage {
  constructor() {
  }

  ngOnInit() {
    const block = document.createElement('div');
    const block2 = document.createElement('div');
    const img = document.createElement('img');
    const img2 = document.createElement('img');
    img.setAttribute('src', "images/header_column.png");
    img2.setAttribute('src', "images/header_column.png");
    let img_height = img.height;
    let img_width = img.width;
    block.style.cssText = `background-color: #fff; display: flex; width: ${img_width + 100}px; height: ${img_height + 100}px;`;
    block2.style.cssText = `background-color: #fff; display: flex; width: ${img_width + 100}px; height: ${img_height + 100}px;`;
    img.style.cssText = `width: ${img_width}px; height: ${img_height}px; margin: auto;`;
    img2.style.cssText = `width: ${img_width}px; height: ${img_height}px; margin: auto;`;
    block.appendChild(img);
    block2.appendChild(img2);
    document.getElementById('images_container')?.appendChild(block);
    document.getElementById('images_container')?.appendChild(block2);
  }
}
