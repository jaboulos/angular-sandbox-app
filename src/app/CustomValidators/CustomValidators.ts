import { AbstractControl, ValidationErrors } from '@angular/forms';


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
    if ((control.value as number).indexOf('') >= 0) {
      return { cannotContainNumbers: true };
    }
    return null;
  }
}
