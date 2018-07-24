import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarToggleDirective } from './directives/sidebar.directive';

const APP_DIRECTIVES = [
  SidebarToggleDirective,
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    APP_DIRECTIVES
  ],
  imports: [
   
    // RoutingModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
