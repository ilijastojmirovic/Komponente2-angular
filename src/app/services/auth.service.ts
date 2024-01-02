import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { StorageService } from '../Storage/storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  helper = new JwtHelperService;

  constructor(private http: HttpClient, private storageService: StorageService) {}


  login(loginInfo: any): Observable<any>{
    return this.http.post("/api/user/login", loginInfo).pipe(
      map((response: any) => {
        this.storageService.save("currentUserToken", response.token)
        const decodedToken =  this.helper.decodeToken(response.token);
        this.storageService.save("decodedCurrentUser", decodedToken)
      })
    );
  }
  
  register_client(user: any){
    return this.http.post('/api/client', user);
  }
  
  register_manager(user: any){
    return this.http.post('/api/manager', user); 
  }
}