import {Component, OnInit} from '@angular/core';
import {Contact} from '../models/contact';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.css']
})
export class ViewContactsComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contactService.onViewContacts().subscribe(result => {
      this.contacts = result.contacts;
    });
  }

  // onLong press delete contacts

  onDelete(id: string) {
    this.contactService.deleteContact(id).subscribe(() => {
      this.contacts = this.contacts.filter(contact => contact._id !== id);
    });
  }
}
