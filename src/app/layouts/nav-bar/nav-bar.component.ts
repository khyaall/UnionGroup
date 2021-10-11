import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  oldd: number = 1;
  neww: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  route(id:number){
    this.neww = id;
    document.getElementById(''+this.oldd)?.classList.remove('navX');
    document.getElementById(''+this.neww)?.classList.add('navX');

    this.oldd = this.neww;
  }

}
