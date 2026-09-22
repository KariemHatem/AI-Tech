import { Component } from '@angular/core';
import { InfoButton } from "../../shared/components/info-button/info-button";

@Component({
  imports: [InfoButton],
  selector: 'app-newsletter',
  styleUrl: './newsletter.scss',
  templateUrl: './newsletter.html',
})
export class Newsletter {}
