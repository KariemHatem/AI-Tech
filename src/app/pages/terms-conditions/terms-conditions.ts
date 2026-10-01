import { Component, signal } from '@angular/core';
import { HeroBreadcrumb } from '../../shared/hero-breadcrumb/hero-breadcrumb';
import { MenuItem } from 'primeng/api';
@Component({
  imports: [HeroBreadcrumb],
  selector: 'app-terms-conditions',
  styleUrl: './terms-conditions.scss',
  templateUrl: './terms-conditions.html',
})
export class TermsConditions {
  breadCrumbsItems = signal<MenuItem[]>([
    { label: 'Pages', icon: 'pi pi-folder' },
    { label: 'Terms & Conditions', icon: 'pi pi-file-edit', routerLink: '/terms-conditions' },
  ]);
}
