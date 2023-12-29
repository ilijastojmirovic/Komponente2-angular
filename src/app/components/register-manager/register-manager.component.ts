import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register-manager',
  standalone: true,
  imports: [CommonModule, FormsModule],

  providers : [AuthService],
  templateUrl: './register-manager.component.html',
  styleUrl: './register-manager.component.css'
})
export class RegisterManagerComponent {

  managerCreateDto = {
    id: null,
    hallName: "321",
    startDate: "1000-02-03",
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

  alert = false;

  constructor(private authService : AuthService, private rute: Router){}

  onRegister(){
    console.log(this.managerCreateDto);
    this.authService.register_manager(this.managerCreateDto).subscribe({
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
    this.rute.navigate(['/']);
  }


}
