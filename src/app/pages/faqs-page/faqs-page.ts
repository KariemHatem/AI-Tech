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
  lang = inject(LangServices);
  breadCrumbsItems = signal<MenuItem[]>([
    { label: this.lang.translate('PAGES.PAGES_LABEL'), icon: 'pi pi-folder' },
    {
      label: this.lang.translate('PAGES.FAQS'),
      icon: 'pi pi-question-circle',
      routerLink: '/faqs',
    },
  ]);
}
