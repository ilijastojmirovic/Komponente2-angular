import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register-manager',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers : [AuthService, UserService],
  templateUrl: './register-manager.component.html',
  styleUrl: './register-manager.component.css'
})
export class RegisterManagerComponent {

  managerCreateDto = {
    id: 0,
    hallName: "ignore",
    startDate: "1000-02-03",
    userDto: {
      username: "john_doe",
      password: "12345",
      email: "john.doe@example.com",
      dateOfBirth: "1990-01-01",
      firstName: "John",
      lastName: "Doe",
      permission: true
    }
  };

  hall: string = 'ignore';
  halls: any;
  alert = false;
  isInvalidSelection = false;

  constructor(private authService : AuthService, private router: Router, private userService: UserService){}

  ngOnInit(): void {
    this.userService.getHalls().subscribe((data) => {
      this.halls = data;  
    });
  }

  onRegister(){
    this.managerCreateDto.hallName = this.hall;
    if (this.hall === 'ignore' || this.managerCreateDto.hallName === 'ignore') {
      this.isInvalidSelection = true;
      return;
    }
    console.log(this.managerCreateDto);
    this.authService.register_manager(this.managerCreateDto).subscribe({
      next: (result) => {
        if(result == null){
          this.alert = true;
        }
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
