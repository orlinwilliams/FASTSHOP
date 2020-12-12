import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login-register/login.service';
import { PagesService } from 'src/app/services/user/pages.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  idUser: string = '';
  pages: any = [];
  formPage = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    mainPage: new FormControl('', []),
  });
  constructor(
    private router: Router,
    private loginService: LoginService,
    private pagesService: PagesService
  ) {}

  ngOnInit(): void {
    this.getIdUser();
    this.getPages();
  }
  getIdUser() {
    this.idUser = this.loginService.currentUser._id;
  }

  editPage(id) {
    console.log(id);
    this.router.navigate(['/admin-companies/pages/', id]);
  }
  deletePage(id) {}
  editData(id) {}
  getPages() {
    this.pagesService.getPages(this.idUser).subscribe(
      (res: any) => {
        if (res.status) {
          console.log(res);
          this.pages = res.pages;
        }
      },
      (error) => console.log(error)
    );
  }
  savePage() {
    let data = {
      title: this.formPage.get('title').value,
      description: this.formPage.get('description').value,
      idUser: this.idUser,
    };
    this.pagesService.savePage(data).subscribe(
      (res: any) => {
        if (res.status) {
          this.formPage.setValue({ title: '', description: '', mainPage: '' });
          this.getPages();
        }
      },
      (error) => console.log(error)
    );
  }
}
