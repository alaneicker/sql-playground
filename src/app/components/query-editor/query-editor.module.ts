import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';

import { QueryEditorComponent } from './query-editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MonacoEditorModule.forRoot(),
  ],
  declarations: [QueryEditorComponent],
  exports: [QueryEditorComponent],
})
export class QueryEditorModule { }
