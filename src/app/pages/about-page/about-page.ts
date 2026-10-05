import { Component, inject, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HeroBreadcrumb } from '../../shared/hero-breadcrumb/hero-breadcrumb';
import { AboutUs } from '../../sections/about-us/about-us';
import { TranslatePipe } from '@ngx-translate/core';
import { LangServices } from '../../services/languages/lang-services';
@Component({
  imports: [HeroBreadcrumb, AboutUs, TranslatePipe],
  selector: 'app-about-page',
  styleUrl: './about-page.scss',
  templateUrl: './about-page.html',
})
export class AboutPage {
  private lang = inject(LangServices);
  breadCrumbsItems = signal<MenuItem[]>([
    {
      label: this.lang.translate('ABOUT_PAGE.BREADCRUMB'),
      icon: 'pi pi-info-circle',
      routerLink: '/about',
    },
  ]);
}
