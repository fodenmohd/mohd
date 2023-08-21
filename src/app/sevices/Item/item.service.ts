import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private URL = environment.url + '/item';
  constructor( private http:HttpClient ) { }


  getItem():Observable<any>{
    return this.http.get(this.URL + "/GetAllItem");
  }

  getItemById(id:any):Observable<any>{
    return this.http.get(this.URL + "/get_item_by_id/" + id);
  }

  // updateItem(id:any,data:any){
  //   return this.http.put(this.URL+"/UpdateItem"+id,data);
  // }

  updateItem(id:any,data:any):Observable<any>{
    return this.http.put(this.URL + "/UpdateItem/" + id,data);
  }


  deleteItem(id:any){
    return this.http.delete(`${this.URL}/DeleteItem/${id}`);
  }

  createItem(data:any):Observable<any>{
    return this.http.post(this.URL+"/CreateItem",data);
  }
}
