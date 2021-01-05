import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateComponent } from './create.component';

@Injectable({ providedIn: 'root' })
export class CreateCanDeactivateGuard
  implements CanDeactivate<CreateComponent> {
  canDeactivate(component: CreateComponent): boolean {
    if (component.createTimesheetForm.dirty) {
      return confirm('Are you sure you want to discard your changes?');
    }
    return true; // if form isn't dirty, allow navigation
  }
}
