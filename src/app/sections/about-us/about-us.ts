import { Component } from '@angular/core';
import { InfoButton } from "../../shared/components/info-button/info-button";
import { SecHeader } from "../../shared/components/sec-header/sec-header";

@Component({
  imports: [InfoButton, SecHeader],
  selector: 'app-about-us',
  styleUrl: './about-us.scss',
  templateUrl: './about-us.html',
})
export class AboutUs {}
