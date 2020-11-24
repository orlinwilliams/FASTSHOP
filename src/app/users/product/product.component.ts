import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  formNewProduct = new FormGroup({
    nameProduct: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    price: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    isv: new FormControl('', []),
    codeProduct: new FormControl('', [Validators.minLength(3)]),
    quantityProduct: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    imageProduct: new FormControl('', [Validators.required]),
    categoryProduct: new FormControl('', [Validators.required]),
    stateProduct: new FormControl('', [Validators.required]),
    provider: new FormControl('', [Validators.required]),
  });
  constructor() {}

  ngOnInit(): void {}
  saveProduct() {
    console.log(this.formNewProduct.value);
  }
  
}
