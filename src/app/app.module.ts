import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpService } from './services/http.service';
import { ConnectionStatusService } from './services/connection-status.service';

import { HeaderModule } from './components/header/header.module';
import { ConnectionStatusModule } from './components/connection-status/connection-status.module';
import { LogoModule } from './components/logo/logo.module';
import { DbTableListModule } from './components/db-table-list/db-table-list.module';
import { QueryEditorModule } from './components/query-editor/query-editor.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    HeaderModule,
    LogoModule,
    DbTableListModule,
    ConnectionStatusModule,
    QueryEditorModule,
  ],
  providers: [
    HttpService,
    ConnectionStatusService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
