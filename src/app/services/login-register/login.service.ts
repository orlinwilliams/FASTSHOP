import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url: string = 'http://localhost:8888/login';
  currentUser:any ={};
  
  constructor(private httpClient: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('data')) ;
  }
  
  login(user: any): Observable<any> {
    return this.httpClient.post(`${this.url}`, user);
  }
  
  saveCurrentUser (data: any):void{
    this.currentUser = data;
    localStorage.setItem('data', JSON.stringify(data))
  }
  logout ():void{
    localStorage.removeItem('data');
    this.currentUser = {};
  }

}
