import { Component, OnInit } from '@angular/core';
import { Document} from "../document.model";
import {DocumentsService} from "../documents.service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
document: Document;
originalDocument: Document;
editMode: boolean = false;

  constructor(private documentService: DocumentsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)  => {this.originalDocument = this.documentService.getDocument(params['id']);
      if (this.originalDocument) {
        this.editMode = true;
        this.document = JSON.parse(JSON.stringify(this.originalDocument));
      }
    });
  }

  onSubmit(form: NgForm){
    const document: Document = new Document(String(this.documentService.getMaxId()),
      form.value.title, form.value.description, form.value.documentUrl, null);


    if (this.editMode) {
      this.documentService.updateDocument(this.originalDocument, document);
    }
    else {
      this.documentService.addDocument(document);
    }
    this.router.navigate(['/documents']);
  }

  onCancel() {
    this.router.navigate(['/documents']);
  }

}
