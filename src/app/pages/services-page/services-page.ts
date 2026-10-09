import { Component, inject, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HeroBreadcrumb } from '../../shared/hero-breadcrumb/hero-breadcrumb';
import { OurServices } from '../../sections/our-services/our-services';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [HeroBreadcrumb, OurServices, TranslatePipe],
  selector: 'app-services-page',
  styleUrl: './services-page.scss',
  templateUrl: './services-page.html',
})
export class ServicesPage {
  breadCrumbsItems = signal<MenuItem[]>([
    {
      label: 'PAGES.SERVICES',
      icon: 'pi pi-briefcase',
      routerLink: '/services',
    },
  ]);
}
