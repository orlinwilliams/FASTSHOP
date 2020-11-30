import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  url: string = 'http://localhost:8888/register/client';
  constructor(private httpClient: HttpClient) {}

  saveClient(client): Observable<any> {
    return this.httpClient.post(this.url, client);
  }
}
