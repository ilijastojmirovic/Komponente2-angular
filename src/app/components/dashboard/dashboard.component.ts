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
export class DashboardComponent implements OnInit {

  testA: any;
  selectedRole: any;

  constructor(private authservice : AuthService, private router: Router){
    
  }
  
 
  
  ngOnInit(): void {  
    //this.authservice.test().subscribe((data) => {this.handleData(data)});  
  }

  handleData(result: any) {
    this.testA = result;
    console.log(result);
  }


  testB() {
    console.log("TESTB");
  }

  goToLoginComponent() {
    this.router.navigate(['/login']);
  }

  setSelectedRole(role: string): void {
    this.selectedRole = role;
  }

  goToRegisterComponent() {
    if (this.selectedRole === 'manager') {
      // Navigate to Manager Registration
      this.router.navigate(['/register-manager']);
    } else if (this.selectedRole === 'client') {
      // Navigate to Client Registration
      this.router.navigate(['/register']);
    }
  }
}
