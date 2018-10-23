import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { ConnectionStatusService } from '../../services/connection-status.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-db-connection-form',
  templateUrl: './db-connection-form.component.html',
  styleUrls: ['./db-connection-form.component.scss']
})
export class DbConnectionFormComponent implements OnInit {
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  standardConnection =  new FormGroup({
    host: new FormControl('', Validators.required),
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    port: new FormControl('', Validators.required),
    database: new FormControl('', Validators.required),
  });

  socketConnection = new FormGroup({
    host: new FormControl('localhost'),
    socketPath: new FormControl('', Validators.required),
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    database: new FormControl('', Validators.required),
  });

  connectionType = 'standard';

  constructor(
    private connectionStatusService: ConnectionStatusService,
    private httpService: HttpService,
  ) { }

  ngOnInit() {
    this.form = this.standardConnection;
  }

  switchConnectionType(connectionType: string) {
    this.form = connectionType === 'socket' ? this.socketConnection : this.standardConnection;
    this.connectionType = connectionType;
  }

  connect(form: NgForm) {
    if (form.valid) {
      // We need some type of hash for the username and
      // password that can be decrypted on the server

      this.httpService.post({
        url: 'http://localhost:8080/api/create-connection',
        data: this.form.value,
      })
      .then(res => {
        if (res.connected === true) {
          this.connectionStatusService.updateStatus({
            isConnected: res.connected,
            database: this.form.value.database,
          });

          this.submitted.emit();
        }
      })
      .catch(err => console.log(err));
    }
  }

}
