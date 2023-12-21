import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [UserService],
  templateUrl: './admin-home-page.component.html',
  styleUrl: './admin-home-page.component.css'
})
export class AdminHomePageComponent {

  clients: any;
  managers: any;

  constructor(private  userService: UserService, private router: Router){}

  showClients(){
    this.userService.showClients().subscribe((data) => {
      this.clients = data.content;
      console.log(this.clients);
    });
  }

  showManagers(){
    this.userService.showManagers().subscribe((data) => {
      this.managers = data.content;
        console.log(this.managers);
    });  
  }

  back(){
    this.router.navigate(['/']);
  }

  managerPermission(permission1 : any, email1: any, username1: any){
    const updatePermissionDto = {
      username: username1,
      email: email1,
      permission: permission1 
    }
    this.userService.updatePermissionManager(updatePermissionDto).subscribe();
  }

  clientPermission(permission1 : any, email1: any, username1: any){
    const updatePermissionDto = {
      username: username1,
      email: email1,
      permission: permission1 
    }
    this.userService.updatePermissionClient(updatePermissionDto).subscribe();
  }

}
