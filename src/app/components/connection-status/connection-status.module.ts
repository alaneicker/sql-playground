import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionStatusComponent } from './connection-status.component';
import { StatusModule } from '../status/status.module';

@NgModule({
  imports: [
    CommonModule,
    StatusModule,
  ],
  declarations: [ConnectionStatusComponent],
  exports: [ConnectionStatusComponent],
})
export class ConnectionStatusModule { }
