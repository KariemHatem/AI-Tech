import { Component, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HeroBreadcrumb } from '../../shared/hero-breadcrumb/hero-breadcrumb';
import { CaseStudy } from "../../sections/case-study/case-study";
@Component({
  imports: [HeroBreadcrumb, CaseStudy],
  selector: 'app-projects-page',
  styleUrl: './projects-page.scss',
  templateUrl: './projects-page.html',
})
export class ProjectsPage {
  breadCrumbsItems = signal<MenuItem[]>([
    { label: 'Projects', icon: 'pi pi-briefcase', routerLink: '/case-study' },
  ]);
}
