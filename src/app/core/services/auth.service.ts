import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {LoginRequest, LoginResponse} from "../interfaces/login";
import { Api } from 'src/app/core/enums/api.enum';
import {BehaviorSubject, tap} from "rxjs";
import {Router} from "@angular/router";
import {UserResponse} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = new BehaviorSubject(false);
  constructor(private httpClient: HttpClient, private router: Router) { }
  login(data:LoginRequest) {
    return this.httpClient.post<LoginResponse>(environment.apiUrl + Api.AUTH_LOGIN , data).
    pipe(tap((data: LoginResponse)=>{
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);
      this.router.navigate(['/']);
    }))
  }
  register(data:LoginRequest) {
    return this.httpClient.post(environment.apiUrl + Api.USER_SIGNUP, data)
  }
  user() {
    return this.httpClient.get<UserResponse>(environment.apiUrl + Api.AUTH_ME)
  }
}
