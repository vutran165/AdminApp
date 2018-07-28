import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [
    CommonModule,
    ProducRoutingModule
  ],
  declarations:[ProductComponent]
})


export class ProductModule {


}
