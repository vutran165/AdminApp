import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
   
    // RoutingModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
