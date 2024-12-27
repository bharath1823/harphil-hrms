
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private route:Router){}
  isEditMode: boolean = false;

  // Define the employee data as an array of objects
  employeeFields = [
    { label: 'Employee ID', value: '12345', key: 'employeeId', type: 'text', editable: true },
    { label: 'Official Email ID', value: 'jane.cooper@example.com', key: 'email', type: 'email', editable : true },
    { label: 'First Name', value: 'Jane', key: 'firstName', type: 'text', editable : true },
    { label: 'Last Name', value: 'Cooper', key: 'lastName', type: 'text', editable : true },
    { label: 'Date of Birth', value: new Date('1990-01-01'), key: 'dob', type: 'date', editable : true },
    { label: 'Gender', value: 'Male', key: 'gender', type: 'select', options: ['Male', 'Female'], editable : true },
    { label: 'Phone Number', value: '123-456-7890', key: 'phone', type: 'tel', editable : true },
    { label: 'Shift Time', value: '09:00', key: 'shiftTime', type: 'time', editable : true },
    { label: 'Role', value: 'UI/UX Designer', key: 'role', type: 'text', editable : true },
    { label: 'Branch', value: 'New York', key: 'branch', type: 'text', editable : true },
    { label: 'PAN', value: 'GHU12345678', key: 'PAN', type: 'text', editable : false },
    { label: 'Adhaar', value: '4123 2653 7678', key: 'Adhaar', type: 'text', editable : false },
    { label: 'Acc No', value: '345665435458', key: 'acc', type: 'text', editable : false },
    { label: 'IFSC code', value: 'SBI34567', key: 'ifsc', type: 'text', editable : false },
    { label: 'PF No', value: '12345678', key: 'PF', type: 'text', editable : false },
    { label: 'Address', value: '123 Main St, New York, NY', key: 'address', type: 'text', editable : false },
    { label: 'Joined Date', value: new Date('2022-06-15'), key: 'joinedDate', type: 'date', editable : false },
  ];

  // ngOnInit lifecycle hook to fetch saved data on component initialization
  ngOnInit() {
    const savedData = localStorage.getItem('employeeData');
    if (savedData) {
      this.employeeFields = JSON.parse(savedData);  // Load data from localStorage
    }
  }

  toggleEditMode() {
    // When toggling edit mode, save changes if in edit mode
    if (this.isEditMode) {
      this.saveChanges();
    }
    this.isEditMode = !this.isEditMode;
  }

  saveChanges() {
    // Log the updated employee data to the console
    console.log('Updated Employee Data:', this.employeeFields);

    // Save updated data to localStorage
    localStorage.setItem('employeeData', JSON.stringify(this.employeeFields));
  }
  topayslip(){
    this.route.navigateByUrl('/dashboard/payslips')
  }
}

