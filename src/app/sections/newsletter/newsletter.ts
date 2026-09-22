import { Component, signal } from '@angular/core';
import { InfoButton } from '../../shared/components/info-button/info-button';
import { form, FormField, email } from '@angular/forms/signals';

interface NewsletterForm {
  email: string;
}

@Component({
  imports: [InfoButton, FormField],
  selector: 'app-newsletter',
  styleUrl: './newsletter.scss',
  templateUrl: './newsletter.html',
})
export class Newsletter {
  newsLetterF = signal<NewsletterForm>({
    email: '',
  });

  newsForm = form(this.newsLetterF, (schemaPath) => {
    email(schemaPath.email, { message: 'Please enter a valid email address.' });
  });

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.newsForm().valid()) {
      console.log(this.newsLetterF().email);
      this.newsLetterF.set({
        email: '',
      });
    }
  }
}
