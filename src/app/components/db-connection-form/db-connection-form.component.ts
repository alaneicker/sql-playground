import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { ConnectionStatusService } from '../../services/connection-status.service';
import { HttpService } from '../../services/http.service';

import { environment as env } from '../../../environments/environment';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-db-connection-form',
  templateUrl: './db-connection-form.component.html',
  styleUrls: ['./db-connection-form.component.scss']
})
export class DbConnectionFormComponent implements OnInit {
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  connectionType = 'standard';

  form: FormGroup = new FormGroup({
    host: new FormControl(this.connectionType === 'socket' ? 'localhost' : ''),
    socketPath: new FormControl('', Validators.required),
    user: new FormControl('', Validators.required),
    port: new FormControl(''),
    password: new FormControl('', Validators.required),
    database: new FormControl('', Validators.required),
  });

  constructor(
    private connectionStatusService: ConnectionStatusService,
    private httpService: HttpService,
  ) { }

  ngOnInit() {
  }

  switchConnectionType(connectionType: string) {
    this.connectionType = connectionType;
    if (connectionType === 'standard') {
      this.form.get('port').setValidators(Validators.required);
      this.form.get('host').setValidators(Validators.required);
      this.form.get('socketPath').clearValidators();
    } else {
      this.form.get('socketPath').setValidators(Validators.required);
      this.form.get('port').clearValidators();
      this.form.get('host').clearValidators();
    }
  }

  connect(form: NgForm) {
    if (form.valid) {
      this.httpService.post({
        url: `${env.apiUrl}/create-connection`,
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
