import { Component, signal } from '@angular/core';
import { Home } from './pages/home/home';
import { Header } from './component/header/header';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {Footer} from './component/footer/footer';
import {LeftSideBar} from './component/side_bars/left-side-bar/left-side-bar';
import {RightSideBar} from './component/side_bars/right-side-bar/right-side-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header, RouterLink, RouterLinkActive, Footer, LeftSideBar, RightSideBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = "route";
}
