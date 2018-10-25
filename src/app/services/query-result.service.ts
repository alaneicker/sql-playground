import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class QueryResultService {
  public query = new BehaviorSubject<any>({
    result: null,
  });

  queryUpdate = this.query.asObservable();

  updateQueryResult(result: any) {
    this.query.next({
      result: result,
    });
  }
}
