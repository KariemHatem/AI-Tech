import { Component, signal } from '@angular/core';
import { form, FormField, email, required } from '@angular/forms/signals';

interface contactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  imports: [FormField],
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
    required(schemaPath.name, { message: 'Please enter your name' });
    required(schemaPath.email, { message: 'Please enter your email' });
    email(schemaPath.email, { message: 'Please enter a valid email address.' });
    required(schemaPath.subject, { message: 'Please enter a subject' });
    required(schemaPath.message, { message: 'Please enter your message.' });
  });

  onSubmit(event: Event) {
    event.preventDefault();
    if (!this.contactForm().valid()) return;

    // Handle form submission logic here
    console.log('Form submitted:', this.contactData());
  }
}
