import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

// all component
import { LayoutComponent } from '../layout/layout.component';



const routes_layout : Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    { path:'', redirectTo:'dashboard', pathMatch: 'full'},
    { path:'dashboard', loadChildren:'../dashboard/dashboard.module#DashboardModule'},
    
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
