import { CommonModule } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ClientServiceService } from '../../services/client-service.service';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../../Storage/storage.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ClientServiceService, AuthService], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginInfo = {
    email : "",
    password : ""
  };
  
  constructor( private router: Router, private authService: AuthService,
    private storageService: StorageService){}

  

  clientLogIn(event?: Event){
    if (event) {
      event.preventDefault();
    }
    this.authService.login(this.loginInfo).subscribe((data) => {
      this.storageService.save('clientBill', 0);
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