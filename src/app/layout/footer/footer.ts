import { Component, signal } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';

@Component({
  imports: [BadgeModule, DividerModule],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  getInTouch = signal([
    {
      icon: 'pi pi-map-marker',
      info: '123 Street,Egypt, Cairo',
    },
    {
      icon: 'pi pi-phone',
      info: '+20123456789',
    },
    {
      icon: 'pi pi-envelope',
      info: 'aitech@gmail.com',
    },
  ]);

  socials = signal([
    {
      icon: 'pi pi-facebook',
    },
    {
      icon: 'pi pi-twitter',
    },
    {
      icon: 'pi pi-instagram',
    },
    {
      icon: 'pi pi-linkedin',
    },
    {
      icon: 'pi pi-youtube',
    },
  ]);

  popularLinks = signal([
    {
      title: 'Home',
      link: '#',
    },
    {
      title: 'About',
      link: '#',
    },
    {
      title: 'Services',
      link: '#',
    },
    {
      title: 'Contact',
      link: '#',
    },
  ]);

  ourService = signal([
    {
      title: 'AI & Machine Learning',
    },
    {
      title: 'Generative AI',
    },
    {
      title: 'AI Automation',
    },
    {
      title: 'Predictive Analytics',
    },
    {
      title: 'Computer Vision',
    },
  ]);
}
