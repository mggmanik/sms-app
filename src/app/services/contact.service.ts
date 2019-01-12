import {Injectable} from '@angular/core';
import {Contact} from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: Contact[] = [];

  constructor() {
  }

  onAddContacts(contact: Contact) {
    this.contacts.push(contact);
    console.log(this.contacts);
  }

  onViewContacts() {
    return this.contacts;
  }
}
