import { Component, signal } from '@angular/core';
import { InfoButton } from '../../shared/components/info-button/info-button';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TranslatePipe } from '@ngx-translate/core';
export interface Testimonial {
  desc: string;
  name: string;
  img: string;
}

@Component({
  imports: [InfoButton, ButtonModule, CarouselModule, TranslatePipe],
  selector: 'app-testimonials',
  styleUrl: './testimonials.scss',
  templateUrl: './testimonials.html',
})
export class Testimonials {
  textimonails = signal<Testimonial[]>([
    { desc: 'TESTIMONIALS.T1.DESC', name: 'NovaTech Solutions', img: 'assets/images/testm-1.png' },
    { desc: 'TESTIMONIALS.T2.DESC', name: 'BrightCore', img: 'assets/images/testm-2.png' },
    { desc: 'TESTIMONIALS.T3.DESC', name: 'FutureLabs', img: 'assets/images/testm-3.png' },
    { desc: 'TESTIMONIALS.T4.DESC', name: 'DataSphere', img: 'assets/images/testm-4.png' },
    { desc: 'TESTIMONIALS.T5.DESC', name: 'Elevate Group', img: 'assets/images/testm-5.png' },
    { desc: 'TESTIMONIALS.T6.DESC', name: 'Vertex Digital', img: 'assets/images/testm-6.png' },
    { desc: 'TESTIMONIALS.T7.DESC', name: 'VisionWorks', img: 'assets/images/testm-7.png' },
    { desc: 'TESTIMONIALS.T8.DESC', name: 'SmartEdge', img: 'assets/images/testm-8.png' },
  ]);
}
