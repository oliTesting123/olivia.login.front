import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './modules/users/views/users/users.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from './modules/users/components/edit-user/edit-user.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AuthInterceptor } from './core/interceptors/auth-interceptor';
import { LoginComponent } from './modules/login/views/login/login.component';
import { HomeComponent } from './modules/home/views/home/home.component';
import { ProductsComponent } from './modules/products/views/products/products.component';
import { NavComponent } from './modules/home/components/nav/nav.component';
import { EditProductComponent } from './modules/products/components/edit-product/edit-product.component';

export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    EditUserComponent,
    HomeComponent,
    ProductsComponent,
    NavComponent,
    EditProductComponent
  ],
  imports: [CommonModule,
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
