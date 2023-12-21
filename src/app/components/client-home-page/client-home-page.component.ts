import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientServiceService } from '../../services/client-service.service';

@Component({
  selector: 'app-client-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ClientServiceService],
  templateUrl: './client-home-page.component.html',
  styleUrl: './client-home-page.component.css'
})
export class ClientHomePageComponent {
  constructor( private router: Router, private client: ClientServiceService){}

  back(){
    this.router.navigate(['/']);
  }

  editProfile(){
    this.router.navigate(['/client-editProfile-page']);
  }
}
