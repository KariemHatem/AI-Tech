import { Component, inject, signal } from '@angular/core';
import { InfoButton } from '../../shared/components/info-button/info-button';
import { form, FormField, email } from '@angular/forms/signals';
import { HttpClient } from '@angular/common/http';

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
  // Propbs
  private readonly webhookUrl = 'https://kariemhatm.app.n8n.cloud/webhook/newsletter-signup';
  private http = inject(HttpClient);

  // Flags
  subscribed = signal(false);
  errorMsg = signal('');

  newsLetterF = signal<NewsletterForm>({
    email: '',
  });

  newsForm = form(this.newsLetterF, (schemaPath) => {
    email(schemaPath.email, { message: 'Please enter a valid email address.' });
  });

  onSubmit(event: Event) {
    event.preventDefault();
    if (!this.newsForm().valid()) return;

    // Send email
    const email = this.newsLetterF().email;
    this.http.post(this.webhookUrl, { email }).subscribe({
      next: () => {
        this.newsLetterF.set({
          email: '',
        });
        this.subscribed.set(true);
        this.errorMsg.set('');
      },

      error: () => {
        this.errorMsg.set('Something went wrong. Please try again.');
        this.subscribed.set(false);
      },
    });
  }
}
