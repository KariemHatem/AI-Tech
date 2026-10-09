import { Component, signal } from '@angular/core';
import { HeroBreadcrumb } from '../../shared/hero-breadcrumb/hero-breadcrumb';
import { MenuItem } from 'primeng/api';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  imports: [HeroBreadcrumb, TranslatePipe],
  selector: 'app-terms-conditions',
  styleUrl: './terms-conditions.scss',
  templateUrl: './terms-conditions.html',
})
export class TermsConditions {
  breadCrumbsItems = signal<MenuItem[]>([
    { label: 'PAGES.PAGES_LABEL', icon: 'pi pi-folder' },
    { label: 'PAGES.TERMS_CONDITIONS', icon: 'pi pi-file-edit', routerLink: '/terms-conditions' },
  ]);
}
