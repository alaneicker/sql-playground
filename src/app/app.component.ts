import { Component } from '@angular/core';

import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  connectedDB: string;
  queryResult: any;

  title = 'app';
  isConnected = false;
  showAddConnectionModal = false;

  constructor(private httpService: HttpService) {}

  showCreateConnectionModal() {
    this.showAddConnectionModal = true;
  }

  hideCreateConnectionModal() {
    this.showAddConnectionModal = false;
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
