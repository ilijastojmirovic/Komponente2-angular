import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http: HttpClient) {}


  changePassword(user : any): Observable<any>{
    return this.http.put("/api/client/updatepassword", user);
  }

  saveClientChanges(user : any): Observable<any>{
    return this.http.put("/api/client/update", user);
  }

  showNotifications(username: string): Observable<any> {
    return this.http.get(`/api2/notification/${username}`);
  }

  showAppointments(): Observable<any> {
    return this.http.get(`/api3/appointments`);
  }

  scheduleTraining(appointment: any): Observable<any> {
    return this.http.put("/api3/appointments/updateClientTrainings", appointment);
  }

  filterAppointments(filter: any): Observable<any> {
    return this.http.post("/api3/appointments/filter", filter);
  }

  getCategory(): Observable<any> {
    return this.http.get("/api3/category/getCategory");
  }

}
