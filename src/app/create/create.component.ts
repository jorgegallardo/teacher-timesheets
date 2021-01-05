import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TimesheetsService } from '../timesheets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  @ViewChild('form') createTimesheetForm: NgForm;
  constructor(
    private timesheetsService: TimesheetsService,
    private router: Router
  ) {}

  onSubmit(form: NgForm): void {
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const fileNumber = form.value.fileNumber;
    this.timesheetsService.submitTimesheet({ firstName, lastName, fileNumber });
    form.resetForm();
    this.router.navigate(['/download']);
  }
}
