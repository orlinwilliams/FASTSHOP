import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login-register/login.service';
import { CategoriesService } from 'src/app/services/user/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: any = [];
  formNewCategory = new FormGroup({
    nameCategory: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });
  constructor(
    private categoriesService: CategoriesService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  savedNewCategory() {
    let data = {
      nameCategory: this.formNewCategory.get('nameCategory').value,
      description: this.formNewCategory.get('description').value,
      idCompany: this.loginService.currentUser.company[0]._id,
    };
    this.categoriesService.savetCategory(data).subscribe(
      (res:any) => {
        if(res.status){
          this.getCategories();
        }
      },
      (error) => console.log(error)
    );
  }
  getCategories() {
    this.categoriesService
      .getCategories(this.loginService.currentUser.company[0]._id)
      .subscribe(
        (res: any) => {
          this.categories = res.result.categories;
          console.log(this.categories);
        },
        (error) => console.log(error)
      );
  }
}
