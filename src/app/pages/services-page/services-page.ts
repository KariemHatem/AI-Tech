import { Component, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HeroBreadcrumb } from '../../shared/hero-breadcrumb/hero-breadcrumb';
import { OurServices } from "../../sections/our-services/our-services";

@Component({
  imports: [HeroBreadcrumb, OurServices],
  selector: 'app-services-page',
  styleUrl: './services-page.scss',
  templateUrl: './services-page.html',
})
export class ServicesPage {
  breadCrumbsItems = signal<MenuItem[]>([
    { label: 'Services', icon: 'pi pi-briefcase', routerLink: '/services' },
  ]);
}
