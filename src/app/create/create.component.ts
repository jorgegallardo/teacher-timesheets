import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TimesheetsService } from '../timesheets.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  constructor(private timesheetsService: TimesheetsService) {}

  onSubmit(form: NgForm): void {
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const fileNumber = form.value.fileNumber;
    this.timesheetsService.submitTimesheet({ firstName, lastName, fileNumber });
    form.resetForm();
  }
}
