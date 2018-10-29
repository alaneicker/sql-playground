import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpService } from './services/http.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [],
  exports: [],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [HttpService],
    };
  }
}
