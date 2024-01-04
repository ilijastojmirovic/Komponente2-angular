import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { StorageService } from '../../../Storage/storage.service';
import { ManagerService } from '../../../services/manager.service';



@Component({
  selector: 'app-new-training-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [UserService, ManagerService],
  templateUrl: './new-training-page.component.html',
  styleUrl: './new-training-page.component.css'
})
export class NewTrainingPageComponent {

  constructor( private router: Router, private userService: UserService, private storageService: StorageService, private managerService: ManagerService){}

  category: string = 'ignore';
  categorys: any;

  time: any;
  day: string = 'ignore';

  ngOnInit(): void {
    const decodedToken = this.storageService.get('decodedCurrentUser');
    if (decodedToken == null) {
      this.router.navigate(['/']);
      return;
    }
    if (decodedToken.rola != "Manager" ) 
      this.router.navigate(['/']);

    this.userService.getCategory().subscribe((data) => {
      this.categorys = data;
    });
  }

  addNewTraining(){
    const decodedToken = this.storageService.get('decodedCurrentUser');
    if (decodedToken == null) return;
    const body = {
      "category": this.category,
      "dayOfWeek": this.day,
      "time": this.time.toString(),
      "managerId": decodedToken.id,
    }
    this.managerService.newAppointment(body).subscribe((data) => {
      console.log(data);
      // this.router.navigate(['/manager-home-page']);
    });
  }

  back(){
    this.router.navigate(['/manager-home-page']);
  }
}
