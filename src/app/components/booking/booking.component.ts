import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientServiceService } from '../../services/client-service.service';
import { StorageService } from '../../Storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ClientServiceService],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  constructor( private router: Router, private clientService: ClientServiceService, private storageService: StorageService){}

  appointments : any;
  appointmentID="";
  ngOnInit(): void {
    this.clientService.showAppointments().subscribe((data) => {
      this.appointments = data;
      this.sortByHall(this.appointments);
    });
  }

  sortByHall(appointments: any[]): void {
    appointments.sort((a, b) => {
      if (a.hall < b.hall) {
        return -1;
      }
      if (a.hall > b.hall) {
        return 1;
      }
      return 0;
    });
  }

  getID(){
    this.clientService.scheduleTraining(this.appointmentID).subscribe();
  }

  back(){
    this.router.navigate(['/client-home-page']);
  }
}
