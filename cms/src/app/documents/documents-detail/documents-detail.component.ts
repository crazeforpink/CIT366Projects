import {Component, OnInit} from '@angular/core';
import { Document } from '../document.model';
import {DocumentsService} from '../documents.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
//import {WindRefService} from "../../win-ref.service";
@Component({
  selector: 'app-documents-detail',
  templateUrl: './documents-detail.component.html',
  styleUrls: ['./documents-detail.component.css']
})
export class DocumentsDetailComponent implements OnInit {
  //@Input() document: Document;
  document: Document;
  constructor(private documentsService: DocumentsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{this.document = this.documentsService.getDocument(params['id']);
    })
  }

}
