import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {}

    login(login:any){
      return this .http.post('http://localhost:2040/users/login',login,{responseType:'text' as 'json'})
    }


  
}
