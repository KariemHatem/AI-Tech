import { Component } from '@angular/core';
import { Navbar } from "../../layout/navbar/navbar";
import { InfoButton } from "../../shared/components/info-button/info-button";
import { AboutUs } from "../about-us/about-us";

@Component({
  imports: [Navbar, InfoButton, AboutUs],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {}
