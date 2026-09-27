import { Component, DestroyRef, inject, signal } from '@angular/core';
import { InfoButton } from '../../shared/components/info-button/info-button';
import { form, FormField, email } from '@angular/forms/signals';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Footer } from "../../layout/footer/footer";

interface NewsletterForm {
  email: string;
}

@Component({
  imports: [InfoButton, FormField, ToastModule, Footer],
  selector: 'app-newsletter',
  styleUrl: './newsletter.scss',
  templateUrl: './newsletter.html',
  providers: [MessageService],
})
export class Newsletter {
  // Propbs
  private readonly webhookUrl = 'https://kariemhatm.app.n8n.cloud/webhook/newsletter-signup';
  private http = inject(HttpClient);
  private destroyRef = inject(DestroyRef);
  private messageService = inject(MessageService);

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
    this.http
      .post(this.webhookUrl, { email })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (message: any) => {
          this.newsLetterF.set({
            email: '',
          });
          this.subscribed.set(true);
          this.errorMsg.set('');
          this.messageService.add({
            severity: 'success',
            summary: 'Success Message',
            detail: 'You have successfully subscribed to our newsletter.',
            life: 4000,
          });
        },

        error: () => {
          this.errorMsg.set('Something went wrong. Please try again.');
          this.messageService.add({
            severity: 'error',
            summary: 'Error Message',
            detail: 'Something went wrong. Please try again.',
            life: 4000,
          });
          this.subscribed.set(false);
        },
      });
  }
}
