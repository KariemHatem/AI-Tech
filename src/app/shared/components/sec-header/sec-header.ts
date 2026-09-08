import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-sec-header',
  styleUrl: './sec-header.scss',
  templateUrl: './sec-header.html',
})
export class SecHeader {
  sectionHeading = input.required<string>();
  sectionDescription = input.required<string>();
}
