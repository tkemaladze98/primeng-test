import { Routes } from '@angular/router';
import { ContactComponent } from './main/contact/contact.component';
import { HomeComponent } from './main/home/home.component';
import { notFoundComponent } from './main/404/404.component';
import { PricingComponent } from './main/pricing/pricing.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'pricing',
    component: PricingComponent,
  },
  { path: '**', component: notFoundComponent },
];
