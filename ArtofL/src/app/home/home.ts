import { Component } from '@angular/core';
import {PostCreate} from '../component/post-create/post-create';

@Component({
  selector: 'app-home',
  imports: [PostCreate],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {


  constructor() {
  }
}
