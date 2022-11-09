import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'tutorials-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // username = new FormControl('');
  // password = new FormControl('');

  // loginForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // });

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) {}

  submit() {
    console.log(this.loginForm.controls.username);
    alert(`form submitted ${this.loginForm.controls.username.value}`);
  }
}
