import { Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  { path: 'dashboard-component', component: DashboardComponent },
  { path: 'about-component', component: AboutComponent },
  { path: 'home-component', component: HomeComponent },
];
