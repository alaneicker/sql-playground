import { Component } from '@angular/core';

import { HttpService } from '../../services/http.service';
import { QueryResultService } from '../../services/query-result.service';

import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'app-query-editor',
  templateUrl: './query-editor.component.html',
  styleUrls: ['./query-editor.component.scss']
})
export class QueryEditorComponent {

  editorOptions = {
    theme: 'vs',
    language: 'sql',
    fontSize: 14,
    smoothScrolling: true,
    automaticLayout: true,
    renderLineHighlight: 'none',
    minimap: {
      enabled: false
    },
  };

  query = 'select * from settings';
  //query = '-- Example: SELECT * FROM myTable WHERE id = 1';

  constructor(
    private httpService: HttpService,
    private queryResultService: QueryResultService,
  ) {}

  clearQuery() {
    this.query = '';
  }

  runQuery() {
    this.httpService.post({
      url: `${env.apiUrl}/query`,
      data: { query: this.query }
    })
    .then(res => {
      this.queryResultService.updateQueryResult(res);
    })
    .catch(err => console.log(err));
  }

}
