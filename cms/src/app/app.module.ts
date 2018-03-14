import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ContactService} from "./contacts/contact.service";
import { ContactsComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactsDetailComponent } from './contacts/contacts-detail/contacts-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { ContactsItemComponent } from './contacts/contacts-item/contacts-item.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { MessageEditComponent } from './messages/message-edit/message-edit.component';
import { MessageItemComponent } from './messages/message-item/message-item.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentsListComponent } from './documents/documents-list/documents-list.component';
import { DocumentsItemComponent } from './documents/documents-item/documents-item.component';
import { DocumentsDetailComponent } from './documents/documents-detail/documents-detail.component';
import { DropdownDirective } from './dropdown.directive';
import {DocumentsService} from './documents/documents.service';
import {MessagesService } from './messages/messasges.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactListComponent,
    ContactsDetailComponent,
    MessagesComponent,
    ContactsItemComponent,
    MessageListComponent,
    MessageEditComponent,
    MessageItemComponent,
    DocumentsComponent,
    DocumentsListComponent,
    DocumentsItemComponent,
    DocumentsDetailComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContactService, DocumentsService, MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
