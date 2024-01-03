import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientServiceService } from '../../../services/client-service.service';
import { StorageService } from '../../../Storage/storage.service';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-client-trainings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ClientServiceService, UserService],
  templateUrl: './client-trainings.component.html',
  styleUrl: './client-trainings.component.css'
})
export class ClientTrainingsComponent {

  appointments : any;
  appointmentID: any;

  constructor( private router: Router, private clientService: ClientServiceService, private storageService: StorageService, private userService: UserService){}

  ngOnInit(): void {
    const decodedToken = this.storageService.get('decodedCurrentUser');
    let userid = 0;
    if (decodedToken != null) 
       userid = decodedToken.id;
    else return;
    this.clientService.getClientAppointment(userid).subscribe((data) => {
      console.log(data);
      this.appointments = data;
      this.sortByHall(this.appointments);
    });
  }


  accept() {
    if(this.appointmentID == "" || this.appointmentID == " " || this.appointmentID == "0")
      return ;
    
    const decodedToken = this.storageService.get('decodedCurrentUser');
    const userid = decodedToken.id;
    for (let appointment of this.appointments){
      if (appointment.id == this.appointmentID) {
        let body = {
          clientId: userid,
          appointmentId: this.appointmentID,
          firstName: decodedToken.firstName,
          lastName: decodedToken.lastName,
          email: decodedToken.email,
          username: decodedToken.username
        };
        this.userService.cancelAppointment(body).subscribe(data =>{
          this.storageService.save('clientBill', this.storageService.get('clientBill') + data);
        });
        
     // this.router.navigate(['/client-home-page']);
        return;
      }
    }
  }

  sortByHall(appointments: any[]): void {
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
