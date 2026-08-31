import { Component, signal } from '@angular/core';
import { InfoButton } from '../../shared/components/info-button/info-button';
import { SecHeader } from '../../shared/components/sec-header/sec-header';
import { WhyUs } from "../why-us/why-us";

interface ourServicesInfo {
  icon: string;
  titile: string;
  desc: string;
}

@Component({
  imports: [InfoButton, SecHeader, WhyUs],
  selector: 'app-our-services',
  styleUrl: './our-services.scss',
  templateUrl: './our-services.html',
})
export class OurServices {
  ourServicesItems = signal<ourServicesInfo[]>([
    {
      icon: 'assets/images/Roboot.png',
      titile: 'Robotic Automation',
      desc: 'Our Robotic Process Automation(RPA) solutions streamline repetitive tasks with speed and accuracy.',
    },
    {
      icon: 'assets/images/Brain.png',
      titile: 'Predictive Analysis',
      desc: 'With our Predictive Analysis solutions, we transform data into foresight. Using advanced algorithms and AI models.',
    },
    {
      icon: 'assets/images/Educate.png',
      titile: 'Education & Science',
      desc: 'At AI.Tech, we empower education and scientific research with AI-driven tools. From personalized learning experiences.',
    },
    {
      icon: 'assets/images/Machine-Learning.png',
      titile: 'Machine learning',
      desc: 'Our Machine Learning solutions turn raw data into intelligent insights. By building predictive models and adaptive systems.',
    },
  ]);
}
