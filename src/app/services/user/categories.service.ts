import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url: string = 'http://localhost:8888/admin-companies/';
  constructor(private httClient:HttpClient) { }
  getCategories(id):Observable<any>{
    return this.httClient.get(`${this.url}/${id}/categories`)
  }
  savetCategory(category):Observable<any>{
    return this.httClient.post(`${this.url}/categories`,category)
  }
}
