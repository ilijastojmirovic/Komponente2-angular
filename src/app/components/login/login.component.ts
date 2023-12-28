import { CommonModule } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ClientServiceService } from '../../services/client-service.service';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../../Storage/storage.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class MyJwtOptions {
  getToken(): string | null {
    // Ovde implementirajte logiku za dobijanje tokena ako je potrebno
    return localStorage.getItem('currentUserToken');
  }
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ClientServiceService, AuthService, JwtHelperService,
    { 
      provide: JWT_OPTIONS, 
      useFactory: (myJwtOptions: MyJwtOptions) => {
        return { tokenGetter: myJwtOptions.getToken };
      },
      deps: [MyJwtOptions]
    }], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginInfo = {
    email : "",
    password : ""
  };
  
  constructor( private router: Router, private clientService: ClientServiceService, private authService: AuthService,
    private storageService: StorageService, private jwtHelper: JwtHelperService){}

  

  clientLogIn(event?: Event){
    if (event) {
      event.preventDefault();
    }
    this.authService.login(this.loginInfo).subscribe((data) => {
      const decodedToken = this.storageService.get('decodedCurrentUser');
      console.log(decodedToken);
      if (decodedToken && decodedToken.uniqueCardNumber) 
        this.goToClientPage();
      else if (decodedToken && decodedToken.hallName)
        this.goToManagerPage();
      else if(decodedToken && decodedToken.username === "admin")
        this.goToAdminPage();
      else
        console.log("Wrong email or password");
    });
  }

  goToClientPage(){
    this.router.navigate(["/client-home-page"]);
  }
  goToManagerPage(){
    this.router.navigate(["/manager-home-page"]);
  }
  goToAdminPage(){
    this.router.navigate(["/admin-home-page"]);
  }
  
  back(){
    this.router.navigate(['/']);
  }


}