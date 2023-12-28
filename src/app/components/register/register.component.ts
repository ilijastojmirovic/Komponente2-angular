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
      password: "12345",
      email: "12345@1.1",
      dateOfBirth: "1990-01-01",
      firstName: "John",
      lastName: "Doe",
      permission: true
    }
  };

  alert = false;

  constructor(private registerService : RegisterClientService, private router: Router){}

  onRegister(){
     this.registerService.register_client(this.clientCreateDto).subscribe({
      next: (result) => {
        this.alert = false;
        console.log(result);
      },
      error: (error) => {
        this.alert = true;
        console.log("Vec postoji");
      }
    });
  }
  back(){
    this.router.navigate(['/']);
  }
}
