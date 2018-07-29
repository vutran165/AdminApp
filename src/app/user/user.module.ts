import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FontAwesomeModule
  ],
  declarations:[UserComponent]
})


export class UserModule {

}
