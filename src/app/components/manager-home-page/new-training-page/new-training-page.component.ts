import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { StorageService } from '../../../Storage/storage.service';



@Component({
  selector: 'app-new-training-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [UserService],
  templateUrl: './new-training-page.component.html',
  styleUrl: './new-training-page.component.css'
})
export class NewTrainingPageComponent {

  constructor( private router: Router, private userService: UserService, private storageService: StorageService){}

  category: string = 'ignore';
  categorys: any;

  time: any;
  day: any;

  ngOnInit(): void {
    this.userService.getCategory().subscribe((data) => {
      this.categorys = data;
    });
  }
  addNewTraining(){
    
  }

  back(){
    this.router.navigate(['/manager-home-page']);
  }
}
