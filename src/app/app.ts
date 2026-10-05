import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { NgxSpinnerService, NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  imports: [RouterOutlet, Navbar, Footer, NgxSpinnerComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('AI-Tech');

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
}
