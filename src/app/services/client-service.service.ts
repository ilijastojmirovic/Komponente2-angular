import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  data : any;
  constructor(private http: HttpClient) {}

  
  changePassword(user : any): Observable<any>{
    return this.http.put("/api/client/updatepassword",user);
  }

  saveClientChanges(user : any): Observable<any>{
    return this.http.put("/api/client/update",user);
  }

 

}
