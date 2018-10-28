import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusComponent } from './status.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StatusComponent],
  exports: [StatusComponent],
})
export class StatusModule { }
