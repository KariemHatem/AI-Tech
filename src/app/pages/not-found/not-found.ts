import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Newsletter } from "../../sections/newsletter/newsletter";

@Component({
  imports: [RouterLink, Newsletter],
  selector: 'app-not-found',
  styleUrl: './not-found.scss',
  templateUrl: './not-found.html',
})
export class NotFound {}
