import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'tutorials-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // // loginForm = new FormGroup({
  // //   username: new FormControl(''),
  // //   password: new FormControl(''),
  // // });

  passwordRegularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
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
