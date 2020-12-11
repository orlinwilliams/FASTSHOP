import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  editPage(id){
    this.router.navigate(['/admin-companies/pages/page/',id])
  }

}
