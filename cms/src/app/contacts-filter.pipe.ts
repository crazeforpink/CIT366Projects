import { Pipe, PipeTransform } from '@angular/core';
import { Contact} from "./contacts/contact.model";
@Pipe({
  name: 'contactsFilter'
})
export class ContactsFilterPipe implements PipeTransform {

  transform(contacts: Contact[], term: string) {
    let filteredArray: Contact[] = [];

    filteredArray = contacts.filter(
      (contact: any) => contact.name.toLowerCase().includes(term.toLowerCase())
    );

    if (filteredArray.length < 1) {
      return contacts;
    }
    return filteredArray;
  }
}
