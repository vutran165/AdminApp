import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MenuComponent } from '../menu/menu.component';
import { ProductComponent } from '../product/product.component';
import { TypeProductComponent } from '../type-product/type-product.component';
import { UserComponent } from '../user/user.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

const APP_COMPONENT = [
  DashboardComponent,
  MenuComponent,
  ProductComponent,
  TypeProductComponent,
  UserComponent
];


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
