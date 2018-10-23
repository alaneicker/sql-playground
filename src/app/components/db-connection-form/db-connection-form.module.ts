import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DbConnectionFormComponent } from './db-connection-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [DbConnectionFormComponent],
  exports: [DbConnectionFormComponent],
})
export class DbConnectionFormModule { }
