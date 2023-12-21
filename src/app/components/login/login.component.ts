import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientServiceService } from '../../services/client-service.service';
import { AuthService } from '../../services/auth.service';
import { ClientModel } from '../../models/client-model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  providers: [ClientServiceService, AuthService], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor( private router: Router, private clientService: ClientServiceService, private authService: AuthService){
  }

  back(){
    this.router.navigate(['/']);
  }

  clientLogIn(event?: Event){
    if (event) {
      event.preventDefault(); // Zaustavljanje osvežavanja stranice
    }
    this.authService.test().subscribe((data) => {
      let clientInfo = data.content[0];
      this.clientService.setClientInStorage(clientInfo);
      // Sada kada imate podatke, ažurirajte servis
      // this.clientService.client.uniqeCardNumber = clientInfo.uniqeCardNumber;
      // this.clientService.client.nubmerOfTrainings = clientInfo.nubmerOfTrainings;
      // this.clientService.client.user.username = clientInfo.username;
      // this.clientService.client.user.email = clientInfo.email;
      // this.clientService.client.user.dateOfBirth = clientInfo.dateOfBirth;
      // this.clientService.client.user.firstName = clientInfo.firstName;
      // this.clientService.client.user.lastName = clientInfo.lastName;
      // this.clientService.client.user.permission = clientInfo.permission;
  
    });
  }

}
