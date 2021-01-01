import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TimesheetsService } from './timesheets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // trainings = [
  //   { id: 'training1', name: 'training1' },
  //   { id: 'training2', name: 'training2' },
  // ];

  constructor(private timesheetsService: TimesheetsService) {}

  onSubmit(form: NgForm): void {
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const fileNumber = form.value.fileNumber;
    this.timesheetsService.submitTimesheet({ firstName, lastName, fileNumber });
  }
}
