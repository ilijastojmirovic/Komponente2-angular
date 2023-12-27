import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}


  login(loginInfo: any): Observable<any>{
    return this.http.post("/api/user/login", loginInfo);
  }
}
