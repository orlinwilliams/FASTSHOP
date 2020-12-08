import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url:string = 'http://localhost:8888/admin/users';
  constructor(private httpClient:HttpClient) { }
  getAdmins():Observable<any>{
    return this.httpClient.get(`${this.url}/admin`);
  }
  getAdmin(id):Observable<any>{
    return this.httpClient.get(`${this.url}/admin/${id}`);
  }

  updateAdmin(id,admin):Observable<any>{
    return this.httpClient.put(`${this.url}/admin/${id}`,admin);
  }
  getClients():Observable<any>{
    return this.httpClient.get(`${this.url}/client`);
  }
}
