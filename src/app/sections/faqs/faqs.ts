import { Component, signal } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { InfoButton } from '../../shared/components/info-button/info-button';
import { TranslatePipe } from '@ngx-translate/core';
export interface Faq {
  value: string;
  title: string;
  content: string;
}

@Component({
  imports: [AccordionModule, InfoButton, TranslatePipe],
  selector: 'app-faqs',
  styleUrl: './faqs.scss',
  templateUrl: './faqs.html',
})
export class Faqs {
  faqsData = signal<Faq[]>([
    { value: 'faq1', title: 'FAQ.Q1.TITLE', content: 'FAQ.Q1.CONTENT' },
    { value: 'faq2', title: 'FAQ.Q2.TITLE', content: 'FAQ.Q2.CONTENT' },
    { value: 'faq3', title: 'FAQ.Q3.TITLE', content: 'FAQ.Q3.CONTENT' },
    { value: 'faq4', title: 'FAQ.Q4.TITLE', content: 'FAQ.Q4.CONTENT' },
    { value: 'faq5', title: 'FAQ.Q5.TITLE', content: 'FAQ.Q5.CONTENT' },
    { value: 'faq6', title: 'FAQ.Q6.TITLE', content: 'FAQ.Q6.CONTENT' },
    { value: 'faq7', title: 'FAQ.Q7.TITLE', content: 'FAQ.Q7.CONTENT' },
    { value: 'faq8', title: 'FAQ.Q8.TITLE', content: 'FAQ.Q8.CONTENT' },
  ]);
}
