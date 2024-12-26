import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AttendeceComponent } from './attendece/attendece.component';
import { DbImgComponent } from './db-img/db-img.component';
import { PayslipsComponent } from './payslips/payslips.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,
    children:[
      {path:'profile',component:ProfileComponent},
      {path:'attendence',component:AttendeceComponent},
      {path:"db-img",component:DbImgComponent},
      {path:'payslips',component:PayslipsComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
