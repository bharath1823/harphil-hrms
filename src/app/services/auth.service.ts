import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:2040/users/login';

    constructor(private http: HttpClient) {}

    login(credentials: any) {
        return of(this.http.post(`${this.apiUrl}`, credentials));
    }


  // constructor() { }
}
