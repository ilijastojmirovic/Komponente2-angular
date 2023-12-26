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


  constructor( private router: Router, private clientService: ClientServiceService,private storageService: StorageService){}

  ngOnInit(): void {
    this.clientService.getClientInfo(this.storageService.get("currentUserToken")).subscribe((data) => {
      this.updateClientDto.userDto.username = data.username;
      this.updateClientDto.userDto.email = data.email;
      this.updateClientDto.userDto.firstName = data.firstName;
      this.updateClientDto.userDto.lastName = data.lastName;
    });
  }

  back(){
    this.router.navigate(['/client-home-page']);
  }

  alert = false;
  changePassword(){
    const storedClientData = this.storageService.get('currentClient');
    if(this.updatePasswordDto1.password !== this.updatePasswordDto1.confirmpassword){
      this.alert = false;
      this.alert = true;
      return;
    }

    const updatePasswordDto = {
      oldPassword: this.updatePasswordDto1.oldPassword,
      password: this.updatePasswordDto1.password,
      email: storedClientData.user.email
    }
    console.log(updatePasswordDto);
      this.clientService.changePassword(updatePasswordDto).subscribe();
    this.alert = false;
  }

  saveChanges(){
      console.log(this.updateClientDto);
      this.clientService.saveClientChanges(this.updateClientDto).subscribe();
      const storedClientData = this.storageService.get('currentClient');
      storedClientData.uniqueCardNumber = this.updateClientDto.uniqueCardNumber;
      storedClientData.user.username = this.updateClientDto.userDto.username;
      storedClientData.user.email = this.updateClientDto.userDto.email;
      storedClientData.user.firstName = this.updateClientDto.userDto.firstName;
      storedClientData.user.lastName = this.updateClientDto.userDto.lastName;
      this.storageService.save('currentClient', storedClientData);  
  }
}
