import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url: string = 'http://localhost:8888/login';
  constructor(private httpClient: HttpClient) {}
  currentUser:any ={};
  login(user: any): Observable<any> {
    return this.httpClient.post(`${this.url}`, user);
  }
  
  saveCurrentUser (data: any):void{
    this.currentUser = data;
    localStorage.setItem('data', JSON.stringify(data))
  }
  deleteCurrentUser ():void{
    localStorage.removeItem('data');
    this.currentUser = {};
  }
}
