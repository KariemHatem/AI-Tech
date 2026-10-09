import { Component, DestroyRef, inject, signal } from '@angular/core';
import { InfoButton } from '../../shared/components/info-button/info-button';
import { form, FormField, email } from '@angular/forms/signals';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { LangServices } from '../../services/languages/lang-services';
import { TranslatePipe } from '@ngx-translate/core';
interface NewsletterForm {
  email: string;
}

@Component({
  imports: [InfoButton, FormField, ToastModule, TranslatePipe],
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

  lang = inject(LangServices);

  // Flags
  subscribed = signal(false);
  errorMsg = signal('');

  newsLetterF = signal<NewsletterForm>({
    email: '',
  });

  newsForm = form(this.newsLetterF, (schemaPath) => {
    email(schemaPath.email, { message: this.lang.translate('NEWSLETTER.EMAIL_INVALID') });
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
            summary: this.lang.translate('NEWSLETTER.TOAST_SUCCESS_TITLE'),
            detail: this.lang.translate('NEWSLETTER.TOAST_SUCCESS_DETAIL'),
            life: 4000,
          });
        },

        error: () => {
          this.errorMsg.set(this.lang.translate('NEWSLETTER.ERROR'));
          this.messageService.add({
            severity: 'error',
            summary: this.lang.translate('NEWSLETTER.TOAST_ERROR_TITLE'),
            detail: this.lang.translate('NEWSLETTER.ERROR'),
            life: 4000,
          });
          this.subscribed.set(false);
        },
      });
  }
}
