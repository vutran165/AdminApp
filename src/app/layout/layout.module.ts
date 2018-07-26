import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from '../menu/menu.component';

import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { LayoutComponent } from '../layout/layout.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarToggleDirective } from '../directives/sidebar.directive';


const APP_COMPONENT = [ 
  MenuComponent, 
];


const APP_DIRECTIVES = [
  SidebarToggleDirective,
];



@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FontAwesomeModule,
  ],
  declarations: [LayoutComponent, APP_COMPONENT, APP_DIRECTIVES]
})
export class LayoutModule { }
