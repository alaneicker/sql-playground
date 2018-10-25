import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface Status {
  result?: boolean;
  inProgress?: boolean;
}

@Injectable()
export class QueryResultService {
  public query = new BehaviorSubject<any>({
    result: null,
    inProgress: false,
  });

  queryUpdate = this.query.asObservable();

  updateStatus(status: Status) {
    this.query.next({
      result: status.result || null,
      inProgress: status.inProgress || false,
    });
  }
}
