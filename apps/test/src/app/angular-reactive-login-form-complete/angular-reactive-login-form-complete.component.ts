import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'tutorials-angular-reactive-login-form-complete',
  templateUrl: './angular-reactive-login-form-complete.component.html',
  styleUrls: ['./angular-reactive-login-form-complete.component.scss'],
})
export class AngularReactiveLoginFormCompleteComponent {
  // loginForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // });

  passwordRegularExpression =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,16}$/;
  showPassword = false;

  loginForm = this.formBuilder.group({
    username: [
      '',
      [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('[a-zA-Z ]*'),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16),
        Validators.pattern(this.passwordRegularExpression),
      ],
    ],
  });

  constructor(private formBuilder: FormBuilder) {}

  submit() {
    alert(`form submitted`);
  }

  toggelShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
