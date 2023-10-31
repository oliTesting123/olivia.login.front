import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import { LoginComponent } from './login/views/login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }