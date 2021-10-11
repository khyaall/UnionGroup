import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubNavComponent } from './sub-nav/sub-nav.component';



@NgModule({
  declarations: [
    SubNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SubNavComponent
  ]
})
export class WidgetsModule { }
