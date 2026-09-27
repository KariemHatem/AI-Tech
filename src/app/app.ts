import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { Footer } from "./layout/footer/footer";

@Component({
  imports: [RouterOutlet, Navbar, Hero, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('AI-Tech');
}
