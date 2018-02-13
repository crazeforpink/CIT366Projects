import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {Document} from "../../documents/document.model";


@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.css']
})
export class DocumentsListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter <Document>();



  @Input() documents: Document[] = [
    new Document('1', 'file1', 'Classified information', 'www.google.com', 'null'),
    new Document('2', 'file2', 'Classified information', 'www.google.com', 'null'),
    new Document('3', 'file3', 'Classified information', 'www.google.com', 'null'),
    new Document('4', 'file4', 'Classified information', 'www.google.com', 'null'),
  ];
  constructor() { }

  ngOnInit() {
  }
  onSelectedDocument(document: Document){
    this.selectedDocumentEvent.emit(document);
  }
}
