import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeProductComponent } from './type-product.component';
import { TypeProductRoutingModule } from './type-product-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  imports: [
    CommonModule,
    TypeProductRoutingModule,
    FontAwesomeModule
  ],
  declarations:[TypeProductComponent]
})


export class TypeProductModule {

}
