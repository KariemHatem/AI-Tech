import { Component, signal } from '@angular/core';
import { InfoButton } from '../../shared/components/info-button/info-button';
import { SecHeader } from '../../shared/components/sec-header/sec-header';
import { TranslatePipe } from '@ngx-translate/core';
interface aboutInfo {
  icon: string;
  info: string;
}

@Component({
  imports: [InfoButton, SecHeader, TranslatePipe],
  selector: 'app-about-us',
  styleUrl: './about-us.scss',
  templateUrl: './about-us.html',
})
export class AboutUs {
  aboutUsData = signal<aboutInfo[]>([
    {
      icon: 'pi pi-trophy',
      info: 'ABOUT.AWARD_WINNING',
    },
    {
      icon: 'pi pi-users',
      info: 'ABOUT.PROFESSIONAL_STAFF',
    },
    {
      icon: 'pi pi-clock',
      info: 'ABOUT.SUPPORT',
    },
    {
      icon: 'pi pi-dollar',
      info: 'ABOUT.FAIR_PRICES',
    },
  ]);
}
