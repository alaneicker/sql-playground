import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryResultComponent } from './query-result.component';

import { QueryResultService } from '../../services/query-result.service';

@NgModule({
  imports: [CommonModule],
  providers: [QueryResultService],
  declarations: [QueryResultComponent],
  exports: [QueryResultComponent],
})
export class QueryResultModule { }
