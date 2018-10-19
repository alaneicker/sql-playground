import { Component } from '@angular/core';
import { ConnectionService } from './services/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private connectionService: ConnectionService) {}

  createNewConnection(): void {
    this.connectionService.createNewConnection();
  }
}
