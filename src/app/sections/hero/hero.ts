import { Component } from '@angular/core';
import { Navbar } from "../../layout/navbar/navbar";
import { InfoButton } from "../../shared/components/info-button/info-button";

@Component({
  imports: [Navbar, InfoButton],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {}
