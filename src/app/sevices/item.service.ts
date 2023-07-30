import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private user_details = environment.url + '/item';
  constructor( private http:HttpClient ) { }


  getUser_Info():Observable<any>{
    return this.http.get(this.user_details + "/GetAllItem");
  }

  getgetUser_InfoById(id:any):Observable<any>{
    return this.http.get(this.user_details + "/getUserById/" + id);
  }

  updateUser_Info(id:any,data:any){
    return this.http.put(this.user_details+"/updateUser"+id,data);
  }

  deleteUser_Info(id:any){
    return this.http.delete(`${this.user_details}/DeleteItem/${id}`);
  }

  createUser_Info(data:any):Observable<any>{
    return this.http.post(this.user_details+"/CreateItem",data);
  }
}
