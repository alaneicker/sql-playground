import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { ConnectionStatusService } from '../../services/connection-status.service';
import { HttpService } from '../../services/http.service';

import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'app-db-table-list',
  templateUrl: './db-table-list.component.html',
  styleUrls: ['./db-table-list.component.scss']
})
export class DbTableListComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject();
  tables: any[] = [];
  tableColumns: any[];
  loading: boolean;

  constructor(
    private connectionStatusService: ConnectionStatusService,
    private httpService: HttpService,
    ) { }

  ngOnInit() {
    this.connectionStatusService.statusChange
      .takeUntil(this.unsubscribe$)
      .subscribe((res) => {
        if (res.isConnected === true) {
          this.getAllTablesAndColumns();
        }
        this.loading = res.inProgress;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getAllTablesAndColumns() {
    this.httpService.get({ url: `${env.apiUrl}/get-db-tables` })
      .then(tables => {
        this.tables = [];
        tables.forEach(table => {
          this.httpService.get({ url: `${env.apiUrl}/get-table-columns/${table}` })
            .then(columns => {
              this.tables.push({
                name: table,
                columns: columns,
              });
            })
            .catch(err => console.log(err));
        });
      })
      .catch(err => console.log(err));
  }

}
