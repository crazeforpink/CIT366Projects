import {Component, OnInit} from '@angular/core';
import {Contact} from "../contact.model";
import {ContactService} from "../contact.service";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  contact: Contact = null;
  groupContacts: Contact[] = [];
  original: Contact;
  editMode: boolean = false;
  invalidGroupContact: boolean = false;
  hasGroup: boolean = false;

  constructor(private contactsService: ContactService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.original = this.contactsService.getContact(params['id']);
      if (!this.original) {
        return;
      }
      this.editMode = true;
      this.contact = JSON.parse(JSON.stringify(this.original));

      if (this.hasGroup) {
        this.groupContacts = this.contact.group.slice();
      }

    });

  }

  onSubmit(form: NgForm) {
    const contact: Contact = new Contact(String(this.contactsService.getMaxId()),
      form.value.name, form.value.email, form.value.phone, form.value.url, this.groupContacts);


    if (this.editMode) {
      this.contactsService.updateContact(this.original, contact);
    }
    else {
      this.contactsService.addContact(contact);
    }
    this.router.navigate(['/contacts']);
  }


  onCancel() {
    this.router.navigate(['/contacts']);
  }


  isInvalidContact(newContact: Contact) {
    if (!newContact) {
      return true;
    }
    if (newContact.id === this.contact.id) {
      return true;
    }
    for (let i = 0; i < this.groupContacts.length; i++) {
      if (newContact.id === this.groupContacts[i].id) {
        return true;
      }
    }
    return false;
  }

  addToGroup($event: any) {

    let selectedContact: Contact = $event.dragData;
    this.invalidGroupContact = this.isInvalidContact(selectedContact);
    if (this.invalidGroupContact) {
      return;
    }
    console.log("addGroup" + JSON.stringify(selectedContact));
    this.groupContacts.push(selectedContact);
    this.invalidGroupContact = false;
  }

  onRemoveItem(idx: number) {
    if (idx < 0 || idx >= this.groupContacts.length)
      return;
    this.groupContacts.splice(idx, 1);
    this.invalidGroupContact = false;
  }


}
