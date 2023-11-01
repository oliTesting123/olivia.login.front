import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import { LoginComponent } from './login/views/login/login.component';
import { ProductsComponent } from './products/views/products/products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/views/home/home.component';

@NgModule({
  declarations: [
    // LoginComponent,
    // EditProductComponent,
    // ProductsComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ModulesModule { }