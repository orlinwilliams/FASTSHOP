import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  dataToast: any = {}

  constructor() { }

  // getDataToast(toast:any){
  //   this.dataToast= toast;
  // }
}
