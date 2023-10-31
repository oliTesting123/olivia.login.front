import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/views/login/login.component';
import { EditUserComponent } from './modules/users/components/edit-user/edit-user.component';

const routes: Routes = [
  
  {
    path: '', component: LoginComponent
  },
  {
    path: 'edit', component: EditUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
