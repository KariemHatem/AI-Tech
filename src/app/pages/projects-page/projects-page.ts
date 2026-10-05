import { Component, inject, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HeroBreadcrumb } from '../../shared/hero-breadcrumb/hero-breadcrumb';
import { CaseStudy } from '../../sections/case-study/case-study';
import { TranslatePipe } from '@ngx-translate/core';
import { LangServices } from '../../services/languages/lang-services';
@Component({
  imports: [HeroBreadcrumb, CaseStudy, TranslatePipe],
  selector: 'app-projects-page',
  styleUrl: './projects-page.scss',
  templateUrl: './projects-page.html',
})
export class ProjectsPage {
  lang = inject(LangServices);

  breadCrumbsItems = signal<MenuItem[]>([
    {
      label: this.lang.translate('PAGES.PROJECTS'),
      icon: 'pi pi-briefcase',
      routerLink: '/case-study',
    },
  ]);
}
