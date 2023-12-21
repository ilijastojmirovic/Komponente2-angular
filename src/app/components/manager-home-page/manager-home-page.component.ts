import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manager-home-page.component.html',
  styleUrl: './manager-home-page.component.css'
})
export class ManagerHomePageComponent {
  constructor( private router: Router){}

  back(){
    this.router.navigate(['/']);
  }
}
