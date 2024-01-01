import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientServiceService } from '../../../services/client-service.service';
import { StorageService } from '../../../Storage/storage.service';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ClientServiceService, UserService],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  bill = 0
  appointments : any;
  appointmentID =  " ";

  category: string = 'ignore';
  day: string = 'ignore';
  type : string = 'ignore';
  categorys: any;

  constructor( private router: Router, private clientService: ClientServiceService, private storageService: StorageService, private userService: UserService){}

  ngOnInit(): void {
    const decodedToken = this.storageService.get('decodedCurrentUser');
    this.clientService.showAppointments(decodedToken.id).subscribe((data) => {
      this.appointments = data;
      this.sortByHall(this.appointments);
    });
    this.userService.getCategory().subscribe((data) => {
      this.categorys = data;
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

  accept() {
    if(this.appointmentID == "0"){
        return ;
    }
    for (let appointment of this.appointments){
        if (appointment.id == this.appointmentID) {
          const decodedToken = this.storageService.get('decodedCurrentUser');
          let body = {
            clientId: decodedToken.id,
            appointmentId: this.appointmentID,
            firstName: decodedToken.firstName,
            lastName: decodedToken.lastName,
            email: decodedToken.email,
            username: decodedToken.username
          };
          console.log(body);
            this.clientService.scheduleTraining(body).subscribe( data =>{
              console.log(data);
              this.storageService.save('clientBill', this.storageService.get('clientBill') + data);
            });
            
            this.router.navigate(['/client-home-page']);
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
