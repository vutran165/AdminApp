import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Input() name;
  

  constructor(public activeModal: NgbActiveModal, private service: ProductService ) {
     
   }

  ngOnInit(){
    
  }

  Save() {

  }



}
