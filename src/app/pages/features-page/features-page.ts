import { Component, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HeroBreadcrumb } from '../../shared/hero-breadcrumb/hero-breadcrumb';
import { WhyUs } from "../../sections/why-us/why-us";
import { Newsletter } from "../../sections/newsletter/newsletter";
@Component({
  imports: [HeroBreadcrumb, WhyUs, Newsletter],
  selector: 'app-features-page',
  styleUrl: './features-page.scss',
  templateUrl: './features-page.html',
})
export class FeaturesPage {
  breadCrumbsItems = signal<MenuItem[]>([
    { label: 'pages', icon: 'pi pi-folder' },
    { label: 'Features', icon: 'pi pi-briefcase', routerLink: '/why-us' },
  ]);
}
