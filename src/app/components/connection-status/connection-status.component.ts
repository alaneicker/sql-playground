import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { ConnectionStatusService } from '../../services/connection-status.service';

@Component({
  selector: 'app-connection-status',
  template: `
    <app-status
      [status]="isConnected"
      [activeText]="activeText"
      [inactiveText]="inactiveText"></app-status>
  `,
})
export class ConnectionStatusComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject();

  isConnected = false;
  inactiveText = 'Not Connected';
  activeText = '';

  constructor(
    private connectionStatusService: ConnectionStatusService) { }

  ngOnInit() {
    this.connectionStatusService.statusChange
    .takeUntil(this.unsubscribe$)
    .subscribe((res) => {
      if (res.isConnected === true) {
        this.isConnected = res.isConnected;
        this.activeText = `Connected to: ${res.database}`;
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
