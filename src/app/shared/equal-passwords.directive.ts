import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';

export const equalPasswordsValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const passwordConfirm = control.get('passwordConfirm');
  return password && passwordConfirm && password.value !== passwordConfirm.value ? {identityRevealed: true} : null;
};

@Directive({
  selector: '[appEqualPasswords]',
  providers: [{provide: NG_VALIDATORS, useExisting: EqualPasswordsValidatorDirective, multi: true}]
})
export class EqualPasswordsValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    return equalPasswordsValidator(control);
  }
}

