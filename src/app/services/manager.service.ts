import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../Storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  header() : any {
    const token = this.storageService.get('currentUserToken');
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return headers;
  }

  saveHallChanges(editHall : any): Observable<any>{
    return this.http.put("/api3/hall/editHall", editHall);
  }

  newAppointment(body : any): Observable<any>{
    return this.http.post("/api3/appointments/newAppointment", body);
  }

  showAppointments(hallName : any): Observable<any>{
    return this.http.get("/api3/appointments/" + hallName);
  }
  
  allowAppointmentID(body: any): Observable<any> {
    return this.http.post("/api3/appointments/managerAllowAppointment", body);
  }
  
  cancelAppointment(body: any): Observable<any> {
    return this.http.post("/api3/appointments/managerCancelAppointment", body);
  }
}
