import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { PrimeNgModule } from 'src/app/DesignModules/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    LayoutsModule,
    WidgetsModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactUsModule { }
