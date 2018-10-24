import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-editor',
  templateUrl: './query-editor.component.html',
  styleUrls: ['./query-editor.component.scss']
})
export class QueryEditorComponent implements OnInit {

  editorOptions = {
    theme: 'vs',
    language: 'sql',
    smoothScrolling: true,
    minimap: {
      enabled: false
    },
  };

  code = 'SELECT * FROM brewlog WHERE ID = 1';

  constructor() { }

  ngOnInit() {
  }

}
