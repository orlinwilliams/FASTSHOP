import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  editType:string = 'editCode';
  
  constructor() { }

  ngOnInit(): void {
  }
  changeEditCode(){
    if(confirm('Esta seguro?')){
      this.editType = 'editCode';
    }
    
  }
  changeEditLine(){
    this.editType = 'editLine';
  }
}
