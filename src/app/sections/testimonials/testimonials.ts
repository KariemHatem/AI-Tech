import { Component, signal } from '@angular/core';
import { InfoButton } from '../../shared/components/info-button/info-button';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { Newsletter } from "../newsletter/newsletter";

export interface Testimonial {
  desc: string;
  name: string;
  img: string;
}

@Component({
  imports: [InfoButton, ButtonModule, CarouselModule, Newsletter],
  selector: 'app-testimonials',
  styleUrl: './testimonials.scss',
  templateUrl: './testimonials.html',
})
export class Testimonials {
  textimonails = signal<Testimonial[]>([
    {
      desc: 'AI.Tech helped us automate several of our daily processes and reduce manual work across our team. The solution was practical, scalable, and delivered exactly what we needed.',
      name: 'NovaTech Solutions',

      img: 'assets/images/testm-1.png',
    },
    {
      desc: 'The AI assistant has completely changed how our team accesses information. We can find answers faster, work more efficiently, and spend more time focusing on our customers.',
      name: 'BrightCore',
      img: 'assets/images/testm-2.png',
    },
    {
      desc: 'We were impressed by AI.Tech’s ability to understand our business challenges and turn them into a practical AI solution. Their team was professional and highly knowledgeable.',
      name: 'FutureLabs',

      img: 'assets/images/testm-3.png',
    },
    {
      desc: 'The predictive analytics solution gave our team better visibility into our data and helped us make more confident, data-driven business decisions.',
      name: 'DataSphere',

      img: 'assets/images/testm-4.png',
    },
    {
      desc: 'AI.Tech made automation simple for our team. Repetitive tasks can now be handled automatically, allowing our employees to focus on higher-value work.',
      name: 'Elevate Group',
      img: 'assets/images/testm-5.png',
    },
    {
      desc: 'From the first consultation to implementation, the AI.Tech team was easy to work with. They delivered a solution that fit naturally into our existing workflow.',
      name: 'Vertex Digital',
      img: 'assets/images/testm-6.png',
    },
    {
      desc: 'Their computer vision solution helped us improve our monitoring process and reduce the amount of manual inspection required by our team.',
      name: 'VisionWorks',
      img: 'assets/images/testm-7.png',
    },
    {
      desc: 'AI.Tech helped us identify where artificial intelligence could create real value for our business. Their strategic approach made a significant difference.',
      name: 'SmartEdge',
      img: 'assets/images/testm-8.png',
    },
  ]);
}
