import { Component, input } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';

export interface HeroBreadcrumb {
  items: MenuItem[];
  title?: MenuItem;
}

@Component({
  imports: [BreadcrumbModule],
  selector: 'app-hero-breadcrumb',
  styleUrl: './hero-breadcrumb.scss',
  templateUrl: './hero-breadcrumb.html',
})
export class HeroBreadcrumb {
  heading = input<string>('');
  item = input.required<HeroBreadcrumb['items']>();
  home = input<HeroBreadcrumb['title']>({ icon: 'pi pi-home', routerLink: '/home' });
}
