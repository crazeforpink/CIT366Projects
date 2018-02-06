import {Component, OnInit, Input} from '@angular/core';
import {Contact} from '../contact.model';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contacts-item.component.html',
  styleUrls: ['./contacts-item.component.css']
})
export class ContactsItemComponent implements OnInit {
@Input() contact:Contact;
  constructor() { }

  ngOnInit() {
  }

}
