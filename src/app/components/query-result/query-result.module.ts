import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryResultComponent } from './query-result.component';

import { QueryResultService } from '../../services/query-result.service';

@NgModule({
  imports: [CommonModule],
  declarations: [QueryResultComponent],
  providers: [QueryResultService],
  exports: [QueryResultComponent],
})
export class QueryResultModule { }
