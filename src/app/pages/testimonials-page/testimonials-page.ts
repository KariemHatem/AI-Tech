import { Component, signal } from '@angular/core';
import { HeroBreadcrumb } from '../../shared/hero-breadcrumb/hero-breadcrumb';
import { MenuItem } from 'primeng/api';
import { Testimonials } from "../../sections/testimonials/testimonials";
@Component({
  imports: [HeroBreadcrumb, Testimonials],
  selector: 'app-testimonials-page',
  styleUrl: './testimonials-page.scss',
  templateUrl: './testimonials-page.html',
})
export class TestimonialsPage {
  breadCrumbsItems = signal<MenuItem[]>([
    { label: 'pages', icon: 'pi pi-folder' },
    { label: 'Testimonials', icon: 'pi pi-comments', routerLink: '/testimonials' },
  ]);
}
