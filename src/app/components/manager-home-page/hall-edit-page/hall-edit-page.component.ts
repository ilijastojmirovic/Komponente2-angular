import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../../Storage/storage.service';
import { ManagerService } from '../../../services/manager.service';

@Component({
  selector: 'app-hall-edit-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ManagerService],
  templateUrl: './hall-edit-page.component.html',
  styleUrl: './hall-edit-page.component.css'
})
export class HallEditPageComponent {


  constructor( private router: Router, private storageService: StorageService, private managerService: ManagerService){}

  hallName: any;
  description: any;
  numberOfTrainers: any;


  save(){
    const decodedToken = this.storageService.get('decodedCurrentUser');
    const oldName = decodedToken.hallName;
    let editHall = {
      managerID: decodedToken.id,
      oldHallName: oldName,
      hallName: this.hallName,
      description: this.description,
      numberOfTrainers: this.numberOfTrainers
    };
    this.managerService.saveHallChanges(editHall).subscribe();
    this.router.navigate(['/manager-home-page']);

  }

  back(){
    this.router.navigate(['/manager-home-page']);
  }
}
