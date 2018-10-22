import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { ConnectionStatusService } from '../../services/connection-status.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-db-table-list',
  templateUrl: './db-table-list.component.html',
  styleUrls: ['./db-table-list.component.scss']
})
export class DbTableListComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject();
  tables: any[] = [];
  tableColumns: any[];

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
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getAllTablesAndColumns() {
    this.httpService.get({ url: 'http://localhost:8080/api/get-db-tables' })
      .then(tables => {
        tables.forEach(table => {
          this.httpService.get({ url: `http://localhost:8080/api/get-table-columns/${table}` })
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
