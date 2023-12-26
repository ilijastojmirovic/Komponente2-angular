import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  
  constructor( private router: Router, private clientService: ClientServiceService, private authService: AuthService,private storageService: StorageService){}

  clientLogIn(event?: Event){
    if (event) {
      event.preventDefault();
    }
    this.authService.test(this.loginInfo).subscribe((data) => {
      this.storageService.save('currentUserToken', data.token);
    });
  }
  
  back(){
    this.router.navigate(['/']);
  }

}


    
      // const currentClient: ClientModel = {
      //   id: clientInfo.id,
      //   uniqueCardNumber: clientInfo.uniqueCardNumber,
      //   numberOfTrainings: clientInfo.numberOfTrainings,
      //   user: {
      //     username: clientInfo.username,
      //     email: clientInfo.email,
      //     dateOfBirth: clientInfo.dateOfBirth, 
      //     firstName: clientInfo.firstName, 
      //     lastName: clientInfo.lastName,
      //     permission: clientInfo.permission 
      //   }
      // };
  
