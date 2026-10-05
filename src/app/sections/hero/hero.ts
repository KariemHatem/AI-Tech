import { Component } from '@angular/core';
import { InfoButton } from '../../shared/components/info-button/info-button';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  imports: [InfoButton, TranslatePipe],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {}
