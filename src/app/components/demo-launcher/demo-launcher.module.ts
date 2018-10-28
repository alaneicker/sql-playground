import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoLauncherComponent } from './demo-launcher.component';

import { DemoLauncherService } from './demo-launcher.service';

@NgModule({
  imports: [CommonModule],
  declarations: [DemoLauncherComponent],
  providers: [DemoLauncherService],
  exports: [DemoLauncherComponent]
})

export class DemoLauncherModule {}
