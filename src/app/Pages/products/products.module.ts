import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    LayoutsModule,
    WidgetsModule,
    NgxPaginationModule
  ]
})
export class ProductsModule { }
