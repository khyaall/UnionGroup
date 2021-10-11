import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PrimeNgModule } from '../DesignModules/prime-ng.module';
import { AngularMaterialModule } from '../DesignModules/angular-material.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports:[
    NavBarComponent,
    FooterComponent
  ]
})
export class LayoutsModule { }
