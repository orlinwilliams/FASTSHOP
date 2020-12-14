import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private httpClient:HttpClient) { }
  url:string = 'http://localhost:8888/admin/companies';
  getAllCompanies():Observable<any>{
    return this.httpClient.get(this.url);
  }
  deleteCompany(id):Observable<any>{
    return this.httpClient.delete(`${this.url}/${id}`)
  }
}
