import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/users/views/dashboard/dashboard.component';
import { EditUserComponent } from './modules/users/components/edit-user/edit-user.component';

const routes: Routes = [
  
  {
    path: '', component: DashboardComponent
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
