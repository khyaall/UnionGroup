import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/app/Services/lang.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  language: string | null = localStorage.getItem('UnionGroupLang')
  constructor(
    // @ts-ignore
    @Inject(DOCUMENT) private document,
    private translate: TranslateService,
    private langService: LangService
  ) { }

  ngOnInit(): void {
    this.onDetectLag(this.language)
  }

  onDetectLag(lang?: string | null): void {
    if (lang === 'ar') {
      this.document.body.setAttribute('dir', 'rtl');
      this.translate.use('ar');
      this.language = 'ar';
    } else {
      this.document.body.setAttribute('dir', 'ltr');
      this.translate.use('en');
      this.language = 'en';
    }
    localStorage.setItem('khayalWebLang', this.language);
    this.langService.setLang(this.language);
  }

}
