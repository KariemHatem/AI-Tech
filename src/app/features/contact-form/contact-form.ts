import { Component, signal } from '@angular/core';
import { form, FormField, email, required } from '@angular/forms/signals';
import { TranslatePipe } from '@ngx-translate/core';

interface contactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  imports: [FormField, TranslatePipe],
  selector: 'app-contact-form',
  styleUrl: './contact-form.scss',
  templateUrl: './contact-form.html',
})
export class ContactForm {
  contactData = signal<contactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  contactForm = form(this.contactData, (schemaPath) => {
    required(schemaPath.name, { message: 'CONTACT.NAME_REQUIRED' });
    required(schemaPath.email, { message: 'CONTACT.EMAIL_REQUIRED' });
    email(schemaPath.email, { message: 'CONTACT.EMAIL_INVALID' });
    required(schemaPath.subject, { message: 'CONTACT.SUBJECT_REQUIRED' });
    required(schemaPath.message, { message: 'CONTACT.MESSAGE_REQUIRED' });
  });

  onSubmit(event: Event) {
    event.preventDefault();
    if (!this.contactForm().valid()) return;
  }
}
