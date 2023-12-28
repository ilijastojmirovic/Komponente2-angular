import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterClientService } from '../../services/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-manager',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers : [RegisterClientService],
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

  constructor(private registerService : RegisterClientService, private rute: Router){}

  onRegister(){
    console.log(this.managerCreateDto);
    this.registerService.register_manager(this.managerCreateDto).subscribe({
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
