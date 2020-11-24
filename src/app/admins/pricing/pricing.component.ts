import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent implements OnInit {
  formPrecing = new FormGroup({
    title: new FormControl('',[Validators.required,Validators.minLength(3)]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(90),
      Validators.minLength(4),
    ]),
    price: new FormControl('', Validators.required),
    maxQuantityProduct: new FormControl('', Validators.required),
    maxQuantityPages: new FormControl('', Validators.required),
  });
  constructor(private modalNewPrecing: NgbModal) {}

  ngOnInit(): void {}

  openModalNewPrecing(modal) {
    this.modalNewPrecing.open(modal);
  }
  savePrecing() {
    console.log(this.formPrecing.value);
  }
}
