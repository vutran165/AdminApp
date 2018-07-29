import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

// all component
import { LayoutComponent } from './layout.component';



const routes_layout : Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    { path:'', redirectTo:'dashboard', pathMatch: 'full'},
    { path:'dashboard', loadChildren:'../dashboard/dashboard.module#DashboardModule'},
    { path:'product', loadChildren:'../product/product.module#ProductModule'},
    { path:'typeproduct', loadChildren:'../type-product/type-product.module#TypeProductModule'},
    { path:'user', loadChildren:'../user/user.module#UserModule'},
    
]
}];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes_layout)
  ],
  exports :[RouterModule]
})
export class LayoutRoutingModule { }
