import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payslips',
  templateUrl: './payslips.component.html',
  styleUrl: './payslips.component.css'
})
export class PayslipsComponent {
  constructor(private route:Router){}
  profilepage(){
    this.route.navigateByUrl('/dashboard/profile')
  }

}
