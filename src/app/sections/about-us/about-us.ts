import { Component, signal } from '@angular/core';
import { InfoButton } from '../../shared/components/info-button/info-button';
import { SecHeader } from '../../shared/components/sec-header/sec-header';
import { OurServices } from "../our-services/our-services";

interface aboutInfo {
  icon: string;
  info: string;
}

@Component({
  imports: [InfoButton, SecHeader, OurServices],
  selector: 'app-about-us',
  styleUrl: './about-us.scss',
  templateUrl: './about-us.html',
})
export class AboutUs {
  aboutUsData = signal<aboutInfo[]>([
    {
      icon: 'pi pi-trophy',
      info: ' Award Winning',
    },
    {
      icon: 'pi pi-users',
      info: ' Professional Staff',
    },
    {
      icon: 'pi pi-clock',
      info: ' 24/7 Support',
    },
    {
      icon: 'pi pi-dollar',
      info: ' Fair Prices',
    },
  ]);
}
