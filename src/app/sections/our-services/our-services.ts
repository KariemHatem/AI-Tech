import { Component } from '@angular/core';
import { InfoButton } from "../../shared/components/info-button/info-button";
import { SecHeader } from "../../shared/components/sec-header/sec-header";

@Component({
  imports: [InfoButton, SecHeader],
  selector: 'app-our-services',
  styleUrl: './our-services.scss',
  templateUrl: './our-services.html',
})
export class OurServices {}
