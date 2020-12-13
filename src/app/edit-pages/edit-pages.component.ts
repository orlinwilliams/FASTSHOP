import {
  Component,
  HostListener,
  OnInit,
  ViewChild,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-edit-pages',
  templateUrl: './edit-pages.component.html',
  styleUrls: ['./edit-pages.component.css'],
})
export class EditPagesComponent implements OnInit {
  faQuestionCircle = faQuestionCircle;
  optionSelect:string = 'html';
  formBlock = new FormGroup({
    width: new FormControl('grande',[]),
  })
  //---------Configuraciones del sidebar------------
  _opened: boolean = true;
  _modeNum: number = 1;
  _MODES: Array<string> = ['over', 'push', 'slide'];
  //-----------fin sidebar----------------

  //--------configuraciones de los editores------------
  contentCss: string = '';
  contentHtml: string = '';
  codeMirrorOptionsCss: any = {
    theme: 'dracula',
    mode: 'css',
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: [
      'CodeMirror-linenumbers',
      'CodeMirror-foldgutter',
      'CodeMirror-lint-markers',
    ],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: false,
    extraKeys: { 'Ctrl-Space': 'autocomplete' },
  };
  codeMirrorOptionsHtml: any = {
    theme: 'dracula',
    mode: 'css',
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
  };
  //---------------fin editores---------------------------


  //-----------------Variables ditar bloque---------------
  @ViewChild('modalEdit') modalEdit: ElementRef;
  @ViewChild('mainContent') mainContent: ElementRef;
  
  currentRow:any;
  currentCol:any;
  currentContent:any;
  idAcumulator:number = 0;
  idEdit:string = '';
  lasIdEdit:string = '';
 
  constructor(private renderer: Renderer2, private modalService:NgbModal) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    // let col = this.renderer.createElement('div');
    // this.renderer.appendChild(this.mainContent.nativeElement, col);
    // this.renderer.addClass(col, 'block-big');
  }
  
  createBlock(){
    let id = '';
    if(this.formBlock.get('width').value == 'grande'){
      
      this.currentRow = this.renderer.createElement('div');
      this.renderer.addClass(this.currentRow, 'row');
      this.renderer.appendChild(this.mainContent.nativeElement, this.currentRow);
      this.idAcumulator++ 
      id = 'div'+ this.idAcumulator.toString();
      this.currentCol = this.renderer.createElement('div');
      this.renderer.addClass(this.currentCol, 'col-12');
      this.renderer.addClass(this.currentCol, 'block-big');
      this.renderer.setAttribute(this.currentCol,'id',id);
      this.renderer.appendChild(this.currentRow, this.currentCol);
    }
    else if(this.formBlock.get('width').value == 'mediano'){
      this.currentRow = this.renderer.createElement('div');
      this.renderer.addClass(this.currentRow, 'row');
      this.renderer.appendChild(this.mainContent.nativeElement, this.currentRow);
      this.idAcumulator++ 
      id = 'div'+ this.idAcumulator.toString();
      this.currentCol = this.renderer.createElement('div');
      this.renderer.addClass(this.currentCol, 'col-6');
      this.renderer.addClass(this.currentCol, 'block-big');
      this.renderer.setAttribute(this.currentCol,'id',id);
      this.renderer.appendChild(this.currentRow, this.currentCol);
    }
    else if(this.formBlock.get('width').value == 'pequeño'){
      this.currentRow = this.renderer.createElement('div');
      this.renderer.addClass(this.currentRow, 'row');
      this.renderer.appendChild(this.mainContent.nativeElement, this.currentRow);
      this.idAcumulator++ 
      id = 'div'+ this.idAcumulator.toString();
      this.currentCol = this.renderer.createElement('div');
      this.renderer.addClass(this.currentCol, 'col-4');
      this.renderer.addClass(this.currentCol, 'block-big');
      this.renderer.setAttribute(this.currentCol,'id',id);
      this.renderer.appendChild(this.currentRow, this.currentCol);
    }

    //this.currentContent = `Agregar contenido`;
    this.renderer.listen(this.currentCol,'click', ()=>{
      this.idEdit = id;
      console.log(this.idEdit);
      
      this.modalService.open(this.modalEdit,{ size: 'lg' });
      
    })
    //Contenido de la pagina
    //console.log(this.mainContent.nativeElement);
    
  }
  
  addContent(){
    //this.contentHtml = '';
    this.currentContent = this.contentHtml;
    console.log(this.idEdit);
    let elemtSelect = this.renderer.selectRootElement('#'+this.idEdit,true);
    this.renderer.setProperty(elemtSelect,'innerHTML',this.currentContent);
    //this.renderer.setProperty(elemtSelect,'innerHTML',this.contentHtml);
    //console.log(elemtSelect);
    console.log(this.currentContent.length);

  }
  
  setEditorContentCss(event) {
    //console.log(this.contentCss);
  }
  changeHtml(){
    this.optionSelect = 'html';

  }
  changeCss(){
    this.optionSelect = 'css';
  }
  changeEstatic(){
    this.optionSelect = 'static';
  }
}
