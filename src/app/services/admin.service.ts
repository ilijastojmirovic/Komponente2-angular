import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../Storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private http: HttpClient, private storageService: StorageService) {}

  header() : any {
    const token = this.storageService.get('currentUserToken');
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return headers;
  }

  showClients() : Observable<any>{
    console.log(this.header());
    return this.http.post("/api/admin/clients", {}, { headers: this.header()});
  }

  showManagers() :  Observable<any> {
    return this.http.get("/api/admin/managers",{ headers: this.header()});
  }

  updatePermissionClient(client : any) : Observable<any> {
   return this.http.put("/api/admin/clientpermission", client, { headers: this.header()});
  }

  updatePermissionManager(manager : any) : Observable<any> {
    return this.http.put("/api/admin/managerpermission",  manager, { headers: this.header()});
  }


  
  
}
