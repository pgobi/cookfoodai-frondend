import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


const COMPONENTS=[
  HeaderComponent,
  FooterComponent

]
const PIPES=[
]
const MATERIAL_MODULES=[
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
]
const MODULES=[
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
]
@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    ...MATERIAL_MODULES,
    ...MODULES,
  ],
  exports:[...MATERIAL_MODULES,...COMPONENTS]
})
export class SharedModule { }
