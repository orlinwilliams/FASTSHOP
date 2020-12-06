import { Component, OnInit } from '@angular/core';
import { ToastService } from '../services/shared/toast.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  constructor(public toastService:ToastService) { }

  ngOnInit(): void {
  }
  // showToast(event){
  //   console.log(event);
  // }
}
