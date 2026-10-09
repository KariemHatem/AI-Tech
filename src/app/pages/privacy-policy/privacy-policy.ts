import { Component, inject, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HeroBreadcrumb } from '../../shared/hero-breadcrumb/hero-breadcrumb';
import { TranslatePipe } from '@ngx-translate/core';
import { LangServices } from '../../services/languages/lang-services';

@Component({
  imports: [HeroBreadcrumb, TranslatePipe],
  selector: 'app-privacy-policy',
  styleUrl: './privacy-policy.scss',
  templateUrl: './privacy-policy.html',
})
export class PrivacyPolicy {
  private lang = inject(LangServices);

  breadCrumbsItems = signal<MenuItem[]>([
    { label: 'PAGES.PAGES_LABEL', icon: 'pi pi-folder' },
    {
      label: 'PAGES.PRIVACY_POLICY',
      icon: 'pi pi-shield',
      routerLink: '/privacy-policy',
    },
  ]);
}
