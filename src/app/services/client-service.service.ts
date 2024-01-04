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

  showAppointments(clientId: any): Observable<any> {
    return this.http.post(`/api3/appointments/all`, clientId);
  }

  scheduleTraining(clientAppointmentDto: any): Observable<any> {
    return this.http.put("/api3/appointments/updateClientTrainings", clientAppointmentDto);
  }
  
  filterAppointments(filter: any): Observable<any> {
    return this.http.post("/api3/appointments/filter", filter);
  }

  getClientAppointment(cleintId: any): Observable<any> {
    return this.http.post("/api3/appointments/getCleintAppointment", cleintId);
  }

}
