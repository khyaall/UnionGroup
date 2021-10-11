import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhoUsRoutingModule } from './who-us-routing.module';
import { WhoUsComponent } from './who-us/who-us.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';


@NgModule({
  declarations: [
    WhoUsComponent
  ],
  imports: [
    CommonModule,
    WhoUsRoutingModule,
    WidgetsModule,
    LayoutsModule
  ]
})
export class WhoUsModule { }
