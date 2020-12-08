import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css'],
})
export class ThemesComponent implements OnInit {
  contentJavascript: string = '';
  codeMirrorOptions: any = {
    theme: 'dracula',
    mode: 'javascript',
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true
  };
  contentCss:string = '';
  codeMirrorOptions2: any = {
    theme: 'dracula',
    mode: 'css',
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: false
  };
  

  constructor() {}

  ngOnInit(): void {}
  setEditorContentJavascropt(event) {
    // console.log(event, typeof event);
    console.log(this.contentJavascript);
  }
  setEditorContentCss(event) {
    // console.log(event, typeof event);
    console.log(this.contentCss);
  }
}
