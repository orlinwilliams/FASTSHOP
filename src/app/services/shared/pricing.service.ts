import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PricingService {
  url: string = 'http://localhost:8888/pricing';

  constructor(private httpClient: HttpClient) { }
  
  getPricing(): Observable<any> {
    return this.httpClient.get(this.url);
  }
  setPricing(price):Observable<any>{
    return this.httpClient.post(this.url, price)
  }
}
