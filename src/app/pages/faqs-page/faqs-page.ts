import { Component, inject, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HeroBreadcrumb } from '../../shared/hero-breadcrumb/hero-breadcrumb';
import { Faqs } from '../../sections/faqs/faqs';
import { TranslatePipe } from '@ngx-translate/core';
import { LangServices } from '../../services/languages/lang-services';

@Component({
  imports: [HeroBreadcrumb, Faqs, TranslatePipe],
  selector: 'app-faqs-page',
  styleUrl: './faqs-page.scss',
  templateUrl: './faqs-page.html',
})
export class FaqsPage {
  breadCrumbsItems = signal<MenuItem[]>([
    { label: 'PAGES.PAGES_LABEL', icon: 'pi pi-folder' },
    {
      label: 'PAGES.FAQS',
      icon: 'pi pi-question-circle',
      routerLink: '/faqs',
    },
  ]);
}
