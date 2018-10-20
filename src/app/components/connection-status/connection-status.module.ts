import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionStatusComponent } from './connection-status.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConnectionStatusComponent],
  exports: [ConnectionStatusComponent],
})
export class ConnectionStatusModule { }
