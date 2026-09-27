import { Component, input } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InfoButton } from '../components/info-button/info-button';
import { MenuItem } from 'primeng/api';

export interface HeroBreadcrumb {
  items: MenuItem[];
  title?: MenuItem;
}

@Component({
  imports: [BreadcrumbModule, InfoButton],
  selector: 'app-hero-breadcrumb',
  styleUrl: './hero-breadcrumb.scss',
  templateUrl: './hero-breadcrumb.html',
})
export class HeroBreadcrumb {
  item = input.required<HeroBreadcrumb['items']>();
  home = input<HeroBreadcrumb['title']>({ icon: 'pi pi-home', routerLink: '/home' });
}
