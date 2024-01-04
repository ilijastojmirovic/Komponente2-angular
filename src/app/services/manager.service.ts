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
    return this.http.put("/api3/hall/editHall", editHall, { headers: this.header()});
  }

  newAppointment(body : any): Observable<any>{
    console.log(body);
    return this.http.post("/api3/appointments/newAppointment", body);
  }

  showAppointments(hallName : any): Observable<any>{
    return this.http.get("/api3/appointments/"+ hallName, { headers: this.header()});
  }

  cancelAppointment(body: any): Observable<any> {
    return this.http.post("/api3/appointments/managerCancelAppointment", body, { headers: this.header()});
  }
}
