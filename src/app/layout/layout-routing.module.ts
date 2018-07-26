import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

// all component
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TypeProductComponent } from '../type-product/type-product.component';
import { ProductComponent } from '../product/product.component';
import { UserComponent } from '../user/user.component';
import { LayoutComponent } from './layout.component';



const routes_layout : Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    { path:'', redirectTo:'dashboard', pathMatch: 'full'},
    { path:'dashboard', loadChildren:'app/dashboard/dashboard.module#DashboardModule'},
    
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
