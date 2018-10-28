import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { QueryResultModule } from '../query-result/query-result.module';

import { QueryEditorComponent } from './query-editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QueryResultModule,
    MonacoEditorModule.forRoot(),
  ],
  declarations: [QueryEditorComponent],
  exports: [QueryEditorComponent],
})
export class QueryEditorModule { }
