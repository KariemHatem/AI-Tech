import { Component, signal } from '@angular/core';
import { InfoButton } from '../../shared/components/info-button/info-button';
import { TranslatePipe } from '@ngx-translate/core';
export interface whyUsInfo {
  icon: string;
  info: string;
}

@Component({
  imports: [InfoButton, TranslatePipe],
  selector: 'app-why-us',
  styleUrl: './why-us.scss',
  templateUrl: './why-us.html',
})
export class WhyUs {
  whyUsData = signal<whyUsInfo[]>([
    {
      icon: 'pi pi-check-circle',
      info: 'WHY_US.PROVEN_RESULTS',
    },
    {
      icon: 'pi pi-trophy',
      info: 'WHY_US.AI_EXPERTISE',
    },
    {
      icon: 'pi pi-chart-line',
      info: 'WHY_US.SMART_SOLUTIONS',
    },
  ]);
}
