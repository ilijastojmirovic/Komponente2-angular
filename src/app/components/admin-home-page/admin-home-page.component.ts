import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StorageService } from '../../Storage/storage.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [UserService, AdminService],
  templateUrl: './admin-home-page.component.html',
  styleUrl: './admin-home-page.component.css'
})
export class AdminHomePageComponent {

  clients: any;
  managers: any;
  notification: any;

  constructor(private  userService: UserService, private router: Router, private storageService: StorageService, private adminService: AdminService ){}


  showNotifications(){
    this.userService.getNotifications().subscribe((data) => {
      console.log(data);
      this.notification = data.content;
    })
  }


  showClients(){
    const storedClientData = this.storageService.get('currentUserToken');
    this.adminService.showClients(storedClientData).subscribe((data) => {
      this.clients = data.content;
    });
  }

  showManagers(){
    const storedClientData = this.storageService.get('currentUserToken');
    this.adminService.showManagers(storedClientData).subscribe((data) => {
      this.managers = data.content;
    });  
  }

  managerPermission(permission1 : any, email1: any, username1: any){
    const updatePermissionDto = {
      username: username1,
      email: email1,
      permission: permission1 
    }
    const storedClientData = this.storageService.get('currentUserToken');
    this.adminService.updatePermissionManager(updatePermissionDto, storedClientData).subscribe();
  }

  clientPermission(permission1 : any, email1: any, username1: any){
    const updatePermissionDto = {
      username: username1,
      email: email1,
      permission: permission1 
    }
    const storedClientData = this.storageService.get('currentUserToken');
    this.adminService.updatePermissionClient(updatePermissionDto, storedClientData).subscribe();
  }

  back(){
    this.storageService.clear();
    this.router.navigate(['/']);
  }

}
