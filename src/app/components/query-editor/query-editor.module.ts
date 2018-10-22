import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryEditorComponent } from './query-editor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [QueryEditorComponent],
  exports: [QueryEditorComponent],
})
export class QueryEditorModule { }
