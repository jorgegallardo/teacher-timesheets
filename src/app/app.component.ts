import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  trainings = [
    { id: 'training1', name: 'training1' },
    { id: 'training2', name: 'training2' },
  ];

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
