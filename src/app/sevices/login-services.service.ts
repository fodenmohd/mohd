import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  private login = environment.url + '/Account';

  constructor(
    private http: HttpClient
   ) { }

   login_authentication(username: any, password: any): Observable<any> {
    return this.http.post(this.login + '/login', null, { params: { username, password } });
  }



    user_registrations(data:any):Observable<any>{
      return this.http.post(this.login +'/register',data);
    }
  }
