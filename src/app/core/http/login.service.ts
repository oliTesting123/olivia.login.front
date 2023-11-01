import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService extends HttpService {

  constructor(http: HttpClient) {
    super(http);
    // this.path = 'login';
  }
  

  authenticate(data: any) {
    const url = `${this.baseUrl}/api/login`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
  
    return this.http.post<any>(url, data);
  }
}
  