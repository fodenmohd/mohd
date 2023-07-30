import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CostcalculationServicesService {

  private cost_details = environment.url + '/cost';
  constructor( private http:HttpClient ) { }


  getcost():Observable<any>{
    return this.http.get(this.cost_details + "/GetAllCost");
  }

  getgetcostById(id:any):Observable<any>{
    return this.http.get(this.cost_details + "/getUserById/" + id);
  }

  updatecost(id:any,data:any){
    return this.http.put(this.cost_details+"/updateUser"+id,data);
  }

  deletecost(id:any){
    return this.http.delete(`${this.cost_details}/DeleteCost/${id}`);
  }

  createcost(data:any):Observable<any>{
    return this.http.post(this.cost_details+"/CreateCost",data);
  }
}
