import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('./sections/about-us/about-us').then((m) => m.AboutUs),
  },
  {
    path: 'services',
    loadComponent: () => import('./sections/our-services/our-services').then((m) => m.OurServices),
  },
  {
    path: 'why-us',
    loadComponent: () => import('./sections/why-us/why-us').then((m) => m.WhyUs),
  },
  {
    path: 'case-study',
    loadComponent: () => import('./sections/case-study/case-study').then((m) => m.CaseStudy),
  },
  {
    path: 'faqs',
    loadComponent: () => import('./sections/faqs/faqs').then((m) => m.Faqs),
  },
  {
    path: 'testimonials',
    loadComponent: () => import('./sections/testimonials/testimonials').then((m) => m.Testimonials),
  },
];
