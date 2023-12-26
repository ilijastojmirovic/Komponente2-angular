import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http: HttpClient) {}

  getClientInfo(token: string): Observable<any> { 
    const httpParams = new HttpParams().set('token', token);
    return this.http.get("/api/client/clientInfo", { params: httpParams });
  }
  
  changePassword(user : any): Observable<any>{
    return this.http.put("/api/client/updatepassword", user);
  }

  saveClientChanges(user : any): Observable<any>{
    return this.http.put("/api/client/update", user);
  }

}