import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RegisterClientService {
  
  constructor(private http: HttpClient) {}

  register_client(user: any){
    return this.http.post('/api/client', user);
  }
  
  register_manager(user: any){
    return this.http.post('/api/manager', user);
  }

}
