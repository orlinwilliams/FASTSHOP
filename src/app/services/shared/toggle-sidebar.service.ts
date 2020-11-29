import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleSidebarService {
  opened:boolean = true;
  constructor() { }
}
