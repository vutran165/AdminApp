import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarToggleDirective } from './directives/sidebar.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { TypeProductComponent } from './type-product/type-product.component';
import { LayoutModule } from './layout/layout.module';

const APP_DIRECTIVES = [
  SidebarToggleDirective,
];

@NgModule({
  declarations: [
    AppComponent,
    // APP_DIRECTIVES,
  ],
  imports: [
    RoutingModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
