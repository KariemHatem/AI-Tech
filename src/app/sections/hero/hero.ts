import { Component } from '@angular/core';
import { Navbar } from "../../layout/navbar/navbar";

@Component({
  imports: [Navbar],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {}
