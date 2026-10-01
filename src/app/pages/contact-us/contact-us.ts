import { Component } from '@angular/core';
import { InfoButton } from '../../shared/components/info-button/info-button';
import { ContactForm } from '../../features/contact-form/contact-form';

@Component({
  imports: [InfoButton, ContactForm],
  selector: 'app-contact-us',
  styleUrl: './contact-us.scss',
  templateUrl: './contact-us.html',
})
export class ContactUs {}
