import { Component, inject } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LangServices } from '../../services/languages/lang-services';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [BadgeModule, RouterLink, RouterLinkActive, TranslatePipe],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  languageServices = inject(LangServices);
}
