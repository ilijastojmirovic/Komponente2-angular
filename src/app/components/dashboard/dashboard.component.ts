import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ LoginComponent, CommonModule, FormsModule ],
  providers: [AuthService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent{

  selectedRole: any;

  constructor(private authservice : AuthService, private router: Router){}

  goToLoginComponent() {
    this.router.navigate(['/login']);
  }

  setSelectedRole(role: string): void {
    this.selectedRole = role;
  }

  goToRegisterComponent() {
    if (this.selectedRole === 'manager') {
      this.router.navigate(['/register-manager']);
    } else if (this.selectedRole === 'client') {
      this.router.navigate(['/register']);
    }
  }
}




// admin(){
//   this.router.navigate(['/admin-home-page']);
// }

// client(){
//   this.router.navigate(['/client-home-page']);
// }

// manager(){
//   this.router.navigate(['/manager-home-page']);
// }
