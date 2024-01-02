import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientServiceService } from '../../services/client-service.service';
import { StorageService } from '../../Storage/storage.service';

@Component({
  selector: 'app-client-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ClientServiceService],
  templateUrl: './client-home-page.component.html',
  styleUrl: './client-home-page.component.css'
})
export class ClientHomePageComponent {

  notifications: any;
  bill: number = 0;

  constructor( private router: Router, private clientService: ClientServiceService, private storageService: StorageService){}
  
  ngOnInit(): void {
    this.bill = this.storageService.get('clientBill');
  }

  showNotifications(){
    const user = this.storageService.get('decodedCurrentUser');
    this.clientService.showNotifications(user.username).subscribe((data) => {
      this.notifications = data;
    });
  }
  editProfile(){
    this.router.navigate(['/client-editProfile-page']);
  }

  clientsTrainings(){
    this.router.navigate(['/myTrainings-page']);
  }

  toSchedule(){
    this.router.navigate(['/booking']);
  }

  back(){
    this.router.navigate(['/']);
  }

}
