import { Component, inject, signal } from '@angular/core';
import { HeroBreadcrumb } from '../../shared/hero-breadcrumb/hero-breadcrumb';
import { MenuItem } from 'primeng/api';
import { TranslatePipe } from '@ngx-translate/core';
import { Testimonials } from '../../sections/testimonials/testimonials';
import { LangServices } from '../../services/languages/lang-services';
@Component({
  imports: [HeroBreadcrumb, Testimonials, TranslatePipe],
  selector: 'app-testimonials-page',
  styleUrl: './testimonials-page.scss',
  templateUrl: './testimonials-page.html',
})
export class TestimonialsPage {
  lang = inject(LangServices);
  breadCrumbsItems = signal<MenuItem[]>([
    { label: this.lang.translate('PAGES.PAGES_LABEL'), icon: 'pi pi-folder' },
    {
      label: this.lang.translate('PAGES.TESTIMONIALS'),
      icon: 'pi pi-comments',
      routerLink: '/testimonials',
    },
  ]);
}
