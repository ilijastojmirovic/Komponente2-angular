import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) {}

  showClients() : Observable<any>{
    return this.http.get("/api/admin/clients");
  }
  showManagers() :  Observable<any> {
    return this.http.get("/api/admin/managers");
  }

  updatePermissionClient(client : any) : Observable<any> {
   return this.http.put("/api/admin/clientpermission", client);
  }

  updatePermissionManager(manager : any) : Observable<any> {
    return this.http.put("/api/admin/managerpermission", manager);
  }


}
