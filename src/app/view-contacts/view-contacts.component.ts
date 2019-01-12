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
    this.contacts = this.contactService.onViewContacts();
    console.log(this.contacts);
  }
}
