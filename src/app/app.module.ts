import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './components/header/header.module';
import { ConnectionStatusModule } from './components/connection-status/connection-status.module';
import { LogoModule } from './components/logo/logo.module';
import { DbTableListModule } from './components/db-table-list/db-table-list.module';
import { QueryEditorModule } from './components/query-editor/query-editor.module';
import { ModalModule } from './components/modal/modal.module';
import { DbConnectionFormModule } from './components/db-connection-form/db-connection-form.module';
import { DemoLauncherModule } from './components/demo-launcher/demo-launcher.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule.forRoot(),
    HeaderModule,
    LogoModule,
    DbTableListModule,
    ConnectionStatusModule,
    QueryEditorModule,
    ModalModule,
    DbConnectionFormModule,
    DemoLauncherModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
