import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurMissionRoutingModule } from './our-mission-routing.module';
import { OurMissionComponent } from './our-mission/our-mission.component';


@NgModule({
  declarations: [
    OurMissionComponent
  ],
  imports: [
    CommonModule,
    OurMissionRoutingModule
  ]
})
export class OurMissionModule { }
