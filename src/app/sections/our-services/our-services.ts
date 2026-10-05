import { Component, signal } from '@angular/core';
import { InfoButton } from '../../shared/components/info-button/info-button';
import { SecHeader } from '../../shared/components/sec-header/sec-header';
import { TranslatePipe } from '@ngx-translate/core';
interface ourServicesInfo {
  icon: string;
  titile: string;
  desc: string;
}

@Component({
  imports: [InfoButton, SecHeader, TranslatePipe],
  selector: 'app-our-services',
  styleUrl: './our-services.scss',
  templateUrl: './our-services.html',
})
export class OurServices {
  ourServicesItems = signal<ourServicesInfo[]>([
    {
      icon: 'assets/images/Roboot.png',
      titile: 'SERVICES.ROBOTIC.TITLE',
      desc: 'SERVICES.ROBOTIC.DESC',
    },
    {
      icon: 'assets/images/Brain.png',
      titile: 'SERVICES.PREDICTIVE.TITLE',
      desc: 'SERVICES.PREDICTIVE.DESC',
    },
    {
      icon: 'assets/images/Educate.png',
      titile: 'SERVICES.EDUCATION.TITLE',
      desc: 'SERVICES.EDUCATION.DESC',
    },
    {
      icon: 'assets/images/Machine-Learning.png',
      titile: 'SERVICES.MACHINE_LEARNING.TITLE',
      desc: 'SERVICES.MACHINE_LEARNING.DESC',
    },
  ]);
}
