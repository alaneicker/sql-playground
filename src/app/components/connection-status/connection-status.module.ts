import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionStatusComponent } from './connection-status.component';
import { StatusModule } from '../status/status.module';

import { ConnectionStatusService } from './connection-status.service';

@NgModule({
  imports: [
    CommonModule,
    StatusModule,
  ],
  declarations: [ConnectionStatusComponent],
  providers: [ConnectionStatusService],
  exports: [ConnectionStatusComponent],
})
export class ConnectionStatusModule { }
