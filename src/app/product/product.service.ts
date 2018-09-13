import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductEntity } from '../model/product';

// const api = ''
// const urlString = 'http:\\localhost:1433\' + ;


@Injectable()

export class ProductService {

  constructor(private http: HttpClient, private entity: ProductEntity) {

   }

   getAllProduct() {
      return this.http.get('http://localhost:8080/api/getAllProduct');
   }

   getProduct() {
      return this.http.get('http://localhost:8080/api-nodejs/productjs');
   }

   add() {
     return this.http.post('http://localhost:8080/api-nodejs/productjs', this.entity);
   }

   update() {
     return this.http.put('http://localhost:8080/api-nodejs/productjs', this.entity);
   }

   delete(id: string) {
     return this.http.delete('http://localhost:8080/api-nodejs/productjs' + id);
   }

}


