import { Component, signal } from '@angular/core';
import { InfoButton } from '../../shared/components/info-button/info-button';
import { CaseStudy } from "../case-study/case-study";

export interface whyUsInfo {
  icon: string;
  info: string;
}

@Component({
  imports: [InfoButton, CaseStudy],
  selector: 'app-why-us',
  styleUrl: './why-us.scss',
  templateUrl: './why-us.html',
})
export class WhyUs {
  whyUsData = signal<whyUsInfo[]>([
    {
      icon: 'pi pi-check-circle',
      info: ' Proven Results',
    },
    {
      icon: 'pi pi-trophy',
      info: ' AI Expertise',
    },
    {
      icon: 'pi pi-chart-line',
      info: ' Smart Solutions',
    },
  ]);
}
