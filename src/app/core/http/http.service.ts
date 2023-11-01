import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
// import { LocalStorageService } from './services/storage.service';
// import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _baseUrl: string;
  private _path: string;
  private _token: string;
  // public storage: LocalStorageService;
  
  constructor(public http: HttpClient) {
    this._baseUrl = environment.apiBaseUrl;
    
  }

  set path(path: string) {
    this._path = path;
  }

  get baseUrl(): string {
    if(this._path) {
      return `${this._baseUrl}/${this._path}`;
    } else {
      return `${this._baseUrl}`;
    }
  }

  set token(token: string) {
    this._token = token;
  }

  get token(): string {
    return localStorage.getItem('jwt');
  }

  get headers(): HttpHeaders {
    const jwt_token = JSON.parse(this.token)['token'];
    // const jwt_date = jwt_decode(jwt_token)['exp'];
    
    return new HttpHeaders().set('Authorization', `Bearer ${jwt_token}`);
  }

}
