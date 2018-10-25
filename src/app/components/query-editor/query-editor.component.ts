import { Component } from '@angular/core';

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

  query = '-- Replace this line with your query';

  clearQuery() {
    this.query = '';
  }

  runQuery() {
    alert(this.query);
  }

}
