import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) {}


  getNotifications(): Observable<any> {
    return this.http.get("/api2/notification/allNotifications");
  }

  getCategory(): Observable<any> {
    return this.http.get("/api3/category/getCategory");
  }

  cancelAppointment(body: any): Observable<any> {
    return this.http.post("/api3/appointments/cancelAppointment", body);
  }

  getHalls(): Observable<any> {
    return this.http.get("/api3/hall/getHalls"); 
  }
  
}
 