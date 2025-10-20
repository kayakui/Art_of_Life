import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {AboutPage} from './pages/about-page/about-page';
import {VisualArtsPage} from './component/visual-arts-page/visual-arts-page';
import {LiteraryArtsPage} from './component/literary-arts-page/literary-arts-page';

export const routes: Routes = [
  {path: '', component: Home, pathMatch: 'full'},
  {path: 'about', component: AboutPage},
];
