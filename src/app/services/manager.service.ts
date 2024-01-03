import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }

  saveHallChanges(editHall : any): Observable<any>{
    return this.http.put("/api3/hall/editHall", editHall);
  }

  showAppointments(hallName : any): Observable<any>{
    return this.http.get("/api3/appointments/"+ hallName);
  }

  cancelAppointment(body: any): Observable<any> {
    return this.http.post("/api3/appointments/managerCancelAppointment", body);
  }
}
