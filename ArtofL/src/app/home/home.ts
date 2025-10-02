import { Component } from '@angular/core';
import {ImageUpload} from '../component/image-upload/image-upload';

@Component({
  selector: 'app-home',
  imports: [ImageUpload],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {


  constructor() {
  }
}
