import { NgModule } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {SharedModule} from '../shared/shared.module';
import {RatingInputComponent} from '../rating-input/rating-input.component';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    AngularFireAuthModule,
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [
    SignupComponent,
    LoginComponent,
    RatingInputComponent
  ]
})
export class AuthModule { }
