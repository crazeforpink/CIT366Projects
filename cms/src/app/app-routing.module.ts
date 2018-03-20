//export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import {ContactsComponent} from "./contacts/contacts.component";
import { ContactEditComponent} from "./contacts/contact-edit/contact-edit.component";
import { ContactsDetailComponent} from "./contacts/contacts-detail/contacts-detail.component";
import {DocumentsComponent} from "./documents/documents.component";
import {MessageListComponent} from "./messages/message-list/message-list.component";
import {DocumentEditComponent} from "./documents/document-edit/document-edit.component";
import {DocumentsDetailComponent} from "./documents/documents-detail/documents-detail.component";
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/documents', pathMatch: 'full' },
  { path: 'documents', component: DocumentsComponent, children: [
      { path: 'new', component: DocumentEditComponent },
      { path: ':id', component: DocumentsDetailComponent },
      { path: ':id/edit', component: DocumentEditComponent }
    ]},
  { path: 'messages', component: MessageListComponent},
  { path: 'contacts', component: ContactsComponent, children: [
      { path: 'new', component: ContactEditComponent },
      { path: ':id', component: ContactsDetailComponent },
      { path: ':id/edit', component: ContactEditComponent }
    ]}
];
@NgModule ({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule{}
