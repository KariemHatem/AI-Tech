import { Component, signal } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [BadgeModule, DividerModule, RouterLink, TranslatePipe],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  getInTouch = signal([
    { icon: 'pi pi-map-marker', info: 'FOOTER.ADDRESS' },
    { icon: 'pi pi-phone', info: '+20123456789' },
    { icon: 'pi pi-envelope', info: 'aitech@gmail.com' },
  ]);

  socials = signal([
    { icon: 'pi pi-facebook' },
    { icon: 'pi pi-twitter' },
    { icon: 'pi pi-instagram' },
    { icon: 'pi pi-linkedin' },
    { icon: 'pi pi-youtube' },
  ]);

  popularLinks = signal([
    { title: 'FOOTER.LINKS.HOME', link: 'home' },
    { title: 'FOOTER.LINKS.ABOUT', link: 'about' },
    { title: 'FOOTER.LINKS.SERVICES', link: 'services' },
    { title: 'FOOTER.LINKS.CONTACT', link: 'contact-us' },
    { title: 'FOOTER.LINKS.PRIVACY', link: 'privacy-policy' },
    { title: 'FOOTER.LINKS.TERMS', link: 'terms-conditions' },
  ]);

  ourService = signal([
    { title: 'FOOTER.SERVICES.ML' },
    { title: 'FOOTER.SERVICES.GEN_AI' },
    { title: 'FOOTER.SERVICES.AUTOMATION' },
    { title: 'FOOTER.SERVICES.PREDICTIVE' },
    { title: 'FOOTER.SERVICES.VISION' },
  ]);
}
