import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import {PostCreate} from '../post-create/post-create';

@Component({
  selector: 'app-header',
  imports: [NavBar, PostCreate],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
