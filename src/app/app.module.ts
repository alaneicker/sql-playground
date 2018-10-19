import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderModule } from './components/header/header.module';

import { ConnectionService } from './services/connection.service';

import { AppComponent } from './app.component';
import { LogoModule } from './components/logo/logo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    LogoModule,
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
