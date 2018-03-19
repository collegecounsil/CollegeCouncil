import {AbstractControl} from '@angular/forms';

export class CustomValidators {
  static Match(firstControlName, secondControlName) {
    return (AC: AbstractControl) => {
      let firstControlValue = AC.get(firstControlName).value;
      let secondControlValue = AC.get(secondControlName).value;
      if (firstControlValue != secondControlValue) {
        AC.get(secondControlName).setErrors({passwordNotMatch: true});
      } else {
        return null
      }
    };
  }
}