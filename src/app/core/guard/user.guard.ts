import { CanActivateFn } from '@angular/router';
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";
import {map, Observable, tap} from "rxjs";
import {UserResponse} from "../interfaces/user";

export const userGuard: CanActivateFn = (route, state) :Observable<boolean>|boolean=> {
  const oauthService: AuthService = inject(AuthService);
  const accessToken=localStorage.getItem('access_token');
  const refreshToken=localStorage.getItem('refresh_token');
  if(!accessToken || !refreshToken){
    return false;
  }
  return oauthService.user().pipe(map((data: UserResponse)=>
    data.role==='USER'
  ))
};
