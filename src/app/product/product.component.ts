import { Component, OnInit } from '@angular/core';
import { faPlus, faPenSquare, faRecycle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  faPlus = faPlus;
  faPenSquare = faPenSquare;
  faTrash = faTrash;
  
  constructor(private modalService: NgbModal) {}

  add() {
    const modalRef = this.modalService.open(CreateComponent, {size: 'lg'});
    modalRef.componentInstance.name = 'World';
  }

  edit() {
     this.modalService.open(EditComponent, {size: 'lg'});
  }

  delete() {
    this.modalService.open(DeleteComponent, {size: 'lg'});
  }

  ngOnInit() {
  }

}
