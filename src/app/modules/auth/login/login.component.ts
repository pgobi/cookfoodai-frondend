import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginRequest} from "../../../core/interfaces/login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private authService: AuthService, private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    })

  }

  onSubmit() {
    const dataLogin:LoginRequest =this.loginForm.value
    this.authService.login(dataLogin).subscribe();
  }
}
