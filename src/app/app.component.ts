import { Component } from '@angular/core';

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

  constructor() {}

  showCreateConnectionModal() {
    this.showAddConnectionModal = true;
  }

  hideCreateConnectionModal() {
    this.showAddConnectionModal = false;
  }
}
