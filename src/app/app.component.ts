import { Component } from '@angular/core';

import { HttpService } from './services/http.service';
import { ConnectionStatusService } from './services/connection-status.service';
import { DemoModeService } from './services/demo.service';

import { environment as env } from '../environments/environment';

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
    private demoModeService: DemoModeService,
  ) {}

  showCreateConnectionModal() {
    this.showAddConnectionModal = true;
  }

  hideCreateConnectionModal() {
    this.showAddConnectionModal = false;
  }

  runDemoMode() {
    const demoDbConfig = {
      host: 'us-cdbr-iron-east-05.cleardb.net',
      user: 'be477d69ad2e03',
      password: 'ec5a1352',
      database: 'heroku_18b06d6c55cb8e4'
    };

    this.httpService.post({
      url: `${env.apiUrl}/create-connection`,
      data: demoDbConfig,
    })
    .then(res => {
      if (res.connected === true) {
        this.connectionStatusService.updateStatus({
          isConnected: res.connected,
          database: 'demo_database',
          inProgress: false,
        }).then(() => {
          this.demoModeService.updateStatus(true);
        });
      }
    })
    .catch(err => console.log(err));
  }
}
