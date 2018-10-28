import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { HttpService } from '../../shared/services/http.service';
import { QueryResultService } from '../query-result/query-result.service';
import { ConnectionStatusService } from '../connection-status/connection-status.service';
import { DemoLauncherService } from '../demo-launcher/demo-launcher.service';

import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'app-query-editor',
  templateUrl: './query-editor.component.html',
  styleUrls: ['./query-editor.component.scss']
})
export class QueryEditorComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject();

  editorOptions = {
    theme: 'vs',
    language: 'sql',
    fontSize: 15,
    smoothScrolling: true,
    automaticLayout: true,
    renderLineHighlight: 'none',
    minimap: {
      enabled: false
    },
  };

  defaultQuery = '-- Example: SELECT * FROM myTable WHERE id = 1';

  query = this.defaultQuery;

  constructor(
    private httpService: HttpService,
    private queryResultService: QueryResultService,
    private connectionStatusService: ConnectionStatusService,
    private demoLauncherService: DemoLauncherService,
  ) {}

  ngOnInit() {
    this.demoLauncherService.statusChange
      .takeUntil(this.unsubscribe$)
      .subscribe(status => {
        if (status.isRunning === true) {
          this.query = 'SELECT * FROM contacts';
          this.runQuery();
        }
      });

    this.connectionStatusService.statusChange
      .takeUntil(this.unsubscribe$)
      .subscribe((res) => {
        if (res.isConnected === true) {
          this.query = this.defaultQuery;
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  clearQuery() {
    this.query = '';
  }

  runQuery() {
    this.queryResultService.updateStatus({
      inProgress: true,
    });

    this.httpService.post({
      url: `${env.apiUrl}/query`,
      data: { query: this.query }
    })
    .then(res => {
      this.queryResultService.updateStatus({
        result: res,
        inProgress: false,
      });
    })
    .catch(err => console.log(err));
  }

}
