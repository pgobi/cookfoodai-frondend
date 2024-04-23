import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {userGuard} from "../core/guard/user.guard";

const routes: Routes = [
  {
    path: '',
    canActivate: [userGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
