import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RegisterClientService } from '../../services/register-client.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers : [RegisterClientService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  clientCreateDto = {
    id: null,
    uniqeCardNumber: "1234567890",
    nubmerOfTrainings: 5,
    userDto: {
      username: "john_doe",
      password: "securePassword123",
      email: "john.doe@example.com",
      dateOfBirth: "1990-01-01",
      firstName: "John",
      lastName: "Doe",
      permission: true
    }
  };

  constructor(private registerService : RegisterClientService){}

  onRegister(){
    console.log(32);
    console.log(this.clientCreateDto);
    this.registerService.register(this.clientCreateDto).subscribe();
  }

}
