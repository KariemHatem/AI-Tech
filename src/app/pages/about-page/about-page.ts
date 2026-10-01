import { Component, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HeroBreadcrumb } from '../../shared/hero-breadcrumb/hero-breadcrumb';
import { AboutUs } from '../../sections/about-us/about-us';

@Component({
  imports: [HeroBreadcrumb, AboutUs],
  selector: 'app-about-page',
  styleUrl: './about-page.scss',
  templateUrl: './about-page.html',
})
export class AboutPage {
  breadCrumbsItems = signal<MenuItem[]>([
    { label: 'About US', icon: 'pi pi-info-circle', routerLink: '/about' },
  ]);
}
