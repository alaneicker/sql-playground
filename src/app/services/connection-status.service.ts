import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface Status {
    isConnected: boolean;
    database: string;
}

@Injectable()
export class ConnectionStatusService {
    public status = new BehaviorSubject<any>({
        isConnected: false,
    });

    watch = this.status.asObservable();

    updateStatus(status: Status) {
        this.status.next({
            isConnected: status.database,
            database: status.database,
        });
    }
}
