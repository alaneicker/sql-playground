import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../services/http.service';
import { ConnectionStatusService } from '../../services/connection-status.service';
import { DemoLauncherService } from '../../services/demo-launcher.service';

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
          this.demoLauncherService.updateStatus(true);
        });
      }
    })
    .catch(err => console.log(err));
  }

}
