import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login-register/login.service';
import { createToken } from 'typescript';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})
export class ThemeComponent implements OnInit {
  contentJavascript: string = '';
  files: File[] = [];
  contentCss: string = '';
  formTheme = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

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
  codeMirrorOptionsJavascrip: any = {
    theme: 'dracula',
    mode: 'javascript',
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
    lint: true,
    extraKeys: { 'Ctrl-Space': 'autocomplete' },
  };

  constructor(private loginService:LoginService ) {}

  ngOnInit(): void {    
  }
  setEditorContentJavascript(event) {
    console.log(this.contentJavascript);
  }
  setEditorContentCss(event) {
    console.log(this.contentCss);
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  validation():boolean{
    if(!this.formTheme.valid) return false;
    if(this.files.length == 0) return false;
    if(this.contentCss.length  < 2) return false;
    if(this.contentJavascript.length  < 2) return false;

    return true;
  }
  saveTheme(){
    let theme = {
      title: this.formTheme.get('title').value,
      description: this.formTheme.get('description').value,
      css: this.contentCss,
      javascript: this.contentJavascript,
      photos: this.files,
      createdBy:this.loginService.currentUser._id
    }
    console.log(theme);
    
  }
}
