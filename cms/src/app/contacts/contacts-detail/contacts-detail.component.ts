import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact.model';
import {ContactService} from "../contact.service";
import {ActivatedRoute, Router, Params} from "@angular/router";
@Component({
  selector: 'app-contact-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
@Input() contact: Contact;
  constructor(private contactsService: ContactService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.contact = this.contactsService.getContact(params['id']);
    });
  }
  onDelete() {
    this.contactsService.deleteContact(this.contact);
    this.router.navigate(['/contacts']);
  }
}
