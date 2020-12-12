import { Component, HostListener, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-edit-pages',
  templateUrl: './edit-pages.component.html',
  styleUrls: ['./edit-pages.component.css'],
})
export class EditPagesComponent implements OnInit {
  faQuestionCircle = faQuestionCircle;

  //---------Configuraciones del sidebar------------
  _opened: boolean = true;
  _modeNum: number = 1;
  _MODES: Array<string> = ['over', 'push', 'slide'];

  @ViewChild('card2') card2:string;
  @ViewChild('mainContent') mainContent:ElementRef;
  //------------Content ---------
  theHtmlString = `<div class="card">
      <div class="card-body">
        This is some text within a card body.
      </div>
  </div>`;
  

  constructor(private renderer:Renderer2) {}

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    //console.log(this.mainContent);
    let col = this.renderer.createElement('div');
    this.renderer.appendChild(this.mainContent.nativeElement,col);
    this.renderer.addClass(col,'block-big');
    
  }
  
 
  _toggleSidebar() {
    this._opened = !this._opened;
    
  }
}
