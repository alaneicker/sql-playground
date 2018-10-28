import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { QueryResultModule } from '../query-result/query-result.module';

import { QueryEditorComponent } from './query-editor.component';

import { QueryResultService } from '../../services/query-result.service';
import { DemoLauncherService } from '../../services/demo-launcher.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QueryResultModule,
    MonacoEditorModule.forRoot(),
  ],
  providers: [
    QueryResultService,
    DemoLauncherService,
  ],
  declarations: [QueryEditorComponent],
  exports: [QueryEditorComponent],
})
export class QueryEditorModule { }
