import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  url: string = 'http://localhost:8888/admin/theme';
  constructor(private httpClient: HttpClient) {}

  saveTheme(data: any, file): Observable<any> {
    const form = new FormData();
    const { title, description, css, javascript, createdBy } = data;
    file.forEach((item) => {
      form.append(`images`, item);
    });
    
    form.append('title', title);
    form.append('description', description);
    form.append('css', css);
    form.append('javascript', javascript);
    form.append('createdBy', createdBy);
    return this.httpClient.post(this.url, form);
  }
  getThemes():Observable<any>{
    return this.httpClient.get(this.url);
  }
  deleteTheme(id):Observable<any>{
    return this.httpClient.delete(`${this.url}/${id}`)
  }
  getTheme(id):Observable<any>{
    return this.httpClient.get(`${this.url}/${id}`)
  }
  updateTheme(id,theme):Observable<any>{
    return this.httpClient.put(`${this.url}/${id}`,theme)
  }
}
