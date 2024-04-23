import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import { RegisterComponent } from './register/register.component';
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const COMPONETS = [
  ForgotPasswordComponent,
  LoginComponent,
  LogoutComponent,
  RegisterComponent
]

@NgModule({
  declarations: [
    ...COMPONETS
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
