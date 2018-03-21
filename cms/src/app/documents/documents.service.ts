import {Injectable, Output, EventEmitter, OnDestroy, OnInit} from "@angular/core";
import {Document} from './document.model';
import {MOCKDOCUMENTS} from "./MOCKDOCUMENTS";
import {Subject} from "rxjs/Subject";
import { Subscription } from 'rxjs/Subscription';



@Injectable()
export class DocumentsService implements OnDestroy, OnInit{
  documentListChangedEvent: Subject<Document[]> = new Subject<Document[]>();
  documents: Document[] = [];
  maxDocumentId: number;
  subscription: Subscription;
  @Output() documentSelectedEvent: EventEmitter<Document> = new EventEmitter<Document>();
  @Output() documentChangedEvent: EventEmitter<Document[]> = new EventEmitter<Document[]>();

  constructor() {
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxId();
  }

  getDocuments(): Document[] {
    return this.documents.slice();
  }

  getDocument(id: string): Document {
    return this.documents.filter((document: Document) => {
      return document.id === id;
    })[0] || null;
  }

  addDocument(document: Document){
    if (document) {
      document.id = String(++this.maxDocumentId);

      this.documents.push(document);
      this.documentListChangedEvent.next(this.getDocuments());
    }
  }

  updateDocument(original: Document, updated: Document){
    var pos;
    if (original && updated && ( pos = this.documents.indexOf(original)) >= 0){
      updated.id = original.id;
      this.documents[pos] = updated;
      this.documentListChangedEvent.next(this.getDocuments());
    }
  }

  deleteDocument(document: Document) {
    if (document === null) {
      return;
    }
    const pos = this.documents.indexOf(document);
    if (pos < 0) {
      return;
    }
    this.documents.splice(pos, 1);
    this.documentChangedEvent.emit(this.documents.slice());
  }

  getMaxId(): number{
   let maxId: number = 0;
    this.documents.forEach ((document: Document) => {
     let currentId: number = Number( document.id );
    if (currentId > maxId){
      maxId = currentId;
    }
    });

    return maxId;
  }
  ngOnInit(){
    this.subscription = this.documentListChangedEvent.subscribe();
  }
  ngOnDestroy(){
    this.documentListChangedEvent.unsubscribe();
  }
}
