import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ProducRoutingModule,
    FontAwesomeModule,
    NgbModule.forRoot(),
  ],
  providers:[NgbActiveModal],
  entryComponents:[CreateComponent],
  declarations:[ProductComponent, CreateComponent, EditComponent, DeleteComponent]
})


export class ProductModule {


}
