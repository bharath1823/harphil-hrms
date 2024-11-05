import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  editMode: boolean = false;

  // Sample employee data
  employee = {
    employeeId: '12345',
    email: 'jane.cooper@example.com',
    firstName: 'Jane',
    lastName: 'Cooper',
    dob: new Date('1990-01-01'),
    gender: 'Female',
    phone: '123-456-7890',
    shiftTime: '09:00',
    role: 'UI/UX Designer',
    branch: 'New York',
    address: '123 Main St, New York, NY',
    joinedDate: new Date('2022-06-15')
  };

  toggleEditMode() {
    if (this.editMode) {
      this.saveChanges();
    }
    this.editMode = !this.editMode;
  }

  saveChanges() {
    // Logic to save the changes, like calling an API
    console.log('Updated Employee Data:', this.employee);
  }
}
