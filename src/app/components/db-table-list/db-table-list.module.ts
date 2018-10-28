import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbTableListComponent } from './db-table-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DbTableListComponent],
  exports: [DbTableListComponent],
})
export class DbTableListModule { }
