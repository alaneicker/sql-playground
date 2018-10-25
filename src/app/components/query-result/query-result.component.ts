import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { QueryResultService } from '../../services/query-result.service';

@Component({
  selector: 'app-query-result',
  templateUrl: './query-result.component.html',
  styleUrls: ['./query-result.component.scss']
})
export class QueryResultComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject();

  constructor(private queryResultService: QueryResultService) { }

  queryResult: any;

  ngOnInit() {
    this.queryResultService.queryUpdate
    .takeUntil(this.unsubscribe$)
    .subscribe((res) => {
      this.queryResult = res.result;
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
