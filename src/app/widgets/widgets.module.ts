import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubNavComponent } from './sub-nav/sub-nav.component';
import { SubFooterComponent } from './sub-footer/sub-footer.component';



@NgModule({
  declarations: [
    SubNavComponent,
    SubFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SubNavComponent,
    SubFooterComponent
  ]
})
export class WidgetsModule { }
