import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './users-routing.module';
import { EditUserComponent } from './components/edit-user/edit-user.component';


@NgModule({
  declarations: [
    // EditUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UsersModule { }