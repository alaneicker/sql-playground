import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor';

import { QueryEditorComponent } from './query-editor.component';
import { QueryResultComponent } from '../query-result/query-result.component';

import { QueryResultService } from '../../services/query-result.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MonacoEditorModule.forRoot(),
  ],
  providers: [QueryResultService],
  declarations: [
    QueryEditorComponent,
    QueryResultComponent,
  ],
  exports: [QueryEditorComponent],
})
export class QueryEditorModule { }
