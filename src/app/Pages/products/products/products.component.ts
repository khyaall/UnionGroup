import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  collection:Array<string> = [];
  p: number = 1;
  constructor() { 
    for (let i = 1; i <= 45; i++) {
      this.collection.push(`item ${i}`);
    }
  }

  ngOnInit(): void {
  }

}
