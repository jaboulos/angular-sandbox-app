import { AbstractControl, ValidationErrors } from '@angular/forms';

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export class CustomValidators {
  // username cannot contain a space
  // this function takes parameter of type abstract control
  // should return ValidationErrors or null
  static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
    // if there is a space in the username
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }

  static cannotContainNumbers(control: AbstractControl) : ValidationErrors | null {
    // if there is a space in the username
    if ((control.value as any).indexOf(numArray) >= 0) {
      return { cannotContainNumbers: true };
    }
    return null;
  }
}
