import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpResponse } from '../models/interfaces/http-response';
import { HttpService } from './http.service';


@Injectable({
    providedIn: 'root'
  })
  export class ProductsService extends HttpService {
  
    constructor(http: HttpClient) {
      super(http);
      this.path = 'api/products';
    }

    public getData() {
        return this.http.get<HttpResponse<any>>(`${this.baseUrl}`
        ).pipe(
          map((response: any) => {
            return response; 
          })
        );
    }

    postProduct(data: any): Observable<any> {

      return this.http.post(`${this.baseUrl}`, data).pipe(
        map((response: any) => {
          return response;
        })
      );
    }

    putProduct(data: any): Observable<any> {
      return this.http.post(`${this.baseUrl}`, data).pipe(
        map((response: any) => {
          return response;
        })
      );
    }

    public deleteProduct(id: number): Observable<any> {
      const url = `${this.baseUrl}/${id}`; // Reemplaza con la URL de tu API
      return this.http.delete(url);
    }

  }
  