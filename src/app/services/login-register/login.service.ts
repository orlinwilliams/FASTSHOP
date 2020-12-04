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
    
    localStorage.setItem('data', JSON.stringify(data))
    this.currentUser = data;
    
  }
  logout ():void{
    localStorage.removeItem('data');
    this.currentUser = {};
  }
  isLoginUser():boolean{
    if(localStorage.getItem('data')){
      let user = JSON.parse(localStorage.getItem('data'));
      if(user.role[0].name == 'user'){
        return true;
      }
    }
    return false;
  }
  isLoginAdmin():boolean{
    if(localStorage.getItem('data')){
      let user = JSON.parse(localStorage.getItem('data'));
      if(user.role[0].name == 'admin'){
        return true;
      }
    }
    return false;
  }

}
