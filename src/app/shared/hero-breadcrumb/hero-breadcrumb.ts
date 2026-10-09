import { Component, computed, inject, input } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { LangServices } from '../../services/languages/lang-services';
import { toSignal } from '@angular/core/rxjs-interop';
import { startWith, pipe } from 'rxjs';

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
  private languageService = inject(LangServices);

  heading = input<string>('');
  item = input.required<HeroBreadcrumb['items']>();
  home = input<HeroBreadcrumb['title']>({ icon: 'pi pi-home', routerLink: '/home' });

  private langChange = toSignal(this.languageService.langChange$.pipe(startWith(null)));

  translatedItems = computed<MenuItem[]>(() => {
    this.langChange();
    return this.item().map((item) => ({
      ...item,
      label: item.label ? this.languageService.translate(item.label) || item.label : item.label,
    }));
  });
}
