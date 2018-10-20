import { Component } from '@angular/core';

import { HttpService } from './services/http.service';
import { ConnectionStatusService } from './services/connection-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  isConnected = false;
  connectedDB: string;
  queryResult: any;

  dbConfig = {
    host: 'localhost',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    user: 'root',
    password: 'root',
    database: 'brewlog'
  };

  constructor(
    private httpService: HttpService,
    private connectionStatusService: ConnectionStatusService,
  ) {}

  createNewConnection(): void {
    this.httpService.post({
      url: 'http://localhost:8080/api/create-connection',
      data: this.dbConfig,
    })
    .then(res => {
      if (res.connected === true) {
        this.connectionStatusService.updateStatus({
          status: res.connected,
          database: this.dbConfig.database,
        });
      }
    })
    .catch(err => console.log(err));
  }

  sendQuery() {
    this.httpService.post({
      url: 'http://localhost:8080/api/query',
      data: { query: 'SELECT * FROM mybeers' },
    })
    .then(res => this.queryResult = res)
    .catch(err => console.log(err));
  }
}
