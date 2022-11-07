import { Component } from '@angular/core';

@Component({
  selector: 'tutorials-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  submit() {
    console.log('form submitted');
  }
}
