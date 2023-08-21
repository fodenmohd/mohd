import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductItemService {

  private baseurl = 'http://localhost:9090/productItem/product-item';

  constructor( private http:HttpClient ) { }

  getProductItemById(id:number):Observable<any>{
    return this.http.get(`${this.baseurl}/${id}`);
  }

  addProductItem(product_item: Object):Observable<Object>{
    return this.http.post(`${this.baseurl}`,{product_item});
  }

  getProductItemList():Observable<any>{
    return this.http.get(`${this.baseurl}`)
  }

  // getProductItem():Observable<any>{
  //   return this.http.get(this.productItem+"/productItem");
  // }

  // getProductItemById(id:any):Observable<any>{
  //   return this.http.get(`${this.productItem}/${id}`);
  // }

  // updateProductItem(id:any,data:any){
  //   return this.http.put(`${this.productItem}/${id}`,data);
  // }

  // deleteProductItem(id:any){
  //   return this.http.delete(`${this.productItem}/${id}`);
  // }

  // addProductItem(data:any):Observable<any>{
  //   return this.http.post(this.productItem+'/product',data);
  // }
}
