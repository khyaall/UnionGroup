import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurMissionRoutingModule } from './our-mission-routing.module';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { WidgetsModule } from 'src/app/widgets/widgets.module';


@NgModule({
  declarations: [
    OurMissionComponent
  ],
  imports: [
    CommonModule,
    OurMissionRoutingModule,
    LayoutsModule,
    WidgetsModule
  ]
})
export class OurMissionModule { }
