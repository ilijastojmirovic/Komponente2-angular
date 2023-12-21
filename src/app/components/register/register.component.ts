import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RegisterClientService } from '../../services/register.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
    uniqueCardNumber: "1234567890",
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

  constructor(private registerService : RegisterClientService, private router: Router){}

  onRegister(){
    console.log(32);
    console.log(this.clientCreateDto);
    this.registerService.register_client(this.clientCreateDto).subscribe();
  }
  back(){
    this.router.navigate(['/']);
  }
}
