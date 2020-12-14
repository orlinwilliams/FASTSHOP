import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompaniesService } from 'src/app/services/admin/companies.service';
import { LoginService } from 'src/app/services/login-register/login.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class CompaniesComponent implements OnInit {
  currentAdmin: string = 'Admin';
  companies: any = [];
  idCompany: string = '';
  constructor(
    private loginService: LoginService,
    private companiesService: CompaniesService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    if (this.loginService.currentUser.username) {
      this.currentAdmin = this.loginService.currentUser.username;
    }
    this.getCompanies();
  }

  getCompanies() {
    this.companiesService.getAllCompanies().subscribe(
      (res: any) => {
        this.companies = res.result;
      },
      (error) => console.log(error)
    );
  }

  openConfirm(id, modal) {
    this.idCompany = id;
    this.modalService.open(modal, { size: 'sm', centered: true });
  }
  deleteCompany() {
    this.companiesService.deleteCompany(this.idCompany).subscribe(
      (res:any) => {
        if(res.status){
          this.getCompanies();
          this.modalService.dismissAll();
        }
      },
      (error) => console.log(error)
    );
    console.log(this.idCompany);
  }
}
