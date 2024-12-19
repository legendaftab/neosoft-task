import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private apiUrl ='https://jsonplaceholder.typicode.com/posts'

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
  getPostsa(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getPostss(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  

}

