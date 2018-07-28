import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { RoutingModule } from './app-routing.module';

import { SidebarToggleDirective } from './directives/sidebar.directive';
import { AppService } from './app.service';


const APP_DIRECTIVES = [
  SidebarToggleDirective,
];

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    RoutingModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
