import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProducedServicesService {

  private products = environment.url+'/produce';

  constructor( private http:HttpClient ) { }

  getProduct():Observable<any>{
    return this.http.get(this.products+"/GetAllproduce");
  }

  getproductById(id:any):Observable<any>{
    return this.http.get(`${this.products}/${id}`);
  }

  updateProduct(id:any,data:any){
    return this.http.put(`${this.products}/${id}`,data);
  }

  deleteProduct(id:any){
    return this.http.delete(`${this.products}/DeleteProduce/${id}`);
  }

  createProduct(data:any):Observable<any>{
    return this.http.post(this.products+'/CreateProduce',data);
  }
  getcostandproduced():Observable<any>{
    return this.http.get(this.products+"/GetCostAndProduced");
  }

  getcostandproducedByDate(startDate:any,endDate:any):Observable<any>{
    return this.http.get(this.products+"/GetCostAndProduced/"+startDate+"/"+endDate);
  }


}
