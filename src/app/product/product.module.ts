import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    ProducRoutingModule,
    FontAwesomeModule
  ],
  declarations:[ProductComponent]
})


export class ProductModule {


}
