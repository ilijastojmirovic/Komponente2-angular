import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientServiceService } from '../../services/client-service.service';
import { AuthService } from '../../services/auth.service';
import { ClientModel } from '../../models/client-model';
import { StorageService } from '../../Storage/storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  providers: [ClientServiceService, AuthService], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor( private router: Router, private clientService: ClientServiceService, private authService: AuthService,private storageService: StorageService){
  }

  back(){
    this.router.navigate(['/']);
  }

  clientLogIn(event?: Event){
    if (event) {
      event.preventDefault();
    }
    this.authService.test().subscribe((data) => {
      let clientInfo = data.content[0];
  
    
      const currentClient: ClientModel = {
        id: clientInfo.id,
        uniqueCardNumber: clientInfo.uniqueCardNumber,
        numberOfTrainings: clientInfo.numberOfTrainings,
        user: {
          username: clientInfo.username,
          email: clientInfo.email,
          dateOfBirth: clientInfo.dateOfBirth, 
          firstName: clientInfo.firstName, 
          lastName: clientInfo.lastName,
          permission: clientInfo.permission 
        }
      };
  
      this.storageService.save('currentClient', currentClient);
    });
  }

}
