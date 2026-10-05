import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Newsletter } from '../../sections/newsletter/newsletter';
@Component({
  imports: [RouterLink, TranslatePipe, Newsletter],
  selector: 'app-not-found',
  styleUrl: './not-found.scss',
  templateUrl: './not-found.html',
})
export class NotFound {}
