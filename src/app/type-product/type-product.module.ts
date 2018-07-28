import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeProductComponent } from './type-product.component';
import { TypeProductRoutingModule } from './type-product-routing.module';


@NgModule({
  imports: [
    CommonModule,
    TypeProductRoutingModule
  ],
  declarations:[TypeProductComponent]
})


export class TypeProductModule {

}
