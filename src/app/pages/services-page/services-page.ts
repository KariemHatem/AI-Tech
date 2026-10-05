import { Component, inject, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HeroBreadcrumb } from '../../shared/hero-breadcrumb/hero-breadcrumb';
import { OurServices } from '../../sections/our-services/our-services';
import { TranslatePipe } from '@ngx-translate/core';
import { LangServices } from '../../services/languages/lang-services';
@Component({
  imports: [HeroBreadcrumb, OurServices, TranslatePipe],
  selector: 'app-services-page',
  styleUrl: './services-page.scss',
  templateUrl: './services-page.html',
})
export class ServicesPage {
  lang = inject(LangServices);

  breadCrumbsItems = signal<MenuItem[]>([
    {
      label: this.lang.translate('PAGES.SERVICES'),
      icon: 'pi pi-briefcase',
      routerLink: '/services',
    },
  ]);
}
