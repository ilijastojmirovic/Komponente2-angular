import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientServiceService } from '../../../services/client-service.service';
import { StorageService } from '../../../Storage/storage.service';


@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ClientServiceService],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  bill = 0
  appointments : any;
  appointmentID =  "0";

  category: string = 'ignore';
  day: string = 'ignore';
  type : string = 'ignore';

  constructor( private router: Router, private clientService: ClientServiceService, private storageService: StorageService){}

  ngOnInit(): void {
    this.clientService.showAppointments().subscribe((data) => {
      this.appointments = data;
      this.sortByHall(this.appointments);
    });
  }
 
  filter(){
    let filter = {
      category: this.category,
      day: this.day,
      type: this.type
    };
    console.log(filter);
    this.clientService.filterAppointments(filter).subscribe((data) => {
      this.appointments = data;
      this.sortByHall(this.appointments);
    });
  }

  getID() {
    if(this.appointmentID == "0"){
        return ;
    }
    for (let appointment of this.appointments){
        if (appointment.id == this.appointmentID) {
            this.clientService.scheduleTraining(appointment).subscribe( data =>{
              this.storageService.save('clientBill', this.storageService.get('clientBill') + data);
            });
            return;
        }
    }
    console.error('Appointment not found');
  }

  sortByHall(appointments: any[]): void { //booking.component //client-home-page.component
    appointments.sort((a, b) => {
      if (a.hall < b.hall)
        return -1;
      if (a.hall > b.hall)
        return 1;
      return 0;
    });
  }

  back(){
    this.router.navigate(['/client-home-page']);
  }

}
