import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { QueryComponent } from './components/query/query.component';
import { HeroListPageComponent } from './components/hero-list-page/hero-list-page.component';

export const routes: Routes = [
  {
    path: 'query',
    component: QueryComponent,
    data: { animation: 'queryingPage' },
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'HomePage' },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'AboutPage' },
  },
  {
    path: 'heroes',
    component: HeroListPageComponent,
    data: { animation: 'HeroListPageComponent' },
  },
];
