import { Injectable, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from "./MOCKCONTACTS";
import {Subject} from "rxjs/Subject";
import {Subscription} from "rxjs/Subscription";
import {Response, Http} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class ContactService implements OnDestroy, OnInit {
  subscription: Subscription;
contacts: Contact[] = [];

  jsonUrl: string = 'https://test-eb48c.firebaseio.com/contacts.json';


  @Output() contactSelectedEvent: EventEmitter<Contact> = new EventEmitter<Contact>();
  //@Output() contactChange: EventEmitter<Contact[]> = new EventEmitter<Contact[]>();

  contactListChangedEvent: Subject<Contact[]> = new Subject<Contact[]>();
  maxContactId: number;

constructor(private http: Http) {
  this.contacts = MOCKCONTACTS;
  this.maxContactId = this.getMaxId();
  this.initContacts();
}
  getContacts(): Contact[] {
    return this.contacts.slice();
  }

    getContact(id: string): Contact {
    return this.contacts.filter((contact: Contact) => {
      return contact.id === id;
    })[0] || null;
    }
  deleteContact(contact: Contact){
    if (contact === null){
      return;
    }
    const pos = this.contacts.indexOf(contact);
    if (pos < 0){
      return;
    }
    this.contacts.splice(pos, 1);
    this.storeContact();
    //this.contactChange.emit(this.contacts.slice());
  }
  addContact(contact: Contact){
    if (contact) {
      contact.id = String(++this.maxContactId);

      this.contacts.push(contact);
      this.storeContact();
      //this.contactListChangedEvent.next(this.getContacts());
    }
  }
  updateContact(original: Contact, updated: Contact){
    var pos;
    if (original && updated && ( pos = this.contacts.indexOf(original)) >= 0){
      updated.id = original.id;
      this.contacts[pos] = updated;
      this.storeContact();
      //this.contactListChangedEvent.next(this.getContacts());
    }
  }

  getMaxId(): number {
    let maxId = 0;
    for (let contact of this.contacts){
      let currentId = +contact.id;
      if(currentId > maxId){
        maxId = currentId;
      }
    }
    return maxId;
  }


  storeContact(){
    // put request overwrites data
    this.http.put(this.jsonUrl, JSON.stringify(this.contacts))
      .subscribe(() => {
        this.contactListChangedEvent.next(this.getContacts());
      });
  }

  initContacts(){
    // Base off of the getRecipes from the downloadable
    // first get
    this.http.get(this.jsonUrl)
    // use the map function
      .map((response: Response) => {
        const contacts: Contact[] = response.json();
        return contacts;
      })
      .subscribe((contacts: Contact[]) => {
        this.contacts = contacts;
        this.maxContactId = this.getMaxId();
        this.contactListChangedEvent.next(this.getContacts());
      })
  }

  ngOnInit(){
    this.subscription = this.contactListChangedEvent.subscribe();
  }
  ngOnDestroy() {
    this.contactListChangedEvent.unsubscribe();
  }
}
