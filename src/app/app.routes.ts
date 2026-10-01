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
    loadComponent: () => import('./pages/services-page/services-page').then((m) => m.ServicesPage),
    title: 'Services',
  },
  {
    path: 'why-us',
    loadComponent: () => import('./pages/features-page/features-page').then((m) => m.FeaturesPage),
    title: 'Why Us',
  },
  {
    path: 'case-study',
    loadComponent: () => import('./pages/projects-page/projects-page').then((m) => m.ProjectsPage),
    title: 'Case Study',
  },
  {
    path: 'faqs',
    loadComponent: () => import('./pages/faqs-page/faqs-page').then((m) => m.FaqsPage),
    title: 'FAQs',
  },
  {
    path: 'testimonials',
    loadComponent: () =>
      import('./pages/testimonials-page/testimonials-page').then((m) => m.TestimonialsPage),
    title: 'Testimonials',
  },

  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
    title: 'Not Found',
  },
];
