import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Home',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about-page/about-page').then((m) => m.AboutPage),
    title: 'About',
  },
  {
    path: 'services',
    loadComponent: () => import('./sections/our-services/our-services').then((m) => m.OurServices),
    title: 'Services',
  },
  {
    path: 'why-us',
    loadComponent: () => import('./sections/why-us/why-us').then((m) => m.WhyUs),
    title: 'Why Us',
  },
  {
    path: 'case-study',
    loadComponent: () => import('./sections/case-study/case-study').then((m) => m.CaseStudy),
    title: 'Case Study',
  },
  {
    path: 'faqs',
    loadComponent: () => import('./sections/faqs/faqs').then((m) => m.Faqs),
    title: 'FAQs',
  },
  {
    path: 'testimonials',
    loadComponent: () =>
      import('./pages/testimonials-page/testimonials-page').then((m) => m.TestimonialsPage),
    title: 'Testimonials',
  },
];
