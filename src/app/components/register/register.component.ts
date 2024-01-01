import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers : [AuthService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  clientCreateDto = {
    id: null,
    uniqueCardNumber: "1234567890",
    nubmerOfTrainings: 0,
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

  constructor(private authService : AuthService, private router: Router){}

  onRegister(){
     this.authService.register_client(this.clientCreateDto).subscribe({
      next: (result) => {
        this.alert = false;
        this.router.navigate(['/']);
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
