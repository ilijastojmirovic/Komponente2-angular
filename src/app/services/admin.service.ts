import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../Storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private storageService: StorageService) {}


  showClients(token: any) : Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': token
    });
    const pageable = {
      page: 1, 
      size: 100 
    };
    return this.http.post("/api/admin/clients", pageable, { headers });
  }

  showManagers(token: any) :  Observable<any> {
    return this.http.get("/api/admin/managers");
  }

  updatePermissionClient(client : any, token: any) : Observable<any> {
   return this.http.put("/api/admin/clientpermission", client);
  }

  updatePermissionManager(manager : any, token: any) : Observable<any> {
    return this.http.put("/api/admin/managerpermission",  manager);
  }
  
}
