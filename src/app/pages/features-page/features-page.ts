import { Component, inject, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HeroBreadcrumb } from '../../shared/hero-breadcrumb/hero-breadcrumb';
import { WhyUs } from '../../sections/why-us/why-us';
import { Newsletter } from '../../sections/newsletter/newsletter';
import { TranslatePipe } from '@ngx-translate/core';
import { LangServices } from '../../services/languages/lang-services';
@Component({
  imports: [HeroBreadcrumb, WhyUs, Newsletter, TranslatePipe],
  selector: 'app-features-page',
  styleUrl: './features-page.scss',
  templateUrl: './features-page.html',
})
export class FeaturesPage {
  breadCrumbsItems = signal<MenuItem[]>([
    { label: 'PAGES.PAGES_LABEL', icon: 'pi pi-folder' },
    {
      label: 'PAGES.FEATURES',
      icon: 'pi pi-briefcase',
      routerLink: '/why-us',
    },
  ]);
}
