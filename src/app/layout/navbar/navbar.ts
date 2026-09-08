import { Component } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { RouterLink,RouterLinkActive } from '@angular/router';


@Component({
  imports: [BadgeModule, RouterLink,RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {

}
