import {Component, OnInit} from '@angular/core';
import {
  AbstractControl, FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {RateOptions} from "../rate/rate.component";

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

interface TemplateFormI {
  login: string,
  email: string,
  password: string
}

@Component({
  selector: 'forms',
  templateUrl: 'forms.component.html',
  styleUrls: ['forms.component.scss']
})

export class FormsComponent {

  constructor(public _fb: FormBuilder) {}

  public get skills(): FormArray {
    return this.fbForm.get('skills') as FormArray;
  }

  public templateForm: TemplateFormI = {
    login: 'Borya',
    email: '',
    password: ''
  }

  public myForm = new FormGroup({
    login: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
  })

  public validatorsForm = new FormGroup({
      mail: new FormControl('', checkRegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g)),
      password_one: new FormControl('', ),
      password_two: new FormControl('', ),
    },
    {
      validators: conformPassword,
    }
  )

  public fbForm = this._fb.group({
    name: ['Vasya'],
    skills: this._fb.array([])
  })

  public customForm = this._fb.group({
    rate: [2]
  })

  public rateOptions: RateOptions = {
    rates: 10,
    text: 'Rate our course'
  }

  public handleValue(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      alert('Form is not valid!');
    }
    console.log(this.myForm.get(['login'])?.value);
  }

  public newSkill(): FormGroup {
    return this._fb.group({
      skill: '',
      experience: ''
    })
  }

  public addSkill(): void {
    this.skills.push(this.newSkill());
  }

  public removeSkill(i: number): void {
    this.skills.removeAt(i);
  }

  public onSubmit(): void {
    console.log(this.fbForm.value);
  }
}
