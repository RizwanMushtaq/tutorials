import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ResponsiveFormTestingComponent } from './responsive-form-testing/responsive-form-testing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularReactiveLoginFormCompleteComponent } from './angular-reactive-login-form-complete/angular-reactive-login-form-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    ResponsiveFormTestingComponent,
    AngularReactiveLoginFormCompleteComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
