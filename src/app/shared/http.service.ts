import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class HttpService {
   api= 'https://my-json-server.typicode.com/khalidghanamy/demo/products'
  //  api= 'http://localhost:3000/products'
  httpHeaders= new HttpHeaders().set('content-type','application/json')
  
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any>{
    return this.http.get<any>(this.api);
  }

  getProduct(id:any): Observable<any>{
    return this.http.get<any>(`${this.api}/${id}`);
  }
}