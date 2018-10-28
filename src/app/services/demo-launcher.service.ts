import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DemoLauncherService {
  public demoMode = new BehaviorSubject<any>({
    isRunning: false,
  });

  statusChange = this.demoMode.asObservable();

  updateStatus(status: boolean) {
    this.demoMode.next({
      isRunning: status,
    });
  }
}
