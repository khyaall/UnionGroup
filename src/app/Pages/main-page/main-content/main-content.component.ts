import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  carouselImg =[
    {
      id: 1,
      src: '../../../../assets/Images/adfdgf.svg'
    },
    {
      id: 2,
      src: '../../../../assets/Images/adfdgf.svg'
    },
    {
      id: 3,
      src: '../../../../assets/Images/adfdgf.svg'
    },
    {
      id: 4,
      src: '../../../../assets/Images/adfdgf.svg'
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
