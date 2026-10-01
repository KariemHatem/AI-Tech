import { Component, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HeroBreadcrumb } from '../../shared/hero-breadcrumb/hero-breadcrumb';
import { Faqs } from "../../sections/faqs/faqs";

@Component({
  imports: [HeroBreadcrumb, Faqs],
  selector: 'app-faqs-page',
  styleUrl: './faqs-page.scss',
  templateUrl: './faqs-page.html',
})
export class FaqsPage {
  breadCrumbsItems = signal<MenuItem[]>([
    { label: 'pages', icon: 'pi pi-folder' },
    { label: 'FAQs', icon: 'pi pi-question-circle', routerLink: '/faqs' },
  ]);
}
