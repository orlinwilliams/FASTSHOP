import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemeService } from 'src/app/services/admin/theme.service';
import { LoginService } from 'src/app/services/login-register/login.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToastComponent } from 'src/app/shared/toast/toast.component';
import { ToastService } from 'src/app/services/shared/toast.service';
@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})
export class ThemeComponent implements OnInit {
  contentJavascript: string = '';
  idCurrentTheme: string = '';
  files: File[] = [];
  contentCss: string = '';
  buttonControl: string = 'newTheme';
  instructions: String = `Crea un nuevo tema, recuerde que debe 
  definir la hoja de estilos y los efectos en Javascript en caso de que el tema los necesite, 
  tambien puede añadir imágenes relacionadas al tema.`;

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

  constructor(
    private loginService: LoginService,
    private themeService: ThemeService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.idCurrentTheme = params.get('id');
      if (this.idCurrentTheme) {
        this.buttonControl = 'editTheme';
        this.instructions = `Edite su tema, recuerde que puede cancelar utilizando el boton de cancelar en la parte de abajo`;
        this.getTheme(this.idCurrentTheme);
      }
    });
  }
  setEditorContentJavascript(event) {
    //console.log(this.contentJavascript);
  }
  setEditorContentCss(event) {
    //console.log(this.contentCss);
  }
  getTheme(id) {
    this.themeService.getTheme(id).subscribe(
      (res: any) => {
        this.formTheme.setValue({
          title: res.result.title,
          description: res.result.description,
        });
        this.contentJavascript = res.result.javascript;
        this.contentCss = res.result.css;
      },
      (error) => console.log(error)
    );
  }

  onSelect(event) {
    this.files.push(...event.addedFiles);
    console.log(this.files);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  validation(): boolean {
    if (!this.formTheme.valid) return false;
    if (this.files.length == 0) return false;
    if (this.contentCss.length < 2) return false;
    if (this.contentJavascript.length < 2) return false;

    return true;
  }
  resetForm() {
    this.formTheme.setValue({ title: '', description: '' });
    this.contentCss = '';
    this.contentJavascript = '';
    this.files = [];
  }
  saveTheme() {
    let theme = {
      title: this.formTheme.get('title').value,
      description: this.formTheme.get('description').value,
      css: this.contentCss,
      javascript: this.contentJavascript,
      createdBy: this.loginService.currentUser._id,
    };
    this.themeService.saveTheme(theme, this.files).subscribe(
      (res: any) => {
        if (res.status) {
          this.toastService.dataToast = {
            showToast: true,
            classToast: 'success',
            message: 'Tema actualizado con éxito',
          };
          this.resetForm();
        } else {
          this.toastService.dataToast = {
            showToast: true,
            classToast: 'danger',
            message: 'Upps! algo sali mal',
          };
        }
      },
      (error) => console.log(error)
    );
  }
  updateTheme() {
    let theme = {
      title: this.formTheme.get('title').value,
      description: this.formTheme.get('description').value,
      css: this.contentCss,
      javascript: this.contentJavascript,
    };
    this.themeService.updateTheme(this.idCurrentTheme, theme).subscribe(
      (res: any) => {
        if (res.status) {
          this.toastService.dataToast = {
            showToast: true,
            classToast: 'success',
            message: 'Tema actualizado con éxito',

          };
        } else {
          this.toastService.dataToast = {
            showToast: true,
            classToast: 'danger',
            message: 'Upps! algo sali mal',
          };
        }
      },
      (error) => console.log(error)
    );
  }
}
