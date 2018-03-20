import {Component, OnInit} from '@angular/core';
import { Document } from '../document.model';
import {DocumentsService} from '../documents.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WindRefService} from "../../wind-ref.service";
@Component({
  selector: 'app-documents-detail',
  templateUrl: './documents-detail.component.html',
  styleUrls: ['./documents-detail.component.css']
})
export class DocumentsDetailComponent implements OnInit {
  //@Input() document: Document;
  document: Document;
  nativeWindow: any;
  constructor(private documentsService: DocumentsService,
              private windowRefService: WindRefService,
              private router: Router,
              private route: ActivatedRoute
              ) {
    this.nativeWindow = windowRefService.getNativeWindow();
  }
onDelete(){
    this.documentsService.deleteDocument(this.document)
this.router.navigate(['/documents']);
}

  onView(){
    if (this.document.url){
      this.nativeWindow.open(this.document.url);
    }
  }


  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{this.document = this.documentsService.getDocument(params['id']);
    })
  }

}
