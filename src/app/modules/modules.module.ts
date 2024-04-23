import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import {HomeModule} from "./home/home.module";
import {AuthModule} from "./auth/auth.module";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    HomeModule,
    AuthModule
  ]
})
export class ModulesModule { }
