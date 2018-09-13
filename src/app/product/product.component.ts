import { Component, OnInit } from '@angular/core';
import { faPlus, faPenSquare, faRecycle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ProductService } from './product.service';
import { HttpClientJsonpModule } from '@angular/common/http';
// import {HttpCLient}


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  faPlus = faPlus;
  faPenSquare = faPenSquare;
  faTrash = faTrash;
  
  
  constructor(private modalService: NgbModal, private service: ProductService
    , private httpclient: HttpClientJsonpModule) {}

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
     this.getAll();
  }

  getAll() {
    this.service.getAllProduct().subscribe((res)=>{
      console.log(res );
    }, (error)=> {
      console.log('error', error);
    });// return this.service.getAllProduct();
  }

}
