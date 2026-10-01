import { Component, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HeroBreadcrumb } from '../../shared/hero-breadcrumb/hero-breadcrumb';

@Component({
  imports: [HeroBreadcrumb],
  selector: 'app-privacy-policy',
  styleUrl: './privacy-policy.scss',
  templateUrl: './privacy-policy.html',
})
export class PrivacyPolicy {
  breadCrumbsItems = signal<MenuItem[]>([
    { label: 'Pages', icon: 'pi pi-folder' },
    { label: 'Privacy Policy', icon: 'pi pi-shield', routerLink: '/privacy-policy' },
  ]);
}
