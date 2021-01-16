import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagesService } from 'src/app/services/user/pages.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  idPage: string = '';
  currentPage: any = {};
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pagesService: PagesService
  ) {}
  ngOnInit(): void {
    this.getId();
  }
  getId() {
    this.route.paramMap.subscribe((param) => {
      this.idPage = param.get('id');
      this.pagesService.getPage(this.idPage).subscribe(
        (res: any) => {
          this.currentPage = res.result;
        },
        (error) => console.log(error)
      );
    });
  }
  getInfo(id) {}
  goOut(): void {
    this.router.navigateByUrl('/admin-companies/pages');
  }
}
