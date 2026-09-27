import { Component } from '@angular/core';
import { InfoButton } from '../../shared/components/info-button/info-button';

@Component({
  imports: [InfoButton],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {}
