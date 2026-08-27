import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-info-button',
  styleUrl: './info-button.scss',
  templateUrl: './info-button.html',
})
export class InfoButton {
  btnText = input.required<string>();
  customeClass = input<string>('');
}
