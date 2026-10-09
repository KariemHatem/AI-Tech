import { Component, HostListener, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { NgxSpinnerService, NgxSpinnerComponent } from 'ngx-spinner';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';
import { filter } from 'rxjs';

@Component({
  imports: [RouterOutlet, Navbar, Footer, NgxSpinnerComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('AI-Tech');
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  spinner = inject(NgxSpinnerService);

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  // Scroll to top button
  scrollTopButton = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollTopButton.set(window.scrollY > 300);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  // AOS
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: false,
        offset: 100,
        disableMutationObserver: false,
      });
      this.router.events
        .pipe(filter((e) => e instanceof NavigationEnd))
        .subscribe(() => setTimeout(() => AOS.refresh(), 50));
    }
  }
}
