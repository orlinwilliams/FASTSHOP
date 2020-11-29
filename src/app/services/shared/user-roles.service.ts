import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRolesService {
  url: string = 'http://localhost:8888/register/role';

  constructor(private httpClient: HttpClient) { }
  
  getRoles(): Observable<any> {
    return this.httpClient.get(this.url);
  }
}
