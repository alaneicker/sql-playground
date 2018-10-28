import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface Status {
  isConnected?: boolean;
  database?: string;
  inProgress?: boolean;
}

@Injectable()
export class ConnectionStatusService {
  public status = new BehaviorSubject<any>({
    isConnected: false,
    database: null,
    inProgress: false,
  });

  statusChange = this.status.asObservable();

  updateStatus(status: Status): Promise<any> {
    return new Promise(resolve => {
      this.status.next({
        isConnected: status.isConnected || false,
        database: status.database || '',
        inProgress: status.inProgress || false,
      });

      resolve();
    });
  }
}
