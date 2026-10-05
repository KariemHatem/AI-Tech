import { Component, computed, signal } from '@angular/core';
import { InfoButton } from '../../shared/components/info-button/info-button';
import { TranslatePipe } from '@ngx-translate/core';
export interface caseStudyInfo {
  img: string;
  title: string;
  desc: string;
}

@Component({
  imports: [InfoButton, TranslatePipe],
  selector: 'app-case-study',
  styleUrl: './case-study.scss',
  templateUrl: './case-study.html',
})
export class CaseStudy {
  private readonly pageSize = 3;

  cStudiesData = signal<caseStudyInfo[]>([
    {
      img: 'assets/images/ai-assistant.jpg',
      title: 'CASE_STUDIES.AI_ASSISTANT.TITLE',
      desc: 'CASE_STUDIES.AI_ASSISTANT.DESC',
    },
    {
      img: 'assets/images/pred-analysis.jpg',
      title: 'CASE_STUDIES.PREDICTIVE.TITLE',
      desc: 'CASE_STUDIES.PREDICTIVE.DESC',
    },
    {
      img: 'assets/images/work-flow-automation.png',
      title: 'CASE_STUDIES.WORKFLOW.TITLE',
      desc: 'CASE_STUDIES.WORKFLOW.DESC',
    },
    {
      img: 'assets/images/automation.jpg',
      title: 'CASE_STUDIES.ROBOTIC.TITLE',
      desc: 'CASE_STUDIES.ROBOTIC.DESC',
    },
    {
      img: 'assets/images/ml.jpg',
      title: 'CASE_STUDIES.ML.TITLE',
      desc: 'CASE_STUDIES.ML.DESC',
    },
    {
      img: 'assets/images/c-support.jpg',
      title: 'CASE_STUDIES.CUSTOMER_SUPPORT.TITLE',
      desc: 'CASE_STUDIES.CUSTOMER_SUPPORT.DESC',
    },
    {
      img: 'assets/images/c-vision.jpg',
      title: 'CASE_STUDIES.COMPUTER_VISION.TITLE',
      desc: 'CASE_STUDIES.COMPUTER_VISION.DESC',
    },
    {
      img: 'assets/images/d-processing.jpg',
      title: 'CASE_STUDIES.DOC_PROCESSING.TITLE',
      desc: 'CASE_STUDIES.DOC_PROCESSING.DESC',
    },
    {
      img: 'assets/images/hr-platform.jpg',
      title: 'CASE_STUDIES.HR_PLATFORM.TITLE',
      desc: 'CASE_STUDIES.HR_PLATFORM.DESC',
    },
  ]);

  visibleCount = signal(this.pageSize);

  visibleData = computed(() => this.cStudiesData().slice(0, this.visibleCount()));

  hasMoreData = computed(() => this.visibleCount() < this.cStudiesData().length);

  loadMore() {
    this.visibleCount.update((count) => count + this.pageSize);
  }
}
