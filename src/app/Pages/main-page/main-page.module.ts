import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { MainContentComponent } from './main-content/main-content.component';
import { PrimeNgModule } from 'src/app/DesignModules/prime-ng.module';

@NgModule({
  declarations: [
    MainPageComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    WidgetsModule,
    LayoutsModule,
    PrimeNgModule
  ],
  exports : [
    MainPageComponent,
    MainContentComponent
  ]
})
export class MainPageModule { }
