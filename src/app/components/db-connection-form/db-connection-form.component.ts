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

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
    });
  }

  connect(form: NgForm) {
    this.submitted.emit();
  }

}
