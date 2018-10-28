import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../shared/services/http.service';
import { ConnectionStatusService } from '../connection-status/connection-status.service';
import { DemoLauncherService } from './demo-launcher.service';

import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'app-demo-launcher',
  templateUrl: './demo-launcher.component.html',
  styleUrls: ['./demo-launcher.component.scss']
})
export class DemoLauncherComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private connectionStatusService: ConnectionStatusService,
    private demoLauncherService: DemoLauncherService,
  ) { }

  ngOnInit() {
  }

  runDemoMode() {

    const demoDbConfig = {
      host: 'us-cdbr-iron-east-01.cleardb.net',
      user: 'b4594f562ecaa3',
      password: '69c86eac',
      database: 'heroku_126cd5f9e2342f3'
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
          this.demoLauncherService.updateStatus(true);
        });
      }
    })
    .catch(err => console.log(err));
  }

}
