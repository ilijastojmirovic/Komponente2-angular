import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterManagerComponent } from './components/register-manager/register-manager.component';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';
import { ClientHomePageComponent } from './components/client-home-page/client-home-page.component';
import { ManagerHomePageComponent } from './components/manager-home-page/manager-home-page.component';
import { ClientEditProfilePageComponent } from './components/client-home-page/client-edit-profile-page/client-edit-profile-page.component';
import { BookingComponent } from './components/client-home-page/booking/booking.component';
import { HallEditPageComponent } from './components/manager-home-page/hall-edit-page/hall-edit-page.component';
import { NewTrainingPageComponent } from './components/manager-home-page/new-training-page/new-training-page.component';


export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-manager', component: RegisterManagerComponent },
  { path: 'admin-home-page', component: AdminHomePageComponent},
  { path: 'client-home-page', component: ClientHomePageComponent},
  { path: 'manager-home-page', component: ManagerHomePageComponent},
  { path: 'client-editProfile-page', component: ClientEditProfilePageComponent},
  { path: 'booking', component: BookingComponent},
  { path: 'editHall-page', component: HallEditPageComponent},
  { path: 'newTraining-page', component: NewTrainingPageComponent},
  // ostale rute...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
