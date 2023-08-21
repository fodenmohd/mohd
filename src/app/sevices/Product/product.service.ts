import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { products } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  [x: string]: any;

  // private products = environment.url + '/product';
  private products = environment.url+'/product';

  constructor( private http:HttpClient ) { }

  getProduct():Observable<any>{
    return this.http.get(this.products+"/product");
  }

  getproductById(id:any):Observable<any>{
    return this.http.get(this.products + "/get_product_by_id/"+ id);
  }

  updateProduct(id:any,data:any):Observable<any>{
    return this.http.put(this.products + "/update_product/" + id,data);
  }

  deleteProduct(id:any){
    return this.http.delete(`${this.products}/${id}`);
  }

  createProduct(data:any):Observable<any>{
    return this.http.post(this.products+'/product',data);
  }

  getCurrentProduct():Observable<any>{
    return this.http.get(this.products + "/getCurrentProducts");
  }

}
