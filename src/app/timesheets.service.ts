import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Timesheet } from './timesheet.model';

@Injectable({ providedIn: 'root' })
export class TimesheetsService {
  constructor(private http: HttpClient) {}

  readyToDownload = false;

  submitTimesheet(timesheetData: Timesheet): void {
    this.http
      .post<{ message: string }>('http://localhost:3000/create', timesheetData)
      .subscribe((responseData) => {
        this.readyToDownload = true;
        console.log(responseData);
        alert('Timesheet created on server.');
      });
  }
}
