import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
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
    path: 'contact-us',
    loadComponent: () => import('./pages/contact-us/contact-us').then((m) => m.ContactUs),
    title: 'Contact Us',
  },
  {
    path: 'testimonials',
    loadComponent: () =>
      import('./pages/testimonials-page/testimonials-page').then((m) => m.TestimonialsPage),
    title: 'Testimonials',
  },

  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./pages/privacy-policy/privacy-policy').then((m) => m.PrivacyPolicy),
    title: 'Privacy Policy',
  },

  {
    path: 'terms-conditions',
    loadComponent: () =>
      import('./pages/terms-conditions/terms-conditions').then((m) => m.TermsConditions),
    title: 'Terms & Conditions',
  },

  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
    title: 'Not Found',
  },
];
