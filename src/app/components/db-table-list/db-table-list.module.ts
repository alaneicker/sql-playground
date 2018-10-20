import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbTableListComponent } from './db-table-list.component';

import { ConnectionStatusService } from '../../services/connection-status.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ConnectionStatusService],
  declarations: [DbTableListComponent],
  exports: [DbTableListComponent],
})
export class DbTableListModule { }
