import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(credentials: {username: string, password: string}): Observable<any> {
    return this.http.post(`/api/admin/login`, credentials);
  }

  test() {
    return this.http.get("/api/admin/test");
  }
}
