import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from '../menu/menu.component';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarToggleDirective } from '../directives/sidebar.directive';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



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
    NgbDropdownModule.forRoot(),  
  ],
  exports: [
    FontAwesomeModule
  ],
  declarations: [LayoutComponent, APP_COMPONENT, APP_DIRECTIVES]
})
export class LayoutModule { }
