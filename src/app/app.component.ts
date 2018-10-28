import { Component } from '@angular/core';

import { HttpService } from './services/http.service';
import { ConnectionStatusService } from './services/connection-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  connectedDB: string;
  queryResult: any;
  isConnected = false;
  showAddConnectionModal = false;

  constructor(
    private httpService: HttpService,
    private connectionStatusService: ConnectionStatusService,
  ) {}

  showCreateConnectionModal() {
    this.showAddConnectionModal = true;
  }

  hideCreateConnectionModal() {
    this.showAddConnectionModal = false;
  }
}
