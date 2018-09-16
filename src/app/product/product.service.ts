import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductEntity } from '../model/product';
import 'rxjs/add/operator/map';

@Injectable()

export class ProductService {

  private product: ProductEntity;
  lstproduct: ProductEntity[];
  

  constructor(private http: HttpClient) {

   }

   getAllProduct() {
      return this.http.get('http://localhost:8080/api/getAllProduct');
   }

   getProduct() {
      return this.http.get('http://localhost:8080/api-nodejs/productjs');
   }

  //  add() {
  //    return this.http.post('http://localhost:8080/api-nodejs/productjs', this.product);
  //  }

  //  update(id: string) {
  //    return this.http.put('http://localhost:8080/api-nodejs/productjs', this.product);
  //  }

   delete(id: string) {
     return this.http.delete('http://localhost:8080/api-nodejs/productjs' + id);
   }

}


