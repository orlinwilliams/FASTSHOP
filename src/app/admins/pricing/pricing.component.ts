import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PricingService } from 'src/app/services/shared/pricing.service';
import { ToastService } from 'src/app/services/shared/toast.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent implements OnInit {
  pricing: any = [];
  idPrice: string = '';
  buttonControl: string = 'newPrice';
  formPrecing = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(90),
      Validators.minLength(4),
    ]),
    price: new FormControl('', Validators.required),
    maxQuantityProducts: new FormControl('', Validators.required),
    maxQuantityPages: new FormControl('', Validators.required),
  });
  constructor(
    private modalNewPrecing: NgbModal,
    private pricingService: PricingService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.allPricing();
  }

  allPricing() {
    this.pricingService.getPricing().subscribe(
      (resp: any) => {
        if (resp.status) {
          this.pricing = resp.result;
          //console.log(this.pricing);
        }
      },
      (error) => console.log(error)
    );
  }
  openModalNewPrecing(modal) {
    this.modalNewPrecing.open(modal);
  }
  savePrecing() {
    this.pricingService.setPricing(this.formPrecing.value).subscribe(
      (res: any) => {
        if (res.status) {
          this.pricing.push(res.result);
          this.toastService.dataToast = {
            showToast: true,
            classToast: 'success',
            message: 'Precio agregado con éxito',
          };
          this.modalNewPrecing.dismissAll();
        } else {
        }
      },
      (error) => {}
    );
  }
  openModalUpdate(modal, id) {
    this.idPrice = id;
    this.modalNewPrecing.open(modal);
    this.buttonControl = 'editPrice';
    this.pricingService.getPrice(id).subscribe(
      (res: any) => {
        if (res.status) {
          this.formPrecing.setValue({
            title: res.result.title,
            description: res.result.description,
            price: res.result.price,
            maxQuantityProducts: res.result.maxQuantityProducts,
            maxQuantityPages: res.result.maxQuantityPages,
          });
        }
      },
      (error) => console.log(error)
    );
  }
  updatePricing() {
    this.pricingService
      .updatePricing(this.idPrice, this.formPrecing.value)
      .subscribe(
        (res: any) => {
          this.allPricing();

          this.formPrecing.setValue({
            title: '',
            description: '',
            price: '',
            maxQuantityProducts: '',
            maxQuantityPages: '',
          });
          this.buttonControl = 'newPrice';
          this.modalNewPrecing.dismissAll();
        },
        (error) => console.log(error)
      );
  }
  opendeModalDelete(modal, id) {
    this.modalNewPrecing.open(modal, { size: 'sm', centered: true });
    this.idPrice = id;
    console.log(this.idPrice);
  }

  deletePrice() {
    this.pricingService.deletePrice(this.idPrice).subscribe(
      (res:any) => {
        if(res.status){
          this.allPricing();
          this.modalNewPrecing.dismissAll();
          this.toastService.dataToast = {
            showToast: true,
            classToast: 'success',
            message: 'Precio Eliminado con éxito',
          };

        }
        
      },
      (error) =>console.log(error)
    );
  }
}
