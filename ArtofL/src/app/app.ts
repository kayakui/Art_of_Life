import { Component, signal } from '@angular/core';
import { Home } from './home/home';
import { Header } from './component/header/header';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {Footer} from './component/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header, RouterLink, RouterLinkActive, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = "route";
}
