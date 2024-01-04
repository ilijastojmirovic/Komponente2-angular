import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { StorageService } from '../../Storage/storage.service';
import { ManagerService } from '../../services/manager.service';

@Component({
  selector: 'app-manager-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [UserService, ManagerService],
  templateUrl: './manager-home-page.component.html',
  styleUrl: './manager-home-page.component.css'
})

export class ManagerHomePageComponent {

  constructor( private router: Router, private storageService: StorageService, private managerService: ManagerService, private userService: UserService){}

  
  appointments : any;
  cancelAppointmentID : number = 0;
  allowAppointmentID : number = 0;

  ngOnInit(): void {
    const decodedToken = this.storageService.get('decodedCurrentUser');
    if (decodedToken == null) {
      this.router.navigate(['/']);
      return;
    }
    if (decodedToken.rola != "Manager") 
      this.router.navigate(['/']);
    let hall = decodedToken.hallName;
    this.managerService.showAppointments(hall).subscribe((data) => {
      console.log(data);
      this.appointments = data;
    });
  }
  editHall(){
    this.router.navigate(['/editHall-page']);
  }

  newTraining(){
    this.router.navigate(['/newTraining-page']);
  }

  cancel() {
    if(this.cancelAppointmentID <= 0)    return ;

    const decodedToken = this.storageService.get('decodedCurrentUser');
    const userid = decodedToken.id;
    for (let appointment of this.appointments){
      if (appointment.id == this.cancelAppointmentID) {
        let body = {
          clientId: userid,
          appointmentId: this.cancelAppointmentID,
          firstName: decodedToken.firstName,
          lastName: decodedToken.lastName,
          email: decodedToken.email,
          username: decodedToken.username
        };
        console.log(body);
        this.managerService.cancelAppointment(body).subscribe(data =>{
          this.storageService.save('clientBill', this.storageService.get('clientBill') + data);
        });
        
     // this.router.navigate(['/client-home-page']);
        return;
      }
    }
  }

  allow() {
  }

  back(){
    this.storageService.clear();
    this.router.navigate(['/']);
  }
}
