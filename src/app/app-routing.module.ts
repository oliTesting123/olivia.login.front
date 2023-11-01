import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/views/login/login.component';
import { EditUserComponent } from './modules/users/components/edit-user/edit-user.component';
import { AuthGuard } from './core/authentication/auth.guard';
import { HomeComponent } from './modules/home/views/home/home.component';
import { UsersComponent } from './modules/users/views/users/users.component';
import { ProductsComponent } from './modules/products/views/products/products.component';
import { EditProductComponent } from './modules/products/components/edit-product/edit-product.component';

const routes: Routes = [
  
  {
    path: '', component: LoginComponent
  },
  {
    path: 'users', component: UsersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-user', component: EditUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products', component: ProductsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-product', component: EditProductComponent,
    canActivate: [AuthGuard],

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
