import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const usersRoutes: Routes = [
    // { 
    //     path: 'list', component: DashboardComponent
    // }
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}