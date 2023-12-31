import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-manager-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [UserService],
  templateUrl: './manager-home-page.component.html',
  styleUrl: './manager-home-page.component.css'
})

export class ManagerHomePageComponent {

  constructor( private router: Router){}

  editHall(){
    this.router.navigate(['/editHall-page']);
  }

  newTraining(){
    this.router.navigate(['/newTraining-page']);
  }

  back(){
    this.router.navigate(['/']);
  }
}
