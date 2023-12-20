import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterManagerComponent } from './components/register-manager/register-manager.component';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-manager', component: RegisterManagerComponent },
  { path: 'admin-home-page', component: AdminHomePageComponent},
  // ostale rute...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
