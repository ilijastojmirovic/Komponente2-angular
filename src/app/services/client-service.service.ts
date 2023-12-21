import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  client = {
    id: null,
    uniqeCardNumber: "",
    nubmerOfTrainings: 0,
    user: {
      username: "",
      email: "",
      dateOfBirth: "",
      firstName: "",
      lastName: "",
      permission: true
    }
  };

  data : any;
  constructor(private http: HttpClient) {}

  test(){
    return this.http.get("/api/admin/clients");
  }
}
