import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
//import { ToastService } from 'src/app/services/shared/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent implements OnInit, OnChanges {
  @Input() dataToast:any;
  showToast: boolean = false;
  message: string = '';
  classToast: string = 'success';
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    let {showToast, classToast, message} = this.dataToast;
    this.showToast = showToast;
    this.classToast = classToast;
    this.message = message;
    
    
  }
}
