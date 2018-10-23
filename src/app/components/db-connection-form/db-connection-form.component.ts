import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

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
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    port: new FormControl('', Validators.required),
    database: new FormControl('', Validators.required),
  });

  socketConnection = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    socket: new FormControl('', Validators.required),
    database: new FormControl('', Validators.required),
  });

  connectionType = 'standard';

  constructor() { }

  ngOnInit() {
    this.form = this.standardConnection;
  }

  switchConnectionType(connectionType: string) {
    this.form = connectionType === 'socket' ? this.socketConnection : this.standardConnection;
    this.connectionType = connectionType;
    console.log(this.form);
  }

  connect(form: NgForm) {
    this.submitted.emit();
  }

}
