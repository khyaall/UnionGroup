import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { LangService } from './Services/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  language: string | null = localStorage.getItem('UnionGroupLang')
  title = 'UnionGroup';
  disply:Boolean = false;
  constructor(
    //@ts-ignore
  @Inject(DOCUMENT) private document,
  private translate: TranslateService,
  private langService: LangService,){}

  ngOnInit(): void {
    if (!localStorage.getItem('UnionGroupLang')) {
      localStorage.setItem('UnionGroupLang', environment.defaultLanguage);
    }
    this.onDetectLag(this.language)
  }

  onDetectLag(lang?: string | null): void {
    if (lang === 'ar') {
      this.document.body.setAttribute('dir', 'rtl');
      this.translate.use('ar');
      this.language = 'ar';
    } else {
      // this.document.body.setAttribute('dir', 'ltr');
      this.document.body.setAttribute('dir', 'rtl');
      this.translate.use('en');
      this.language = 'en';
    }
    localStorage.setItem('khayalWebLang', this.language);
    this.langService.setLang(this.language);
  }

  onDisplay(dispaly:Boolean){
    console.log(dispaly)
    this.disply = dispaly
  }
}
