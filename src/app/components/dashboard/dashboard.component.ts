import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ LoginComponent, CommonModule ],
  providers: [AuthService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  testA: any;

  constructor(private authservice : AuthService){
    
  }
  
  ngOnInit(): void {  
    this.authservice.test().subscribe((data) => {this.handleData(data)});  
  }

  handleData(result: any) {
    this.testA = result;
    console.log(result);
  }


  testB() {
    console.log("TESTB");
  }
}
