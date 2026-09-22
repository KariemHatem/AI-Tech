import { Component, signal } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { InfoButton } from '../../shared/components/info-button/info-button';
import { Testimonials } from "../testimonials/testimonials";

export interface Faq {
  value: string;
  title: string;
  content: string;
}

@Component({
  imports: [AccordionModule, InfoButton, Testimonials],
  selector: 'app-faqs',
  styleUrl: './faqs.scss',
  templateUrl: './faqs.html',
})
export class Faqs {
  faqsData = signal<Faq[]>([
    {
      value: 'faq1',
      title: 'What is AI.Tech?',
      content:
        'AI.Tech is a leading provider of innovative AI solutions that help businesses leverage artificial intelligence to improve efficiency, automate processes, and make smarter decisions.',
    },
    {
      value: 'faq2',
      title: 'What services does AI.Tech offer?',
      content:
        'AI.Tech offers a wide range of AI-driven services, including intelligent automation, machine learning, predictive analytics, computer vision, AI assistants, and intelligent document processing.',
    },
    {
      value: 'faq3',
      title: 'Can AI.Tech build a custom AI solution?',
      content:
        'Yes, AI.Tech develops customized AI solutions tailored to your business goals, workflows, challenges, and specific technical requirements.',
    },
    {
      value: 'faq4',
      title: 'How can AI improve my business?',
      content:
        'AI can help your business automate repetitive tasks, reduce costs, improve productivity, analyze data, enhance customer experiences, and make faster and more informed decisions.',
    },
    {
      value: 'faq5',
      title: 'Can AI.Tech integrate with existing systems?',
      content:
        'Yes, our AI solutions can integrate with your existing websites, applications, APIs, databases, CRM systems, and other business platforms to create a seamless workflow.',
    },
    {
      value: 'faq6',
      title: 'Is my business data secure?',
      content:
        'Yes, data security is a key priority at AI.Tech. We follow appropriate security practices to help protect your business data and ensure your AI solutions are built with privacy and security in mind.',
    },
    {
      value: 'faq7',
      title: 'How long does it take to develop an AI solution?',
      content:
        'The development time depends on the complexity, features, integrations, and requirements of each project. After understanding your needs, our team can provide a clear development timeline.',
    },
    {
      value: 'faq8',
      title: 'How can I get started with AI.Tech?',
      content:
        'Getting started is simple. Contact our team and tell us about your business needs or challenges. We will discuss your requirements and recommend the AI solution that best fits your goals.',
    },
  ]);
}
