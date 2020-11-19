import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  constructor(private modalNewFileService:NgbModal) { }

  ngOnInit(): void {
  }

  openModal(modal){
    this. modalNewFileService.open(modal,{});
  }
}
