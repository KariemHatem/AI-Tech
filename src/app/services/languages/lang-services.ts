import { Service, PLATFORM_ID, inject, signal, DOCUMENT, effect } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

export type Lang = 'en' | 'ar';

@Service()
export class LangServices {
  // Priv Props
  private translateService = inject(TranslateService);
  private platformId = inject(PLATFORM_ID);
  private document = inject(DOCUMENT);
  private isBrowser = isPlatformBrowser(this.platformId);
  private readonly defaultLang: Lang = 'en';
  private readonly STORAGE_KEY = 'lang';
  readonly langChange$ = this.translateService.onLangChange;

  lang = signal<Lang>(this.getIntialLang());

  constructor() {
    effect(() => {
      const lang = this.lang();
      this.translateService.use(lang);

      if (this.isBrowser) {
        this.document.documentElement.lang = lang;
        this.document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        this.document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
        localStorage.setItem(this.STORAGE_KEY, lang);
      }
    });
  }

  private getIntialLang(): Lang {
    if (!this.isBrowser) return this.defaultLang;
    return (localStorage.getItem(this.STORAGE_KEY) as Lang) || this.defaultLang;
  }

  // Toggel
  toggel() {
    this.lang.update((l) => (l === 'en' ? 'ar' : 'en'));
  }

  // Change Lang
  changeLang(language: Lang) {
    this.lang.set(language);
  }

  // Translate Key
  translate(key: string) {
    if (!key) return '';
    const translation = this.translateService.instant(key);
    return translation !== key ? translation : '';
  }

  get currentLang(): Lang {
    return this.lang();
  }
}
