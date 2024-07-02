import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export function checkRegExp(regExp: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden : boolean = regExp.test(control.value);
    return forbidden ? null : { forbiddenValue : { value: control.value } };
  }
}

export const conformPassword: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  return control.value.password_one === control.value.password_two ? null : { PasswordDoNotMatch : true };
}

@Component({
  selector: 'forms',
  templateUrl: 'forms.component.html',
  styleUrls: ['forms.component.scss']
})

export class FormsComponent {

  public myForm = new FormGroup({
    login: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
  })

  public handleValue(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      alert('Form is not valid!');
    }
    console.log(this.myForm.get(['login'])?.value);
  }

  public validatorsForm = new FormGroup({
    mail: new FormControl('', checkRegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g)),
    password_one: new FormControl('', ),
    password_two: new FormControl('', ),
  },
    {
      validators: conformPassword,
    }
    )
}
