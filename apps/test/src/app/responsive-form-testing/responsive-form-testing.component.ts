import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'tutorials-responsive-form-testing',
  templateUrl: './responsive-form-testing.component.html',
  styleUrls: ['./responsive-form-testing.component.scss'],
})
export class ResponsiveFormTestingComponent {
  // public username = new FormControl();
  // public password = new FormControl();

  // loginForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // });

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  submit() {
    alert(`form submitted ${this.loginForm.controls.username.value}`);
  }
}
