import { Component, computed, signal } from '@angular/core';
import { InfoButton } from '../../shared/components/info-button/info-button';
import { Faqs } from '../faqs/faqs';

export interface caseStudyInfo {
  img: string;
  title: string;
  desc: string;
}

@Component({
  imports: [InfoButton, Faqs],
  selector: 'app-case-study',
  styleUrl: './case-study.scss',
  templateUrl: './case-study.html',
})
export class CaseStudy {
  private readonly pageSize = 3;

  cStudiesData = signal<caseStudyInfo[]>([
    {
      img: 'assets/images/ai-assistant.jpg',
      title: 'Enterprise AI Assistant',
      desc: 'A secure AI assistant that helps teams access knowledge, automate tasks, and make faster, smarter decisions.',
    },
    {
      img: 'assets/images/pred-analysis.jpg',
      title: 'Predictive Analysis',
      desc: 'Advanced predictive models that identify trends, anticipate outcomes, and help businesses make proactive decisions.',
    },
    {
      img: 'assets/images/work-flow-automation.png',
      title: 'Workflow Automation',
      desc: 'AI-powered automation that streamlines repetitive processes, reduces manual work, and improves overall productivity.',
    },

    {
      img: 'assets/images/automation.jpg',
      title: 'Robotic Automation',
      desc: 'Intelligent automation that handles routine operations efficiently, helping businesses save time and reduce operational costs.',
    },
    {
      img: 'assets/images/ml.jpg',
      title: 'Machine Learning',
      desc: 'Custom machine learning solutions that transform business data into intelligent predictions, insights, and better decisions.',
    },
    {
      img: 'assets/images/c-support.jpg',
      title: 'AI Customer Support',
      desc: 'An intelligent support solution that automates customer inquiries and delivers fast, personalized assistance around the clock.',
    },

    {
      img: 'assets/images/c-vision.jpg',
      title: 'Computer Vision ',
      desc: 'AI-powered vision systems that analyze images and video to automate inspection, monitoring, and visual decision-making.',
    },
    {
      img: 'assets/images/d-processing.jpg',
      title: 'Intelligent  Processing',
      desc: 'AI that extracts, organizes, and processes information from documents, reducing manual data entry and improving accuracy.',
    },
    {
      img: 'assets/images/hr-platform.jpg',
      title: 'AI-Powered HR Platform',
      desc: 'An intelligent HR solution that streamlines recruitment, employee management, and everyday human resources workflows.',
    },
  ]);

  visibleCount = signal(this.pageSize);

  visibleData = computed(() => this.cStudiesData().slice(0, this.visibleCount()));

  hasMoreData = computed(() => this.visibleCount() < this.cStudiesData().length);

  loadMore() {
    this.visibleCount.update((count) => count + this.pageSize);
  }
}
