import {Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from "../contact.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  //@Output() selectedContactEvent = new EventEmitter <Contact>();
  contacts: Contact[];
// contacts: Contact[] = [
//   new Contact("1", "Bro. Jackson", "jacksonk@byui.edu", "208-496-3771", "https://web.byui.edu/Directory/Employee/jacksonk.jpg", null),
//   new Contact( "2","Bro. Barzee","barzeer@byui.edu","208-496-3768","https://web.byui.edu/Directory/Employee/barzeer.jpg", null)
// ];
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();

    this.contactService.contactChange.subscribe((contacts: Contact[])=>{
      this.contacts = contacts;
    });
  }
onSelected(contact: Contact){
    this.contactService.contactSelectedEvent.emit(contact);
   // this.selectedContactEvent.emit(contact);
}
}
