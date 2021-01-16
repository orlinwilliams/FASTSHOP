import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  url: string = 'http://localhost:8888/admin-companies/pages';
  constructor(private httpClient: HttpClient) {}

  getPages(id): Observable<any> {
    return this.httpClient.get(`${this.url}/${id}`);
  }
  savePage(page): Observable<any> {
    return this.httpClient.post(this.url, page);
  }
  getPage(id):Observable<any>{
    return this.httpClient.get(`${this.url}/page/${id}`);
  }
}
