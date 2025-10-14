import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {AboutPage} from './pages/about-page/about-page';



export const routes: Routes = [
  {path: '', component: Home},
  {path: 'about', component: AboutPage},
];
