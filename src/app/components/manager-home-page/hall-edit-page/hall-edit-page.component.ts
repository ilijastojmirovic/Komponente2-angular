import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hall-edit-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hall-edit-page.component.html',
  styleUrl: './hall-edit-page.component.css'
})
export class HallEditPageComponent {


  constructor( private router: Router){}


  back(){
    this.router.navigate(['/manager-home-page']);
  }
}
