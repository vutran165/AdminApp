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
    { path:'product', loadChildren:'../dashboard/dashboard.module#DashboardModule'},
    { path:'typeproduct', loadChildren:'../dashboard/dashboard.module#DashboardModule'},
    { path:'user', loadChildren:'../dashboard/dashboard.module#DashboardModule'},
    
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
