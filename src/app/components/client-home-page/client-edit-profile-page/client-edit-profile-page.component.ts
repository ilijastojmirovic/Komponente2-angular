import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientServiceService } from '../../../services/client-service.service';
import { StorageService } from '../../../Storage/storage.service';

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
    uniqueCardNumber: "",
    userDto: {
      username: "",
      email: "",
      firstName: "",
      lastName: "",
    }
  };

  updatePasswordDto1 = {
    oldPassword: "",
    password: "",
    confirmpassword: ""
  }


  constructor( private router: Router, private clientService: ClientServiceService, private storageService: StorageService){}

  ngOnInit(): void {
      const data = this.storageService.get('decodedCurrentUser');
      this.updateClientDto.uniqueCardNumber = data.uniqueCardNumber;
      this.updateClientDto.userDto.username = data.username;
      this.updateClientDto.userDto.email = data.email;
      this.updateClientDto.userDto.firstName = data.firstName;
      this.updateClientDto.userDto.lastName = data.lastName;
  }

  alert = false;
  changePassword(){
    const storedClientData = this.storageService.get('currentUserToken');
    if(this.updatePasswordDto1.password !== this.updatePasswordDto1.confirmpassword){
      this.alert = true;
      return;
    }

    const updatePasswordDto = {
      oldPassword: this.updatePasswordDto1.oldPassword,
      password: this.updatePasswordDto1.password,
      token: storedClientData
    }
    console.log(updatePasswordDto);
      this.clientService.changePassword(updatePasswordDto).subscribe();
    this.alert = false;
  }

  saveChanges(){
      this.clientService.saveClientChanges(this.updateClientDto).subscribe();
      const storedClientData = this.storageService.get('decodedCurrentUser');
      storedClientData.username = this.updateClientDto.userDto.username;
      storedClientData.email = this.updateClientDto.userDto.email;
      storedClientData.firstName = this.updateClientDto.userDto.firstName;
      storedClientData.lastName = this.updateClientDto.userDto.lastName;
      this.storageService.save('decodedCurrentUser', storedClientData);
      console.log(this.storageService.get('decodedCurrentUser'));  
  }

  back(){
    this.router.navigate(['/client-home-page']);
  }


}
