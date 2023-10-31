import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/users/views/dashboard/dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from './modules/users/components/edit-user/edit-user.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditUserComponent,
  ],
  imports: [CommonModule, BrowserModule, 
    HttpClientModule, AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
