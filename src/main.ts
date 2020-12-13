import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


import 'codemirror/lib/codemirror';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/htmlmixed/htmlmixed"
import "codemirror/mode/xml/xml"
import "codemirror/mode/htmlembedded/htmlembedded"
import "codemirror/mode/css/css"
// import "codemirror/addon/fold/foldgutter"
import "codemirror/addon/lint/lint"
import "codemirror/addon/lint/css-lint"
// import "codemirror/addon/lint/json-lint"
import "codemirror/addon/hint/show-hint"
import "codemirror/addon/hint/anyword-hint"
import "codemirror/addon/hint/css-hint"
import "codemirror/addon/hint/html-hint"
import "codemirror/addon/hint/javascript-hint"

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
