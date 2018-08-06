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

   getAllProduct(): Observable<ProductEntity[]>{
      return this.http.get<ProductEntity[]>('http://localhost:1433/api-nodejs/productjs');
   }

   getProduct(): Observable<ProductEntity> {
      return this.http.get<ProductEntity>('http://localhost:1433/api-nodejs/productjs');
   }

   add(): Observable<ProductEntity> {
     return this.http.post<ProductEntity>('http://localhost:1433/api-nodejs/productjs', this.entity);
   }

   update(): Observable<ProductEntity> {
     return this.http.put<ProductEntity>('http://localhost:1433/api-nodejs/productjs', this.entity);
   }

   delete(id: string) {
     return this.http.delete('http://localhost:1433/api-nodejs/productjs' + id);
   }

}


