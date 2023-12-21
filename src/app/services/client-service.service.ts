import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  data : any;
  constructor(private http: HttpClient) {}

  test(){
    return this.http.get("/api/admin/clients");
  }

  setClientInStorage(clinet: any){

  }

}
