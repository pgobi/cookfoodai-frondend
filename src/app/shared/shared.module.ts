import {NgModule, ViewChild} from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatSidenav, MatSidenavModule} from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import {MatExpansionModule} from "@angular/material/expansion";

const COMPONENTS = [
  HeaderComponent,
  FooterComponent
];

const PIPES = [];

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatExpansionModule,
];

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    ...MATERIAL_MODULES,
    ...MODULES,
  ],
  exports: [...MATERIAL_MODULES, ...COMPONENTS]
})
export class SharedModule {
}
