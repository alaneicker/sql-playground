import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoLauncherComponent } from './demo-launcher.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DemoLauncherComponent],
  exports: [DemoLauncherComponent]
})

export class DemoLauncherModule {}
