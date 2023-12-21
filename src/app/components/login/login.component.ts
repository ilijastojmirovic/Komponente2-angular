import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientServiceService } from '../../services/client-service.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  providers: [ClientServiceService, AuthService], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  clientInfo: any;
  
  constructor( private router: Router, private clientService: ClientServiceService, private authService: AuthService){}

  back(){
    this.router.navigate(['/']);
  }

  clientLogIn(event?: Event){
    if (event) {
      event.preventDefault(); // Zaustavljanje osvežavanja stranice
    }
    this.authService.test().subscribe((data) => {
      this.clientInfo = data.content[0];
  
      // Sada kada imate podatke, ažurirajte servis
      this.clientService.client.uniqeCardNumber = this.clientInfo.uniqeCardNumber;
      this.clientService.client.nubmerOfTrainings = this.clientInfo.nubmerOfTrainings;
      this.clientService.client.user.username = this.clientInfo.username;
      this.clientService.client.user.email = this.clientInfo.email;
      this.clientService.client.user.dateOfBirth = this.clientInfo.dateOfBirth;
      this.clientService.client.user.firstName = this.clientInfo.firstName;
      this.clientService.client.user.lastName = this.clientInfo.lastName;
      this.clientService.client.user.permission = this.clientInfo.permission;
  
    });
  }

  prinotvanje(){
    console.log(this.clientService.client);
  }
}
