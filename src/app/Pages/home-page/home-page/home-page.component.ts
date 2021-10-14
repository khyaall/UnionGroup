import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/app/Services/lang.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  language: string | null = localStorage.getItem('UnionGroupLang')
  @Output() displayed: EventEmitter<string> = new EventEmitter();
  constructor(
    // @ts-ignore
    @Inject(DOCUMENT) private document,
    private translate: TranslateService,
    private langService: LangService,
    private router: Router) { }

  ngOnInit(): void {
    // this.onDetectLag(this.language)
    // console.log(this.language)
  }

  

  onChooseLag(lang?: string | null){
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
    localStorage.setItem('UnionGroupLang', this.language);
    this.langService.setLang(this.language);
    console.log(this.language)
    this.displayed.emit("true");
    //this.router.navigate(['/home']);
  }

  carouselImg =[
    {
      id: 1,
      src: '../../../../assets/Images/50000.svg'
    },
    {
      id: 2,
      src: '../../../../assets/Images/50000.svg'
    },
    {
      id: 3,
      src: '../../../../assets/Images/50000.svg'
    },
    {
      id: 4,
      src: '../../../../assets/Images/50000.svg'
    },
  ];

  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
  ]

}
