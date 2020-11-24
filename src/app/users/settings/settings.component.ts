import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  // formNavbar = new FormGroup({
  //   title: new FormControl('', [Validators.required]),
  //   nameOption: new FormControl('', [Validators.required]),
  //   link: new FormControl('', [Validators.required]),
  // });
  // formFooter = new FormGroup({
  //   title: new FormControl('', [Validators.required]),
  //   link: new FormControl('', [Validators.required]),
  //   nameOption: new FormControl('', [Validators.required]),
  // });
  formDescriptionPage = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    keywords: new FormControl('', [Validators.required]),
  });

  favicon: string = '';
  logo: string = '';

  showDescription: boolean;
  constructor(private modalItemService: NgbModal) {}

  ngOnInit(): void {
    if (window.innerWidth <= 750) {
      this.showDescription = false;
    } else {
      this.showDescription = true;
    }
  }
  saveDescriptionPage() {
    console.log(this.formDescriptionPage.value);
  }
  saveFavicon(){
    console.log(this.favicon);
  }
  saveLogo(){
    console.log(this.logo);
  }
  openModalItem(modal) {
    this.modalItemService.open(modal);
  }

  //Evento esconder contenido letras
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    //console.log('Width: ' + event.target.innerWidth);
    if (event.target.innerWidth < 750) {
      this.showDescription = false;
    } else {
      this.showDescription = true;
    }
  }
}
