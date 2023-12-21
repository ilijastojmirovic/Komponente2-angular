import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientServiceService } from '../../../services/client-service.service';

@Component({
  selector: 'app-client-edit-profile-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ClientServiceService],
  templateUrl: './client-edit-profile-page.component.html',
  styleUrl: './client-edit-profile-page.component.css'
})
export class ClientEditProfilePageComponent {

  updateClientDto = {
    uniqeCardNumber: "",
    userDto: {
      username: "",
      email: "",
      firstName: "",
      lastName: "",
    }
  };
  constructor( private router: Router, private clientService: ClientServiceService){}

  ngOnInit(): void {
    // this.updateClientDto.uniqeCardNumber = this.clientService.client.uniqeCardNumber;
    // this.updateClientDto.userDto.username = this.clientService.client.user.username;
    // this.updateClientDto.userDto.email = this.clientService.client.user.email;
    // this.updateClientDto.userDto.firstName = this.clientService.client.user.firstName;
    // this.updateClientDto.userDto.lastName = this.clientService.client.user.lastName;
    //this.authservice.test().subscribe((data) => {this.handleData(data)});  
  }

  back(){
    this.router.navigate(['/client-home-page']);
  }
}
