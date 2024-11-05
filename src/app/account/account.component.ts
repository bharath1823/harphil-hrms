import { Component } from '@angular/core';

interface AttendanceRecord {
  date: string;
  timeIn: string;
  timeOut: string;
  breakHours: string;
  workingHours: string;
  onTime: boolean;
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'] // Fixed styleUrls typo (should be styleUrls)
})
export class AccountComponent {
  // Data for the attendance records
  attendanceRecords: AttendanceRecord[] = [
    { date: '25-01-2023', timeIn: '09:46 AM', timeOut: '07:46 PM', breakHours: '0 Hr 40 Mins 56 Secs', workingHours: '8 Hrs 40 Mins 56 Secs', onTime: true },
    { date: '25-01-2023', timeIn: '10:06 AM', timeOut: '07:46 PM', breakHours: '0 Hr 40 Mins 56 Secs', workingHours: '8 Hrs 40 Mins 56 Secs', onTime: false },
    { date: '25-01-2023', timeIn: '09:46 AM', timeOut: '07:46 PM', breakHours: '0 Hr 40 Mins 56 Secs', workingHours: '8 Hrs 40 Mins 56 Secs', onTime: true },
    { date: '25-01-2023', timeIn: '10:06 AM', timeOut: '07:46 PM', breakHours: '0 Hr 40 Mins 56 Secs', workingHours: '8 Hrs 40 Mins 56 Secs', onTime: false },
    { date: '25-01-2023', timeIn: '09:46 AM', timeOut: '07:46 PM', breakHours: '0 Hr 40 Mins 56 Secs', workingHours: '8 Hrs 40 Mins 56 Secs', onTime: true },
    { date: '25-01-2023', timeIn: '10:06 AM', timeOut: '07:46 PM', breakHours: '0 Hr 40 Mins 56 Secs', workingHours: '8 Hrs 40 Mins 56 Secs', onTime: false },
    { date: '25-01-2023', timeIn: '09:46 AM', timeOut: '07:46 PM', breakHours: '0 Hr 40 Mins 56 Secs', workingHours: '8 Hrs 40 Mins 56 Secs', onTime: true },
    // Add more records as needed
  ];

  // For pagination (if you want to implement it later)
  totalEntries: number = this.attendanceRecords.length;
  pageSize: number = 10; // Default page size
  currentPage: number = 1;

  // Function to handle pagination (if needed)
  get paginatedRecords(): AttendanceRecord[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.attendanceRecords.slice(start, start + this.pageSize);
  }
}
