import { Component } from '@angular/core';

import { HttpService } from '../../services/http.service';

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

  query = '-- Example: SELECT * FROM myTable WHERE id = 1';

  constructor(private httpService: HttpService) {}

  clearQuery() {
    this.query = '';
  }

  runQuery() {
    this.httpService.post({
      url: `${env.apiUrl}/query`,
      data: { query: this.query }
    })
    .then(res => {
      alert(JSON.stringify(res));
    })
    .catch(err => console.log(err));
  }

}
