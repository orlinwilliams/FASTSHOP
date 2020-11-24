import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css'],
})
export class FilesComponent implements OnInit {
  formNewFile = new FormGroup({
    nameFile: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
    fileCategory: new FormControl('', [Validators.required]),
  });
  constructor(private modalNewFileService: NgbModal) {}

  ngOnInit(): void {}

  openModal(modal) {
    this.modalNewFileService.open(modal, {});
  }
  saveFile() {
    console.log(this.formNewFile.value);
  }
}
